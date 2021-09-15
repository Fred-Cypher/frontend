let productInBasket = JSON.parse(localStorage.getItem('checkedProduct'))

if (productInBasket === null){
    const basketContents = document.getElementById('cart');
    basketContents.innerHTML = `<div class="row">
                                    <div class="col-10 emptyBasket">
                                        <p>Votre panier est vide<br>
                                        Retournez sur la page d'accueil pour choisir des nounours pour le remplir</p>
                                    </div>
                                </div>
    `
} else {

    const basketContents = document.getElementById('cart');
    basketContents.innerHTML = `<p>Votre panier contient les produits suivants : </p>
                                <div class="row p-2 border">
                                    <div class="col-3">
                                        Nom du produit
                                    </div>
                                    <div class="col-3">
                                        Option du produit
                                    </div>
                                    <div class="col-2">
                                        Prix
                                    </div>
                                    <div class="col-4">
                                    Supprimer

                                    </div>
                                </div>`

                                

    for (let basketProducts of productInBasket){
        basketContents.innerHTML += `<div class="row fullBasket p-2 border">
                                        <div class="col-3">
                                            ${basketProducts.name}
                                        </div>
                                        <div class="col-3 color">
                                            ${basketProducts.options}
                                        </div>
                                        <div class="col-2 productPrice">
                                            ${basketProducts.price} €
                                        </div>
                                        <div class="col-4">
                                        <button type="button" class="btn suppProduct" id=""><img class ="trash" src="https://img.icons8.com/plasticine/50/000000/trash--v1.png"/></button>
                                        </div>
                                    </div>
                                    `
                                    
    };

    const totalPrice = document.createElement('div');
    totalPrice.setAttribute('class', 'total');
    totalPrice.textContent = "coucou";
    document.getElementById('cart').appendChild(totalPrice);

    

    /*for(i = 0; i < productInBasket.length; i++ ){
        
    }*/



    const contactDetails = document.getElementById('contactDetail')
    contactDetails.innerHTML = `<div class="row mt-5 contact">
                                    <form class="form col-10 text-start">
                                        <label for="lastName" class="form-label">Nom :</label>
                                        <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Dupont">
                                        <label for="firstName" class="form-label">Prénom :</label>
                                        <input type="text" name="firstName" id="firstName" class="form-control" placeholder="Camille">
                                        <label for="address" class="form-label">Adresse :</label>
                                        <input type="text" name="address" id="address" class="form-control" placeholder="2, rue de la Paix">
                                        <label for="city" class="form-label">Ville :</label>
                                        <input type="text" name="city" id="city" class="form-control" placeholder="Peacecity">
                                        <label for="email" class="form-label">Adresse e-mail :</label>
                                        <input type="email" name="email" id="email" class="form-control" placeholder="camille.dupont@peace.com">
                                        <button type="submit" class="btn border-secondary">Envoyer</button>
                                    </form>
                                </div>
                                `

    
    const buttonSupp = document.querySelector('.suppProduct'); 

    buttonSupp.addEventListener('click', (event) =>{
    event.preventDefault();

    localStorage.removeItem('checkedProduct');

    document.location.reload()                                
    });



}





/*const addSelectedProduct = () => {
    productInBasket.push(selectedProduct);
    localStorage.setItem('checkedProduct', JSON.stringify(productInBasket));
}

 Envoi du produit sélectionné dans le localStorage 
if(productInBasket){
    addSelectedProduct();
    console.log(productInBasket);
    popupConfirmation();

}else{
    productInBasket = [];
    addSelectedProduct();
    console.log(productInBasket);
    popupConfirmation();
} 

"id" : product._id,
"name" : product.name,
"options" : productChoice,
"price" : product.price / 100*/