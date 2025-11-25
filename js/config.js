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
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = ""; // Eski yöntem (tek görsel)
Config.backgrounds = [
  // images klasöründeki dosya adlarını buraya ekleyin.
    "default1.jpg",
  "default.jpg",
  "default2.jpg",
  "default3.jpg"
];
// Kaç saniyede bir arka plan değişsin?
Config.backgroundInterval = 1; // saniye

/**
 * Enable debug messages?
 */

Config.enableDebug = false;
