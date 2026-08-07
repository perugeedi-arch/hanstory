// Data Pinyin & Arti per paragraf untuk Sesi 5 (第一条真正的短信)
const extraData = [
    { 
        ruby: "<ruby>晚上<rt>wǎnshang</rt></ruby>。", 
        trans: "Malam hari." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>回到<rt>huídào</rt></ruby><ruby>家<rt>jiā</rt></ruby>。", 
        trans: "Wenjun tiba di rumah." 
    },
    { 
        ruby: "<ruby>吃完<rt>chī wán</rt></ruby><ruby>晚饭<rt>wǎnfàn</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", 
        trans: "Setelah selesai makan malam." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>房间<rt>fángjiān</rt></ruby><ruby>里<rt>lǐ</rt></ruby>。", 
        trans: "Dia duduk di dalam kamar." 
    },
    { 
        ruby: "<ruby>桌子上<rt>zhuōzi shàng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby><ruby>突然<rt>tūrán</rt></ruby><ruby>响<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby>。", 
        trans: "Ponsel di atas meja tiba-tiba berbunyi." 
    },
    { 
        ruby: "“<ruby>滴<rt>dī</rt></ruby>——”", 
        trans: "“Tit——”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>拿起<rt>náqǐ</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>。", 
        trans: "Wenjun mengambil ponselnya." 
    },
    { 
        ruby: "<ruby>是<rt>shì</rt></ruby><ruby>一条<rt>yī tiáo</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Ada sebuah pesan baru." 
    },
    { 
        ruby: "<ruby>对方<rt>duìfāng</rt></ruby>：", 
        trans: "Lawan bicara:" 
    },
    { 
        ruby: "“<ruby>你好<rt>nǐ hǎo</rt></ruby>。”", 
        trans: "“Halo.”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", 
        trans: "Wenjun tersenyum." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>开始<rt>kāishǐ</rt></ruby><ruby>回<rt>huí</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Dia mulai membalas pesan." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby>：", 
        trans: "Wenjun:" 
    },
    { 
        ruby: "“<ruby>你好<rt>nǐ hǎo</rt></ruby>。”", 
        trans: "“Halo.”" 
    },
    { 
        ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yīhuǐ'er</rt></ruby>。", 
        trans: "Beberapa saat kemudian." 
    },
    { 
        ruby: "<ruby>手机<rt>shǒujī</rt></ruby><ruby>又<rt>yòu</rt></ruby><ruby>响<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby>。", 
        trans: "Ponsel berbunyi lagi." 
    },
    { 
        ruby: "<ruby>对方<rt>duìfāng</rt></ruby>：", 
        trans: "Lawan bicara:" 
    },
    { 
        ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>今天<rt>jīntiān</rt></ruby><ruby>忙<rt>máng</rt></ruby><ruby>吗<rt>ma</rt></ruby>？”", 
        trans: "“Kamu hari ini sibuk gak?”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby>：", 
        trans: "Wenjun:" 
    },
    { 
        ruby: "“<ruby>还好<rt>hái hǎo</rt></ruby>。”", 
        trans: "“Lumayan lah.”" 
    },
    { 
        ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>呢<rt>ne</rt></ruby>？”", 
        trans: "“Kamu gimana?”" 
    },
    { 
        ruby: "<ruby>对方<rt>duìfāng</rt></ruby>：", 
        trans: "Lawan bicara:" 
    },
    { 
        ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>也是<rt>yě shì</rt></ruby>。”", 
        trans: "“Aku juga.”" 
    },
    { 
        ruby: "“<ruby>今天<rt>jīntiān</rt></ruby><ruby>作业<rt>zuòyè</rt></ruby><ruby>很多<rt>hěnduō</rt></ruby>。”", 
        trans: "“Hari ini PR-nya banyak banget.”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby>：", 
        trans: "Wenjun:" 
    },
    { 
        ruby: "“<ruby>哈哈<rt>hāhā</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>也是<rt>yě shì</rt></ruby>。”", 
        trans: "“Haha, aku juga.”" 
    },
    { 
        ruby: "<ruby>两个<rt>liǎng gè</rt></ruby><ruby>人<rt>rén</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby>。", 
        trans: "Dua-duanya tersenyum." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", 
        trans: "Wenjun berpikir sejenak." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>打<rt>dǎ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一行字<rt>yī háng zì</rt></ruby>。", 
        trans: "Dia mengetik satu baris kalimat." 
    },
    { 
        ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>叫<rt>jiào</rt></ruby><ruby>什么<rt>shénme</rt></ruby><ruby>名字<rt>míngzì</rt></ruby>？”", 
        trans: "“Nama kamu siapa?”" 
    },
    { 
        ruby: "<ruby>可是<rt>kěshì</rt></ruby>……", 
        trans: "Tapi..." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>想起<rt>xiǎngqǐ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>广播<rt>guǎngbō</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>规则<rt>guīzé</rt></ruby>。", 
        trans: "Dia teringat aturan siaran radio." 
    },
    { 
        ruby: "<ruby>他<rt>tā</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>那句话<rt>nà jù huà</rt></ruby><ruby>删掉<rt>shāndiào</rt></ruby>。", 
        trans: "Dia langsung menghapus kalimat itu." 
    },
    { 
        ruby: "<ruby>然后<rt>ránhòu</rt></ruby><ruby>重新<rt>chóngxīn</rt></ruby><ruby>写<rt>xiě</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一条<rt>yī tiáo</rt></ruby>。", 
        trans: "Lalu menulis ulang pesan baru." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby>：", 
        trans: "Wenjun:" 
    },
    { 
        ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>喜欢<rt>xǐhuān</rt></ruby><ruby>听<rt>tīng</rt></ruby><ruby>广播<rt>guǎngbō</rt></ruby><ruby>吗<rt>ma</rt></ruby>？”", 
        trans: "“Kamu suka dengar radio gak?”" 
    },
    { 
        ruby: "<ruby>对方<rt>duìfāng</rt></ruby>：", 
        trans: "Lawan bicara:" 
    },
    { 
        ruby: "“<ruby>不太<rt>bù tài</rt></ruby><ruby>喜欢<rt>xǐhuān</rt></ruby>。”", 
        trans: "“Gak terlalu suka.”" 
    },
    { 
        ruby: "“<ruby>今天<rt>jīntiān</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>第一次<rt>dì-yī cì</rt></ruby>。”", 
        trans: "“Hari ini pertama kalinya.”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby>：", 
        trans: "Wenjun:" 
    },
    { 
        ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>也是<rt>yě shì</rt></ruby>。”", 
        trans: "“Aku juga.”" 
    },
    { 
        ruby: "<ruby>两个<rt>liǎng gè</rt></ruby><ruby>人<rt>rén</rt></ruby><ruby>继续<rt>jìxù</rt></ruby><ruby>聊天<rt>liáotiān</rt></ruby>。", 
        trans: "Dua orang itu terus mengobrol." 
    },
    { 
        ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>聊<rt>liáo</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>天气<rt>tiānqì</rt></ruby>。", 
        trans: "Mereka mengobrol tentang cuaca." 
    },
    { 
        ruby: "<ruby>聊<rt>liáo</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>学校<rt>xuéxiào</rt></ruby>。", 
        trans: "Ngobrol tentang sekolah." 
    },
    { 
        ruby: "<ruby>也<rt>yě</rt></ruby><ruby>聊<rt>liáo</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>今天<rt>jīntiān</rt></ruby><ruby>发生<rt>fāshēng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>小事<rt>xiǎoshì</rt></ruby>。", 
        trans: "Juga ngobrol tentang hal-hal kecil yang terjadi hari ini." 
    },
    { 
        ruby: "<ruby>时间<rt>shíjiān</rt></ruby><ruby>过<rt>guò</rt></ruby><ruby>得<rt>de</rt></ruby><ruby>很快<rt>hěn kuài</rt></ruby>。", 
        trans: "Waktu berlalu sangat cepat." 
    },
    { 
        ruby: "<ruby>最后<rt>zuìhòu</rt></ruby>。", 
        trans: "Akhirnya." 
    },
    { 
        ruby: "<ruby>对方<rt>duìfāng</rt></ruby><ruby>发来<rt>fā lái</rt></ruby><ruby>一条<rt>yī tiáo</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Lawan bicara mengirim sebuah pesan." 
    },
    { 
        ruby: "<ruby>对方<rt>duìfāng</rt></ruby>：", 
        trans: "Lawan bicara:" 
    },
    { 
        ruby: "“<ruby>明天<rt>míngtiān</rt></ruby><ruby>见<rt>jiàn</rt></ruby>。”", 
        trans: "“Sampai jumpa besok.”" 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>。", 
        trans: "Wenjun menatap ponselnya." 
    },
    { 
        ruby: "<ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby>。", 
        trans: "Tersenyum tipis." 
    },
    { 
        ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby>：", 
        trans: "Wenjun:" 
    },
    { 
        ruby: "“<ruby>明天<rt>míngtiān</rt></ruby><ruby>见<rt>jiàn</rt></ruby>。”", 
        trans: "“Sampai jumpa besok.”" 
    }
];

