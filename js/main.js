function $(id){ return document.getElementById(id); }

// ====== TRANSLATIONS (FULL SITE) ======
const I18N = {
  ru: {
    "brand.name":"Аниматоры Аксу",
    "brand.tag":"праздники 3–12 лет",

    "nav.services":"Услуги",
    "nav.characters":"Персонажи",
    "nav.calc":"Калькулятор",
    "nav.reviews":"Отзывы",
    "nav.faq":"FAQ",
    "nav.form":"Заявка",

    "hero.pill":"Аксу · выезд по городу",
    "hero.title":"Праздник, который запомнят",
    "hero.text":"Любимые герои, увлекательные игры премиум-сервис без переплат, вы отдыхаете- мы создаем настроение!",
    "hero.ctaPrimary":"Забронировать дату",
    "hero.ctaSecondary":"Рассчитать стоимость",
    "hero.badge1":"Безопасно",
    "hero.badge2":"Сценарии под возраст",
    "hero.badge3":"Надёжно и вовремя",
    "hero.stat1":"Чистый реквизит",
    "hero.stat2":"Пунктуальность",
    "hero.stat3":"Фотогенично",
    "hero.fastTitle":"Быстрый заказ",
    "hero.fastText":"Оставьте номер — напишем в WhatsApp за пару минут.",
    "hero.fastPlaceholder":"Телефон WhatsApp",
    "hero.fastButton":"Хочу праздник",
    "hero.fastHint":"Никакого спама. Только по делу 😊",

    "trust.1.title":"Аккуратно и безопасно",
    "trust.1.text":"Игры без риска, реквизит чистый и проверенный.",
    "trust.2.title":"Под возраст ребёнка",
    "trust.2.text":"3–7,7–12 — разные темпы и сценарии.",
    "trust.3.title":"Уникальные сценарии",
    "trust.3.text":"Квесты, сюжеты, интерактив — не “как у всех”.",
    "trust.4.title":"Премиум без переплат",
    "trust.4.text":"Красиво, качественно и честно по цене.",

    "services.title":"Услуги",
    "services.subtitle":"Выбирайте формат — мы соберём программу под ваш праздник.",
    "services.1.title":"Бумажная дискотека",
    "services.1.text":"Драйв, безопасность, эффект",
    "services.2.title":"Пена-шоу",
    "services.2.text":"Вау-эффект и море смеха. Сертифицированная пена.",
    "services.3.title":"Ростовые куклы",
    "services.3.text":"Объятия, фотки, встреча героя — максимум восторга.",
    "services.4.title":"Тематические вечеринки",
    "services.4.text":"Задания, сюжет, миссия — дети вовлечены на 100%.",
    "services.5.title":"Аниматоры",
    "services.5.text":"Куроми, Лабубу, принцессы, супергерои и другие.",
    "services.6.title":"Аквагрим",
    "services.6.text":"Атмосфера, хорошее настроение, полное погружение.",

    "chars.title":"Персонажи",
    "chars.subtitle":"Нажмите на героя — он автоматически добавится в заявку.",
    "chars.filterAll":"Все",

    // === NEW (для люкс-блока персонажей) ===
    "chars.chooseBtn":"Выбрать героя",
    "chars.previewBtn":"Посмотреть ближе",
    "chars.toForm":"Перейти к заявке",
    "chars.badgePopular":"Популярно",
    "chars.badgePhoto":"Фото-вау",
    "chars.badgeNew":"Новинка",
    "chars.badgeCute":"Мимими",
    "chars.badgeTop":"Топ",
    "chars.badgePrincess":"Принцесса",
    "chars.badgeAction":"Экшн",
    "chars.badgeHero":"Герой",
    "chars.badgeFamily":"Семейно",
    "chars.badgeKids":"Для всех",
    "chars.badgeMagic":"Магия",
    "chars.badgeQuest":"Квест",
    "chars.badgeHeroine":"Героиня",
    "chars.badgeStyle":"Стиль",
    "chars.badgeClassic":"Классика",
    "chars.age":"3–12 лет",
    "chars.desc":"Игры, мини-квест и фотомоменты — аккуратно, весело, без перегруза.",

    "process.title":"Как проходит праздник",
    "process.subtitle":"Три шага — и у ребёнка праздник мечты, а у родителей спокойствие.",
    "process.s1.title":"1) Быстро уточняем детали",
    "process.s1.text":"Возраст, место, любимые герои, сколько детей — предложим лучший формат и сценарий.",
    "process.s1.c1":"5–10 минут",
    "process.s1.c2":"в WhatsApp",
    "process.s2.title":"2) Готовим сценарий “под вашего”",
    "process.s2.text":"Сюжет, игры и темп — строго по возрасту. Реквизит чистый, музыка настроена заранее.",
    "process.s2.c1":"без хаоса",
    "process.s2.c2":"всё вовлекает",
    "process.s3.title":"3) Проводим вау-праздник",
    "process.s3.text":"Аниматор держит внимание, родители отдыхают. Много фото-моментов и улыбок.",
    "process.s3.c1":"пунктуально",
    "process.s3.c2":"аккуратно",
    "process.ctaTitle":"Хотите сценарий под ваш возраст?",
    "process.ctaText":"Оставьте заявку — предложим 2–3 варианта программы.",
    "process.ctaBtn":"Подобрать программу",
    "process.ctaBtn2":"Узнать стоимость",

    "port.title":"Портфолио",
    "port.subtitle":"Нажмите на фото — откроется крупно. Добавьте свои кадры и видео-обложки.",
    "port.tag1":"День рождения",
    "port.tag2":"Квест",
    "port.tag3":"Пена-шоу",
    "port.tag4":"Ростовые",
    "port.tag5":"Шоу-программа",
    "port.tag6":"Фотозона",
    "port.note":"Совет: добавьте 6–12 фото с реальных праздников — доверие вырастет сразу.",

    "marq.1":"💎 Премиум подача",
    "marq.2":"🛡️ Безопасные игры",
    "marq.3":"🎭 Сценарии под возраст",
    "marq.4":"📸 Фотогеничные моменты",
    "marq.5":"⏱️ Пунктуально",
    "marq.6":"✨ Вау-эффект",

    "final.kicker":"Сделаем праздник без хлопот",
    "final.title":"Вы выбираете героя — мы делаем вау",
    "final.text":"Оставьте заявку — предложим программу под возраст, место и бюджет.",
    "final.p1":"Безопасно и аккуратно",
    "final.p2":"Сценарий под ребёнка",
    "final.p3":"Премиум-вид без переплат",
    "final.btn1":"Забронировать дату",
    "final.btn2":"Рассчитать стоимость",
    "final.mini":"Ответим быстро. Поможем выбрать персонажа и формат.",

    "calc.title":"Калькулятор стоимости",
    "calc.subtitle":"Примерная цена, чтобы быстро понять бюджет.",
    "calc.kidsLabel":"Количество детей",
    "calc.timeLabel":"Длительность",
    "calc.time30":"30 минут",
    "calc.time60":"60 минут",
    "calc.time90":"90 минут",
    "calc.foam":"Пена-шоу (+4000 ₸)",
    "calc.charLabel":"Персонаж",
    "calc.char0":"Без персонажа",
    "calc.char1":"Популярный герой (+3000 ₸)",
    "calc.char2":"Премиум герой (+5000 ₸)",
    "calc.btn":"Посчитать",
    "calc.resultInit":"Итого: —",
    "calc.toForm":"Оставить заявку",
    "calc.note":"*Точный расчёт зависит от места, возраста и сценария. Мы уточним детали в сообщениях.",

    "reviews.title":"Отзывы родителей",
    "reviews.subtitle":"Реальные сценарии: дома, в зале и на большом празднике.",
    "reviews.r1.text":"«Эльза была как настоящая! Дети слушали, играли и смеялись без остановки. Родители наконец выдохнули 🙂»",
    "reviews.r1.meta":"Марина · 5 лет · Аксу",
    "reviews.r2.text":"«Заказывали Человека-паука на 8 лет — супер! Всё вовремя, аккуратно, программа энергичная и без хаоса.»",
    "reviews.r2.meta":"Игорь · 8 лет · Аксу",
    "reviews.r3.text":"«Пена-шоу — топ! Очень красиво и безопасно. Спасибо за сервис: быстро договорились и всё привезли.»",
    "reviews.r3.meta":"Алия · 7 лет · Аксу",

    "faq.title":"FAQ",
    "faq.subtitle":"Отвечаем на самые частые вопросы.",
    "faq.q1":"С какого возраста подходит программа?",
    "faq.a1":"Подходит для детей 3–12 лет. Сценарий адаптируем по возрасту.",
    "faq.q2":"Сколько длится праздник?",
    "faq.a2":"Чаще всего 60–90 минут. Можно короче/дольше по запросу.",
    "faq.q3":"Безопасно ли пена-шоу?",
    "faq.a3":"Да, используем сертифицированную пену и соблюдаем правила площадки.",
    "faq.q4":"Нужно ли что-то готовить?",
    "faq.a4":"Нет. Мы привозим реквизит и музыку. От вас — место и хорошее настроение 🙂",
    "faq.q5":"Можно ли выбрать персонажа?",
    "faq.a5":"Да. Нажмите на карточку персонажа — он автоматически добавится в заявку.",
    "faq.q6":"Как быстро вы отвечаете?",
    "faq.a6":"Обычно в течение 5–30 минут в рабочее время.",

    "form.title":"Оставить заявку",
    "form.subtitle":"Мы уточним детали и предложим лучший сценарий под возраст и формат.",
    "form.nameLabel":"Ваше имя",
    "form.namePh":"Например, Алия",
    "form.phoneLabel":"Телефон",
    "form.phonePh":"+7 ...",
    "form.ageLabel":"Возраст ребёнка",
    "form.agePh":"6",
    "form.dateLabel":"Дата",
    "form.commentLabel":"Комментарий",
    "form.commentPh":"Персонаж, адрес, сколько детей, пожелания…",
    "form.btn":"Отправить заявку",
    "form.note":"Заявка сохранится в админке (в браузере). Для заявок “с любого устройства” подключим Telegram.",
    "form.adminLink":"Открыть админку заявок",

    "footer.copy":"© Аниматоры Аксу",
    "footer.admin":"Админка",

    "mobile.primary":"Забронировать",
    "mobile.secondary":"Рассчитать",
  },

  kz: {
    "brand.name":"Ақсу аниматорлары",
    "brand.tag":"3–12 жас мерекелері",

    "nav.services":"Қызметтер",
    "nav.characters":"Кейіпкерлер",
    "nav.calc":"Есептеу",
    "nav.reviews":"Пікірлер",
    "nav.faq":"FAQ",
    "nav.form":"Өтінім",

    "hero.pill":"Ақсу · қала бойынша шығамыз",
    "hero.title":"Есте қаларлық мереке",
    "hero.text":"Сүйікті кейіпкерлер, қызықты ойындар премиум қызмет артық төлемсіз, сіз демаласыз - біз көңіл-күй қалыптастырамыз!",
    "hero.ctaPrimary":"Күнді брондау",
    "hero.ctaSecondary":"Бағаны есептеу",
    "hero.badge1":"Қауіпсіз",
    "hero.badge2":"Жасқа сай сценарий",
    "hero.badge3":"Сенімді әрі уақытында",
    "hero.stat1":"Таза реквизит",
    "hero.stat2":"Уақыттылық",
    "hero.stat3":"Әдемі фото-формат",
    "hero.fastTitle":"Жылдам тапсырыс",
    "hero.fastText":"Нөмір қалдырыңыз — WhatsApp-та тез жазамыз.",
    "hero.fastPlaceholder":"WhatsApp нөмірі",
    "hero.fastButton":"Мереке керек",
    "hero.fastHint":"Спам жоқ. Тек нақты байланыс 😊",

    "trust.1.title":"Ұқыпты әрі қауіпсіз",
    "trust.1.text":"Қауіпсіз ойындар, таза әрі тексерілген реквизит.",
    "trust.2.title":"Баланың жасына сай",
    "trust.2.text":"3-7,7-12 — әр жаста өз қарқыны мен сценарийі.",
    "trust.3.title":"Бірегей сценарийлер",
    "trust.3.text":"Квест, сюжет, интерактив — “бәріндей” емес.",
    "trust.4.title":"Артық төлемсіз премиум",
    "trust.4.text":"Әдемі, сапалы және әділ баға.",

    "services.title":"Услуги",
    "services.subtitle":"Выбирайте формат — мы соберём программу под ваш праздник.",
    "services.1.title":"Қағаз дискотекасы",
    "services.1.text":"Жетек, қауіпсіздік, әсер.",
    "services.2.title":"Көбік шоуы",
    "services.2.text":"Уау-әсер және күлкі теңізі. Сертификатталған көбік.",
    "services.3.title":"Өсу қуыршақтары",
    "services.3.text":"Құшақтау, суреттер, кейіпкердің кездесуі - ең үлкен қуаныш.",
    "services.4.title":"Тақырыптық кештер",
    "services.4.text":"Тапсырмалар, сюжет, миссия - балалар 100% қатысады.",
    "services.5.title":"Аниматорлар",
    "services.5.text":"Куроми, Лабубу, ханшайымдар, супергеройлар және басқалар.",
    "services.6.title":"Аквагрим",
    "services.6.text":"Атмосфера, жақсы көңіл-күй, толық батыру.",

    "chars.title":"Кейіпкерлер",
    "chars.subtitle":"Кейіпкерді басыңыз — өтінімге автоматты қосылады.",
    "chars.filterAll":"Барлығы",
     
      // === NEW (для люкс-блока персонажей) ===
      
    //  NEW: Characters Lux Block
    "chars.chooseBtn":"Кейіпкерді таңдау",
    "chars.previewBtn":"Жақыннан көру",
    "chars.toForm":"Өтінімге өту",
    "chars.badgePopular":"Танымал",
    "chars.badgePhoto":"Фото-вау",
    "chars.badgeNew":"Жаңа",
    "chars.badgeCute":"Өте сүйкімді",
    "chars.badgeTop":"Топ",
    "chars.badgePrincess":"Ханшайым",
    "chars.badgeAction":"Экшн",
    "chars.badgeHero":"Батыр",
    "chars.badgeFamily":"Отбасылық",
    "chars.badgeKids":"Барлығына",
    "chars.badgeMagic":"Сиқыр",
    "chars.badgeQuest":"Квест",
    "chars.badgeHeroine":"Батыр қыз",
    "chars.badgeStyle":"Стиль",
    "chars.badgeClassic":"Классика",
    "chars.age":"3–12 жас",
    "chars.desc":"Ойындар, мини-квест және фото-сәттер — ұқыпты, көңілді, артық жүктемесіз.",

    "process.title":"Мереке қалай өтеді",
    "process.subtitle":"Үш қадам — балаға арман мереке, ата-анаға тыныштық.",
    "process.s1.title":"1) Детальдарын тез нақтылаймыз",
    "process.s1.text":"Жасы, орны, сүйікті кейіпкері, балалар саны — ең жақсы формат пен сценарий ұсынамыз.",
    "process.s1.c1":"5–10 минут",
    "process.s1.c2":"WhatsApp-та",
    "process.s2.title":"2) Сценарийді “сізге сай” дайындаймыз",
    "process.s2.text":"Сюжет, ойындар, қарқын — жасқа сай. Реквизит таза, музыка алдын ала дайын.",
    "process.s2.c1":"хаоссыз",
    "process.s2.c2":"бәрі қызығады",
    "process.s3.title":"3) Вау-мереке өткіземіз",
    "process.s3.text":"Аниматор назарды ұстайды, ата-ана демалады. Көп фото-сәт пен күлкі.",
    "process.s3.c1":"уақытында",
    "process.s3.c2":"ұқыпты",
    "process.ctaTitle":"Жасыңызға сай сценарий керек пе?",
    "process.ctaText":"Өтінім қалдырыңыз — 2–3 нұсқа ұсынамыз.",
    "process.ctaBtn":"Бағдарлама таңдау",
    "process.ctaBtn2":"Бағаны білу",

    "port.title":"Портфолио",
    "port.subtitle":"Фотоға басыңыз — үлкейіп ашылады. Өз кадрларыңызды және видео-мұқабаларды қосыңыз.",
    "port.tag1":"Туған күн",
    "port.tag2":"Квест",
    "port.tag3":"Көбік шоу",
    "port.tag4":"Өсу бойлы",
    "port.tag5":"Шоу-бағдарлама",
    "port.tag6":"Фото-аймақ",
    "port.note":"Кеңес: 6–12 нақты фото қоссаңыз — сенім бірден өседі.",

    "marq.1":"💎 Премиум стиль",
    "marq.2":"🛡️ Қауіпсіз ойындар",
    "marq.3":"🎭 Жасқа сай сценарий",
    "marq.4":"📸 Әдемі фото-сәттер",
    "marq.5":"⏱️ Уақыттылық",
    "marq.6":"✨ Вау-әсер",

    "final.kicker":"Мерекені уайымсыз жасаймыз",
    "final.title":"Сіз кейіпкерді таңдайсыз — біз вау жасаймыз",
    "final.text":"Өтінім қалдырыңыз — жас, орын және бюджетке сай бағдарлама ұсынамыз.",
    "final.p1":"Қауіпсіз әрі ұқыпты",
    "final.p2":"Балаға сай сценарий",
    "final.p3":"Артық төлемсіз премиум көрініс",
    "final.btn1":"Күнді брондау",
    "final.btn2":"Бағаны есептеу",
    "final.mini":"Тез жауап береміз. Кейіпкер мен форматты таңдауға көмектесеміз.",

  
    "calc.title":"Бағаны есептеу",
    "calc.subtitle":"Жылдам бағалау — бюджетті түсіну үшін.",
    "calc.kidsLabel":"Балалар саны",
    "calc.timeLabel":"Ұзақтығы",
    "calc.time30":"30 минут",
    "calc.time60":"60 минут",
    "calc.time90":"90 минут",
    "calc.foam":"Көбік шоу (+4000 ₸)",
    "calc.charLabel":"Кейіпкер",
    "calc.char0":"Кейіпкерсіз",
    "calc.char1":"Танымал кейіпкер (+3000 ₸)",
    "calc.char2":"Премиум кейіпкер (+5000 ₸)",
    "calc.btn":"Есептеу",
    "calc.resultInit":"Барлығы: —",
    "calc.toForm":"Өтінім қалдыру",
    "calc.note":"*Нақты баға орынға, жасқа және сценарийге байланысты. Детальдарын хабарламада нақтылаймыз.",

    "reviews.title":"Ата-аналардың пікірі",
    "reviews.subtitle":"Шынайы жағдайлар: үйде, залда және үлкен мерекеде.",
    "reviews.r1.text":"«Эльза өте әсерлі болды! Балалар тыңдап, ойнап, күліп отырды. Ата-аналар дем алды 🙂»",
    "reviews.r1.meta":"Марина · 5 жас · Ақсу",
    "reviews.r2.text":"«8 жасқа Өрмекші адамды алдық — супер! Уақытында келді, ұқыпты, бағдарлама өте жақсы.»",
    "reviews.r2.meta":"Игорь · 8 жас · Ақсу",
    "reviews.r3.text":"«Көбік шоу — топ! Әдемі әрі қауіпсіз. Жылдам келістік, бәрін алып келді.»",
    "reviews.r3.meta":"Алия · 7 жас · Ақсу",

    "faq.title":"FAQ",
    "faq.subtitle":"Жиі қойылатын сұрақтарға жауап.",
    "faq.q1":"Қай жастан бастап болады?",
    "faq.a1":"3–12 жасқа жарайды. Сценарийді жасқа сай бейімдейміз.",
    "faq.q2":"Мереке қанша уақытқа созылады?",
    "faq.a2":"Көбіне 60–90 минут. Қалауыңызша қысқа/ұзақ болады.",
    "faq.q3":"Көбік шоу қауіпсіз бе?",
    "faq.a3":"Иә, сертификатталған көбікті қолданамыз және ережені сақтаймыз.",
    "faq.q4":"Бізге бірдеңе дайындау керек пе?",
    "faq.a4":"Жоқ. Біз реквизит пен музыканы алып келеміз. Сізден — орын және көңіл-күй 🙂",
    "faq.q5":"Кейіпкерді таңдауға бола ма?",
    "faq.a5":"Иә. Карточканы бассаңыз, өтінімге автоматты қосылады.",
    "faq.q6":"Қаншалықты тез жауап бересіздер?",
    "faq.a6":"Әдетте жұмыс уақытында 5–30 минут ішінде.",

    "form.title":"Өтінім қалдыру",
    "form.subtitle":"Детальдарын нақтылап, жас пен форматқа сай ең жақсы сценарий ұсынамыз.",
    "form.nameLabel":"Атыңыз",
    "form.namePh":"Мысалы, Алия",
    "form.phoneLabel":"Телефон",
    "form.phonePh":"+7 ...",
    "form.ageLabel":"Баланың жасы",
    "form.agePh":"6",
    "form.dateLabel":"Күні",
    "form.commentLabel":"Пікір",
    "form.commentPh":"Кейіпкер, мекенжай, балалар саны, тілектер…",
    "form.btn":"Өтінімді жіберу",
    "form.note":"Өтінім админкада (браузерде) сақталады. “Кез келген құрылғыдан” өтінім үшін Telegram қосамыз.",
    "form.adminLink":"Өтінімдер админкасын ашу",

    "footer.copy":"© Ақсу аниматорлары",
    "footer.admin":"Админка",

    "mobile.primary":"Брондау",
    "mobile.secondary":"Есептеу",
  }
};

