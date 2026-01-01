// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = false;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = false;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Sunucumuza hoşgeldiniz!",
  "ALT+E ile oturabilirsiniz!",
  "Kuralları okumayı unutmayın",
  "Discord sunucumuzdaki tuş atamaları odasına bakmayı unutmayın!",
  "RDM: Sebebi ve amacı olmadan kimseyi öldürme!",
  "RDA: Sşş profesör hiç bir öğrenciyi sebepsiz disipline gönderme!",
  "FailRP: Hey hey hatalı rol yapma sakın!",
  "FearRP: Zamanı geldiği zaman korkmayı da bilmemiz lazım :)",
  "Meta Gaming: Oyunda duymadığın bilgi bilgi değildir. Kimse ile paylaşma.",
  "Power Gaming: Hadi ama o kadar da güçlü değilsin. Gerçekten yapamıyorsan bunu yapma!",
  "LTAP: Sana ceza verilecekse kaçmamalısın. Bu adamlar boş yere profesör olmadı ya?",
  "MadRP: Sakin ol sen Bellatrix değilsin deli rolü yapamazsın...",
  "RefuseRP: Madem rol yapmayacaksın neden sunucudasın reddetmek için mi?",
  "ForceRP: Ne bu emrivaki zorlama kimseyi yaptığın çok ayıp.",
  "RetartedRP: Tamam büyücülük evrenindeyiz de o kadar da değil sence bu mantıklı mı?",
  "Profesörleriniz hocalarınız değildir.",
  "Baykuşlar, sizi bulamadıklarında mektupları rastgele yerlere bırakırlar."
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Background Images - Slideshow
 * DROP IMAGES IN "images" FOLDER
 * Görseller buraya eklenen sırayla döner.
 */
Config.backgrounds = [
// "legacyyilbasi.png",
//  "legacyyilbasi2.png",
  
"default1.jpg",
"default4.jpg",
"default2.jpg",
"default3.jpg"
];
// Kaç saniyede bir arka plan değişsin?
Config.backgroundInterval = 5; // saniye

/**
 * Staff list - Yetkili kadro
 * Sağ tarafta gösterilecek yetkili listesi
 */
Config.staff = [
 { rank: "LEGACY", name: "Kly" },
 { rank: "LEGACY", name: "Valeri" },
 { rank: "LEGACY", name: "Goktug" },
 { rank: "LEGACY", name: "Muzisyenes" },
 { rank: "Sunucu Yönetimi", name: "Aren" },
 { rank: "Sunucu Yönetimi", name: "wAve" },
 { rank: "Yetkili Sorumlusu", name: "codibaba1numara" },
 { rank: "Admin", name: "InFlames" },
 { rank: "Admin", name: "Keegan" },
 { rank: "Admin", name: "pirasa" },
 { rank: "Admin", name: "Orpheus" },
 { rank: "Kıdemli Moderatör", name: "Raft" },
 { rank: "Kıdemli Moderatör", name: "Integra" },
 { rank: "Kıdemli Moderatör", name: "4pollon" },
 { rank: "Kıdemli Moderatör", name: "Eekmek" },
 { rank: "Moderatör", name: "Starspro" },
 { rank: "Moderatör", name: "Grodde" },
 { rank: "Moderatör", name: "MLHC" },
 { rank: "Moderatör", name: "Ayes" }
];

/**
 * Tips list - Bilgiler/İpuçları
 * Sol tarafta gösterilecek bilgi listesi
 */
Config.tips = [
  "Gryffindor: cesaret ve fedakârlığı her şeyin önünde tutar. Seçme şapkası kalbin gücüne bakar.",
  "Slytherin: Hırs zeka ve stratejiyle öne çıkar. Birçok karanlık büyücü bu haneden çıkmıştır.",
  "Ravenclaw: Bilgiye ve yaratıcılığa değer verir. Doğru cevap kadar doğru soruyu da önemser.",
  "Hufflepuff: Sadakat ve çalışkanlığı temsil eder. En kapsayıcı hanedir.",
  "Albus Dumbledore Hogwarts’ın en bilge müdürlerinden biri olarak anılır.",
  "Profesörler sadece ders vermez; öğrencileri karanlık tehditlere karşı da korur.",
  "Ölüm Yiyenler, safkan büyücü üstünlüğünü savunan karanlık bir örgüttür.",
  "Ölüm Yiyenler genellikle Morsmordre ile tanınır; bu işaret Voldemort’un çağrısıdır.",
  "Seherbazlar, büyücülük dünyasının en tehlikeli suçlularını avlar.",
  "Seherbaz olmak için ileri seviye büyü bilgisi ve psikolojik dayanıklılık gerekir.",
  "Büyük Britanya Büyü Bakanlığı, Britanya’daki tüm büyülü toplumu yöneten en yüksek otoritedir.",
  "Bakan, toplumun güvenliğinden ve politik kararlarından sorumludur.",
  "Ev cinleri sadakatle bağlı olduklarında büyük güç sergiler.",
  "Tablolar bazen istemediğiniz bilgiler taşıyabilir.",
  "Cüce yapımı eşyalar güçlüdür fakat sahiplik konusunda hassastır.",
  "Karanlık orman sayısız tehlikelerle doludur.",
  "Thestralleri görebilenler ölümle en az bir kere karşılaşmış kişilerdir.",
  "Büyücü dünyasında bürokrasi yavaştır ama beklenenden etkilidir.",
  "Yeni büyülerde tamamen ustalaşabilemk doğru eğitim ve pratik gerektirir.",
  "Sihirli yaratıklarla anlaşabilenler yüksek empatiye sahiptir.",
  "Azkaban benzeri yerler büyücülerin umutlarını emer.",
  "Hedefimiz aynı olduğu sürece konuştuğumuz dil veya büyüdüğümüz yer önemli değildir.",
  "Bakanlık kayıtları her büyücünün istemeden bıraktığı izlerle doludur.",
  "Karanlık sanatlara meraklı olanlar gücün bedeli olduğunu bilir.",
  "İksir ustaları sabır ve hassasiyetle çalışır.",
  "Ölülere değil, yaşayanlara acıyın. Her şeyden önce sevgisiz yaşayanlara..",
  "Uçan süpürge üreticileri büyük paralar kazanmakatdır.",
  "Merak günah değildir, onların peşinden koşabiliriz. Ancak her ihtimale karşı dikkatli olmakta fayda var..",
  "Büyücülük evreninde bir zihnibend veya zihnifend konusunda yetekenkli büyücülere rastlamak pek yaygın bir durum değildir.",
  "Tılsım ustaları ustaları savunmayı saldırıdan üstün tutar.",
  "Yasaklı kitaplara ilgi duyanlar içindeki tehlikeyi bilse de okumaktan vazgeçmez.",
  "Lanetler kişinin duygularından beslenir.",
  "İlk defa cisimlenen kişiler kısa süreli mide bulantısı ve baş dönmesi yaşayabilir.",
  "Büyülü gizemlerin peşine düşenler ya tarihe kazınır ya da tamamen kaybolur."
];


/**
 * Enable debug messages?
 */

Config.enableDebug = false;
