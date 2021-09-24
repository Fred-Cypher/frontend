let numberProduct = JSON.parse(localStorage.getItem('quantityProducts'));

const numberProducts = document.getElementById('quantity');
    numberProducts.innerHTML = `<div>${numberProduct}</div>`;



/*localStorage.setItem('quantityProducts', JSON.stringify(numberProduct)); 
let productInBasket = JSON.parse(localStorage.getItem('checkedProduct'));

let command = JSON.parse(localStorage.getItem('confirmation'));
let total = JSON.parse(localStorage.getItem('total'));
let orderId = localStorage.getItem('orderId');

localStorage.setItem('confirmation', JSON.stringify(command));
            localStorage.setItem('total', JSON.stringify(total));
            localStorage.setItem('orderId', dataOrder.orderId);
            window.location.href = "confirmation.html"*/