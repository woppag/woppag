/* ==========================================================================
   WOPPAG KRAFT & FOODS — Complete 20 Categories Dataset
   Localized in 6 Languages: EN (Default), RU, RO, DE, FR, AR
   Sub-Products: 10-12 Sub-Products per Category (200+ Total Sub-Products)
   Images: 100% Local Authentic Product Image Assets
   ========================================================================== */

const CATS = [
  {
    id: 0,
    group: 'packaging',
    icon: '🧂',
    img: './assets/images/products/cat_0/header.jpg',
    chip: {
      en: 'Portion Products', ru: 'Порционная продукция', ro: 'Produse porționate', de: 'Portionsprodukte', fr: 'Produits en portion', ar: 'منتجات التعبئة الفردية'
    },
    title: {
      en: 'Packaging & Portioning', ru: 'Фасовка и упаковка', ro: 'Ambalare & Porționare', de: 'Verpackung & Portionierung', fr: 'Emballage & Portionnement', ar: 'التعبئة والتغليف والتقسيم'
    },
    desc: {
      en: 'Portioned salt, pepper, sugar, coffee, sauces, and spices branded with your logo for HoReCa and airline catering.',
      ru: 'Порционная соль, перец, сахар, кофе, соусы и специи с вашим логотипом для HoReCa и кейтеринга.',
      ro: 'Sare, piper, zahăr, cafea, sosuri și condimente porționate cu sigla dvs. pentru HoReCa.',
      de: 'Portionierte Salze, Pfeffer, Zucker, Kaffee, Saucen und Gewürze mit Ihrem Logo für HoReCa.',
      fr: 'Sel, poivre, sucre, café, sauces et épices en portions individuelles avec votre logo pour la Restauration.',
      ar: 'ملح، فلفل، سكر، قهوة، صلصات وتوابل مقسمة في عبوات فردية تحمل شعارك لقطاع الفنادق والمطاعم.'
    },
    specs: [
      {
        k: { en: 'Sachet Formats', ru: 'Форматы саше', ro: 'Formate plic', de: 'Sachet-Formate', fr: 'Formats sachet', ar: 'أشكال العبوات' },
        v: { en: 'Stick, 3-side seal, 4-side seal sachets', ru: 'Стик, 3-шовный, 4-шовный саше', ro: 'Stick, 3 lipituri, 4 lipituri', de: 'Stick, 3-Rand-Siegel, 4-Rand-Siegel', fr: 'Bâtonnet, 3 soudures, 4 soudures', ar: 'أظرف طولية، ثلاثية ورباعية الإغلاق' }
      },
      {
        k: { en: 'Paper Grammage', ru: 'Плотность бумаги', ro: 'Gramaj hârtie', de: 'Papiergewicht', fr: 'Grammage du papier', ar: 'وزن الورق' },
        v: { en: '40 - 90 gsm PE-coated barrier paper', ru: '40 - 90 г/м² бумага с PE-покрытием', ro: '40 - 90 gsm hârtie laminată PE', de: '40 - 90 g/m² PE-beschichtetes Papier', fr: 'Papier 40 - 90 g/m² PE-plastifié', ar: 'ورق مغلف بولي إيثيلين 40-90 جرام' }
      },
      {
        k: { en: 'Printing Capabilities', ru: 'Печатные возможности', ro: 'Capacități de tipar', de: 'Druckmöglichkeiten', fr: 'Capacités d’impression', ar: 'إمكانيات الطباعة' },
        v: { en: 'Up to 6-color flexographic custom print', ru: 'Флексопечать до 6 цветов', ro: 'Tipar flexografic până la 6 culori', de: 'Flexodruck bis zu 6 Farben', fr: 'Impression flexo jusqu’à 6 couleurs', ar: 'طباعة فلكسوغرافية تصل إلى 6 ألوان' }
      },
      {
        k: { en: 'Min. Order MOQ', ru: 'Мин. заказ MOQ', ro: 'Comandă minimă MOQ', de: 'Mindestbestellmenge', fr: 'Commande minimale MOQ', ar: 'الحد الأدنى للطلب' },
        v: { en: '50,000 sachets per SKU', ru: '50,000 саше на артикул', ro: '50.000 plicuri per SKU', de: '50.000 Sachets pro SKU', fr: '50 000 sachets par référence', ar: '50,000 ظرف لكل منتج' }
      },
      {
        k: { en: 'Shelf Life & Barrier', ru: 'Срок годности и барьер', ro: 'Termen de valabilitate', de: 'Haltbarkeit & Barriere', fr: 'Durée de conservation', ar: 'مدة الصلاحية والحماية' },
        v: { en: '24 Months moisture and oxygen barrier', ru: '24 месяца защита от влаги и кислорода', ro: '24 Luni protecție umiditate și oxigen', de: '24 Monate Feuchtigkeits- & Sauerstoffschutz', fr: '24 Mois barrière humidité & oxygène', ar: 'حماية ضد الرطوبة والأكسجين لمدة 24 شهراً' }
      }
    ],
    products: [
      { icon: '🧂', img: './assets/images/products/cat_0/prod_1.jpg', name: { en: 'Portion Salt & Black Pepper Sachets', ru: 'Порционная соль и черный перец в саше', ro: 'Sare și piper negru porționat la plic', de: 'Portionssalz & Schwarzer Pfeffer', fr: 'Sel & Poivre noir en sachet portion', ar: 'ملح وفلفل أسود في عبوات فردية' } },
      { icon: '🍬', img: './assets/images/products/cat_0/prod_2.jpg', name: { en: 'Portion White Sugar Sticks 4g', ru: 'Сахарные стики с логотипом 4г', ro: 'Plicuri de zahăr alb stick 4g', de: 'Weiße Zuckersticks mit Logo 4g', fr: 'Sticks de sucre blanc 4g avec logo', ar: 'أظرف سكر أبيض طولية 4 جرام' } },
      { icon: '🪵', img: './assets/images/products/cat_0/prod_3.jpg', name: { en: 'Portion Brown Cane Sugar Sticks', ru: 'Тростниковый сахар в стиках с логотипом', ro: 'Plicuri de zahăr brun stick', de: 'Brauner Rohrzucker in Sticks', fr: 'Sticks de sucre roux de canne', ar: 'أظرف سكر بني قصب في عبوات' } },
      { icon: '🍅', img: './assets/images/products/cat_0/prod_4.jpg', name: { en: 'Portion Ketchup Sachets 10g', ru: 'Порционный кетчуп в саше 10г', ro: 'Sos ketchup porționat 10g', de: 'Ketchup-Portionsbeutel 10g', fr: 'Sauce ketchup en sachet 10g', ar: 'صلصة كاتشب في أظرف 10 جرام' } },
      { icon: '🟡', img: './assets/images/products/cat_0/prod_5.jpg', name: { en: 'Portion Mayonnaise & Mustard Sachets', ru: 'Порционный майонез и горчица в саше', ro: 'Maioneză și muștar porționat', de: 'Mayonnaise- & Senf-Portionsbeutel', fr: 'Mayonnaise & Moutarde en sachet', ar: 'مايونيز وخردل في أظرف فردية' } },
      { icon: '🥗', img: './assets/images/products/cat_0/prod_1.jpg', name: { en: 'Portion Pomegranate Sauce & Vinegar', ru: 'Порционный гранатовый соус и уксус', ro: 'Sos de rodie și oțet porționat', de: 'Granatapfelsauce & Essig-Portionen', fr: 'Sauce grenade & Vinaigre en portion', ar: 'صلصة الرمان والخل في عبوات' } },
      { icon: '🫒', img: './assets/images/products/cat_0/prod_2.jpg', name: { en: 'Portion Olive Oil & Salad Dressing', ru: 'Порционное оливковое масло и заправка', ro: 'Ulei de măsline porționat pentru salată', de: 'Olivenöl- & Salatdressing-Portionen', fr: 'Huile d’olive & Sauce salade en portion', ar: 'زيت زيتون وتتبيلة سلطة في عبوات' } },
      { icon: '☕', img: './assets/images/products/cat_0/prod_3.jpg', name: { en: 'Portion Instant 3-in-1 Coffee Sticks', ru: 'Растворимый кофе 3 в 1 в стиках', ro: 'Cafea instant 3 în 1 la stick', de: 'Instant-Kaffee 3-in-1 Sticks', fr: 'Café instantané 3-en-1 en stick', ar: 'قهوة سريعة التحضير 3 في 1' } },
      { icon: '🍵', img: './assets/images/products/cat_0/prod_4.jpg', name: { en: 'Portion Black Tea & Green Tea Bags', ru: 'Порционный черный и зеленый чай', ro: 'Pliculețe ceai negru și verde', de: 'Schwarz- & Grüntee-Portionsbeutel', fr: 'Sachets de thé noir & vert', ar: 'أكياس شاي أسود وأخضر فردية' } },
      { icon: '🍯', img: './assets/images/products/cat_0/prod_5.jpg', name: { en: 'Portion Honey Containers 20g', ru: 'Порционный натуральный мед 20г', ro: 'Miere naturală porționată 20g', de: 'Portionshonig 20g', fr: 'Miel naturel en pot individuel 20g', ar: 'عسل طبيعي في عبوات صغيرة 20 جرام' } },
      { icon: '🍓', img: './assets/images/products/cat_0/prod_1.jpg', name: { en: 'Portion Strawberry & Cherry Jam Cups', ru: 'Порционный клубничный и вишневый джем', ro: 'Gem de căpșuni și vișine porționat', de: 'Erdbeer- & Kirschmarmelade Portionen', fr: 'Confiture fraise & cerise en pot 20g', ar: 'مربى فراولة وكرز في عبوات صغيرة' } },
      { icon: '🍫', img: './assets/images/products/cat_0/prod_2.jpg', name: { en: 'Portion Hazelnut Chocolate Cream Cups', ru: 'Порционная шоколадно-ореховая паста', ro: 'Cremă de ciocolată cu alune porționată', de: 'Nuss-Nugat-Creme Portionsbecher', fr: 'Pâte à tartiner chocolat noisette 20g', ar: 'شوكولاتة بندق في عبوات صغيرة' } }
    ]
  },

  {
    id: 1,
    group: 'confectionery',
    icon: '🎂',
    img: './assets/images/products/cat_1/header.jpg',
    chip: {
      en: 'Confectionery', ru: 'Для кондитеров', ro: 'Patiserie & Cofetărie', de: 'Konditoreibedarf', fr: 'Pâtisserie & Confiserie', ar: 'مستلزمات الحلواني'
    },
    title: {
      en: 'Everything for Confectioners', ru: 'Все для кондитера', ro: 'Totul pentru cofetari', de: 'Alles für Konditoren', fr: 'Tout pour les pâtissiers', ar: 'كل ما يحتاجه صناع الحلويات'
    },
    desc: {
      en: 'Cake boxes, cake boards, baking parchment, piping bags, and pastry packaging for bakeries and cake shops.',
      ru: 'Коробки для тортов, подложки, пергамент для выпечки, кондитерские мешки и упаковка для десертов.',
      ro: 'Cutii de prăjituri, discuri tort, hârtie copt, poșuri și ambalaje patiserie.',
      de: 'TortenKartons, Unterlagen, Backpapier, Spritzbeutel und Gebäckverpackungen.',
      fr: 'Boîtes à gâteaux, supports dorés, papier cuisson, poches à douille et emballages pâtisserie.',
      ar: 'علب الكعك والحلويات، أطباق الكيك الذهبية، ورق الخبز، وأكياس التزيين للمخابز والمطاعم.'
    },
    specs: [
      {
        k: { en: 'Paperboard Density', ru: 'Плотность картона', ro: 'Densitate carton', de: 'Kartonstärke', fr: 'Épaisseur du carton', ar: 'كثافة الورق المقوى' },
        v: { en: '275 - 450 gsm food-grade American Bristol', ru: '275 - 450 г/м² пищевой картон Bristol', ro: '275 - 450 gsm carton alimentar Bristol', de: '275 - 450 g/m² Lebensmittelkarton', fr: 'Carton alimentar 275 - 450 g/m²', ar: 'ورق مقوى غذائي 275 - 450 جرام' }
      },
      {
        k: { en: 'Window Film', ru: 'Пленка окна', ro: 'Folie fereastră', de: 'Sichtfensterfolie', fr: 'Film de fenêtre', ar: 'نافذة الشفافية' },
        v: { en: 'Crystal clear anti-fog PET / PLA film', ru: 'Прозрачная антизапотевающая PET/PLA пленка', ro: 'Folie PET / PLA anti-aburire', de: 'Kristallklare Anti-Beschlag PET/PLA Folie', fr: 'Film PET / PLA cristal anti-buée', ar: 'بلاستيك شفاف مضاد للتكثف' }
      },
      {
        k: { en: 'Lamination', ru: 'Ламинация', ro: 'Laminare', de: 'Laminierung', fr: 'Lamination', ar: 'الطبقة الواقية' },
        v: { en: 'Greaseproof & moisture barrier lamination', ru: 'Жиростойкая и влагозащитная ламинация', ro: 'Laminare rezistentă la grăsime și umiditate', de: 'Fett- & Feuchtigkeitsbeständige Laminierung', fr: 'Lamination ingraissable & anti-humidité', ar: 'طبقة معزولة للدهون والرطوبة' }
      },
      {
        k: { en: 'Food Safety', ru: 'Пищевая безопасность', ro: 'Siguranță alimentară', de: 'Lebensmittelsicherheit', fr: 'Sécurité alimentaire', ar: 'سلامة الأغذية' },
        v: { en: 'Direct food contact FDA & EU certified', ru: 'Сертификат прямого контакта с едой FDA и ЕС', ro: 'Certificat contact alimentar FDA și UE', de: 'Zertifiziert für direkten Lebensmittelkontakt FDA & EU', fr: 'Certifié contact alimentaire direct FDA & UE', ar: 'معتمد للملامسة المباشرة للأغذية' }
      },
      {
        k: { en: 'Temperature Limit', ru: 'Температурный режим', ro: 'Limită temperatură', de: 'Temperaturbereich', fr: 'Limite de température', ar: 'حدود الحرارة' },
        v: { en: '-40°C freezer to +220°C oven parchment', ru: 'От -40°C заморозка до +220°C запекание', ro: 'De la -40°C congelare la +220°C cuptor', de: 'Von -40°C Tiefkühlung bis +220°C Backofen', fr: 'De -40°C congélation à +220°C au four', ar: 'من -40 مئوية تجميد إلى +220 مئوية فرن' }
      }
    ],
    products: [
      { icon: '📦', img: './assets/images/products/cat_1/prod_1.jpg', name: { en: 'Square Window Cake Boxes 25x25cm', ru: 'Квадратные коробки для тортов с окном', ro: 'Cutii pătrate pentru tort cu fereastră', de: 'Quadratische Tortenboxen mit Fenster', fr: 'Boîtes à gâteaux carrées avec fenêtre', ar: 'علب كعك مربعة مع نافذة شفافة' } },
      { icon: '🎂', img: './assets/images/products/cat_1/prod_10.jpg', name: { en: 'Tall Layer Cake Boxes with Handle', ru: 'Высокие коробки для многоярусных тортов', ro: 'Cutii înalte pentru torturi supraetajate', de: 'Hohe Etagentorten-Boxen mit Griff', fr: 'Boîtes hautes pour gâteaux à étages', ar: 'علب كعك طبقات مرتفعة بمقبض' } },
      { icon: '🪙', img: './assets/images/products/cat_1/prod_11.jpg', name: { en: 'Gold Round Cake Boards 3mm', ru: 'Золотые круглые подложки для тортов 3мм', ro: 'Discuri aurii rotunde pentru tort 3mm', de: 'Goldene runde Tortenretter 3mm', fr: 'Supports gâteaux rond Or 3mm', ar: 'أطباق كيك دائرية ذهبية 3 مم' } },
      { icon: '🥈', img: './assets/images/products/cat_1/prod_12.jpg', name: { en: 'Silver Square Cake Boards 4mm', ru: 'Серебряные квадратные подложки 4мм', ro: 'Discuri argintii pătrate 4mm', de: 'Silberne quadratische Tortenplatten 4mm', fr: 'Supports carrés Argent 4mm', ar: 'أطباق كيك مربعة فضية 4 مم' } },
      { icon: '📜', img: './assets/images/products/cat_1/prod_13.jpg', name: { en: 'Siliconized Baking Parchment Rolls', ru: 'Пергаментная бумага в рулонах для выпечки', ro: 'Hârtie de copt siliconată rola', de: 'Silikonisierte Backpapier-Rollen', fr: 'Rouleaux papier cuisson siliconé', ar: 'ورق الخبز بالفرن المغلف بالسيليكون' } },
      { icon: '🧁', img: './assets/images/products/cat_1/prod_14.jpg', name: { en: 'Disposable Heavy Duty Piping Bags 18 Inch', ru: 'Кондитерские мешки повышенной прочности 18"', ro: 'Poșuri de unică folosință rezistente 18"', de: 'Einweg-Spritzbeutel extra stark 18"', fr: 'Poches à douille jetables renforcées 18"', ar: 'أكياس تزيين الكيك سميكة 18 بوصة' } },
      { icon: '🧁', img: './assets/images/products/cat_1/prod_15.jpg', name: { en: 'Stainless Steel Pastry Nozzles Set', ru: 'Наборы стальных кондитерских насадок', ro: 'Set duiuri patiserie din inox', de: 'Edelstahl Tüllen-Set für Gebäck', fr: 'Kits douilles à pâtisserie en inox', ar: 'طقم أقماع وتزيين الحلويات الستانلس' } },
      { icon: '🧁', img: './assets/images/products/cat_1/prod_16.jpg', name: { en: 'Cupcake Boxes with 6-Hole Inserts', ru: 'Коробки для капкейков на 6 ячеек', ro: 'Cutii cupcakes cu inserție 6 locuri', de: 'Cupcake-Boxen mit 6er Inlay', fr: 'Boîtes pour 6 cupcakes avec calage', ar: 'علب الكب كيك 6 خانات' } },
      { icon: '🍬', img: './assets/images/products/cat_1/prod_17.jpg', name: { en: 'Macaron Window Gift Boxes', ru: 'Подарочные коробки для макаронс с окном', ro: 'Cutii cadou macarons cu fereastră', de: 'Macaron-Geschenkboxen mit Fenster', fr: 'Boîtes cadeaux pour macarons avec fenêtre', ar: 'علب هدايا الماكرون الفرنسية' } },
      { icon: '🍰', img: './assets/images/products/cat_1/prod_18.jpg', name: { en: 'Transparent Monoport Dessert Boxes', ru: 'Прозрачные коробки для десертов монопорций', ro: 'Cutii transparente monoporție desert', de: 'Transparente Einzeldessert-Boxen', fr: 'Boîtes transparentes pour desserts individuels', ar: 'علب الحلويات والحلويات الفردية الشفافة' } },
      { icon: '🍫', img: './assets/images/products/cat_1/prod_19.jpg', name: { en: 'Chocolate & Truffle Gift Boxes', ru: 'Коробки для конфет и трюфелей', ro: 'Cutii cadou ciocolată și trufe', de: 'Schokoladen- & Trüffel-Geschenkboxen', fr: 'Boîtes cadeaux pour chocolats & truffes', ar: 'علب شوكولاتة وترافل فاخرة' } },
      { icon: '🥐', img: './assets/images/products/cat_1/prod_2.jpg', name: { en: 'Bakery Pie & Tart Cardboard Boxes', ru: 'Картонные коробки для пирогов и тартов', ro: 'Cutii carton pentru tarte și plăcinte', de: 'Kartonboxen für Kuchen & Tarten', fr: 'Boîtes carton pour tartes & quiches', ar: 'علب كرتون للمخبوزات والفطائر' } }
    ]
  },

  {
    id: 2,
    group: 'food',
    icon: '🌾',
    img: './assets/images/products/cat_2/header.jpg',
    chip: {
      en: 'Food Supplies', ru: 'Пищевая продукция', ro: 'Produse alimentare', de: 'Nahrungsmittel', fr: 'Produits alimentaires', ar: 'منتجات غذائية'
    },
    title: {
      en: 'Food Products & Ingredients', ru: 'Продукты питания', ro: 'Produse alimentare & Ingrediente', de: 'Lebensmittel & Zutaten', fr: 'Produits alimentaires & Ingrédients', ar: 'المواد والمنتجات الغذائية'
    },
    desc: {
      en: 'Bulk food ingredients, refined sugars, cooking oils, portioned honeys, and jams for commercial food manufacturing.',
      ru: 'Пищевое сырье оптом, сахар-рафинад, растительные масла, порционный мед и джемы.',
      ro: 'Ingrediente alimentare angro, zahăr rafinat, uleiuri, miere și gemuri porționate.',
      de: 'Lebensmittelzutaten in Großmengen, raffinierter Zucker, Speiseöle, Honig- und Marmeladenportionen.',
      fr: 'Ingrédients alimentaires en gros, sucre raffiné, huiles de cuisson, miel et confitures en portions.',
      ar: 'مكونات غذائية بالجملة، سكر مكرر، زيوت طهي، عسل ومربى في عبوات صغيرة للمنشآت الغذائية.'
    },
    specs: [
      {
        k: { en: 'Certifications', ru: 'Сертификаты', ro: 'Certificări', de: 'Zertifizierungen', fr: 'Certifications', ar: 'شهادات الجودة' },
        v: { en: 'ISO 22000, HACCP, Halal, Kosher certified', ru: 'ISO 22000, HACCP, Халяль, Кошер', ro: 'ISO 22000, HACCP, Halal, Kosher', de: 'ISO 22000, HACCP, Halal, Koscher', fr: 'ISO 22000, HACCP, Halal, Kascher', ar: 'ISO 22000 ، HACCP ، حلال ، كوشير' }
      },
      {
        k: { en: 'Bulk Packaging', ru: 'Оптовая тара', ro: 'Ambalaj angro', de: 'Großverpackung', fr: 'Emballage en vrac', ar: 'التعبئة بالجملة' },
        v: { en: '25kg Bags, 1000L IBC Tins & Portion Cups', ru: 'Мешки 25кг, IBC 1000л, Теврокубы и баночки', ro: 'Saci 25kg, IBC 1000L și caserole', de: '25kg Säcke, 1000L IBC & Portionsbecher', fr: 'Sacs 25kg, IBC 1000L & pots individuel', ar: 'أكياس 25 كجم وحاويات 1000 لتر' }
      },
      {
        k: { en: 'Purity Grade', ru: 'Степень очистки', ro: 'Grad puritate', de: 'Reinheitsgrad', fr: 'Degré de pureté', ar: 'درجة النقاء' },
        v: { en: '99.8% ICUMSA 45 refined white sugar', ru: '99.8% ICUMSA 45 белый сахар-рафинад', ro: '99.8% ICUMSA 45 zahăr rafinat', de: '99.8% ICUMSA 45 raffinierter Zucker', fr: '99.8% ICUMSA 45 sucre raffiné', ar: 'سكر أبيض مكرر نقي 99.8%' }
      },
      {
        k: { en: 'Quality Testing', ru: 'Контроль качества', ro: 'Control calitate', de: 'Qualitätsprüfung', fr: 'Contrôle qualité', ar: 'اختبارات الجودة' },
        v: { en: 'Batch lab analysis & GMO-free testing', ru: 'Лабораторный анализ каждой партии, без ГМО', ro: 'Analiză lot de laborator, fără GMO', de: 'Chargen-Laboranalyse & GVO-frei', fr: 'Analyse de lot en laboratoire & sans OGM', ar: 'فحص مخبري لكل دفعة وخالي من التعديل الوراثي' }
      },
      {
        k: { en: 'Storage Standards', ru: 'Стандарты хранения', ro: 'Standarde depozitare', de: 'Lagerstandards', fr: 'Normes de stockage', ar: 'معايير التخزين' },
        v: { en: 'Climate-controlled warehouse storage', ru: 'Склады с климат-контролем', ro: 'Depozitare cu climatizat', de: 'Klimatisierte Lagerung', fr: 'Stockage en entrepôt climatisé', ar: 'تخزين في مستودعات تكييف حراري' }
      }
    ],
    products: [
      { icon: '🍯', img: './assets/images/products/cat_2/prod_1.jpg', name: { en: 'Portion Natural Honey 20g Jars', ru: 'Порционный натуральный мед в стекле 20г', ro: 'Miere naturală porționată la borcan 20g', de: 'Portionshonig 20g Gläser', fr: 'Miel naturel en petit pot verre 20g', ar: 'عسل طبيعي في برطمانات زجاجية 20 جرام' } },
      { icon: '🍓', img: './assets/images/products/cat_2/prod_10.jpg', name: { en: 'Portion Strawberry Jam 20g Cups', ru: 'Порционный клубничный джем 20г', ro: 'Gem de căpșuni porționat 20g', de: 'Erdbeermarmelade Portionsbecher 20g', fr: 'Confiture de fraise en barquette 20g', ar: 'مربى فراولة في عبوات 20 جرام' } },
      { icon: '🍬', img: './assets/images/products/cat_2/prod_11.jpg', name: { en: 'Refined White Sugar ICUMSA 45 (25kg)', ru: 'Белый сахар ICUMSA 45 в мешках 25кг', ro: 'Zahăr rafinat alb ICUMSA 45 (25kg)', de: 'Raffinierter weißer Zucker ICUMSA 45 (25kg)', fr: 'Sucre blanc raffiné ICUMSA 45 (25kg)', ar: 'سكر أبيض مكرر ICUMSA 45 أكياس 25 كجم' } },
      { icon: '🪵', img: './assets/images/products/cat_2/prod_12.jpg', name: { en: 'Brown Cane Sugar Bulk 25kg', ru: 'Тростниковый сахар оптом 25кг', ro: 'Zahăr brun din trestie angro 25kg', de: 'Brauner Rohrzucker in 25kg Säcken', fr: 'Sucre roux de canne en sacs de 25kg', ar: 'سكر بني قصب السكر بالجملة 25 كجم' } },
      { icon: '🧴', img: './assets/images/products/cat_2/prod_13.jpg', name: { en: 'Refined Sunflower Cooking Oil 5L', ru: 'Подсолнечное масло 5л канистры', ro: 'Ulei rafinat floarea soarelui 5L', de: 'Raffiniertes Sonnenblumenöl 5L', fr: 'Huile de tournesol raffinée 5L', ar: 'زيت عباد الشمس المكرر عبوات 5 لتر' } },
      { icon: '🫒', img: './assets/images/products/cat_2/prod_14.jpg', name: { en: 'Extra Virgin Olive Oil Bulk 18L Tin', ru: 'Оливковое масло Extra Virgin 18л', ro: 'Ulei de măsline extravirgin 18L', de: 'Natives Olivenöl Extra 18L Kanister', fr: 'Huile d’olive extra vierge 18L', ar: 'زيت زيتون بكر ممتاز صفيح 18 لتر' } },
      { icon: '🧂', img: './assets/images/products/cat_2/prod_15.jpg', name: { en: 'Ground Black Pepper Bulk 1kg', ru: 'Молотый черный перец 1кг', ro: 'Piper negru măcinat 1kg', de: 'Gemahlener schwarzer Pfeffer 1kg', fr: 'Poivre noir moulu en sac 1kg', ar: 'فلفل أسود مطحون عبوة 1 كجم' } },
      { icon: '🧂', img: './assets/images/products/cat_2/prod_16.jpg', name: { en: 'Iodized Food Grade Table Salt 25kg', ru: 'Пищевая йодированная соль 25кг', ro: 'Sare iodată alimentară 25kg', de: 'Jodiertes Speisesalz 25kg', fr: 'Sel de table iodé alimentaire 25kg', ar: 'ملح طعام يودي 25 كجم' } },
      { icon: '🌶️', img: './assets/images/products/cat_2/prod_17.jpg', name: { en: 'Red Pepper Flakes & Sweet Paprika', ru: 'Сушеный красный перец и паприка', ro: 'Fulg de ardei roșu și boia dulce', de: 'Chiliflocken & Süße Paprika', fr: 'Piment en flocons & Paprika doux', ar: 'رقائق الفلفل الأحمر والبابريكا الحلوة' } },
      { icon: '🌿', img: './assets/images/products/cat_2/prod_18.jpg', name: { en: 'Culinary Oregano & Thyme Bulk', ru: 'Орегано и тимьян сушеный оптом', ro: 'Oregano și cimbru uscat angro', de: 'Oregano & Thymian in Großmengen', fr: 'Origan & Thyme séché en gros', ar: 'أوريغانو وزعتر مجفف بالجملة' } },
      { icon: '🌾', img: './assets/images/products/cat_2/prod_19.jpg', name: { en: 'Long Grain Basmati Rice 25kg Bags', ru: 'Рис Басмати длиннозерный 25кг', ro: 'Orez Basmati cu bob lung 25kg', de: 'Langkorn-Basmati-Reis 25kg Säcke', fr: 'Riz Basmati grain long sacs 25kg', ar: 'أرز بسمتي طويل الحبة أكياس 25 كجم' } },
      { icon: '🫘', img: './assets/images/products/cat_2/prod_2.jpg', name: { en: 'Red & Green Lentils Bulk 25kg', ru: 'Красная и зеленая чечевица оптом 25кг', ro: 'Linte roșie și verde angro 25kg', de: 'Rote & Grüne Linsen in 25kg Säcken', fr: 'Lentilles rouges & vertes en sacs 25kg', ar: 'عدس أحمر وأخضر بالجملة 25 كجم' } }
    ]
  },

  {
    id: 3,
    group: 'cleaning',
    icon: '🧼',
    img: './assets/images/products/cat_3/header.jpg',
    chip: {
      en: 'Hygiene & Clean', ru: 'Бытовая химия', ro: 'Detergenți & Curățenie', de: 'Reinigungsmittel', fr: 'Nettoyage & Détergents', ar: 'مواد التنظيف والتعقيم'
    },
    title: {
      en: 'Cleaning & Detergent Products', ru: 'Чистящие средства', ro: 'Produse de curățenie & Detergenți', de: 'Reinigungs- & Waschmittel', fr: 'Produits de nettoyage & Détergents', ar: 'منتجات ومواد التنظيف والمنظفات'
    },
    desc: {
      en: 'Professional dishwashing liquids, surface disinfectants, industrial laundry detergents, and floor cleaners for HoReCa.',
      ru: 'Профессиональные средства для мытья посуды, дезинфекция поверхностей, стиральные порошки для прачечных.',
      ro: 'Detergenți profesionali vase, dezinfectanți suprafețe, detergenți spălătorie industrială.',
      de: 'Professionelle Spülmittel, Flächendesinfektionsmittel, industrielle Waschmittel.',
      fr: 'Liquides vaisselle professionnels, désinfectants de surface, lessives industrielles.',
      ar: 'سوائل غسيل الأطباق الاحترافية، مطهرات السطوح، منظفات الغسيل الصناعي بالفنادق والمطاعم.'
    },
    specs: [
      {
        k: { en: 'Packaging Volumes', ru: 'Объемы упаковки', ro: 'Volume ambalare', de: 'Verpackungsgrößen', fr: 'Volumes d’emballage', ar: 'أحجام العبوات' },
        v: { en: '1L, 5L, 10L, 20L Canisters & 1000L IBC Tank', ru: 'Канистры 1л, 5л, 10л, 20л и IBC 1000л', ro: 'Canoane 1L, 5L, 10L, 20L și IBC 1000L', de: 'Kanister 1L, 5L, 10L, 20L & 1000L IBC', fr: 'Bidons 1L, 5L, 10L, 20L & IBC 1000L', ar: 'عبوات 1، 5، 10، 20 لتر وخزانات 1000 لتر' }
      },
      {
        k: { en: 'Active Concentration', ru: 'Концентрация вещества', ro: 'Concentrație substanță', de: 'Wirkstoffkonzentration', fr: 'Concentration active', ar: 'تركيز المادة الفعالة' },
        v: { en: 'High dilution ratio up to 1:100', ru: 'Высокая концентрация разведения до 1:100', ro: 'Raport diluție înalt până la 1:100', de: 'Hohes Verdünnungsverhältnis bis 1:100', fr: 'Rapport de dilution élevé jusqu’à 1:100', ar: 'نسبة تخفيف عالية تصل إلى 1:100' }
      },
      {
        k: { en: 'Disinfection Standard', ru: 'Стандарты дезинфекции', ro: 'Standard dezinsecție', de: 'Desinfektionsnorm', fr: 'Norme désinfection', ar: 'معيار التعقيم' },
        v: { en: 'EN 1276 & EN 1650 Bactericidal, Fungicidal', ru: 'Стандарты EN 1276 и EN 1650 антибактериальный', ro: 'EN 1276 și EN 1650 bactericid și fungicid', de: 'EN 1276 & EN 1650 Bakterizid & Fungizid', fr: 'EN 1276 & EN 1650 Bactéricide & Fongicide', ar: 'مطابق للمواصفات الأوروبية EN 1276 و EN 1650' }
      },
      {
        k: { en: 'pH Range', ru: 'Уровень pH', ro: 'Nivel pH', de: 'pH-Wert', fr: 'Plage de pH', ar: 'درجة الحموضة pH' },
        v: { en: 'Neutral (7.0) to Alkaline (11.0) formulas', ru: 'Нейтральный (7.0) и щелочные формулы', ro: 'De la neutru (7.0) la alcalin (11.0)', de: 'Neutral (7,0) bis Alkalisch (11,0)', fr: 'Formules neutres (7,0) à alcalines (11,0)', ar: 'تركيبات متوازنة من 7.0 إلى 11.0' }
      },
      {
        k: { en: 'Biodegradability', ru: 'Биоразлагаемость', ro: 'Biodegradabilitate', de: 'Biologische Abbaubarkeit', fr: 'Biodégradabilité', ar: 'التحلل البيئي' },
        v: { en: '>90% OECD 301 compliant surfactants', ru: '>90% соответствие стандартам OECD 301', ro: '>90% conformitate OECD 301', de: '>90% OECD 301 konforme Tenside', fr: '>90% conforme OECD 301', ar: 'أكثر من 90% مواد قابلة للتحلل بيئياً' }
      }
    ],
    products: [
      { icon: '🧴', img: './assets/images/products/cat_3/prod_1.jpg', name: { en: 'Concentrated Lemon Dishwashing Liquid 5L', ru: 'Концентрат для мытья посуды Лимон 5л', ro: 'Detergent concentrat vase Lămâie 5L', de: 'Konzentriertes Zitrone Spülmittel 5L', fr: 'Liquide vaisselle concentré citron 5L', ar: 'سائل غسيل الأطباق بالليمون مركز 5 لتر' } },
      { icon: '🍽️', img: './assets/images/products/cat_3/prod_10.jpg', name: { en: 'Commercial Dishwasher Rinse Aid 10L', ru: 'Ополаскиватель для посудомоечных машин 10л', ro: 'Lichid clătire mașină spălat vase 10L', de: 'Klarspüler für gewerbliche Spülmaschinen 10L', fr: 'Liquide de rinçage vaisselle pro 10L', ar: 'مساعد شطف غسالات الأطباق الصناعية 10 لتر' } },
      { icon: '🧽', img: './assets/images/products/cat_3/prod_11.jpg', name: { en: 'Floor Disinfectant Lavender 5L', ru: 'Дезинфицирующее средство для полов Лаванда 5л', ro: 'Dezinfectant pardoseli Levănțică 5L', de: 'Bodendesinfektionsmittel Lavendel 5L', fr: 'Désinfectant sols lavande 5L', ar: 'مطهر ومعطر أرضيات باللافندر 5 لتر' } },
      { icon: '🧴', img: './assets/images/products/cat_3/prod_12.jpg', name: { en: 'Surface Sanitizer Spray 750ml', ru: 'Спрей дезинфекция поверхностей 750мл', ro: 'Spray dezinfectant suprafețe 750ml', de: 'Flächendesinfektionsspray 750ml', fr: 'Désinfectant surfaces spray 750ml', ar: 'بخاخ تعقيم الأسطح 750 مل' } },
      { icon: '🧺', img: './assets/images/products/cat_3/prod_13.jpg', name: { en: 'Industrial Laundry Powder Detergent 20kg', ru: 'Стиральный порошок для прачечных 20кг', ro: 'Detergent pudră spălătorie industrială 20kg', de: 'Industrielles Waschpulver 20kg', fr: 'Lessive poudre industrielle 20kg', ar: 'مسحوق غسيل صناعي للمغاسل 20 كجم' } },
      { icon: '🌸', img: './assets/images/products/cat_3/prod_14.jpg', name: { en: 'Fabric Softener & Conditioner 10L', ru: 'Кондиционер для белья 10л', ro: 'Balsam rufe concentrat 10L', de: 'Weichspüler & Konditionierer 10L', fr: 'Adoucissant & assouplissant textile 10L', ar: 'معطر ومنعم ملابس مركز 10 لتر' } },
      { icon: '🧼', img: './assets/images/products/cat_3/prod_15.jpg', name: { en: 'Antibacterial Liquid Hand Soap 5L', ru: 'Антибактериальное жидкое мыло 5л', ro: 'Săpun lichid antibacterian 5L', de: 'Antibakterielle Flüssighandseife 5L', fr: 'Savon liquide antibactérien 5L', ar: 'صابون أيدي سائل مضاد للبكتيريا 5 لتر' } },
      { icon: '🧼', img: './assets/images/products/cat_3/prod_16.jpg', name: { en: 'Foam Hand Soap Refill Canister 5L', ru: 'Пенное мыло для рук канистра 5л', ro: 'Spumă săpun mâini rezerve 5L', de: 'Schaumseife-Nachfüllung 5L', fr: 'Recharge savon mousse 5L', ar: 'صابون رغوة سائل عبوة 5 لتر' } },
      { icon: '🪟', img: './assets/images/products/cat_3/prod_17.jpg', name: { en: 'Glass & Mirror Cleaner Spray 750ml', ru: 'Средство для стекол и зеркал 750мл', ro: 'Detergent geamuri și oglinzi 750ml', de: 'Glas- & Spiegelreiniger Spray 750ml', fr: 'Nettoyant vitres & miroirs 750ml', ar: 'منظف وملمع الزجاج والمرايا 750 مل' } },
      { icon: '🍳', img: './assets/images/products/cat_3/prod_18.jpg', name: { en: 'Heavy Duty Kitchen Degreaser 5L', ru: 'Средство от жира на кухне 5л', ro: 'Degresant bucătărie profesional 5L', de: 'Starker Küchenentfetter 5L', fr: 'Dégraissant cuisine puissant 5L', ar: 'منظف ومزيل دهون المطابخ الثقيلة 5 لتر' } },
      { icon: '🧪', img: './assets/images/products/cat_3/prod_19.jpg', name: { en: 'Chlorinated Bleach Sanitizer 5L', ru: 'Хлорный отбеливатель и дезинфектант 5л', ro: 'Inălbitor clorurat dezinfectant 5L', de: 'Chlor-Bleich- & Desinfektionsmittel 5L', fr: 'Eau de Javel désinfectante 5L', ar: 'مبيض ومطهر كلور مركز 5 لتر' } },
      { icon: '🚽', img: './assets/images/products/cat_3/prod_2.jpg', name: { en: 'Toilet Bowl Cleaner Acid Gel 1L', ru: 'Гель для чистки унитазов 1л', ro: 'Gel acid curățare toaletă 1L', de: 'Säure-WC-Reiniger Gel 1L', fr: 'Gel nettoyant WC acide 1L', ar: 'جل تنظيف وتعقيم الحمامات 1 لتر' } }
    ]
  },

  {
    id: 4,
    group: 'packaging',
    icon: '🌿',
    img: './assets/images/products/cat_4/header.jpg',
    chip: {
      en: 'Kraft Pouches', ru: 'Крафт Дойпаки', ro: 'Pungi Doy-Pack kraft', de: 'Doypack Kraftbeutel', fr: 'Pouches Doy-Pack Kraft', ar: 'أكياس دوي باك كرافت'
    },
    title: {
      en: 'Doy-Pack Kraft Pouches & Zip Bags', ru: 'Крафт Дойпаки с зип-замком', ro: 'Pungi Doy-Pack Kraft cu fermoar ZIP', de: 'Doypack Kraftpapierbeutel mit Druckverschluss', fr: 'Sachets Doy-Pack Kraft avec Zip', ar: 'أكياس دوي باك كرافت الوقوفية مزودة بسحاب'
    },
    desc: {
      en: 'Stand-up kraft pouches with zip closure, transparent window, degassing valve for coffee beans, and aluminum barrier layer.',
      ru: 'Дой-паки из крафт-бумаги с зип-замком, прозрачным окном, клапаном дегазации для кофе и фольгой.',
      ro: 'Pungi Doy-Pack din hârtie kraft cu fermoar, fereastră transparentă, supapă degazare cafea.',
      de: 'Stehbeutel aus Kraftpapier mit Druckverschluss, Sichtfenster, Entgasungsventil für Kaffeebohnen.',
      fr: 'Sachets tenus debout en papier kraft avec zip, fenêtre transparente, valve de dégazage pour le café.',
      ar: 'أكياس كرافت وقوفية مزودة بسحاب إغلاق، نافذة شفافة، وصمام تنفيس لضغط قهوة البن.'
    },
    specs: [
      {
        k: { en: 'Barrier Structure', ru: 'Барьерная структура', ro: 'Structură barieră', de: 'Barrierestruktur', fr: 'Structure barrière', ar: 'تركيب طبقات العزل' },
        v: { en: 'Kraft Paper / VMPET / PE or AL Foil', ru: 'Крафт бумага / VMPET / PE или AL Фольга', ro: 'Hârtie Kraft / VMPET / PE sau folie AL', de: 'Kraftpapier / VMPET / PE oder AL-Folie', fr: 'Papier Kraft / VMPET / PE ou alu', ar: 'ورق كرافت / بوليستر معدني / بولي إيثيلين' }
      },
      {
        k: { en: 'Zipper Re-sealable', ru: 'Многоразовый зип-замок', ro: 'Fermoar ZIP reutilizabil', de: 'Wiederverschließbarer Druckverschluss', fr: 'Fermeture zip réutilisable', ar: 'سحاب إغلاق محكم' },
        v: { en: 'Press-to-close heavy duty zip lock', ru: 'Надежный замок Press-to-close', ro: 'Fermoar Press-to-close rezistent', de: 'Strapazierfähiger Press-to-Close Verschluss', fr: 'Zip haute résistance Press-to-close', ar: 'سحاب ضغط كرافت قوي إعادة إغلاق' }
      },
      {
        k: { en: 'Coffee Degassing Valve', ru: 'Клапан дегазации кофе', ro: 'Supapă degazare cafea', de: 'Kaffee-Entgasungsventil', fr: 'Valve de dégazage café', ar: 'صمام تنفيس القهوة' },
        v: { en: 'One-way degassing aroma valve integration', ru: 'Интеграция одностороннего клапана аромата', ro: 'Integrare supapă de aromă unidirecțională', de: 'Einweg-Aromaventil integrierbar', fr: 'Intégration valve d’arôme unidirectionnelle', ar: 'صمام اتجاه واحد للحفاظ على نكهة البن' }
      },
      {
        k: { en: 'Window Formats', ru: 'Форматы окошек', ro: 'Formate fereastră', de: 'Fensterformate', fr: 'Formats de fenêtre', ar: 'أشكال النوافذ الشفافة' },
        v: { en: 'Rectangular, oval, or full transparent side', ru: 'Прямоугольное, овальное или прозрачный бок', ro: 'Dreptunghiular, oval sau lateral transparent', de: 'Rechteckig, oval oder transparente Seite', fr: 'Rectangulaire, ovale ou côté transparent', ar: 'مستطيل، بيضاوي أو جانب شفاف بالكامل' }
      },
      {
        k: { en: 'Pouch Volumes', ru: 'Объемы пакетов', ro: 'Volume pungi', de: 'Beutelvolumen', fr: 'Volumes des sachets', ar: 'أحجام الأكياس' },
        v: { en: '100g, 250g, 500g, 1000g dry capacity', ru: 'Вместимость 100г, 250г, 500г, 1000г', ro: 'Capacitate 100g, 250g, 500g, 1000g', de: 'Füllmenge 100g, 250g, 500g, 1000g', fr: 'Contenance 100g, 250g, 500g, 1000g', ar: 'سعة 100 جرام، 250 جرام، 500 جرام، 1000 جرام' }
      }
    ],
    products: [
      { icon: '☕', img: './assets/images/products/cat_4/prod_1.jpg', name: { en: 'Valved Roasted Coffee Bean Doypack 250g', ru: 'Пакеты для кофе с клапаном 250г', ro: 'Pungi cafea cu supapă 250g', de: 'Kaffeebeutel mit Ventil 250g', fr: 'Sachets café avec valve 250g', ar: 'أكياس لحفظ البن المزودة بصمام 250 جرام' } },
      { icon: '🫘', img: './assets/images/products/cat_4/prod_10.jpg', name: { en: 'Rectangular Window Kraft Doypack 500g', ru: 'Крафт дойпак с прямоугольным окном 500г', ro: 'Pungi Doypack kraft cu fereastră dreptunghiulară', de: 'Rechteckfenster Kraft Doypack 500g', fr: 'Sachets Doypack kraft fenêtre rectangulaire', ar: 'أكياس كرافت مع نافذة مستطيلة 500 جرام' } },
      { icon: '🥜', img: './assets/images/products/cat_4/prod_11.jpg', name: { en: 'Oval Window Stand-Up Kraft Pouch', ru: 'Крафт дойпак с овальным окном', ro: 'Pungi Doypack kraft cu fereastră ovală', de: 'Ovalfenster Kraft Stehbeutel', fr: 'Sachets kraft fenêtre ovale', ar: 'أكياس كرافت وقوفية نافذة بيضاوية' } },
      { icon: '✨', img: './assets/images/products/cat_4/prod_2.jpg', name: { en: 'Full Transparent Front Kraft Back Doypack', ru: 'Дойпак с прозрачным фасадом и крафт спинкой', ro: 'Pungi Doypack fața transparentă spate kraft', de: 'Transparente Front Kraft-Rücken Doypack', fr: 'Doypack face transparente dos kraft', ar: 'أكياس كرافت جانب شفاف بالكامل' } },
      { icon: '🖤', img: './assets/images/products/cat_4/prod_3.jpg', name: { en: 'Matte Black Aluminum Barrier Zip Pouch', ru: 'Матовые черные дойпаки с фольгой', ro: 'Pungi Doypack negru mat cu aluminiu', de: 'Mattschwarze Alu-Barriere-Zip-Beutel', fr: 'Sachets noir mat barrière alu zip', ar: 'أكياس دوي باك سوداء فاخرة مع سحاب' } },
      { icon: '🤍', img: './assets/images/products/cat_4/prod_4.jpg', name: { en: 'Matte White Aluminum Foil Doypack', ru: 'Матовые белые фольгированные дойпаки', ro: 'Pungi Doypack alb mat cu aluminiu', de: 'Mattweiße Alu-Barriere-Zip-Beutel', fr: 'Sachets blanc mat barrière alu zip', ar: 'أكياس دوي باك بيضاء مع عازل ألومنيوم' } },
      { icon: '🧴', img: './assets/images/products/cat_4/prod_5.jpg', name: { en: 'Kraft Pouch with Liquid Spout & Cap', ru: 'Крафт дойпак с носиком-дозатором', ro: 'Pungi kraft cu dop pentru lichide', de: 'Kraft-Standbeutel mit Ausgießer & Kappe', fr: 'Sachet kraft avec bouchon verseur', ar: 'أكياس كرافت وقوفية مع صنبور صب' } },
      { icon: '🪙', img: './assets/images/products/cat_4/prod_6.jpg', name: { en: 'Metallic Silver Vacuum Zip Pouch', ru: 'Серебряные вакуумные дойпаки', ro: 'Pungi argintii metalizate cu fermoar', de: 'Silberne Metall-Vakuum-Zip-Beutel', fr: 'Sachets sous vide argentés avec zip', ar: 'أكياس تفريغ الهواء الفضية مع سحاب' } },
      { icon: '🌱', img: './assets/images/products/cat_4/prod_7.jpg', name: { en: 'Eco Compostable PLA Barrier Zip Bag', ru: 'Биоразлагаемые дойпаки из PLA', ro: 'Pungi bio compostabile PLA cu fermoar', de: 'Kompostierbare PLA Barriere-Zip-Beutel', fr: 'Sachets compostables PLA barrière zip', ar: 'أكياس دوي باك عضوية قابلة للتحلل' } },
      { icon: '☕', img: './assets/images/products/cat_4/prod_8.jpg', name: { en: 'Side Gusseted Coffee Valve Bag 1kg', ru: 'Пакеты для кофе с фальцами и клапаном 1кг', ro: 'Pungi cafea pliu lateral cu supapă 1kg', de: 'Seitenfalten-Kaffeebeutel mit Ventil 1kg', fr: 'Sachets café soufflets latéraux valve 1kg', ar: 'أكياس بن بطيات جانبية وصمام 1 كجم' } },
      { icon: '📦', img: './assets/images/products/cat_4/prod_9.jpg', name: { en: 'Flat Bottom Quad Seal Box Pouch', ru: 'Пакеты с плоским дном 4-х шовные', ro: 'Pungi cu fund plat 4 sigilii', de: 'Flachboden-Standbeutel mit 4 Nähten', fr: 'Sachets fond plat 4 soudures', ar: 'أكياس قاع مسطح أربعة لحامات' } },
      { icon: '🌰', img: './assets/images/products/cat_4/prod_1.jpg', name: { en: 'Dried Fruit & Nuts Kraft Window Pouch', ru: 'Крафт пакеты для сухофруктов и орехов', ro: 'Pungi kraft pentru fructe uscate și alune', de: 'Kraftbeutel für Trockenfrüchte & Nüsse', fr: 'Sachets kraft pour fruits secs & noix', ar: 'أكياس كرافت للمكسرات والفواكه المجففة' } }
    ]
  },

  {
    id: 5,
    group: 'packaging',
    icon: '🛍️',
    img: './assets/images/products/cat_5/header.jpg',
    chip: {
      en: 'Kraft Bags', ru: 'Крафт-пакеты', ro: 'Pungi kraft', de: 'Kraftpapiertaschen', fr: 'Sacs en papier kraft', ar: 'أكياس ورق كرافت بمقابض'
    },
    title: {
      en: 'Kraft Paper Bags with Handles', ru: 'Бумажные крафт-пакеты с ручками', ro: 'Pungi din hârtie kraft cu mânere', de: 'Kraftpapiertaschen mit Henkel', fr: 'Sacs en papier kraft avec poignées', ar: 'أكياس ورق الكرافت ذات المقابض'
    },
    desc: {
      en: 'Brown and bleached white kraft paper bags with twisted, flat, or rope handles for retail fashion and food takeaway.',
      ru: 'Бумажные пакеты из белого и бурого крафта с кручеными, плоскими или веревочными ручками.',
      ro: 'Pungi din hârtie kraft natur și albă cu mânere răsucite, plate sau șnur.',
      de: 'Braune und weiße Kraftpapiertaschen mit gedrehten, flachen oder Kordelhenkeln.',
      fr: 'Sacs en papier kraft brun ou blanc avec poignées torsadées, meplat ou cordons.',
      ar: 'أكياس ورق كرافت بني وأبيض بمقابض ملتوية، مسطحة أو حبال ملونة للمتاجر والمطاعم.'
    },
    specs: [
      {
        k: { en: 'Paper Grammage', ru: 'Плотность бумаги', ro: 'Gramaj hârtie', de: 'Papiergewicht', fr: 'Grammage du papier', ar: 'وزن الورق' },
        v: { en: '70 - 150 gsm Scandinavian Kraft', ru: '70 - 150 г/м² скандинавский крафт', ro: '70 - 150 gsm Kraft scandinav', de: '70 - 150 g/m² Skandinavischer Kraft', fr: 'Kraft scandinave 70 - 150 g/m²', ar: 'ورق كرافت اسكندنافي 70 - 150 جرام' }
      },
      {
        k: { en: 'Handle Variations', ru: 'Виды ручек', ro: 'Tipuri mânere', de: 'Henkeltypen', fr: 'Types de poignées', ar: 'أنواع المقابض' },
        v: { en: 'Twisted paper cord, flat paper, PP rope', ru: 'Крученый бумажный шнур, плоские, веревочные', ro: 'Șnur răsucit, mâner plat, frânghie PP', de: 'Gedrehte Papierkordel, Flachhenkel, PP-Kordel', fr: 'Cordon torsadé, poignée plate, corde PP', ar: 'ورقي ملتوي، مسطح، أو حبل بولي بروبيلين' }
      },
      {
        k: { en: 'Max Load Capacity', ru: 'Макс. нагрузка', ro: 'Capacitate încărcare', de: 'Tragkraft', fr: 'Capacité de charge max', ar: 'التحمل الأقصى' },
        v: { en: 'Up to 12 kg reinforced bottom construction', ru: 'До 12 кг усиленная конструкция дна', ro: 'Până la 12 kg construcție fund ranforsată', de: 'Bis zu 12 kg verstärkter Boden', fr: 'Jusqu’à 12 kg fond renforcé', ar: 'تحمل يصل إلى 12 كجم بفضل القاع المقوى' }
      },
      {
        k: { en: 'Printing Quality', ru: 'Качество печати', ro: 'Calitate tipar', de: 'Druckqualität', fr: 'Qualité d’impression', ar: 'دقة الطباعة' },
        v: { en: 'Full surface HD flexographic photo printing', ru: 'Полноцветная HD флексопечать по всей поверхности', ro: 'Tipar flexografic HD pe toată suprafața', de: 'Vollflächiger HD-Flexodruck', fr: 'Impression flexo HD intégrale', ar: 'طباعة فلكسوغرافية كاملة عالية الدقة' }
      },
      {
        k: { en: 'Eco Sustainability', ru: 'Экологичность', ro: 'Sustenabilitate eco', de: 'Nachhaltigkeit', fr: 'Éco-responsabilité', ar: 'المعايير البيئية' },
        v: { en: '100% Recyclable FSC certified paper', ru: '100% перерабатываемая бумага FSC', ro: 'Hârtie 100% reciclabilă certificată FSC', de: '100% Recyclebares FSC-Papier', fr: 'Papier 100% recyclable certifié FSC', ar: 'ورق قابل للتدوير 100% معتمد من FSC' }
      }
    ],
    products: [
      { icon: '🛍️', img: './assets/images/products/cat_5/prod_1.jpg', name: { en: 'Brown Kraft Bags with Twisted Handles', ru: 'Бурые крафт-пакеты с кручеными ручками', ro: 'Pungi kraft natur cu mânere răsucite', de: 'Braune Krafttaschen mit gedrehtem Henkel', fr: 'Sacs kraft brun poignées torsadées', ar: 'أكياس كرافت بني بمقابض ورقية ملتوية' } },
      { icon: '🛍️', img: './assets/images/products/cat_5/prod_10.jpg', name: { en: 'Bleached White Kraft Bags with Handles', ru: 'Белые крафт-пакеты с кручеными ручками', ro: 'Pungi kraft alb cu mânere răsucite', de: 'Weiße Krafttaschen mit gedrehtem Henkel', fr: 'Sacs kraft blanc poignées torsadées', ar: 'أكياس كرافت أبيض بمقابض ملتوية' } },
      { icon: '🍔', img: './assets/images/products/cat_5/prod_11.jpg', name: { en: 'Flat Handle Takeaway Bags for Food Delivery', ru: 'Пакеты с плоскими ручками для доставки еды', ro: 'Pungi mânere plate pentru livrare mâncare', de: 'Flachhenkel-Taschen für Essen-Lieferservice', fr: 'Sacs poignées meplat livraison repas', ar: 'أكياس كرافت بمقابض مسطحة لتوصيل الطعام' } },
      { icon: '💼', img: './assets/images/products/cat_5/prod_12.jpg', name: { en: 'Rope Handle Luxury Boutiques Shoppers', ru: 'Крафт-пакеты с веревочными ручками для бутиков', ro: 'Pungi kraft de lux cu șnur pentru boutique', de: 'Luxus-Krafttaschen mit Kordel für Boutiquen', fr: 'Sacs kraft de luxe cordons pour boutiques', ar: 'أكياس كرافت فاخرة بمقابض حبال للمتاجر' } },
      { icon: '🥖', img: './assets/images/products/cat_5/prod_13.jpg', name: { en: 'SOS Block Bottom Bakery Bags (No Handles)', ru: 'Пакеты без ручек с прямоугольным дном', ro: 'Pungi fără mânere cu fund dreptunghiular', de: 'SOS-Blockbodenbeutel ohne Henkel', fr: 'Sacs fond bloc sans poignées boulangerie', ar: 'أكياس كرافت قاع مستطيل للمخابز بدون مقابض' } },
      { icon: '🍷', img: './assets/images/products/cat_5/prod_14.jpg', name: { en: 'Single Wine & Bottle Carrier Paper Bags', ru: 'Бумажные пакеты для 1 бутылки вина', ro: 'Pungi hârtie pentru o sticlă de vin', de: 'Einzelne Flaschen-Papiertaschen', fr: 'Sacs papier pour 1 bouteille de vin', ar: 'أكياس ورقية مخصصة لزجاجة نبيذ واحدة' } },
      { icon: '🍾', img: './assets/images/products/cat_5/prod_15.jpg', name: { en: 'Two-Bottle Wine Paper Carrier Bags', ru: 'Бумажные пакеты для 2 бутылок с разделителем', ro: 'Pungi hârtie pentru 2 sticle cu despărțitor', de: 'Doppel-Flaschen-Papiertaschen', fr: 'Sacs papier pour 2 bouteilles avec séparation', ar: 'أكياس ورقية مخصصة لحمل زجاجتين' } },
      { icon: '📦', img: './assets/images/products/cat_5/prod_16.jpg', name: { en: 'Wide Bottom Takeaway Burger Carrier Bags', ru: 'Широкие пакеты для коробок с бургерами', ro: 'Pungi late pentru cutii burgeri', de: 'Breitboden-Taschen für Burger-Boxen', fr: 'Sacs grand fond pour boîtes à burgers', ar: 'أكياس كرافت عريضة القاع لعلب الوجبات' } },
      { icon: '🛍️', img: './assets/images/products/cat_5/prod_17.jpg', name: { en: 'Die-Cut Handle Kraft Shopping Bags', ru: 'Крафт-пакеты с прорубной ручкой', ro: 'Pungi kraft cu mâner decupat', de: 'Kraft-Grifflochbeutel', fr: 'Sacs kraft à poignées découpées', ar: 'أكياس كرافت بفتحات يد مقصوصة' } },
      { icon: '✨', img: './assets/images/products/cat_5/prod_18.jpg', name: { en: 'Laminated Foil Stamped Gift Paper Bags', ru: 'Ламинированные пакеты с тиснением фольгой', ro: 'Pungi cadou din hârtie laminate cu folio', de: 'Laminierte Geschenk-Papiertaschen mit Folienprägung', fr: 'Sacs papier cadeau laminés dorure à chaud', ar: 'أكياس ورقية فاخرة مطبوعة بالبصمة الذهبية' } },
      { icon: '💎', img: './assets/images/products/cat_5/prod_19.jpg', name: { en: 'Mini Jewelry & Cosmetic Kraft Bags', ru: 'Мини-пакеты для ювелирных изделий и косметики', ro: 'Pungi mini pentru bijuterii și cosmetice', de: 'Mini-Krafttaschen für Schmuck & Kosmetik', fr: 'Mini sacs kraft pour bijoux & cosmétiques', ar: 'أكياس كرافت صغيرة للمجوهرات ومستحضرات التجميل' } },
      { icon: '📦', img: './assets/images/products/cat_5/prod_2.jpg', name: { en: 'Heavy Duty Reinforced Bottom Shipping Bags', ru: 'Пакеты повышенной прочности с усиленным дном', ro: 'Pungi rezistente cu fund ranforsat', de: 'Strapazierfähige Versandtaschen mit verstärktem Boden', fr: 'Sacs d’expédition haute résistance fond renforcé', ar: 'أكياس ورقية سميكة ذات قاع مقوى للأوزان' } }
    ]
  },

  {
    id: 6,
    group: 'packaging',
    icon: '🧻',
    img: './assets/images/products/cat_6/header.jpg',
    chip: {
      en: 'Paper & Wet Wipes', ru: 'Бумажные и влажные салфетки', ro: 'Șervețele hârtie & umede', de: 'Papier & Feuchttücher', fr: 'Serviettes & Lingettes', ar: 'مناديل ورقية ومبللة'
    },
    title: {
      en: 'Paper & Wet Napkins with Logo', ru: 'Бумажные и влажные салфетки', ro: 'Șervețele de hârtie & umede cu logo', de: 'Papier- & Servietten mit Logo', fr: 'Serviettes en papier & Lingettes avec logo', ar: 'مناديل ورقية ومبللة مطبوعة بالشعار'
    },
    desc: {
      en: 'Custom logo wet wipes, sachet refreshers, dispenser napkins, towel rolls, and pocket tissues for restaurants & airlines.',
      ru: 'Влажные салфетки с логотипом в саше, бумажные салфетки для диспенсеров, полотенца в рулонах.',
      ro: 'Șervețele umede individualizate în plic, șervețele dispenser, prosoape hârtie.',
      de: 'Erfrischungstücher in Sachets mit Logo, Spenderservietten, Papierhandtuchrollen.',
      fr: 'Lingettes rafraîchissantes en sachet avec logo, serviettes pour distributeurs, rouleaux essuie-mains.',
      ar: 'مناديل مبللة معطرة في أظرف مغلقة مطبوعة، مناديل سحب، ورول مناشف للمطاعم والطيران.'
    },
    specs: [
      {
        k: { en: 'Wipe Material', ru: 'Материал салфетки', ro: 'Material șervețel', de: 'Tuchmaterial', fr: 'Matériau lingette', ar: 'نوع قماش المناديل المبللة' },
        v: { en: 'Spunlace non-woven 40-60 gsm (Viscose blend)', ru: 'Спандлейс нетканый 40-60 г/м² (вискоза)', ro: 'Spunlace nețesut 40-60 gsm (vâscoză)', de: 'Spunlace-Vlies 40-60 g/m² (Viskose)', fr: 'Spunlace non-tissé 40-60 g/m² (viscose)', ar: 'قماش سبانليس غير منسوج 40-60 جرام' }
      },
      {
        k: { en: 'Sachet Foil Laminate', ru: 'Ламинат саше', ro: 'Ламинат plic', de: 'Sachet-Folie', fr: 'Laminat sachet', ar: 'طبقة التغليف للأظرف' },
        v: { en: 'Triple layer Paper / AL / PE leak-proof foil', ru: 'Трехслойный ламинат Бумага / AL / PE', ro: 'Laminat 3 straturi Hârtie / AL / PE', de: 'Dreilagige Papier / AL / PE Folie', fr: 'Laminat triple couche Papier / AL / PE', ar: 'أظرف ثلاثية الطبقات ورق / ألومنيوم / بولي إيثيلين' }
      },
      {
        k: { en: 'Fragrance Solutions', ru: 'Варианты ароматов', ro: 'Opțiuni parfum', de: 'Duftoptionen', fr: 'Parfums disponibles', ar: 'خيارات العطور والروائح' },
        v: { en: 'Dove, Lemon, Gold Scent, Alcohol-free, Antimicrobial', ru: 'Дав, Лимон, Золотой аромат, Без спирта', ro: 'Dove, Lămâie, Gold, Fără alcool', de: 'Dove, Zitrone, Gold-Duft, Alkoholfrei', fr: 'Dove, Citron, Parfum Gold, Sans alcool', ar: 'عطر دوف، ليمون، عطر فاخر، خالٍ من الكحول' }
      },
      {
        k: { en: 'Paper Napkin Ply', ru: 'Слои бумажных салфеток', ro: 'Straturi șervețele hârtie', de: 'Serviettenlagen', fr: 'Plis serviettes en papier', ar: 'طبقات المناديل الورقية' },
        v: { en: '1, 2, 3-ply 100% pure virgin cellulose', ru: '1, 2, 3 слоя 100% первичная целлюлоза', ro: '1, 2, 3 straturi 100% celuloză pură', de: '1, 2, 3-lagig 100% reiner Zellstoff', fr: '1, 2, 3 plis 100% pure cellulose', ar: '1، 2، 3 طبقات سيليلوز نقي 100%' }
      },
      {
        k: { en: 'Minimum MOQ', ru: 'Минимальный тираж', ro: 'Comandă minimă MOQ', de: 'Mindestmenge', fr: 'Commande minimale', ar: 'الحد الأدنى للطلب' },
        v: { en: '10,000 sachets with custom logo', ru: '10,000 саше с вашим логотипом', ro: '10.000 plicuri cu logo-ul dvs.', de: '10.000 Sachets mit Ihrem Logo', fr: '10 000 sachets avec votre logo', ar: '10,000 ظرف مطبوع بشعارك' }
      }
    ],
    products: [
      { icon: '💧', img: './assets/images/products/cat_6/prod_1.jpg', name: { en: 'Single Sachet Refreshing Wet Wipes 6x8cm', ru: 'Влажные салфетки в саше 6х8см с логотипом', ro: 'Șervețele umede la plic 6x8cm cu logo', de: 'Erfrischungstücher im Sachet 6x8cm', fr: 'Lingettes rince-doigts individuelles 6x8cm', ar: 'مناديل مبللة معطرة في أظرف 6x8 سم' } },
      { icon: '💧', img: './assets/images/products/cat_6/prod_10.jpg', name: { en: 'Large Sachet Wet Wipes 7x12cm', ru: 'Влажные салфетки большого формата 7х12см', ro: 'Șervețele umede format mare 7x12cm', de: 'Große Erfrischungstücher 7x12cm', fr: 'Lingettes rafraîchissantes grand format 7x12cm', ar: 'مناديل مبللة حجك كبير 7x12 سم' } },
      { icon: '✈️', img: './assets/images/products/cat_6/prod_11.jpg', name: { en: 'Airline & Hotel Hot/Cold Refreshing Towels', ru: 'Освежающие махровые полотенца для авиалиний', ro: 'Prosoape umede calde/reci pentru linii aeriene', de: 'Heiße/Kalte Erfrischungstücher für Airlines', fr: 'Serviettes rafraîchissantes chaudes/froides airlines', ar: 'مناشف حارة/باردة معطرة للطيران والفنادق' } },
      { icon: '🛡️', img: './assets/images/products/cat_6/prod_12.jpg', name: { en: 'Alcohol-Free Antimicrobial Sanitizing Wipes', ru: 'Антибактериальные салфетки без спирта', ro: 'Șervețele dezinfectante fără alcool', de: 'Alkoholfreie antibakterielle Feuchttücher', fr: 'Lingettes désinfectantes sans alcool', ar: 'مناديل معقمة خالية من الكحول' } },
      { icon: '🧻', img: './assets/images/products/cat_6/prod_13.jpg', name: { en: 'Dispenser Refill Napkins (1/4 Fold)', ru: 'Салфетки для диспенсеров 1/4 сложения', ro: 'Rezerve șervețele dispenser 1/4 împăturite', de: 'Spenderservietten-Nachfüllung 1/4 Falz', fr: 'Serviettes pour distributeur pliage 1/4', ar: 'مناديل لموزعات المناديل طية 1/4' } },
      { icon: '🍸', img: './assets/images/products/cat_6/prod_14.jpg', name: { en: 'Cocktail Paper Napkins 2-Ply 24x24cm', ru: 'Коктейльные салфетки 2 слоя 24х24см', ro: 'Șervețele cocktail 2 straturi 24x24cm', de: 'Cocktail-Servietten 2-lagig 24x24cm', fr: 'Serviettes cocktail 2 plis 24x24cm', ar: 'مناديل كوكتيل طبقتين 24x24 سم' } },
      { icon: '🍽️', img: './assets/images/products/cat_6/prod_15.jpg', name: { en: 'Dinner Paper Napkins 2-Ply 33x33cm', ru: 'Столовые салфетки 2 слоя 33х33см', ro: 'Șervețele masă 2 straturi 33x33cm', de: 'Mahlzeit-Servietten 2-lagig 33x33cm', fr: 'Serviettes de table 2 plis 33x33cm', ar: 'مناديل طعام طبقتين 33x33 سم' } },
      { icon: '✨', img: './assets/images/products/cat_6/prod_16.jpg', name: { en: 'Airlaid Linen-Feel Luxury Napkins 40x40cm', ru: 'Премиум салфетки под лен Airlaid 40х40см', ro: 'Șervețele de lux textura in Airlaid 40x40cm', de: 'Airlaid Stoffstruktur-Servietten 40x40cm', fr: 'Serviettes de luxe effet tissu Airlaid 40x40cm', ar: 'مناديل قماشية فاخرة ملمس الكتان 40x40 سم' } },
      { icon: '🍴', img: './assets/images/products/cat_6/prod_17.jpg', name: { en: 'Cutlery Pocket Napkins with Fork Slot', ru: 'Салфетки-кармашки для приборов', ro: 'Șervețele cu buzunar pentru tacâmuri', de: 'Bestecktaschen-Servietten mit Schlitz', fr: 'Serviettes étui pochette pour couverts', ar: 'مناديل مع جيب مخصص لأطقم الشوك والسكاكين' } },
      { icon: '📦', img: './assets/images/products/cat_6/prod_2.jpg', name: { en: 'Pocket Tissue 10-Packs with Logo Wrap', ru: 'Карманные бумажные платочки 10 шт в упаковке', ro: 'Pachete șervețele buzunar 10 buc cu logo', de: 'Taschentücher-Packungen 10er mit Logo', fr: 'Étuis mouchoirs de poche 10 unités avec logo', ar: 'مناديل جيب ورقية 10 مناديل مطبوعة' } },
      { icon: '🧻', img: './assets/images/products/cat_6/prod_3.jpg', name: { en: 'Z-Fold & V-Fold Paper Hand Towels', ru: 'Бумажные полотенца Z-сложения и V-сложения', ro: 'Prosoape hârtie mâini pliate Z și V', de: 'Papierhandtücher Z-Falz & V-Falz', fr: 'Essuie-mains papier pliage Z & V', ar: 'مناشف ورقية للأيدي طية Z و V' } },
      { icon: '🌀', img: './assets/images/products/cat_6/prod_4.jpg', name: { en: 'Centerfeed Paper Towel Rolls 2-Ply', ru: 'Бумажные полотенца в рулонах с центральной вытяжкой', ro: 'Prosoape hârtie rola cu derulare centrală', de: 'Innenabrollung Papierhandtuchrollen 2-lagig', fr: 'Rouleaux essuie-mains dévidage central 2 plis', ar: 'رول مناشف سحب من المنتصف طبقتين' } }
    ]
  },

  {
    id: 7,
    group: 'packaging',
    icon: '🍴',
    img: './assets/images/products/cat_7/header.jpg',
    chip: {
      en: 'Tableware', ru: 'Одноразовая посуда', ro: 'Veselă unică folosință', de: 'Einweggeschirr', fr: 'Vaisselle jetable', ar: 'أدوات مائدة مخصصة للاستخدام مرة واحدة'
    },
    title: {
      en: 'Disposable Cutlery & Tableware', ru: 'Одноразовая посуда и приборы', ro: 'Tacâmuri & Veselă de unică folosință', de: 'Einwegbesteck & Geschirr', fr: 'Couverts & Vaisselle jetables', ar: 'أدوات المائدة والأطباق للاستخدام مرة واحدة'
    },
    desc: {
      en: 'Wooden cutlery sets, double-wall hot paper cups, sugarcane bagasse meal trays, and takeaway soup bowls.',
      ru: 'Деревянные приборы, двухслойные бумажные стаканы, контейнеры из сахарного тростника.',
      ro: 'Tacâmuri din lemn, pahare carton perete dublu, caserole din trestie de zahăr (bagasă).',
      de: 'Holzbesteck-Sets, Doppelwand-Pappbecher, Sugarcane Bagasse Menüboxen.',
      fr: 'Couverts en bois, gobelets en carton double paroi, barquettes en bagasse de canne à sucre.',
      ar: 'أطقم ملاعق وأشوَاك خشبية، أكواب ورقية عازلة للحرارة، وأطباق قصب السكر صديقة البيئة.'
    },
    specs: [
      {
        k: { en: 'Eco Material Base', ru: 'Эко-материал основы', ro: 'Bază material eco', de: 'Öko-Materialbasis', fr: 'Base matériau éco', ar: 'مصدر المواد البيئية' },
        v: { en: 'Birch wood, Sugarcane Bagasse, Bamboo fiber', ru: 'Древесина березы, Тростниковый жмых, Бамбук', ro: 'Lemn de mesteacăn, Bagasă trestie, Bambus', de: 'Birkenholz, Zuckerrohr-Bagasse, Bambusfaser', fr: 'Bois de bouleau, Bagasse de canne, Bambou', ar: 'خشب الزان الطبيعي، قصب السكر، وألياف الخيزران' }
      },
      {
        k: { en: 'Heat Resistance', ru: 'Термостойкость', ro: 'Rezistență la căldură', de: 'Hitzebeständigkeit', fr: 'Résistance à la chaleur', ar: 'مقاومة درجات الحرارة' },
        v: { en: 'Hot drinks & meals up to +100°C', ru: 'Для горячих блюд и напитков до +100°C', ro: 'Băuturi și mâncăruri calde până la +100°C', de: 'Heiße Getränke & Speisen bis +100°C', fr: 'Boissons & plats chauds jusqu’à +100°C', ar: 'للمأكولات والمشروبات الساخنة حتى 100 مئوية' }
      },
      {
        k: { en: 'Paper Cup Insulation', ru: 'Изоляция стаканов', ro: 'Izolație pahare', de: 'Becher-Isolierung', fr: 'Isolation des gobelets', ar: 'العزل الحراري للأكواب' },
        v: { en: 'Double-wall air gap thermo insulation', ru: 'Двухслойная воздушная термоизоляция', ro: 'Izolație termică perete dublu cu strat aer', de: 'Doppelwand-Luftspalt-Thermoisolierung', fr: 'Isolation thermique double paroi avec lame d’air', ar: 'جدار مزدوج عازل للحرارة يمنع احتراق الأيدي' }
      },
      {
        k: { en: 'Certification', ru: 'Сертификация', ro: 'Certificare', de: 'Zertifizierung', fr: 'Certification', ar: 'شهادات الاعتماد' },
        v: { en: 'FSC Certified & EN 13432 Compostable', ru: 'Сертификат FSC и EN 13432 биокомпост', ro: 'Certificat FSC și EN 13432 compostabil', de: 'FSC-zertifiziert & EN 13432 kompostierbar', fr: 'Certifié FSC & EN 13432 compostable', ar: 'معتمد من FSC وقابل للتحلل العضوي الكامل' }
      },
      {
        k: { en: 'Cutlery Finish', ru: 'Обработка приборов', ro: 'Finisaj tacâmuri', de: 'Besteck-Oberfläche', fr: 'Finition des couverts', ar: 'نعومة وجودة الأسطح' },
        v: { en: 'Waxed smooth splinter-free surface polish', ru: 'Гладкая восковая полировка без заусенцев', ro: 'Suprafață netedă șlefuită fără așchii', de: 'Glatte splitterfreie Wachspolitur', fr: 'Finition lisse cirée sans échardes', ar: 'أسطح صقيلة ناعمة مصقولة بالشمع' }
      }
    ],
    products: [
      { icon: '🪵', img: './assets/images/products/cat_7/prod_1.jpg', name: { en: 'Birch Wood Cutlery Set (Fork, Knife, Spoon)', ru: 'Набор деревянных приборов (вилка, нож, ложка)', ro: 'Set tacâmuri din lemn mesteacăn (furculiță, cuțit, lingură)', de: 'Birkenholz-Besteckset (Gabel, Messer, Löffel)', fr: 'Kit couverts en bois de bouleau (fourchette, couteau, cuillère)', ar: 'أطقم شوك وملاعق وسكاكين خشبية في غلاف' } },
      { icon: '🪵', img: './assets/images/products/cat_7/prod_2.jpg', name: { en: 'Birch Wood Teaspoons & Coffee Stirrers', ru: 'Деревянные чайные ложки и размешиватели', ro: 'Lingurițe și agitatoare cafea din lemn', de: 'Birkenholz-Teelöffel & Kaffeerührer', fr: 'Petites cuillères & touillettes café en bois', ar: 'ملاعق شاي وأعواد تحريك القهوة خشبية' } },
      { icon: '🥣', img: './assets/images/products/cat_7/prod_3.jpg', name: { en: 'Sugarcane Bagasse 3-Compartment Meal Trays', ru: 'Контейнеры из тростникового жмыха 3 секции', ro: 'Caserole din bagasă trestie 3 compartimente', de: 'Sugarcane Bagasse 3-Fächer Menüboxen', fr: 'Barquettes repas bagasse de canne 3 compartiments', ar: 'أطباق قصب السكر 3 خانات مقسمة' } },
      { icon: '🍽️', img: './assets/images/products/cat_7/prod_4.jpg', name: { en: 'Sugarcane Bagasse Round Plates 23cm', ru: 'Тарелки из тростникового жмыха круглые 23см', ro: 'Farfurii rotunde din bagasă trestie 23cm', de: 'Zuckerrohr-Bagasse runde Teller 23cm', fr: 'Assiettes rondes en bagasse de canne 23cm', ar: 'أطباق قصب السكر دائرية 23 سم' } },
      { icon: '🍲', img: './assets/images/products/cat_7/prod_1.jpg', name: { en: 'Sugarcane Bagasse Soup Bowls 500ml', ru: 'Миски для супа из тростникового жмыха 500мл', ro: 'Boluri supa din bagasă trestie 500ml', de: 'Sugarcane Bagasse Suppenschalen 500ml', fr: 'Bols à soupe en bagasse de canne 500ml', ar: 'أوعية شوربة قصب السكر 500 مل' } },
      { icon: '☕', img: './assets/images/products/cat_7/prod_2.jpg', name: { en: 'Double-Wall Kraft Hot Paper Cups 8oz/12oz', ru: 'Двухслойные стаканы для кофе 8oz и 12oz', ro: 'Pahare carton perete dublu 8oz și 12oz', de: 'Doppelwand Kraft-Heißgetränkebecher 8oz/12oz', fr: 'Gobelets carton double paroi kraft 8oz/12oz', ar: 'أكواب كرافت عازلة للحرارة 8 و 12 أونصة' } },
      { icon: '☕', img: './assets/images/products/cat_7/prod_3.jpg', name: { en: 'Single-Wall Custom Printed Coffee Cups', ru: 'Однослойные стаканы с логотипом для кофе', ro: 'Pahare carton perete simplu personalizate', de: 'Einwandige bedruckte Kaffeebecher', fr: 'Gobelets café simple paroi personnalisés', ar: 'أكواب قهوة ورقية طبقة واحدة مطبوعة' } },
      { icon: '🥤', img: './assets/images/products/cat_7/prod_4.jpg', name: { en: 'Clear PET Cold Drink Cups & Dome Lids', ru: 'Прозрачные PET стаканы и купольные крышки', ro: 'Pahare PET transparente și capace cupolă', de: 'Kristallklare PET-Kaltgetränkebecher & Domdeckel', fr: 'Gobelets PET transparents & couvercles dôme', ar: 'أكواب شفافة للمشروبات الباردة مع أغطية' } },
      { icon: '🌱', img: './assets/images/products/cat_7/prod_1.jpg', name: { en: 'PLA Biodegradable Clear Cold Cups', ru: 'Биоразлагаемые прозрачные стаканы из PLA', ro: 'Pahare biodegradabile transparente din PLA', de: 'PLA kompostierbare Kaltgetränkebecher', fr: 'Gobelets transparents compostables en PLA', ar: 'أكواب شفافة قابلة للتحلل العضوي PLA' } },
      { icon: '🥢', img: './assets/images/products/cat_7/prod_2.jpg', name: { en: 'Bamboo Cutlery Set in Kraft Sleeve', ru: 'Наборы приборов из бамбука в крафт чехле', ro: 'Set tacâmuri din bambus în plic kraft', de: 'Bambus-Besteckset in Kraftpapiertüte', fr: 'Kit couverts en bambou en étui kraft', ar: 'أطقم شوك وسكاكين خيزران في أظرف' } },
      { icon: '🍦', img: './assets/images/products/cat_7/prod_3.jpg', name: { en: 'Disposable Wooden Ice Cream Spoons', ru: 'Деревянные ложечки для мороженого', ro: 'Lingurițe din lemn pentru înghețată', de: 'Einweg-Holzeislöffel', fr: 'Petites cuillères en bois pour glace', ar: 'ملاعق خشبية صغيرة للآيس كريم' } },
      { icon: '🥗', img: './assets/images/products/cat_7/prod_4.jpg', name: { en: 'Kraft Salad Bowls with Clear PET Lids', ru: 'Крафт миски для салатов с прозрачной крышкой', ro: 'Boluri kraft salată cu capac transparent', de: 'Kraft-Salatschalen mit klarem Deckel', fr: 'Bols kraft à salade avec couvercle transparent', ar: 'أوعية سلطة كرافت مع أغطية شفافة' } }
    ]
  },

  {
    id: 8,
    group: 'packaging',
    icon: '📜',
    img: './assets/images/products/cat_8/header.jpg',
    chip: {
      en: 'Wrapping Paper', ru: 'Упаковочная бумага', ro: 'Hârtie ambalat', de: 'Einwickelpapier', fr: 'Papier d’emballage', ar: 'ورق تغليف الأطعمة والمعجنات'
    },
    title: {
      en: 'Food Wrapping Paper & Sheets', ru: 'Пищевая упаковочная бумага', ro: 'Hârtie ambalat alimente & foi', de: 'Lebensmitteleinwickelpapier & Bögen', fr: 'Papier d’emballage alimentaire & feuilles', ar: 'ورق وأوراق تغليف الساندويشات والأطعمة'
    },
    desc: {
      en: 'Greaseproof burger wrap paper, PE-coated butcher paper, basket liners, and printed parchment sheets.',
      ru: 'Жиростойкая бумага для бургеров, пергамент с PE-покрытием, бумага для запекания и упаковки.',
      ro: 'Hârtie rezistentă la grăsime pentru burgeri, hârtie cerată/PE, foi pergamyn imprimate.',
      de: 'Fettdichtes Burger-Einwickelpapier, PE-beschichtetes Einschlagpapier, Korbeinleger.',
      fr: 'Papier ingraissable pour burgers, papier paraffiné/PE, feuilles de cuisson personnalisées.',
      ar: 'ورق مضاد للدهون لتغليف البرجر، ورق جزارة مغلف بالبولي إيثيلين، وأوراق تزيين السلال.'
    },
    specs: [
      {
        k: { en: 'Greaseproof Rating', ru: 'Рейтинг жиростойкости', ro: 'Rating rezistență grăsime', de: 'Fettbeständigkeit-Rating', fr: 'Indice ingraissable', ar: 'درجة مقاومة الدهون' },
        v: { en: 'KIT 3 to KIT 9 grease resistance level', ru: 'Уровень жиростойкости KIT 3 - KIT 9', ro: 'Nivel rezistență la grăsime KIT 3 - KIT 9', de: 'Fettbeständigkeit KIT 3 bis KIT 9', fr: 'Niveau ingraissable KIT 3 à KIT 9', ar: 'مقاومة زيوت بدرجة KIT 3 إلى KIT 9' }
      },
      {
        k: { en: 'PE Coating Grammage', ru: 'Плотность PE-покрытия', ro: 'Gramaj strat PE', de: 'PE-Beschichtungsgewicht', fr: 'Grammage couche PE', ar: 'سماكة البولي إيثيلين العازل' },
        v: { en: '10 - 15 gsm food-safe PE film layer', ru: '10 - 15 г/м² пищевая пленка PE', ro: 'Strat folie PE alimentară 10 - 15 gsm', de: '10 - 15 g/m² lebensmittelechte PE-Folie', fr: 'Couche film PE alimentaire 10 - 15 g/m²', ar: 'طبقة بولي إيثيلين 10-15 جرام مخصصة للأغذية' }
      },
      {
        k: { en: 'Sheet Cut Dimensions', ru: 'Размеры нарезки листов', ro: 'Dimensiuni tăiere foi', de: 'Bogen-Zuschnittmaße', fr: 'Dimensions de découpe des feuilles', ar: 'مقاسات قص الأوراق' },
        v: { en: '25x35cm, 30x40cm, 33x45cm custom cuts', ru: 'Нарезка 25х35см, 30х40см, 33х45см и кастом', ro: 'Tăiere 25x35cm, 30x40cm, 33x45cm personalizat', de: '25x35cm, 30x40cm, 33x45cm Sonderzuschnitte', fr: 'Découpes 25x35cm, 30x40cm, 33x45cm sur-mesure', ar: 'قص مقاسات 25x35، 30x40، 33x45 سم حسب الطلب' }
      },
      {
        k: { en: 'Ink Safety Standard', ru: 'Безопасность красок', ro: 'Siguranță cerneluri', de: 'Druckfarben-Sicherheit', fr: 'Sécurité des encres', ar: 'أمان الحبر الطباعي' },
        v: { en: '100% Water-based odorless food inks', ru: '100% краска на водной основе без запаха', ro: 'Cerneluri pe bază de apă 100% fără miros', de: '100% Wasserbasierte geruchsfreie Farben', fr: 'Encres à l’eau 100% inodores', ar: 'أحبار مائية 100% آمنة وخالية من الرائحة' }
      },
      {
        k: { en: 'Breathability', ru: 'Воздухопроницаемость', ro: 'Permeabilitate aer', de: 'Atmungsaktivität', fr: 'Respirabilité', ar: 'التهوية ومنع التعرق' },
        v: { en: 'Prevents moisture buildup & soggy buns', ru: 'Предотвращает отсыревание булочек', ro: 'Previne acumularea de umiditate și înmuierea', de: 'Verhindert Feuchtigkeitsstau & aufgeweichte Brötchen', fr: 'Évite l’accumulation d’humidité', ar: 'يمنع ترسب الرطوبة وتلف خبز البرجر' }
      }
    ],
    products: [
      { icon: '🍔', img: './assets/images/products/cat_8/prod_1.jpg', name: { en: 'Greaseproof Burger Wrap Sheets KIT 7 30x40cm', ru: 'Жиростойкая бумага для обертывания бургеров 30х40см', ro: 'Hârtie anti-grăsime ambalare burgeri 30x40cm', de: 'Fettdichtes Burger-Einwickelpapier 30x40cm', fr: 'Papier ingraissable pour burgers 30x40cm', ar: 'أوراق تغليف البرجر المضادة للدهون 30x40 سم' } },
      { icon: '🥩', img: './assets/images/products/cat_8/prod_10.jpg', name: { en: 'PE-Coated Butcher Paper Sheets for Meats', ru: 'Бумага для мясной гастрономии с PE-покрытием', ro: 'Hârtie măcelărie laminată PE', de: 'PE-beschichtetes Einschlagpapier für Fleisch', fr: 'Papier boucherie plastifié PE pour viandes', ar: 'ورق مغلف للحوم والمأكولات الطازجة' } },
      { icon: '🥪', img: './assets/images/products/cat_8/prod_2.jpg', name: { en: 'Newspaper Print Custom Sandwich Wraps', ru: 'Бумага для сэндвичей с газетным принтом', ro: 'Hârtie ambalat sandwich model ziar', de: 'Bedrucktes Sandwich-Papier Zeitungsmuster', fr: 'Papier emballage sandwich motif journal', ar: 'أوراق تغليف الساندويشات بطبعة الصحيفة' } },
      { icon: '🧺', img: './assets/images/products/cat_8/prod_3.jpg', name: { en: 'Basket & Metal Tray Liner Paper Sheets', ru: 'Бумажные вкладыши для сервировочных корзинок', ro: 'Foi de hârtie pentru coșulețe și tăvi', de: 'Korb- & Tablett-Einlegebögen', fr: 'Feuilles de fond pour paniers & plateaux', ar: 'أوراق بطانة السلال وصواني التقديم' } },
      { icon: '🥐', img: './assets/images/products/cat_8/prod_4.jpg', name: { en: 'Bakery Waxed Wrapping Sheets for Pastries', ru: 'Вощеная бумага для пекарен и выпечки', ro: 'Hârtie cerată pentru patiserie', de: 'Gewachstes Bäckerei-Einschlagpapier', fr: 'Papier paraffiné pour boulangerie', ar: 'ورق مغلف بالشمع للمخابز والمعجنات' } },
      { icon: '🌯', img: './assets/images/products/cat_8/prod_5.jpg', name: { en: 'Aluminum Foil Laminated Wrap Sheets', ru: 'Фольгированная бумага для шаурмы и дурума', ro: 'Foi laminat aluminiu pentru shawarma', de: 'Alufolie-laminierte Einschlagbögen', fr: 'Feuilles laminées alu pour kebabs', ar: 'أوراق مغلفة بالألومنيوم للشاورما والوجبات' } },
      { icon: '📜', img: './assets/images/products/cat_8/prod_6.jpg', name: { en: 'Pergamyn Translucent Bakery Wrapping Paper', ru: 'Пергамин прозрачная упаковочная бумага', ro: 'Hârtie translucentă pergamyn patiserie', de: 'Pergamyn transparentes Bäckereipapier', fr: 'Papier pergamyn translucide boulangerie', ar: 'ورق برجامين شفاف للمخابز' } },
      { icon: '🎂', img: './assets/images/products/cat_8/prod_7.jpg', name: { en: 'Siliconized Pan Liner Sheets 40x60cm', ru: 'Силиконизированные листы для противней 40х60см', ro: 'Foi siliconate pentru tăvi copt 40x60cm', de: 'Silikonisierte Backblech-Einlagen 40x60cm', fr: 'Feuilles siliconées pour plaques cuisson 40x60cm', ar: 'أوراق سيليكون للصواني بالفرن 40x60 سم' } },
      { icon: '🥖', img: './assets/images/products/cat_8/prod_8.jpg', name: { en: 'Food Grade Tissue Wrapping Sheets for Bread', ru: 'Тонкая пищевая бумага для обертывания хлеба', ro: 'Hârtie subțire alimentară ambalat pâine', de: 'Dünnes Seidenpapier für Brot', fr: 'Papier de soie alimentaire pour pain', ar: 'ورق تغليف رقيق وخفيف للخبز' } },
      { icon: '❄️', img: './assets/images/products/cat_8/prod_9.jpg', name: { en: 'Poly-Coated Freezer Paper Sheets', ru: 'Бумага с полимерным слоем для заморозки', ro: 'Hârtie laminată pentru congelare', de: 'Poly-beschichtetes Gefrierpapier', fr: 'Papier plastifié pour congélation', ar: 'ورق مقوى مغلف للتجميد بحفظ اللحوم' } }
    ]
  },

  {
    id: 9,
    group: 'packaging',
    icon: '🍱',
    img: './assets/images/products/cat_9/header.jpg',
    chip: {
      en: 'Asian & Sushi', ru: 'Суши упаковка', ro: 'Ambalaje Sushi', de: 'Sushi Verpackung', fr: 'Emballage Sushi', ar: 'تعبئة السوشي والمأكولات الأسيوية'
    },
    title: {
      en: 'Sushi & Asian Food Packaging', ru: 'Упаковка для суши и азиатской кухни', ro: 'Ambalaje pentru sushi & mâncare asiatică', de: 'Sushi & Asiatische Verpackungen', fr: 'Emballages sushi & cuisine asiatique', ar: 'تغليف السوشي والأطعمة الآسيوية'
    },
    desc: {
      en: 'Bento trays with anti-fog PET lids, chopstick sleeves, soy sauce fish bottles, and takeaway noodle boxes.',
      ru: 'Контейнеры бенто с антизапотевающими крышками, чехлы для палочек, бутылочки для соевого соуса.',
      ro: 'Caserole bento cu capac anti-aburire, plicuri bețișoare, sticluțe sos soia.',
      de: 'Bento-Boxen mit Anti-Beschlag-Deckel, Essstäbchen-Hüllen, Sojasauce-Flaschen.',
      fr: 'Barquettes bento avec couvercles anti-buée, étuis à baguettes, flacons de sauce soja.',
      ar: 'عبوات بينتو مع أغطية ضد الضباب، أظرف العيدان، وعبوات صويا صوص للمطاعم.'
    },
    specs: [
      {
        k: { en: 'Lid Transparency', ru: 'Прозрачность крышки', ro: 'Transparență capac', de: 'Deckel-Transparenz', fr: 'Transparence couvercle', ar: 'شفافية الأغطية' },
        v: { en: 'Ultra-clear Anti-fog OPS / PET lid', ru: 'Ультрапрозрачная антизапотевающая крышка', ro: 'Capac ultra-transparent OPS / PET anti-aburire', de: 'Glasklarer Anti-Beschlag OPS/PET Deckel', fr: 'Couvercle OPS / PET ultra-transparent anti-buée', ar: 'غطاء مضاد للتكثف كريستالي شفاف' }
      },
      {
        k: { en: 'Tray Compartments', ru: 'Отделения контейнеров', ro: 'Compartimente caserolă', de: 'Boxen-Fächer', fr: 'Compartiments barquette', ar: 'تقسيم الأطباق' },
        v: { en: '1, 2, 3, 4, 5 section bento layouts', ru: 'Секции на 1, 2, 3, 4, 5 отделений бенто', ro: 'Layout bento cu 1, 2, 3, 4, 5 compartimente', de: '1, 2, 3, 4, 5-fächige Bento-Layouts', fr: 'Dispositions bento 1, 2, 3, 4, 5 compartiments', ar: 'تقسيمات متعددة من 1 إلى 5 خانات' }
      },
      {
        k: { en: 'Microwave Safe', ru: 'Безопасность для СВЧ', ro: 'Siguranță cuptor cu microunde', de: 'Mikrowellengeeignet', fr: 'Compatible micro-ondes', ar: 'الاستخدام في الميكروويف' },
        v: { en: 'PP base heat resistant up to +120°C', ru: 'PP основа выдерживает разогрев до +120°C', ro: 'Bază PP rezistentă la încălzire +120°C', de: 'PP-Unterteil hitzebeständig bis +120°C', fr: 'Base PP résistante à la chaleur +120°C', ar: 'قاعدة بولي بروبيلين تتيح التسخين حتى 120 مئوية' }
      },
      {
        k: { en: 'Leak-Proof Closure', ru: 'Герметичность закрытия', ro: 'Închidere etanșă', de: 'Auslaufsicherer Verschluss', fr: 'Fermeture étanche', ar: 'إحكام الغلق لمنع التسريب' },
        v: { en: 'Click-lock perimeter seal prevents spill', ru: 'Фиксатор защелка по периметру от протекания', ro: 'Închidere click de siguranță anti-scurgere', de: 'Click-Verschluss verhindert Auslaufen', fr: 'Fermeture à clip étanche anti-fuite', ar: 'حواف غلق محكمة تمنع تسرب الصوص والزيوت' }
      },
      {
        k: { en: 'Custom Printing', ru: 'Печать дизайна', ro: 'Tipar personalizat', de: 'Individueller Druck', fr: 'Impression personnalisée', ar: 'الطباعة والتصميم' },
        v: { en: 'Japanese traditional pattern & custom brand', ru: 'Традиционные узоры и ваш логотип', ro: 'Modele japoneze și brandul dvs.', de: 'Japanische Muster & Kundenlogo', fr: 'Motifs japonais & logo personnalisé', ar: 'طباعة النقوش اليابانية وشعار المطعم' }
      }
    ],
    products: [
      { icon: '🍣', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Anti-Fog Bento Sushi Trays (Small)', ru: 'Контейнеры для суши маленькие с крышкой anti-fog', ro: 'Caserole sushi mici cu capac anti-aburire', de: 'Anti-Beschlag Sushi Bento Trays Klein', fr: 'Barquettes sushi bento anti-buée small', ar: 'عبوات سوشي بينتو حجم صغير' } },
      { icon: '🍱', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Large Party Size Sushi Platter Trays', ru: 'Большие подносы для сет-наборов суши', ro: 'Tăvi mari Sushi Party Platter', de: 'Große Party-Sushi-Platten', fr: 'Plateaux repas sushi taille party', ar: 'أطباق سوشي حجم عائلي وكبير' } },
      { icon: '🥢', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Bamboo Chopsticks in Printed Sleeves', ru: 'Бамбуковые палочки в бумажной упаковке', ro: 'Bețișoare bambus în plic ambalat', de: 'Bambus-Essstäbchen in bedruckter Hülle', fr: 'Baguettes en bambou en étui papier imprimé', ar: 'عيدان أكل الخيزران في أظرف ورقية' } },
      { icon: '🐟', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Soy Sauce Fish Bottles 8ml & 15ml', ru: 'Бутылочки «рыбки» для соевого соуса 8мл и 15мл', ro: 'Sticluțe peștișor sos soia 8ml și 15ml', de: 'Sojasaucen-Fischfläschchen 8ml & 15ml', fr: 'Flacons poisson pour sauce soja 8ml & 15ml', ar: 'عبوات صويا صوص شكل سمكة 8 و 15 مل' } },
      { icon: '🍜', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Round Kraft Wok & Noodle Boxes', ru: 'Круглые коробочки для лапши вок', ro: 'Cutii rotunde pentru tăieței wok', de: 'Runde Wok-Nudelboxen', fr: 'Boîtes rondes pour nouilles wok', ar: 'علب نودلز ووك كرافت دائرية' } },
      { icon: '🍲', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Leak-Proof Ramen Soup Bowls with Lids', ru: 'Герметичные миски для рамэна и супов', ro: 'Boluri etanșe pentru supe și ramen', de: 'Auslaufsichere Schalen für Ramen-Suppen', fr: 'Bols étanches pour soupes ramen', ar: 'أوعية شوربة الرامن محكمة الإغلاق' } },
      { icon: '🍙', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Triangular Onigiri Rice Ball Wrapping Film', ru: 'Пленка для упаковки онигири с лентой', ro: 'Folie ambalat onigiri cu bandă', de: 'Dreieckige Onigiri-Verpackungsfolie', fr: 'Film d’emballage onigiri triangle', ar: 'أغلفة الأرز المثلث أونيجيري' } },
      { icon: '🥟', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Asian Dumpling & Dim Sum Steam Trays', ru: 'Контейнеры для пельменей дамблингов и димсамов', ro: 'Caserole pentru colțunași și dim sum', de: 'Dim-Sum & Dumpling-Dämpfbehälter', fr: 'Barquettes pour raviolis asiatiques & dim sum', ar: 'أطباق وعلب الفطائر الآسيوية الديم سم' } },
      { icon: '🧂', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Wasabi & Ginger Portion Sauce Dishes', ru: 'Соусники для васаби и имбиря', ro: 'Caserole mici pentru wasabi și ghimbir', de: 'Portionsschälchen für Wasabi & Ingwer', fr: 'Ramequins pour wasabi & gingembre', ar: 'عبوات صغيرة للواسابي والزنجبيل' } },
      { icon: '🥢', img: './assets/images/products/cat_9/header.jpg', name: { en: 'Chopstick Rest Holders & Wooden Trays', ru: 'Подставки для палочек и деревянные подносы', ro: 'Suporturi bețișoare și tăvi din lemn', de: 'Essstäbchen-Bänke & Holz-Trays', fr: 'Repose-baguettes & plateaux en bois', ar: 'مساند خشبية لعيدان الأكل والصواني' } }
    ]
  },

  {
    id: 10,
    group: 'packaging',
    icon: '🌱',
    img: './assets/images/products/cat_10/header.jpg',
    chip: {
      en: 'Biodegradable', ru: 'Биоразлагаемые пакеты', ro: 'Pungi biodegradabile', de: 'Biologisch abbaubar', fr: 'Biodégradables', ar: 'أكياس صديقة للبيئة وقابلة للتحلل'
    },
    title: {
      en: 'Biodegradable & Compostable Bags', ru: 'Биоразлагаемые пакеты', ro: 'Pungi biodegradabile & compostabile', de: 'Biologisch abbaubare & kompostierbare Beutel', fr: 'Sacs biodégradables & compostables', ar: 'أكياس قابلة للتحلل العضوي والصديقة للبيئة'
    },
    desc: {
      en: '100% home and industrial compostable bags made from cornstarch (PBAT/PLA) conforming to EN 13432 standards.',
      ru: '100% биоразлагаемые пакеты из кукурузного крахмала (PBAT/PLA), сертификат EN 13432.',
      ro: 'Pungi 100% compostabile din amidon de porumb (PBAT/PLA), conforme cu norma EN 13432.',
      de: '100% kompostierbare Beutel aus Maisstärke (PBAT/PLA) nach EN 13432 Standard.',
      fr: 'Sacs 100% compostables à base d’amidon de maïs (PBAT/PLA) conformes à la norme EN 13432.',
      ar: 'أكياس مصنوعة 100% من نشا الذرة قابلة للتحلل العضوي الكامل ومطابقة للمواصفات الأوروبية EN 13432.'
    },
    specs: [
      {
        k: { en: 'Base Material', ru: 'Материал основы', ro: 'Material bază', de: 'Basismaterial', fr: 'Matériau de base', ar: 'المادة الخام الأساسية' },
        v: { en: 'Cornstarch PLA + PBAT bio-polymer blend', ru: 'Смесь кукурузного крахмала PLA и PBAT', ro: 'Amestec amidon porumb PLA + bio-polimer PBAT', de: 'Maisstärke PLA + PBAT Biopolymer-Mischung', fr: 'Mélange d’amidon de maïs PLA + biopolymère PBAT', ar: 'مزيج نشا الذرة الطبيعي وبوليمر عضوي' }
      },
      {
        k: { en: 'Certifications', ru: 'Сертификация', ro: 'Certificări', de: 'Zertifizierungen', fr: 'Certifications', ar: 'شهادات الجودة والاعتماد' },
        v: { en: 'TÜV Austria OK Compost Industrial & Home (EN 13432)', ru: 'TÜV Austria OK Compost (EN 13432)', ro: 'TÜV Austria OK Compost (EN 13432)', de: 'TÜV Austria OK Compost Industrial & Home (EN 13432)', fr: 'TÜV Austria OK Compost Industrial & Home (EN 13432)', ar: 'شهادة TÜV Austria المعتمده عالمياً' }
      },
      {
        k: { en: 'Degradation Time', ru: 'Срок разложения', ro: 'Timp degradare', de: 'Abbauzeit', fr: 'Temps de dégradation', ar: 'مدة التحلل العضوي' },
        v: { en: '180 Days in soil without toxic residue', ru: '180 дней в почве без токсичных остатков', ro: '180 Zile în sol fără reziduuri toxice', de: '180 Tage im Boden ohne toxische Rückstände', fr: '180 Jours dans le sol sans résidu toxique', ar: 'تحلل كامل خلال 180 يوماً في التربة دون أي ملوثات' }
      },
      {
        k: { en: 'Film Thickness', ru: 'Толщина пленки', ro: 'Grosime folie', de: 'Filmstärke', fr: 'Épaisseur du film', ar: 'سماكة البلاستيك العضوي' },
        v: { en: '15 - 50 microns customized options', ru: '15 - 50 микрон под заказ', ro: '15 - 50 mecroni opțiuni personalizate', de: '15 - 50 Mikrometer individuell', fr: '15 - 50 microns options sur-mesure', ar: 'خيارات تتردد بين 15 إلى 50 ميكرون' }
      },
      {
        k: { en: 'Water Resistance', ru: 'Влагостойкость', ro: 'Rezistență la apă', de: 'Wasserbeständigkeit', fr: 'Résistance à l’eau', ar: 'مقاومة السوائل والرطوبة' },
        v: { en: 'Waterproof seal for organic food & waste', ru: 'Водонепроницаемый шов для био-отходов', ro: 'Sigiliu impermeabil pentru deșeuri bio', de: 'Wasserdichter Verschluss für Bio-Abfälle', fr: 'Soudure étanche pour déchets bio', ar: 'لحام عازل للماء ومناسب للنفايات العضوية' }
      }
    ],
    products: [
      { icon: '🌱', img: './assets/images/products/cat_10/prod_1.jpg', name: { en: 'OK Compost Certified Cornstarch T-Shirt Bags', ru: 'Биоразлагаемые пакеты-майка с сертификатом OK Compost', ro: 'Pungi maieu din amidon de porumb OK Compost', de: 'OK Compost Maisstärke T-Shirt-Tragetaschen', fr: 'Sacs bretelles en amidon de maïs OK Compost', ar: 'أكياس علاقية من نشا الذرة معتمدة قابلة للتحلل' } },
      { icon: '🛍️', img: './assets/images/products/cat_10/prod_2.jpg', name: { en: 'Bio Die-Cut Handle Retail Shopping Bags', ru: 'Био-пакеты с вырубной ручкой для магазинов', ro: 'Pungi bio cu mâner decupat pentru magazine', de: 'Bio-Grifflochbeutel für den Einzelhandel', fr: 'Sacs bio à poignées découpées pour magasins', ar: 'أكياس تجارية عضويات قابلة للتحلل بمقابض' } },
      { icon: '🍏', img: './assets/images/products/cat_10/prod_3.jpg', name: { en: 'Compostable Produce Roll Bags for Supermarkets', ru: 'Био-пакеты в рулонах для овощей и фруктов', ro: 'Pungi rola biodegradabile pentru fructe și legume', de: 'Kompostierbare Knotenbeutel auf Rolle', fr: 'Sacs en rouleaux compostables pour fruits & légumes', ar: 'أكياس رول قابلة للتحلل للخضار للفواكه' } },
      { icon: '🗑️', img: './assets/images/products/cat_10/prod_4.jpg', name: { en: 'Organic Waste Compostable Trash Bags 30L/60L', ru: 'Биоразлагаемые мешки для органического мусора 30л/60л', ro: 'Saci menajeri biodegradabili pentru deșeuri 30L/60L', de: 'Biologisch abbaubare Müllbeutel 30L/60L', fr: 'Sacs poubelle compostables pour déchets bio 30L/60L', ar: 'أكياس نفايات حيوية قابلة للتحلل 30 و 60 لتر' } },
      { icon: '🌾', img: './assets/images/products/cat_10/prod_5.jpg', name: { en: 'PLA Bio Barrier Stretch Shrink Film', ru: 'Биоразлагаемая стретч-пленка PLA', ro: 'Folie barieră stretch biodegradabilă PLA', de: 'PLA Bio-Dehn- & Schrumpffolie', fr: 'Film étirable & rétractable bio PLA', ar: 'رول استرتش حيوي عازل قابل للتحلل' } },
      { icon: '🚜', img: './assets/images/products/cat_10/prod_1.jpg', name: { en: 'Bio Agricultural Mulch Film Rolls', ru: 'Биоразлагаемая мульчирующая пленка для агро', ro: 'Folie biodegradabilă pentru mulcire agricolă', de: 'Biologisch abbaubare Agrar-Mulchfolie', fr: 'Film de paillage agricole biodégradable', ar: 'رول بلاستيك زراعي حيوي للتربة' } },
      { icon: '✉️', img: './assets/images/products/cat_10/prod_2.jpg', name: { en: 'Biodegradable Courier & Mailing Envelopes', ru: 'Биоразлагаемые курьерские пакеты', ro: 'Pungi curierat biodegradabile pentru expediții', de: 'Biologisch abbaubare Kurier- & Versandtaschen', fr: 'Pochettes d’expédition biodégradables', ar: 'أظرف وأكياس شحن بريدي حيوية قابلة للتحلل' } },
      { icon: '🥖', img: './assets/images/products/cat_10/prod_3.jpg', name: { en: 'Bio Bread & Bakery Bags with Window', ru: 'Био-пакеты для хлеба с окошком', ro: 'Pungi bio pentru pâine cu fereastră', de: 'Bio-Brotbeutel mit Sichtfenster', fr: 'Sacs à pain bio avec fenêtre', ar: 'أكياس خبز عضوية قابلة للتحلل مع نافذة' } },
      { icon: '🤐', img: './assets/images/products/cat_10/prod_4.jpg', name: { en: 'Home Compostable Zip Lock Storage Bags', ru: 'Домашние биоразлагаемые зип-пакеты', ro: 'Pungi cu fermoar compostabile acasă', de: 'Heimkompostierbare Druckverschlussbeutel', fr: 'Sachets zip compostables à domicile', ar: 'أكياس بسحاب حفظ منزلية قابلة للتحلل' } },
      { icon: '📦', img: './assets/images/products/cat_10/prod_5.jpg', name: { en: 'PBAT Eco Bubble Wrap Protective Roll', ru: 'Биоразлагаемая воздушно-пузырьковая пленка', ro: 'Folie cu bule biodegradabilă PBAT', de: 'Biologisch abbaubare Luftpolsterfolie PBAT', fr: 'Film à bulles biodégradable PBAT', ar: 'رولفقاعات حماية حيوية PBAT' } }
    ]
  },

  {
    id: 11,
    group: 'packaging',
    icon: '🛍️',
    img: './assets/images/products/cat_11/header.jpg',
    chip: {
      en: 'Promo Bags', ru: 'Промо-сумки', ro: 'Sacoșe promoționale', de: 'Werbetaschen', fr: 'Sacs promotionnels', ar: 'أكياس وحقائب دعاية ورقية وقماشية'
    },
    title: {
      en: 'Shopping & Promotional Bags', ru: 'Сумки для покупок и промо', ro: 'Sacoșe de cumpărături & promoționale', de: 'Einkaufs- & Werbetaschen', fr: 'Sacs de shopping & promotionnels', ar: 'حقائب التسوق والأكياس الدعائية'
    },
    desc: {
      en: 'Non-woven polypropylene bags, organic cotton tote bags, laminated promo shoppers with custom silk-screen printing.',
      ru: 'Сумки из спанбонда (нетканого полипропилена), хлопка и ламинированные шоперы с шелкографией.',
      ro: 'Sacoșe din material nețesut (spunbond), bumbac organic și shoppers laminate imprimate.',
      de: 'Vliesstoff-Beutel (Spunbond), Baumwoll-Shopper und laminierte Werbetaschen mit Siebdruck.',
      fr: 'Sacs en polypropylène non-tissé (spunbond), sacs cabas en coton biologique avec sérigraphie.',
      ar: 'حقائب قماشية غير منسوجة، حقائب تسوق من القطن الطبيعي، والحقائب المطبوعة بشاشة الحرير.'
    },
    specs: [
      {
        k: { en: 'Fabric Weight', ru: 'Плотность ткани', ro: 'Densitate material', de: 'Stoffgewicht', fr: 'Grammage du tissu', ar: 'كثافة القماش' },
        v: { en: 'Non-woven 70-120 gsm, Cotton 140-280 gsm', ru: 'Спанбонд 70-120 г/м², Хлопок 140-280 г/м²', ro: 'Nețesut 70-120 gsm, Bumbac 140-280 gsm', de: 'Vliesstoff 70-120 g/m², Baumwolle 140-280 g/m²', fr: 'Non-tissé 70-120 g/m², Coton 140-280 g/m²', ar: 'قماش سبانبود 70-120 جرام، قطن 140-280 جرام' }
      },
      {
        k: { en: 'Stitching Reinforcement', ru: 'Усиление швов', ro: 'Ranforsare cusături', de: 'Nahtverstärkung', fr: 'Renforcement des coutures', ar: 'تقوية الخياطة والمقابض' },
        v: { en: 'Cross-stitch X-pattern handles for heavy load', ru: 'Крестообразный шов Х-образной прошивки ручек', ro: 'Cusătură în X la mânere pentru greutate', de: 'Kreuznaht X-Muster für schwere Lasten', fr: 'Couture en X aux poignées pour charge lourde', ar: 'خياطة مدعمة بقوة لمتحمل الأوزان العالية' }
      },
      {
        k: { en: 'Print Methodology', ru: 'Метод печати', ro: 'Metodă tipar', de: 'Druckverfahren', fr: 'Méthode d’impression', ar: 'تقنية الطباعة' },
        v: { en: 'Silkscreen, Heat Transfer & Gravure Lamination', ru: 'Шелкография, Термотрансфер и Ламинация', ro: 'Serigrafie, Transfer termic și Laminare', de: 'Siebdruck, Transferdruck & Tiefdruck', fr: 'Sérigraphie, Transfert thermique & Héliogravure', ar: 'طباعة حرارية، طباعة شاشة، وطباعة تصحيح الألوان' }
      },
      {
        k: { en: 'Eco Standard', ru: 'Эко-стандарты', ro: 'Standard eco', de: 'Öko-Standard', fr: 'Norme écologique', ar: 'الشهادات البيئية' },
        v: { en: 'OEKO-TEX Standard 100 organic cotton certified', ru: 'Сертификат органического хлопка OEKO-TEX 100', ro: 'Certificat bumbac organic OEKO-TEX Standard 100', de: 'OEKO-TEX Standard 100 Bio-Baumwolle', fr: 'Coton biologique certifié OEKO-TEX 100', ar: 'قطن طبيعي معتمد من OEKO-TEX 100' }
      },
      {
        k: { en: 'Re-usability', ru: 'Многоразовость', ro: 'Reutilizabilitate', de: 'Wiederverwendbarkeit', fr: 'Réutilisabilité', ar: 'إعادة الاستخدام' },
        v: { en: 'Over 100 wash cycles lifetime durability', ru: 'Выдерживает более 100 циклов стирки', ro: 'Rezistă la peste 100 de spălări', de: 'Über 100 Waschzyklen haltbar', fr: 'Résiste à plus de 100 cycles de lavage', ar: 'تحتمل أكثر من 100 غسلة استخدام مستمر' }
      }
    ],
    products: [
      { icon: '🛍️', img: './assets/images/products/cat_11/prod_1.jpg', name: { en: 'Non-Woven Spunbond Shopping Bags 80gsm', ru: 'Сумки из спанбонда 80г/м² с логотипом', ro: 'Sacoșe nețesute Spunbond 80gsm cu logo', de: 'Vliesstoff-Einkaufstaschen 80g/m²', fr: 'Sacs cabas non-tissé Spunbond 80g/m²', ar: 'حقائب سبانبود القماشية الدعائية 80 جرام' } },
      { icon: '⚡', img: './assets/images/products/cat_11/prod_2.jpg', name: { en: 'Ultrasonic Heat Sealed Non-Woven Bags', ru: 'Сумки из спанбонда ультразвуковой пайкой', ro: 'Sacoșe nețesute lipite cu ultrasunete', de: 'Ultraschall-verschweißte Vliesstofftaschen', fr: 'Sacs non-tissé thermosoudés ultrasons', ar: 'حقائب سبانبود ملحومة بالحرارة فوق الصوتية' } },
      { icon: '👜', img: './assets/images/products/cat_11/prod_3.jpg', name: { en: 'Organic Cotton Canvas Shopper Bags 140gsm', ru: 'Эко-сумки из хлопка 140г/м²', ro: 'Sacoșe din bumbac organic 140gsm', de: 'Bio-Baumwoll-Canvas-Taschen 140g/m²', fr: 'Sacs cabas en coton bio 140g/m²', ar: 'حقائب تسوق قطنية 140 جرام' } },
      { icon: '💼', img: './assets/images/products/cat_11/prod_4.jpg', name: { en: 'Heavy Duty Cotton Canvas Grocery Totes 280gsm', ru: 'Плотные сумки из холста 280г/м²', ro: 'Sacoșe groase din pânză bumbac 280gsm', de: 'Starke Baumwoll-Canvas-Shopper 280g/m²', fr: 'Sacs cabas épais en toile coton 280g/m²', ar: 'حقائب قماشية سميكة للأوزان 280 جرام' } },
      { icon: '✨', img: './assets/images/products/cat_11/prod_5.jpg', name: { en: 'Gloss Laminated Woven Promo Shoppers', ru: 'Ламинированные глянцевые промо-сумки', ro: 'Sacoșe promoționale laminate lucioase', de: 'Laminierte Glanz-Werbeshopper', fr: 'Sacs cabas publicitaires laminés brillants', ar: 'حقائب تسوق لامعة مطبوعة بحجم كبير' } },
      { icon: '🖤', img: './assets/images/products/cat_11/prod_1.jpg', name: { en: 'Matte Laminated Non-Woven Event Bags', ru: 'Матовые ламинированные промо-сумки', ro: 'Sacoșe promoționale laminate mate', de: 'Laminierte Matt-Werbeshopper', fr: 'Sacs cabas publicitaires laminés mats', ar: 'حقائب مطبوعة بطبقة مات عازلة' } },
      { icon: '🎒', img: './assets/images/products/cat_11/prod_2.jpg', name: { en: 'Drawstring Polyester Backpack Bags for Events', ru: 'Сумки-рюкзаки на затяжках для мероприятий', ro: 'Saci rucsac cu șnur pentru evenimente', de: 'Zugband-Rucksacktaschen für Events', fr: 'Sacs à dos à cordon pour événements', ar: 'حقائب ظهر برباط للمؤتمرات والفعاليات' } },
      { icon: '🔄', img: './assets/images/products/cat_11/prod_3.jpg', name: { en: 'Foldable Compact Nylon Shopping Pouches', ru: 'Складные нейлоновые сумки для покупок', ro: 'Sacoșe pliabile din nailon', de: 'Faltbare Nylon-Einkaufstaschen', fr: 'Sacs de shopping pliables en nylon', ar: 'حقائب تسوق من النايلون قابلة للطي' } },
      { icon: '🌿', img: './assets/images/products/cat_11/prod_4.jpg', name: { en: 'Jute & Burlap Natural Shopping Tote Bags', ru: 'Сумки для покупок из джута и мешковины', ro: 'Sacoșe din iută naturală', de: 'Natürliche Jute- & Sackleinen-Shopper', fr: 'Sacs cabas en jute naturelle', ar: 'حقائب تسوق من قماش الخيش والجوث الطبيعي' } },
      { icon: '♻️', img: './assets/images/products/cat_11/prod_5.jpg', name: { en: 'RPET Recycled Plastic Bottle Promo Shoppers', ru: 'Промо-сумки из переработанных пластиковых бутылок RPET', ro: 'Sacoșe promo din sticle plastic reciclate RPET', de: 'RPET Recycling-Plastikflaschen-Werbetaschen', fr: 'Sacs publicitaires en bouteilles plastique recyclées RPET', ar: 'حقائب تسوق مصنوعة من البلاستيك المعاد تدويره RPET' } }
    ]
  },

  {
    id: 12,
    group: 'packaging',
    icon: '📦',
    img: './assets/images/products/cat_12/header.jpg',
    chip: {
      en: 'Polyethylene', ru: 'Полиэтиленовые пакеты', ro: 'Pungi polietilenă', de: 'Polyethylenbeutel', fr: 'Sacs polyéthylène', ar: 'أكياس البولي إيثيلين'
    },
    title: {
      en: 'Polyethylene Bags (LDPE / HDPE)', ru: 'Полиэтиленовые пакеты (ПВД / ПНД)', ro: 'Pungi din polietilenă (LDPE / HDPE)', de: 'Polyethylenbeutel (LDPE / HDPE)', fr: 'Sacs en polyéthylène (LDPE / HDPE)', ar: 'أكياس البولي إيثيلين عالية ومنخفضة الكثافة'
    },
    desc: {
      en: 'Heavy-duty HDPE/LDPE t-shirt bags, die-cut handle bags, zip lock bags, and industrial pallet shrink film.',
      ru: 'Пакеты-майка ПНД/ПВД, пакеты с вырубной ручкой, зип-пакеты и термоусадочная пленка.',
      ro: 'Pungi maieu HDPE/LDPE, pungi cu mâner decupat, pungi cu fermoar și folie termocontractabilă.',
      de: 'Strapazierfähige HDPE/LDPE T-Shirt-Beutel, Grifflochbeutel, Druckverschlussbeutel.',
      fr: 'Sacs bretelles HDPE/LDPE résistants, sacs à poignées découpées, sacs à fermeture zip.',
      ar: 'أكياس بولي إيثيلين علاقية، أكياس بفتحات يد مقصوصة، أكياس بسحاب إغلاق، ورول تغليف الباليتات.'
    },
    specs: [
      {
        k: { en: 'Thickness Range', ru: 'Диапазон толщины', ro: 'Grosime', de: 'Stärkebereich', fr: 'Gamme d’épaisseur', ar: 'سماكة البلاستيك' },
        v: { en: '12 - 120 microns precision extrusion', ru: '12 - 120 микрон точная экструзия', ro: '12 - 120 mecroni extrudare de precizie', de: '12 - 120 Mikrometer Präzisionsextrusion', fr: '12 - 120 microns extrusion de précision', ar: 'سماكة دقيقة تتراوح بين 12 إلى 120 ميكرون' }
      },
      {
        k: { en: 'Material Density', ru: 'Плотность материала', ro: 'Densitate material', de: 'Materialdichte', fr: 'Densité matériau', ar: 'كثافة البولي إيثيلين' },
        v: { en: 'HDPE High Density & LDPE Low Density options', ru: 'ПНД Высокая плотность и ПВД Низкая плотность', ro: 'Opțiuni HDPE Densitate Mare & LDPE Densitate Mică', de: 'HDPE Hohe Dichte & LDPE Niedrige Dichte', fr: 'Options HDPE Haute Densité & LDPE Basse Densité', ar: 'خيارات عالي الكثافة HDPE ومنخفض الكثافة LDPE' }
      },
      {
        k: { en: 'Tear Resistance', ru: 'Прочность на разрыв', ro: 'Rezistență la rupere', de: 'Reißfestigkeit', fr: 'Résistance à la déchirure', ar: 'مقاومة الشد والتمزق' },
        v: { en: 'High puncture & impact resistance film', ru: 'Высокая прочность к проколам и ударам', ro: 'Folie cu rezistență înaltă la străpungere', de: 'Hohe Durchstoß- & Schlagfestigkeit', fr: 'Film haute résistance aux perforations', ar: 'بلاستيك مرن مقوم للثقب والأوزان الثقيلة' }
      },
      {
        k: { en: 'Sealing Integrity', ru: 'Герметичность швов', ro: 'Integritate sigilare', de: 'Nahtdichtigkeit', fr: 'Intégrité des soudures', ar: 'جودة لحام الحواف' },
        v: { en: 'Double-welded bottom seam for liquid safety', ru: 'Двойной сварной шов дна против протечек', ro: 'Cusătură dublu sudată pe fund anti-scurgere', de: 'Doppelt geschweißte Bodennaht', fr: 'Double soudure de fond étanche', ar: 'لحام مزدوج مقوى يمنع تسريب السوائل' }
      },
      {
        k: { en: 'Recycled Content', ru: 'Вторсырье в составе', ro: 'Conținut reciclat', de: 'Recycling-Anteil', fr: 'Contenu recyclé', ar: 'المواد التدويرية' },
        v: { en: 'Available with 30% - 100% PCR recycled resin', ru: 'Доступно с 30% - 100% переработанного PCR пластика', ro: 'Disponibil cu 30% - 100% rășină reciclată PCR', de: 'Erhältlich mit 30% - 100% PCR-Recycling-Harz', fr: 'Disponible avec 30% - 100% résine recyclée PCR', ar: 'يتوفر بنسب تدوير تتراوح بين 30% إلى 100%' }
      }
    ],
    products: [
      { icon: '🛍️', img: './assets/images/products/cat_12/prod_1.jpg', name: { en: 'High Density HDPE T-Shirt Grocery Bags', ru: 'Пакеты-майка ПНД высокой плотности', ro: 'Pungi maieu HDPE densitate mare', de: 'HDPE T-Shirt-Tragetaschen высокой плотности', fr: 'Sacs bretelles HDPE haute densité', ar: 'أكياس علاقية بولي إيثيلين عالية الكثافة' } },
      { icon: '🛍️', img: './assets/images/products/cat_12/prod_10.jpg', name: { en: 'Low Density LDPE Smooth T-Shirt Bags', ru: 'Пакеты-майка ПВД гладкие', ro: 'Pungi maieu LDPE finisaj neted', de: 'LDPE T-Shirt-Tragetaschen glatt', fr: 'Sacs bretelles LDPE finition lisse', ar: 'أكياس علاقية بولي إيثيلين ناعمة' } },
      { icon: '🛍️', img: './assets/images/products/cat_12/prod_2.jpg', name: { en: 'Heavy Duty PE Die-Cut Handle Shopping Bags', ru: 'Пакеты ПВД с вырубной усиленной ручкой', ro: 'Pungi PE cu mâner decupat ranforsat', de: 'PE-Grifflochbeutel verstärkt', fr: 'Sacs PE à poignées découpées renforcées', ar: 'أكياس بلاستيك بفتحات يد مقواة' } },
      { icon: '➰', img: './assets/images/products/cat_12/prod_3.jpg', name: { en: 'Flexible Loop Handle Polyethylene Bags', ru: 'Пакеты ПВД с петлевой ручкой', ro: 'Pungi PE cu mâner flexibil tip rigid', de: 'PE-Schlaufenhenkelbeutel', fr: 'Sacs PE à poignées boucles souples', ar: 'أكياس بلاستيك بمقابض شريطية' } },
      { icon: '🤐', img: './assets/images/products/cat_12/prod_4.jpg', name: { en: 'Re-sealable Zip Lock Poly Bags (Various Sizes)', ru: 'Зип-пакеты ПВД с замком многоразовые', ro: 'Pungi PE cu fermoar ZIP reutilizabile', de: 'Wiederverschließbare PE-Druckverschlussbeutel', fr: 'Sacs PE à fermeture zip réutilisables', ar: 'أكياس بولي إيثيلين بسحاب إغلاق محكم' } },
      { icon: '🌀', img: './assets/images/products/cat_12/prod_5.jpg', name: { en: 'Hand Pallet Stretch Film Rolls 23 Micron', ru: 'Ручной стретч 23 микрон для обмотки паллет', ro: 'Folie stretch manuală 23 microni paleți', de: 'Hand-Stretchtfolie 23 Mikrometer', fr: 'Film étirable manuel 23 microns pour palettes', ar: 'رول تغليف استرتش يدوي للباليتات 23 ميكرون' } },
      { icon: '⚙️', img: './assets/images/products/cat_12/prod_6.jpg', name: { en: 'Machine Stretch Film Rolls 250% Pre-Stretch', ru: 'Машинный стретч 250% предрастяжение', ro: 'Folie stretch automată mașină 250%', de: 'Maschinen-Stretchfolie 250% Vordehnung', fr: 'Film étirable machine pré-étirage 250%', ar: 'رول استرتش آلي للباليتات شد 250%' } },
      { icon: '🗑️', img: './assets/images/products/cat_12/prod_7.jpg', name: { en: 'Black Heavy Duty Garbage Bags 120L/240L', ru: 'Плотные черные мешки для мусора 120л/240л', ro: 'Saci menajeri negri rezistenți 120L/240L', de: 'Schwarze Müllbeutel strapazierfähig 120L/240L', fr: 'Sacs poubelle noirs renforcés 120L/240L', ar: 'أكياس قمامة سوداء سميكة 120 و 240 لتر' } },
      { icon: '⚠️', img: './assets/images/products/cat_12/prod_8.jpg', name: { en: 'Medical Biohazard Waste Liners (Yellow/Red)', ru: 'Медицинские мешки для отходов (желтые/красные)', ro: 'Saci deșeuri medicale periculoase (galben/roșu)', de: 'Medizinische Abfallbeutel (Gelb/Rot)', fr: 'Sacs déchets médicaux infectieux (jaune/rouge)', ar: 'أكياس نفايات طبية خطرة صفراء وحمراء' } },
      { icon: '🔥', img: './assets/images/products/cat_12/prod_9.jpg', name: { en: 'PE Thermal Shrink Film Hoods for Pallets', ru: 'Термоусадочные колпаки ПВД для паллет', ro: 'Huse termocontractabile PE pentru paleți', de: 'PE-Thermoschrumpf-Hauben für Paletten', fr: 'Housses thermo-rétractables PE pour palettes', ar: 'أغطية بلاستيكية حرارية لتغليف الباليتات' } }
    ]
  },

  {
    id: 13,
    group: 'hotel',
    icon: '🩴',
    img: './assets/images/products/cat_13/header.jpg',
    chip: {
      en: 'Hotel Supplies', ru: 'Гостиничные принадлежности', ro: 'Consumabile cameră hotel', de: 'Hotelzimmerbedarf', fr: 'Fournitures pour chambres d’hôtel', ar: 'مستلزمات غرف الفنادق'
    },
    title: {
      en: 'Guest Room Supplies & Accessories', ru: 'Принадлежности для гостиничных номеров', ro: 'Accesorii & Consumabile camere hotel', de: 'Hotelzimmer-Zubehör & Artikel', fr: 'Accessoires & Équipements de chambre d’hôtel', ar: 'مستلزمات وإكسسوارات غرف نزلاء الفنادق'
    },
    desc: {
      en: 'Disposable velvet hotel slippers, non-woven laundry bags, shoe shine sponges, sewing kits, and velvet hangers.',
      ru: 'Махровые и одноразовые тапочки, мешки для прачечной, губки для обуви, швейные наборы и вешалки.',
      ro: 'Papuci de casă din pluș/bumbac, saci spălătorie, bureți pantofi, truse cusut și umerașe.',
      de: 'Einweg-Hotelpantoffeln, Wäschebeutel aus Vliesstoff, Schuhputzschwämme, Nähzeuge.',
      fr: 'Chaussons d’hôtel jetables, sacs à linge en non-tissé, éponges à chaussures, kits de couture.',
      ar: 'خفاف ومقاسات شباشب الفنادق، أكياس غسيل الملابس، إسفنج تلميع الأحذية، وأطقم الخياطة.'
    },
    specs: [
      {
        k: { en: 'Slipper Sole Thickness', ru: 'Толщина подошвы тапочек', ro: 'Grosime talpă papuci', de: 'Pantoffel-Sohlendicke', fr: 'Épaisseur semelle chausson', ar: 'سماكة نعل الشبشب' },
        v: { en: '3mm to 7mm anti-slip EVA waterproof sole', ru: 'Нескользящая водонепроницаемая EVA 3мм - 7мм', ro: 'Talpă EVA impermeabilă antiderapantă 3mm - 7mm', de: '3mm bis 7mm rutschfeste wasserdichte EVA-Sohle', fr: 'Semelle EVA antidérapante 3mm à 7mm', ar: 'نعل إيفا مانع للانزلاق بسماكة 3 إلى 7 مم' }
      },
      {
        k: { en: 'Upper Fabric Material', ru: 'Материал верха', ro: 'Material textil superior', de: 'Obermaterial-Stoff', fr: 'Matériau supérieur', ar: 'خامة القماش العلوي' },
        v: { en: 'Velour, Terry Towel, Coral Fleece, Waffle', ru: 'Велюр, Махра, Корал-флис, Вафля', ro: 'Pluș, Bumbac sponj, Coral fleece, Waffle', de: 'Velours, Frottier, Coral-Fleece, Waffel', fr: 'Velours, Éponge, Coral fleece, Gaufre', ar: 'قماش مخملي، قطن منشفة، أو قماش مجعد' }
      },
      {
        k: { en: 'Branding Method', ru: 'Метод нанесения логотипа', ro: 'Metodă personalizare', de: 'Personalisierungsart', fr: 'Méthode de personnalisation', ar: 'طريقة طباعة الشعار' },
        v: { en: 'Embroidery, Screen printing, Gold foil stamp', ru: 'Вышивка, Шелкография, Тиснение золотом', ro: 'Broderie, Serigrafie, Timbru auriu', de: 'Stickerei, Siebdruck, Goldfolienprägung', fr: 'Broderie, Sérigraphie, Dorure à chaud', ar: 'تطريز ملون، طباعة شاشة، أو بصمة ذهبية' }
      },
      {
        k: { en: 'Packaging Wraps', ru: 'Упаковка товаров', ro: 'Ambalare consumabile', de: 'Verpackungshülle', fr: 'Emballage d’hygiène', ar: 'نوع تغليف الأطقم' },
        v: { en: 'Individual OPP hygienic wrap or bio bag', ru: 'Индивидуальный пакетик OPP или био-пакет', ro: 'Pungă individuală igienică OPP sau bio', de: 'Einzelne OPP-Hygienehülle oder Bio-Beutel', fr: 'Sachet individuel hygiénique OPP ou bio', ar: 'تغليف فردي معقم في أكياس بلاستيكية' }
      },
      {
        k: { en: 'Hotel Star Standard', ru: 'Стандарт отелей', ro: 'Standard stele hotel', de: 'Hotelsterne-Standard', fr: 'Norme hôtelière', ar: 'تصنيف الفنادق' },
        v: { en: 'Suitable for 4-Star & 5-Star luxury resort lines', ru: 'Подходит для отелей 4-5 звезд и курортов', ro: 'Potrivit pentru resorturi și hoteluri 4-5 stele', de: 'Geeignet für 4- und 5-Sterne Luxushotels', fr: 'Adapté aux hôtels 4 & 5 étoiles et resorts', ar: 'مصمم خصيصاً للفنادق والمنتجعات 4 و 5 نجوم' }
      }
    ],
    products: [
      { icon: '🩴', img: './assets/images/products/cat_13/prod_1.jpg', name: { en: 'Custom Logo Velour Closed Toe Hotel Slippers', ru: 'Велюровые закрытые гостиничные тапочки с вышивкой', ro: 'Papuci hotelieri din pluș închiși cu broderie', de: 'Velours-Hotel-Slipper geschlossen mit Logo', fr: 'Chaussons d’hôtel velours fermés brodés', ar: 'شباشب وخفاف الفنادق المخملية المغلقة المطرزة' } },
      { icon: '🩴', img: './assets/images/products/cat_13/prod_10.jpg', name: { en: 'Waffle Weave Breathable Open Toe Slippers', ru: 'Вафельные дышащие тапочки с открытым носом', ro: 'Papuci hotelieri waffle respirabili deschiși', de: 'Waffel-Slipper atmungsaktiv offen', fr: 'Chaussons d’hôtel gaufres respirants ouverts', ar: 'شباشب قطن مجعد مفتوحة خفيفة للفنادق' } },
      { icon: '🧺', img: './assets/images/products/cat_13/prod_11.jpg', name: { en: 'Non-Woven Spunbond Laundry Bags with Drawstring', ru: 'Мешки для прачечной из спанбонда на завязках', ro: 'Saci spălătorie nețesuți cu șnur', de: 'Vliesstoff-Wäschebeutel mit Zugband', fr: 'Sacs à linge non-tissé avec cordon', ar: 'أكياس غسيل الملابس القماشية برباط' } },
      { icon: '🧺', img: './assets/images/products/cat_13/prod_12.svg', name: { en: 'Organic Cotton Canvas Eco Laundry Bags', ru: 'Мешки для прачечной из натурального хлопка', ro: 'Saci spălătorie din bumbac organic', de: 'Bio-Baumwoll-Wäschebeutel', fr: 'Sacs à linge en coton bio canvas', ar: 'أكياس غسيل الملابس من القطن الطبيعي' } },
      { icon: '🧽', img: './assets/images/products/cat_13/prod_13.jpg', name: { en: 'Shoe Shine Sponges in Custom Paper Box', ru: 'Губки для чистки обуви в брендированной коробке', ro: 'Bureți lustruit pantofi în cutie carton', de: 'Schuhputzschwämme in Pappschachtel', fr: 'Éponges à chaussures en boîte papier', ar: 'إسفنج تلميع الأحذية في علب كرتونية' } },
      { icon: '🧽', img: './assets/images/products/cat_13/prod_14.svg', name: { en: 'Shoe Shine Polishing Mitts & Cloths', ru: 'Варежки и салфетки для полировки обуви', ro: 'Mănuși și lavete lustruit pantofi', de: 'Schuhputz-Handschuhe & Poliertücher', fr: 'Gants & chiffons à polir les chaussures', ar: 'قُفازات ومناشف تلميع الأحذية' } },
      { icon: '🧵', img: './assets/images/products/cat_13/prod_2.jpg', name: { en: 'Travel Sewing Kits in Custom Printed Box', ru: 'Швейные наборы для путешествий в коробочке', ro: 'Truse cusut voiaj în cutie personalizată', de: 'Reise-Nähzeuge in Schachtel mit Logo', fr: 'Kits de couture voyage en boîte personnalisée', ar: 'أطقم الخياطة الصغيرة للغرف والمستلزمات' } },
      { icon: '👔', img: './assets/images/products/cat_13/prod_3.jpg', name: { en: 'Velvet Anti-Slip Clothes Hangers with Clips', ru: 'Велюровые вешалки для одежды с зажимами', ro: 'Umerașe catifea antiderapante cu cleme', de: 'Samt Kleiderbügel anti-rutsch mit Klammern', fr: 'Cintres velours antidérapants avec pinces', ar: 'علاقات ملابس مخملية مع مشابك' } },
      { icon: '👔', img: './assets/images/products/cat_13/prod_4.jpg', name: { en: 'Solid Wooden Hotel Suit & Coat Hangers', ru: 'Деревянные вешалки для костюмов и пальто', ro: 'Umerașe din lemn masiv pentru costume', de: 'Massivholz-Hotelbügel für Anzüge', fr: 'Cintres en bois massif pour costumes', ar: 'علاقات ملابس خشبية صلبة للبدل' } },
      { icon: '🚪', img: './assets/images/products/cat_13/prod_5.jpg', name: { en: 'Hotel Room Do Not Disturb Door Hangers', ru: 'Таблички на дверь «Не беспокоить»', ro: 'Agățătoare ușă «Nu deranjați»', de: 'Türhänger «Bitte nicht stören»', fr: 'Accroche-portes «Ne pas déranger»', ar: 'بطاقات تعليق الأبواب رجاء عدم الإزعاج' } }
    ]
  },

  {
    id: 14,
    group: 'hotel',
    icon: '🧴',
    img: './assets/images/products/cat_14/header.jpg',
    chip: {
      en: 'Hotel Amenities', ru: 'Гостиничная косметика', ro: 'Cosmetice hotel', de: 'Hotelkosmetik', fr: 'Produits d’accueil hôtel', ar: 'مستلزمات العناية الشخصية للفنادق'
    },
    title: {
      en: 'Hotel Cosmetics & Amenities', ru: 'Гостиничная косметика и мини-парфюмерия', ro: 'Cosmetice & Seturi ambalate hotel', de: 'Hotelkosmetik & Pflegeprodukte', fr: 'Cosmétiques & Produits d’accueil hôtel', ar: 'مستحضرات التجميل والعناية الشخصية للفنادق'
    },
    desc: {
      en: '30ml mini bottles of shampoo, shower gel, conditioner, body lotion, pleated hotel soaps, and eco dental kits.',
      ru: 'Мини-флаконы 30мл с шампунем, гелем для душа, кондиционером, лосьоном, мыло в плиссе и зубные наборы.',
      ro: 'Flacoane 30ml șampon, gel duș, balsam, loțiune corpul, săpunuri pliabile și truse dentare.',
      de: '30ml Fläschchen Shampoo, Duschgel, Conditioner, Bodylotion, plissierte Seifen, Zahnplege-Sets.',
      fr: 'Flacons 30ml shampooing, gel douche, après-shampooing, lait corps, savons pliés & kits dentaires.',
      ar: 'عبوات صغيرة 30 مل شامبو، جل استحمام، بلسم، لوشن جسم، صابون مغلف، وأطقم عناية بالأسنان.'
    },
    specs: [
      {
        k: { en: 'Bottle Liquid Volume', ru: 'Объем флаконов', ro: 'Volum lichid flacoane', de: 'Fläschchen-Volumen', fr: 'Volume liquide flacons', ar: 'حجم عبوات الشامبو والجل' },
        v: { en: '25ml, 30ml, 40ml, 50ml PCR bottles', ru: 'Флаконы 25мл, 30мл, 40мл, 50мл PCR', ro: 'Flacoane 25ml, 30ml, 40ml, 50ml PCR', de: '25ml, 30ml, 40ml, 50ml PCR-Fläschchen', fr: 'Flacons 25ml, 30ml, 40ml, 50ml PCR', ar: 'عبوات مخصصة 25، 30، 40، 50 مل' }
      },
      {
        k: { en: 'Liquid Formulation', ru: 'Формула жидкостей', ro: 'Formulă lichide', de: 'Flüssigkeitsrezeptur', fr: 'Formulation des liquides', ar: 'جودة وتركيبة السائل' },
        v: { en: 'Paraben-free, SLS-free, Dermatologically tested', ru: 'Без парабенов и SLS, дерматологически протестировано', ro: 'Fără parabeni, fără SLS, testat dermatologic', de: 'Parabenfrei, SLS-frei, dermatologisch getestet', fr: 'Sans parabène, sans SLS, testé dermatologiquement', ar: 'تركيبات خالية من البارابين ومفحوصة جلدياً' }
      },
      {
        k: { en: 'Soap Options', ru: 'Варианты мыла', ro: 'Opțiuni săpunuri', de: 'Seifenoptionen', fr: 'Options de savons', ar: 'أنواع وأحجام الصابون' },
        v: { en: '15g, 20g, 30g pleated paper wrap or box soap', ru: 'Мыло 15г, 20г, 30г в плиссе или коробке', ro: 'Săpun 15g, 20g, 30g pliabil sau în cutie', de: '15g, 20g, 30g plissiert oder im Karton', fr: 'Savon 15g, 20g, 30g plissé ou en boîte', ar: 'صابون 15، 20، 30 جرام كرتون أو غلاف' }
      },
      {
        k: { en: 'Eco Toothbrush Handle', ru: 'Ручка зубной щетки', ro: 'Mâner periuță dinți eco', de: 'Zahnbürstengriff', fr: 'Manche brosse à dents éco', ar: 'فرشاة الأسنان الصديقة للبيئة' },
        v: { en: 'Biodegradable wheat straw or bamboo handle', ru: 'Биоразлагаемая пшеничная солома или бамбук', ro: 'Paie de grâu biodegradabile sau bambus', de: 'Biologisch abbaubares Weizenstroh oder Bambus', fr: 'Paille de blé biodégradable ou bambou', ar: 'مصنوعة من ألياف قش القمح أو الخيزران' }
      },
      {
        k: { en: 'EU Cosmetic Law', ru: 'Стандарты ЕС', ro: 'Standarde cosmetice UE', de: 'EU-Kosmetikverordnung', fr: 'Conformité cosmétique UE', ar: 'المطابقة الأوروبية للمستحضرات' },
        v: { en: 'Fully compliant with EU Regulation EC 1223/2009', ru: 'Полное соответствие регламенту ЕС 1223/2009', ro: 'Conformitate completă cu Regulamentul UE 1223/2009', de: 'Voll konform mit EU-Verordnung EC 1223/2009', fr: 'Conforme au règlement européen CE 1223/2009', ar: 'مطابق بالكامل للوائح التجميل الأوروبية' }
      }
    ],
    products: [
      { icon: '🧴', img: './assets/images/products/cat_14/prod_1.jpg', name: { en: '30ml Hotel Nourishing Shampoo Bottles', ru: 'Мини-флаконы питательного шампуня 30мл', ro: 'Flacoane 30ml șampon hrănitor hotel', de: '30ml Pflegeshampoo Fläschchen', fr: 'Flacons 30ml shampooing nourrissant', ar: 'عبوات شامبو المغذي 30 مل للفنادق' } },
      { icon: '🧼', img: './assets/images/products/cat_14/prod_2.jpg', name: { en: '30ml Refreshing Shower Gel Bottles', ru: 'Гель для душа освежающий 30мл', ro: 'Gel de duș revigorant 30ml', de: '30ml Duschgel Fläschchen', fr: 'Flacons 30ml gel douche rafraîchissant', ar: 'عبوات جل الاستحمام 30 مل للفنادق' } },
      { icon: '🧴', img: './assets/images/products/cat_14/prod_3.jpg', name: { en: '30ml Hair Conditioner Bottles', ru: 'Кондиционер для волос 30мл', ro: 'Balsam de păr 30ml', de: '30ml Haarconditioner Fläschchen', fr: 'Flacons 30ml après-shampooing', ar: 'عبوات بلسم الشعر 30 مل' } },
      { icon: '🧴', img: './assets/images/products/cat_14/prod_1.jpg', name: { en: '30ml Moisturizing Body Lotion Bottles', ru: 'Увлажняющий лосьон для тела 30мл', ro: 'Loțiune hidratantă corp 30ml', de: '30ml Feuchtigkeits-Bodylotion', fr: 'Flacons 30ml lait hydratant corps', ar: 'عبوات لوشن مرطب للجسم 30 مل' } },
      { icon: '🧼', img: './assets/images/products/cat_14/prod_2.jpg', name: { en: 'Pleated Paper Wrapped Soaps 20g', ru: 'Мыло в плиссе 20г с логотипом', ro: 'Săpun ambalat în hârtie pliabilă 20g', de: 'Plissierte Seifen 20g mit Logo', fr: 'Savons plissés 20g avec logo', ar: 'صابون مغلف ورق مطوي 20 جرام' } },
      { icon: '🧼', img: './assets/images/products/cat_14/prod_3.jpg', name: { en: 'Boxed Square Transparent Glycerin Soaps 25g', ru: 'Глицериновое прозрачное мыло в коробке 25г', ro: 'Săpun transparent din glicerină 25g', de: 'Glycerin-Seifen im Karton 25g', fr: 'Savons à la glycérine en boîte 25g', ar: 'صابون جليسرين شفاف مربع في كرتون 25 جرام' } },
      { icon: '🪥', img: './assets/images/products/cat_14/prod_1.jpg', name: { en: 'Wheat Straw Eco Dental Kits (Brush + Paste)', ru: 'Зубные наборы из пшеничной соломы', ro: 'Truse dentare din paie de grâu (periuță + pastă)', de: 'Zahnpflege-Sets aus Weizenstroh', fr: 'Kits dentaires en paille de blé (brosse + dentifrice)', ar: 'أطقم العناية بالأسنان العضوية (فرشاة والمعجون)' } },
      { icon: '🪒', img: './assets/images/products/cat_14/prod_2.jpg', name: { en: 'Eco Shaving Kits (Razor + Shaving Cream Tube)', ru: 'Бритвенные наборы с станком и кремом', ro: 'Truse bărbierit (aparat + tub cremă)', de: 'Rasier-Sets (Rasierer + Creme-Tube)', fr: 'Kits de rasage (rasoir + tube crème)', ar: 'أطقم الحلاقة (ماكينة حلاقة مع أنبوب كريم)' } },
      { icon: '💅', img: './assets/images/products/cat_14/prod_3.jpg', name: { en: 'Vanity Kits (Cotton Pads + Swabs + File)', ru: 'Косметические наборы (диски, палочки, пилочка)', ro: 'Truse cosmetice (dischete, bețișoare, pilă)', de: 'Kosmetik-Sets (Wattepads, Wattestäbchen, Feile)', fr: 'Kits beauté (cotons, cotons-tiges, lime)', ar: 'أطقم التجميل (قطن، نكاشات أذن، ومبرد)' } },
      { icon: '🚿', img: './assets/images/products/cat_14/prod_1.jpg', name: { en: 'Waterproof Shower Caps in Paper Box', ru: 'Шапочки для душа в бумажной коробке', ro: 'Scufii duș impermeabile în cutie carton', de: 'Duschhauben in Pappschachtel', fr: 'Charlottes de douche en boîte papier', ar: 'قبعات الاستحمام المعقمة في علب' } },
      { icon: '🚽', img: './assets/images/products/cat_14/prod_2.jpg', name: { en: 'Sanitized Toilet Seat Paper Bands', ru: 'Бумажные полосы «Дезинфицировано» для унитазов', ro: 'Benzi hârtie dezinfectat pentru toaletă', de: 'Desinfizierte WC-Papierbänder', fr: 'Bandeaux papier désinfecté pour WC', ar: 'شرائط ورقية معقمة لمقاعد الحمامات' } },
      { icon: '🥂', img: './assets/images/products/cat_14/prod_3.jpg', name: { en: 'Hotel Room Glass Coasters & Covers', ru: 'Бумажные подставки и крышки для стаканов', ro: 'Suporturi și capace carton pentru pahare hotel', de: 'Glasuntersetzer & Becherabdeckungen', fr: 'Sous-verres & couvercles papier pour verres', ar: 'أغطية وقواعد أكواب ورقية مطبوعة للغرف' } }
    ]
  },

  {
    id: 15,
    group: 'hotel',
    icon: '🧳',
    img: './assets/images/products/cat_15/header.jpg',
    chip: {
      en: 'Hotel Furniture', ru: 'Мебель для отелей', ro: 'Mobilier hotelier', de: 'Hotelmöbel', fr: 'Mobilier d’hôtel', ar: 'أثاث ومعدات غرف الفنادق'
    },
    title: {
      en: 'Hotel Room Furniture & Equipment', ru: 'Гостиничная мебель и оборудование', ro: 'Mobilier & Echipamente camere hotel', de: 'Hotelzimmer-Möbel & Ausstattung', fr: 'Mobilier & Équipements de chambre d’hôtel', ar: 'أثاث ومعدات غرف وأجنحة الفنادق'
    },
    desc: {
      en: 'Foldable wooden luggage racks, silent hotel absorption minibars, digital room safes, and luxury wooden hangers.',
      ru: 'Складные деревянные багажницы, бесшумные мини-бары, цифровые сейфы и деревянные вешалки.',
      ro: 'Suporturi pliabile bagaje, minibaruri silențioase cu absorbție, seifuri digitale și umerașe.',
      de: 'Klappbare Gepäckablagen aus Holz, lautlose Minibars, digitale Zimmersafes, Holzkleiderbügel.',
      fr: 'Porte-bagages pliables en bois, minibars silencieux à absorption, coffres-forts numériques.',
      ar: 'حوامل حقائب سفر خشبية قابلة للطي، ثلاجات ميني بار صامتة، وصناديق أمانات رقمية للغرف.'
    },
    specs: [
      {
        k: { en: 'Warranty Coverage', ru: 'Гарантия производителя', ro: 'Acoperire garanție', de: 'Garantieabdeckung', fr: 'Couverture de garantie', ar: 'ضمان المصنع' },
        v: { en: '2 Years commercial heavy-duty hotel warranty', ru: '2 года коммерческой гарантии для отелей', ro: '2 Ani garanție comercială hotelieră', de: '2 Jahre kommerzielle Hotelgarantie', fr: '2 Ans de garantie commerciale hôtelière', ar: 'ضمان تجاري للفنادق لمدة عامين' }
      },
      {
        k: { en: 'Minibar Cooling', ru: 'Охлаждение мини-бара', ro: 'Răcire minibar', de: 'Minibar-Kühlung', fr: 'Refroidissement minibar', ar: 'نظام تبريد الميني بار' },
        v: { en: '100% Silent absorption technology (0 dB)', ru: '100% абсорбционная бесшумная технология (0 дБ)', ro: 'Tehnologie silențioasă de absorbție 100% (0 dB)', de: '100% Lautlose Absorptionstechnologie (0 dB)', fr: 'Technologie d’absorption 100% silencieuse (0 dB)', ar: 'تقنية التبريد الصامتة 100% بدون أي ضوضاء' }
      },
      {
        k: { en: 'Digital Safe Security', ru: 'Безопасность сейфа', ro: 'Securitate seif digital', de: 'Zimmersafe-Sicherheit', fr: 'Sécurité coffre-fort', ar: 'أمان الخزنة الرقمية' },
        v: { en: 'ADA compliant keypad with master key override', ru: 'Клавиатура ADA и аварийный мастер-ключ', ro: 'Tastatură ADA cu cheie master de urgență', de: 'Tastatur mit Masterkey-Überbrückung', fr: 'Clavier avec clé maîtresse d’urgence', ar: 'لوحة أرقام رقمية مع مفتاح طوارئ رئيسي' }
      },
      {
        k: { en: 'Luggage Rack Wood', ru: 'Древесина багажницы', ro: 'Lemn suport bagaje', de: 'Gepäckablage-Holz', fr: 'Bois porte-bagages', ar: 'نوع خشب حامل الحقائب' },
        v: { en: 'Solid beech wood with heavy nylon straps', ru: 'Массив бука с прочными нейлоновыми ремнями', ro: 'Lemn masiv de fag cu chingi nailon rezistente', de: 'Massivholz Buche mit starken Nylongurten', fr: 'Hêtre massif avec sangles en nylon renforcées', ar: 'خشب الزان الصلب مع أحزمة نايلون متينة' }
      },
      {
        k: { en: 'Kettle Eco Safety', ru: 'Безопасность чайника', ro: 'Siguranță cană fiert', de: 'Wasserkocher-Sicherheit', fr: 'Sécurité bouilloire', ar: 'أمان الغلاية الكهربائية' },
        v: { en: 'Auto shut-off boil-dry protection 0.8L', ru: 'Автовыключение и защита от сухого закипания 0.8л', ro: 'Oprire automată și protecție fără apă 0.8L', de: 'Auto-Abschaltung & Trockengehschutz 0,8L', fr: 'Arrêt automatique & protection anti-chauffe 0,8L', ar: 'إغلاق أوتوماتيكي مع حماية الغليان الجاف 0.8 لتر' }
      }
    ],
    products: [
      { icon: '🧳', img: './assets/images/products/cat_15/prod_1.jpg', name: { en: 'Foldable Solid Beech Luggage Racks', ru: 'Складные деревянные багажницы из бука', ro: 'Suporturi pliabile bagaje din lemn fag', de: 'Klappbare Gepäckablagen aus Buchenholz', fr: 'Porte-bagages pliables en hêtre massif', ar: 'حوامل حقائب سفر خشبية صلبة قابلة للطي' } },
      { icon: '🧳', img: './assets/images/products/cat_15/prod_2.png', name: { en: 'Stainless Steel Metallic Luggage Stands', ru: 'Металлические багажницы из нержавеющей стали', ro: 'Suporturi bagaje din inox metalic', de: 'Edelstahl-Gepäckständer', fr: 'Porte-bagages métalliques en inox', ar: 'حوامل حقائب ستانلس ستيل مع حماية للجدران' } },
      { icon: '🧊', img: './assets/images/products/cat_15/prod_3.jpg', name: { en: 'Silent Absorption Minibars 30L Glass Door', ru: 'Бесшумные абсорбционные мини-бары 30л со стеклом', ro: 'Minibaruri silențioase 30L ușă sticlă', de: 'Lautlose Absorber-Minibars 30L Glastür', fr: 'Minibars silencieux 30L porte en verre', ar: 'ثلاجات ميني بار صامتة باب زجاجي 30 لتر' } },
      { icon: '🧊', img: './assets/images/products/cat_15/prod_4.jpg', name: { en: 'Silent Absorption Minibars 40L Solid Door', ru: 'Бесшумные абсорбционные мини-бары 40л глухая дверь', ro: 'Minibaruri silențioase 40L ușă plină', de: 'Lautlose Absorber-Minibars 40L Solidtür', fr: 'Minibars silencieux 40L porte pleine', ar: 'ثلاجات ميني بار صامتة باب مغلق 40 لتر' } },
      { icon: '🔒', img: './assets/images/products/cat_15/prod_1.jpg', name: { en: 'Digital Laptop Safe 15-17 Inch with Master Key', ru: 'Цифровые сейфы для ноутбуков 15-17" с мастер-ключом', ro: 'Seifuri digitale pentru laptop 15-17" cu cheie master', de: 'Digitale Laptop-Safes 15-17" mit Masterkey', fr: 'Coffres-forts numériques ordinateur 15-17" avec clé', ar: 'صناديق أمانات رقمية تتسع للابتوب مع مفتاح طوارئ' } },
      { icon: '☕', img: './assets/images/products/cat_15/prod_2.png', name: { en: 'Hotel Room Electric Kettle Tray Sets 0.8L', ru: 'Чайные станции 0.8л с подносом для отелей', ro: 'Seturi tăvi cu cană fiert apă 0.8L hotel', de: 'Hotel-Wasserkocher-Sets 0.8L mit Tablett', fr: 'Plateaux de bienvenue avec bouilloire 0.8L', ar: 'أطقم غلاية وشاي ترحيبية لغرف الفنادق 0.8 لتر' } },
      { icon: '📋', img: './assets/images/products/cat_15/prod_3.jpg', name: { en: 'Leatherette Hotel Room Desk Organizers', ru: 'Кожаные органайзеры для рабочего стола', ro: 'Organizatoare birou din piele ecologică hotel', de: 'Kunstleder Schreibtisch-Organizer für Zimmer', fr: 'Organiseurs de bureau en similicuir hôtel', ar: 'منظمات المكاتب الجلدية لغرف الفنادق' } },
      { icon: '💨', img: './assets/images/products/cat_15/prod_4.jpg', name: { en: 'Hotel Wall Mounted Hair Dryers 1600W', ru: 'Настенные фены для отелей 1600 Вт', ro: 'Uscătoare de păr perete hotel 1600W', de: 'Hotel-Wandhaartrockner 1600W', fr: 'Sèche-cheveux muraux d’hôtel 1600W', ar: 'مجففات شعر جدارية للفنادق 1600 واط' } },
      { icon: '🗑️', img: './assets/images/products/cat_15/prod_1.jpg', name: { en: 'Stainless Steel Trash Bins with Pedal', ru: 'Урновые мусорные ведра из нержавейки с педалью', ro: 'Coșuri gunoi inox cu pedală', de: 'Edelstahl-Abfalleimer mit Pedal', fr: 'Poubelles à pédale en inox', ar: 'سلال نفايات ستانلس ستيل بدواسة' } },
      { icon: '👔', img: './assets/images/products/cat_15/prod_2.png', name: { en: 'Hotel Room Ironing Board & Iron Holder Set', ru: 'Гладильные доски с держателем утюга для номеров', ro: 'Mese călcat cu suport fier călcat camere', de: 'Bügelbrett- & Bügeleisenhalter-Set für Zimmer', fr: 'Planches à repasser & supports fer hôtel', ar: 'طاولة كوي ملابس مع حامل مكواة جداري' } }
    ]
  },

  {
    id: 16,
    group: 'hotel',
    icon: '🍽️',
    img: './assets/images/products/cat_16/header.jpg',
    chip: {
      en: 'Restaurant Equip', ru: 'Ресторанное оборудование', ro: 'Echipament restaurant', de: 'Restaurantbedarf', fr: 'Équipement de restaurant', ar: 'معدات ومستلزمات المطاعم'
    },
    title: {
      en: 'Restaurant & Buffet Equipment', ru: 'Ресторанное и буфетное оборудование', ro: 'Echipamente pentru restaurant & bufet', de: 'Restaurant- & Buffet-Ausstattung', fr: 'Équipements de restaurant & buffet', ar: 'معدات ومستلزمات المطاعم والبوفيهات'
    },
    desc: {
      en: 'Stainless steel chafing dishes, GN food pans, hydraulic roll-top warmers, waiter service trays, and leather menu covers.',
      ru: 'Мармиты из нержавеющей стали (чафинг-диш), гастроемкости, подносы для официантов и папку меню.',
      ro: 'Chafing dish din inox, recipiente gastronorm GN, tăvi servire și mape meniu din piele.',
      de: 'Chafing Dishes aus Edelstahl, GN-Behälter, Roll-Top Speisenwärmer, Serviertabletts.',
      fr: 'Chafing dishes en inox, bacs gastronormes GN, chauffe-plats, plateaux de service.',
      ar: 'سخانات بوفيه ستانلس ستيل، أواني جاسترونورم، صواني تقديم الطعام، وأغلفة قوائم الطعام الجلدية.'
    },
    specs: [
      {
        k: { en: 'Steel Grade Quality', ru: 'Марка нержавеющей стали', ro: 'Calitate oțel inox', de: 'Edelstahl-Qualitätsstufe', fr: 'Nuance d’acier inox', ar: 'جودة الستانلس ستيل' },
        v: { en: 'AISI 304 (18/10) Food-grade stainless steel', ru: 'Пищевая нержавеющая сталь AISI 304 (18/10)', ro: 'Oțel inoxidabil alimentar AISI 304 (18/10)', de: 'AISI 304 (18/10) Lebensmittel-Edelstahl', fr: 'Acier inoxydable alimentaire AISI 304 (18/10)', ar: 'ستانلس ستيل غذائي مقاوم للصدأ AISI 304' }
      },
      {
        k: { en: 'Hydraulic Hinge', ru: 'Гидравлические петли', ro: 'Balamale hidraulice', de: 'Hydraulisches Scharnier', fr: 'Charnière hydraulique', ar: 'مفصلات هيدروليكية صامتة' },
        v: { en: 'Soft-closing roll-top lid mechanism', ru: 'Механизм плавного закрытия крышки roll-top', ro: 'Mecanism închidere lină capac roll-top', de: 'Sanft schließender Roll-Top Deckel', fr: 'Mécanisme de fermeture douce roll-top', ar: 'نظام غلق هيدروليكي هادئ لسقف السخانات' }
      },
      {
        k: { en: 'Gastronorm Standard', ru: 'Стандарты гастроемкостей', ro: 'Standard gastronorm GN', de: 'Gastronorm-Standard', fr: 'Norme gastronorme GN', ar: 'معايير أواني الجاسترونورم' },
        v: { en: 'GN 1/1, GN 1/2, GN 2/3 universal sizes', ru: 'Стандартные размеры GN 1/1, GN 1/2, GN 2/3', ro: 'Dimensiuni universale GN 1/1, GN 1/2, GN 2/3', de: 'Universelle Größen GN 1/1, GN 1/2, GN 2/3', fr: 'Tailles universelles GN 1/1, GN 1/2, GN 2/3', ar: 'مقاسات عالمية GN 1/1 و GN 1/2 و GN 2/3' }
      },
      {
        k: { en: 'Heating Compatibility', ru: 'Совместимость с нагревом', ro: 'Compatibilitate încălzire', de: 'Heizkompatibilität', fr: 'Compatibilité chauffage', ar: 'التوافق مع مصادر الحرارة' },
        v: { en: 'Induction, electric heating element, or fuel gel', ru: 'Индукция, электронагрев или гелевое топливо', ro: 'Inducție, element electric sau gel combustibil', de: 'Induktion, Elektroheizung oder Brenngel', fr: 'Induction, élément électrique ou gel combustible', ar: 'سخانات كهربائية، حث حراري، أو شمع جيل' }
      },
      {
        k: { en: 'Surface Polishing', ru: 'Полировка поверхности', ro: 'Polisare suprafață', de: 'Oberflächenpolitur', fr: 'Polissage de surface', ar: 'صقل وتلميع الأسطح' },
        v: { en: 'Mirror chrome polish or matte satin finish', ru: 'Зеркальная полировка или матовый сатин', ro: 'Polisare oglindă sau finisaj satinat mat', de: 'Spiegel-Chrom-Politur oder mattes Satin', fr: 'Polissage miroir ou finition satinée mate', ar: 'تلميع مرآة براق أو لمسة ستان مات' }
      }
    ],
    products: [
      { icon: '🍲', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Roll-Top Hydraulic Stainless Chafing Dishes GN 1/1', ru: 'Мармиты чафинг-диш с гидравлической крышкой GN 1/1', ro: 'Chafing dish roll-top hidraulic din inox GN 1/1', de: 'Roll-Top Hydraulik Edelstahl Chafing Dishes GN 1/1', fr: 'Chafing dishes roll-top hydrauliques inox GN 1/1', ar: 'سخانات طعام بوفيه هيدروليكية ستانلس ستيل' } },
      { icon: '🥣', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Round Electric Soup Urns & Warmers 10L', ru: 'Электрические супницы и мармиты для бульона 10л', ro: 'Oale electrice pentru supe 10L', de: 'Runde elektrische Suppenwärmer 10L', fr: 'Marmites à soupe électriques rondes 10L', ar: 'سخانات الشوربة الكهربائية الدائرية 10 لتر' } },
      { icon: '🥘', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Stainless Steel Gastronorm Pans GN 1/1, 1/2, 1/3', ru: 'Гастроемкости из нержавеющей стали GN 1/1, 1/2, 1/3', ro: 'Recipiente gastronorm din inox GN 1/1, 1/2, 1/3', de: 'Edelstahl Gastronorm-Behälter GN 1/1, 1/2, 1/3', fr: 'Bacs gastronormes en inox GN 1/1, 1/2, 1/3', ar: 'أواني جاسترونورم ستانلس ستيل مقاسات متدرجة' } },
      { icon: '💨', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Perforated Stainless Steel Steam Pans', ru: 'Перфорированные гастроемкости для пара', ro: 'Recipiente perforate din inox pentru abur', de: 'Perforierte Edelstahl-Dämpfbehälter', fr: 'Bacs perforés en inox pour vapeur', ar: 'أواني جاسترونورم مخرمة للبخار' } },
      { icon: '✨', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Hydraulic Glass Lid Buffet Chafers', ru: 'Мармиты со стеклянным окном на крышке', ro: 'Chafing dish cu capac din sticlă hidraulic', de: 'Hydraulik-Buffet-Chafer mit Glasdeckel', fr: 'Chafing dishes buffet avec couvercle verre', ar: 'سخانات بوفيه مع غطاء زجاجي هيدروليكي' } },
      { icon: '🍹', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Juice & Milk Dispensers with Ice Core 8L', ru: 'Диспенсеры для соков и молока с охладителем 8л', ro: 'Dispensere sucuri și lapte cu tub gheață 8L', de: 'Saft- & Milchspender mit Eisrohr 8L', fr: 'Distributeurs de jus & lait avec tube glaçon 8L', ar: 'موزعات عصائر وحليب مع انبوب تبريد الثلج 8 لتر' } },
      { icon: '💁‍♂️', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Non-Slip Rubberized Waiter Service Trays', ru: 'Нескользящие подносы официанта прорезиненные', ro: 'Tăvi servire chelner antiderapante', de: 'Rutschfeste gummierte Kellner-Serviertabletts', fr: 'Plateaux de service antidérapants caoutchoutés', ar: 'صواني تقديم الطعام للمطاعم مانعة للانزلاق' } },
      { icon: '📖', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Faux Leather Restaurant Menu Covers & Presenters', ru: 'Папки для меню и счета из экокожи', ro: 'Mape meniu și note de plată din piele ecologică', de: 'Kunstleder Menükarten & Rechnungsmappen', fr: 'Protège-menus & porte-addition en similicuir', ar: 'أغلفة قوائم الطعام والدفاتر الجلدية' } },
      { icon: '🍴', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Stainless Steel Cutlery & Utensil Holders', ru: 'Подставки для столовых приборов из нержавейки', ro: 'Suporturi tacâmuri din inox', de: 'Edelstahl-Besteckhalter & Behälter', fr: 'Porte-couverts & ustensiles en inox', ar: 'حوامل وحافظات أطقم أدوات المائدة' } },
      { icon: '🔢', img: './assets/images/products/cat_16/prod_1.jpg', name: { en: 'Table Number Stands & Reservation Holders', ru: 'Подставки для номеров столов и бронирования', ro: 'Suporturi numere masă și rezervări', de: 'Ttischnummer-Aufsteller & Reservierungsschilder', fr: 'Porte-numéros de table & réservations', ar: 'حوامل أرقام الطاولات وحجوزات المطعم' } }
    ]
  },

  {
    id: 17,
    group: 'hotel',
    icon: '🏊',
    img: './assets/images/products/cat_17/header.jpg',
    chip: {
      en: 'SPA & Pool', ru: 'Оборудование SPA', ro: 'Echipament SPA & Piscină', de: 'SPA & Pool Ausstattung', fr: 'Équipement SPA & Piscine', ar: 'مستلزمات السبا وحمامات السباحة'
    },
    title: {
      en: 'Wet Area & SPA Equipment', ru: 'Оборудование для SPA и влажных зон', ro: 'Echipamente pentru SPA & zone umede', de: 'Ausstattung für SPA & Nassbereiche', fr: 'Équipements pour SPA & zones humides', ar: 'مستلزمات ومعدات مناطق السبا والمسبح'
    },
    desc: {
      en: 'Heavy GSM pool towels, waterproof EVA spa slippers, sauna headrests, and poolside lounge cushion covers.',
      ru: 'Полотенца высокой плотности для бассейнов, непромокаемые тапочки для SPA, подголовники для сауны.',
      ro: 'Prosoape dense pentru piscină, papuci impermeabili SPA, tetiere saună.',
      de: 'Schwere Pooltücher, wasserdichte SPA-Slipper, Sauna-Kopfstützen.',
      fr: 'Draps de bain denses pour piscine, chaussons de spa imperméables, repose-têtes de sauna.',
      ar: 'مناشف سباحة سميكة للفنادق، شباشب سبا مقاومة للمياه، ومستلزمات غرف الساونا.'
    },
    specs: [
      {
        k: { en: 'Towel GSM Weight', ru: 'Плотность полотенец', ro: 'Greutate prosop GSM', de: 'Tuchgewicht GSM', fr: 'Grammage serviette GSM', ar: 'وزن كاثافة المناشف' },
        v: { en: '550 - 650 gsm 100% ring-spun cotton', ru: '550 - 650 г/м² 100% ринг-хлопок', ro: '550 - 650 gsm bumbac ring-spun 100%', de: '550 - 650 g/m² 100% Ringgarn-Baumwolle', fr: '550 - 650 g/m² 100% coton peigné', ar: '550 إلى 650 جرام قطن حلقي ممتاز' }
      },
      {
        k: { en: 'Chlorine Fastness', ru: 'Устойчивость к хлору', ro: 'Rezistență la clor', de: 'Chlorbeständigkeit', fr: 'Résistance au chlore', ar: 'مقاومة مواد التعقيم والكلور' },
        v: { en: 'Indanthrene vat-dyed yarn color protection', ru: 'Окрашивание индантреновыми красителями', ro: 'Vopsire Indanthren rezistentă la clor', de: 'Indanthren-Garnfärbung für Chlorfestigkeit', fr: 'Teinture grand teint Indanthrene résistant au chlore', ar: 'صباغة Indanthrene ثابته تمنع التغير بالكلور' }
      },
      {
        k: { en: 'Waterproof Slippers', ru: 'Непромокаемые тапочки', ro: 'Papuci impermeabili', de: 'Wasserdichte Slipper', fr: 'Chaussons imperméables', ar: 'شباشب مقاومة للماء' },
        v: { en: 'Single-mold anti-skid EVA wet area slippers', ru: 'Цельнолитая нескользящая EVA для влажных зон', ro: 'EVA turnată dintr-o bucată antiderapantă', de: 'Einteilige rutschfeste EVA-Nassbereich-Slipper', fr: 'Moulage unique EVA antidérapant pour zones humides', ar: 'شباشب إيفا قطعة واحدة مانعة للانزلاق بالمسبح' }
      },
      {
        k: { en: 'Sauna Wood Material', ru: 'Древесина для сауны', ro: 'Lemn saună', de: 'Saunaholz-Material', fr: 'Bois de sauna', ar: 'نوع خشب الساونا' },
        v: { en: 'Thermally treated knot-free Abachi wood', ru: 'Термообработанный абаш без сучков', ro: 'Lemn de Abachi tratat termic fără noduri', de: 'Thermobehandeltes astfreies Abachi-Holz', fr: 'Bois d’Abachi traité thermiquement sans nœud', ar: 'خشب أباتشي معالج حرارياً خالي من العقد' }
      },
      {
        k: { en: 'Cushion Fabric Water Repellency', ru: 'Водоотталкивание подушек', ro: 'Hydrofobicitate perne', de: 'Kissen-Wasserabweisung', fr: 'Hydrofugation coussins', ar: 'عزل المياه لمفارش الشاطئ' },
        v: { en: 'Teflon coated UV-resistant outdoor fabric', ru: 'Ткань с тефлоновым покрытием и защитой от УФ', ro: 'Material outdoor tratat Teflon rezistent UV', de: 'Teflon-beschichteter UV-beständiger Outdoor-Stoff', fr: 'Tissu d’extérieur traité Téflon anti-UV', ar: 'قماش مغلف بالتفلون مقاوم للأشعة فوق البنفسجية' }
      }
    ],
    products: [
      { icon: '🏊', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Heavy Commercial Pool Towels 550-650 GSM', ru: 'Пляжные полотенца повышенной плотности 550-650 г/м²', ro: 'Prosoape mari piscină 550-650 gsm', de: 'Schwere Pooltücher (550-650 g/m²)', fr: 'Draps de piscine denses (550-650 g/m²)', ar: 'مناشف سباحة بحجم كبير وثقيل 550-650 جرام' } },
      { icon: '🏖️', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Striped Cabana Resort Pool Towels 600 GSM', ru: 'Полотенца для бассейнов в полоску Cabana 600 г/м²', ro: 'Prosoape piscină cu dungi Cabana 600 gsm', de: 'Gestreifte Cabana-Pooltücher 600 g/m²', fr: 'Draps de piscine rayés Cabana 600 g/m²', ar: 'مناشف سباحة مقلمة كابانا للمنتجعات' } },
      { icon: '🩴', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Waterproof Anti-Slip Single-Mold EVA SPA Slippers', ru: 'Непромокаемые тапочки EVA для SPA и влажных зон', ro: 'Papuci impermeabili antiderapanți EVA SPA', de: 'Wasserdichte rutschfeste EVA SPA-Slipper', fr: 'Chaussons imperméables antidérapants EVA SPA', ar: 'شباشب إيفا مقاومة للماء والإنزلاق بالسبا' } },
      { icon: '🩴', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Single-Mold Rubberized Poolside Sandals', ru: 'Резиновые сандалии для бассейнов цельнолитые', ro: 'Sandale cauciucate turnate pentru piscină', de: 'Gummierte Pool-Sandalen einteilig', fr: 'Sandales de piscine moulées en caoutchouc', ar: 'صنادل مسبح مطاطية صلبة مقاومة للانزلاق' } },
      { icon: '🪵', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Ergonomic Abachi Wood Sauna Headrests', ru: 'Эргономичные подголовники из абаша для сауны', ro: 'Tetiere ergonomice saună din lemn Abachi', de: 'Ergonomische Abachi Sauna-Kopfstützen', fr: 'Repose-têtes de sauna ergonomiques en Abachi', ar: 'مساند رأس خشب أباتشي مريحة للساونا' } },
      { icon: '🪣', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Wooden Sauna Buckets & Ladles Set', ru: 'Деревянные ушаты и черпаки для сауны', ro: 'Set găleți și linguri din lemn saună', de: 'Holz-Saunaeimer & Kellen-Set', fr: 'Kits seaux & louches en bois pour sauna', ar: 'أطقم دلاء ومغارف خشبية لغرف الساونا' } },
      { icon: '🛋️', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Outdoor Poolside Sunbed Cushion Covers (Teflon)', ru: 'Водоотталкивающие чехлы для шезлонгов с тефлоном', ro: 'Huse perne șezlong impermeabile cu teflon', de: 'Wasserabweisende Sonnenliegen-Kissenbezüge', fr: 'Housses de matelas bain de soleil Téflon', ar: 'أغطية ومفارش أسرة الشاطئ مع طلاء التفلون' } },
      { icon: '👘', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Luxury Velour SPA Kimono Robes', ru: 'Элитные велюровые халаты-кимоно для SPA', ro: 'Halate baie kimono din pluș pentru SPA', de: 'Luxus-Velours-SPA-Kimonomäntel', fr: 'Peignoirs kimono en velours de luxe SPA', ar: 'أرواب سبا فاخرة بقصة الكيمونو' } },
      { icon: '🧖', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'Terry Waffle SPA Wraps & Hair Turbans', ru: 'Вафельные накидки и тюрбаны для волос SPA', ro: 'Prosoape baie tip wrap și turbane păr SPA', de: 'Waffel-SPA-Wraps & Haarturbane', fr: 'Peignoirs wraps & turbans cheveux SPA', ar: 'مناشف ولفافات شعر وتوربان للسبا' } },
      { icon: '🛏️', img: './assets/images/products/cat_17/prod_1.jpg', name: { en: 'SPA Massage Table Sheets & Headrest Covers', ru: 'Простыни и чехлы для массажных столов SPA', ro: 'Cearșafuri și huse tetiere mese masaj SPA', de: 'SPA-Massageliegen-Tücher & Bezugshüllen', fr: 'Draps & housses tetières tables de massage SPA', ar: 'ملاءات وأغطية أسرة المساج في السبا' } }
    ]
  },

  {
    id: 18,
    group: 'hotel',
    icon: '🛏️',
    img: './assets/images/products/cat_18/header.jpg',
    chip: {
      en: 'Hotel Textile', ru: 'Гостиничный текстиль', ro: 'Textile hotel', de: 'Hoteltextilien', fr: 'Textiles d’hôtel', ar: 'منسوجات وتجهيزات الفنادق'
    },
    title: {
      en: 'Hotel Textile Products & Linens', ru: 'Гостиничный текстиль и постельное белье', ro: 'Textile hotel & Lenjerii de pat', de: 'Hoteltextilien & Bettwäsche', fr: 'Textiles d’hôtel & Linge de lit', ar: 'مجموعات المنسوجات وأغطية الأسرّة للفنادق'
    },
    desc: {
      en: '100% Egyptian cotton satin bed sheets, bathrobes, heavy bath towels (500-700 gsm), and stain-resistant tablecloths.',
      ru: 'Постельное белье из сатина (100% египетский хлопок), халаты, банные полотенца 500-700 г/м² и скатерти.',
      ro: 'Lenjerii pat din satin bumbac egiptean 100%, halate baie, prosoape baie (500-700 gsm) și fețe masă.',
      de: 'Bettwäsche aus 100% ägyptischer Baumwolle (Satin), Bademäntel, schwere Handtücher (500-700 g/m²).',
      fr: 'Linge de lit en satin 100% coton égyptien, peignoirs de bain, serviettes éponge (500-700 g/m²).',
      ar: 'ملاءات أسرّة من قطن الساتان المصري 100%، أرواب حمام، مناشف سميكة، ومفارش طاولات مضادة للبقع.'
    },
    specs: [
      {
        k: { en: 'Thread Count TC', ru: 'Плотность нитей TC', ro: 'Număr fire TC', de: 'Fadendichte TC', fr: 'Nombre de fils TC', ar: 'كثافة الخيوط TC' },
        v: { en: '200 TC to 600 TC Satin stripe & plain weave', ru: '200 TC - 600 TC сатин полоса и гладь', ro: '200 TC - 600 TC satin cu dungi și simplu', de: '200 TC bis 600 TC Streifensatin & Glatt', fr: 'Satin rayé & uni 200 TC à 600 TC', ar: 'نسيج ساتان مقلم وسادة 200 إلى 600 خيط' }
      },
      {
        k: { en: 'Cotton Fiber Origin', ru: 'Происхождение хлопка', ro: 'Origine fibră bumbac', de: 'Baumwollfaser-Herkunft', fr: 'Origine du coton', ar: 'مصدر خيوط القطن' },
        v: { en: '100% Long-staple Egyptian & Aegean Cotton', ru: '100% длинноволокнистый египетский и эгейский хлопок', ro: 'Bumbac 100% egiptean și egeean cu fibră lungă', de: '100% Langstapelige ägyptische & ägäische Baumwolle', fr: '100% Coton égyptien & égéen à fibres longues', ar: 'قطن مصري وإيجي طويل التيلة 100%' }
      },
      {
        k: { en: 'Bath Towel Weight', ru: 'Плотность полотенец', ro: 'Greutate prosop baie', de: 'Handtuchgewicht', fr: 'Grammage serviette de bain', ar: 'وزن مناشف الحمام' },
        v: { en: '500 GSM to 700 GSM double-stitched bath towels', ru: '500 - 700 г/м² банные полотенца двойного шва', ro: 'Prosoape baie cu cusătură dublă 500-700 GSM', de: '500 GSM bis 700 GSM Handtücher mit Doppelnaht', fr: 'Serviettes de bain double couture 500 à 700 GSM', ar: 'مناشف حمام بخياطة مزدوجة 500 إلى 700 جرام' }
      },
      {
        k: { en: 'Industrial Wash Stability', ru: 'Устойчивость к стирке', ro: 'Stabilitate spălare industrială', de: 'Industrie-Waschfestigkeit', fr: 'Stabilité au lavage industriel', ar: 'تحمل الغسيل الكيميائي' },
        v: { en: 'Tested for 200+ commercial laundry cycles', ru: 'Выдерживает 200+ циклов профессиональной стирки', ro: 'Testat pentru 200+ cicluri de spălare industrială', de: 'Getestet für 200+ gewerbliche Waschzyklen', fr: 'Testé pour 200+ cycles de lavage industriel', ar: 'متحمل لأكثر من 200 غسلة آلية كيميائية' }
      },
      {
        k: { en: 'Tablecloth Stain Resistance', ru: 'Защита от пятен скатертей', ro: 'Rezistență pete fețe masă', de: 'Tischdecken-Fleckschutz', fr: 'Anti-taches nappes', ar: 'مقاومة البقع لمفارش الطاولات' },
        v: { en: 'Teflon coated liquid & oil repellent polyester/cotton', ru: 'Тефлоновое отталкивающее покрытие для жидких пятен', ro: 'Tratament teflonat anti-lichid și ulei poli/bumbac', de: 'Teflon-beschichtet flüssigkeits- & ölabweisend', fr: 'Traitement Téflon anti-taches liquides & huiles', ar: 'طلاء تفلون عازل للبقع والزيوت السائلة' }
      }
    ],
    products: [
      { icon: '🛏️', img: './assets/images/products/cat_18/prod_1.jpg', name: { en: 'Hotel Satin Stripe Bed Sheet Sets (300 TC)', ru: 'Комплекты белья из страйп-сатина 300 TC', ro: 'Seturi lenjerie pat satin cu dungi 300 TC', de: 'Hotel-Streifensatin-Bettwäsche 300 TC', fr: 'Parures de lit en satin rayé 300 TC', ar: 'أطقم ملاءات أسرّة ساتان مقلم 300 خيط' } },
      { icon: '🛏️', img: './assets/images/products/cat_18/prod_2.jpg', name: { en: 'Percale Plain White Hotel Bed Sheets (200 TC)', ru: 'Постельное белье из перкаля гладкое 200 TC', ro: 'Lenjerii pat din bumbac percale alb 200 TC', de: 'Glattweiße Perkal-Bettwäsche 200 TC', fr: 'Linge de lit en percale blanche 200 TC', ar: 'ملاءات أسرّة سادة بيضاء 200 خيط' } },
      { icon: '💤', img: './assets/images/products/cat_18/prod_1.jpg', name: { en: 'Hotel Pillowcases (Satin Stripe / Plain)', ru: 'Наволочки для гостиниц (страйп-сатин и гладкие)', ro: 'Fețe de pernă hotel (satin cu dungi și simplu)', de: 'Hotel-Kissenbezüge (Streifensatin & Glatt)', fr: 'Taies d’oreiller hôtel (satin rayé & uni)', ar: 'أغطية وسائد للفنادق (ساتان مقلم وسادة)' } },
      { icon: '🛀', img: './assets/images/products/cat_18/prod_2.jpg', name: { en: 'Heavy Commercial Bath Towels 600 GSM', ru: 'Плотные банные полотенца 600 г/м²', ro: 'Prosoape baie dense 600 GSM', de: 'Schwere Gewerbe-Handtücher 600 GSM', fr: 'Draps de bain denses 600 GSM', ar: 'مناشف حمام ثقيلة وممتازة 600 جرام' } },
      { icon: '🧼', img: './assets/images/products/cat_18/prod_1.jpg', name: { en: 'Hotel Hand Towels & Face Washcloths', ru: 'Полотенца для рук и салфетки для лица', ro: 'Prosoape mâini și fețe de masă hotel', de: 'Hotel Handtücher & Gesichtstücher', fr: 'Serviettes mains & débarbouillettes hôtel', ar: 'مناشف أيدي ومناشف وجة صغيرة للفنادق' } },
      { icon: '🦶', img: './assets/images/products/cat_18/prod_2.jpg', name: { en: 'Hotel Bath Mats 800 GSM Heavy Terry', ru: 'Коврики для ног в ванную 800 г/м²', ro: 'Covorașe baie din bumbac 800 GSM', de: 'Hotel Duschvorleger 800 GSM', fr: 'Tapis de bain denses 800 GSM', ar: 'دواسات ومفارش حمام ثقيلة 800 جرام' } },
      { icon: '🥋', img: './assets/images/products/cat_18/prod_1.jpg', name: { en: 'Plush Velour Bathrobes with Shawl Collar', ru: 'Махровые и велюровые халаты с шалевым воротником', ro: 'Halate baie pluș cu guler șal', de: 'Velours-Bademäntel mit Schalkragen', fr: 'Peignoirs de bain velours col chal', ar: 'أرواب حمام مخملية بياقة شال' } },
      { icon: '🥋', img: './assets/images/products/cat_18/prod_2.jpg', name: { en: 'Waffle Weave Lightweight Hotel Bathrobes', ru: 'Вафельные легкие халаты для отелей', ro: 'Halate baie ușoare din bumbac waffle', de: 'Leichte Waffel-Bademäntel für Hotels', fr: 'Peignoirs de bain légers gaufres', ar: 'أرواب حمام قطن مجعد خفيفة للفنادق' } },
      { icon: '🍽️', img: './assets/images/products/cat_18/prod_1.jpg', name: { en: 'Stain-Resistant Teflon Restaurant Tablecloths', ru: 'Скатерти для ресторанов с тефлоновой защитой от пятен', ro: 'Fețe de masă restaurant rezistente la pete cu teflon', de: 'Fleckenabweisende Teflon-Tischdecken', fr: 'Nappes de restaurant Téflon anti-taches', ar: 'مفارش طاولات مطاعم مع طلاء التفلون العازل' } },
      { icon: '🛏️', img: './assets/images/products/cat_18/prod_2.jpg', name: { en: 'Hotel Goose Down & Microfiber Pillows & Duvets', ru: 'Подушки и одеяла с гусиным пухом и микрофиброй', ro: 'Perne și pilote hotel din puf de gâscă și microfibră', de: 'Gänsedaunen- & Mikrofaser-Kissen & Betten', fr: 'Oreillers & couettes duvet d’oie & microfibre', ar: 'وسائد ولحف ريش النعام والميكروفيبر للفنادق' } }
    ]
  },

  {
    id: 19,
    group: 'perfume',
    icon: '🧴',
    img: './assets/images/products/cat_19/prod_1.svg',
    chip: {
      en: 'Perfume Glass', ru: 'Парфюмерные флаконы', ro: 'Sticle parfum', de: 'Parfüm-Flakons', fr: 'Flacons de parfum', ar: 'زجاجات العطور والرشاشات'
    },
    title: {
      en: 'Perfume Bottles & Accessories', ru: 'Парфюмерные флаконы и аксессуары', ro: 'Sticle de parfum & Accesorii', de: 'Parfüm-Flakons & Zubehör', fr: 'Flacons de parfum & Accessoires', ar: 'زجاجات العطور وإكسسواراتها'
    },
    desc: {
      en: 'Premium glass perfume bottles, fine mist spray pumps, zamac caps, car diffusers, dropper bottles, and cosmetic cream jars.',
      ru: 'Элитные стеклянные флаконы для духов, распылители, колпачки из замака, автодиффузоры, капельницы и баночки для крема.',
      ro: 'Sticle de parfum din sticlă premium, pompe spray, capace zamac, difuzoare auto, picurătoare și borcane cremă.',
      de: 'Hochwertige Glasparfümflakons, Sprühpumpen, Zamak-Kappen, Autodiffusoren, Pipettenflaschen und Kosmetikbecher.',
      fr: 'Flacons de parfum en verre haut de gamme, pompes spray, bouchons zamac, diffuseurs auto, flacons compte-gouttes.',
      ar: 'زجاجات عطور زجاجية فاخرة، مضخات رذاذ، أغطية زاماك، معطرات سيارات، عبوات قطارات ومرطب كرايم.'
    },
    specs: [
      {
        k: { en: 'Glass Clarity Grade', ru: 'Качество стекла', ro: 'Calitate sticlă', de: 'Glasreinheit', fr: 'Qualité du verre', ar: 'نقاء درجة الزجاج' },
        v: { en: 'Super Flint crystal clear heavy base glass', ru: 'Супер-флинт хрустальное стекло с тяжелым дном', ro: 'Sticlă Super Flint de înaltă claritate', de: 'Super Flint Glas mit schwerem Boden', fr: 'Verre Super Flint cristal à fond lourd', ar: 'زجاج كريستالي ممتاز ببيئة كراون ثقيلة' }
      },
      {
        k: { en: 'Bottle Volume Capacity', ru: 'Объемы флаконов', ro: 'Volume sticle', de: 'Flaschenvolumen', fr: 'Contenance flacons', ar: 'أحجام عبوات العطور' },
        v: { en: '10ml, 30ml, 50ml, 100ml standard sizes', ru: '10мл, 30мл, 50мл, 100мл стандартные размеры', ro: '10ml, 30ml, 50ml, 100ml dimensiuni standard', de: '10ml, 30ml, 50ml, 100ml Standardgrößen', fr: '10ml, 30ml, 50ml, 100ml formats standard', ar: 'أحجام قياسية 10 مل، 30 مل، 50 مل، 100 مل' }
      },
      {
        k: { en: 'Pump Crimp & Neck', ru: 'Горловина и помпа', ro: 'Gât sticlă și pompă', de: 'Pumpen- & Halsgröße', fr: 'Col & pompe spray', ar: 'مقاس عنق الزجاجة والمضخة' },
        v: { en: 'FEA 15 crimp neck or FEA 15 screw pump', ru: 'FEA 15 обжимная горловина или резьба', ro: 'Gât FEA 15 de sertizat sau filet', de: 'FEA 15 Crimp- oder Schraubhals', fr: 'Col FEA 15 à sertir ou visser', ar: 'مقاس FEA 15 كبس أو قلاووظ' }
      },
      {
        k: { en: 'Cap Material Options', ru: 'Материалы колпачков', ro: 'Materiale capace', de: 'Kappen-Materialien', fr: 'Matériaux bouchons', ar: 'خامات أغطية العطور' },
        v: { en: 'Zamac heavy alloy, Magnetic click, Surlyn, Wood', ru: 'Тяжелый замак, Магнитный замок, Сурлин, Дерево', ro: 'Aliaj Zamac greu, Clac magnetic, Surlyn, Lemn', de: 'Zamak-Legierung, Magnetkappe, Surlyn, Holz', fr: 'Alliage Zamac lourd, Bouchon aimanté, Surlyn, Bois', ar: 'سبائك الزاماك الثقيلة، غطاء مغناطيسي، سورلين، أو خشب' }
      },
      {
        k: { en: 'Spray Atomization', ru: 'Распыление спрея', ro: 'Atomizare spray', de: 'Sprühzerstäubung', fr: 'Atomisation spray', ar: 'جودة وانتشار الرذاذ' },
        v: { en: 'Micro-fine mist dosage 0.08ml per pump', ru: 'Микро-распыление дозировка 0.08мл на нажатие', ro: 'Micro-spray dozaj 0.08ml per pompaj', de: 'Mikrofeiner Sprühnebel 0,08ml Dosierung', fr: 'Micro-brumisation dosage 0,08ml par pression', ar: 'رذاذ دقيق فاخر بنسبة 0.08 مل بكل ضغطة' }
      }
    ],
    products: [
      { icon: '🧴', img: './assets/images/products/cat_19/prod_1.svg', name: { en: 'Super Flint Square Glass Perfume Bottles 50ml', ru: 'Квадратные стеклянные флаконы 50мл', ro: 'Sticle pătrate de parfum din sticlă 50ml', de: 'Quadratische Super-Flint Glasflakons 50ml', fr: 'Flacons carrés en verre Super Flint 50ml', ar: 'زجاجات عطور زجاجية مربعة 50 مل' } },
      { icon: '🧴', img: './assets/images/products/cat_19/prod_2.svg', name: { en: 'Heavy Base Round Glass Perfume Bottles 100ml', ru: 'Круглые флаконы с тяжелым дном 100мл', ro: 'Sticle rotunde de parfum cu bază grea 100ml', de: 'Runde Glasflakons mit schwerem Boden 100ml', fr: 'Flacons ronds en verre à fond lourd 100ml', ar: 'زجاجات عطور زجاجية ببيئة ثقيلة 100 مل' } },
      { icon: '👑', img: './assets/images/products/cat_19/prod_3.svg', name: { en: 'Zamac Heavy Metal Alloy Custom Caps', ru: 'Колпачки из тяжелого металлического сплава замак', ro: 'Capace din aliaj metalic greu Zamac', de: 'Schwere Zamak-Metalllegierung Kappen', fr: 'Bouchons en alliage de métal lourd Zamac', ar: 'أغطية زاماك المعدنية الثقيلة المصممة' } },
      { icon: '🧲', img: './assets/images/products/cat_19/prod_4.svg', name: { en: 'Magnetic Click Lock Perfume Caps', ru: 'Магнитные колпачки с фиксатором', ro: 'Capace parfum cu închidere magnetică', de: 'Magnetische Kappen mit Klickverschluss', fr: 'Bouchons de parfum à fermeture aimantée', ar: 'أغطية عطور مغناطيسية كليك' } },
      { icon: '💨', img: './assets/images/products/cat_19/prod_5.svg', name: { en: 'Fine Mist Spray Pumps FEA 15 (Gold/Silver)', ru: 'Распылители микро-спрей FEA 15 (золото/серебро)', ro: 'Pompe spray micro-fine FEA 15 (aur/argint)', de: 'Mikrofeine Sprühpumpen FEA 15 (Gold/Silber)', fr: 'Pompes spray micro-brumisation FEA 15 (or/argent)', ar: 'مضخات رذاذ دقيق FEA 15 (ذهبي وفضي)' } },
      { icon: '🚗', img: './assets/images/products/cat_19/prod_6.svg', name: { en: 'Car Perfume Hanging Wooden Glass Diffusers 8ml', ru: 'Автомобильные диффузоры 8мл с деревянной крышкой', ro: 'Difuzoare parfum auto 8ml cu capac lemn', de: 'Auto-Parfümdiffusoren 8ml mit Holzdeckel', fr: 'Diffuseurs parfum voiture 8ml avec bouchon bois', ar: 'معطرات سيارات زجاجية 8 مل غطاء خشب' } },
      { icon: '💧', img: './assets/images/products/cat_19/prod_7.svg', name: { en: 'Glass Dropper Bottles for Serums 30ml', ru: 'Флаконы-капельницы с пипеткой для сывороток 30мл', ro: 'Sticle cu picurător pentru seruri 30ml', de: 'Pipettenflaschen für Seren 30ml', fr: 'Flacons compte-gouttes pour sérums 30ml', ar: 'عبوات قطارات زجاجية للسيروم 30 مل' } },
      { icon: '🫙', img: './assets/images/products/cat_19/prod_8.svg', name: { en: 'Cosmetic Cream Glass Jars 50g with Acrylic Lid', ru: 'Баночки для крема 50г с акриловой крышкой', ro: 'Borcane cremă cosmetică 50g cu capac acrilic', de: 'Kosmetikcreme-Tiegel 50g mit Acryldeckel', fr: 'Pots de crème cosmétique 50g couvercle acrilique', ar: 'عبوات مرطب زجاجية 50 جرام أغطية أكريليك' } },
      { icon: '✈️', img: './assets/images/products/cat_19/prod_9.svg', name: { en: 'Refillable Travel Pocket Perfume Atomizers 10ml', ru: 'Карманные атомайзеры для духо 10мл', ro: 'Atomizatoare parfum de buzunar 10ml', de: 'Taschen-Parfümzerstäuber 10ml', fr: 'Atomiseurs de parfum de poche 10ml', ar: 'بخاخات عطور جيب للسفر قابلة لإعادة التعبئة 10 مل' } },
      { icon: '🧴', img: './assets/images/products/cat_19/prod_1.svg', name: { en: 'Frosted Glass Body Oil Spray Bottles 100ml', ru: 'Матовые стеклянные флаконы для спреев 100мл', ro: 'Sticle matisate pentru ulei corp 100ml', de: 'Mattglas-Sprühflaschen für Körperöl 100ml', fr: 'Flacons en verre dépoli pour huile corps 100ml', ar: 'زجاجات زجاجية متجمدة للزيوت والمعطرات 100 مل' } }
    ]
  }
];
