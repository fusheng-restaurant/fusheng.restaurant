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
        title: "富生餐厅酒吧",
        welcomeMessage: "位于德国杜塞尔多夫市中心的地道风味",
        reserveButton: "预订座位",
        aboutLink: "预订座位",
        menuLink: "菜单",
        menuButton: "下载PDF菜单",
        parkingLink: "到达方式",
        contactLink: "联系我们",
        imprintLink: "法律声明",
        aboutTitle: "欢迎来到富生",
        aboutDescription: "在现代与温馨的氛围中体验正宗的中国美食。",
        menuTitle: "我们的菜单",
        menuDescription: "品尝我们丰富多样，传统与现代结合的中餐。",
        parkingTitle: "停车和到达",
        parkingDescription: "在Belsenplatz，城市轻轨线路U70、U75、U76和U77停靠，公交线路M3、828、833、834、835、836、862和805也经过此处。开车的话，可以使用附近的公共停车场。此外，距离这里几分钟步行路程的Greifweg入口处有BelsenPark停车楼。",
        contactTitle: "联系我们",
    },
    jp: {
        title: "FuSheng レストラン&バー」",
        welcomeMessage: "ドイツ、デュッセルドルフの中心部で本物の味を味わう",
        reserveButton: "座席を予約する",
        aboutLink: "私たちに関しては",
        menuLink: "メニュー",
        menuButton: "PDFメニューをダウンロード",
        parkingLink: "到着方法",
        contactLink: "お問い合わせ",
        imprintLink: "法律上の通知",
        aboutTitle: "FuShengへようこそ",
        aboutDescription: "モダンで温かみのある雰囲気の中で本格的な中華料理をご体験ください。",
        menuTitle: "当店のメニュー",
        menuDescription: "伝統と現代を組み合わせた豊かでバラエティに富んだ中華料理をご堪能ください。",
        parkingTitle: "パーク&アライバル",
        parkingDescription: "ベルゼンプラッツでは、市内のライトレールU70、U75、U76、U77が停車します M3、828、833、834、835、836、862、805のバス路線もここを通過します。 運転する場合は、近くに公共駐車場があります。 また、徒歩数分のところにグライフヴェークへの入り口がありますベルゼンパーク駐車場ビル。",
        contactTitle: "お問い合わせ",
    }
};

// Function to set language
function setLanguage(lang) {
    const content = translations[lang] || translations.de;
    for (const key in content) {
        const element = document.getElementById(key);
        if (element) element.textContent = content[key];
    }

    const langLink = document.getElementById("lang-" + lang)
    if (langLink) langLink.classList.add("active")
}

// Get lang parameter from URL and set language
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'de';
setLanguage(lang);
