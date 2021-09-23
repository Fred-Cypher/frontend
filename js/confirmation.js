let command = JSON.parse(localStorage.getItem('confirmation'));
let total = JSON.parse(localStorage.getItem('total'));
let orderId = localStorage.getItem('orderId');


console.log(command);
console.log(total);
console.log(orderId);


let confirmationOrder = document.createElement('div');
confirmationOrder.innerHTML = `<div class="d-flex align-items-stretch row">
                                    <div class="col-12 text-center">
                                        <div class="col-8 mx-auto mt-3 mb-3">
                                            <strong>${command.contact.firstName}</strong>, l'équipe d'Orinoco vous remercie pour votre commande.
                                        </div>
                                        <div class="col-8 mx-auto mt-3 mb-3">Nous espérons vous revoir très bientôt sur notre site, de nouveaux nounours viendrons prochainement nous rejoindre et seront contents de faire votre connaissance.</div>
                                        <div class="col-8 mx-auto mt-3 mb-4">Votre commande n° : <strong>${orderId}</strong>, d'un montant de <strong>${total}</strong> €, arrivera le plus rapidement possible à cette adresse :<br>
                                            <div class="mt-3 mb-4">
                                                ${command.contact.firstName} ${command.contact.lastName}<br>
                                                ${command.contact.address}<br>
                                                ${command.contact.city}
                                            </div>
                                        </div>
                                        <button class="col-6 validationButton rounded-pill mt-3 mb-2  pt-2 pb-2">Confirmer la commande</button>
                                    </div>
                                    
                                </div>`;

document.getElementById('confirmOrder').appendChild(confirmationOrder);


let validButton = document.querySelector('.validationButton');

const popupOrder = () =>{
    if(window.confirm(`Cliquez sur OK pour valider votre commande, vous recevrez alors un e-mail de confirmation, dans le cas contraire, cliquez sur ANNULER `))
    {
        window.location.href = "/index.html";
        localStorage.clear();
    } else {
        window.location.reload();
    }
}

validButton.addEventListener('click', (event) =>{
    event.preventDefault();

    if(event){
        popupOrder();
    }

});

