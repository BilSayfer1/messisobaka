import { goods } from "./db.js"

const container = document.querySelector('.container')

reload(goods, container)

function reload(arr, place) {
    

    for(let item of arr) {
        let main_div = document.createElement('div')
        let picture = document.createElement('img')
        let describe = document.createElement('div')
        let title = document.createElement('span')
        let p = document.createElement('p')
        let row = document.createElement('div')
        let rate = getRateBlock('./public/icons/dollar.svg', item.price)
        let rate2 = getRateBlock('./public/icons/star.svg', item.rating.rate)
        let rate3 = getRateBlock('./public/icons/box.svg', item.rating.count)
        let save_button = document.createElement('button')        

        main_div.classList.add('item')
        picture.classList.add('item-img')
        describe.classList.add('describe-block')
        row.classList.add('row')
        picture.src = item.image
        picture.alt = "bag"

        title.innerHTML = item.category
        p.innerHTML = item.description.slice(0,100) + " <b>read moe</b>"
        save_button.innerHTML = "В избранное"

        main_div.append(picture, describe)
        describe.append(title, p, row, save_button)
        row.append(rate, rate2, rate3)
        place.append(main_div)
    }

}


function getRateBlock(path, text) {
    let rate = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    rate.classList.add('rate')
    img.src = path
    span.innerHTML = text


    rate.append(img, span)
    return rate
}

let btn_off = document.querySelector('#chorniyallayor')
let korzina = document.querySelector('#nigga')
let box = document.querySelector(".box")

// let divBox = document.createElement('div');
// divBox.classList.add('box');

// let button = document.createElement('button');
// button.id = 'chorniyallayor';
// button.textContent = 'X';

// let divBlock = document.createElement('div');
// divBlock.classList.add('block');

// let divGlav = document.createElement('div');
// divGlav.classList.add('glav');

// let divImage = document.createElement('div');
// divImage.classList.add('image');

// let img = document.createElement('img');
// img.src = './public/images/pizza.webp';
// img.alt = '';

// let divText = document.createElement('div');
// divText.classList.add('text');

// let h3 = document.createElement('h3');
// h3.textContent = 'Казы пицца маленькая';

// const h5 = document.createElement('h5');
// h5.textContent = 'Qalin';

// let divButtons = document.createElement('div');
// divButtons.classList.add('buttons');
// let minusButton = document.createElement('button');
// minusButton.textContent = '-';
// let oneButton = document.createElement('button');
// oneButton.textContent = '1';
// let plusButton = document.createElement('button');
// plusButton.textContent = '+';

// let br = document.createElement('br');

// let divTextFirst = document.createElement('div');
// divTextFirst.classList.add('text_first');

// let h4 = document.createElement('h4');
// h4.textContent = '63.000 som';

// divImage.appendChild(img);
// divText.appendChild(h3);
// divText.appendChild(h5);
// divGlav.appendChild(divImage);
// divGlav.appendChild(divText);
// divButtons.appendChild(minusButton);
// divButtons.appendChild(oneButton);
// divButtons.appendChild(plusButton);
// divButtons.appendChild(br);
// divButtons.appendChild(divTextFirst);
// divTextFirst.appendChild(h4);
// divBlock.appendChild(divGlav);
// divBlock.appendChild(divButtons);
// divBox.appendChild(button);
// divBox.appendChild(divBlock);

// document.body.appendChild(divBox);

korzina.onclick = () => {
    box.style.display = "flex"

}
btn_off.onclick = () => {
    box.style.display = "none"
}













