//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagJlnG6xCSU2tS1Vz19";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagJlnG6xCSU2tS1Vz19";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/254735342808 , https://wa.me/254735342808";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "254735342808";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUIrdEszbTAwZm8rUmUyV2s0a0taeUR1QVlCYkJEZnJUSmdlS1Z3NTdXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEhuWmJJRlU1di9RK3A1cHk4dXAyUkZhUlhjYXhwNmVoWE9HTTRWWFVUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUE4vcHdQL2ttRUFjR2FRMHY0SXdrR2hsaXpncWg2V0hjUDBFVFNqaDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQTE1QU9QZ0diZTAzSVRIVjRIK1BQZ1FkME1BczF6SnFXQzRXQ3NYdVM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKMnNsa1grMUtDWnhQc2p5ZVlpNUh4NWhsc3pDczBraWp0STVOb3R1Mm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx6M3dIUmsyK3o2UXlvTTNhMFYwM2U2Mmw4L0pNYnFKRWdwYzFSS1k1eE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5ya0hCWmNTdjNKNFdoWjNPYXFUdGxZWDYwcG9sSWNOb29PZ3BqTnBHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjl1RmdVNHUxNU5MbDVGV3l1d0hjYlFxMXZJV3NOb3RidERReXI0Y1VYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3dGkyOHUzMzZETEpJaWhwSGlkQlRHVTNHdXZra09ZdTYzK0dLQmRQUmlEVUxvb0FpelZmZnJYNDByc2pBQnlkd0g4VnFvZ0FtaytKUU42T3Yrc0R3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkNTWi9DY1llTHRDam9UQWZrV0VjSHlqejNxYUY5aTRETzVacHBMVHU4OVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1TaW56TTVtUkgyWVhaRldSUkFjTlEiLCJwaG9uZUlkIjoiYzEzMTM5NzktYThiMC00Y2E4LWI3NDAtMGQ5NGQzODA0MmJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd4VDU3bUFMMDd6UzJ5TDJ5UjVVSE5tS0JCVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLMTFzMFZ3RnpGSHlvQ3dGaXRSbjI0djlDMkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVEyS0s5WVkiLCJtZSI6eyJpZCI6IjI1NDczNTM0MjgwODozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeWZqZG9DRU5PTmpyWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzSEQremNpOGt1VkdsL2pENjFySVBrdUMvMUVwSS9mYnFxcUhpMXdqMjM4PSIsImFjY291bnRTaWduYXR1cmUiOiJROVJHSG50SXhhTVZLTkRwb2pzWVIwRncvVllFYVFtVW1iNEZJbFJhSDRJL3hrZzBOcWpzYThzTW1WMlZTTS9iUHBBQXBYbTV0Y2gxSDhYTm1NWmxEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0srTnZqdGhoQVA1b0IvQ2w4OWdTTDRzaDlxTlgzMkJXdEFtcThmWmFwYXRsYzNKZ1YrM2N0NlZScDU2UUE2OXRLNHBXWjhxMHM4RzlkaHQvSWFBQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MzUzNDI4MDg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkeHcvczNJdkpMbFJwZjR3K3RheUQ1TGd2OVJLU1AzMjZxcWg0dGNJOXQvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0MDkwMDgwfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ 𝐓𝐨𝐱𝐢𝐜 𝐓𝐞𝐜𝐡☣️⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "xhclinton⌝",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
