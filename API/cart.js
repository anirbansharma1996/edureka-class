//here we are storing the elements of html document in a variable
var cart_root = document.getElementById("cart-root");
var cart_count = document.getElementById("cart-count");
var bill = document.getElementById("bill");

//getting the data from localStorage and storing it in a variable
//FORMART TO GET DATA FROM LOCAL STORAGE :  'localStorage.getItem('key')'
//NOTE : if we are storing a non-primitive data type we have to do 'JSON.parse(localStorage.getItem('key'))'
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

//manualy hoisting the function
showData(cartData);

function showData(arr) {
  //we are showing how many products are there in our cart
  cart_count.innerText = `You have ${arr.length} item's in your Cart`;
  //taking 0 as sum, because we want to calculate the cart total
  var sum = 0;
  arr.map((el, id) => {
    bill.innerText = `₹ ${(sum += Math.ceil(el.price) * 100)}/-`;
    //createing a container ,where we will append all the other elements
    let container = document.createElement("div");
    container.className = "container";
    //--------------------------------------------------
    let category = document.createElement("h4");
    category.innerText =
      "Category : " + el.category[0].toUpperCase() + el.category.slice(1);
    //--------------------------------------------------
    let des = document.createElement("p");
    des.innerText = "Description : " + el.description.slice(0, 20);
    //-----------------------------------------------------
    let image = document.createElement("img");
    image.src = el.image;
    //-----------------------------------------------------
    let price = document.createElement("h3");
    price.innerText = `Price : ₹${Math.ceil(el.price) * 100}/-`;
    //-----------------------------------------------------
    let title = document.createElement("h6");
    title.innerText = el.title.slice(0, 15);
    //-----------------------------------------------------
    //adding a Remove function , to Remove the product from our cart
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", () => {
      removeFunction(el, id);
    });
    //adding the data to our 'conatiner' div

    container.append(image, category, des, price, title, remove);
    //adding the data to our 'cart_root' div

    cart_root.append(container);
  });
}
//remove from cart function
function removeFunction(el, id) {
  alert("Do You want to Remove item ? " + el.category);
  cartData.splice(id, 1);
  //after deleting the data from local storage we are setting the updated data again on our localStorage
  localStorage.setItem("cart", JSON.stringify(cartData));
  setTimeout(() => {
    window.location.reload();
  }, 500);
}
