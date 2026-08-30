/* ==========================================================================
   WOPPAG KRAFT & FOODS — Internationalization (i18n) Engine
   Supported Languages: EN (Default), RU, RO, DE, FR, AR (RTL)
   Features: Dynamic DOM translation, URL query cleanup, RTL support for Arabic,
             dynamic SEO meta & Open Graph updates.
   ========================================================================== */

const I18N = {
  supportedLangs: ['en', 'ru', 'ro', 'de', 'fr', 'ar'],
  defaultLang: 'en',

  translations: {
    // Meta & SEO
    meta_title: {
      en: 'WOPPAG KRAFT & FOODS — Wholesale Packaging Manufacturer | Factory Direct B2B',
      ru: 'WOPPAG KRAFT & FOODS — Оптовый производитель упаковки | Прямые поставки B2B',
      ro: 'WOPPAG KRAFT & FOODS — Producător de ambalaje angro | Direct din fabrică B2B',
      de: 'WOPPAG KRAFT & FOODS — Hersteller von Großhandelsverpackungen | Direkt vom Werk B2B',
      fr: 'WOPPAG KRAFT & FOODS — Fabricant d’emballages en gros | Direct usine B2B',
      ar: 'WOPPAG KRAFT & FOODS — المصنع المباشر لتصنيع مواد التعبئة والتغليف بالجملة | B2B'
    },
    meta_description: {
      en: 'WOPPAG KRAFT & FOODS — Direct factory wholesale packaging manufacturer. Kraft bags, biodegradable pouches, napkins, perfume bottles, HoReCa & hotel amenities. OEM custom branding. Worldwide B2B export.',
      ru: 'WOPPAG KRAFT & FOODS — Производитель упаковки напрямую с завода. Крафт пакеты, биоразлагаемые дойпаки, салфетки, отельный текстиль. OEM логотип. Международный экспорт B2B.',
      ro: 'WOPPAG KRAFT & FOODS — Producător direct de ambalaje angro. Pungi kraft, doypack biodegradabile, șervețele, consumabile hotel. Branding OEM. Export global B2B.',
      de: 'WOPPAG KRAFT & FOODS — Direkt vom Werk hergestellte Verpackungen. Kraftpapiertaschen, biologisch abbaubare Beutel, Servietten, Hotelbedarf. OEM Branding. Weltweiter B2B-Export.',
      fr: 'WOPPAG KRAFT & FOODS — Fabricant d’emballages en gros direct usine. Sacs kraft, sachets biodégradables, serviettes, fournitures d’hôtel. Marque OEM. Export international B2B.',
      ar: 'WOPPAG KRAFT & FOODS — المصنع المباشر لتصنيع مواد التعبئة والتغليف بالجملة. أكياس الكرافت، عبوات صديقة للبيئة، مناديل معطرة، ومستلزمات الفنادق. طباعة الشعارات والتصدير العالمي B2B.'
    },

    // Navigation
    lang_select_title: { en: '🌐 Select Language', ru: '🌐 Выберите язык', ro: '🌐 Selectează limba', de: '🌐 Sprache wählen', fr: '🌐 Choisir la langue', ar: '🌐 اختر اللغة' },
    nav_home: { en: 'Home', ru: 'Главная', ro: 'Acasă', de: 'Startseite', fr: 'Accueil', ar: 'الرئيسية' },
    nav_why: { en: 'Why WOPPAG', ru: 'Почему WOPPAG', ro: 'De ce WOPPAG', de: 'Warum WOPPAG', fr: 'Pourquoi WOPPAG', ar: 'لماذا WOPPAG' },
    nav_categories: { en: 'Categories', ru: 'Категории', ro: 'Categorii', de: 'Kategorien', fr: 'Catégories', ar: 'الفئات والمنتجات' },
    nav_process: { en: 'Workflow', ru: 'Процесс', ro: 'Proces', de: 'Ablauf', fr: 'Processus', ar: 'خطوات العمل' },
    nav_contact: { en: 'Contact & Quote', ru: 'Контакты & Запрос', ro: 'Contact & Oferta', de: 'Kontakt & Angebot', fr: 'Contact & Devis', ar: 'طلب سعر والتواصل' },
    btn_quote: { en: 'Request Quote', ru: 'Запросить цену', ro: 'Solicită ofertă', de: 'Angebot anfordern', fr: 'Demander un devis', ar: 'طلب عرض سعر' },

    // Hero Section
    hero_badge: { en: '100% Direct Manufacturer • Global B2B Export', ru: '100% Прямой производитель • Мировой экспорт B2B', ro: '100% Producător direct • Export global B2B', de: '100% Direkthersteller • Globaler B2B-Export', fr: '100% Fabricant direct • Exportation globale B2B', ar: '100% تصنيع مباشر • تصدير عالمي B2B' },
    hero_title_1: { en: 'Industrial Wholesale Packaging & Hotel Supplies', ru: 'Промышленная оптовая упаковка и отельный текстиль', ro: 'Ambalaje industriale angro & Consumabile hoteliere', de: 'Industrielle Großhandelsverpackungen & Hotelbedarf', fr: 'Emballages industriels en gros & Fournitures d’hôtel', ar: 'تعبئة وتغليف صناعي بالجملة ومستلزمات الفنادق' },
    hero_title_2: { en: 'Built at the Factory Source.', ru: 'Напрямую от завода-изготовителя.', ro: 'Construit direct la sursa fabricii.', de: 'Direkt aus der eigenen Produktion.', fr: 'Fabriqué directement à la source.', ar: 'مباشرة من أراض المصنع.' },
    hero_desc: { en: 'High-volume production of food portioning, biodegradable pouches, paper bags, custom wet wipes, perfume bottles, and luxury hotel amenities for international importers & distributors.', ru: 'Масштабное производство фасовки продуктов, биоразлагаемых дойпаков, крафт-пакетов, влажных салфеток с логотипом и косметики для отелей.', ro: 'Producție de mare volum pentru porționare alimentară, pungi biodegradabile, sacoșe hârtie, șervețele umede și ambalaje hotel.', de: 'Großserienfertigung von Lebensmittelportionen, biologisch abbaubaren Beuteln, Papiertaschen, feuchten Tüchern und Hotelbedarf.', fr: 'Production à grand volume de portionnement alimentaire, sachets biodégradables, sacs en papier, lingettes et produits d’accueil.', ar: 'إنتاج بكميات ضخمة لتغليف الأغذية، الأكياس القابلة للتحلل العضوي، أكياس الكرافت، المناديل المبللة، ومستلزمات الفنادق.' },
    hero_cta_cat: { en: 'Explore 20 Categories', ru: 'Смотреть 20 категорий', ro: 'Explorează 20 categorii', de: '20 Kategorien entdecken', fr: 'Explorer 20 catégories', ar: 'استكشاف 20 فئة' },
    hero_cta_rfq: { en: 'Get Factory Pricing', ru: 'Получить оптовые цены', ro: 'Obține prețuri fabrică', de: 'Werks-Preise erhalten', fr: 'Obtenir les prix usine', ar: 'الحصول على أسعار المصنع' },

    hero_visual_2_desc: { en: 'Up to 6-color flexographic & gravure logo printing for high brand visibility.', ru: 'Печать логотипа до 6 цветов флексографией для узнаваемости бренда.', ro: 'Imprimare flexografică până la 6 culori pentru vizibilitate maximă.', de: 'Flexodruck bis zu 6 Farben für hohe Markenpräsenz.', fr: 'Impression flexographique jusqu’à 6 couleurs pour votre marque.', ar: 'طباعة فلكسوغرافية حتى 6 ألوان لتعزيز العلامة التجارية.' },
    hero_visual_3_desc: { en: 'Full container load (FCL) and pallet shipping handling for global export markets.', ru: 'Доставка контейнерами (FCL) и паллетами для международных рынков экспорта.', ro: 'Livrare containere FCL și paleți pentru piețele globale de export.', de: 'Container- (FCL) und Palettenversand für globale Exportmärkte.', fr: 'Expédition par conteneurs complets (FCL) et palettes pour les marchés d’exportation internationaux.', ar: 'شحن الحاويات الكاملة (FCL) والباليتات للتصدير لكافة الأسواق العالمية.' },

    // Stats
    stat_cats_num: { en: '20', ru: '20', ro: '20', de: '20', fr: '20', ar: '٢٠' },
    stat_cats_lbl: { en: 'Product Categories', ru: 'Категорий продукции', ro: 'Categorii produse', de: 'Produktkategorien', fr: 'Catégories de produits', ar: 'فئة منتجات متكاملة' },
    stat_countries_num: { en: 'Global', ru: 'Глобал', ro: 'Global', de: 'Global', fr: 'Global', ar: 'عالمي' },
    stat_countries_lbl: { en: 'Worldwide Export', ru: 'Международный экспорт', ro: 'Export global', de: 'Weltweiter Export', fr: 'Export international', ar: 'تصدير عالمي' },
    stat_units_num: { en: 'High', ru: 'Опт', ro: 'Volum', de: 'Gross', fr: 'Gros', ar: 'عالي' },
    stat_units_lbl: { en: 'Production Volume', ru: 'Масштаб производства', ro: 'Capacitate producție', de: 'Produktionskapazität', fr: 'Capacité de production', ar: 'طاقة إنتاجية ضخمة' },
    stat_moq_num: { en: '100%', ru: '100%', ro: '100%', de: '100%', fr: '100%', ar: '١٠٠٪' },
    stat_moq_lbl: { en: 'OEM Custom Branding', ru: 'OEM Брендирование', ro: 'Branding OEM personalizat', de: 'OEM Eigenmarke', fr: 'Personnalisation OEM', ar: 'تصنيع حسب طلب الشعار' },

    // Features Section
    badge_b2b: { en: 'B2B Manufacturing Advantage', ru: 'Преимущество B2B производства', ro: 'Avantajul producției B2B', de: 'B2B-Fertigungsvorteil', fr: 'Avantage fabrication B2B', ar: 'مزايا التصنيع المباشر B2B' },
    why_title: { en: 'Why Global Distributors Choose WOPPAG KRAFT & FOODS', ru: 'Почему дистрибьюторы выбирают WOPPAG KRAFT & FOODS', ro: 'De ce distribuitorii globali aleg WOPPAG KRAFT & FOODS', de: 'Warum globale Händler WOPPAG KRAFT & FOODS wählen', fr: 'Pourquoi les distributeurs choisissent WOPPAG KRAFT & FOODS', ar: 'لماذا يختار WOPPAG KRAFT & FOODS الموزعون المستوردون حول العالم' },
    why_sub: { en: 'Direct manufacturing capabilities engineered for high-volume B2B global trade.', ru: 'Прямые мощности завода для международных оптовых поставок.', ro: 'Capacități de producție directă concepute pentru comerț B2B angro.', de: 'Direkte Fertigungskapazitäten für den weltweiten B2B-Großhandel.', fr: 'Capacités de fabrication directe conçues pour le commerce B2B.', ar: 'إمكانيات التصنيع المباشر المصممة لخدمة التوريد والتجارة العالمية.' },
    why_1_title: { en: 'Direct Factory Prices', ru: 'Цены напрямую с завода', ro: 'Prețuri directe din fabrică', de: 'Direkte Werkspreise', fr: 'Prix direct usine', ar: 'أسعار المصنع المباشرة' },
    why_1_desc: { en: 'Cut middleman markups and work directly with our manufacturing floor.', ru: 'Без посредников и наценок — прямая работа с производственными цехами.', ro: 'Elimină intermediarii și lucrează direct cu fabrica noastră.', de: 'Ohne Zwischenhändler direkt mit unserer Produktion arbeiten.', fr: 'Éliminez les intermédiaires et travaillez directement avec l’usine.', ar: 'شراء مباشر بدون وسطاء للاستفادة من تكلفة المصنع الحقيقية.' },
    why_2_title: { en: 'Custom OEM Logo & Branding', ru: 'Кастомный OEM логотип', ro: 'Branding OEM personalizat', de: 'Individuelles OEM-Branding', fr: 'Marquage OEM sur-mesure', ar: 'طباعة وتصميم الشعار المخصص' },
    why_2_desc: { en: 'Custom die-lines, exact Pantone color matching, and private label packaging.', ru: 'Индивидуальные чертежи, точное соответствие Pantone и упаковка под вашей маркой.', ro: 'Șabloane personalizate, culori Pantone exacte și ambalare marca proprie.', de: 'Sonderanfertigungen, exakte Pantone-Farben und Eigenmarkenverpackung.', fr: 'Découpes sur-mesure, respect des couleurs Pantone et emballage sous votre marque.', ar: 'تصميم قوالب خاصة، طلاء ألوان بانطون دقيق، وتغليف العلامة الخاصة.' },
    why_3_title: { en: 'Quality & Food Grade Standards', ru: 'Стандарты качества и пищевой безопасности', ro: 'Standarde de calitate și siguranță alimentară', de: 'Qualitäts- & Lebensmittelsicherheitsstandards', fr: 'Normes de qualité et sécurité alimentaire', ar: 'معايير الجودة والسلامة الغذائية' },
    why_3_desc: { en: 'Manufactured in compliance with international quality, food safety, and environmental standards.', ru: 'Производится на предприятиях, соответствующих международным стандартам качества, пищевой безопасности и экологии.', ro: 'Fabricat în conformitate cu standardele internaționale de calitate, siguranță alimentară și mediu.', de: 'Hergestellt in Übereinstimmung mit internationalen Qualitäts-, Lebensmittelsicherheits- und Umweltstandards.', fr: 'Fabriqué conformément aux normes internationales de qualité, de sécurité alimentaire et d’environnement.', ar: 'يتم التصنيع وفقاً للمعايير الدولية المعتمدة للجودة والسلامة الغذائية وحماية البيئة.' },
    why_4_title: { en: 'Global Logistics & Freight Handling', ru: 'Мировая логистика и экспорт', ro: 'Logistică globală & Transport', de: 'Globale Logistik & Frachtabwicklung', fr: 'Logistique & Transit international', ar: 'خدمات الشحن والتصدير الدولي' },
    why_4_desc: { en: 'Export documentation, customs clearance, and door-to-port container delivery.', ru: 'Экспортная документация, таможенное оформление и контейнерная доставка в порт.', ro: 'Documentație de export, vămuire și livrare containere până în port.', de: 'Exportdokumente, Zollabwicklung und Containerlieferung frei Hafen.', fr: 'Formalités d’exportation, dédouanement et livraison par conteneur.', ar: 'وثائق التصدير والتخليص الجمركي وتسليم الحاويات إلى الموانئ العالمية.' },

    // Categories Controls & Filter Buttons
    badge_catalog: { en: 'Full Manufacturing Catalog', ru: 'Полный каталог продукции', ro: 'Catalogul complet de producție', de: 'Vollständiger Fertigungskatalog', fr: 'Catalogue de fabrication complet', ar: 'الدليل الكامل للمنتجات' },
    cat_header_title: { en: 'Product Categories Showcase', ru: 'Каталог продукции по категориям', ro: 'Catalog produse pe categorii', de: 'Produktkatalog nach Kategorien', fr: 'Catalogue de produits par catégorie', ar: 'دليل المنتجات والفئات' },
    cat_header_sub: { en: 'Click on any category card to view specs, sub-products, and submit quote inquiries.', ru: 'Нажмите на любую карточку категории для просмотра характеристик и отправки запроса.', ro: 'Apasă pe orice categorie pentru specificații, sub-produse și solicitare ofertă.', de: 'Klicken Sie auf eine Kategorie für Details, Produkte und Angeboten.', fr: 'Cliquez sur une catégorie pour voir les détails et demander un devis.', ar: 'اضغط على أي فئة للاطلاع على المواصفات والمنتجات وطلب عرض السعر.' },
    search_placeholder: { en: 'Search categories or products (e.g. Kraft bags, Wet wipes, Perfume bottles)...', ru: 'Поиск по категориям или продуктам (напр. Крафт пакеты, Флаконы)...', ro: 'Caută categorii sau produse (ex. Pungi kraft, Sticle parfum)...', de: 'Kategorien oder Produkte suchen (z.B. Kraftbeutel, Parfümflakons)...', fr: 'Rechercher des catégories ou produits (ex. Sacs kraft, Flacons)...', ar: 'ابحث في الفئات والمنتجات (مثلاً أكياس كرافت، زجاجات عطور)...' },
    
    // Modal & Catalog Navigation
    btn_back_cats: { en: '← Back to All Categories', ru: '← Ко всем категориям', ro: '← Înapoi la toate categoriile', de: '← Zurück zu allen Kategorien', fr: '← Retour à toutes les catégories', ar: '← العودة إلى جميع الفئات' },
    cat_view_specs: { en: 'Explore Lineup & Products', ru: 'Смотреть линейку и товары', ro: 'Explorează categoria și produsele', de: 'Kategorie & Produkte anzeigen', fr: 'Voir la gamme & produits', ar: 'استكشاف المعروضات والمنتجات' },
    btn_inspect_product: { en: 'Inspect Product →', ru: 'Посмотреть товар →', ro: 'Detalii produs →', de: 'Produkt Details →', fr: 'Voir le produit →', ar: 'تفاصيل المنتج ←' },
    modal_prod_specs: { en: 'Technical Specifications & Parameters', ru: 'Технические характеристики товара', ro: 'Specificații tehnice ale produsului', de: 'Technische Spezifikationen des Produkts', fr: 'Spécifications techniques du produit', ar: 'المواصفات الفنية والتقنية للمنتج' },
    btn_direct_quote: { en: 'Request Wholesale Quote for This Item →', ru: 'Запросить оптовый расчет по товару →', ro: 'Cere ofertă angro pentru acest produs →', de: 'Großhandelsangebot für diesen Artikel →', fr: 'Demander un devis en gros pour cet article →', ar: 'طلب عرض سعر بالجملة لهذا المنتج ←' },
    modal_view_specs: { en: 'Specifications & Technical Parameters', ru: 'Технические характеристики', ro: 'Specificații tehnice', de: 'Technische Spezifikationen', fr: 'Spécifications techniques', ar: 'المواصفات الفنية والتقنية' },
    modal_subproducts: { en: 'Sub-Products & Variants', ru: 'Подкатегории и варианты', ro: 'Sub-produse & Variante', de: 'Unterprodukte & Varianten', fr: 'Sous-produits & Variantes', ar: 'المنتجات الفرعية والأنواع' },
    modal_cta_inquire: { en: 'Inquire About This Category', ru: 'Запросить цену по этой категории', ro: 'Cere ofertă pentru această categorie', de: 'Angebot für diese Kategorie anfordern', fr: 'Demander un devis pour cette catégorie', ar: 'طلب عرض سعر لهذه الفئة' },
    btn_item_quote: { en: 'Request Item Quote', ru: 'Запросить расчет', ro: 'Solicită ofertă', de: 'Angebot anfordern', fr: 'Demander un devis', ar: 'طلب تسعير' },
    badge_products_count: { en: 'Products', ru: 'Товаров', ro: 'Produse', de: 'Produkte', fr: 'Produits', ar: 'منتج' },
    cat_view_products_title: { en: 'Category Products & Lineup', ru: 'Товары и линейка данной категории', ro: 'Produse și gamă categorie', de: 'Kategorieprodukte & Sortiment', fr: 'Produits & Gamme de la catégorie', ar: 'منتجات وتشكيلة الفئة' },
    badge_premium_sku: { en: 'Premium SKU', ru: 'Артикул', ro: 'Cod SKU', de: 'Premium SKU', fr: 'Référence SKU', ar: 'رمز المنتج' },
    badge_lineup_count: { en: 'Products Available', ru: 'Товаров в линейке', ro: 'Produse disponibile', de: 'Produkte im Sortiment', fr: 'Produits dans la gamme', ar: 'منتجات متوفرة' },
    bottom_cats_title: { en: 'Explore Other Categories & Manufacturing Lines', ru: 'Смотреть другие категории продукции', ro: 'Explorează alte categorii și linii de producție', de: 'Weitere Kategorien & Produktionslinien entdecken', fr: 'Explorer d’autres catégories & lignes de fabrication', ar: 'استكشاف الفئات وخطوط الإنتاج الأخرى' },
    rfq_inquiry_prefix: { en: 'Inquiry regarding:', ru: 'Запрос по товару:', ro: 'Solicitare pentru:', de: 'Anfrage zu:', fr: 'Demande concernant:', ar: 'استفسار بشأن:' },
    rfq_target_specs: { en: 'Target Quantity / Specs:', ru: 'Тираж / Характеристики:', ro: 'Cantitate / Specificații:', de: 'Menge / Spezifikationen:', fr: 'Quantité / Spécifications:', ar: 'الكمية والمواصفات المطلوبة:' },
    quick_select_lbl: { en: '⚡ Quick Switch Category:', ru: '⚡ Быстрый выбор категории:', ro: '⚡ Comutare rapidă categorie:', de: '⚡ Schnellauswahl Kategorie:', fr: '⚡ Choix rapide de catégorie:', ar: '⚡ التنقل السريع بين الفئات:' },

    filter_all: { en: 'All 20 Categories', ru: 'Все 20 категорий', ro: 'Toate 20 categorii', de: 'Alle 20 Kategorien', fr: 'Toutes 20 catégories', ar: 'جميع الـ 20 فئة' },
    filter_pkg: { en: 'Packaging & Containers', ru: 'Упаковка и фасовка', ro: 'Ambalare & Concontainere', de: 'Verpackung & Behälter', fr: 'Emballages & Contenants', ar: 'التعبئة والحاويات' },
    filter_hotel: { en: 'Hotel & HoReCa Supplies', ru: 'Гостиницы и HoReCa', ro: 'Consumabile Hotel & HoReCa', de: 'Hotel & HoReCa Bedarf', fr: 'Fournitures Hôtel & Restauration', ar: 'مستلزمات الفنادق والمطاعم' },
    filter_perfume: { en: 'Perfume & Glassware', ru: 'Парфюмерия и стекло', ro: 'Parfumuri & Sticlărie', de: 'Parfüm & Glaswaren', fr: 'Parfumerie & Flaconnage', ar: 'العطور والزجاجيات' },
    filter_food: { en: 'Food & Ingredients', ru: 'Пищевые продукты', ro: 'Alimentare & Ingrediente', de: 'Lebensmittel & Zutaten', fr: 'Alimentaire & Ingrédients', ar: 'الأغذية والمكونات' },
    filter_cleaning: { en: 'Hygiene & Cleaning', ru: 'Бытовая химия', ro: 'Igienă & Curățenie', de: 'Hygiene & Reinigung', fr: 'Hygiène & Nettoyage', ar: 'النظافة والتعقيم' },
    filter_conf: { en: 'Confectionery & Bakery', ru: 'Кондитерские изделия', ro: 'Cofetărie & Patiserie', de: 'Konditoreibedarf', fr: 'Confiserie & Pâtisserie', ar: 'الحلويات والمخابز' },

    no_results_title: { en: 'No categories found', ru: 'Категории не найдены', ro: 'Nicio categorie găsită', de: 'Keine Kategorien gefunden', fr: 'Aucune catégorie trouvée', ar: 'لم يتم العثور على فئات' },
    no_results_title: { en: 'No categories found', ru: 'Категории не найдены', ro: 'Nicio categorie găsită', de: 'Keine Kategorien gefunden', fr: 'Aucune categorie trouvée', ar: 'لم يتم العثور على فئات' },
    no_results_desc: { en: 'Try refining your search term.', ru: 'Попробуйте изменить запрос.', ro: 'Încearcă alt termen de căutare.', de: 'Versuchen Sie einen anderen Suchbegriff.', fr: 'Essayez un autre terme de recherche.', ar: 'حاول تعديل كلمة البحث.' },

    // Modal
    modal_view_specs: { en: 'Specifications & Technical Parameters', ru: 'Технические характеристики', ro: 'Specificații tehnice', de: 'Technische Spezifikationen', fr: 'Spécifications techniques', ar: 'المواصفات الفنية والتقنية' },
    modal_subproducts: { en: 'Sub-Products & Variants', ru: 'Подкатегории и варианты', ro: 'Sub-produse & Variante', de: 'Unterprodukte & Varianten', fr: 'Sous-produits & Variantes', ar: 'المنتجات الفرعية والأنواع' },
    modal_cta_inquire: { en: 'Inquire About This Category', ru: 'Запросить цену по этой категории', ro: 'Cere ofertă pentru această categorie', de: 'Angebot für diese Kategorie anfordern', fr: 'Demander un devis pour cette catégorie', ar: 'طلب عرض سعر لهذه الفئة' },
    btn_item_quote: { en: 'Request Item Quote', ru: 'Запросить расчет', ro: 'Solicită ofertă', de: 'Angebot anfordern', fr: 'Demander un devis', ar: 'طلب تسعير' },

    // Workflow
    badge_process: { en: 'Seamless Ordering', ru: 'Удобный заказ', ro: 'Comandă simplă', de: 'Reibungslose Bestellung', fr: 'Commande fluide', ar: 'طلب سلس وبسيط' },
    process_title: { en: 'How We Work: 4 Steps to Delivery', ru: 'Процесс работы: 4 шага к отгрузке', ro: 'Cum lucrăm: 4 pași spre livrare', de: 'Ablauf: 4 Schritte zur Lieferung', fr: 'Notre processus: 4 étapes vers la livraison', ar: 'كيف نعمل: ٤ خطوات حتى التوصيل' },
    process_sub: { en: 'A streamlined manufacturing path from initial inquiry to global port arrival.', ru: 'Оптимизированный путь от первого запроса до доставки в порт.', ro: 'Un proces de fabricație optimizat de la cerere până la livrarea în port.', de: 'Ein optimierter Produktionsweg von der Anfrage bis zur Hafenlieferung.', fr: 'Un processus de fabrication optimisé de la demande à l’arrivée au port.', ar: 'مسار تصنيع مبسط من الاستفسار الأول حتى وصول البضائع إلى الميناء.' },
    process_1_title: { en: '1. Inquiry & Specification', ru: '1. Запрос и спецификация', ro: '1. Solicitare & Specificație', de: '1. Anfrage & Spezifikation', fr: '1. Demande & Spécification', ar: '١. تقديم الطلب والمواصفات' },
    process_1_desc: { en: 'Submit your target product category, sizes, quantity, and branding requirements.', ru: 'Отправьте требования по размеру, тиражу и логотипу.', ro: 'Trimite cerințele de mărime, cantitate și branding.', de: 'Senden Sie Ihre Anforderungen bezüglich Größe, Menge und Logo.', fr: 'Envoyez vos exigences de taille, quantité et logo.', ar: 'أرسل تفاصيل المنتج، المقاسات، الكمية والشعار المطلوب.' },
    process_2_title: { en: '2. OEM Design & Sampling', ru: '2. OEM Дизайн и образцы', ro: '2. Design OEM & Mostre', de: '2. OEM Design & Muster', fr: '2. Design OEM & Échantillonnage', ar: '٢. العينات والتصميم' },
    process_2_desc: { en: 'We produce pre-production physical samples and print proofs for your approval.', ru: 'Мы изготавливаем физические образцы и цветопробу для согласования.', ro: 'Producem mostre fizice și probe de tipar pentru aprobare.', de: 'Wir erstellen Produktionsmuster und Druckfreigaben zur Genehmigung.', fr: 'Nous produisons des échantillons physiques et épreuves d’impression pour validation.', ar: 'نقوم بإنتاج عينات فيزيائية وطباعية قبل البدء بالتصنيع للموافقة.' },
    process_3_title: { en: '3. Factory Production', ru: '3. Серийное производство', ro: '3. Producție în fabrică', de: '3. Serienproduktion', fr: '3. Production en usine', ar: '٣. التصنيع في المصنع' },
    process_3_desc: { en: 'Mass manufacturing on automated high-speed production lines.', ru: 'Массовое производство на автоматических высокоскоростных линиях.', ro: 'Producție de masă pe utilaje automate de mare viteză.', de: 'Serienfertigung auf automatisierten Hochleistungsanlagen.', fr: 'Fabrication en série sur machines automatisées haute vitesse.', ar: 'إنتاج ضخم على خطوط آلات أوتوماتيكية عالية السرعة.' },
    process_4_title: { en: '4. Global Freight Delivery', ru: '4. Доставка и логистика', ro: '4. Livrare & Logistică', de: '4. weltweite Lieferung', fr: '4. Livraison internationale', ar: '٤. الشحن والتسليم الدولي' },
    process_4_desc: { en: 'Pallet packing, container loading, export declaration, and dispatch to your port.', ru: 'Упаковка на паллеты, погрузка контейнеров и отправка в порт.', ro: 'Ambalare pe paleți, încărcare container și livrare în port.', de: 'Palettenverpackung, Containerbeladung und Versand an Ihren Hafen.', fr: 'Emballage sur palettes, chargement de conteneur et expédition au port.', ar: 'تغليف باليتات، تحميل حاويات، وإرسال الشحنات إلى مينائك.' },

    // RFQ Form
    badge_quote: { en: 'Factory Direct Quote', ru: 'Цена напрямую с завода', ro: 'Ofertă directă din fabrică', de: 'Direktes Werksangebot', fr: 'Devis direct usine', ar: 'عرض سعر مباشر من المصنع' },
    rfq_title: { en: 'Request a Wholesale Price Quote', ru: 'Запросить оптовый прайс-лист', ro: 'Solicită o ofertă de preț angro', de: 'Großhandelsangebot anfordern', fr: 'Demander un devis de vente en gros', ar: 'طلب عرض سعر للكميات بالجملة' },
    rfq_desc: { en: 'Fill out the form below. Our export managers will respond with factory pricing within 24 hours.', ru: 'Заполните форму ниже. Наши менеджеры ответят с ценами завода в течение 24 часов.', ro: 'Completează formularul. Managerii noștri vor răspunde cu prețurile în 24 ore.', de: 'Füllen Sie das Formular aus. Wir antworten innerhalb von 24 Stunden mit Werks-Preisen.', fr: 'Remplissez le formulaire. Nos responsables vous répondront sous 24h avec les prix usine.', ar: 'يرجى ملء النموذج وسيتم التواصل معكم بالأسعار المباشرة خلال 24 ساعة.' },
    form_name: { en: 'Full Name / Contact Person', ru: 'ФИО / Контактное лицо', ro: 'Nume complet / Persoană contact', de: 'Vollständiger Name / Ansprechpartner', fr: 'Nom complet / Contact', ar: 'الاسم الكامل / مسؤول التواصل' },
    form_company: { en: 'Company Name & Country', ru: 'Название компании и страна', ro: 'Nume companie & Țară', de: 'Firmenname & Land', fr: 'Nom de la société & Pays', ar: 'اسم الشركة والدولة' },
    form_email: { en: 'Corporate Email Address', ru: 'Корпоративный Email', ro: 'Email corporativ', de: 'Geschäftliche E-Mail', fr: 'Adresse email professionnelle', ar: 'البريد الإلكتروني للشركة' },
    form_telegram: { en: 'Telegram Username (optional)', ru: 'Telegram (необязательно)', ro: 'Telegram Username (opțional)', de: 'Telegram Username (optional)', fr: 'Nom d’utilisateur Telegram (facultatif)', ar: 'اسم المستخدم على تيليغرام (اختياري)' },
        form_cat_label: { en: 'Primary Category of Interest', ru: 'Основная категория интереса', ro: 'Categoria principală de interes', de: 'Hauptkategorie', fr: "Catégorie principale d'intérêt", ar: 'الفئة الرئيسية المطلوبة' },
    form_cat_select: { en: 'Select Primary Category of Interest', ru: 'Выберите интересующую категорию', ro: 'Selectează categoria de interes', de: 'Interessierte Kategorie auswählen', fr: 'Sélectionnez la catégorie d’intérêt', ar: 'اختر فئة المنتجات المطلوبة' },
    form_message: { en: 'Order Quantity, Sizes, Custom Logo Details', ru: 'Тираж, размеры, пожелания по логотипу', ro: 'Cantitate, dimensiuni, detalii logo', de: 'Bestellmenge, Größen, Logo-Details', fr: 'Quantité, dimensions, détails du logo', ar: 'الكمية، المقاسات، وتفاصيل الشعار المطلوب' },
    form_submit: { en: 'Submit Quote Request →', ru: 'Отправить запрос цены →', ro: 'Trimite solicitarea →', de: 'Anfrage absenden →', fr: 'Envoyer la demande →', ar: 'إرسال طلب السعر ←' },
    form_loading: { en: 'Sending Inquiry...', ru: 'Отправка...', ro: 'Se trimite...', de: 'Wird gesendet...', fr: 'Envoi en cours...', ar: 'جاري الإرسال...' },
    form_success: { en: 'Thank you! Your inquiry has been submitted. Our sales team will reach out shortly.', ru: 'Спасибо! Ваш запрос отправлен. Наш менеджер свяжется с вами в ближайшее время.', ro: 'Mulțumim! Solicitarea a fost trimisă. Echipa noastră vă va contacta în curând.', de: 'Vielen Dank! Ihre Anfrage wurde übermittelt. Wir melden uns in Kürze.', fr: 'Merci! Votre demande a été envoyée. Notre équipe vous contactera sous peu.', ar: 'شكراً لك! تم استلام طلبك بنجاح وسيتواصل معك فريق المبيعات قريباً.' },
    form_error: { en: 'Submission failed. Please try again or contact us directly.', ru: 'Ошибка отправки. Попробуйте еще раз или свяжитесь с нами.', ro: 'Trimiterea a eșuat. Încercați din nou.', de: 'Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut.', fr: 'Échec de l’envoi. Veuillez réessayer.', ar: 'تعذر الإرسال. يرجى المحاولة مرة أخرى.' },

    form_name_ph: { en: 'John Doe', ru: 'Иван Иванов', ro: 'Ion Popescu', de: 'Hans Müller', fr: 'Jean Dupont', ar: 'أحمد علي' },
    form_company_ph: { en: 'Global Trading LLC, Germany', ru: 'ООО «Торговля», Россия', ro: 'SRL Comerț, România', de: 'Handel GmbH, Deutschland', fr: 'SARL Commerce, France', ar: 'شركة التجارة، الإمارات' },
    form_email_ph: { en: 'purchasing@company.com', ru: 'zakupki@company.ru', ro: 'achizitii@firma.ro', de: 'einkauf@firma.de', fr: 'achats@societe.fr', ar: 'المشتريات@شركة.com' },
    form_telegram_ph: { en: '@yourusername', ru: '@вашlogin', ro: '@username', de: '@IhrUsername', fr: '@votrenom', ar: '@اسمك' },
    form_message_ph: { en: 'Please provide estimated volume, target sizes, and logo requirements...', ru: 'Укажите объём, размеры и требования к логотипу...', ro: 'Specificați volumul estimat, dimensiunile și cerințele logo...', de: 'Bitte Menge, Größen und Logo-Anforderungen angeben...', fr: 'Indiquez le volume, les tailles et les exigences de logo...', ar: 'الرجاء تحديد الكمية والأحجام المطلوبة ومتطلبات الشعار...' },

    // Contact Information Labels & Telegram
    contact_telegram_lbl: { en: 'Telegram:', ru: 'Telegram:', ro: 'Telegram:', de: 'Telegram:', fr: 'Telegram :', ar: 'تيليغرام:' },
    contact_email_lbl: { en: 'Wholesale Inquiry:', ru: 'Запрос стоимости:', ro: 'Solicitare ofertă:', de: 'Großhandelsanfrage:', fr: 'Demande de prix :', ar: 'استفسار المبيعات والتسعير:' },
    contact_form_link: { en: '⚡ Open Direct Inquiry Form', ru: '⚡ Открыть форму запроса цен', ro: '⚡ Deschide formularul de ofertă', de: '⚡ Anfrageformular öffnen', fr: '⚡ Ouvrir le formulaire de devis', ar: '⚡ فتح نموذج الطلب المباشر' },
    contact_address_lbl: { en: 'Factory & Head Office:', ru: 'Завод и главный офис:', ro: 'Fabrică & Sediu central:', de: 'Werk & Hauptsitz:', fr: 'Usine & Siège social :', ar: 'المصنع والمكتب الرئيسي:' },
    contact_address_val: { en: 'Istanbul • Worldwide Export Hub', ru: 'Стамбул • Мировой экспортный хаб', ro: 'Istanbul • Centru export', de: 'Istanbul • Weltweites Exportzentrum', fr: 'Istanbul • Hub d’exportation', ar: 'إسطنبول • مركز التصدير العالمي' },
    btn_close_inspect: { en: '✕ Close Product Inspection', ru: '✕ Закрыть просмотр товара', ro: '✕ Închide inspecția produsului', de: '✕ Produkt-Inspektion schließen', fr: '✕ Fermer l’inspection du produit', ar: '✕ إغلاق معاينة المنتج' },

    // Cookie Banner
    cookie_text: { en: 'We use cookies to improve your experience. By continuing, you agree to our cookie policy.', ru: 'Мы используем cookies для улучшения работы сайта. Продолжая, вы соглашаетесь с политикой.', ro: 'Folosim cookie-uri pentru a îmbunătăți experiența. Continuând, ești de acord cu politica noastră.', de: 'Wir verwenden Cookies zur Verbesserung der Nutzererfahrung. Mit der Nutzung stimmen Sie zu.', fr: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique.', ar: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالاستمرار، أنت توافق على سياستنا.' },
    cookie_accept: { en: 'Accept', ru: 'Принять', ro: 'Accept', de: 'Akzeptieren', fr: 'Accepter', ar: 'قبول' },
    cookie_decline: { en: 'Decline', ru: 'Отклонить', ro: 'Refuz', de: 'Ablehnen', fr: 'Refuser', ar: 'رفض' },

    // Footer Columns & Text
    footer_col_nav: { en: 'Navigation', ru: 'Навигация', ro: 'Navigare', de: 'Navigation', fr: 'Navigation', ar: 'التنقل' },
    footer_col_products: { en: 'Top Product Lines', ru: 'Популярные категории', ro: 'Produse populare', de: 'Top-Produktlinien', fr: 'Gamme de produits', ar: 'أبرز خطوط الإنتاج' },
    footer_col_langs: { en: 'Export Languages', ru: 'Языки экспорта', ro: 'Limbi export', de: 'Export-Sprachen', fr: 'Langues d’export', ar: 'لغات التصدير' },
    footer_tagline: { en: 'Factory-direct wholesale packaging, perfume bottles & luxury hotel equipment for global importers.', ru: 'Прямой заводской производитель упаковки, флаконов и отельного оборудования.', ro: 'Producător direct de ambalaje angro, sticle parfum și echipamente hoteliere.', de: 'Direkter Werkhersteller für Großhandelsverpackungen, Parfümflakons & Hotelbedarf.', fr: 'Fabricant usine d’emballages en gros, flacons de parfum & équipements hôteliers.', ar: 'المصنع المباشر للتعبئة والتغليف وزجاجات العطور ومعدات الفنادق للمستوردين.' },
    footer_rights: { en: '© 2026 WOPPAG KRAFT & FOODS. All Rights Reserved. WOPPAG.COM', ru: '© 2026 WOPPAG KRAFT & FOODS. Все права защищены. WOPPAG.COM', ro: '© 2026 WOPPAG KRAFT & FOODS. Toate drepturile rezervate. WOPPAG.COM', de: '© 2026 WOPPAG KRAFT & FOODS. Alle Rechte vorbehalten. WOPPAG.COM', fr: '© 2026 WOPPAG KRAFT & FOODS. Tous droits réservés. WOPPAG.COM', ar: '© ٢٠٢٦ WOPPAG KRAFT & FOODS. جميع الحقوق محفوظة. WOPPAG.COM' },

    // Footer Product Links
    footer_prod_1: { en: 'Portion Packaging', ru: 'Порционная упаковка', ro: 'Ambalaje porționate', de: 'Portionsverpackungen', fr: 'Emballages en portion', ar: 'عبوات التقسيم الفردية' },
    footer_prod_2: { en: 'Doy-Pack Kraft Pouches', ru: 'Крафт дойпаки с замком', ro: 'Pungi Doy-Pack kraft', de: 'Doypack Kraftbeutel', fr: 'Sachets Doy-Pack Kraft', ar: 'أكياس دوي باك كرافت' },
    footer_prod_3: { en: 'Kraft Paper Bags', ru: 'Бумажные крафт-пакеты', ro: 'Pungi din hârtie kraft', de: 'Kraftpapiertaschen', fr: 'Sacs en papier kraft', ar: 'أكياس ورق الكرافت' },
    footer_prod_4: { en: 'Perfume Glass Bottles', ru: 'Парфюмерные флаконы', ro: 'Sticle de parfum', de: 'Parfüm-Flakons', fr: 'Flacons de parfum', ar: 'زجاجات العطور' },
    footer_prod_5: { en: 'Hotel Cosmetics & Hardware', ru: 'Отельная косметика и оснащение', ro: 'Cosmetice și echipamente hotel', de: 'Hotelkosmetik & Ausstattung', fr: 'Cosmétiques & Équipements hôtel', ar: 'مستلزمات ومعدات الفنادق' },

    // Clean Factory Direct B2B Badge
    footer_badge_factory: { en: 'Factory Direct • Global B2B Export', ru: 'Прямой производитель • Экспорт B2B', ro: 'Producător direct • Export B2B', de: 'Direkthersteller • B2B-Export', fr: 'Fabricant direct • Export B2B', ar: 'تصنيع مباشر • تصدير عالمي B2B' }
  },

  init() {
    let savedLang = null;
    try {
      savedLang = localStorage.getItem('woppag_lang');
    } catch (e) {}

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get('lang');
      if (langParam && this.supportedLangs.includes(langParam)) {
        savedLang = langParam;
      }
    } catch (e) {}

    if (!savedLang || !this.supportedLangs.includes(savedLang)) {
      savedLang = this.defaultLang;
    }

    this.setLanguage(savedLang);
  },

  setLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) lang = this.defaultLang;
    try {
      localStorage.setItem('woppag_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }

    // Clean URL query parameter if lang= exists
    try {
      if (window.location.search.includes('lang=')) {
        const url = new URL(window.location.href);
        url.searchParams.delete('lang');
        history.replaceState({}, '', url.toString());
      }
    } catch (e) {}

    // Translate DOM elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.translations[key] && this.translations[key][lang]) {
        el.textContent = this.translations[key][lang];
      }
    });

    // Translate inputs with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      if (this.translations[key] && this.translations[key][lang]) {
        input.placeholder = this.translations[key][lang];
      }
    });

    // Update Meta Title & Description
    if (this.translations.meta_title && this.translations.meta_title[lang]) {
      document.title = this.translations.meta_title[lang];
    }
    const metaDesc = document.querySelector('meta[name=description]');
    if (metaDesc && this.translations.meta_description && this.translations.meta_description[lang]) {
      metaDesc.setAttribute('content', this.translations.meta_description[lang]);
    }

    // Update Active Language Button UI
    document.querySelectorAll('.lang-option').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const currentLangLabel = document.getElementById('current-lang-code');
    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    // Trigger dynamic UI re-renders
    if (window.APP) {
      if (typeof window.APP.populateCategoryDropdown === 'function') window.APP.populateCategoryDropdown();
      if (typeof window.APP.renderCategories === 'function') window.APP.renderCategories();
      if (window.APP.activeCatId !== null && typeof window.APP.openCategoryView === 'function') {
        const catView = document.getElementById('category-products-view');
        if (catView && catView.style.display !== 'none') {
          window.APP.openCategoryView(window.APP.activeCatId);
        }
      }
    }

    // Dispatch event for dynamic content re-renders
    try {
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    } catch (e) {}
  },

  getText(key, lang) {
    const activeLang = lang || document.documentElement.lang || this.defaultLang;
    if (this.translations[key] && this.translations[key][activeLang]) {
      return this.translations[key][activeLang];
    }
    return (this.translations[key] && this.translations[key].en) ? this.translations[key].en : key;
  }
};

window.I18N = I18N;
document.addEventListener('DOMContentLoaded', () => I18N.init());
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  I18N.init();
}
