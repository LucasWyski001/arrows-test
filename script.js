document.addEventListener("DOMContentLoaded", function () {
    const water = document.querySelector(".water");
    const fillLevel = document.querySelector(".fill-level");

    water.style.animation = "fillWater 5s forwards";

    let currentPercentage = 0;

    const interval = setInterval(function () {
        currentPercentage++;
        fillLevel.textContent = currentPercentage + "%";

        if (currentPercentage === 100) {
            clearInterval(interval);
        }
    }, 50); // Adjust the interval as needed
});