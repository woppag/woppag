/* ==========================================================================
   WOPPAG KRAFT & FOODS — Main Application Controller
   Features: Category rendering with image lazy-loading, live search, tab filtering,
             modal dialog, FormSubmit.co RFQ form submission with loading & error handling.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const App = {
    activeFilter: 'all',
    searchQuery: '',
    activeCatId: null,

    /* 
      ======================================================================
      FORMSUBMIT.CO ENDPOINT CONFIGURATION (Direct Wholesale Inquiry Email)
      100% Free, Secure & Lifetime Direct Mail to woppag@gmail.com
      ======================================================================
    */
    backendEndpoint: 'https://formsubmit.co/ajax/woppag@gmail.com',

    init() {
      window.APP = this;
      this.bindEvents();
      this.populateCategoryDropdown();
      this.renderCategories();

      // Back to Top Scroll Listener
      const backTop = document.getElementById('back-top');
      if (backTop) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            backTop.classList.add('show');
          } else {
            backTop.classList.remove('show');
          }
        }, { passive: true });
      }

      // Re-render when language changes
      window.addEventListener('languageChanged', () => {
        this.populateCategoryDropdown();
        this.renderCategories();
        if (this.activeCatId !== null) {
          const catView = document.getElementById('category-products-view');
          if (catView && catView.style.display !== 'none') {
            this.openCategoryView(this.activeCatId);
          }
        }
      });
    },

    bindEvents() {
      // Language dropdown toggle
      const langBtn = document.getElementById('lang-btn');
      const langDropdown = document.getElementById('lang-dropdown');
      if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          langDropdown.classList.toggle('show');
        });
        document.addEventListener('click', () => langDropdown.classList.remove('show'));

        langDropdown.querySelectorAll('.lang-option').forEach(btn => {
          btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            I18N.setLanguage(lang);
            langDropdown.classList.remove('show');
          });
        });
      }

      // Mobile Menu Toggle & Click Outside Handler (Item 11)
      const mobileToggle = document.getElementById('mobile-toggle');
      const navMenu = document.getElementById('nav-menu');
      if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          navMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
          if (navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && e.target !== mobileToggle) {
              navMenu.classList.remove('active');
            }
          }
        });
      }

      // Filter Tabs
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.getAttribute('data-filter');
          this.activeFilter = filter;
          this.renderCategories();

          if (filter === 'all') {
            this.closeCategoryView();
          } else {
            const matchCat = CATS.find(c => c.group === filter);
            if (matchCat) {
              this.openCategoryView(matchCat.id);
            }
          }
        });
      });

      // Navbar "Categories" link click handler
      document.querySelectorAll('a[href="#categories"]').forEach(link => {
        link.addEventListener('click', () => {
          this.closeCategoryView();
        });
      });

      // Live Search
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.trim().toLowerCase();
          if (this.searchQuery) {
            this.closeCategoryView();
          }
          this.renderCategories();
        });
      }

      // Modal Close Listeners
      const modalBackdrop = document.getElementById('modal-backdrop');
      const modalClose = document.getElementById('modal-close');
      if (modalBackdrop && modalClose) {
        modalClose.addEventListener('click', () => this.closeModal());
        modalBackdrop.addEventListener('click', (e) => {
          if (e.target === modalBackdrop) this.closeModal();
        });
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
            this.closeModal();
          }
        });
      }

      // Modal Inquire CTA Button
      const modalCtaBtn = document.getElementById('modal-cta-btn');
      if (modalCtaBtn) {
        modalCtaBtn.addEventListener('click', () => {
          const catId = this.activeCatId;
          this.closeModal();
          const rfqSelect = document.getElementById('rfq-category');
          if (rfqSelect && catId !== null) {
            rfqSelect.value = 'cat-' + catId;
          }
          const rfqSection = document.getElementById('quote');
          if (rfqSection) {
            rfqSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      // RFQ Form Submission Handler with FormSubmit.co AJAX (100% Free & Direct Mail)
      const rfqForm = document.getElementById('rfq-form');
      if (rfqForm) {
        rfqForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const submitBtn = rfqForm.querySelector('button[type="submit"]');
          const originalBtnText = submitBtn ? submitBtn.innerHTML : '';

          // (a) Loading state
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = I18N.getText('form_loading');
          }

          const formData = new FormData(rfqForm);
          formData.append('_subject', '⚡ New Wholesale Inquiry — WOPPAG Website');
          formData.append('_captcha', 'false');
          formData.append('_template', 'table');

          try {
            const response = await fetch(this.backendEndpoint, {
              method: 'POST',
              headers: {
                'Accept': 'application/json'
              },
              body: formData
            });

            if (response.ok || response.status === 200) {
              this.showToast(I18N.getText('form_success'));
              rfqForm.reset();
            } else {
              this.showToast(I18N.getText('form_error'), true);
            }
          } catch (err) {
            this.showToast(I18N.getText('form_error'), true);
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalBtnText;
            }
          }
        });
      }
    },

    getCurrentLang() {
      return document.documentElement.lang || 'en';
    },

    pickTranslation(obj) {
      if (!obj) return '';
      const lang = this.getCurrentLang();
      return obj[lang] || obj.en || '';
    },

    renderCategories() {
      const grid = document.getElementById('categories-grid');
      if (!grid) return;

      const query = this.searchQuery;

      const filtered = CATS.filter(cat => {
        // Group filter
        if (this.activeFilter !== 'all' && cat.group !== this.activeFilter) {
          return false;
        }

        // Search query filter
        if (query) {
          const title = this.pickTranslation(cat.title).toLowerCase();
          const desc = this.pickTranslation(cat.desc).toLowerCase();
          const chip = this.pickTranslation(cat.chip).toLowerCase();
          const subprods = cat.products ? cat.products.map(p => this.pickTranslation(p.name).toLowerCase()).join(' ') : '';

          return title.includes(query) || desc.includes(query) || chip.includes(query) || subprods.includes(query);
        }

        return true;
      });

      // Item 7: Localized "No categories found"
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
            <h3>${I18N.getText('no_results_title')}</h3>
            <p>${I18N.getText('no_results_desc')}</p>
          </div>
        `;
        return;
      }

      // Item 6: Localized "View Specifications" & Direction-aware arrow
      const viewSpecsText = I18N.getText('cat_view_specs') || 'Explore Category';
      const arrow = document.documentElement.dir === 'rtl' ? '←' : '→';

      grid.innerHTML = filtered.map(cat => {
        const title = this.pickTranslation(cat.title);
        const desc = this.pickTranslation(cat.desc);
        const chip = this.pickTranslation(cat.chip);
        const imgSrc = cat.img || './assets/images/og-image.jpg';

        const subCount = cat.products ? cat.products.length : 5;
        const firstSpec = cat.specs && cat.specs[0] ? `${this.pickTranslation(cat.specs[0].k)}: ${this.pickTranslation(cat.specs[0].v)}` : '';
        const secondSpec = cat.specs && cat.specs[1] ? `${this.pickTranslation(cat.specs[1].v)}` : '';

        const prodCountText = I18N.getText('badge_products_count') || 'Products';
        const lineupCountText = I18N.getText('badge_lineup_count') || 'Products Available';
        const premiumSkuText = I18N.getText('badge_premium_sku') || 'Premium SKU';

        return `
          <article class="cat-card" data-cat-id="${cat.id}" role="button" tabindex="0">
            <div class="cat-img-wrapper" style="height: 190px; width: 100%; overflow: hidden; border-radius: var(--radius-md); margin-bottom: 1rem; position: relative; background: #07131e;">
              <img src="${imgSrc}" alt="${title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" class="cat-card-img">
              <div style="position: absolute; top: 10px; left: 10px; background: rgba(7, 19, 30, 0.85); backdrop-filter: blur(8px); padding: 0.25rem 0.65rem; border-radius: var(--radius-full); font-size: 0.72rem; font-weight: 700; color: #fff; border: 1px solid var(--border-subtle);">
                📦 ${subCount} ${prodCountText}
              </div>
              <div style="position: absolute; top: 10px; right: 10px; background: rgba(7, 19, 30, 0.85); backdrop-filter: blur(8px); padding: 0.25rem 0.65rem; border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 700; color: var(--accent-gold); border: 1px solid var(--border-gold);">
                ${cat.icon} ${chip}
              </div>
            </div>
            <div class="cat-body">
              <h3>${title}</h3>
              <p style="margin-bottom: 0.75rem;">${desc}</p>
              ${firstSpec ? `
                <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem;">
                  <span style="background: var(--accent-gold-light); color: var(--accent-gold); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; border: 1px solid rgba(212, 162, 74, 0.2);">
                    ⚡ ${firstSpec}
                  </span>
                </div>
              ` : ''}
            </div>
            <div class="cat-footer" style="margin-top: 1rem;">
              <span>${viewSpecsText}</span>
              <span class="cat-arrow">${arrow}</span>
            </div>
          </article>
        `;
      }).join('');

      // Add click & keyboard listeners to rendered category cards
      grid.querySelectorAll('.cat-card').forEach(card => {
        const catId = parseInt(card.getAttribute('data-cat-id'), 10);
        const open = () => this.openCategoryView(catId);
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
          }
        });
      });

      // Bind Back Button if present
      const backBtn = document.getElementById('btn-back-to-cats');
      if (backBtn && !backBtn.dataset.bound) {
        backBtn.dataset.bound = 'true';
        backBtn.addEventListener('click', () => this.closeCategoryView());
      }
    },

    openCategoryView(catId) {
      this.activeCatId = catId;
      const cat = CATS.find(x => x.id === catId);
      if (!cat) return;

      const allView = document.getElementById('all-categories-view');
      const catView = document.getElementById('category-products-view');
      if (!allView || !catView) return;

      allView.style.display = 'none';
      catView.style.display = 'block';
      catView.classList.remove('cat-view-fade-in');
      void catView.offsetWidth; // trigger reflow
      catView.classList.add('cat-view-fade-in');

      // Scroll to categories section top
      const catSec = document.getElementById('categories');
      if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });

      // Render Category Hero Header Banner
      const header = document.getElementById('cat-view-header');
      const title = this.pickTranslation(cat.title);
      const desc = this.pickTranslation(cat.desc);
      const chip = this.pickTranslation(cat.chip);
      const imgSrc = cat.img || './assets/images/og-image.jpg';

      if (header) {
        header.innerHTML = `
          <div style="background: linear-gradient(135deg, rgba(7, 19, 30, 0.95), rgba(15, 33, 50, 0.95)); border: 1px solid var(--border-gold); border-radius: var(--radius-lg); padding: 2rem; display: grid; grid-template-columns: 1fr 280px; gap: 2rem; align-items: center; box-shadow: var(--shadow-lg);">
            <div>
              <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.8rem;">
                <span style="font-size: 2rem;">${cat.icon}</span>
                <span class="badge" style="background: var(--accent-gold-light); color: var(--accent-gold); border: 1px solid var(--border-gold);">${chip}</span>
              </div>
              <h2 style="font-size: 2.2rem; font-weight: 800; color: #fff; margin-bottom: 0.8rem; line-height: 1.2;">${title}</h2>
              <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>
              
              <!-- Category Specs Summary Bar -->
              <div style="display: flex; flex-wrap: wrap; gap: 0.6rem;">
                ${cat.specs ? cat.specs.map(s => `
                  <div style="background: rgba(212, 162, 74, 0.08); border: 1px solid rgba(212, 162, 74, 0.25); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.8rem;">
                    <span style="color: var(--text-muted);">${this.pickTranslation(s.k)}:</span>
                    <strong style="color: var(--accent-gold); font-weight: 600;">${this.pickTranslation(s.v)}</strong>
                  </div>
                `).join('') : ''}
              </div>
            </div>

            <div style="height: 220px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-gold); position: relative;">
              <img src="${imgSrc}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        `;
      }

      // Update Section Titles
      const countSpan = document.getElementById('cat-view-products-count');
      const lineupCountText = I18N.getText('badge_lineup_count') || 'Products Available';
      if (countSpan) {
        countSpan.textContent = `${cat.products ? cat.products.length : 0} ${lineupCountText}`;
      }

      // Render Quick Switcher Category Chips Bar
      const switcher = document.getElementById('cat-quick-switcher');
      if (switcher) {
        switcher.innerHTML = CATS.map(c => {
          const isActive = c.id === catId;
          const cChip = this.pickTranslation(c.chip);
          return `
            <button class="filter-btn ${isActive ? 'active' : ''}" onclick="APP.openCategoryView(${c.id})" style="white-space: nowrap; font-size: 0.78rem; padding: 0.35rem 0.75rem;">
              ${c.icon} ${cChip}
            </button>
          `;
        }).join('');
      }

      // Render Bottom Category Switcher Cards Grid (Navigate from below)
      const bottomGrid = document.getElementById('cat-bottom-switcher-grid');
      if (bottomGrid) {
        const otherCats = CATS.filter(c => c.id !== catId);
        const viewSpecsText = I18N.getText('cat_view_specs') || 'View Category';
        const arrow = document.documentElement.dir === 'rtl' ? '←' : '→';

        bottomGrid.innerHTML = otherCats.map(c => {
          const cTitle = this.pickTranslation(c.title);
          const cDesc = this.pickTranslation(c.desc);
          const cChip = this.pickTranslation(c.chip);
          const cImg = c.img || './assets/images/og-image.jpg';
          const cSubCount = c.products ? c.products.length : 5;

          return `
            <article class="cat-card" onclick="APP.openCategoryView(${c.id})" style="cursor: pointer;">
              <div class="cat-img-wrapper" style="height: 140px; width: 100%; overflow: hidden; border-radius: var(--radius-md); margin-bottom: 0.8rem; position: relative; background: #07131e;">
                <img src="${cImg}" alt="${cTitle}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;" class="cat-card-img">
                <div style="position: absolute; top: 8px; left: 8px; background: rgba(7, 19, 30, 0.85); backdrop-filter: blur(8px); padding: 0.2rem 0.5rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; color: #fff; border: 1px solid var(--border-subtle);">
                  📦 ${cSubCount} ${I18N.getText('badge_products_count')}
                </div>
                <div style="position: absolute; top: 8px; right: 8px; background: rgba(7, 19, 30, 0.85); backdrop-filter: blur(8px); padding: 0.2rem 0.5rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 700; color: var(--accent-gold); border: 1px solid var(--border-gold);">
                  ${c.icon} ${cChip}
                </div>
              </div>
              <div class="cat-body">
                <h4 style="font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem;">${cTitle}</h4>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; margin-bottom: 0.5rem;">${cDesc.substring(0, 70)}...</p>
              </div>
              <div class="cat-footer" style="margin-top: 0.6rem; font-size: 0.8rem;">
                <span>${viewSpecsText}</span>
                <span class="cat-arrow">${arrow}</span>
              </div>
            </article>
          `;
        }).join('');
      }

      // Render Products Grid inside Category
      this.renderCategoryProducts(cat);
    },

    closeCategoryView() {
      const allView = document.getElementById('all-categories-view');
      const catView = document.getElementById('category-products-view');
      if (allView && catView) {
        catView.style.display = 'none';
        allView.style.display = 'block';
        allView.classList.remove('cat-view-fade-in');
        void allView.offsetWidth; // trigger reflow
        allView.classList.add('cat-view-fade-in');

        const catSec = document.getElementById('categories');
        if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
      }
    },

    renderCategoryProducts(cat) {
      const grid = document.getElementById('cat-products-grid');
      if (!grid || !cat.products) return;

      const inspectText = I18N.getText('btn_inspect_product') || 'Inspect Product →';
      const itemQuoteText = I18N.getText('btn_item_quote') || 'Request Quote';
      const premiumSkuText = I18N.getText('badge_premium_sku') || 'Premium SKU';

      grid.innerHTML = cat.products.map((p, idx) => {
        const pName = this.pickTranslation(p.name);
        const pImg = p.img || cat.img || './assets/images/og-image.jpg';
        const pIcon = p.icon || cat.icon || '📦';
        const pDescText = p.desc ? this.pickTranslation(p.desc) : `${pName} — ${this.pickTranslation(cat.desc)}`;
        const pSpecText = p.spec ? `${this.pickTranslation(p.spec.k)}: ${this.pickTranslation(p.spec.v)}` : (cat.specs && cat.specs[0] ? `${this.pickTranslation(cat.specs[0].k)}: ${this.pickTranslation(cat.specs[0].v)}` : '');

        return `
          <article class="cat-card product-card-item" data-cat-id="${cat.id}" data-prod-idx="${idx}" role="button" tabindex="0" style="cursor: pointer; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="cat-img-wrapper" style="height: 180px; width: 100%; overflow: hidden; border-radius: var(--radius-md); margin-bottom: 1rem; position: relative; background: #07131e;">
                <img src="${pImg}" alt="${pName}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" class="cat-card-img">
                <div style="position: absolute; top: 10px; left: 10px; background: rgba(7, 19, 30, 0.85); backdrop-filter: blur(8px); padding: 0.25rem 0.65rem; border-radius: var(--radius-full); font-size: 0.72rem; font-weight: 700; color: #fff; border: 1px solid var(--border-subtle);">
                  ${pIcon} ${premiumSkuText}
                </div>
              </div>
              
              <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.6rem; line-height: 1.3;">${pName}</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.8rem;">
                ${pDescText}
              </p>
              
              ${pSpecText ? `
                <div style="margin-bottom: 1rem;">
                  <span style="background: var(--accent-gold-light); color: var(--accent-gold); padding: 0.2rem 0.55rem; border-radius: 4px; font-size: 0.72rem; font-weight: 600; border: 1px solid rgba(212, 162, 74, 0.2);">
                    ⚡ ${pSpecText}
                  </span>
                </div>
              ` : ''}
            </div>

            <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
              <button type="button" class="btn btn-outline btn-sm btn-inspect-action" style="flex: 1; border-color: var(--border-gold); color: var(--accent-gold); text-align: center;">
                ${inspectText}
              </button>
              <button type="button" class="btn btn-primary btn-sm btn-quote-action" style="padding: 0.4rem 0.7rem;">
                ⚡
              </button>
            </div>
          </article>
        `;
      }).join('');

      // Bind Event Listeners robustly
      grid.querySelectorAll('.product-card-item').forEach(card => {
        const catId = parseInt(card.getAttribute('data-cat-id'), 10);
        const prodIdx = parseInt(card.getAttribute('data-prod-idx'), 10);
        const p = cat.products[prodIdx];
        const pName = p ? this.pickTranslation(p.name) : '';

        const open = (e) => {
          if (e) e.stopPropagation();
          this.openProductModal(catId, prodIdx);
        };

        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open(e);
          }
        });

        const inspectBtn = card.querySelector('.btn-inspect-action');
        if (inspectBtn) {
          inspectBtn.addEventListener('click', open);
        }

        const quoteBtn = card.querySelector('.btn-quote-action');
        if (quoteBtn) {
          quoteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.requestProductQuote(pName, `cat-${catId}`);
          });
        }
      });
    },

    openProductModal(catId, prodIdx) {
      const cat = CATS.find(x => x.id === catId);
      if (!cat || !cat.products || !cat.products[prodIdx]) return;

      const p = cat.products[prodIdx];
      const pName = this.pickTranslation(p.name);
      
      // Directly open quote form for the selected item (No popup modals)
      this.requestProductQuote(pName, `cat-${cat.id}`);
    },

    closeProductInspection() {
      const inlineView = document.getElementById('single-product-inspection-view');
      if (inlineView) {
        inlineView.style.display = 'none';
      }
    },

    openModal(catId) {
      this.openCategoryView(catId);
    },

    closeModal() {
      const backdrop = document.getElementById('modal-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
        backdrop.style.display = 'none';
        document.body.style.overflow = '';
      }
    },

    requestProductQuote(productName, catValue) {
      this.closeModal();
      const quoteSec = document.getElementById('quote');
      if (quoteSec) quoteSec.scrollIntoView({ behavior: 'smooth' });

      const catSelect = document.getElementById('rfq-category');
      if (catSelect && catValue) {
        catSelect.value = catValue;
      }

      const msgInput = document.getElementById('rfq-message');
      const prefix = I18N.getText('rfq_inquiry_prefix') || 'Inquiry regarding:';
      const targetSpecs = I18N.getText('rfq_target_specs') || 'Target Quantity / Specs:';

      if (msgInput) {
        msgInput.value = `${prefix} ${productName}\n${targetSpecs} `;
        msgInput.focus();
      }
    },

    populateCategoryDropdown() {
      const select = document.getElementById('rfq-category');
      if (!select) return;

      const prevValue = select.value;
      select.innerHTML = `
        <option value="" disabled selected>${I18N.getText('form_cat_select')}</option>
      ` + CATS.map(cat => `
        <option value="cat-${cat.id}">${cat.icon} ${this.pickTranslation(cat.title)}</option>
      `).join('');

      if (prevValue) select.value = prevValue;
    },

    showToast(message, isError = false) {
      const toast = document.getElementById('toast');
      if (!toast) return;
      toast.textContent = message;
      if (isError) {
        toast.style.background = '#ef4444';
      } else {
        toast.style.background = 'var(--accent-green)';
      }
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
    }
  };

  window.APP = App;
  App.init();
});
