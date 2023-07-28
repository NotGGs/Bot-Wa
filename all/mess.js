require("./global")

const mess = {
   wait: "Wait Tod Lagi Proses",
   success: "Sukses Tod`",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Ngen?",
       link: "Link Nya Mana Ngen?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Maaf Masbro Fitur Ini Hanya Bisa Digunakan Di Dalam Group",
       private: "Maaf Masbro Fitur Ini Hanya Bisa Digunakan Di Dalam Private Chat",
       owner: "Maaf Ngen Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       admin: "Maaf Ngab Fitur Ini Hanya Bisa Digunakan Sama Owner Bot",
       badmin: "Maaf Ngab Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf lu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})