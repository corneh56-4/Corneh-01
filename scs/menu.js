/*onst util = require('util');
const fs = require('fs-extra');
const axios = require('axios');
const { adams } = require(__dirname + "/../Ibrahim/adams");
const { format } = require(__dirname + "/../Ibrahim/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../config");

const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

const runtime = function (seconds) { 
    seconds = Number(seconds); 
    var d = Math.floor(seconds / (3600 * 24)); 
    var h = Math.floor((seconds % (3600 * 24)) / 3600); 
    var m = Math.floor((seconds % 3600) / 60); 
    var s = Math.floor(seconds % 60); 
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
    return dDisplay + hDisplay + mDisplay + sDisplay; 
};

// Function to fetch GitHub repo data
const fetchGitHubStats = async () => {
    try {
        const repo = 'CORNEH TECH/corneh56-4'; // Replace with your repo
        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        const forks = response.data.forks_count;
        const stars = response.data.stargazers_count;
        const totalUsers = (forks * 2) + (stars * 2);
        return { forks, stars, totalUsers };
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        return { forks: 0, stars: 0, totalUsers: 0 }; 
    }
};

adams({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage } = commandeOptions;
    let { cm } = require(__dirname + "/../Ibrahim/adams");
    var coms = {};
    var mode = s.MODE.toLowerCase() === "public" ? "public" : "private";

    cm.map((com) => {
        const categoryUpper = com.categorie.toUpperCase();
        if (!coms[categoryUpper]) coms[categoryUpper] = [];
        coms[categoryUpper].push(com.nomCom);
    });

    moment.tz.setDefault(`${s.TZ}`);
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');
    const hour = moment().hour();

    let greeting = "Good night";
    if (hour >= 0 && hour <= 11) greeting = "Good morning";
    else if (hour >= 12 && hour <= 16) greeting = "Good afternoon";
    else if (hour >= 16 && hour <= 21) greeting = "Good evening";

    const { totalUsers } = await fetchGitHubStats();
    const formattedTotalUsers = totalUsers.toLocaleString();

    let infoMsg = `
╭─────═━┈┈━═──━┈⊷
┇ ʙᴏᴛ ɴᴀᴍᴇ: *Cᴍᴡ TC*
┇ ᴍᴏᴅᴇ: *${mode}*
┇ ᴘʀᴇғɪx: *[ ${prefixe} ]*
┇ ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┇ ᴛʏᴘᴇ: *ᴠ6x*
┇ ᴅᴀᴛᴇ: *${date}*
┇ ᴛɪᴍᴇ: *${temps}*
┇ ᴄᴀᴘᴀᴄɪᴛʏ ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
╰─────═━┈┈━═──━┈⊷\n\n
🌍 𝐁𝐄𝐒𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 🌍\n\n`;

    let menuMsg = `${readmore}  
╭─────═━┈┈━═──━┈⊷
┇ Cᴍᴡ TC ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ
╰─────═━┈┈━═──━┈⊷\n\n`;

    const sortedCategories = Object.keys(coms).sort();
    sortedCategories.forEach((cat) => {
        menuMsg += `*╭────❒* *${cat}* *❒*`;
        coms[cat].forEach((cmd) => {
            menuMsg += `\n*╏* ${cmd}`;
        });
        menuMsg += `\n*╰─═════════════❒*\n`;
    });

    menuMsg += `
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
©CORNEH WAMBUA 𝑷𝒓𝒐𝒋𝒆𝒄𝒕
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄`;

    try {
        await zk.sendMessage(dest, { 
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [nomAuteurMessage],
                externalAdReply: {
                    body: "©Ibrahim Adams",
                    thumbnailUrl: "https://files.catbox.moe/klxk87.webp",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb32FIvD8SDyl6qmsA1b',
                    mediaType: 1,
                    rendersmallThumbnail: true
                }
            }
        });

        // Send audio with caption
        await zk.sendMessage(dest, { 
            audio: { 
                url: "https://files.catbox.moe/lf6po0.mp3" // Replace with your audio URL
            }, 
            mimetype: 'audio/mp4', 
            ptt: false, // Set to true if you want it as a voice note
            caption: "CMW TC SONG",
            contextInfo: {
                externalAdReply: {
                    body: "CMW SONG BY CORNEH",
                    thumbnailUrl: "https://files.catbox.moe/va22vq.jpeg",
                    sourceUrl: 'https://whatsapp.com/channel/0029Vb32FIvD8SDyl6qmsA1b',
                    rendersmallThumbnail: false
                }
            }
        });

    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});
**/
