document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const eyeballLeft = container.querySelector('.eyeball-left');
    const eyeballRight = container.querySelector('.eyeball-right');

    function moveEyeballs(
) {
        const angle = Math.random() * 20 - 10;
        const scale = Math.random() * 0.5 + 0.7;

        eyeballLeft.style.transform = `rotate(${angle}deg) scale(${scale})`;
        eyeballRight.style.transform = `rotate(${-angle}deg) scale(${scale})`;
    }

    setInterval(moveEyeballs, 200);
});
