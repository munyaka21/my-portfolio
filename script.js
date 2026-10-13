document.addEventListener("DOMContentLoaded", function () {
    
    const subtitle = document.querySelector("#home h2");
    const roles = ["Web Developer", "IT Specialist", "Tech Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            subtitle.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            subtitle.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 60 : 120;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1800; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        setTimeout(typeEffect, speed);
    }

    if (subtitle) {
        typeEffect();
    }

    const helloBtn = document.getElementById("helloBtn");
    if (helloBtn) {
        helloBtn.addEventListener("click", function () {
            alert("👋 Thanks for visiting! Feel free to explore my projects or reach out via email.");
        });
    }

    const copyright = document.getElementById("copyright");
    if (copyright) {
        copyright.textContent = `© ${new Date().getFullYear()} Chris Munyaka. All rights reserved.`;
    }

});