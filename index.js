var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newObject = {
      itemName: `${item}`,
      itemPrice: Math.floor(100 * Math.random()) + 1
                  }
  cart.push(newObject);
  return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    let returnedString = `In your cart, you have `;
    let printOut =``;
    for (var i = 0; i < cart.length; i ++){
      if (i != cart.length - 1){
        printOut = returnedString.concat(`${cart[i].itemName} at $${cart[i].itemPrice}, `);
      }
      returnedString.concat(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      return returnedString;
    }
  }
}

function total() {
  let sum = 0;
  for (var i = 0; i < cart.length; i ++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {

  if (cart.includes(item) === false){
    return "That item is not in your cart.";
  }
  for (var i = 0; i < cart.length; i ++){
  if (cart[i].itemName = item){
    cart.splice(i, 1);
  }
  return cart;
}

}

function placeOrder(cardNumber) {
  // write your code here
}
