let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
udh 2022 masih ngemis sc banh? wkwk
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*✧──────────···──────────✧*\n                   Putbotz Ganteng`, 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
