//here we are storing the elements of html document in a variable 
const root = document.getElementById("root");
const length = document.getElementById("length");
const sortedPrice = document.getElementById("sorting-price");
const sortingCategory = document.getElementById("sorting-category");
const searchProd = document.getElementById("search-text");

//this function is for when a user search for something by its title
searchProd.addEventListener("input", () => {
  let product = searchProd.value;
  getData(null, product);
});
//this function is for when the user wants to sort the products by price
sortedPrice.addEventListener("change", () => {
  let sort_by = sortedPrice.value;
  getData(sort_by);
});

//this function is for when the user wants to filter the products by category
sortingCategory.addEventListener("change", () => {
  let sort_category = sortingCategory.value;
  getData(sort_category);
});

// this is the main URL , from which we are getting all our data
const URL = "https://fakestoreapi.com/products";

// async function to fetch the data from URL / Server
async function getData(query = "", product = "") {
  try {
    let response = await fetch(URL);
    let data = await response.json();
   //if the user searchs for any "product" this if consition statement will get called
    if (product) {
      data = data.filter((el) =>
        el.title.toLowerCase().includes(product.toLowerCase())
      );
    }
    //if the user tries to "sort or filter" the data this else condition will get called 
    else {
      if (query === "high-to-low") {
        data.sort((a, b) => b.price - a.price);
      } else if (query === "low-to-high") {
        data.sort((a, b) => a.price - b.price);
      } else if (query === "men's-clothing") {
        data = data.filter((el) => el.category === "men's clothing");
      } else if (query === "Women's-clothing") {
        data = data.filter((el) => el.category === "women's clothing");
      } else if (query === "electronics") {
        data = data.filter((el) => el.category === "electronics");
      } else if (query === "jewelery") {
        data = data.filter((el) => el.category === "jewelery");
      }
    }
    //this is the function call of our main showData() , which will help us to show the data on UI 
    showData(data);
  } catch (error) {
    console.log(error.message);
  }
}
//calling the API function getData() to get all the data from API
getData();

function showData(arr) {
  // "" (empty string) because , when the user filter - search - sort products , we want to show it on UI , and not overlapping the original content
  root.innerHTML = "";
  //we are showing how many products are there in our Store
  length.innerText = `You have ${arr.length} item's in your store`;
  //mapping through the data ,which we pass as an argument in our showData() function
  arr.map((el, id) => {
    //createing a container ,where we will append all the other elements 
    let container = document.createElement("div");
    container.className = "container";
    //---------------------------------------------------
    let category = document.createElement("h4");
    category.innerText =
      "Category : " + el.category[0].toUpperCase() + el.category.slice(1);
    //----------------------------------------------------
    let des = document.createElement("p");
    des.innerText = "Description : " + el.description.slice(0, 20);
    //------------------------------------------------------
    let image = document.createElement("img");
    image.src = el.image;
    //------------------------------------------------------
    let price = document.createElement("h3");
    price.innerText = `Price : ₹${Math.ceil(el.price) * 100}/-`;
    //--------------------------------------------------------
    let title = document.createElement("h6");
    title.innerText = el.title.slice(0, 15);
    //-----------------------------------------------
    //adding a add to cart function , to add the product in our cart
    let cart = document.createElement("button");
    cart.innerText = "Add to Cart";
    cart.addEventListener("click", () => {
      cartFunction(el, id);
    });

 //adding the data to our 'conatiner' div
    container.append(image, category, des, price, title, cart);
//adding the conatiner with out 'root' div
    root.append(container);
  });
}
//we want to store the product we are adding to the cart in an Array
let cartArr = [];
//add to cart function 
function cartFunction(el, id) {
  alert("Successfully added Item : " + el.category + " in your cart");
  //pushing the data in that array
  cartArr.push(el);
  //setting the data in localStorage, in order to access it to other Pages too
  localStorage.setItem("cart", JSON.stringify(cartArr));
  //FORMART TO SET DATA IN LOCAL STORAGE :  'localStorage.setItem('key',value)'
  //NOTE : if we are storing a non-primitive data type we have to do 'localStorage.setItem('key',JSON.stringify(value))'
}
