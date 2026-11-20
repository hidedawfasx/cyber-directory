const homeBtn = document.querySelector('#home-btn')
const startCourseBtn = document.querySelector('#start-course-btn')
const overviewBtn = document.querySelector('#overview-btn')
const arsenalBtn = document.querySelector('#arsenal-btn')
const deepfakesBtn = document.querySelector('#deepfakes-btn')
const phishingBtn = document.querySelector('#phishing-btn')
const methodsBtn = document.querySelector('#methods-btn')
const wiresharkBtn = document.querySelector('#wireshark-btn')
const nmapBtn = document.querySelector('#nmap-btn')
const burpBtn = document.querySelector('#burp-btn')
const sqliBtn = document.querySelector('#sqli-btn')
const xssBtn = document.querySelector('#xss-btn')
const osintBtn = document.querySelector('#osint-btn')
const passwordsBtn = document.querySelector('#passwords-btn')
const wifiBtn = document.querySelector('#wifi-btn')
const metasploitBtn = document.querySelector('#metasploit-btn')
const malwareBtn = document.querySelector('#malware-btn')
const mobileBtn = document.querySelector('#mobile-btn')
const opsecBtn = document.querySelector('#opsec-btn')
const mitmBtn = document.querySelector('#mitm-btn')
const privescBtn = document.querySelector('#privesc-btn')
const stegoBtn = document.querySelector('#stego-btn')
const fuzzingBtn = document.querySelector('#fuzzing-btn')
const adBtn = document.querySelector('#ad-btn')
const dockerBtn = document.querySelector('#docker-btn')
const apiBtn = document.querySelector('#api-btn')

const homeSection = document.querySelector('#home')
const overviewSection = document.querySelector('#overview')
const arsenalSection = document.querySelector('#arsenal')
const deepfakesSection = document.querySelector('#deepfakes')
const phishingSection = document.querySelector('#phishing')
const methodsSection = document.querySelector('#methods')
const wiresharkSection = document.querySelector('#wireshark')
const nmapSection = document.querySelector('#nmap')
const burpSection = document.querySelector('#burp')
const sqliSection = document.querySelector('#sqli')
const xssSection = document.querySelector('#xss')
const osintSection = document.querySelector('#osint')
const passwordsSection = document.querySelector('#passwords')
const wifiSection = document.querySelector('#wifi')
const metasploitSection = document.querySelector('#metasploit')
const malwareSection = document.querySelector('#malware')
const mobileSection = document.querySelector('#mobile')
const opsecSection = document.querySelector('#opsec')
const mitmSection = document.querySelector('#mitm')
const privescSection = document.querySelector('#privesc')
const stegoSection = document.querySelector('#stego')
const fuzzingSection = document.querySelector('#fuzzing')
const adSection = document.querySelector('#ad')
const dockerSection = document.querySelector('#docker')
const apiSection = document.querySelector('#api')

let currentSection = document.querySelector('#home')

const menu = document.querySelector('#menu')
const burgerBtn = document.querySelector('#burger-btn')
const themeBtn = document.querySelector('#theme-btn')
const titleElement = document.querySelector('#title')

function toggleMenu() {
    menu.classList.toggle('open')
}

if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu)
}

if (themeBtn) {
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('light')
    })
}

