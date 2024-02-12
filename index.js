const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1148099836537753672/1206629250141134879/3C5F269B-BE16-4430-95EA-83678F7F5D34.gif?ex=65dcb40f&is=65ca3f0f&hm=cee561d459d5a9c6cce231724e790d37941a1e17da4fed45e29a85ca77dfdbcc&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206629233422762055/D01BDB2D-EA0C-484C-AE42-8B22AF712AEE.gif?ex=65dcb40b&is=65ca3f0b&hm=a2a9c18e3e4547f9355c4b91e861cc9cc58e31b5a88f5460da7c9e05745ca836&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206629216246964274/3ADC8A35-E625-4011-84F5-0C83CB64CB9D.gif?ex=65dcb407&is=65ca3f07&hm=7b6a926dc9aff6514316cff2414b017ac7fa813d05ccd87ab8f8a029825b6dba&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206628570861142026/F773D7BF-D2F8-4A69-BE66-8DE9C91B0FA5.gif?ex=65dcb36d&is=65ca3e6d&hm=b56fa6abd9196d956c80e12e89e85b5cf867ebef7aeec4fad666abd743cc0145&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206628546781642832/BA5825B3-1621-49CE-933E-E0AD2CA7232D.gif?ex=65dcb367&is=65ca3e67&hm=884cf767fd312b95fadd7a13dc7cec2b81d52359d9f7ddc33ea64a8cd2192ff8&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206628530633580584/CDCA3A7D-9FEA-45AD-8082-A196519A8D42.gif?ex=65dcb363&is=65ca3e63&hm=808cf880aeb10ef0d9e7c4d2cb412124399a80e23772d413a2dd5c9e570dc181&" ,
"https://cdn.discordapp.com/attachments/1148099836537753672/1206628514657476648/215233D4-05C4-406E-A305-D7A544BF576F.gif?ex=65dcb35f&is=65ca3e5f&hm=242d322dc12a8666bd4ae3fe1e0d1228d754c67b57cd866c34550371736fefb9&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206628495657017364/618DF972-3020-424C-B613-C592AC450FFF.gif?ex=65dcb35b&is=65ca3e5b&hm=63eee0b0a213b70a41452d2324b94ac112352b0fe64c6448f57a41884b6c936e&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206628472819286016/D3E22FBA-291D-441F-ACA6-9883F2A57001.gif?ex=65dcb355&is=65ca3e55&hm=8438414be036b77d324c09f5d40fd1aa9948bd3694f3d0228651ebc9131992b0&",
"https://cdn.discordapp.com/attachments/1148099836537753672/1206632008487538718/F78A6BED-B945-457B-9FBA-D5ABDF333C68.gif?ex=65dcb6a0&is=65ca41a0&hm=16ddb2d0eece420837347776985395373de61709c010ba8c38536eeed981907f&",
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/attachments/1148099836537753672/1206632266969649172/78901A24-C7E7-4DB8-AB22-9CC5A4727D83.gif?ex=65dcb6de&is=65ca41de&hm=cd0d40982b18aba1281c4bcb62aa0f4fc7bfe5ed82f7968debcbf70688b1e03b&",
  "https://cdn.discordapp.com/attachments/1158981666660941894/1204781645706698794/IMG_2345.jpg?ex=65d5fb58&is=65c38658&hm=9c6326ff7e37a7ce91b6ba68fa4b03c0dc4dcb4dc6c9903dc4fabcefedb111ed&",
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
