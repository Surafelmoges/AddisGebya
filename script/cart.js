export let cart = JSON.parse(localStorage.getItem('cart'))||[{
  productId:
   'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
},{
  productId:
   'dd82ca78-a18b-4e2a-9250-31e67412f98d',
  quantity: 1
}
 ];
// JSON.parse(localStorage.getItem('cart'));


  function saveToStorage(){
    localStorage.setItem("cart", JSON.stringify(cart));
  }

export function addTocart(productId){
  let machItem;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        machItem = cartItem;
      }
    });

    if(machItem){
      machItem.quantity+=1;
    }
    else{
      cart.push(
        {
          productId: productId,
          quantity: 1,
        });
    }
    
    saveToStorage();
 }


export function removeFromCart(productId){
  const newCart =[];

  cart.forEach((cartItem) =>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);

    }
  });
  cart = newCart;
  saveToStorage();
}