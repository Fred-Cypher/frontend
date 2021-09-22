let command = JSON.parse(localStorage.getItem('confirmation'));
let total = JSON.parse(localStorage.getItem('total'));
let orderId = localStorage.getItem('orderId');


console.log(command);
console.log(total);
console.log(orderId);


let confirmationOrder = document.createElement('div');
confirmationOrder.innerHTML = `<div class="row">
                            <div class="thanks">
                                <strong>${command.contact.firstName}</strong>, l'équipe d'Orinoco vous remercie pour votre commande.
                            </div>
                            <div class="future">Nous espérons vous revoir très bientôt sur notre site, de nouveaux nounours viendrons prochainement nous rejoindre et seront contents de faire votre connaissance.</div>
                            <div class="orderSummary">Votre commande n° : <strong>${orderId}</strong>, d'un montant de <strong>${total}</strong> €, arrivera le plus rapidement possible à cette adresse :<br>
                                <div class="customerAddress">
                                    ${command.contact.firstName} ${command.contact.lastName}<br>
                                    ${command.contact.address}<br>
                                    ${command.contact.city}
                                </div>
                            </div>
                            <button class="validationButton border rounded-3">Confirmer la commande</button>
                        </div>`;

document.getElementById('confirmOrder').appendChild(confirmationOrder);




