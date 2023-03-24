const btn = document.querySelectorAll('.btn');
const text = document.querySelectorAll('.chatText');
const box = document.querySelector('.chatbox');
const message = document.querySelectorAll('.message');
const plus = document.querySelector('.plus');
console.log(btn, text, box, plus);

plus.addEventListener('click', (evt) => {
    console.log(evt.target);
    let div = document.createElement('div');
    div.classList.add('overlay');
    let btn = document.createElement('button');
    btn.textContent = '✕'
})

const chat = 'chat.json'

fetch(chat)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        // for (let i = 0; i < text.length; i++) {
        //     text[i].innerHTML = json[i].text
        // }
        json.forEach(e => {
            let chat = `
                    <div class="message">
                        <p class="chatText">${e.text}</p>
                    </div>
                `
            box.innerHTML += chat
        });
        for (let i = 0; i < btn.length; i++) {
            let flg = false
            btn[0].addEventListener('click', (e) => {
                btn[i].classList.remove('btnstyle');
                btn[0].classList.add('btnstyle');
            })
            btn[1].addEventListener('click', (e) => {
                btn[i].classList.remove('btnstyle');
                btn[1].classList.add('btnstyle');
            })
            btn[2].addEventListener('click', (e) => {
                btn[i].classList.remove('btnstyle');
                btn[2].classList.add('btnstyle');
            })
        }
        btn[0].addEventListener('click', () => {
            const message = document.querySelectorAll('.message');
            message.forEach(e => {
                e.remove();
            })
            json.forEach(e => {
                if (e.flg === 1) {
                    let chat = `
                        <div class="message">
                            <p class="chatText">${e.text}</p>
                        </div>
                    `
                    box.innerHTML += chat
                }
            })
        })
        btn[1].addEventListener('click', () => {
            const message = document.querySelectorAll('.message');
            message.forEach(e => {
                e.remove();
            })
            json.forEach(e => {
                if (e.flg === 2) {
                    let chat = `
                        <div class="message">
                            <p class="chatText">${e.text}</p>
                        </div>
                    `
                    box.innerHTML += chat
                }
            })
        })
        btn[2].addEventListener('click', () => {
            const message = document.querySelectorAll('.message');
            message.forEach(e => {
                e.remove();
            })
            json.forEach(e => {
                if (e.flg === 3) {
                    let chat = `
                        <div class="message">
                            <p class="chatText">${e.text}</p>
                        </div>
                    `
                    box.innerHTML += chat
                }
            })
        })
    })

