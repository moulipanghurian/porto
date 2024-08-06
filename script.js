document.addEventListener("DOMContentLoaded", function() {
    const text = "Mouli Panghurian";
    let i = 0;
    const speed = 150;
    
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#navbar ul').classList.toggle('show');
});
