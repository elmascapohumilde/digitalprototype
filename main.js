document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#e0e7ff';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#f0f4f8';
    });
});
document.getElementById('flashcard').addEventListener('click', () => {
    document.getElementById('flashcard').classList.toggle('flipped');
    document.getElementById('flashcard-feedback').textContent = 
        document.getElementById('flashcard').classList.contains('flipped') ? 'Check the answer!' : 'Click to flip again!';
});