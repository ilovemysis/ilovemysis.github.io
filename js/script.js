
document.addEventListener('DOMContentLoaded', function() {
    // General initializations
    initializeCarousel();
    initializeSidebarToggle();
    initializeAgeUpdater();
    initializeCountdown();
    initializeImageRotator();

    // Password page specific initializations
    if (document.getElementById('yesButton')) {
        initializePasswordPage();
    }
});

function showModal(message) {
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('p');
    const span = document.querySelector('.close');

    modalContent.textContent = message;
    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

// Function to initialize the password page
function initializePasswordPage() {
    document.getElementById('yesButton').addEventListener('click', function() {
        document.getElementById('passwordField').style.display = 'block';
        document.getElementById('responseText').style.display = 'none';
    });

    document.getElementById('noButton').addEventListener('click', function() {
        document.getElementById('responseText').style.display = 'block';
        document.getElementById('passwordField').style.display = 'none';
    });

    document.getElementById('submitPassword').addEventListener('click', submitPassword);

    document.getElementById('passwordInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            submitPassword();
        }
    });
}


async function submitPassword() {
    const password = document.getElementById('passwordInput').value;

    try {
        const staticryptConfig = {
            staticryptEncryptedMsgUniqueVariableName: '133fc4c4077b1cfc182a8765d1b0477ec7e17a82f4da648e1be084e18c3df400d97993db5890a9f4403d0b6ba168e0c68367f87723c146bfb9021f73c5086940a6ca29455af2c5087433be40c7769a9007e5d7b7e1ab5f0e683bedd8fefbc1355459bfedd5b0d9d85efbdb7e00620fc3ba9dbcbca1f912a5b92f9e77c236356e2852666ef94b492d831fb82123857e702a258cc7bbfb9bc13d499c82e2163d69ad37be2149ba325006c68158a5f5f9e3e2655138a7e34ee4b6f8236fcdc5939c4b3071c03e803604bdc8a317f042f329634645051c445661748c8cf2ae0f8ed78efad8b0b4bf2c7690264cf9e6c388f6c365c6840b7dee57c5e990af368884d916eef10daa0f5727d01b738a108906435a24b5f05a8d105a85298134c44b9296242a435246281165c257dcae5aaa4bb79ca22076a536c511effde3af4d72efaf8b8ce564c252f00487f4908c5682eb9d263a39657f2c3414fa06b169056406e2e47360a5c5daf114784fd02b3bf9cd2641a5584ce140a1f196a92cb9115d85390d559e0e6c86917c40ae3881d61291d3412ed95963c122426a2ccfbcfa01dbd45ce33925c4e6c62dbdb0b9ea5ff6a22ec3979343c95a4488bc7d7e38824232397f5764b218477b9e9f347e2a794bdec5ef6887d2f9ab64f4506c277c5596aff9f05a00a2825b5a6674dbe393e46acb0f2ddd946c35fddde5437b10ad2a8fc71967bd4aaaa1824423c5db0ac05e071fd7e8fc71f97e8c1ae8216d98c900c7e0b6ddce55a4984ef492231ec525889919f7435c2e27122e5491fd23da493314eed9ecf8653379beaa4f496be902ea80a22d10a6e5fcc8cfe5127ac72ef080f47ba2cdc166aede64e7a14ff049277e8e7f22f67674b79481524707808d4a12ec13b052c475c5c487863efa45378648d64f54891ebc7354bc285c4031a9673b6baa0ef9cd7883346aa01a05eb951ec68af6c050a708191ba3f8cd44c8eed5a43c418c4c6b12b4ae886eef1f03a2fcaaca041c98a541d714cf0da83c563f9f0904f40f60e8646eeb1a6b6d0dacd525be00da3c288f56e2112808e02f51185240a11d2294d4441599a0511ff5cb96e8f8608f5e1955f7718229f4ef37e91979923da8850c89b876961e24faa4244005cef8435d3aa570d9358a481327aaf47d4e0e6322e71e4d576ecabe2fe6738de3db78ee2516b8849d6e20bddc841b3652f1805b7f66a4f9e73921d81ce6f7a88ea581647e9bbed7903a2a32c10daa503154f1e125412e483a3af8661bb9aa5ac5ae46d90b26cccbc5e07de3d39fa33e1898f30551087a9ca576e67b6e1c36cab8dcd9b9529ac95598944ab5735e6659251ba82343496d3eb588dd400544365c8053d223e252d68c376f0f11e9be6a59b8aefce4b86c564d19e0c6b4d143f95f63b59027f9d1eafdfa3a7256828e726ed213846626eb306501cb6168051679ffad828fd492c98e76f7f07aaaf6aedfd64afd79db35bd5e0cb42b44aa23709df27240438e5506c195b75bf7e91980a5332b4a1ff26026e87672285c3708dbf769dcc022524097cb8706d37f6f7ae31d3ccb77a1ed75bb63620ce5500eb4402df38b219f4acdc2b323461b0cb6efdbe40e71155f015914715dcb6adefcd93feeb30f6ac483a580b8ec0cc9da639f2eeaa2629f3a2b8ce0d280a6b53c37a074436dfd00b7a034795a89be596b881cb0073b8427e228912402b45b290e43d4c6e978bb02acce7444f222f565a7e29e005496dc8816076f9f9c3b80fd54576acf4a9b36cb23a4204d0f30c5bf7c83b09f29170563f96658a2f2cc0241b74d6e8a5c0458229e0540bdb51dc67d002aec897413303b66e3e12a67629e05111302403df7bd5bf08c3bc22a7d1a1f05b35d996c967a2cf6c927',
            staticryptSaltUniqueVariableName: '42a07a88fc700f83378f6307c8aead4e'
        };

        const hashedPassword = await cryptoEngine.hashPassword(password, staticryptConfig.staticryptSaltUniqueVariableName);
        const isDecryptionSuccessful = await decode(
            staticryptConfig.staticryptEncryptedMsgUniqueVariableName,
            hashedPassword,
            staticryptConfig.staticryptSaltUniqueVariableName
        );

        if (isDecryptionSuccessful.success) {
            document.open();
            document.write(isDecryptionSuccessful.decoded);
            document.close();
        } else {
            showModal('Frag deine Schwester, Pupsi');
        }
    } catch (e) {
        showModal('Frag deine Schwester, Pupsi');
    }
}