// ====== APPLY TRANSLATION TO ALL ELEMENTS ======
function applyI18n(lang){
  const dict = I18N[lang] || I18N.ru;

  // normal text
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] != null) el.textContent = dict[key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  // mark active
  $("btnRU")?.classList.toggle("chip--active", lang === "ru");
  $("btnKZ")?.classList.toggle("chip--active", lang === "kz");

  // update initial calc text (if still untouched)
  const res = $("result");
  if(res && res.textContent.trim().includes("—")) {
    res.textContent = dict["calc.resultInit"] || res.textContent;
  }

  // store
  localStorage.setItem("lang", lang);
}

function setLang(lang){
  applyI18n(lang);
}

// ====== CALCULATOR ======
function calculate(){
  const kids = Math.max(1, parseInt(($("kids").value || "1"), 10));
  const time = parseInt($("time").value, 10);
  const foam = $("foam").checked ? 4000 : 0;
  const character = parseInt($("character").value, 10);

  const kidsFee = kids * 500;
  const total = time + foam + character + kidsFee;

  const lang = localStorage.getItem("lang") || "ru";
  const label = (lang === "kz") ? "Барлығы" : "Итого";
  $("result").innerText = `${label}: ${total.toLocaleString("ru-RU")} ₸`;
}

// ====== FILTER CHARACTERS ======
function filterChar(type, btn){
  document.querySelectorAll(".charCard").forEach(card=>{
    const ok = type === "all" || card.classList.contains(type);
    card.style.display = ok ? "block" : "none";
  });
  document.querySelectorAll(".filters .chip").forEach(b=>b.classList.remove("chip--active"));
  if(btn) btn.classList.add("chip--active");
}

