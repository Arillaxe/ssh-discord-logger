const axios = require('axios');
const config = require('config');

const {
  webhookURL,
  serverName,
  whitelist,
} = config;
const remoteIP = process.argv[2];
const today = new Date();

const known = whitelist.includes(remoteIP);

axios.post(webhookURL, {
  embeds: [{
    title: `Вход на **${serverName}** с ${known ? '' : 'не'}известного адреса`,
    description: `**Remote IP:**  ${remoteIP}\n**Time:**  ${today.toLocaleString()}`,
    color: known ? 3066993 : 15158332,
  }],
});
