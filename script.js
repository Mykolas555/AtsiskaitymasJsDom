//sukurti kad butu 2 mygtukai rodyti ir maisyti, tada paspaudus
//turi rodyti paveiksleliu 10, paspaudus maisyti, turi maisyti paveikslelius
//atsitiktine tvarka, padoubleklikinus turi ismest kazkokia default nuotrauka

const images = ['/img/1.png', '/img/2.png','/img/3.png', '/img/4.png','/img/5.png', 
                '/img/6.png','/img/7.png', '/img/8.png','/img/9.png', '/img/10.png'];
const default_image = ['/img/lithuania.png']
const rodyti = document.querySelector('.rodyti');
const maisyti = document.querySelector('.maisyti');
const main = document.querySelector('main');
const divs = []

function randomImage() {
    const img = Math.floor(Math.random() * images.length);
    return images[img];
}

function to_show_divs() {
    for (let i = 0; i < 8; i++) {
        const div = document.createElement('div');
        div.style.width = '250px';
        div.style.height = '250px';
        div.style.backgroundColor="#facd60";
        main.appendChild(div);
        const randomImgSrc = randomImage();
        const img = document.createElement('img');
        img.src = randomImgSrc;
        img.addEventListener('dblclick', () => {
            img.src = default_image;
        });
        div.appendChild(img);
        main.appendChild(div);
        divs.push(div);
    }
}

function to_mix_img(){
    for (let i = 0; i < divs.length; i++) {
        const randomImgSrc = randomImage();
        const img = divs[i].querySelector('img');
        img.src = randomImgSrc;
    }    
}

rodyti.addEventListener('click', () => {
    to_show_divs();
});

maisyti.addEventListener('click', () => {
to_mix_img();
});

