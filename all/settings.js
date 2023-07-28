require("./module")

global.owner = "6281396189304"
global.namabot = "AzrilBotzzMD"
global.namaCreator = "ঔৣ⃕᭝ALWAYSS-AZRIL᭄`"
global.autoJoin = false
global.antilink = false
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
global.domain = 'https://reseller.hanzzzz.com' // Isi Domain Lu
global.apikey = 'ptla_4Kf39SHBP0fYdwCA17x3Ki83U3SDBDVmlKnRjwCZMSI' // Isi Apikey Plta Lu
global.capikey = 'ptlc_wvGfaW1IbZNa60TTQJHHKXq2kRfHXs9pGGoz5JwSrv3' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.thumb = fs.readFileSync("./thumb.png")
global.audionya = fs.readFileSync("./all/sound.mp3")
global.tekspushkon = "Hola Mek Sv AlwayssAzril"
global.tekspushkonv2 = "Hola Sv AlwayssAzril"
global.packname = "ঔৣ⃕᭝ALWAYSS-ZRIL᭄"
global.author = "Sticker By Azril"
global.jumlah = "5"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})