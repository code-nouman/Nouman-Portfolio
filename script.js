document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    header.style.backgroundColor = window.scrollY > 100 ? '#1E1E1E' : '#1E1E1E';
});

document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch("https://script.google.com/macros/s/AKfycbzJLyOxn1eR5BMESODGRUzJgKrQPyC-225ErWPA2rVrmGqGf52AKIiN75xBmKCPIPwU1g/exec", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        alert("Message sent successfully!");
        this.reset();
    } else {
        alert("Failed to send message. Please try again.");
    }
});
