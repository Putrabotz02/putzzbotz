let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *BIODATA OWNER* ❉───
║│➸ *Nama* : Putra Ade Febrian  
║│➸ *Umur* : 17
║│➸ *Kelas* :  11 
║│➸ *Status* : _*ULTRAMEN*_
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *ASAL KOTA* ❉───
║│➸ *DAERAH* : *_Sukra, Indramayu Jawa BARAT_*
║│➸ *ASAL KOTA* : *_Indramayu_*
║│➸ *ALAMAT RUMAH* : *[PRIVASI]*
║│
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Romz')).buffer(), ext, 'ZxyuuBotz', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewazifa', m)

}
handler.help = ['asal', 'kota']
handler.tags = ['info']
handler.command = /^(asal|kota)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