// Logic Utama Pemutar & Render
document.addEventListener("DOMContentLoaded", function () {
    // 1. Sembunyikan Pinyin & Arti secara default
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

// Pemutar Suara yang Lebih Stabil untuk HP
function playAudio(text) {
    if (!('speechSynthesis' in window)) {
        alert("Maaf, browser ini tidak mendukung fitur suara.");
        return;
    }

    // 1. Bersihkan antrean suara lama
    window.speechSynthesis.cancel();

    // 2. Buat objek utterance
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // Set bahasa ke Chinese Mandarin
    utterance.rate = 0.85;    // Kecepatan standar agar natural

    // 3. Strategi Voice yang lebih aman (JANGAN DIPAKSA)
    // Kita ambil daftar suara terbaru
    var voices = window.speechSynthesis.getVoices();
    
    // Cari suara yang benar-benar Mandarin
    var zhVoice = voices.find(function(v) {
        return v.lang.includes('zh') || v.lang.includes('Chinese');
    });

    // JIKA ketemu, pakai suara itu. JIKA TIDAK, biarkan null/default.
    // HP akan otomatis memilih suara sistem yang tersedia jika kita tidak memaksanya.
    if (zhVoice) {
        utterance.voice = zhVoice;
    }

    // 4. Eksekusi langsung
    window.speechSynthesis.speak(utterance);
}

// Tambahan: Pastikan voice list ter-load segera saat halaman dibuka
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = function() {
        speechSynthesis.getVoices();
    };
}