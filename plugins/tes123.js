let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Putbotz on banh🧃
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*✧──────────···──────────✧*\n                   ${wm}`, 'status@broadcast')
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
