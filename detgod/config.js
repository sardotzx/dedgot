/*
       RESMI DARI DrayXD Official

  LARANGAN
 
- DI LARANG MEMPERJUAL SC INI
- DI LARANG MEMPERBAGI SC INI

JIKA MELANGGAR LARANGAN YANG DI BERIKAN DRAY, YAPIT SE UMUR HIDUP + 7 TURUNAN

JANGAN LUPA SUPPORT

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "𝑫𝑬𝑨𝑻𝑯𝑮𝑶𝑫"
global.namabot = "𝑫𝑬𝑨𝑻𝑯𝑮𝑶𝑫"
global.versisc = " 𝟒.𝟎"
global.owner = ["46769292505"]
global.tele = "https://wa.me/46769292505"
global.url = "https://www.youtube.com/"
global.namastore = "𝑫𝑬𝑨𝑻𝑯𝑮𝑶𝑫"

// Global Simbol
global.simbol = "𓉸"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !`,
    botAdmin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !`,
    OnlyOwner: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Owner !`,
    OnlyGrup: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Group Chat !`,
    private: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Private Chat !`,
    wait: `\`[ # ]\` Wait Tunggu Sebentar`,
    notregist: `\`[ # ]\` Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu`,
    premium: `\`[ # ]\` khusus Murbug" Mau Join? Chat Owner`,
    endLimit: `\`[ # ]\` Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB`,
     bugrespon: `\`[ # ]\` 𝑫𝑬𝑨𝑻𝑯𝑮𝑶𝑫
     saber karo terget nome bug howa`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
     Berashi ho gaya ha `,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})