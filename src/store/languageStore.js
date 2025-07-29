import { create } from "zustand";
import { persist } from "zustand/middleware";

// Language translations
const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    about: "About",
    cart: "Cart",
    checkout: "Checkout",

    // Home page
    brandName: "LUXE",
    elevateYour: "Elevate your",
    style: "style",
    homeDescription:
      "Discover premium fashion that defines elegance. Our curated collection brings you the finest clothing crafted with attention to detail and modern sophistication.",
    shopNow: "Shop Now",
    learnMore: "Learn More",
    fashionForward: "Fashion Forward",
    styleRedefined: "Style Redefined",
    features: "Features",
    whyChoose: "Why Choose LUXE?",
    premiumQuality: "Premium Quality",
    premiumQualityDesc:
      "Crafted from the finest materials with meticulous attention to detail.",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc:
      "Quick and reliable shipping to get your fashion favorites to you fast.",
    satisfactionGuarantee: "Satisfaction Guarantee",
    satisfactionGuaranteeDesc:
      "30-day return policy ensures you're completely satisfied with your purchase.",

    // Products page
    ourCollection: "Our Collection",
    productsDescription:
      "Discover premium fashion pieces curated for the modern wardrobe",
    all: "All",
    shirts: "Shirts",
    jackets: "Jackets",
    dresses: "Dresses",
    pants: "Pants",
    sweaters: "Sweaters",
    addToCart: "Add to Cart",
    noProductsFound: "No products found in this category.",

    // Product names and descriptions
    premiumCottonTShirt: "Premium Cotton T-Shirt",
    premiumTShirtDesc: "Soft, breathable cotton with modern fit",
    designerDenimJacket: "Designer Denim Jacket",
    denimJacketDesc: "Classic denim with contemporary styling",
    elegantEveningDress: "Elegant Evening Dress",
    eveningDressDesc: "Sophisticated design for special occasions",
    casualChinoPants: "Casual Chino Pants",
    chinoPantsDesc: "Versatile pants for everyday comfort",
    luxuryWoolSweater: "Luxury Wool Sweater",
    woolSweaterDesc: "Premium merino wool for ultimate warmth",
    summerFloralDress: "Summer Floral Dress",
    floralDressDesc: "Light and airy for warm weather",

    // Cart page
    shoppingCart: "Shopping Cart",
    reviewItems: "Review your items before checkout",
    cartEmpty: "Your cart is empty",
    addItemsToStart: "Add some items to get started",
    continueShopping: "Continue Shopping",
    cartItems: "Cart Items",
    orderSummary: "Order Summary",
    subtotal: "Subtotal",
    items: "items",
    shipping: "Shipping",
    free: "Free",
    taxEstimated: "Tax (estimated)",
    total: "Total",
    proceedToCheckout: "Proceed to Checkout",
    addMoreForFreeShipping: "Add {amount} more for free shipping",

    // Checkout page
    checkoutTitle: "Checkout",
    completeOrderSecurely: "Complete your order securely",
    shippingInformation: "Shipping Information",
    paymentInformation: "Payment Information",
    email: "Email",
    firstName: "First Name",
    lastName: "Last Name",
    address: "Address",
    city: "City",
    state: "State",
    zipCode: "ZIP Code",
    nameOnCard: "Name on Card",
    cardNumber: "Card Number",
    expiryDate: "Expiry Date",
    cvv: "CVV",
    completeOrder: "Complete Order",
    orderComplete: "Order Complete!",
    orderCompleteDesc:
      "Thank you for your purchase. You'll receive a confirmation email shortly.",

    // Additional checkout fields
    completeYourOrder: "Complete Your Order",
    yourCart: "Your Cart",
    cartIsEmpty: "Your cart is empty",
    continueShopping: "Continue Shopping",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    stateProvince: "State/Province",
    streetAddress: "Street Address",
    placeOrder: "Place Order",
    quantity: "Quantity",
    size: "Size",
    color: "Color",
    total: "Total",
    nameIsRequired: "Name is required",
    emailIsRequired: "Email is required",
    invalidEmailAddress: "Invalid email address",
    phoneIsRequired: "Phone number is required",
    invalidPhoneNumber: "Invalid phone number (minimum 10 digits)",
    stateIsRequired: "State is required",
    cityIsRequired: "City is required",
    addressIsRequired: "Address is required",

    // About page
    aboutLuxe: "About LUXE",
    aboutDescription:
      "Founded in 2020, LUXE represents the pinnacle of modern fashion, combining timeless elegance with contemporary innovation.",
    ourStory: "Our Story",
    storyParagraph1:
      "LUXE was born from a passion for creating fashion that transcends trends. We believe that true style is timeless, and every piece in our collection reflects our commitment to quality, sustainability, and innovative design.",
    storyParagraph2:
      "Our journey began with a simple mission: to offer premium clothing that empowers individuals to express their unique style while making responsible choices for our planet.",
    premiumPieces: "Premium Pieces",
    happyCustomers: "Happy Customers",
    craftedWithPassion: "Crafted with Passion",
    everyDetailMatters: "Every detail matters",
    ourValues: "Our Values",
    valuesDescription: "The principles that guide everything we do",
    sustainability: "Sustainability",
    sustainabilityDesc:
      "Committed to ethical production and environmental responsibility in every aspect of our business.",
    quality: "Quality",
    qualityDesc:
      "Premium materials and meticulous craftsmanship ensure each piece exceeds expectations.",
    innovation: "Innovation",
    innovationDesc:
      "Constantly pushing boundaries to create fashion that's both timeless and cutting-edge.",
    meetOurTeam: "Meet Our Team",
    teamDescription: "The talented individuals behind LUXE",
    readyToExperience: "Ready to Experience LUXE?",
    discoverCollection: "Discover our collection and find your perfect style",

    // Team members
    sarahJohnson: "Sarah Johnson",
    founderCreativeDirector: "Founder & Creative Director",
    sarahBio:
      "With 15 years in fashion, Sarah brings visionary leadership to LUXE.",
    marcusChen: "Marcus Chen",
    headOfDesign: "Head of Design",
    marcusBio:
      "Award-winning designer focused on sustainable and innovative fashion.",
    elenaRodriguez: "Elena Rodriguez",
    qualityManager: "Quality Manager",
    elenaBio:
      "Ensures every piece meets our exceptional standards of craftsmanship.",
  },

  fr: {
    // Navigation
    home: "Accueil",
    products: "Produits",
    about: "À Propos",
    cart: "Panier",
    checkout: "Commande",

    // Home page
    brandName: "LUXE",
    elevateYour: "Élevez votre",
    style: "style",
    homeDescription:
      "Découvrez la mode haut de gamme qui définit l'élégance. Notre collection soigneusement sélectionnée vous offre les plus beaux vêtements confectionnés avec attention aux détails et sophistication moderne.",
    shopNow: "Acheter Maintenant",
    learnMore: "En Savoir Plus",
    fashionForward: "Mode Avant-Gardiste",
    styleRedefined: "Style Redéfini",
    features: "Caractéristiques",
    whyChoose: "Pourquoi Choisir LUXE?",
    premiumQuality: "Qualité Premium",
    premiumQualityDesc:
      "Fabriqué à partir des meilleurs matériaux avec une attention méticuleuse aux détails.",
    fastDelivery: "Livraison Rapide",
    fastDeliveryDesc:
      "Expédition rapide et fiable pour vous faire parvenir vos favoris de mode rapidement.",
    satisfactionGuarantee: "Garantie de Satisfaction",
    satisfactionGuaranteeDesc:
      "Politique de retour de 30 jours garantit votre entière satisfaction avec votre achat.",

    // Products page
    ourCollection: "Notre Collection",
    productsDescription:
      "Découvrez des pièces de mode haut de gamme sélectionnées pour la garde-robe moderne",
    all: "Tout",
    shirts: "Chemises",
    jackets: "Vestes",
    dresses: "Robes",
    pants: "Pantalons",
    sweaters: "Pulls",
    addToCart: "Ajouter au Panier",
    noProductsFound: "Aucun produit trouvé dans cette catégorie.",

    // Product names and descriptions
    premiumCottonTShirt: "T-Shirt Coton Premium",
    premiumTShirtDesc: "Coton doux et respirant avec coupe moderne",
    designerDenimJacket: "Veste en Denim Design",
    denimJacketDesc: "Denim classique avec style contemporain",
    elegantEveningDress: "Robe de Soirée Élégante",
    eveningDressDesc: "Design sophistiqué pour occasions spéciales",
    casualChinoPants: "Pantalon Chino Décontracté",
    chinoPantsDesc: "Pantalon polyvalent pour le confort quotidien",
    luxuryWoolSweater: "Pull en Laine de Luxe",
    woolSweaterDesc: "Laine mérinos premium pour une chaleur ultime",
    summerFloralDress: "Robe Florale d'Été",
    floralDressDesc: "Léger et aéré pour temps chaud",

    // Cart page
    shoppingCart: "Panier d'Achat",
    reviewItems: "Vérifiez vos articles avant la commande",
    cartEmpty: "Votre panier est vide",
    addItemsToStart: "Ajoutez des articles pour commencer",
    continueShopping: "Continuer les Achats",
    cartItems: "Articles du Panier",
    orderSummary: "Résumé de Commande",
    subtotal: "Sous-total",
    items: "articles",
    shipping: "Livraison",
    free: "Gratuit",
    taxEstimated: "Taxe (estimée)",
    total: "Total",
    proceedToCheckout: "Procéder à la Commande",
    addMoreForFreeShipping:
      "Ajoutez {amount} de plus pour la livraison gratuite",

    // Checkout page
    checkoutTitle: "Commande",
    completeOrderSecurely: "Complétez votre commande en toute sécurité",
    shippingInformation: "Informations de Livraison",
    paymentInformation: "Informations de Paiement",
    email: "Email",
    firstName: "Prénom",
    lastName: "Nom",
    address: "Adresse",
    city: "Ville",
    state: "État/Province",
    zipCode: "Code Postal",
    nameOnCard: "Nom sur la Carte",
    cardNumber: "Numéro de Carte",
    expiryDate: "Date d'Expiration",
    cvv: "Code CVV",
    completeOrder: "Finaliser la Commande",
    orderComplete: "Commande Terminée!",
    orderCompleteDesc:
      "Merci pour votre achat. Vous recevrez un email de confirmation sous peu.",

    // Additional checkout fields
    completeYourOrder: "Complétez Votre Commande",
    yourCart: "Votre Panier",
    cartIsEmpty: "Votre panier est vide",
    continueShopping: "Continuer les Achats",
    fullName: "Nom Complet",
    emailAddress: "Adresse Email",
    phoneNumber: "Numéro de Téléphone",
    stateProvince: "Province/État",
    streetAddress: "Adresse de Rue",
    placeOrder: "Passer Commande",
    quantity: "Quantité",
    size: "Taille",
    color: "Couleur",
    total: "Total",
    nameIsRequired: "Le nom est requis",
    emailIsRequired: "L'email est requis",
    invalidEmailAddress: "Adresse email invalide",
    phoneIsRequired: "Le numéro de téléphone est requis",
    invalidPhoneNumber: "Numéro de téléphone invalide (minimum 10 chiffres)",
    stateIsRequired: "La province/état est requis",
    cityIsRequired: "La ville est requise",
    addressIsRequired: "L'adresse est requise",

    // About page
    aboutLuxe: "À Propos de LUXE",
    aboutDescription:
      "Fondée en 2020, LUXE représente le summum de la mode moderne, combinant élégance intemporelle et innovation contemporaine.",
    ourStory: "Notre Histoire",
    storyParagraph1:
      "LUXE est née d'une passion pour créer une mode qui transcende les tendances. Nous croyons que le vrai style est intemporel, et chaque pièce de notre collection reflète notre engagement envers la qualité, la durabilité et le design innovant.",
    storyParagraph2:
      "Notre voyage a commencé avec une mission simple : offrir des vêtements haut de gamme qui permettent aux individus d'exprimer leur style unique tout en faisant des choix responsables pour notre planète.",
    premiumPieces: "Pièces Premium",
    happyCustomers: "Clients Satisfaits",
    craftedWithPassion: "Créé avec Passion",
    everyDetailMatters: "Chaque détail compte",
    ourValues: "Nos Valeurs",
    valuesDescription: "Les principes qui guident tout ce que nous faisons",
    sustainability: "Durabilité",
    sustainabilityDesc:
      "Engagé dans la production éthique et la responsabilité environnementale dans tous les aspects de notre entreprise.",
    quality: "Qualité",
    qualityDesc:
      "Des matériaux premium et un savoir-faire méticuleux garantissent que chaque pièce dépasse les attentes.",
    innovation: "Innovation",
    innovationDesc:
      "Repoussant constamment les limites pour créer une mode à la fois intemporelle et avant-gardiste.",
    meetOurTeam: "Rencontrez Notre Équipe",
    teamDescription: "Les individus talentueux derrière LUXE",
    readyToExperience: "Prêt à Découvrir LUXE?",
    discoverCollection:
      "Découvrez notre collection et trouvez votre style parfait",

    // Team members
    sarahJohnson: "Sarah Johnson",
    founderCreativeDirector: "Fondatrice et Directrice Créative",
    sarahBio:
      "Avec 15 ans dans la mode, Sarah apporte un leadership visionnaire à LUXE.",
    marcusChen: "Marcus Chen",
    headOfDesign: "Chef du Design",
    marcusBio: "Designer primé axé sur la mode durable et innovante.",
    elenaRodriguez: "Elena Rodriguez",
    qualityManager: "Responsable Qualité",
    elenaBio:
      "S'assure que chaque pièce répond à nos standards exceptionnels de savoir-faire.",
  },

  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "معلومات عنا",
    cart: "السلة",
    checkout: "الطلب",

    // Home page
    brandName: "لوكس",
    elevateYour: "ارتقِ بـ",
    style: "أناقتك",
    homeDescription:
      "اكتشف الأزياء الراقية التي تُعرِّف الأناقة. مجموعتنا المختارة بعناية تقدم لك أجود الملابس المصنوعة بعناية فائقة للتفاصيل والرقي العصري.",
    shopNow: "تسوق الآن",
    learnMore: "اعرف المزيد",
    fashionForward: "أزياء متقدمة",
    styleRedefined: "إعادة تعريف الأناقة",
    features: "المميزات",
    whyChoose: "لماذا تختار لوكس؟",
    premiumQuality: "جودة فائقة",
    premiumQualityDesc: "مصنوع من أجود المواد مع اهتمام دقيق بالتفاصيل.",
    fastDelivery: "توصيل سريع",
    fastDeliveryDesc: "شحن سريع وموثوق لإيصال أزيائك المفضلة إليك بسرعة.",
    satisfactionGuarantee: "ضمان الرضا",
    satisfactionGuaranteeDesc:
      "سياسة إرجاع لمدة 30 يوماً تضمن رضاك التام عن مشترياتك.",

    // Products page
    ourCollection: "مجموعتنا",
    productsDescription:
      "اكتشف قطع الأزياء الراقية المختارة لخزانة الملابس العصرية",
    all: "الكل",
    shirts: "قمصان",
    jackets: "جاكيتات",
    dresses: "فساتين",
    pants: "بناطيل",
    sweaters: "كنزات",
    addToCart: "أضف للسلة",
    noProductsFound: "لم يتم العثور على منتجات في هذه الفئة.",

    // Product names and descriptions
    premiumCottonTShirt: "تيشرت قطني فاخر",
    premiumTShirtDesc: "قطن ناعم وقابل للتنفس بقصة عصرية",
    designerDenimJacket: "جاكيت جينز مصمم",
    denimJacketDesc: "جينز كلاسيكي بتصميم معاصر",
    elegantEveningDress: "فستان سهرة أنيق",
    eveningDressDesc: "تصميم راقي للمناسبات الخاصة",
    casualChinoPants: "بنطلون تشينو كاجوال",
    chinoPantsDesc: "بنطلون متعدد الاستخدامات للراحة اليومية",
    luxuryWoolSweater: "كنزة صوف فاخرة",
    woolSweaterDesc: "صوف مرينو فاخر للدفء الأمثل",
    summerFloralDress: "فستان صيفي مزهر",
    floralDressDesc: "خفيف ومنعش للطقس الدافئ",

    // Cart page
    shoppingCart: "سلة التسوق",
    reviewItems: "راجع عناصرك قبل الطلب",
    cartEmpty: "سلتك فارغة",
    addItemsToStart: "أضف بعض العناصر للبدء",
    continueShopping: "واصل التسوق",
    cartItems: "عناصر السلة",
    orderSummary: "ملخص الطلب",
    subtotal: "المجموع الفرعي",
    items: "عناصر",
    shipping: "الشحن",
    free: "مجاني",
    taxEstimated: "الضريبة (تقديرية)",
    total: "المجموع",
    proceedToCheckout: "متابعة الطلب",
    addMoreForFreeShipping: "أضف {amount} أكثر للشحن المجاني",

    // Checkout page
    checkoutTitle: "الطلب",
    completeOrderSecurely: "أكمل طلبك بأمان",
    shippingInformation: "معلومات الشحن",
    paymentInformation: "معلومات الدفع",
    email: "البريد الإلكتروني",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    address: "العنوان",
    city: "المدينة",
    state: "الولاية/المحافظة",
    zipCode: "الرمز البريدي",
    nameOnCard: "الاسم على البطاقة",
    cardNumber: "رقم البطاقة",
    expiryDate: "تاريخ الانتهاء",
    cvv: "رمز CVV",
    completeOrder: "إتمام الطلب",
    orderComplete: "تم الطلب!",
    orderCompleteDesc: "شكراً لك على الشراء. ستتلقى رسالة تأكيد قريباً.",

    // About page
    aboutLuxe: "معلومات عن لوكس",
    aboutDescription:
      "تأسست في عام 2020، تمثل لوكس قمة الأزياء العصرية، تجمع بين الأناقة الخالدة والابتكار المعاصر.",
    ourStory: "قصتنا",
    storyParagraph1:
      "وُلدت لوكس من شغف لخلق أزياء تتجاوز الصيحات. نؤمن أن الأناقة الحقيقية خالدة، وكل قطعة في مجموعتنا تعكس التزامنا بالجودة والاستدامة والتصميم المبتكر.",
    storyParagraph2:
      "بدأت رحلتنا بمهمة بسيطة: تقديم ملابس راقية تمكن الأفراد من التعبير عن أسلوبهم الفريد مع اتخاذ خيارات مسؤولة لكوكبنا.",
    premiumPieces: "قطع راقية",
    happyCustomers: "عملاء راضون",
    craftedWithPassion: "مصنوع بشغف",
    everyDetailMatters: "كل تفصيل مهم",
    ourValues: "قيمنا",
    valuesDescription: "المبادئ التي تُوجه كل ما نقوم به",
    sustainability: "الاستدامة",
    sustainabilityDesc:
      "ملتزمون بالإنتاج الأخلاقي والمسؤولية البيئية في كل جانب من جوانب أعمالنا.",
    quality: "الجودة",
    qualityDesc: "مواد فاخرة وحرفية دقيقة تضمن أن كل قطعة تفوق التوقعات.",
    innovation: "الابتكار",
    innovationDesc:
      "نُحرك الحدود باستمرار لإنشاء أزياء خالدة ومتطورة في آن واحد.",
    meetOurTeam: "تعرف على فريقنا",
    teamDescription: "الأفراد الموهوبون وراء لوكس",
    readyToExperience: "مستعد لتجربة لوكس؟",
    discoverCollection: "اكتشف مجموعتنا واعثر على أسلوبك المثالي",

    // Team members
    sarahJohnson: "سارة جونسون",
    founderCreativeDirector: "المؤسسة والمديرة الإبداعية",
    sarahBio: "مع 15 عاماً في الأزياء، تجلب سارة قيادة بصيرة إلى لوكس.",
    marcusChen: "ماركوس تشين",
    headOfDesign: "رئيس التصميم",
    marcusBio: "مصمم حائز على جوائز يركز على الأزياء المستدامة والمبتكرة.",
    elenaRodriguez: "إيلينا رودريغيز",
    qualityManager: "مديرة الجودة",
    elenaBio: "تضمن أن كل قطعة تلبي معاييرنا الاستثنائية في الحرفية.",
  },
};

export const useLanguageStore = create(
  persist(
    (set, get) => ({
      currentLanguage: "fr",
      translations: translations,

      setLanguage: (language) => {
        if (translations[language]) {
          set({ currentLanguage: language });
        }
      },

      t: (key, params = {}) => {
        const { currentLanguage, translations } = get();
        let translation =
          translations[currentLanguage][key] || translations["en"][key] || key;

        // Handle parameter substitution
        Object.keys(params).forEach((param) => {
          translation = translation.replace(`{${param}}`, params[param]);
        });

        return translation;
      },

      getCurrentLanguage: () => get().currentLanguage,

      getAvailableLanguages: () => Object.keys(translations),

      isRTL: () => get().currentLanguage === "ar",
    }),
    {
      name: "language-storage",
      getStorage: () => localStorage,
    }
  )
);
