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
 { rank: "Yetkili Sorumlusu", name: "trinky" },
 { rank: "Admin", name: "InFlames" },
 { rank: "Admin", name: "kaanclnt" },
 { rank: "Admin", name: "1moonlover" },
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
 * Enable debug messages?
 */
Config.enableDebug = false;