function openSection(sectionId, titleText) {
    if (currentSection.id !== sectionId) {
        currentSection.classList.add('hide')
        currentSection = document.querySelector('#' + sectionId)
        currentSection.classList.remove('hide')
    }

    if (titleElement && titleText) {
        titleElement.textContent = titleText
    }

    menu.classList.remove('open')
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

if (homeBtn) {
    homeBtn.addEventListener('click', function() {
        openSection('home', 'Главная — CyberDirectory')
    })
}

if (startCourseBtn) {
    startCourseBtn.addEventListener('click', function() {
        openSection('overview', 'Обзор угроз')
    })
}

if (overviewBtn) {
    overviewBtn.addEventListener('click', function() {
        openSection('overview', 'Обзор угроз')
    })
}

if (arsenalBtn) {
    arsenalBtn.addEventListener('click', function() {
        openSection('arsenal', 'Софт, полигоны и право')
    })
}

if (deepfakesBtn) {
    deepfakesBtn.addEventListener('click', function() {
        openSection('deepfakes', 'Дипфейки')
    })
}

if (phishingBtn) {
    phishingBtn.addEventListener('click', function() {
        openSection('phishing', 'Фишинг')
    })
}

if (methodsBtn) {
    methodsBtn.addEventListener('click', function() {
        openSection('methods', 'Методы защиты')
    })
}

if (wiresharkBtn) {
    wiresharkBtn.addEventListener('click', function() {
        openSection('wireshark', 'Анализ трафика (Wireshark)')
    })
}

if (nmapBtn) {
    nmapBtn.addEventListener('click', function() {
        openSection('nmap', 'Сканирование сети (Nmap)')
    })
}

if (burpBtn) {
    burpBtn.addEventListener('click', function() {
        openSection('burp', 'Перехват запросов (Burp Suite)')
    })
}

if (sqliBtn) {
    sqliBtn.addEventListener('click', function() {
        openSection('sqli', 'SQL-инъекции (SQLMap)')
    })
}

if (xssBtn) {
    xssBtn.addEventListener('click', function() {
        openSection('xss', 'Межсайтовый скриптинг (XSS)')
    })
}

if (osintBtn) {
    osintBtn.addEventListener('click', function() {
        openSection('osint', 'Сбор данных (OSINT)')
    })
}

if (passwordsBtn) {
    passwordsBtn.addEventListener('click', function() {
        openSection('passwords', 'Аудит паролей (Hashcat)')
    })
}

if (wifiBtn) {
    wifiBtn.addEventListener('click', function() {
        openSection('wifi', 'Аудит Wi-Fi (Aircrack-ng)')
    })
}

if (metasploitBtn) {
    metasploitBtn.addEventListener('click', function() {
        openSection('metasploit', 'Эксплойты (Metasploit)')
    })
}

if (malwareBtn) {
    malwareBtn.addEventListener('click', function() {
        openSection('malware', 'Анализ файлов и песочницы')
    })
}

if (mobileBtn) {
    mobileBtn.addEventListener('click', function() {
        openSection('mobile', 'Мобильный пентест (Android)')
    })
}

if (opsecBtn) {
    opsecBtn.addEventListener('click', function() {
        openSection('opsec', 'Анонимность и OPSEC')
    })
}

if (mitmBtn) {
    mitmBtn.addEventListener('click', function() {
        openSection('mitm', 'Атаки в локальной сети (MITM)')
    })
}

if (privescBtn) {
    privescBtn.addEventListener('click', function() {
        openSection('privesc', 'Повышение привилегий (Linux)')
    })
}

if (stegoBtn) {
    stegoBtn.addEventListener('click', function() {
        openSection('stego', 'Стеганография и форензика')
    })
}

if (fuzzingBtn) {
    fuzzingBtn.addEventListener('click', function() {
        openSection('fuzzing', 'Веб-фаззинг (Gobuster & ffuf)')
    })
}

if (adBtn) {
    adBtn.addEventListener('click', function() {
        openSection('ad', 'Аудит Active Directory')
    })
}

if (dockerBtn) {
    dockerBtn.addEventListener('click', function() {
        openSection('docker', 'Безопасность Docker')
    })
}

if (apiBtn) {
    apiBtn.addEventListener('click', function() {
        openSection('api', 'Пентест API и JWT')
    })
}

document.addEventListener('submit', function(event) {
    event.preventDefault()

    const form = event.target
    const radios = form.querySelectorAll('input[type="radio"]')

    for (const radio of radios) {
        radio.classList.remove('correct', 'incorrect')

        if (radio.checked) {
            if (radio.value === '1') {
                radio.classList.add('correct')
            } else {
                radio.classList.add('incorrect')
            }
        }
    }
})