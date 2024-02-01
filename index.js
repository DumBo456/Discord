const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1142012457783656478/1142410200570155018/88cd12b61a7efc2ba0679356f450559a.gif?ex=65c754e8&is=65b4dfe8&hm=59f71b434beda4b08a235e944e8acc91b41d51bace13927ba0c8a39c84d07f43&",
"https://cdn.discordapp.com/attachments/1151373013749596243/1202567255322525706/4B7DE4E1-F4C1-4F2A-96BD-809D2283E904.gif?ex=65cded08&is=65bb7808&hm=324e0661ac68dfb9681346df9b92216b89c7a0b4cd8c7b01c1e5ef7e6265ad7d&",
"https://cdn.discordapp.com/attachments/1151373013749596243/1202567190902083615/6545B05E-8D25-4859-8C07-4977AB12C9A6.gif?ex=65cdecf8&is=65bb77f8&hm=b1e51da14568248d2215653ae93bdafcb56b78ba108930b66984618a1ae455f3&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1202566390046007326/98D44E9C-59E3-483F-BFAC-7502E19AE741.gif?ex=65cdec39&is=65bb7739&hm=2ad55ee275a2e70b6a8bf067294f25bf4c245bec29f6bb470be5c9441ed5a821&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1202566404285665330/F6002D16-F2F4-46CF-B821-1C9D0F0C3436.gif?ex=65cdec3d&is=65bb773d&hm=893e3ca355459e03357e88dea2ab730647ffe426f32cf6cf662953053a4f7079&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1202566427282898985/180FBF1D-BFF3-42BF-B190-4A52FF4F1CB4.gif?ex=65cdec42&is=65bb7742&hm=6d638e4de3a940f7a00dd514c68290de8b2eaf7aefe545c8632aa1603cdd8bce&" ,
"https://cdn.discordapp.com/attachments/1148099836537753672/1202566543758594068/29A2748D-1580-4F46-9C23-5078E7CD0E69.gif?ex=65cdec5e&is=65bb775e&hm=39ff298ad23520f97778cc2e379278cc704673179bce5a3146b3d5aca28b4d5f&",
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/attachments/1148099836537753672/1201545938611748955/C2A3D941-3584-469B-84C0-4395A291AAB8.gif?ex=65ca35db&is=65b7c0db&hm=803e593980963eb618e2a9689ae713f53ff2156256ea2355eefe39daf160d4fe&",
  "https://cdn.discordapp.com/attachments/1148099836537753672/1202568608417316906/5A362F38-3153-455C-9E0A-91B010E6F2BA.gif?ex=65cdee4a&is=65bb794a&hm=38464f844921beddfe90ff46f3f64fd6cf017e20dfc8af5b977e92603d4b4eda&",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['★☆★☆★☆★','☆★☆★☆★☆'];

const randomTexts = [
  'FaceBook',


];

const randomtext3 = [
  'Lil Boo Gang Gang☄️',
  'Lil Boo Got The No Bang Cap⚡️',
  'Lil Boo Si Tinh🥀',
   'Lil Boo Thien Tai💥'

];

const randomtext4 = [
  '❡',
  '☬',
  '✞',
  '۩',
  '𐰒',
  '♆'


];

const randomtext5 = [];

const randomLinks = [
  "https://www.facebook.com/dumbohz?mibextid=LQQJ4d",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();

  return {
    timestampMidnight,
    timestampEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 7) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = "Badminton"


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`Honkai Star Rail`)
      .setURL('https://www.youtube.com/watch?v=tE_-be3OnCk')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1055150665560752178")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${randomButtonText3}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
