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
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/attachments/1148099836537753672/1201545938611748955/C2A3D941-3584-469B-84C0-4395A291AAB8.gif?ex=65ca35db&is=65b7c0db&hm=803e593980963eb618e2a9689ae713f53ff2156256ea2355eefe39daf160d4fe&",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['★☆★☆★☆★','☆★☆★☆★☆'];

const randomTexts = [
  'FaceBook',


];

const randomtext3 = [
  '平和は微笑みから始まります。',
  '大きな野望は偉大な人を育てる.',
  '夢見ることができれば、それは実現できる。',
  '私の人生は楽しくなかった。だから私は自分の人生を創造したの。',
   'すべては練習のなかにある。'

];

const randomtext4 = [
  '❡',
  '☬',
  '✞',
  '✡'


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
