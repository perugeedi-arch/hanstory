// Data Pinyin & Arti per paragraf untuk Sesi 3 (平常的一天)
const extraData = [
    { 
        ruby: "<ruby>早上<rt>zǎoshang</rt></ruby>。", 
        trans: "Pagi hari." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>骑着<rt>qízhe</rt></ruby><ruby>自行车<rt>zìxíngchē</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>学校<rt>xuéxiào</rt></ruby>。", 
        trans: "Wenjun naik sepeda pergi ke sekolah." 
    },
    { 
        ruby: "<ruby>今天<rt>jīntiān</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>一样<rt>yīyàng</rt></ruby>。", 
        trans: "Hari ini sama seperti kemarin." 
    },
    { 
        ruby: "<ruby>老师<rt>lǎoshī</rt></ruby><ruby>上课<rt>shàngkè</rt></ruby>。", 
        trans: "Guru mengajar." 
    },
    { 
        ruby: "<ruby>同学<rt>tóngxué</rt></ruby><ruby>聊天<rt>liáotiān</rt></ruby>。", 
        trans: "Teman-teman sekelas mengobrol." 
    },
    { 
        ruby: "<ruby>一切<rt>yīqiè</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>平常<rt>píngcháng</rt></ruby>。", 
        trans: "Semuanya sangat biasa." 
    },
    { 
        ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>一直<rt>yīzhí</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>晚上<rt>wǎnshang</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>梦<rt>mèng</rt></ruby>。", 
        trans: "Tapi, Wenjun terus-menerus memikirkan mimpinya semalam." 
    },
    { 
        ruby: "<ruby>下课<rt>xiàkè</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", 
        trans: "Setelah kelas selesai." 
    },
    { 
        ruby: "<ruby>朋友<rt>péngyǒu</rt></ruby><ruby>走到<rt>zǒudào</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>旁边<rt>pángbiān</rt></ruby>。", 
        trans: "Temannya berjalan ke sampingnya." 
    },
    { 
        ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>，<ruby>你<rt>nǐ</rt></ruby><ruby>今天<rt>jīntiān</rt></ruby><ruby>怎么<rt>zěnme</rt></ruby><ruby>了<rt>le</rt></ruby>？”", 
        trans: "“Wenjun, kamu kenapa hari ini?”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", 
        trans: "Wenjun tersenyum sedikit." 
    },
    { 
        ruby: "“<ruby>没<rt>méi</rt></ruby><ruby>什么<rt>shénme</rt></ruby>。”", 
        trans: "“Gak apa-apa kok.”" 
    },
    { 
        ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>是不是<rt>shì bú shì</rt></ruby><ruby>又<rt>yòu</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>睡<rt>shuì</rt></ruby><ruby>好<rt>hǎo</rt></ruby>？”", 
        trans: "“Kemarin kamu gak bisa tidur nyenyak lagi ya?”" 
    },
    { 
        ruby: "“<ruby>可能<rt>kěnéng</rt></ruby><ruby>吧<rt>ba</rt></ruby>。”", 
        trans: "“Mungkin.”" 
    },
    { 
        ruby: "<ruby>朋友<rt>péngyǒu</rt></ruby><ruby>笑着<rt>xiàozhe</rt></ruby><ruby>说<rt>shuō</rt></ruby>：", 
        trans: "Temannya berkata sambil tertawa:" 
    },
    { 
        ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>最近<rt>zuìjìn</rt></ruby><ruby>常常<rt>chángcháng</rt></ruby><ruby>发呆<rt>fādāi</rt></ruby>。”", 
        trans: "“Kamu belakangan ini sering melamun.”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>说话<rt>shuōhuà</rt></ruby>。", 
        trans: "Wenjun tidak berbicara." 
    },
    { 
        ruby: "<ruby>放学<rt>fàngxué</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", 
        trans: "Setelah pulang sekolah." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>回家<rt>huíjiā</rt></ruby>。", 
        trans: "Wenjun tidak langsung pulang ke rumah." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>骑着<rt>qízhe</rt></ruby><ruby>自行车<rt>zìxíngchē</rt></ruby>，<ruby>慢慢<rt>mànmàn</rt></ruby><ruby>经过<rt>jīngguò</rt></ruby><ruby>一个<rt>yī gè</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby>。", 
        trans: "Dia mengayuh sepedanya, perlahan melewati sebuah taman." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>停<rt>tíng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>下来<rt>xiàlái</rt></ruby>。", 
        trans: "Dia berhenti." 
    },
    { 
        ruby: "<ruby>公园<rt>gōngyuán</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>很多<rt>hěnduō</rt></ruby><ruby>小朋友<rt>xiǎopéngyǒu</rt></ruby>。", 
        trans: "Di dalam taman ada banyak anak kecil." 
    },
    { 
        ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>一起<rt>yīqǐ</rt></ruby><ruby>跑<rt>pǎo</rt></ruby>。", 
        trans: "Mereka berlari bersama." 
    },
    { 
        ruby: "<ruby>一起<rt>yīqǐ</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", 
        trans: "Tertawa bersama." 
    },
    { 
        ruby: "<ruby>还有<rt>háiyǒu</rt></ruby><ruby>两个<rt>liǎng gè</rt></ruby><ruby>小孩子<rt>xiǎohái</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>荡秋千<rt>dàng qiūqiān</rt></ruby>。", 
        trans: "Ada juga dua anak kecil yang sedang main ayunan." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>安静地<rt>ānjìng de</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>他们<rt>tāmen</rt></ruby>。", 
        trans: "Wenjun memperhatikan mereka dengan tenang." 
    },
    { 
        ruby: "<ruby>不知道<rt>bù zhīdào</rt></ruby><ruby>为什么<rt>wèi shénme</rt></ruby>。", 
        trans: "Entah kenapa." 
    },
    { 
        ruby: "<ruby>这里<rt>zhèlǐ</rt></ruby><ruby>让<rt>ràng</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>觉得<rt>juéde</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>熟悉<rt>shúxī</rt></ruby>。", 
        trans: "Tempat ini membuatnya merasa sangat familier." 
    },
    { 
        ruby: "<ruby>可是<rt>kěshì</rt></ruby>……", 
        trans: "Tapi..." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>想不起来<rt>xiǎng bù qǐlái</rt></ruby>。", 
        trans: "Dia tidak bisa mengingatnya." 
    },
    { 
        ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yīhuǐ'er</rt></ruby>。", 
        trans: "Beberapa saat kemudian." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>摇了摇<rt>yáo le yáo</rt></ruby><ruby>头<rt>tóu</rt></ruby>。", 
        trans: "Dia menggelengkan kepalanya pelan." 
    },
    { 
        ruby: "“<ruby>只是<rt>zhǐshì</rt></ruby><ruby>一个<rt>yī gè</rt></ruby><ruby>梦<rt>mèng</rt></ruby><ruby>吧<rt>ba</rt></ruby>……”", 
        trans: "“Cuma mimpi kali ya...”" 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>完<rt>wán</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", 
        trans: "Setelah selesai berbicara." 
    },
    { 
        ruby: "<ruby>骑上<rt>qí shàng</rt></ruby><ruby>自行车<rt>zìxíngchē</rt></ruby>。", 
        trans: "Dia naik ke sepedanya." 
    },
    { 
        ruby: "<ruby>慢慢<rt>mànmàn</rt></ruby><ruby>离开<rt>líkāi</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby>。", 
        trans: "Perlahan meninggalkan taman." 
    }
];

