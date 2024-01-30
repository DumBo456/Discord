const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1055150665560752178')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=HOGfrOK9a84') //Must be a youtube video link 
    .setState('DumBoHz')
    .  setName('Test')
    .setDetails(`••••[${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1142012457783656478/1142040285526892594/8f1e237076159c35cb5124b744b451cf.gif?ex=65c5fc66&is=65b38766&hm=e4a2c4a6ea51384ea76853752c2e90f62751bf8eded42cb71c324e05c0ddead4&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('$$$') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1142012457783656478/1142040284721590313/0e328ebe0cf12640b9b2e9db7b3e7dac.gif?ex=65c5fc65&is=65b38765&hm=d8c6996ad1487be141fc1a701d1d4289d9c53bac7c91b17767dcca8e1b2c675e&' ) //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Test') //Text when you hover the Small image
    .addButton('Watch', 'https://youtube.com/@DumBo22?si=qUrUhbdjzXRpe5aj')
    .addButton('Donate', 'https://www.facebook.com/dumbohz?mibextid=LQQJ4d');

  client.user.setActivity(r);
  client.user.setPresence({ status: "Test" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
