
const reading = function (num) {
  console.log(num)
  let card = ''
  switch (num) {
    case 0:
      card = '😜 THE FOOL'
    break
    case 1:
      card = '✨ THE MAGICIAN'
    break
    case 2:
      card = '👩‍🎓 THE HIGH PREISTESS'
    break
    case 3:
      card = '🤰 THE EMPRESS'
    break
    case 4:
      card = '👑 THE EMPEROR'
    break
    case 5:
      card = '👨‍⚖️ THE HIEROPHANT'
    break
    case 6:
      card = '💏 THE LOVERS'
    break
    case 7:
      card = '🏎️ THE CHARIOT'
    break
    case 8:
      card = '🦁 STRENGTH'
    break
    case 9:
      card = '🐚 THE HERMIT'
    break
    case 10:
      card = '🎡 WHEEL OF FORTUNE'
    break
    case 11:
      card = '⚖️ JUSTICE'
    break
    case 12:
      card = '🙃 THE HANGED MAN'
    break
    case 13:
      card = '⚰️ DEATH'
    break
    case 14:
      card = '🥂 TEMPERANCE'
    break
    case 15:
      card = '😈 THE DEVIL'
    break
    case 16:
      card = '⚡ THE TOWER'
    break
    case 17:
      card = '🌟 THE STAR'
    break
    case 18:
      card = '🌙 THE MOON'
    break
    case 19:
      card = '☀️ THE SUN'
    break
    case 20:
      card = '🙌 JUDGMENT'
    break
    case 21:
      card = '🌎 THE WORLD'
    break
    default:
      card = '🤷 WEIRD'
    break
  }
  card += '\n'
  return card
}

module.exports = {
  reading
}
