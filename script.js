// Typewriter effect for hero text
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize hero text animations
document.addEventListener("DOMContentLoaded", () => {
  const heroName = document.getElementById("heroName")
  const heroBio = document.getElementById("heroBio")

  setTimeout(() => {
    typeWriter(heroName, "يوسف مصطفى", 150)
  }, 500)

  setTimeout(() => {
    typeWriter(heroBio, "يأتي بالفرح حيثُ مرّ، ويترك الأثر حيثُ غاب", 80)
  }, 3000)
})

// Modal functionality
const modal = document.getElementById("modal")
const modalBody = document.getElementById("modalBody")
const modalClose = document.getElementById("modalClose")
const cards = document.querySelectorAll(".card")

// Personal messages templates
const messageTemplates = [
  "أهديك أجمل الكلمات وأعذب المشاعر، {name}، فأنت نور حياتي وسر سعادتي. بارك الله فيك وحفظك من كل سوء.",
  "إلى {name} الغالي، أرسل لك محبتي وأطيب تمنياتي. عسى الله أن يحقق لك كل ما تتمناه ويسعدك في الدنيا والآخرة.",
  "{name} العزيز، أنت شخص مميز في حياتي، وأدعو الله أن يبارك في عمرك ويرزقك السعادة والهناء.",
  "أحبك في الله يا {name}، وأسأل الله أن يجمعنا في جناته، وأن يرزقك الخير كله ويصرف عنك الشر كله.",
  "إلى قلبي الثاني {name}، أهديك دعواتي الصادقة بأن يحفظك الله ويرعاك ويسعدك في كل لحظة.",
  "{name} الحبيب، أنت من الأشخاص النادرين في هذه الحياة، بارك الله فيك وأدام عليك نعمة الصحة والعافية.",
  "يا {name}، أسأل الله أن يكتب لك السعادة في كل خطوة، وأن يرزقك من فضله وكرمه ما تقر به عينك.",
  "أحبك كثيراً {name}، وأدعو الله أن يحقق لك كل أحلامك ويبارك في حياتك ويرزقك الخير الكثير.",
  "إلى {name} الغالي على قلبي، أرسل لك أجمل التحيات وأطيب الأمنيات، عسى الله أن يسعدك دائماً.",
  "{name} العزيز، أنت نعمة من نعم الله في حياتي، أسأل الله أن يحفظك ويبارك فيك ويرزقك السعادة.",
  "يا أغلى الناس {name}، أهديك قلبي ومحبتي، وأدعو الله أن يكون معك في كل خطوة وأن يحقق لك كل ما تريد.",
  "إلى روحي الثانية {name}، أسأل الله أن يجعل أيامك كلها خير وبركة، وأن يرزقك السعادة في الدنيا والآخرة.",
]

// Card click handlers
cards.forEach((card) => {
  card.addEventListener("click", function () {
    const cardType = this.getAttribute("data-card")
    openModal(cardType)
  })
})

// Modal close handlers
modalClose.addEventListener("click", closeModal)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal()
  }
})

function openModal(cardType) {
  modal.classList.add("active")
  document.body.style.overflow = "hidden"

  switch (cardType) {
    case "personal":
      showPersonalInfo()
      break
    case "message":
      showMessageForm()
      break
  }
}

