/* =========================================================
   Menu data for MYASO & BULKA.
   Single source of truth for the landing page, cart, checkout
   and payment flow. Prices in RUB.
   ========================================================= */
const MENU = [
  {
    id: "burgers",
    title: "Бургеры",
    subtitle: "Свежая котлета, собранная только после вашего заказа",
    items: [
      {
        id: "smash-20",
        name: "Smash 2.0",
        price: 490,
        img: "assets/menu/smash-20.jpg",
        comp: ["2 говяжьи котлеты", "Двойной чеддер", "Маринованные огурцы", "Лук", "Фирменный соус", "Булочка"]
      },
      {
        id: "american-classic",
        name: "American Classic",
        price: 520,
        img: "assets/menu/american-classic.jpg",
        comp: ["Говяжья котлета", "Чеддер", "Салат", "Томат", "Красный лук", "Огурцы", "Бургерный соус", "Булочка"]
      },
      {
        id: "bacon-jam",
        name: "Bacon Jam",
        price: 570,
        img: "assets/menu/bacon-jam.jpg",
        mark: "Хит",
        comp: ["Двойной smash", "Чеддер", "Хрустящий бекон", "Карамелизированный лук", "Сладко-копчёный соус", "Булочка"]
      },
      {
        id: "crispy-chicken",
        name: "Crispy Chicken",
        price: 450,
        img: "assets/menu/crispy-chicken.jpg",
        comp: ["Куриное филе в хрустящей панировке", "Коул-слоу", "Салат", "Огурцы", "Сливочный соус с паприкой", "Булочка"]
      },
      {
        id: "veggie-crunch",
        name: "Veggie Crunch",
        price: 430,
        img: "assets/menu/veggie-crunch.jpg",
        mark: "Veg",
        comp: ["Котлета из нута и овощей", "Коул-слоу", "Свежий салат", "Огурцы", "Пикантный соус", "Булочка"]
      }
    ]
  },
  {
    id: "sides",
    title: "Закуски",
    subtitle: "То, что делит стол вместе с бургером",
    items: [
      {
        id: "fries",
        name: "Картофель фри",
        price: 190,
        img: "assets/menu/fries.jpg",
        comp: ["Золотистый", "Хрустящий", "С морской солью"]
      },
      {
        id: "sweet-potato-fries",
        name: "Батат фри",
        price: 240,
        img: "assets/menu/sweet-potato-fries.jpg",
        comp: ["Сладкий картофель", "Копчёная паприка"]
      },
      {
        id: "wings",
        name: "Куриные крылья",
        price: 360,
        img: "assets/menu/wings.jpg",
        comp: ["6 крыльев на выбор", "Барбекю, чили или сырный соус"]
      },
      {
        id: "cheese-balls",
        name: "Сырные шарики",
        price: 260,
        img: "assets/menu/cheese-balls.jpg",
        comp: ["Тягучая моцарелла", "Хрустящая панировка"]
      }
    ]
  },
  {
    id: "sauces",
    title: "Соусы",
    subtitle: "Готовим на кухне и подбираем к каждому бургеру",
    items: [
      {
        id: "sauce-signature",
        name: "Фирменный",
        price: 60,
        img: "assets/menu/sauce-signature.jpg",
        comp: ["Сливочный", "Слегка копчёный"]
      },
      {
        id: "sauce-cheese",
        name: "Сырный",
        price: 60,
        img: "assets/menu/sauce-cheese.jpg",
        comp: ["Насыщенный чеддер"]
      },
      {
        id: "sauce-bbq",
        name: "Барбекю",
        price: 60,
        img: "assets/menu/sauce-bbq.jpg",
        comp: ["Сладкий дымный вкус"]
      },
      {
        id: "sauce-chili",
        name: "Чили",
        price: 60,
        img: "assets/menu/sauce-chili.jpg",
        comp: ["Острый", "С приятной кислинкой"]
      }
    ]
  },
  {
    id: "drinks",
    title: "Напитки",
    subtitle: "Холодное, горячее и в меру сладкое",
    items: [
      {
        id: "cola",
        name: "Кола / Кола без сахара",
        price: 150,
        img: "assets/menu/cola.jpg"
      },
      {
        id: "lemonade",
        name: "Лимонад «Цитрус-мята»",
        price: 190,
        img: "assets/menu/lemonade.jpg"
      },
      {
        id: "iced-tea",
        name: "Холодный чай «Персик-жасмин»",
        price: 170,
        img: "assets/menu/iced-tea.jpg"
      },
      {
        id: "coffee",
        name: "Американо / Капучино",
        price: 150,
        img: "assets/menu/cappuccino.jpg"
      }
    ]
  }
];

const MENU_INDEX = MENU.reduce((acc, section) => {
  section.items.forEach((item) => { acc[item.id] = item; });
  return acc;
}, {});
