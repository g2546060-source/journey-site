const spots = {
    tokyo: [
        {
            name: "浅草寺",
            description: "東京を代表する歴史あるお寺。仲見世通りで食べ歩きも楽しめます。",
            image: "./media2/浅草.jpeg"
        },
        {
            name: "東京スカイツリー",
            description: "東京の街並みを一望できる人気の展望スポットです。",
            image: "./media2/スカイツリー_.jpeg"
        },
        {
            name: "渋谷",
            description: "多くの人が行き交う東京を代表する観光スポットです。",
            image: "./media2/渋谷.jpeg"
        },
        {
            name: "上野公園",
            description: "自然や美術館、博物館を楽しめる人気の公園です。",
            image: "./media2/上野.jpeg"
        }
    ],

    kyoto: [
        {
            name: "清水寺",
            description: "京都を代表する有名なお寺です。",
            image: "./media2/清水寺.jpeg"
        },
        {
            name: "伏見稲荷大社",
            description: "朱色の千本鳥居が有名な神社です。",
            image: "./media2/伏見稲荷.jpeg"
        },
        {
            name: "嵐山",
            description: "竹林や川など、自然豊かな景色を楽しめます。",
            image: "./media2/嵐山.jpeg"
        }
    ],

    osaka: [
        {
            name: "道頓堀",
            description: "たこ焼きやお好み焼きなど大阪グルメを楽しめます。",
            image: "./media2/道頓堀.jpeg"
        },
        {
            name: "大阪城",
            description: "歴史を感じられる大阪の代表的な観光地です。",
            image: "./media2/大阪城.jpeg"
        }
    ],

    fukuoka: [
        {
            name: "博多屋台",
            description: "ラーメンなど福岡のグルメを楽しめる人気スポットです。",
            image: "./media2/博多屋台.jpeg"
        },
        {
            name: "太宰府天満宮",
            description: "学問の神様として知られる歴史ある神社です。",
            image: "./media2/太宰府天満宮.jpeg"
        },
        {
            name: "糸島",
            description: "海や自然の美しい景色が楽しめる人気エリアです。",
            image: "./media2/糸島.jpeg"
        },
        {
            name: "福岡タワー",
            description: "福岡の街と海を一望できる展望スポットです。",
            image: "./media2/福岡タワー_.jpeg"
        }
    ],

    okinawa: [
        {
            name: "美ら海水族館",
            description: "ジンベエザメなど多くの海の生き物に出会えます。",
            image: "./media2/美ら海.jpeg"
        },
        {
            name: "古宇利島",
            description: "透明度の高い海と美しい橋が魅力の観光地です。",
            image: "./media2/古宇利島.jpeg"
        },
        {
            name: "首里城",
            description: "琉球王国の歴史や文化を感じられる場所です。",
            image: "./media2/首里城.jpeg"
        }
    ]
};

// HTMLの読み込みが完了してから実行
document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("createBtn");
    const destinationSelect = document.getElementById("destination");
    const nightsSelect = document.getElementById("nights");
    const message = document.getElementById("message");
    const result = document.getElementById("result");

    // 必要なHTML要素があるか確認
    if (!button || !destinationSelect || !nightsSelect || !message || !result) {
        console.error("HTMLのIDが一致していません。index.htmlを確認してください。");
        return;
    }

    // ボタンを押したときの処理
    button.addEventListener("click", function () {

        const destination = destinationSelect.value;
        const nights = Number(nightsSelect.value);

        // 選択した場所の観光地を取得
        let selectedSpots = spots[destination];

        if (!selectedSpots || selectedSpots.length === 0) {
            message.textContent = "観光地が見つかりませんでした。";
            result.innerHTML = "";
            return;
        }

        // 泊数 + 1日分の観光地を用意
        const numberOfDays = nights + 1;

        // 観光地をランダムに並べ替える
        selectedSpots = [...selectedSpots].sort(function () {
            return Math.random() - 0.5;
        });

        // 旅行日数に合わせて選択
        selectedSpots = selectedSpots.slice(0, numberOfDays);

        // 結果を表示
        message.textContent =
            nights === 0
                ? "日帰り旅行プラン！"
                : nights + "泊" + numberOfDays + "日の旅行プラン！";

        result.innerHTML = "";

        selectedSpots.forEach(function (spot, index) {

            const card = document.createElement("div");
            card.className = "spot-card";

            card.innerHTML = `
                <img src="${spot.image}" alt="${spot.name}"
                     onerror="this.style.display='none'">

                <div class="spot-info">
                    <h3>${index + 1}日目：${spot.name}</h3>
                    <p>${spot.description}</p>
                </div>
            `;

            result.appendChild(card);
        });

    });

    console.log("TabiTuneのJavaScriptが正常に読み込まれました！");
});