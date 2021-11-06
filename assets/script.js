//code here

let total = 1    // total quantity
let perItemCost = 15     // total $$
let totalDisplay = document.getElementById('total-quantity')
let costDisplay= document.getElementById('total-price')

    
document.getElementById('quantity-up').addEventListener("click", function (){
        total +=1
        totalDisplay.innerHTML ='Quantity: ' + total
        costDisplay.innerHTML = 'Total price: $' + (total * perItemCost)

})
document.getElementById('quantity-down').addEventListener("click", function (){
    if(total>0) 
        {total -=1
        totalDisplay.innerHTML ='Quantity: ' + total   
        costDisplay.innerHTML = 'Total price : $' + (total * perItemCost)
}})




//  <div class="product-quantity">
// <button id="quantity-down">-</button>
// <button id="quantity-up">+</button>
// <div class="total-quantity">Quantity: 1</div>
// <p class="total-price">Total Price available at checkout</p> 
// <p>Continue to:</p>
//<button class="btn-checkout">Checkout</button>
//</div> 