// Logic Utama Pemutar & Render
document.addEventListener("DOMContentLoaded", function () {
    // 1. Sembunyikan Pinyin & Arti secara default saat halaman dimuat
    document.body.classList.add("hide-pinyin", "hide-trans");

    // 2. Buat Toolbar Kontrol Toggle
    var chapterHeader = document.querySelector(".chapter-header");
    var controlBox = document.createElement("div");
    controlBox.className = "reading-controls";
    controlBox.innerHTML = 
        '<button id="togglePinyin" class="btn-control">拼 Pinyin: OFF</button>' +
        '<button id="toggleTrans" class="btn-control">文 Arti: OFF</button>' +
        '<span class="audio-tip">💡 Klik kalimat untuk dengar suara</span>';
    
    if (chapterHeader) {
        chapterHeader.after(controlBox);
    }

    // 3. Format Paragraf Cerita & Pasang Event Suara
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

    // 4. Logic Toggle Pinyin
    var btnPinyin = document.getElementById("togglePinyin");
    if (btnPinyin) {
        btnPinyin.onclick = function () {
            document.body.classList.toggle("hide-pinyin");
            var isActive = !document.body.classList.contains("hide-pinyin");
            btnPinyin.classList.toggle("active", isActive);
            btnPinyin.innerText = "拼 Pinyin: " + (isActive ? "ON" : "OFF");
        };
    }

    // 5. Logic Toggle Arti / Terjemahan
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

// Pemutar Suara Kompatibel HP & Laptop
function playAudio(text) {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.85;

        var voices = window.speechSynthesis.getVoices();
        var zhVoice = voices.find(function(voice) {
            return voice.lang.includes("zh") || voice.lang.includes("Chinese");
        });

        if (zhVoice) utterance.voice = zhVoice;

        window.speechSynthesis.speak(utterance);
    }
}

if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}