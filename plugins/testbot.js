let handler = async (m, { conn }) => {
let caption = `_*SIP DAH AKTIF BANH*_`

conn.sendButton( m.chat, caption, `©️ Putra Botz`, `OKE DECK`, `nai`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
