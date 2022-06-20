let handler = async (m, { conn }) => {
let caption = `_*NGENTOD YOK KAK*_`

conn.sendButton( m.chat, caption, `©️ Putra Botz`, `AYOK KAK KE OYO`, `nai`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
