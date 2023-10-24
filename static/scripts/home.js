const header = document.getElementById("header");


window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


const langButton = document.querySelector("#header .lang ul")
const currentLangEl = document.querySelector("#header .lang ul li")
const dropdownLangs = document.querySelector("#header .lang .lang-dropdown")
const langList = document.querySelectorAll("#header .lang .lang-dropdown ul")
const langEls = document.querySelectorAll("#header .lang .lang-dropdown ul li")


langButton.addEventListener("click", () => {
  if (dropdownLangs.classList.contains("active")){
      dropdownLangs.classList.remove('active')
    }
  else{
      dropdownLangs.classList.add('active')
  }
})


langList.forEach(lang => {
  lang.addEventListener("click", () => {
    let langEl = lang.querySelector("li")
    let selectLang = langEl.textContent
    langEl.textContent = currentLangEl.textContent
    currentLangEl.textContent = selectLang
  })
});


document.querySelectorAll('#header .navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1); // Bağlantının hedef ID'sini alın
    const targetElement = document.getElementById(targetId); // Hedef elementi alın
    
    if (targetElement) {
      // Sayfayı hedef elementin üstüne kaydırın
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth' // Yumuşak kaydırma efekti ekler
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Sayfa yüklendiğinde "about" sekmesine tıklanmışsa sayfanın başına git
  const currentHash = window.location.hash;
  if (currentHash === "#about") {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});






const playButton = document.querySelector("#about .summit-video .play-button")
const openVideoWrapper = document.querySelector("#about .wrapper")
const youtubeVideo = document.querySelector("#about .wrapper .videoframe iframe")

playButton.addEventListener("click", () => {
  openVideoWrapper.style.display = "block"
  youtubeVideo.src = youtubeVideo.src + "?autoplay=1";
  document.body.style.overflow = 'hidden';
})

openVideoWrapper.addEventListener("click", () => {
  openVideoWrapper.style.display = "none"
  youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
  document.body.style.overflow = 'auto';
})
























var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true, // Slider'ı döngülü hale getir
  loopFillGroupWithBlank: true, // Boş slaytları doldur
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 0
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 0
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 0
    },
  },
  autoplay: {
    delay: 2500, // Otomatik kaydırma aralığı (3 saniye olarak ayarlandı)
    disableOnInteraction: false, // Kullanıcı etkileşimi (dokunma) sonrası otomatik kaydırmayı devam ettir
  },
});
