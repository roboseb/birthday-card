const openBtn = document.getElementById('open-btn');
openBtn.addEventListener('click', () => {
    const card = document.getElementById('card');
    card.classList.toggle('open');
});