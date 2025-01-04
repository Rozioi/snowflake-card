function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake'; // присвоием класс для стилизации
    snowflake.textContent = '❄'; // присвоим значение
    snowflake.style.left = Math.random() * 100 + 'vw'; // горизонтально положение от 0vw до 100vw
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's'; // продолжительность анимации от 7 до 10с
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // случайный размер от 10 до 20 px
    document.querySelector('.snowflakes').appendChild(snowflake);
    setTimeout( ( ) => snowflake.remove(), 10000); // удаляем снежинку через 10 с
}

setInterval(createSnowflake, 300); // Каждые 3 секунды создаём снежинку