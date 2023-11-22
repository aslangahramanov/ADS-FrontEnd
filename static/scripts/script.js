const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


const animButton = document.getElementById("anim-button")
const rect = document.getElementById("rect")


const langButton = document.querySelector("#header .lang ul");
const currentLangEl = document.querySelector("#header .lang ul li");
const dropdownLangs = document.querySelector("#header .lang .lang-dropdown");
const langList = document.querySelectorAll("#header .lang .lang-dropdown ul");
const langEls = document.querySelectorAll("#header .lang .lang-dropdown ul li");

langButton.addEventListener("click", () => {
  if (dropdownLangs.classList.contains("active")) {
    dropdownLangs.classList.remove("active");
  } else {
    dropdownLangs.classList.add("active");
  }
});

langList.forEach((lang) => {
  lang.addEventListener("click", () => {
    let langEl = lang.querySelector("li");
    let selectLang = langEl.textContent;
    langEl.textContent = currentLangEl.textContent;
    currentLangEl.textContent = selectLang;
  });
});

const playButton = document.querySelector("#about .summit-video .play-button");

if (playButton) {
  document
    .querySelectorAll("#header .navbar .inline-link")
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1); // Bağlantının hedef ID'sini alın
        const targetElement = document.getElementById(targetId); // Hedef elementi alın

        if (targetId == "index.html") {
        }

        if (targetElement) {
          // Sayfayı hedef elementin üstüne kaydırın
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth", // Yumuşak kaydırma efekti ekler
          });
        }
      });
    });

  document.addEventListener("DOMContentLoaded", function () {
    const currentHash = window.location.hash;
    if (currentHash === "#about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}

const openVideoWrapper = document.querySelector("#about .wrapper");
const youtubeVideo = document.querySelector(
  "#about .wrapper .videoframe iframe"
);

if (playButton && openVideoWrapper && youtubeVideo) {
  playButton.addEventListener("click", () => {
    openVideoWrapper.style.display = "block";
    youtubeVideo.src = youtubeVideo.src + "?autoplay=1";
    document.body.style.overflow = "hidden";
  });

  openVideoWrapper.addEventListener("click", () => {
    openVideoWrapper.style.display = "none";
    youtubeVideo.src = youtubeVideo.src.replace("?autoplay=1", "");
    document.body.style.overflow = "auto";
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true, // Slider'ı döngülü hale getir
    loopFillGroupWithBlank: true, // Boş slaytları doldur
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
    autoplay: {
      delay: 2500, // Otomatik kaydırma aralığı (3 saniye olarak ayarlandı)
      disableOnInteraction: false, // Kullanıcı etkileşimi (dokunma) sonrası otomatik kaydırmayı devam ettir
    },
  });
}

const loginButton = document.getElementById("login-button");
const loginPopup = document.getElementById("login-popup");
const loginWrapper = document.getElementById("login-wrapper");


if (loginButton){
  loginButton.addEventListener("click", () => {
    loginPopup.style.display = "block";
    document.body.style.overflow = "hidden";
  });
}

if (loginWrapper) {
  loginWrapper.addEventListener("click", () => {
    loginPopup.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

// REGISTER SCRIPTS
const imageFileInput = document.getElementById("file-input");
const iconImage = document.getElementById("icon-image");
const imageBox = document.getElementById("user-image");
const selectImage = document.getElementById("select-image");
const countryList = document.getElementById("country-list");
const countryInput = document.getElementById("country-input");
const countriesBox = document.getElementById("countries");
const openButton = document.getElementById("countries-open-icon");
const phoneInput = document.getElementById("phone-input");

if (countryInput) {
  imageBox.addEventListener("click", () => {
    imageFileInput.click();
    imageFileInput.addEventListener("change", function () {
      let imageFile = imageFileInput.files[0];
      if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        iconImage.style.display = "none";
        selectImage.style.display = "block";
        selectImage.src = imageUrl;
      } else {
        selectImage.src = "";
      }
    });
  });

  const countries = {
    countries: [
      {
        code: "+7 840",
        name: "Abkhazia",
      },
      {
        code: "+93",
        name: "Afghanistan",
      },
      {
        code: "+355",
        name: "Albania",
      },
      {
        code: "+213",
        name: "Algeria",
      },
      {
        code: "+1 684",
        name: "American Samoa",
      },
      {
        code: "+376",
        name: "Andorra",
      },
      {
        code: "+244",
        name: "Angola",
      },
      {
        code: "+1 264",
        name: "Anguilla",
      },
      {
        code: "+1 268",
        name: "Antigua and Barbuda",
      },
      {
        code: "+54",
        name: "Argentina",
      },
      {
        code: "+374",
        name: "Armenia",
      },
      {
        code: "+297",
        name: "Aruba",
      },
      {
        code: "+247",
        name: "Ascension",
      },
      {
        code: "+61",
        name: "Australia",
      },
      {
        code: "+672",
        name: "Australian External Territories",
      },
      {
        code: "+43",
        name: "Austria",
      },
      {
        code: "+994",
        name: "Azerbaijan",
      },
      {
        code: "+1 242",
        name: "Bahamas",
      },
      {
        code: "+973",
        name: "Bahrain",
      },
      {
        code: "+880",
        name: "Bangladesh",
      },
      {
        code: "+1 246",
        name: "Barbados",
      },
      {
        code: "+1 268",
        name: "Barbuda",
      },
      {
        code: "+375",
        name: "Belarus",
      },
      {
        code: "+32",
        name: "Belgium",
      },
      {
        code: "+501",
        name: "Belize",
      },
      {
        code: "+229",
        name: "Benin",
      },
      {
        code: "+1 441",
        name: "Bermuda",
      },
      {
        code: "+975",
        name: "Bhutan",
      },
      {
        code: "+591",
        name: "Bolivia",
      },
      {
        code: "+387",
        name: "Bosnia and Herzegovina",
      },
      {
        code: "+267",
        name: "Botswana",
      },
      {
        code: "+55",
        name: "Brazil",
      },
      {
        code: "+246",
        name: "British Indian Ocean Territory",
      },
      {
        code: "+1 284",
        name: "British Virgin Islands",
      },
      {
        code: "+673",
        name: "Brunei",
      },
      {
        code: "+359",
        name: "Bulgaria",
      },
      {
        code: "+226",
        name: "Burkina Faso",
      },
      {
        code: "+257",
        name: "Burundi",
      },
      {
        code: "+855",
        name: "Cambodia",
      },
      {
        code: "+237",
        name: "Cameroon",
      },
      {
        code: "+1",
        name: "Canada",
      },
      {
        code: "+238",
        name: "Cape Verde",
      },
      {
        code: "+ 345",
        name: "Cayman Islands",
      },
      {
        code: "+236",
        name: "Central African Republic",
      },
      {
        code: "+235",
        name: "Chad",
      },
      {
        code: "+56",
        name: "Chile",
      },
      {
        code: "+86",
        name: "China",
      },
      {
        code: "+61",
        name: "Christmas Island",
      },
      {
        code: "+61",
        name: "Cocos-Keeling Islands",
      },
      {
        code: "+57",
        name: "Colombia",
      },
      {
        code: "+269",
        name: "Comoros",
      },
      {
        code: "+242",
        name: "Congo",
      },
      {
        code: "+243",
        name: "Congo, Dem. Rep. of (Zaire)",
      },
      {
        code: "+682",
        name: "Cook Islands",
      },
      {
        code: "+506",
        name: "Costa Rica",
      },
      {
        code: "+385",
        name: "Croatia",
      },
      {
        code: "+53",
        name: "Cuba",
      },
      {
        code: "+599",
        name: "Curacao",
      },
      {
        code: "+537",
        name: "Cyprus",
      },
      {
        code: "+420",
        name: "Czech Republic",
      },
      {
        code: "+45",
        name: "Denmark",
      },
      {
        code: "+246",
        name: "Diego Garcia",
      },
      {
        code: "+253",
        name: "Djibouti",
      },
      {
        code: "+1 767",
        name: "Dominica",
      },
      {
        code: "+1 809",
        name: "Dominican Republic",
      },
      {
        code: "+670",
        name: "East Timor",
      },
      {
        code: "+56",
        name: "Easter Island",
      },
      {
        code: "+593",
        name: "Ecuador",
      },
      {
        code: "+20",
        name: "Egypt",
      },
      {
        code: "+503",
        name: "El Salvador",
      },
      {
        code: "+240",
        name: "Equatorial Guinea",
      },
      {
        code: "+291",
        name: "Eritrea",
      },
      {
        code: "+372",
        name: "Estonia",
      },
      {
        code: "+251",
        name: "Ethiopia",
      },
      {
        code: "+500",
        name: "Falkland Islands",
      },
      {
        code: "+298",
        name: "Faroe Islands",
      },
      {
        code: "+679",
        name: "Fiji",
      },
      {
        code: "+358",
        name: "Finland",
      },
      {
        code: "+33",
        name: "France",
      },
      {
        code: "+596",
        name: "French Antilles",
      },
      {
        code: "+594",
        name: "French Guiana",
      },
      {
        code: "+689",
        name: "French Polynesia",
      },
      {
        code: "+241",
        name: "Gabon",
      },
      {
        code: "+220",
        name: "Gambia",
      },
      {
        code: "+995",
        name: "Georgia",
      },
      {
        code: "+49",
        name: "Germany",
      },
      {
        code: "+233",
        name: "Ghana",
      },
      {
        code: "+350",
        name: "Gibraltar",
      },
      {
        code: "+30",
        name: "Greece",
      },
      {
        code: "+299",
        name: "Greenland",
      },
      {
        code: "+1 473",
        name: "Grenada",
      },
      {
        code: "+590",
        name: "Guadeloupe",
      },
      {
        code: "+1 671",
        name: "Guam",
      },
      {
        code: "+502",
        name: "Guatemala",
      },
      {
        code: "+224",
        name: "Guinea",
      },
      {
        code: "+245",
        name: "Guinea-Bissau",
      },
      {
        code: "+595",
        name: "Guyana",
      },
      {
        code: "+509",
        name: "Haiti",
      },
      {
        code: "+504",
        name: "Honduras",
      },
      {
        code: "+852",
        name: "Hong Kong SAR China",
      },
      {
        code: "+36",
        name: "Hungary",
      },
      {
        code: "+354",
        name: "Iceland",
      },
      {
        code: "+91",
        name: "India",
      },
      {
        code: "+62",
        name: "Indonesia",
      },
      {
        code: "+98",
        name: "Iran",
      },
      {
        code: "+964",
        name: "Iraq",
      },
      {
        code: "+353",
        name: "Ireland",
      },
      {
        code: "+972",
        name: "Israel",
      },
      {
        code: "+39",
        name: "Italy",
      },
      {
        code: "+225",
        name: "Ivory Coast",
      },
      {
        code: "+1 876",
        name: "Jamaica",
      },
      {
        code: "+81",
        name: "Japan",
      },
      {
        code: "+962",
        name: "Jordan",
      },
      {
        code: "+7 7",
        name: "Kazakhstan",
      },
      {
        code: "+254",
        name: "Kenya",
      },
      {
        code: "+686",
        name: "Kiribati",
      },
      {
        code: "+965",
        name: "Kuwait",
      },
      {
        code: "+996",
        name: "Kyrgyzstan",
      },
      {
        code: "+856",
        name: "Laos",
      },
      {
        code: "+371",
        name: "Latvia",
      },
      {
        code: "+961",
        name: "Lebanon",
      },
      {
        code: "+266",
        name: "Lesotho",
      },
      {
        code: "+231",
        name: "Liberia",
      },
      {
        code: "+218",
        name: "Libya",
      },
      {
        code: "+423",
        name: "Liechtenstein",
      },
      {
        code: "+370",
        name: "Lithuania",
      },
      {
        code: "+352",
        name: "Luxembourg",
      },
      {
        code: "+853",
        name: "Macau SAR China",
      },
      {
        code: "+389",
        name: "Macedonia",
      },
      {
        code: "+261",
        name: "Madagascar",
      },
      {
        code: "+265",
        name: "Malawi",
      },
      {
        code: "+60",
        name: "Malaysia",
      },
      {
        code: "+960",
        name: "Maldives",
      },
      {
        code: "+223",
        name: "Mali",
      },
      {
        code: "+356",
        name: "Malta",
      },
      {
        code: "+692",
        name: "Marshall Islands",
      },
      {
        code: "+596",
        name: "Martinique",
      },
      {
        code: "+222",
        name: "Mauritania",
      },
      {
        code: "+230",
        name: "Mauritius",
      },
      {
        code: "+262",
        name: "Mayotte",
      },
      {
        code: "+52",
        name: "Mexico",
      },
      {
        code: "+691",
        name: "Micronesia",
      },
      {
        code: "+1 808",
        name: "Midway Island",
      },
      {
        code: "+373",
        name: "Moldova",
      },
      {
        code: "+377",
        name: "Monaco",
      },
      {
        code: "+976",
        name: "Mongolia",
      },
      {
        code: "+382",
        name: "Montenegro",
      },
      {
        code: "+1664",
        name: "Montserrat",
      },
      {
        code: "+212",
        name: "Morocco",
      },
      {
        code: "+95",
        name: "Myanmar",
      },
      {
        code: "+264",
        name: "Namibia",
      },
      {
        code: "+674",
        name: "Nauru",
      },
      {
        code: "+977",
        name: "Nepal",
      },
      {
        code: "+31",
        name: "Netherlands",
      },
      {
        code: "+599",
        name: "Netherlands Antilles",
      },
      {
        code: "+1 869",
        name: "Nevis",
      },
      {
        code: "+687",
        name: "New Caledonia",
      },
      {
        code: "+64",
        name: "New Zealand",
      },
      {
        code: "+505",
        name: "Nicaragua",
      },
      {
        code: "+227",
        name: "Niger",
      },
      {
        code: "+234",
        name: "Nigeria",
      },
      {
        code: "+683",
        name: "Niue",
      },
      {
        code: "+672",
        name: "Norfolk Island",
      },
      {
        code: "+850",
        name: "North Korea",
      },
      {
        code: "+1 670",
        name: "Northern Mariana Islands",
      },
      {
        code: "+47",
        name: "Norway",
      },
      {
        code: "+968",
        name: "Oman",
      },
      {
        code: "+92",
        name: "Pakistan",
      },
      {
        code: "+680",
        name: "Palau",
      },
      {
        code: "+970",
        name: "Palestinian Territory",
      },
      {
        code: "+507",
        name: "Panama",
      },
      {
        code: "+675",
        name: "Papua New Guinea",
      },
      {
        code: "+595",
        name: "Paraguay",
      },
      {
        code: "+51",
        name: "Peru",
      },
      {
        code: "+63",
        name: "Philippines",
      },
      {
        code: "+48",
        name: "Poland",
      },
      {
        code: "+351",
        name: "Portugal",
      },
      {
        code: "+1 787",
        name: "Puerto Rico",
      },
      {
        code: "+974",
        name: "Qatar",
      },
      {
        code: "+262",
        name: "Reunion",
      },
      {
        code: "+40",
        name: "Romania",
      },
      {
        code: "+7",
        name: "Russia",
      },
      {
        code: "+250",
        name: "Rwanda",
      },
      {
        code: "+685",
        name: "Samoa",
      },
      {
        code: "+378",
        name: "San Marino",
      },
      {
        code: "+966",
        name: "Saudi Arabia",
      },
      {
        code: "+221",
        name: "Senegal",
      },
      {
        code: "+381",
        name: "Serbia",
      },
      {
        code: "+248",
        name: "Seychelles",
      },
      {
        code: "+232",
        name: "Sierra Leone",
      },
      {
        code: "+65",
        name: "Singapore",
      },
      {
        code: "+421",
        name: "Slovakia",
      },
      {
        code: "+386",
        name: "Slovenia",
      },
      {
        code: "+677",
        name: "Solomon Islands",
      },
      {
        code: "+27",
        name: "South Africa",
      },
      {
        code: "+500",
        name: "South Georgia and the South Sandwich Islands",
      },
      {
        code: "+82",
        name: "South Korea",
      },
      {
        code: "+34",
        name: "Spain",
      },
      {
        code: "+94",
        name: "Sri Lanka",
      },
      {
        code: "+249",
        name: "Sudan",
      },
      {
        code: "+597",
        name: "Suriname",
      },
      {
        code: "+268",
        name: "Swaziland",
      },
      {
        code: "+46",
        name: "Sweden",
      },
      {
        code: "+41",
        name: "Switzerland",
      },
      {
        code: "+963",
        name: "Syria",
      },
      {
        code: "+886",
        name: "Taiwan",
      },
      {
        code: "+992",
        name: "Tajikistan",
      },
      {
        code: "+255",
        name: "Tanzania",
      },
      {
        code: "+66",
        name: "Thailand",
      },
      {
        code: "+670",
        name: "Timor Leste",
      },
      {
        code: "+228",
        name: "Togo",
      },
      {
        code: "+690",
        name: "Tokelau",
      },
      {
        code: "+676",
        name: "Tonga",
      },
      {
        code: "+1 868",
        name: "Trinidad and Tobago",
      },
      {
        code: "+216",
        name: "Tunisia",
      },
      {
        code: "+90",
        name: "Turkey",
      },
      {
        code: "+993",
        name: "Turkmenistan",
      },
      {
        code: "+1 649",
        name: "Turks and Caicos Islands",
      },
      {
        code: "+688",
        name: "Tuvalu",
      },
      {
        code: "+1 340",
        name: "U.S. Virgin Islands",
      },
      {
        code: "+256",
        name: "Uganda",
      },
      {
        code: "+380",
        name: "Ukraine",
      },
      {
        code: "+971",
        name: "United Arab Emirates",
      },
      {
        code: "+44",
        name: "United Kingdom",
      },
      {
        code: "+1",
        name: "United States",
      },
      {
        code: "+598",
        name: "Uruguay",
      },
      {
        code: "+998",
        name: "Uzbekistan",
      },
      {
        code: "+678",
        name: "Vanuatu",
      },
      {
        code: "+58",
        name: "Venezuela",
      },
      {
        code: "+84",
        name: "Vietnam",
      },
      {
        code: "+1 808",
        name: "Wake Island",
      },
      {
        code: "+681",
        name: "Wallis and Futuna",
      },
      {
        code: "+967",
        name: "Yemen",
      },
      {
        code: "+260",
        name: "Zambia",
      },
      {
        code: "+255",
        name: "Zanzibar",
      },
      {
        code: "+263",
        name: "Zimbabwe",
      },
    ],
  };

  countries.countries.forEach((country) => {
    const listItem = document.createElement("li");
    listItem.textContent = country.name;
    countryList.appendChild(listItem);
  });

  countryInput.addEventListener("click", () => {
    if (countriesBox.classList.contains("active-box")) {
      countriesBox.classList.remove("active-box");
      countryInput.style.borderTopRightRadius = "50px";
      countryInput.style.borderBottomRightRadius = "50px";
    } else {
      countriesBox.classList.add("active-box");
      countryInput.style.borderTopRightRadius = "20px";
      countryInput.style.borderBottomRightRadius = "0px";
    }
  });

  openButton.addEventListener("click", () => {
    if (countriesBox.classList.contains("active-box")) {
      countriesBox.classList.remove("active-box");
      openButton.style.borderTopRightRadius = "50px";
      openButton.style.borderBottomRightRadius = "50px";
    } else {
      countriesBox.classList.add("active-box");
      openButton.style.borderTopRightRadius = "20px";
      openButton.style.borderBottomRightRadius = "0px";
    }
  });


  

  const countryEls = document.querySelectorAll("#country-list li");

  function findCountryCode(countryName) {
    for (let i = 0; i < countries.countries.length; i++) {
      if (countries.countries[i].name === countryName) {
        return countries.countries[i].code;
      }
    }
    return "Ülke bulunamadı"; // Eğer belirtilen ülke listede yoksa bir mesaj döndürün.
  }

  countryEls.forEach((el) => {
    el.addEventListener("click", () => {
      let selectedCountry = el.textContent;
      let countryCode = findCountryCode(selectedCountry);

      if (countryCode !== "Ülke bulunamadı") {
        phoneInput.value = countryCode + " ";
        countryInput.value = selectedCountry;
        countriesBox.classList.remove("active-box");
        countryInput.style.borderTopRightRadius = "50px";
        countryInput.style.borderBottomRightRadius = "50px";
      }
    });
  });
}

// SEND DESIGN

const sendDesignSection = document.getElementById("send-design");

if (sendDesignSection) {
  const categoryInput = document.getElementById("category-input");
  const categoryDropIcon = document.getElementById("category-open-icon")
  const categoryList = document.getElementById("category-list");
  const categoryesBox = document.getElementById("categoryes");

  categoryInput.addEventListener("click", () => {
    if (categoryesBox.classList.contains("active-box")) {
      categoryesBox.classList.remove("active-box");
      categoryInput.style.borderTopRightRadius = "50px";
      categoryInput.style.borderBottomRightRadius = "50px";
    } else {
      categoryesBox.classList.add("active-box");
      categoryInput.style.borderTopRightRadius = "0px";
      categoryInput.style.borderBottomRightRadius = "20px";
    }
  });

  
  categoryDropIcon.addEventListener("click", () => {
    if (categoryesBox.classList.contains("active-box")) {
      categoryesBox.classList.remove("active-box");
      categoryInput.style.borderTopRightRadius = "50px";
      categoryInput.style.borderBottomRightRadius = "50px";
    } else {
      categoryesBox.classList.add("active-box");
      categoryInput.style.borderTopRightRadius = "0px";
      categoryInput.style.borderBottomRightRadius = "20px";
    }
  });


  const conceptInput = document.getElementById("concept-input");
  const conceptDropIcon = document.getElementById("concept-icon")
  const conceptList = document.getElementById("concept-list");
  const conceptesBox = document.getElementById("concepts-box");


  conceptInput.addEventListener("click", () => {
    if (conceptesBox.classList.contains("active-box")) {
      conceptesBox.classList.remove("active-box");
      conceptInput.style.borderTopRightRadius = "50px";
      conceptInput.style.borderBottomRightRadius = "50px";
    } else {
      conceptesBox.classList.add("active-box");
      conceptInput.style.borderTopRightRadius = "0px";
      conceptInput.style.borderBottomRightRadius = "20px";
    }
  });


  conceptDropIcon.addEventListener("click", () => {
    console.log("SALAM");
    if (conceptesBox.classList.contains("active-box")) {
      conceptesBox.classList.remove("active-box");
      conceptInput.style.borderTopRightRadius = "50px";
      conceptInput.style.borderBottomRightRadius = "50px";
    } else {
      conceptesBox.classList.add("active-box");
      conceptInput.style.borderTopRightRadius = "0px";
      conceptInput.style.borderBottomRightRadius = "20px";
    }
  });


  const categoryEls = document.querySelectorAll("#category-list li");

  categoryEls.forEach((el) => {
    el.addEventListener("click", () => {
      let selectedCategory = el.textContent;
      categoryInput.value = selectedCategory;
      categoryesBox.classList.remove("active-box");
      categoryInput.style.borderTopRightRadius = "50px";
      categoryInput.style.borderBottomRightRadius = "50px";
    });
  });


  // const conceptEls = document.querySelectorAll("#concept-list li");

  // conceptEls.forEach((el) => {
  //   el.addEventListener("click", () => {
  //     let selectedConcept = el.textContent;
  //     conceptInput.value = selectedConcept;
  //     conceptesBox.classList.remove("active-box");
  //     conceptInput.style.borderTopRightRadius = "50px";
  //     conceptInput.style.borderBottomRightRadius = "50px";
  //   });
  // });

  // ADD TO DIV

  const addColumnButton = document.getElementById("add-column");
  const boxWrapper = document.getElementById("box-wrapper"); // Ekleneceği ana öğeyi seçin
  let boxCreated = false;

  addColumnButton.addEventListener("click", () => {
    if (!boxCreated) {
      // Yeni bir div öğesi oluşturun ve sınıf ekleyin
      const newDiv = document.createElement("div");
      newDiv.className = "col-lg-5 m-0 p-0 design-box";

      // İç içe geçmiş iç div'leri oluşturun
      const imageDiv = document.createElement("div");
      imageDiv.className = "image";
      newDiv.appendChild(imageDiv);

      const textDiv = document.createElement("div");
      textDiv.className = "text";
      newDiv.appendChild(textDiv);

      const infoTextDiv = document.createElement("div");
      infoTextDiv.className = "info-text";
      newDiv.appendChild(infoTextDiv);

      // Dosya yükleme girdisi ekleyin
      const fileInput = document.createElement("input");
      fileInput.id = "file-input";
      fileInput.className = "file-input";
      fileInput.type = "file";
      imageDiv.appendChild(fileInput);

      // İkon görüntüsünü ekleyin
      const iconImage = document.createElement("img");
      iconImage.id = "icon-image";
      iconImage.className = "icon-image";
      iconImage.src = "images/designsend-icon.png";
      iconImage.alt = "";
      imageDiv.appendChild(iconImage);

      // Seçilen görüntüyü gösteren görüntüyü ekleyin
      const selectImage = document.createElement("img");
      selectImage.id = "select-image";
      selectImage.className = "select-image";
      selectImage.src = "";
      selectImage.alt = "";
      imageDiv.appendChild(selectImage);

      // Metin girişi ekleyin
      const textarea = document.createElement("textarea");
      textarea.placeholder = "Görüntü haqqında qısa mətn...";
      textarea.maxLength = "150";
      textarea.id = "focus-func";
      textDiv.appendChild(textarea);

      // Bilgi metinlerini ekleyin
      const textOne = document.createElement("span");
      textOne.className = "text-one";
      textOne.innerHTML = "* Ön görüntü ( mockup istifadə olunmadan )";
      infoTextDiv.appendChild(textOne);

      const textTwo = document.createElement("span");
      textTwo.className = "text-two";
      textTwo.innerHTML = "Maksimum simvol sayı : 150";
      infoTextDiv.appendChild(textTwo);

      // Oluşturulan div'i belirli bir DOM öğesine ekleyin (örneğin, bir form veya bir başka div)
      boxWrapper.appendChild(newDiv);
      boxCreated = true;

      const newEls = document.getElementById("focus-func");

      newEls.focus();
    }
  });
}

const projectBoxes = document.querySelectorAll(".project-input");


projectBoxes.forEach((project) => {
  project.addEventListener("click", () => {
    // Projeye özgü elementleri seçmek için querySelector kullanın
    const imageFileInputProject = project.querySelector(".file-input");
    const iconImageProject = project.querySelector(".icon-image");
    const imageBoxProject = project.querySelector("#image-project");
    const selectImageProject = project.querySelector(".select-image");

    imageBoxProject.addEventListener("click", () => {
      imageFileInputProject.click();
      imageFileInputProject.addEventListener("change", function () {
        let imageFile = imageFileInputProject.files[0];
        if (imageFile) {
          const imageUrl = URL.createObjectURL(imageFile);
          iconImageProject.style.display = "none";
          selectImageProject.style.display = "block";
          selectImageProject.src = imageUrl;
        } else {
          selectImageProject.src = "";
        }
      });
    });
  });
});

// imageBoxProject.addEventListener("click", () => {
//   imageFileInputProject.click();
//   imageFileInputProject.addEventListener("change", function () {
//     let imageFile = imageFileInputProject.files[0];
//     if (imageFile) {
//       const imageUrl = URL.createObjectURL(imageFile);
//       iconImageProject.style.display = "none";
//       imageFileInputProject.style.display = "block";
//       imageFileInputProject.src = imageUrl;
//     } else {
//       imageFileInputProject.src = "";
//     }
//   });
