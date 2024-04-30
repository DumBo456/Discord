const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1158981666660941894/1228044732207337532/5E3C8445-9961-4BEC-911B-04BBE987974F.gif?ex=662a9cc8&is=661827c8&hm=ca07d64790d327ae856a2b76c0417ca0e2529aa24ea0f1de24cd8a5a0fc0e1a5&",
                   ];
const smallpictureGede = [
  "https://cdn.discordapp.com/attachments/1158981666660941894/1217888428876632064/5796D8E6-6686-4969-9199-9EE41D9D082C.gif?ex=662a93fc&is=66181efc&hm=0daa56b8b51d52b630383c22675fd0a39f416979888c528ce5a7430ed51fb70f&",
const nameButtonone = "H";
let linkButtonone = "Z";

const xxxx = ['The 5th Great Ninja War🥷'];

const randomTexts = [
  'Mizukagami no Jutsu',
  'Daikodan no Jutsu',
  'Doton: Iwayado Kuzushi',
  'Doton: Uiten Pen',
  'Katon: Ryūen Hōka no Jutsu',
  'Katon: Gōen no Jutsu',
  'Susanoo: Chidori',
  'Kamui Raikiri',
  'Futon: Kiryū Ranbu',
  'Futon: Rasengan',
  'Amenominaka',
  'Indra no Ya',
  'Rasenshuriken'


];

const randomtext3 = [
 '',

];

const randomtext4 = [
  'FaceBook',


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