// Function to initialize carousel
function initializeCarousel() {
    const carouselImages = document.querySelectorAll('.carousel img');
    if (carouselImages.length > 0) {
        let currentIndex = 0;

        const showNextImage = () => {
            carouselImages[currentIndex].classList.remove('active');
            carouselImages[currentIndex].classList.add('next');
            currentIndex = (currentIndex + 1) % carouselImages.length;
            carouselImages[currentIndex].classList.remove('next');
            carouselImages[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 3000);
    }
}

// Function to initialize sidebar toggle
function initializeSidebarToggle() {
    if (document.getElementById('toggleButton')) {
        document.getElementById('toggleButton').addEventListener('click', function() {
            var sidebar = document.getElementById('sidebar');
            if (sidebar.style.width === '250px') {
                sidebar.style.width = '0';
            } else {
                sidebar.style.width = '250px';
            }
        });
    }
}

// Function to update age
function initializeAgeUpdater() {
    const updateAge = () => {
        const birthYear = 2006;
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        document.getElementById('age').textContent = age;
    }

    if (document.getElementById('age')) {
        updateAge();
    }
}

// Function to initialize countdown
function initializeCountdown() {
    const getNextJune21 = () => {
        const today = new Date();
        const currentYear = today.getFullYear();
        let nextJune21 = new Date(`June 21, ${currentYear} 00:00:00`);

        if (today.getTime() > nextJune21.getTime()) {
            nextJune21 = new Date(`June 21, ${currentYear + 1} 00:00:00`);
        }

        return nextJune21.getTime();
    }

    const countdown = () => {
        const countDate = getNextJune21();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let textDay = Math.floor(gap / day);
        let textHour = Math.floor((gap % day) / hour);
        let textMinute = Math.floor((gap % hour) / minute);
        let textSecond = Math.floor((gap % minute) / second);

        textDay = textDay < 10 ? '0' + textDay : textDay;
        textHour = textHour < 10 ? '0' + textHour : textHour;
        textMinute = textMinute < 10 ? '0' + textMinute : textMinute;
        textSecond = textSecond < 10 ? '0' + textSecond : textSecond;

        if (document.getElementById('countdown')) {
            document.getElementById('countdown').innerText = `${textDay}:${textHour}:${textMinute}:${textSecond}`;

            if (gap < 0) {
                clearInterval(time);
                document.getElementById('countdown').innerText = "🎂 Happy Birthday, Melissa! 🎂";
            }
        }
    }

    if (document.getElementById('countdown')) {
        const time = setInterval(countdown, 1000);
    }
}

// Function to initialize image rotator
function initializeImageRotator() {
    var images = document.querySelectorAll('.animatedimage img');
    if (images.length > 0) {
        var currentImage = 0;
        images[0].style.display = 'block'; // Show the first image initially

        setInterval(function() {
            images[currentImage].style.display = 'none'; // Hide the current image
            currentImage = (currentImage + 1) % images.length; // Move to the next image, loop back to the first
            images[currentImage].style.display = 'block'; // Show the new current image
        }, 2200);
    }
}


document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var menu = document.querySelector('.menu');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        menu.style.display = 'none';
        document.querySelector('main').style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        menu.style.display = 'block';
        document.querySelector('main').style.marginLeft = '250px';
    }
});


function updateAge() {
    const birthYear = 2006;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById('age').textContent = age;
}

function getNextJune21() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let nextJune21 = new Date(`June 21, ${currentYear} 00:00:00`);

    if (today.getTime() > nextJune21.getTime()) {
        nextJune21 = new Date(`June 21, ${currentYear + 1} 00:00:00`);
    }

    return nextJune21.getTime();
}

function countdown() {
    const countDate = getNextJune21();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    textDay = textDay < 10 ? '0' + textDay : textDay;
    textHour = textHour < 10 ? '0' + textHour : textHour;
    textMinute = textMinute < 10 ? '0' + textMinute : textMinute;
    textSecond = textSecond < 10 ? '0' + textSecond : textSecond;

    document.getElementById('countdown').innerText = `${textDay}:${textHour}:${textMinute}:${textSecond}`;

    if (gap < 0) {
        clearInterval(time);
        document.getElementById('countdown').innerText = "🎂 Happy Birthday, Melissa! 🎂";
    }
}


function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}


const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

const showNextImage = () => {
    carouselImages[currentIndex].classList.remove('active');
    carouselImages[currentIndex].classList.add('next');
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImages[currentIndex].classList.remove('next');
    carouselImages[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('passwordField').style.display = 'block';
    document.getElementById('responseText').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('responseText').style.display = 'block';
    document.getElementById('passwordField').style.display = 'none';
});

document.getElementById('submitPassword').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = 'yourPassword'; // Replace with the actual password

    if (password === correctPassword) {
        window.location.href = 'anotherPage.html'; // Replace with the actual page URL
    } else {
        alert('Incorrect password. Please try again.');
    }
});