// ====== CHOOSE CHARACTER -> add to comment, scroll to form ======
function chooseCharacter(name){
  const comment = $("comment");
  const current = (comment.value || "").trim();
  const lang = localStorage.getItem("lang") || "ru";
  const prefix = (lang === "kz") ? "Кейіпкер" : "Персонаж";
  const tag = `${prefix}: ${name}`;

  if(!current.includes(tag)){
    comment.value = current ? `${current}\n${tag}` : tag;
  }
  $("character").value = "3000";
  document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
}

// ====== PREFILL PACKAGE (language-safe keys) ======
function prefillPackage(pkgKey){
  const comment = $("comment");
  const current = (comment.value || "").trim();
  const lang = localStorage.getItem("lang") || "ru";

  const map = {
    MINI: { ru:"Мини", kz:"Мини" },
    CLASSIC: { ru:"Классика", kz:"Классика" },
    PREMIUM: { ru:"Премиум", kz:"Премиум" },
  };

  const label = (lang === "kz") ? "Пакет" : "Пакет";
  const pkg = map[pkgKey]?.[lang] || map[pkgKey]?.ru || pkgKey;
  const tag = `${label}: ${pkg}`;

  if(!current.includes(tag)){
    comment.value = current ? `${current}\n${tag}` : tag;
  }
}

