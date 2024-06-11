document.addEventListener('DOMContentLoaded', function() {
    updateAge();  // Update the age when the document loads
    let time = setInterval(countdown, 1000);  // Initialize countdown
    var images = document.querySelectorAll('.animatedimage img');
    var currentImage = 0;
    images[0].style.display = 'block'; // Show the first image initially

    setInterval(function() {
        images[currentImage].style.display = 'none'; // Hide the current image
        currentImage = (currentImage + 1) % images.length; // Move to the next image, loop back to the first
        images[currentImage].style.display = 'block'; // Show the new current image
    }, 2200);
});

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

