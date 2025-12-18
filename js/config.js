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
  "Eğlenmeyi ihmal etmeyin!",
  "Küfür yasak!",
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
  "Hufflepuff öğrencileri sabırları ve sadakatleriyle bilinir.",
  "Ravenclaw öğrencileri meraklıdır ve bilgiyi sınırsız bir hazine olarak görür.",
  "Gryffindor öğrencileri adaletsizliğe dayanamaz ve cesurca karşı koyar.",
  "Slytherin öğrencileri uzun vadeli planları ve hırslarıyla öne çıkar.",
  "Dumbledore gibi büyücüler bilgeliği güçten üstün görür.",
  "Voldemort gibi karanlık büyücüler gücün tamamına hükmetmek ister.",
  "Feniks tüyü çekirdeğine sahip değnekler yüksek potansiyele sahiptir.",
  "Unicorn kılı çekirdekli değnekler saf niyet ile uyumludur.",
  "Patronus büyüsünde zorlananlar duygularını saklama eğilimindedir.",
  "Gerçekte kim olduğumuzu gösteren şey yeteneklerimiz değil, seçimlerimizdir.",
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



