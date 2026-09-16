/* =========================================================
   MYASO & BULKA — i18n
   Flat-key RU/EN dictionary + data-i18n / data-i18n-attr binder.
   Language is persisted in localStorage under 'mb_lang' (default 'ru').
   Switch buttons ([data-lang-switch]) always show the CURRENTLY
   ACTIVE language code (RU while Russian is showing, EN while English
   is showing) — never the language a click would switch to.
   ========================================================= */

const STRINGS = {
  ru: {
    'meta.indexTitle': 'МЯСО & БУЛКА — smash-бургерная в Екатеринбурге',
    'meta.checkoutTitle': 'Оформление заказа — МЯСО & БУЛКА',
    'meta.paymentTitle': 'Оплата — МЯСО & БУЛКА',
    'meta.successTitle': 'Заказ принят — МЯСО & БУЛКА',

    'common.total': 'Итого',
    'common.goToMenu': 'Перейти в меню',
    'common.langSwitchAria': 'Переключить язык',

    'logo.part1': 'МЯСО',
    'logo.part2': '& БУЛКА',

    'nav.menu': 'Меню',
    'nav.kitchen': 'Кухня',
    'nav.about': 'О нас',
    'nav.news': 'Новости',
    'nav.contacts': 'Контакты',
    'nav.orderDetails': 'Детали заказа',

    'header.cart': 'Корзина',
    'header.cartAria': 'Открыть корзину',
    'header.menuAria': 'Меню навигации',
    'header.backToMenu': 'Назад в меню',

    'mobile.callPrefix': 'Позвонить',

    'hero.kicker': 'Мясо. Огонь. Город.',
    'hero.title1': 'Сочный smash.',
    'hero.title2': 'Честное мясо.',
    'hero.title3': 'Ничего лишнего.',
    'hero.text': 'Каждый бургер собираем после заказа: горячая булка, сочная котлета с хрустящей корочкой, расплавленный сыр и соусы собственного приготовления. Быстро, громко, по-настоящему вкусно.',
    'hero.ctaOrder': 'Заказать сейчас',
    'hero.ctaMenu': 'Смотреть меню',
    'hero.imgAlt': 'Фирменный бургер МЯСО & БУЛКА',
    'hero.fact1Title': 'Булочки каждый день',
    'hero.fact1Text': 'Выпекаем утром, чтобы к вечеру они оставались мягкими и ароматными.',
    'hero.fact2Title': 'Smash за 3 минуты',
    'hero.fact2Text': 'Котлета прижимается к грилю только после вашего заказа.',
    'hero.fact3Title': 'Говядина 100%',
    'hero.fact3Text': 'Без панировки и лишних добавок — только мясо, соль и перец.',

    'marquee.item1': 'Свежие булочки',
    'marquee.item2': 'Фирменные соусы',
    'marquee.item3': 'Отборная говядина',
    'marquee.item4': 'Готовим при заказе',
    'marquee.item5': 'Хрустящий цыплёнок',
    'marquee.item6': 'Картофель фри',

    'promo.tag': 'Комбо недели',
    'promo.title': 'Smash + картофель + напиток',
    'promo.text': 'Тот самый набор, когда хочется не выбирать. Фирменный smash, золотистый картофель и холодный напиток — всё, что нужно для правильного обеда или позднего ужина.',
    'promo.from': 'от',
    'promo.cta': 'Выбрать комбо',
    'promo.note': 'Действует ежедневно с 12:00 до 17:00',
    'promo.imgAlt': 'Комбо недели: бургеры, картофель фри и напиток',

    'kitchen.kicker': 'Готовим на месте',
    'kitchen.titleLine1': 'Больше вкуса.',
    'kitchen.titleLine2Pre': 'Меньше ',
    'kitchen.titleLine2Grad': 'лишних слов',
    'kitchen.lead': 'Нам важен каждый слой: от румяной булки до последней капли соуса. Не усложняем рецепты ради моды — просто берём хорошие продукты и готовим их так, как любим сами.',

    'tile1.chip': 'Булочки',
    'tile1.title': 'Румяные снаружи, мягкие внутри',
    'tile1.text': 'Булочки с лёгкой сладостью и тонкой хрустящей корочкой. Идеально держат сочность бургера, не распадаясь в руках.',
    'tile1.alt': 'Румяная булочка бургера',
    'tile2.chip': 'Мясо',
    'tile2.title': 'Хрустящая корочка, сочная середина',
    'tile2.text': 'Каждую котлету прижимаем к раскалённому грилю. Так появляется тот самый аромат жареного мяса и насыщенный вкус без лишних специй.',
    'tile2.alt': 'Сочная говяжья котлета с хрустящей корочкой',
    'tile3.chip': 'Соусы',
    'tile3.title': 'Соус — не дополнение, а характер',
    'tile3.text': 'Сырный, дымный барбекю, пикантный чили и наш фирменный — готовим на кухне и подбираем к каждому бургеру.',
    'tile3.alt': 'Соус собственного приготовления',

    'menu.kicker': 'Меню',
    'menu.titleLine1': 'Выбирай.',
    'menu.titleLine2Pre': 'Добавляй. ',
    'menu.titleLine2Grad': 'Заказывай.',
    'menu.lead': 'Выберите категорию, добавьте любимые позиции в корзину и заберите заказ на месте или оформите доставку.',

    'about.kicker': 'О нас',
    'about.quote': '«Начали с маленького гриля. Теперь кормим весь город»',
    'about.text': 'МЯСО & БУЛКА — это место для тех, кто ценит понятную еду и не готов мириться с посредственным вкусом. Мы не прячем ингредиенты за длинными названиями: показываем мясо, даём много сыра и подаём бургер горячим.',
    'about.signName': 'Команда МЯСО & БУЛКА',
    'about.stat1Value': '2019',
    'about.stat1Label': 'Открылись для первых гостей',
    'about.stat2Value': '120 г',
    'about.stat2Label': 'Вес одной smash-котлеты',
    'about.stat3Value': '28',
    'about.stat3Label': 'Позиций в меню',
    'about.stat4Value': '100%',
    'about.stat4Label': 'Готовим после заказа',

    'news.kicker': 'Новости',
    'news.title': 'Что нового?',
    'news.readMore': 'Читать',
    'news.post1Title': 'Новый SMASH 2.0 уже в меню',
    'news.post1Text': 'Две тонкие котлеты, двойной чеддер и фирменный соус. Вкус, ради которого хочется отменить планы на вечер.',
    'news.post2Title': 'Комбо для правильного обеда',
    'news.post2Text': 'С понедельника по пятницу собираем ваш любимый бургер, картофель и напиток по специальной цене.',
    'news.post3Title': 'Соус недели: копчёный чили',
    'news.post3Text': 'Добавили в меню новый соус — острый, дымный и идеально подходящий к курице и картофелю.',
    'news.post4Title': 'Доставка стала быстрее',
    'news.post4Text': 'Собираем заказ сразу после подтверждения, чтобы бургер приехал горячим, а картофель — хрустящим.',

    'contacts.kicker': 'Контакты',
    'contacts.titleLine1': 'Ждём тебя',
    'contacts.titleLine2': 'в гостях',
    'contacts.lead': 'Заходите после работы, забирайте заказ по пути домой или оставайтесь на долгий вечер с друзьями.',
    'contacts.phoneLabel': 'Телефон',
    'contacts.phoneNote': 'Звонки принимаем в часы работы',
    'contacts.addressLabel': 'Адрес',
    'contacts.addressLine1': 'Екатеринбург,',
    'contacts.addressLine2': 'ул. Розы Люксембург, 67',
    'contacts.addressNote': 'Вход со стороны ул. Декабристов, рядом с аркой во двор',
    'contacts.hoursLabel': 'Часы работы',
    'contacts.hoursLine1': 'Пн–Чт: 12:00–23:00',
    'contacts.hoursLine2': 'Пт–Сб: 12:00–00:00',
    'contacts.hoursLine3': 'Вс: 12:00–23:00',
    'contacts.hoursNote': 'Готовим до самого закрытия',
    'contacts.emailLabel': 'Почта',
    'contacts.emailNote': 'Для сотрудничества и мероприятий',

    'footer.copyright': '© МЯСО & БУЛКА — 2026. Все права защищены.',
    'footer.order': 'Заказать',

    'cartbar.checkout': 'Оформить',

    'drawer.title': 'Ваш заказ',
    'drawer.closeAria': 'Закрыть корзину',
    'drawer.emptyText': 'Пока пусто. Выберите бургер, закуску или напиток в меню.',
    'drawer.remove': 'Удалить',
    'drawer.decreaseAria': 'Уменьшить количество',
    'drawer.increaseAria': 'Увеличить количество',
    'drawer.checkout': 'Оформить заказ',

    'dish.addBtn': 'В корзину',
    'dish.decreaseAria': 'Убрать одну',
    'dish.increaseAria': 'Добавить ещё одну',
    'dish.markHit': 'Хит',

    'checkout.emptyTitle': 'Корзина пуста',
    'checkout.emptyText': 'Выберите бургеры, закуски или напитки — а потом возвращайтесь сюда для оформления заказа.',
    'steps.step1': 'Оформление',
    'steps.step2': 'Оплата',
    'steps.step3': 'Готово',
    'checkout.title': 'Оформление заказа',
    'checkout.sub': 'Начинаем готовить сразу после подтверждения оплаты. Заберите на месте или закажите доставку.',
    'checkout.contactTitle': 'Контактные данные',
    'checkout.nameLabel': 'Ваше имя',
    'checkout.namePlaceholder': 'например, Ирина',
    'checkout.nameError': 'Введите имя — мы позовём вас на кассе',
    'checkout.phoneLabel': 'Номер телефона',
    'checkout.phoneError': 'Введите полный номер: +7 и 10 цифр',
    'checkout.deliveryTitle': 'Как получить заказ',
    'pickup.pickupLabel': 'Самовывоз',
    'checkout.pickupNote': 'Заберите на ул. Розы Люксембург, 67',
    'pickup.deliveryLabel': 'Доставка',
    'checkout.deliveryNote': 'Привезём по указанному адресу',
    'checkout.timeLabel': 'К какому времени приготовить',
    'checkout.timeError': 'Выберите время',
    'checkout.timeSelectDefault': 'Выберите время',
    'checkout.today': 'Сегодня',
    'checkout.commentLabel': 'Комментарий к заказу',
    'checkout.commentPlaceholder': 'например, без лука, соус отдельно',
    'checkout.summaryTitle': 'Ваш заказ',
    'checkout.submitBtn': 'Перейти к оплате',
    'checkout.noteText': 'Работаем ежедневно с 12:00. Состав и цены соответствуют меню кухни.',
    'checkout.editOrderLink': 'Изменить заказ',

    'payment.emptyTitle': 'Заказ не найден',
    'payment.emptyText': 'Похоже, оформление заказа не было завершено. Соберите заказ в меню и попробуйте снова.',
    'payment.title': 'Оплата',
    'payment.sub': 'Выберите удобный способ. После оплаты заказ уйдёт на кухню, и мы начнём готовить к выбранному времени.',
    'payment.methodTitle': 'Способ оплаты',
    'payment.cardLabel': 'Картой онлайн',
    'payment.cardNote': 'Visa, Mastercard, Мир — оплата прямо на сайте',
    'payment.qrLabel': 'Оплата по QR-коду',
    'payment.qrNote': 'Отсканируйте код в приложении банка',
    'payment.cashLabel': 'Наличными при получении',
    'payment.cashNote': 'Оплатите на кассе или курьеру',
    'payment.cardPreviewBrand': 'МЯСО & БУЛКА · Оплата',
    'payment.cardPreviewHolderLabel': 'Владелец карты',
    'payment.cardPreviewExpLabel': 'Срок действия',
    'payment.cardPreviewHolderPlaceholder': 'ИМЯ ФАМИЛИЯ',
    'payment.cardPreviewExpPlaceholder': 'ММ/ГГ',
    'payment.cardNumberLabel': 'Номер карты',
    'payment.cardNumberError': 'Проверьте номер карты — что-то не так',
    'payment.cardHolderFieldLabel': 'Имя на карте',
    'payment.cardHolderError': 'Введите имя латинскими буквами, как на карте',
    'payment.cardExpFieldLabel': 'Срок действия карты',
    'payment.cardExpPlaceholder': 'ММ/ГГ',
    'payment.cardExpError': 'Формат ММ/ГГ, дата не может быть в прошлом',
    'payment.cardCvcLabel': 'CVC / CVV',
    'payment.cardCvcError': '3 или 4 цифры на обороте карты',
    'payment.qrInstructions': 'Откройте приложение банка, отсканируйте код и подтвердите оплату {sum}.',
    'payment.qrAria': 'Демо QR-код',
    'payment.cashText': 'Заказ сразу уходит на кухню — оплатите лично картой, по QR-коду или наличными при получении. Пожалуйста, приходите к выбранному времени: бургер вкуснее всего в первые десять минут.',
    'payment.payBtnCard': 'Оплатить {sum}',
    'payment.payBtnQr': 'Я оплатил(а) по QR-коду',
    'payment.payBtnCash': 'Подтвердить заказ',
    'payment.processing': 'Обработка…',
    'payment.demoTitle': 'Демо-режим.',
    'payment.demoText': 'Платёжный провайдер пока не подключён: деньги не списываются, а данные карты никуда не отправляются и не сохраняются. Чтобы принимать настоящие платежи, нужно подключить платёжный шлюз (например, ЮKassa или Stripe) — точка подключения уже готова в одном месте:',
    'payment.orderPanelTitle': 'Заказ',
    'payment.payTotalLabel': 'К оплате',
    'payment.editDataLink': 'Изменить данные',
    'payment.methodCard': 'Картой онлайн',
    'payment.methodQr': 'Оплата по QR-коду',
    'payment.methodCash': 'Наличными при получении',

    'success.emptyTitle': 'Пока ничего нет',
    'success.emptyText': 'Не нашли недавний заказ. Загляните в меню — там 16 поводов вернуться.',
    'success.title': 'Заказ принят',
    'success.subPaid': 'Оплата получена, заказ уже готовится. Ждём вас — {time}.',
    'success.subUnpaid': 'Заказ передан на кухню. Оплатите на месте, когда придёте — {time}.',
    'success.orderNumber': 'Заказ № {num}',
    'success.factName': 'Имя',
    'success.factPickup': 'Получение',
    'success.factTime': 'Время',
    'success.factPayment': 'Оплата',
    'success.factComment': 'Комментарий',
    'success.factAddress': 'Адрес',
    'success.addressValue': 'Екатеринбург, ул. Розы Люксембург, 67',
    'success.detailsTitle': 'Детали заказа',
    'success.orderMoreBtn': 'Заказать ещё',
    'success.callBtn': 'Позвонить в кафе'
  },

  en: {
    'meta.indexTitle': 'MYASO & BULKA — smash-burger spot in Yekaterinburg',
    'meta.checkoutTitle': 'Checkout — MYASO & BULKA',
    'meta.paymentTitle': 'Payment — MYASO & BULKA',
    'meta.successTitle': 'Order confirmed — MYASO & BULKA',

    'common.total': 'Total',
    'common.goToMenu': 'Go to menu',
    'common.langSwitchAria': 'Switch language',

    'logo.part1': 'MYASO',
    'logo.part2': '& BULKA',

    'nav.menu': 'Menu',
    'nav.kitchen': 'Kitchen',
    'nav.about': 'About',
    'nav.news': 'News',
    'nav.contacts': 'Contacts',
    'nav.orderDetails': 'Order details',

    'header.cart': 'Cart',
    'header.cartAria': 'Open cart',
    'header.menuAria': 'Navigation menu',
    'header.backToMenu': 'Back to menu',

    'mobile.callPrefix': 'Call',

    'hero.kicker': 'Meat. Fire. City.',
    'hero.title1': 'Juicy smash.',
    'hero.title2': 'Honest meat.',
    'hero.title3': 'Nothing extra.',
    'hero.text': 'Every burger is built to order: a warm bun, a juicy patty with a crisp crust, melted cheese and house-made sauces. Fast, loud, and genuinely delicious.',
    'hero.ctaOrder': 'Order now',
    'hero.ctaMenu': 'View menu',
    'hero.imgAlt': 'Signature MYASO & BULKA burger',
    'hero.fact1Title': 'Fresh buns daily',
    'hero.fact1Text': 'Baked every morning so they stay soft and fragrant well into the evening.',
    'hero.fact2Title': 'Smashed in 3 minutes',
    'hero.fact2Text': 'The patty hits the hot grill only after you place your order.',
    'hero.fact3Title': '100% beef',
    'hero.fact3Text': 'No filler, no breading — just meat, salt and pepper.',

    'marquee.item1': 'Fresh buns',
    'marquee.item2': 'Signature sauces',
    'marquee.item3': 'Prime beef',
    'marquee.item4': 'Cooked to order',
    'marquee.item5': 'Crispy chicken',
    'marquee.item6': 'French fries',

    'promo.tag': 'Combo of the week',
    'promo.title': 'Smash + fries + a drink',
    'promo.text': "The set for when you don't want to choose. A signature smash, golden fries and a cold drink — everything you need for a proper lunch or a late dinner.",
    'promo.from': 'from',
    'promo.cta': 'Choose the combo',
    'promo.note': 'Available daily from 12:00 PM to 5:00 PM',
    'promo.imgAlt': 'Combo of the week: burgers, fries and a drink',

    'kitchen.kicker': 'Made in-house',
    'kitchen.titleLine1': 'More flavor.',
    'kitchen.titleLine2Pre': 'Fewer ',
    'kitchen.titleLine2Grad': 'empty words',
    'kitchen.lead': "Every layer matters to us — from the golden bun to the last drop of sauce. We don't complicate recipes for the sake of trends — we just use good ingredients and cook them the way we'd want to eat them ourselves.",

    'tile1.chip': 'Buns',
    'tile1.title': 'Golden outside, soft inside',
    'tile1.text': "Lightly sweet buns with a thin, crisp crust. They hold all the burger's juiciness without falling apart in your hands.",
    'tile1.alt': 'Golden burger bun',
    'tile2.chip': 'Meat',
    'tile2.title': 'Crisp crust, juicy center',
    'tile2.text': "Every patty is pressed onto a scorching-hot grill. That's what gives it that seared, meaty aroma and rich flavor without extra spices.",
    'tile2.alt': 'Juicy beef patty with a crisp crust',
    'tile3.chip': 'Sauces',
    'tile3.title': "Sauce isn't a topping, it's a character",
    'tile3.text': 'Cheesy, smoky barbecue, spicy chili and our signature blend — all made in-house and matched to every burger.',
    'tile3.alt': 'House-made sauce',

    'menu.kicker': 'Menu',
    'menu.titleLine1': 'Choose.',
    'menu.titleLine2Pre': 'Add it. ',
    'menu.titleLine2Grad': 'Order.',
    'menu.lead': 'Pick a category, add your favorites to the cart, and either grab your order in-house or have it delivered.',

    'about.kicker': 'About us',
    'about.quote': '“We started with one small grill. Now we feed the whole city.”',
    'about.text': "MYASO & BULKA is a place for people who value honest food and won't settle for mediocre taste. We don't hide our ingredients behind fancy names — we show the meat, pile on the cheese, and serve every burger hot.",
    'about.signName': 'The MYASO & BULKA team',
    'about.stat1Value': '2019',
    'about.stat1Label': 'Opened our doors to our first guests',
    'about.stat2Value': '120 g',
    'about.stat2Label': 'Weight of a single smash patty',
    'about.stat3Value': '28',
    'about.stat3Label': 'Items on the menu',
    'about.stat4Value': '100%',
    'about.stat4Label': 'Cooked to order, every time',

    'news.kicker': 'News',
    'news.title': "What's new?",
    'news.readMore': 'Read',
    'news.post1Title': 'New SMASH 2.0 is on the menu',
    'news.post1Text': 'Two thin patties, double cheddar and our signature sauce. A flavor worth canceling your evening plans for.',
    'news.post2Title': 'A combo for a proper lunch',
    'news.post2Text': 'Monday through Friday, we put together your favorite burger, fries and a drink at a special price.',
    'news.post3Title': 'Sauce of the week: smoked chili',
    'news.post3Text': "We've added a new sauce to the menu — spicy, smoky, and perfect with chicken and fries.",
    'news.post4Title': 'Delivery just got faster',
    'news.post4Text': "We start on your order the moment it's confirmed, so the burger arrives hot and the fries stay crisp.",

    'contacts.kicker': 'Contacts',
    'contacts.titleLine1': "We're waiting",
    'contacts.titleLine2': 'to host you',
    'contacts.lead': 'Stop by after work, grab your order on the way home, or stay for a long evening with friends.',
    'contacts.phoneLabel': 'Phone',
    'contacts.phoneNote': 'We take calls during opening hours',
    'contacts.addressLabel': 'Address',
    'contacts.addressLine1': 'Yekaterinburg,',
    'contacts.addressLine2': '67 Rozy Lyuksemburg St.',
    'contacts.addressNote': 'Entrance from Dekabristov St., next to the archway into the courtyard',
    'contacts.hoursLabel': 'Hours',
    'contacts.hoursLine1': 'Mon–Thu: 12:00 PM–11:00 PM',
    'contacts.hoursLine2': 'Fri–Sat: 12:00 PM–12:00 AM',
    'contacts.hoursLine3': 'Sun: 12:00 PM–11:00 PM',
    'contacts.hoursNote': "We're cooking right up until close",
    'contacts.emailLabel': 'Email',
    'contacts.emailNote': 'For partnerships and events',

    'footer.copyright': '© MYASO & BULKA — 2026. All rights reserved.',
    'footer.order': 'Order',

    'cartbar.checkout': 'Checkout',

    'drawer.title': 'Your order',
    'drawer.closeAria': 'Close cart',
    'drawer.emptyText': 'Nothing here yet. Pick a burger, a side or a drink from the menu.',
    'drawer.remove': 'Remove',
    'drawer.decreaseAria': 'Decrease quantity',
    'drawer.increaseAria': 'Increase quantity',
    'drawer.checkout': 'Go to checkout',

    'dish.addBtn': 'Add to cart',
    'dish.decreaseAria': 'Remove one',
    'dish.increaseAria': 'Add one more',
    'dish.markHit': 'Bestseller',

    'checkout.emptyTitle': 'Your cart is empty',
    'checkout.emptyText': 'Pick some burgers, sides or drinks — then come back here to check out.',
    'steps.step1': 'Details',
    'steps.step2': 'Payment',
    'steps.step3': 'Done',
    'checkout.title': 'Checkout',
    'checkout.sub': "We start cooking as soon as payment is confirmed. Pick it up in person or have it delivered.",
    'checkout.contactTitle': 'Contact details',
    'checkout.nameLabel': 'Your name',
    'checkout.namePlaceholder': 'e.g. Irina',
    'checkout.nameError': "Enter your name — we'll call you at the counter",
    'checkout.phoneLabel': 'Phone number',
    'checkout.phoneError': 'Enter a full number: +7 followed by 10 digits',
    'checkout.deliveryTitle': 'How to get your order',
    'pickup.pickupLabel': 'Pickup',
    'checkout.pickupNote': 'Pick up at 67 Rozy Lyuksemburg St.',
    'pickup.deliveryLabel': 'Delivery',
    'checkout.deliveryNote': "We'll deliver to the address you provide",
    'checkout.timeLabel': 'What time should it be ready',
    'checkout.timeError': 'Choose a time',
    'checkout.timeSelectDefault': 'Choose a time',
    'checkout.today': 'Today',
    'checkout.commentLabel': 'Order comment',
    'checkout.commentPlaceholder': 'e.g. no onions, sauce on the side',
    'checkout.summaryTitle': 'Your order',
    'checkout.submitBtn': 'Continue to payment',
    'checkout.noteText': 'Open daily from 12:00 PM. Ingredients and prices match the kitchen menu.',
    'checkout.editOrderLink': 'Edit order',

    'payment.emptyTitle': 'Order not found',
    'payment.emptyText': "Looks like checkout wasn't completed. Put together an order in the menu and try again.",
    'payment.title': 'Payment',
    'payment.sub': "Choose whichever works for you. Once paid, the order goes straight to the kitchen and we start cooking for your chosen time.",
    'payment.methodTitle': 'Payment method',
    'payment.cardLabel': 'Card online',
    'payment.cardNote': 'Visa, Mastercard, Mir — pay right on the site',
    'payment.qrLabel': 'Pay by QR code',
    'payment.qrNote': 'Scan the code in your banking app',
    'payment.cashLabel': 'Cash on pickup/delivery',
    'payment.cashNote': 'Pay at the counter or to the courier',
    'payment.cardPreviewBrand': 'MYASO & BULKA · Payment',
    'payment.cardPreviewHolderLabel': 'Cardholder',
    'payment.cardPreviewExpLabel': 'Expiry',
    'payment.cardPreviewHolderPlaceholder': 'NAME SURNAME',
    'payment.cardPreviewExpPlaceholder': 'MM/YY',
    'payment.cardNumberLabel': 'Card number',
    'payment.cardNumberError': "Check the card number — something's off",
    'payment.cardHolderFieldLabel': 'Name on card',
    'payment.cardHolderError': 'Enter the name in Latin letters, exactly as on the card',
    'payment.cardExpFieldLabel': 'Card expiry',
    'payment.cardExpPlaceholder': 'MM/YY',
    'payment.cardExpError': "Format MM/YY, and it can't be in the past",
    'payment.cardCvcLabel': 'CVC / CVV',
    'payment.cardCvcError': '3 or 4 digits on the back of the card',
    'payment.qrInstructions': 'Open your banking app, scan the code, and confirm the payment of {sum}.',
    'payment.qrAria': 'Demo QR code',
    'payment.cashText': "Your order goes to the kitchen right away — pay in person by card, QR code, or cash on arrival. Please arrive at your chosen time: the burger tastes best in the first ten minutes.",
    'payment.payBtnCard': 'Pay {sum}',
    'payment.payBtnQr': "I've paid by QR code",
    'payment.payBtnCash': 'Confirm order',
    'payment.processing': 'Processing…',
    'payment.demoTitle': 'Demo mode.',
    'payment.demoText': 'No payment provider is connected yet: no money is charged, and card details are never sent anywhere or stored. To accept real payments, connect a payment gateway (e.g. YooKassa or Stripe) — the integration point is already in place:',
    'payment.orderPanelTitle': 'Order',
    'payment.payTotalLabel': 'Amount due',
    'payment.editDataLink': 'Edit details',
    'payment.methodCard': 'Card online',
    'payment.methodQr': 'Paid by QR code',
    'payment.methodCash': 'Cash on pickup/delivery',

    'success.emptyTitle': 'Nothing here yet',
    'success.emptyText': "We couldn't find a recent order. Check out the menu — there are 16 reasons to come back.",
    'success.title': 'Order confirmed',
    'success.subPaid': "Payment received, your order is already cooking. We'll be expecting you — {time}.",
    'success.subUnpaid': 'Your order is on its way to the kitchen. Pay in person when you arrive — {time}.',
    'success.orderNumber': 'Order No. {num}',
    'success.factName': 'Name',
    'success.factPickup': 'Fulfillment',
    'success.factTime': 'Time',
    'success.factPayment': 'Payment',
    'success.factComment': 'Comment',
    'success.factAddress': 'Address',
    'success.addressValue': '67 Rozy Lyuksemburg St., Yekaterinburg',
    'success.detailsTitle': 'Order details',
    'success.orderMoreBtn': 'Order again',
    'success.callBtn': 'Call the restaurant'
  }
};

