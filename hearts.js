document.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 90 + "vw"; 
        heart.style.bottom = "-30px"; /* Aparece desde abajo */
        heart.style.animationDuration = Math.random() * 2 + 2 + "s"; 
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Reducimos el tiempo de eliminación para evitar acumulación
    }, 600);
});
