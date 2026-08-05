// Data Pinyin & Arti per paragraf
const extraData = [
    { ruby: "<ruby>傍晚<rt>bàngwǎn</rt></ruby>。", trans: "Sore hari." },
    { ruby: "<ruby>一个<rt>yī gè</rt></ruby><ruby>小男孩<rt>xiǎo nánhái</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>一个<rt>yī gè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>玩<rt>wán</rt></ruby>。", trans: "Anak laki-laki kecil dan anak perempuan kecil sedang bermain di taman." },
    { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>一起<rt>yīqǐ</rt></ruby><ruby>跑<rt>pǎo</rt></ruby>，<ruby>一起<rt>yīqǐ</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Mereka berlari bersama dan tertawa bersama." },
    { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>一起<rt>yīqǐ</rt></ruby><ruby>荡秋千<rt>dàng qiūqiān</rt></ruby>。", trans: "Mereka main ayunan bersama." },
    { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>一起<rt>yīqǐ</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>冰淇淋<rt>bīngqílín</rt></ruby>。", trans: "Mereka makan es krim bersama." },
    { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>玩<rt>wán</rt></ruby><ruby>得<rt>de</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>开心<rt>kāixīn</rt></ruby>。", trans: "Mereka bermain dengan sangat senang." },
    { ruby: "<ruby>时间<rt>shíjiān</rt></ruby><ruby>过<rt>guò</rt></ruby><ruby>得<rt>de</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>快<rt>kuài</rt></ruby>。", trans: "Waktu berlalu sangat cepat." },
    { ruby: "<ruby>天<rt>tiān</rt></ruby><ruby>快<rt>kuài</rt></ruby><ruby>黑<rt>hēi</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Hari mulai gelap." },
    { ruby: "<ruby>一个<rt>yī gè</rt></ruby><ruby>男人<rt>nánrén</rt></ruby><ruby>大声<rt>dàshēng</rt></ruby><ruby>说<rt>shuō</rt></ruby>：", trans: "Seorang pria berkata dengan suara keras:" },
    { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>，<ruby>回家<rt>huíjiā</rt></ruby><ruby>吧<rt>ba</rt></ruby>！”", trans: "“Wenjun, ayo pulang!”" },
    { ruby: "<ruby>小男孩<rt>xiǎo nánhái</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>那个<rt>nàgè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Anak laki-laki kecil itu menatap anak perempuan kecil itu." },
    { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>回家<rt>huíjiā</rt></ruby><ruby>了<rt>le</rt></ruby>。”", trans: "“Aku harus pulang.”" },
    { ruby: "<ruby>小女孩<rt>xiǎo nǚhái</rt></ruby><ruby>笑着<rt>xiàozhe</rt></ruby><ruby>点点头<rt>diǎndiǎn tóu</rt></ruby>。", trans: "Anak perempuan kecil itu tersenum dan mengangguk." },
    { ruby: "“<ruby>好<rt>hǎo</rt></ruby>，<ruby>下次<rt>xiàcì</rt></ruby><ruby>见<rt>jiàn</rt></ruby>。”", trans: "“Baik, sampai jumpa lagi.”" },
    { ruby: "<ruby>小男孩<rt>xiǎo nánhái</rt></ruby><ruby>也<rt>yě</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Anak laki-laki kecil itu juga tersenyum." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>转身<rt>zhuǎnshēn</rt></ruby><ruby>准备<rt>zhǔnbèi</rt></ruby><ruby>离开<rt>líkāi</rt></ruby>。", trans: "Dia berbalik bersiap untuk pergi." },
    { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>刚<rt>gāng</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>几<rt>jǐ</rt></ruby><ruby>步<rt>bù</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>突然<rt>tūrán</rt></ruby><ruby>停<rt>tíng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>下来<rt>xiàlái</rt></ruby>。", trans: "Namun, baru melangkah beberapa langkah, dia tiba-tiba berhenti." },
    { ruby: "“<ruby>对<rt>duì</rt></ruby><ruby>了<rt>le</rt></ruby>！”", trans: "“Oh iya!”" },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>回头<rt>huítóu</rt></ruby>。", trans: "Dia segera menoleh ke belakang." },
    { ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>叫<rt>jiào</rt></ruby><ruby>什么<rt>shénme</rt></ruby><ruby>名字<rt>míngzì</rt></ruby>？”", trans: "“Siapa namamu?”" },
    { ruby: "<ruby>小女孩<rt>xiǎo nǚhái</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>他<rt>tā</rt></ruby>。", trans: "Anak perempuan kecil itu menatapnya." },
    { ruby: "<ruby>风<rt>fēng</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>吹着<rt>chuīzhe</rt></ruby>。", trans: "Angin berembus perlahan." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", trans: "Dia tersenyum sedikit." },
    { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>叫<rt>jiào</rt></ruby>……”", trans: "“Namaku...”" },
    { ruby: "“<ruby>铃<rt>líng</rt></ruby>——<ruby>铃<rt>líng</rt></ruby>——<ruby>铃<rt>líng</rt></ruby>——”", trans: "“Kring—kring—kring—”" },
    { ruby: "<ruby>闹钟<rt>nàozhōng</rt></ruby><ruby>突然<rt>tūrán</rt></ruby><ruby>响<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Jam waker tiba-tiba berbunyi." },
    { ruby: "<ruby>一个<rt>yī gè</rt></ruby><ruby>少年<rt>shàonián</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>睁开<rt>zhēng kāi</rt></ruby><ruby>眼睛<rt>yǎnjīng</rt></ruby>。", trans: "Seorang pemuda perlahan membuka matanya." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>起来<rt>qǐlái</rt></ruby>。", trans: "Dia duduk." },
    { ruby: "<ruby>刚才<rt>gāngcái</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>梦<rt>mèng</rt></ruby><ruby>还是<rt>háishì</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>清楚<rt>qīngchǔ</rt></ruby>。", trans: "Mimpi tadi masih sangat jelas." },
    { ruby: "<ruby>那个<rt>nàgè</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby>。", trans: "Taman itu." },
    { ruby: "<ruby>那个<rt>nàgè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Anak perempuan kecil itu." },
    { ruby: "<ruby>还有<rt>háiyǒu</rt></ruby><ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Dan juga senyumannya." },
    { ruby: "“<ruby>她<rt>tā</rt></ruby>……<ruby>叫<rt>jiào</rt></ruby><ruby>什么<rt>shénme</rt></ruby><ruby>名字<rt>míngzì</rt></ruby>？”", trans: "“Dia... siapa namanya?”" },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yīhuǐ'er</rt></ruby>。", trans: "Dia berpikir sejenak." },
    { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>还是<rt>háishì</rt></ruby><ruby>想不起来<rt>xiǎng bù qǐlái</rt></ruby>。", trans: "Namun, dia tetap tidak bisa mengingatnya." },
    { ruby: "<ruby>最后<rt>zuìhòu</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>轻轻<rt>qīngqīng</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", trans: "Akhirnya, dia tersenyum tipis." },
    { ruby: "“<ruby>又<rt>yòu</rt></ruby><ruby>忘<rt>wàng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>吗<rt>ma</rt></ruby>……”", trans: "“Lupa lagi ya...”" },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>床<rt>chuáng</rt></ruby>。", trans: "Dia turun dari tempat tidur." },
    { ruby: "<ruby>新<rt>xīn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>一天<rt>yī tiān</rt></ruby><ruby>开始<rt>kāishǐ</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Hari yang baru telah dimulai." }
];

document.addEventListener("DOMContentLoaded", function () {
    // 1. Buat Toolbar Kontrol Toggle
    var chapterHeader = document.querySelector(".chapter-header");
    var controlBox = document.createElement("div");
    controlBox.className = "reading-controls";
    controlBox.innerHTML = 
        '<button id="togglePinyin" class="btn-control active">拼 Pinyin: ON</button>' +
        '<button id="toggleTrans" class="btn-control active">文 Arti: ON</button>' +
        '<span class="audio-tip">💡 Klik kalimat untuk dengar suara</span>';
    
    if (chapterHeader) {
        chapterHeader.after(controlBox);
    }

    // 2. Format Paragraf Cerita & Pasang Event Suara
    var paragraphs = document.querySelectorAll(".story-content p:not(.scene-break)");
    paragraphs.forEach(function (p, index) {
        if (extraData[index]) {
            var rawText = p.innerText;
            p.classList.add("para-block");
            
            p.onclick = function () {
                playAudio(rawText);
            };

            p.innerHTML = 
                '<div class="hanzi-ruby zh-text">' + extraData[index].ruby + '</div>' +
                '<div class="translation">' + extraData[index].trans + '</div>';
        }
    });

    // 3. Logic Toggle Pinyin
    var btnPinyin = document.getElementById("togglePinyin");
    if (btnPinyin) {
        btnPinyin.onclick = function () {
            document.body.classList.toggle("hide-pinyin");
            var isActive = !document.body.classList.contains("hide-pinyin");
            btnPinyin.classList.toggle("active", isActive);
            btnPinyin.innerText = "拼 Pinyin: " + (isActive ? "ON" : "OFF");
        };
    }

    // 4. Logic Toggle Arti / Terjemahan
    var btnTrans = document.getElementById("toggleTrans");
    if (btnTrans) {
        btnTrans.onclick = function () {
            document.body.classList.toggle("hide-trans");
            var isActive = !document.body.classList.contains("hide-trans");
            btnTrans.classList.toggle("active", isActive);
            btnTrans.innerText = "文 Arti: " + (isActive ? "ON" : "OFF");
        };
    }
});

// Pemutar Suara
function playAudio(text) {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}