// ====== FORM SUBMIT (localStorage save) ======
function sendForm(e){
  e.preventDefault();

  const order = {
    city: "Аксу",
    name: $("name").value.trim(),
    phone: $("phone").value.trim(),
    age: ($("age").value || "").trim(),
    date: ($("date").value || "").trim(),
    comment: ($("comment").value || "").trim(),
    createdAt: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  const lang = localStorage.getItem("lang") || "ru";
  alert(lang === "kz" ? "Өтінім жіберілді! 😊" : "Заявка отправлена! 😊");

  e.target.reset();
}

// ====== QUICK LEAD ======
function quickLead(e){
  e.preventDefault();
  const phone = $("qPhone").value.trim();

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push({
    city: "Аксу",
    name: "Quick lead",
    phone,
    age:"",
    date:"",
    comment:"",
    createdAt: new Date().toISOString()
  });
  localStorage.setItem("orders", JSON.stringify(orders));

  const lang = localStorage.getItem("lang") || "ru";
  alert(lang === "kz" ? "Рахмет! WhatsApp-та жазамыз 😊" : "Спасибо! Напишем вам в WhatsApp 😊");

  e.target.reset();
}

// ====== FAQ ======
function toggleFaq(btn){
  const body = btn.nextElementSibling;
  const isOpen = body.style.display === "block";

  document.querySelectorAll(".faqBody").forEach(b=>b.style.display="none");
  document.querySelectorAll(".faqItem i").forEach(i=>i.textContent="+");

  if(!isOpen){
    body.style.display = "block";
    const icon = btn.querySelector("i");
    if(icon) icon.textContent = "–";
  }
}

// ====== SCROLL REVEAL ======
// ===== Smooth reveal + stagger =====
(function initReveal(){
  const revealEls = document.querySelectorAll(
    ".section, .trustCard, .cardLux, .charCard, .charCardLux, .calc, .formLux, .review, .priceCard, .hero__card, .finalCta, .stepLux, .portItem"
  );
  revealEls.forEach(el => el.classList.add("reveal"));

  // Stagger on grids (lux)
  const grids = document.querySelectorAll(".grid3, .gridPricing, .gridChars, .gridChars--lux, .gridReviews, .trust__grid, .portGrid, .stepsLux");
  grids.forEach(g => g.classList.add("stagger"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  revealEls.forEach(el => io.observe(el));
  grids.forEach(el => io.observe(el));
})();

// init language
(function initLang(){
  const saved = localStorage.getItem("lang");
  setLang(saved === "kz" ? "kz" : "ru");
})();
// ===== Character preview modal =====
function openCharPreview(name, imgSrc){
  const modal = document.getElementById("charModal");
  const title = document.getElementById("charModalTitle");
  const img = document.getElementById("charModalImg");
  const chooseBtn = document.getElementById("charModalChoose");

  if(!modal || !title || !img || !chooseBtn) return;

  title.textContent = name;
  img.src = imgSrc;
  img.alt = name;

  chooseBtn.onclick = () => {
    chooseCharacter(name);
    closeCharPreview();
  };

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCharPreview(){
  const modal = document.getElementById("charModal");
  if(!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") closeCharPreview();
});
// ===== Portfolio modal =====
function openPort(src){
  const modal = document.getElementById("portModal");
  const img = document.getElementById("portImg");
  if(!modal || !img) return;

  img.src = src;
  img.alt = "Portfolio image";
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closePort(){
  const modal = document.getElementById("portModal");
  if(!modal) return;

  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape") {
    closePort();
    // если есть и модалка персонажей — тоже закрываем
    if(typeof closeCharPreview === "function") closeCharPreview();
  }
});
function showToast(text){
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = text;
  t.setAttribute("aria-hidden","false");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.setAttribute("aria-hidden","true"), 2200);
}

// Подключаем к выбору героя (добавь внутрь chooseCharacter в конце)
(function hookToast(){
  const _choose = window.chooseCharacter;
  if(typeof _choose !== "function") return;

  window.chooseCharacter = function(name){
    _choose(name);
    const lang = localStorage.getItem("lang") || "ru";
    showToast(lang === "kz" ? `Таңдалды: ${name}` : `Вы выбрали: ${name}`);
  };
})();
(function initShimmer(){
  const hs = document.querySelectorAll(".shimmer");
  if(!hs.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.6 });

  hs.forEach(h=>io.observe(h));
})();
// ===== Auto-apply luxHover to all cards (no HTML edits) =====
(function autoLuxHover(){
  const selectors = [
    ".trustCard",
    ".cardLux",
    ".priceCard",
    ".charCard",
    ".charCardLux",
    ".review",
    ".stepLux",
    ".statCard",
    ".portItem",
    ".hero__card",
    ".calc",
    ".formLux",
    ".finalCta"
  ];

  const els = document.querySelectorAll(selectors.join(","));
  els.forEach(el => el.classList.add("luxHover"));

  // Optional: also add glowCard spotlight automatically
  const glowTargets = document.querySelectorAll([
    ".trustCard", ".cardLux", ".priceCard", ".charCardLux", ".review", ".stepLux", ".statCard", ".portItem"
  ].join(","));
  glowTargets.forEach(el => el.classList.add("glowCard"));
})();
// ===== 3D tilt only on desktop (nice + safe) =====
(function initTiltDesktop(){
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  if(isTouch) return;

  const cards = document.querySelectorAll(".luxHover");
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  cards.forEach(card=>{
    card.addEventListener("mousemove", (e)=>{
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const rx = clamp((0.5 - py) * 7, -5, 5);
      const ry = clamp((px - 0.5) * 9, -7, 7);

      card.style.transform =
        `translateY(-6px) scale(1.01) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener("mouseleave", ()=>{
      card.style.transform = "";
    });
  });
})();
// ===== Auto placeholder + blur-up load for images =====
(function autoImgEnhance(){
  // какие картинки улучшаем (персонажи + портфолио; добавь селекторы при желании)
  const targets = document.querySelectorAll(
    "#characters img, #portfolio img, .charMedia img, .portItem img"
  );

  if(!targets.length) return;

  // SVG-заглушка с именем (подставляем текст из alt или data-name)
  function makePlaceholder(label){
    const safe = (label || "Фото").toString().slice(0, 28);
    const svg =
`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200">
  <defs>
    <radialGradient id="g1" cx="20%" cy="10%" r="70%">
      <stop offset="0%" stop-color="rgba(255,77,109,0.55)"/>
      <stop offset="60%" stop-color="rgba(255,77,109,0)"/>
    </radialGradient>
    <radialGradient id="g2" cx="85%" cy="30%" r="70%">
      <stop offset="0%" stop-color="rgba(124,58,237,0.55)"/>
      <stop offset="60%" stop-color="rgba(124,58,237,0)"/>
    </radialGradient>
  </defs>

  <rect width="100%" height="100%" fill="#0b0f1a"/>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>
  <rect x="60" y="60" width="1080" height="1080" rx="120" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)"/>

  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        font-size="64" fill="rgba(255,255,255,0.92)" font-weight="800">
    ${escapeXml(safe)}
  </text>
  <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        font-size="34" fill="rgba(255,255,255,0.70)">
    Нет фото — добавьте в assets
  </text>
</svg>`;

    // data:image/svg+xml URI
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function escapeXml(str){
    return str.replace(/[<>&'"]/g, s => ({
      "<":"&lt;", ">":"&gt;", "&":"&amp;", "'":"&apos;", "\"":"&quot;"
    }[s]));
  }

  function setLoaded(img){
    img.classList.remove("imgBlur");
    img.classList.add("imgSharp");
  }

  function setLoading(img){
    img.classList.add("imgBlur");
    img.classList.remove("imgSharp");
  }

  function setFallback(img){
    const label = img.getAttribute("alt") || img.dataset.name || "Фото";
    img.classList.add("imgFallback");
    img.src = makePlaceholder(label);
    // заглушка сразу “резкая”
    img.classList.remove("imgBlur");
    img.classList.add("imgSharp");
  }

  targets.forEach(img => {
    // добавим ленивую загрузку, если не указано
    if(!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");

    // если src пустой — сразу заглушка
    const src = (img.getAttribute("src") || "").trim();
    if(!src){
      setFallback(img);
      return;
    }

    // делаем blur пока грузится
    setLoading(img);

    // если уже загружено из кэша
    if(img.complete && img.naturalWidth > 0){
      setLoaded(img);
    }

    img.addEventListener("load", () => setLoaded(img), { once: true });

    img.addEventListener("error", () => {
      // если файл не найден / ошибка — ставим заглушку
      setFallback(img);
    }, { once: true });
  });
})();