function closeModal() {
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function showPersonalInfo() {
  modalBody.innerHTML = `
        <h2 style="text-align: center; color: var(--aged-gold); margin-bottom: 2rem;">المعلومات الشخصية</h2>
        <div class="flip-cards-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <i class="fas fa-calendar-alt" style="font-size: 3rem; color: var(--aged-gold); margin-bottom: 1rem;"></i>
                        <h3 style="color: var(--soft-gold);">تاريخ الميلاد</h3>
                        <p style="color: var(--soft-gold); opacity: 0.8;">اضغط للمزيد</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 style="color: var(--aged-gold); margin-bottom: 1rem;">14/8/2012</h3>
                        <p style="color: var(--soft-gold); line-height: 1.6; text-align: center;">
                            في يوم مبارك من شهر أغسطس، أشرقت شمس جديدة على هذا العالم، 
                            حاملة معها الأمل والنور والخير الكثير
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="/placeholder.svg?height=100&width=100" 
                             style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 1rem; border: 2px solid var(--aged-gold);" 
                             alt="صورة شخصية">
                        <h3 style="color: var(--soft-gold);">معلومات إضافية</h3>
                        <p style="color: var(--soft-gold); opacity: 0.8;">اضغط للمزيد</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 style="color: var(--aged-gold); margin-bottom: 1rem;">يوسف مصطفى</h3>
                        <p style="color: var(--soft-gold); line-height: 1.6; text-align: center;">
                            شخص طيب ومحترم وملتزم وناجح، يسعى دائماً للتميز والإبداع في كل ما يقوم به
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
}

function showMessageForm() {
  modalBody.innerHTML = `
        <h2 style="text-align: center; color: var(--aged-gold); margin-bottom: 2rem;">رسالة شخصية</h2>
        <div class="message-form">
            <div class="form-group">
                <label for="personName">اسم الشخص العزيز:</label>
                <input type="text" id="personName" placeholder="أدخل الاسم هنا..." required>
            </div>
            <div class="form-group">
                <label for="personBirthdate">تاريخ الميلاد (اختياري):</label>
                <input type="date" id="personBirthdate">
            </div>
            <button type="button" class="btn" onclick="generateMessage()">إنشاء رسالة حب</button>
            <button type="button" class="btn" onclick="resetForm()" style="background: linear-gradient(135deg, var(--charcoal), var(--dark-olive));">إعادة تعيين</button>
        </div>
        <div id="messageResult" style="display: none;"></div>
    `
}

function generateMessage() {
  const name = document.getElementById("personName").value.trim()
  const birthdate = document.getElementById("personBirthdate").value

  if (!name) {
    alert("يرجى إدخال اسم الشخص")
    return
  }

  const randomTemplate = messageTemplates[Math.floor(Math.random() * messageTemplates.length)]
  const personalizedMessage = randomTemplate.replace(/{name}/g, name)

  let birthdateText = ""
  if (birthdate) {
    const date = new Date(birthdate)
    const options = { year: "numeric", month: "long", day: "numeric" }
    const arabicDate = date.toLocaleDateString("ar-SA", options)
    birthdateText = `<p style="color: var(--aged-gold); margin-bottom: 1rem;"><i class="fas fa-birthday-cake"></i> مولود في: ${arabicDate}</p>`
  }

  const resultDiv = document.getElementById("messageResult")
  resultDiv.innerHTML = `
        <div class="message-result">
            <h3><i class="fas fa-heart" style="color: var(--aged-gold);"></i> رسالة خاصة</h3>
            ${birthdateText}
            <p style="color: var(--soft-gold);">${personalizedMessage}</p>
            <div style="margin-top: 2rem;">
                <button class="btn" onclick="generateMessage()" style="margin-left: 1rem;">رسالة جديدة</button>
                <button class="btn" onclick="resetForm()" style="background: linear-gradient(135deg, var(--charcoal), var(--dark-olive));">إعادة تعيين</button>
            </div>
        </div>
    `

  resultDiv.style.display = "block"
  resultDiv.scrollIntoView({ behavior: "smooth" })
}

function resetForm() {
  document.getElementById("personName").value = ""
  document.getElementById("personBirthdate").value = ""
  const resultDiv = document.getElementById("messageResult")
  resultDiv.style.display = "none"
}

// Add floating particles animation
function createFloatingParticles() {
  const particles = document.querySelector(".floating-particles")

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement("div")
    particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: var(--aged-gold);
            border-radius: 50%;
            animation: float-particle ${4 + Math.random() * 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: 0.7;
        `
    particles.appendChild(particle)
  }
}

// Initialize particles when page loads
document.addEventListener("DOMContentLoaded", createFloatingParticles)

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = "smooth"
