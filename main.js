document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#e0e7ff';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#f0f4f8';
    });
});