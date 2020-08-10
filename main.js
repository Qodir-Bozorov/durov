const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'

const newSpeech = document.getElementById('voiceBtn')

voiceBtn.onclick = function () {

  rec.start()
}

rec.onresult = function (event) {
  const buyruq = event.results[0][0].transcript

  if (buyruq) {
    const newMsg = document.createElement('LI')
    newMsg.textContent = buyruq
    msgs.appendChild(newMsg)
    newMsg.classList.add("me")

    if (newMsg.textContent == "salom" || newMsg.textContent == "Salom") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "salom, qalesan?"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 2000)
    }

    else if (newMsg.textContent == "mayli gaplashamiz" || newMsg.textContent == "xayr") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "ok fine"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 2000)
    }

    else if (newMsg.textContent == "siz kimsiz" || newMsg.textContent == "kimsan") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "Pavel Durovman"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 5000)
    }

    else if (newMsg.textContent == "meni taniysanmi" || newMsg.textContent == "men kimman") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "tanimayman tanishamizmi"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 2500)
    }
    else if (newMsg.textContent == "tanimayman tanishamizmi" || newMsg.textContent == "tanishaylik") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "men telegramning asoschisiman. Siz kimsiz?"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 2600)
    }

    else if (newMsg.textContent == "men qodirman" || newMsg.textContent == "Qodirman") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "Eeeee assalomu alaykum Qodir aka"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 4000)
    }

    else if (newMsg.textContent == "men telegramning asoschisiman. Siz kimsiz?" || newMsg.textContent == "meni ismim") {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "O'qiysizmi ishlaysizmi?"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 3000)
    }

    else {
      setTimeout(() => {
        const newMsgleft = document.createElement("li")
        newMsgleft.textContent = "Tushunmadim uzr"
        newMsgleft.classList.add('you')
        msgs.appendChild(newMsgleft)
      }, 7000)
    }
  }
}


function automsg() {
  var random_boolean = Math.random() >= 0.7;
  if (random_boolean) {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "Men bilan ovoz yozib ham gaplashsangiz bo'ladi buning uchun 🎙 ni bosing"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 5000)
  }
}

rec, onended = automsg()

//USER MESSAGE

function addMsg(event) {
  const newMsg = document.createElement('LI')
  newMsg.textContent = newMsgArea.value
  msgs.appendChild(newMsg)
  newMsg.classList.add("me")
  newMsgArea.value = ''

  if (newMsg.textContent == "salom" || newMsg.textContent == "Salom") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "salom, qalesan?"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 2000)
  }
  else if (newMsg.textContent == "mayli gaplashamiz" || newMsg.textContent == "xayr") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "ok fine"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 2000)
  }

  else if (newMsg.textContent == "siz kimsiz" || newMsg.textContent == "kimsan") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "Pavel Durovman"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 5000)
  }

  else if (newMsg.textContent == "meni taniysanmi" || newMsg.textContent == "men kimman") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "tanimayman tanishamizmi"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 2500)
  }
  else if (newMsg.textContent == "tanimayman tanishamizmi" || newMsg.textContent == "tanishaylik") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "men telegramning asoschisiman. Siz kimsiz?"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 2600)
  }

  else if (newMsg.textContent == "men qodirman" || newMsg.textContent == "Qodirman") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "Eeeee assalomu alaykum Qodir aka"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 4000)
  }

  else if (newMsg.textContent == "men telegramning asoschisiman. Siz kimsiz?" || newMsg.textContent == "meni ismim") {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "O'qiysizmi ishlaysizmi?"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 3000)
  }

  else {
    setTimeout(() => {
      const newMsgleft = document.createElement("li")
      newMsgleft.textContent = "Tushunmadim uzr"
      newMsgleft.classList.add('you')
      msgs.appendChild(newMsgleft)
    }, 7000)

    newMsgArea.value = ""

  }
}
//========================

//bot message
// function addBotMsg(event) {
//   const newMsg = document.createElement('LI')
//   newMsg.textContent = //#############
//   msgs.appendChild(newMsg)
//   newMsg.classList.add("you")
// //====================================

sender.onclick = addMsg

// Send message with ENTER =======================
newMsgArea.onkeyup = function (event) {

  if (event.keyCode === 13) {
    addMsg()
  }
}

// =============THEMES================

function modeGreen() {
  document.body.style.backgroundColor = 'rgba(135, 212, 135, 0.5)'
}

if (dark.onclick) {
  modeGreen()
}