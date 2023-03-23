const te = document.getElementById('text');
const inp = document.querySelectorAll('input')
console.log(inp);

te.addEventListener('click', () => {
    inp[2].value = ''
})