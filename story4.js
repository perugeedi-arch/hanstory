// Data Pinyin & Arti per paragraf untuk Sesi 4 (广播里的短信)
const extraData = [
    { 
        ruby: "<ruby>第四章<rt>dì-sì zhāng</rt></ruby>——<ruby>广播<rt>guǎngbō</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>", 
        trans: "Bab 4 — Pesan Singkat di Radio" 
    },
    { 
        ruby: "<ruby>放学<rt>fàngxué</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", 
        trans: "Setelah pulang sekolah." 
    },
    { 
        ruby: "<ruby>孙蓉<rt>Sūn Róng</rt></ruby><ruby>回到<rt>huídào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>家<rt>jiā</rt></ruby>。", 
        trans: "Sun Rong kembali ke rumah." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>房间<rt>fángjiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>门<rt>mén</rt></ruby>。", 
        trans: "Dia membuka pintu kamarnya." 
    },
    { 
        ruby: "<ruby>放下<rt>fàngxià</rt></ruby><ruby>书包<rt>shūbāo</rt></ruby>。", 
        trans: "Meletakkan tas sekolahnya." 
    },
    { 
        ruby: "<ruby>然后<rt>ránhòu</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>窗户<rt>chuānghu</rt></ruby>。", 
        trans: "Lalu membuka jendela." 
    },
    { 
        ruby: "<ruby>外面<rt>wàimiàn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>风<rt>fēng</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>吹<rt>chuī</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>进来<rt>jìnlái</rt></ruby>。", 
        trans: "Angin dari luar berembus masuk perlahan." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>书桌<rt>shūzhuō</rt></ruby><ruby>前<rt>qián</rt></ruby>。", 
        trans: "Dia duduk di depan meja belajar." 
    },
    { 
        ruby: "<ruby>一边<rt>yībiān</rt></ruby><ruby>写<rt>xiě</rt></ruby><ruby>作业<rt>zuòyè</rt></ruby>，<ruby>一边<rt>yībiān</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>小<rt>xiǎo</rt></ruby><ruby>广播<rt>guǎngbō</rt></ruby>。", 
        trans: "Sambil mengerjakan PR, dia menyalakan radio kecil." 
    },
    { 
        ruby: "<ruby>广播<rt>guǎngbō</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>传来<rt>chuánlái</rt></ruby><ruby>主持人<rt>zhǔchírén</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", 
        trans: "Dari radio terdengar suara pembawa acara." 
    },
    { 
        ruby: "“<ruby>晚上<rt>wǎnshang</rt></ruby><ruby>好<rt>hǎo</rt></ruby>，<ruby>欢迎<rt>huānyíng</rt></ruby><ruby>大家<rt>dàjiā</rt></ruby><ruby>收听<rt>shōutīng</rt></ruby><ruby>今天<rt>jīntiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>节目<rt>jiémù</rt></ruby>。”", 
        trans: "“Selamat malam, selamat mendengarkan acara hari ini.”" 
    },
    { 
        ruby: "“<ruby>今天<rt>jīntiān</rt></ruby>，<ruby>我们<rt>wǒmen</rt></ruby><ruby>还有<rt>háiyǒu</rt></ruby>‘<ruby>短信<rt>duǎnxìn</rt></ruby><ruby>交朋友<rt>jiāo péngyǒu</rt></ruby>’<ruby>活动<rt>huódòng</rt></ruby>。”", 
        trans: "“Hari ini, kita juga ada kegiatan 'Cari Teman Lewat SMS'.”" 
    },
    { 
        ruby: "“<ruby>我们<rt>wǒmen</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>随机<rt>suíjī</rt></ruby><ruby>选择<rt>xuǎnzé</rt></ruby><ruby>两位<rt>liǎng wèi</rt></ruby><ruby>听众<rt>tīngzhòng</rt></ruby>。”", 
        trans: "“Kami akan memilih dua pendengar secara acak.”" 
    },
    { 
        ruby: "“<ruby>请<rt>qǐng</rt></ruby><ruby>大家<rt>dàjiā</rt></ruby><ruby>不要<rt>búyào</rt></ruby><ruby>告诉<rt>gàosù</rt></ruby><ruby>对方<rt>duìfāng</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>名字<rt>míngzì</rt></ruby>、<ruby>学校<rt>xuéxiào</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>住址<rt>zhùzhǐ</rt></ruby>。”", 
        trans: "“Harap jangan memberitahu nama, sekolah, dan alamat rumah Anda kepada satu sama lain.”" 
    },
    { 
        ruby: "“<ruby>请<rt>qǐng</rt></ruby><ruby>先<rt>xiān</rt></ruby><ruby>认识<rt>rènshí</rt></ruby><ruby>对方<rt>duìfāng</rt></ruby>，<ruby>再<rt>zài</rt></ruby><ruby>认识<rt>rènshí</rt></ruby><ruby>对方<rt>duìfāng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>名字<rt>míngzì</rt></ruby>。”", 
        trans: "“Saling mengenal pribadinya dulu, baru kemudian saling mengenal namanya.”" 
    },
    { 
        ruby: "<ruby>孙蓉<rt>Sūn Róng</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yīxià</rt></ruby>。", 
        trans: "Sun Rong tersenyum tipis." 
    },
    { 
        ruby: "“<ruby>听起来<rt>tīng qǐlái</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>有意思<rt>yǒu yìsi</rt></ruby>。”", 
        trans: "“Kelihatannya menarik sekali.”" 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>拿起<rt>náqǐ</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>。", 
        trans: "Dia mengambil ponselnya." 
    },
    { 
        ruby: "<ruby>发<rt>fā</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一条<rt>yī tiáo</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Mengirim sebuah pesan singkat (SMS)." 
    },
    { 
        ruby: "“<ruby>你好<rt>nǐ hǎo</rt></ruby>，<ruby>这是<rt>zhè shì</rt></ruby><ruby>我<rt>wǒ</rt></ruby><ruby>第一次<rt>dì-yī cì</rt></ruby><ruby>参加<rt>cānjiā</rt></ruby>。”", 
        trans: "“Halo, ini pertama kalinya aku ikut serta.”" 
    },
    { 
        ruby: "<ruby>发完<rt>fā wán</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>，<ruby>她<rt>tā</rt></ruby><ruby>继续<rt>jìxù</rt></ruby><ruby>写<rt>xiě</rt></ruby><ruby>作业<rt>zuòyè</rt></ruby>。", 
        trans: "Setelah selesai mengirim, dia melanjutkan mengerjakan PR." 
    },
    { 
        ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>几<rt>jǐ</rt></ruby><ruby>分钟<rt>fēnzhōng</rt></ruby>。", 
        trans: "Beberapa menit kemudian." 
    },
    { 
        ruby: "<ruby>手机<rt>shǒujī</rt></ruby><ruby>突然<rt>tūrán</rt></ruby><ruby>响<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby>。", 
        trans: "Ponselnya tiba-tiba berbunyi." 
    },
    { 
        ruby: "“<ruby>滴<rt>dī</rt></ruby>——”", 
        trans: "“Tit——”" 
    },
    { 
        ruby: "<ruby>孙蓉<rt>Sūn Róng</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>拿起<rt>náqǐ</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>。", 
        trans: "Sun Rong segera mengambil ponselnya." 
    },
    { 
        ruby: "<ruby>是<rt>shì</rt></ruby><ruby>一条<rt>yī tiáo</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Itu adalah sebuah pesan baru." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby>。", 
        trans: "Dia membukanya pelan-pelan." 
    },
    { 
        ruby: "<ruby>短信<rt>duǎnxìn</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>只有<rt>zhǐyǒu</rt></ruby><ruby>两个<rt>liǎng gè</rt></ruby><ruby>字<rt>zì</rt></ruby>。", 
        trans: "Di dalam pesan itu hanya ada dua kata." 
    },
    { 
        ruby: "“<ruby>你好<rt>nǐ hǎo</rt></ruby>。”", 
        trans: "“Halo.”" 
    },
    { 
        ruby: "<ruby>孙蓉<rt>Sūn Róng</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>。", 
        trans: "Sun Rong menatap ponselnya." 
    },
    { 
        ruby: "<ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby>。", 
        trans: "Tersenyum tipis." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>回<rt>huí</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一条<rt>yī tiáo</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Dia membalas sebuah pesan." 
    },
    { 
        ruby: "“<ruby>你好<rt>nǐ hǎo</rt></ruby>。”", 
        trans: "“Halo.”" 
    },
    { 
        ruby: "<ruby>发完<rt>fā wán</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", 
        trans: "Setelah selesai mengirim." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby><ruby>放回<rt>fànghuí</rt></ruby><ruby>桌子上<rt>zhuōzi shàng</rt></ruby>。", 
        trans: "Dia meletakkan ponselnya kembali ke atas meja." 
    },
    { 
        ruby: "<ruby>继续<rt>jìxù</rt></ruby><ruby>写<rt>xiě</rt></ruby><ruby>作业<rt>zuòyè</rt></ruby>。", 
        trans: "Lanjut mengerjakan PR." 
    },
    { 
        ruby: "<ruby>可是<rt>kěshì</rt></ruby>……", 
        trans: "Tapi..." 
    },
    { 
        ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yīhuǐ'er</rt></ruby>。", 
        trans: "Beberapa saat kemudian." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>又<rt>yòu</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一眼<rt>yīyǎn</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>。", 
        trans: "Dia melirik ponselnya sekali lagi." 
    },
    { 
        ruby: "<ruby>不知道<rt>bù zhīdào</rt></ruby><ruby>为什么<rt>wèi shénme</rt></ruby>。", 
        trans: "Entah kenapa." 
    },
    { 
        ruby: "<ruby>她<rt>tā</rt></ruby><ruby>好像<rt>hǎoxiàng</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>等<rt>děng</rt></ruby><ruby>那个<rt>nàgè</rt></ruby><ruby>人<rt>rén</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>下一条<rt>xià yī tiáo</rt></ruby><ruby>短信<rt>duǎnxìn</rt></ruby>。", 
        trans: "Sepertinya dia sedang menunggu pesan selanjutnya dari orang tersebut." 
    }
];

document.addEventListener("DOMContentLoaded", function () {
    // 1. Buat Toolbar Kontrol Toggle
    var chapterHeader = document.querySelector(".chapter-header");
    var controlBox = document.createElement("div");
    controlBox.className = "reading-controls";
    controlBox.innerHTML = 
        '<button id="togglePinyin" class="btn-control active">拼 Pinyin: OFF</button>' +
        '<button id="toggleTrans" class="btn-control active">文 Arti: OFF</button>' +
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

// Tambahkan 2 baris ini di bagian paling bawah DOMContentLoaded:
    document.body.classList.add("hide-pinyin");
    document.body.classList.add("hide-trans");