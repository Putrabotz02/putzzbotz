let handler = async (m, { conn }) => {
let caption = `_*ANJIR TOXIC AWOKAWOK, TERUSKAN BAKATMU TODNGENTOD!!!*_`

conn.sendButton( m.chat, caption, `©️ PutzBotz`, `ANJAS AWOKAWOK`, `putra`, m)

       }
       
handler.customPrefix = /^(anjing|anjj|anj|babi|bab1|ngentod|sial|anjir|anjirt|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh)/i
handler.command = new RegExp
module.exports = handler