const I18N = (() => {
  const STORAGE_KEY = 'mb_lang';

  function readStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'ru';
    } catch (err) {
      return 'ru';
    }
  }

  let lang = readStoredLang();

  function getLang() {
    return lang;
  }

  function t(key, vars) {
    const dict = STRINGS[lang] || STRINGS.ru;
    let str = Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : (STRINGS.ru[key] || key);
    if (vars) {
      Object.keys(vars).forEach((k) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
      });
    }
    return str;
  }

  function pluralize(n, forms) {
    if (lang === 'ru') {
      const mod10 = n % 10;
      const mod100 = n % 100;
      if (mod10 === 1 && mod100 !== 11) return forms.ru[0];
      if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms.ru[1];
      return forms.ru[2];
    }
    return n === 1 ? forms.en[0] : forms.en[1];
  }

  function translatePage(root) {
    const scope = root || document;

    scope.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    scope.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr')
        .split('|')
        .forEach((pair) => {
          const [attr, key] = pair.split(':').map((s) => s.trim());
          if (attr && key) el.setAttribute(attr, t(key));
        });
    });
  }

  function renderLangSwitchButtons() {
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      btn.textContent = lang.toUpperCase();
      btn.setAttribute('aria-label', t('common.langSwitchAria'));
    });
  }

  function bindLangSwitchButtons() {
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      if (btn.dataset.langBound) return;
      btn.dataset.langBound = 'true';
      btn.addEventListener('click', toggleLang);
    });
  }

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'ru';
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* private mode — carry on without persisting */
    }
    document.documentElement.lang = lang;
    translatePage(document);
    renderLangSwitchButtons();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function toggleLang() {
    setLang(lang === 'ru' ? 'en' : 'ru');
  }

  /* Run immediately — this script is loaded at the bottom of <body>,
     after all markup, so every [data-i18n] node already exists. */
  document.documentElement.lang = lang;
  translatePage(document);
  renderLangSwitchButtons();
  bindLangSwitchButtons();

  return { t, translatePage, getLang, setLang, toggleLang, pluralize, renderLangSwitchButtons, bindLangSwitchButtons };
})();
