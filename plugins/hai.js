let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA _*PACARMU*_,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ PutraBotz`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(hallo|hay|rot|putra|bot|haibotz|hai|hay|menu)/i
handler.command = new RegExp
module.exports = handler
