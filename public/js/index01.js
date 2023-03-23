const btn = document.querySelectorAll('.btn');
console.log(btn);

btn.forEach(e => {
    e.addEventListener('click', () => {
        e.style.transform = 'scale(1.2,1.5)'
    })
});