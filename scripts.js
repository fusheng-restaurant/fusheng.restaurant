// Language data
const translations = {
    en: {
        title: "Fusheng Chinese Cuisine & Bar",
        welcomeMessage: "Authentic flavors in the heart of Düsseldorf",
        reserveButton: "Make a Reservation",
        aboutLink: "About Us",
        menuLink: "Menu",
        menuButton: "Download menu as PDF",
        parkingLink: "Arrival",
        contactLink: "Contact",
        imprintLink: "Imprint",
        aboutTitle: "Welcome to Fusheng Chinese Cuisine & Bar",
        aboutDescription: "Experience authentic Asian cuisine in a modern and welcoming atmosphere.",
        menuTitle: "Our Menu",
        menuDescription: "Explore our rich and diverse menu of traditional and contemporary Chinese dishes.",
        parkingTitle: "Arrival & Parking",
        parkingDescription: "At Belsenplatz, the subway lines U70, U75, U76, and U77 stop, as well as bus lines M3, 828, 833, 834, 835, 836, 862, and 805. By car, public parking spaces in the surrounding area can be used. Additionally, the BelsenPark parking garage with entrance at Greifweg is just a few minutes’ walk away.",
        contactTitle: "Contact Us",
    },
    de: {
        title: "Fusheng Chinesische Küche & Bar",
        welcomeMessage: "Authentische Aromen im Herzen von Düsseldorf",
        reserveButton: "Reservierung vornehmen",
        aboutLink: "Über uns",
        menuLink: "Speisekarte",
        menuButton: "Speisekarte als PDF herunterladen",
        parkingLink: "Anreise",
        contactLink: "Kontakt",
        imprintLink: "Impressum",
        aboutTitle: "Willkommen bei FuSheng Chinese Cuisine & Bar",
        aboutDescription: "Erleben Sie authentische asiatische Küche in einer modernen und einladenden Atmosphäre.",
        menuTitle: "Unsere Speisekarte",
        menuDescription: "Entdecken Sie unsere vielfältige Speisekarte mit traditionellen und modernen chinesischen Gerichten.",
        parkingTitle: "Anreise & Parken",
        parkingDescription: "Am Belsenplatz halten die Stadtbahn Linien U70, U75, U76 und U77, sowie die Buslinien M3, 828, 833, 834, 835, 836, 862 und 805. Mit dem Auto können öffentliche Parkplätze im Umkreis genutzt werden. Außerdem gibt es das BelsenPark Parkhaus mit Einfahrt Greifweg wenige Gehminuten entfernt.",
        contactTitle: "Kontakt",
    },
    zh: {
        title: "福生中餐与酒吧",
        welcomeMessage: "德国杜塞尔多夫市中心的地道风味",
        reserveButton: "预订座位",
        aboutLink: "关于我们",
        menuLink: "菜单",
        menuButton: "下载PDF菜单",
        parkingLink: "到达方式",
        contactLink: "联系我们",
        imprintLink: "法律声明",
        aboutTitle: "欢迎来到福生",
        aboutDescription: "在现代和温馨的氛围中体验正宗的亚洲美食。",
        menuTitle: "我们的菜单",
        menuDescription: "探索我们的丰富多样的传统和现代中餐菜单。",
        parkingTitle: "停车和到达",
        parkingDescription: "在Belsenplatz，城市轻轨线路U70、U75、U76和U77停靠，公交线路M3、828、833、834、835、836、862和805也经过此处。开车的话，可以使用附近的公共停车场。此外，距离这里几分钟步行路程的Greifweg入口处有BelsenPark停车楼。",
        contactTitle: "联系我们",
    },
    jp: {
        title: "福生中華料理＆バー",
        welcomeMessage: "ドイツ・デュッセルドルフ中心で本格的な味を体験",
        reserveButton: "予約する",
        aboutLink: "私たちについて",
        menuLink: "メニュー",
        menuButton: "PDFメニューをダウンロード",
        parkingLink: "アクセス",
        contactLink: "お問い合わせ",
        imprintLink: "インプリント",
        aboutTitle: "福生へようこそ",
        aboutDescription: "モダンで心地よい空間で本格的なアジア料理をお楽しみください。",
        menuTitle: "メニュー",
        menuDescription: "豊かで多様な伝統的および現代的な中華料理のメニューをご覧ください。",
        parkingTitle: "駐車場とアクセス",
        parkingDescription: "在Belsenplatz，城市轻轨线路U70、U75、U76和U77停靠，公交线路M3、828、833、834、835、836、862和805也经过此处。开车的话，可以使用附近的公共停车场。此外，距离这里几分钟步行路程的Greifweg入口处有BelsenPark停车楼。",
        contactTitle: "お問い合わせ",
    }
};

// Function to set language
function setLanguage(lang) {
    const content = translations[lang] || translations.en;
    for (const key in content) {
        const element = document.getElementById(key);
        if (element) element.textContent = content[key];
    }

    const langLink = document.getElementById("lang-" + lang)
    if (langLink) langLink.classList.add("active")
}

// Get lang parameter from URL and set language
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'en';
setLanguage(lang);
