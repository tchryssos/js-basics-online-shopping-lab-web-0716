var cart=[];

function getCart(){
  return cart;
}

function addToCart(item){
  cart.push({[item]: (Math.floor(Math.random()*(101)+0))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var cartText = "In your cart, you have";
    for(var i=0; i<cart.length; i++){
      var item = cart[i];
      for (var itemName in item) {
        cartText += ` ${itemName} at $${item[itemName]},`;
      }
    }
    console.log(cartText.slice(0, -1) + ".");
  }
}

function removeFromCart(name) {
  for(var i=0; i<cart.length; i++){
    var item = cart[i];
    for (var itemName in item) {
      if (name === itemName) {
        
      }
    }
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
