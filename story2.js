// Data Pinyin & Arti per paragraf untuk Chapter 2
var extraData2 = [
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>床<rt>chuáng</rt></ruby><ruby>上<rt>shang</rt></ruby>。", trans: "Wenjun duduk di atas tempat tidur." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>还<rt>hái</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>刚才<rt>gāngcái</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>梦<rt>mèng</rt></ruby>。", trans: "Dia masih memikirkan mimpi tadi." },
    { ruby: "<ruby>梦里<rt>mèng lǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>那个<rt>nàgè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Anak perempuan kecil di dalam mimpi itu." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Senyumannya." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", trans: "Suaranya." },
    { ruby: "<ruby>还有<rt>háiyǒu</rt></ruby>……", trans: "Dan juga..." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>名字<rt>míngzì</rt></ruby>。", trans: "Namanya." },
    { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>还是<rt>háishì</rt></ruby><ruby>想不起来<rt>xiǎng bù qǐlái</rt></ruby>。", trans: "Namun, dia tetap tidak bisa mengingatnya." },
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>叹<rt>tàn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一口气<rt>yī kǒu qì</rt></ruby>。", trans: "Wenjun menghela napas pelan." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>桌子<rt>zhuōzi</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>抽屉<rt>chōuti</rt></ruby>。", trans: "Dia membuka laci meja." },
    { ruby: "<ruby>里面<rt>lǐmiàn</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一本<rt>yī běn</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Di dalamnya ada sebuah buku gambar." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby>。", trans: "Dia membukanya perlahan." },
    { ruby: "<ruby>第一页<rt>dì-yī yè</rt></ruby>。", trans: "Halaman pertama." },
    { ruby: "<ruby>第二页<rt>dì-èr yè</rt></ruby>。", trans: "Halaman kedua." },
    { ruby: "<ruby>第三页<rt>dì-sān yè</rt></ruby>。", trans: "Halaman ketiga." },
    { ruby: "……", trans: "..." },
    { ruby: "<ruby>每一页<rt>měi yī yè</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一个<rt>yī gè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Setiap halaman terdapat gambar seorang anak perempuan kecil." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Dia sedang tersenyum." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>玩<rt>wán</rt></ruby>。", trans: "Dia sedang bermain di taman." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>荡秋千<rt>dàng qiūqiān</rt></ruby>。", trans: "Dia sedang bermain ayunan." },
    { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>冰淇淋<rt>bīngqílín</rt></ruby>。", trans: "Dia sedang makan es krim." },
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>安静地<rt>ānjìng de</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>那些<rt>nàxiē</rt></ruby><ruby>画<rt>huà</rt></ruby>。", trans: "Wenjun menatap gambar-gambar itu dengan tenang." },
    { ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yīhuǐ'er</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>说<rt>shuō</rt></ruby>：", trans: "Setelah beberapa saat, dia berkata dengan pelan:" },
    { ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>到底<rt>dàodǐ</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>谁<rt>shéi</rt></ruby>……”", trans: "“Sebenarnya kamu siapa...”" },
    { ruby: "<ruby>就<rt>jiù</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>这时<rt>zhèshí</rt></ruby>。", trans: "Tepat pada saat itu." },
    { ruby: "<ruby>楼下<rt>lóuxià</rt></ruby><ruby>传来<rt>chuánlái</rt></ruby><ruby>妈妈<rt>māma</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", trans: "Dari lantai bawah terdengar suara ibu." },
    { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>！<ruby>快一点<rt>kuài yīdiǎn</rt></ruby>！<ruby>要<rt>yào</rt></ruby><ruby>迟到<rt>chídào</rt></ruby><ruby>了<rt>le</rt></ruby>！”", trans: "“Wenjun! Cepat sedikit! Nanti terlambat!”" },
    { ruby: "“<ruby>来<rt>lái</rt></ruby><ruby>了<rt>le</rt></ruby>！”", trans: "“Iya, datang!”" },
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>关上<rt>guānshàng</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Wenjun segera menutup buku gambarnya." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>背起<rt>bēiqǐ</rt></ruby><ruby>书包<rt>shūbāo</rt></ruby>，<ruby>跑<rt>pǎo</rt></ruby><ruby>出<rt>chū</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>房间<rt>fángjiān</rt></ruby>。", trans: "Dia menggendong tas sekolahnya dan berlari keluar kamar." },
    { ruby: "<ruby>学校<rt>xuéxiào</rt></ruby><ruby>还是<rt>háishì</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>平常<rt>píngcháng</rt></ruby><ruby>一样<rt>yīyàng</rt></ruby>。", trans: "Sekolah masih sama seperti biasanya." },
    { ruby: "<ruby>老师<rt>lǎoshī</rt></ruby><ruby>上课<rt>shàngkè</rt></ruby>。", trans: "Guru mengajar." },
    { ruby: "<ruby>同学<rt>tóngxué</rt></ruby><ruby>聊天<rt>liáotiān</rt></ruby>。", trans: "Teman-teman mengobrol." },
    { ruby: "<ruby>一切<rt>yíqiè</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>变化<rt>biànhuà</rt></ruby>。", trans: "Semuanya tidak ada perubahan." },
    { ruby: "<ruby>下课<rt>xiàkè</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>时候<rt>shíhòu</rt></ruby>。", trans: "Saat jam istirahat tiba." },
    { ruby: "<ruby>一个<rt>yī gè</rt></ruby><ruby>男同学<rt>nántóngxué</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>过来<rt>guòlái</rt></ruby>。", trans: "Seorang teman laki-laki berjalan mendekat." },
    { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>，<ruby>这是<rt>zhè shì</rt></ruby><ruby>什么<rt>shénme</rt></ruby>？”", trans: "“Wenjun, ini apa?”" },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>拿起<rt>náqǐ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>桌子<rt>zhuōzi</rt></ruby><ruby>上<rt>shang</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Dia mengambil buku gambar di atas meja." },
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>吓了一跳<rt>xià le yī tiào</rt></ruby>。", trans: "Wenjun terkejut." },
    { ruby: "“<ruby>还给<rt>huán gěi</rt></ruby><ruby>我<rt>wǒ</rt></ruby>！”", trans: "“Kembalikan padaku!”" },
    { ruby: "<ruby>男同学<rt>nántóngxué</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Teman laki-laki itu membuka buku gambar." },
    { ruby: "“<ruby>这个<rt>zhège</rt></ruby><ruby>女孩<rt>nǚhái</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>谁<rt>shéi</rt></ruby>？”", trans: "“Anak perempuan ini siapa?”" },
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>安静<rt>ānjìng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yīhuǐ'er</rt></ruby>。", trans: "Wenjun terdiam sejenak." },
    { ruby: "<ruby>然后<rt>ránhòu</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", trans: "Lalu dia tersenyum tipis." },
    { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>不<rt>bù</rt></ruby><ruby>知道<rt>zhīdào</rt></ruby>。”", trans: "“Aku tidak tahu.”" },
    { ruby: "<ruby>男同学<rt>nántóngxué</rt></ruby><ruby>愣住了<rt>lèngzhù le</rt></ruby>。", trans: "Teman laki-laki itu tertegun." },
    { ruby: "“<ruby>真的<rt>zhēn de</rt></ruby><ruby>吗<rt>ma</rt></ruby>？”", trans: "“Benarkah?”" },
    { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>点点<rt>diǎndiǎn</rt></ruby><ruby>头<rt>tóu</rt></ruby>。", trans: "Wenjun mengangguk." },
    { ruby: "“<ruby>真的<rt>zhēn de</rt></ruby>。”", trans: "“Beneran.”" },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>真的<rt>zhēn de</rt></ruby><ruby>不<rt>bù</rt></ruby><ruby>知道<rt>zhīdào</rt></ruby>。", trans: "Dia benar-benar tidak tahu." },
    { ruby: "<ruby>可是<rt>kěshì</rt></ruby>……", trans: "Namun..." },
    { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>还是<rt>háishì</rt></ruby><ruby>一直<rt>yīzhí</rt></ruby><ruby>画着<rt>huàzhe</rt></ruby><ruby>她<rt>tā</rt></ruby>。", trans: "Dia tetap terus menggambarnya." }
];

document.addEventListener("DOMContentLoaded", function () {
    // 1. Buat Toolbar Toggle
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

    // 2. Inject Data Pinyin & Translation
    var paragraphs = document.querySelectorAll(".story-content p");
    paragraphs.forEach(function (p, index) {
        if (extraData2[index]) {
            var rawText = p.innerText;
            p.classList.add("para-block");
            
            p.onclick = function () {
                playAudio(rawText);
            };

            p.innerHTML = 
                '<div class="hanzi-ruby zh-text">' + extraData2[index].ruby + '</div>' +
                '<div class="translation">' + extraData2[index].trans + '</div>';
        }
    });

    // 3. Toggle Logic Pinyin
    var btnPinyin = document.getElementById("togglePinyin");
    if (btnPinyin) {
        btnPinyin.onclick = function () {
            document.body.classList.toggle("hide-pinyin");
            var isActive = !document.body.classList.contains("hide-pinyin");
            btnPinyin.classList.toggle("active", isActive);
            btnPinyin.innerText = "拼 Pinyin: " + (isActive ? "ON" : "OFF");
        };
    }

    // 4. Toggle Logic Arti
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