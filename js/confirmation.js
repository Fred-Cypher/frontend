// Récupération des données

let command = JSON.parse(localStorage.getItem('confirmation'));
let total = JSON.parse(localStorage.getItem('total'));
let orderId = localStorage.getItem('orderId');


console.log(command);
console.log(total);
console.log(orderId);

// Texte à afficher, contenant l'Id de la commande et le prix total

let confirmationOrder = document.createElement('div');
confirmationOrder.innerHTML = `<div class="d-flex align-items-stretch row">
                                    <div class="col-12 mt-3 text-center endText rounded-3">
                                        <div class="col-7 mx-auto mt-3 mb-3">
                                            <span>${command.contact.firstName}</span>, l'équipe d'Orinoco vous remercie pour votre commande.
                                        </div>
                                        <div class="col-7 mx-auto mt-3 mb-3">Nous espérons vous revoir très bientôt sur notre site, de nouveaux nounours viendrons prochainement nous rejoindre et seront contents de faire votre connaissance.</div>
                                        <div class="col-7 mx-auto mt-3 mb-4">Votre commande n° : <span>${orderId}</span>, d'un montant de <span>${total}</span> €, arrivera le plus rapidement possible à cette adresse :<br>
                                            <div class="mt-3 mb-4">
                                                ${command.contact.firstName} ${command.contact.lastName}<br>
                                                ${command.contact.address}<br>
                                                ${command.contact.city}
                                            </div>
                                        </div>
                                        <button class="col-5 validationButton rounded-pill mt-3 mb-2  pt-2 pb-2">Retour à l'accueil</button>
                                    </div>
                                    
                                </div>`;

document.getElementById('confirmOrder').appendChild(confirmationOrder);

/*----- Bouton de confirmation de commande ----- */

// Si la commande est confirmée l'utilisateur est redirigé vers la page d'accueil et le localStorage vidé, 
// sinon l'utilisateur reste sur la page de confirmation

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

