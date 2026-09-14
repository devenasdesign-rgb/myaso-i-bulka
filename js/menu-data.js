/* =========================================================
   Menu data for MYASO & BULKA.
   Single source of truth for the landing page, cart, checkout
   and payment flow. Prices in RUB (language-independent).
   `en` sub-objects hold the English translation of `title`/
   `subtitle` (sections) and `name`/`comp`/`mark` (items).
   ========================================================= */
const MENU = [
  {
    id: "burgers",
    title: "Бургеры",
    subtitle: "Свежая котлета, собранная только после вашего заказа",
    en: {
      title: "Burgers",
      subtitle: "A fresh patty, built only after your order comes in"
    },
    items: [
      {
        id: "smash-20",
        name: "Smash 2.0",
        price: 490,
        img: "assets/menu/smash-20.jpg",
        comp: ["2 говяжьи котлеты", "Двойной чеддер", "Маринованные огурцы", "Лук", "Фирменный соус", "Булочка"],
        en: {
          name: "Smash 2.0",
          comp: ["2 beef patties", "Double cheddar", "Pickles", "Onion", "Signature sauce", "Bun"]
        }
      },
      {
        id: "american-classic",
        name: "American Classic",
        price: 520,
        img: "assets/menu/american-classic.jpg",
        comp: ["Говяжья котлета", "Чеддер", "Салат", "Томат", "Красный лук", "Огурцы", "Бургерный соус", "Булочка"],
        en: {
          name: "American Classic",
          comp: ["Beef patty", "Cheddar", "Lettuce", "Tomato", "Red onion", "Pickles", "Burger sauce", "Bun"]
        }
      },
      {
        id: "bacon-jam",
        name: "Bacon Jam",
        price: 570,
        img: "assets/menu/bacon-jam.jpg",
        mark: "Хит",
        comp: ["Двойной smash", "Чеддер", "Хрустящий бекон", "Карамелизированный лук", "Сладко-копчёный соус", "Булочка"],
        en: {
          name: "Bacon Jam",
          mark: "Bestseller",
          comp: ["Double smash", "Cheddar", "Crispy bacon", "Caramelized onion", "Sweet-smoky sauce", "Bun"]
        }
      },
      {
        id: "crispy-chicken",
        name: "Crispy Chicken",
        price: 450,
        img: "assets/menu/crispy-chicken.jpg",
        comp: ["Куриное филе в хрустящей панировке", "Коул-слоу", "Салат", "Огурцы", "Сливочный соус с паприкой", "Булочка"],
        en: {
          name: "Crispy Chicken",
          comp: ["Crispy-breaded chicken fillet", "Coleslaw", "Lettuce", "Pickles", "Creamy paprika sauce", "Bun"]
        }
      }
    ]
  },
  {
    id: "sides",
    title: "Закуски",
    subtitle: "То, что делит стол вместе с бургером",
    en: {
      title: "Sides",
      subtitle: "The stuff that shares the table with your burger"
    },
    items: [
      {
        id: "fries",
        name: "Картофель фри",
        price: 190,
        img: "assets/menu/fries.jpg",
        comp: ["Золотистый", "Хрустящий", "С морской солью"],
        en: {
          name: "French Fries",
          comp: ["Golden", "Crispy", "Sea salt"]
        }
      },
      {
        id: "sweet-potato-fries",
        name: "Батат фри",
        price: 240,
        img: "assets/menu/sweet-potato-fries.jpg",
        comp: ["Сладкий картофель", "Копчёная паприка"],
        en: {
          name: "Sweet Potato Fries",
          comp: ["Sweet potato", "Smoked paprika"]
        }
      },
      {
        id: "wings",
        name: "Куриные крылья",
        price: 360,
        img: "assets/menu/wings.jpg",
        comp: ["6 крыльев на выбор", "Барбекю, чили или сырный соус"],
        en: {
          name: "Chicken Wings",
          comp: ["6 wings, your choice", "Barbecue, chili or cheese sauce"]
        }
      },
      {
        id: "cheese-balls",
        name: "Сырные шарики",
        price: 260,
        img: "assets/menu/cheese-balls.jpg",
        comp: ["Тягучая моцарелла", "Хрустящая панировка"],
        en: {
          name: "Cheese Balls",
          comp: ["Stretchy mozzarella", "Crispy breading"]
        }
      }
    ]
  },
  {
    id: "sauces",
    title: "Соусы",
    subtitle: "Готовим на кухне и подбираем к каждому бургеру",
    en: {
      title: "Sauces",
      subtitle: "Made in-house and matched to every burger"
    },
    items: [
      {
        id: "sauce-signature",
        name: "Фирменный",
        price: 60,
        img: "assets/menu/sauce-signature.jpg",
        comp: ["Сливочный", "Слегка копчёный"],
        en: {
          name: "Signature",
          comp: ["Creamy", "Lightly smoked"]
        }
      },
      {
        id: "sauce-cheese",
        name: "Сырный",
        price: 60,
        img: "assets/menu/sauce-cheese.jpg",
        comp: ["Насыщенный чеддер"],
        en: {
          name: "Cheese",
          comp: ["Rich cheddar"]
        }
      },
      {
        id: "sauce-bbq",
        name: "Барбекю",
        price: 60,
        img: "assets/menu/sauce-bbq.jpg",
        comp: ["Сладкий дымный вкус"],
        en: {
          name: "Barbecue",
          comp: ["Sweet and smoky"]
        }
      },
      {
        id: "sauce-chili",
        name: "Чили",
        price: 60,
        img: "assets/menu/sauce-chili.jpg",
        comp: ["Острый", "С приятной кислинкой"],
        en: {
          name: "Chili",
          comp: ["Spicy", "A pleasant tang"]
        }
      }
    ]
  },
  {
    id: "drinks",
    title: "Напитки",
    subtitle: "Холодное, горячее и в меру сладкое",
    en: {
      title: "Drinks",
      subtitle: "Cold, hot and just sweet enough"
    },
    items: [
      {
        id: "cola",
        name: "Кола / Кола без сахара",
        price: 150,
        img: "assets/menu/cola.jpg",
        en: {
          name: "Cola / Diet Cola"
        }
      },
      {
        id: "lemonade",
        name: "Лимонад «Цитрус-мята»",
        price: 190,
        img: "assets/menu/lemonade.jpg",
        en: {
          name: "Citrus-Mint Lemonade"
        }
      },
      {
        id: "iced-tea",
        name: "Холодный чай «Персик-жасмин»",
        price: 170,
        img: "assets/menu/iced-tea.jpg",
        en: {
          name: "Peach-Jasmine Iced Tea"
        }
      },
      {
        id: "coffee",
        name: "Американо / Капучино",
        price: 150,
        img: "assets/menu/cappuccino.jpg",
        en: {
          name: "Americano / Cappuccino"
        }
      }
    ]
  }
];

const MENU_INDEX = MENU.reduce((acc, section) => {
  section.items.forEach((item) => { acc[item.id] = item; });
  return acc;
}, {});

/* ---------- Language-aware getters ---------- */

function currentMenuLang() {
  return (typeof I18N !== 'undefined' && I18N.getLang) ? I18N.getLang() : 'ru';
}

function menuText(obj, field) {
  if (!obj) return '';
  const lang = currentMenuLang();
  if (lang === 'en' && obj.en && obj.en[field] !== undefined) return obj.en[field];
  return obj[field];
}
