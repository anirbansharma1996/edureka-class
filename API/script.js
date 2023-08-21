const root = document.getElementById("root");
const length = document.getElementById("length");
const sortedPrice = document.getElementById("sorting-price")
const sortingCategory = document.getElementById("sorting-category")

sortedPrice.addEventListener("change",()=>{
  let sort_by= sortedPrice.value
  getData(sort_by)
})

sortingCategory.addEventListener('change',()=>{
  let sort_category = sortingCategory.value
  getData(sort_category)
})


const URL = "https://fakestoreapi.com/products";

async function getData(query="") {
  console.log(query)
  try {
    let response = await fetch(URL);
    let data = await response.json();

    if(query==='high-to-low'){
      data.sort((a,b)=> b.price-a.price)
    }
    else if(query==='low-to-high'){
      data.sort((a,b)=>a.price - b.price)
    }
    else if(query==="men's-clothing"){
     let menz = data.filter((el)=>el.category==="men's clothing")
     showData(menz);
     return
    }
    else if(query==="Women's-clothing"){
      let womenz = data.filter((el)=>el.category==="women's clothing")
      showData(womenz);
      return
     }
     else if(query==="electronics"){
      let electronics = data.filter((el)=>el.category==="electronics")
      showData(electronics);
      return
     }
     else if(query==="jewelery"){
      let jewelery = data.filter((el)=>el.category==="jewelery")
      showData(jewelery);
      return
     }

    showData(data);
  } catch (error) {
    console.log(error.message);
  }
}
getData();

function showData(arr) {
  console.log(arr)
  root.innerHTML=""
  length.innerText = `You have ${arr.length} item's in your store`;
  arr.map((el, id) => {
    let container = document.createElement("div");
    container.className = "container";
    let category = document.createElement("h4");
    category.innerText =
      "Category : " + el.category[0].toUpperCase() + el.category.slice(1);
    let des = document.createElement("p");
    des.innerText = "Description : " + el.description.slice(0, 20);
    let image = document.createElement("img");
    image.src = el.image;
    let price = document.createElement("h3");
    price.innerText = `Price : ₹${Math.ceil(el.price) * 100}/-`;
    let title = document.createElement("h6");
    title.innerText = el.title.slice(0, 15);
    let cart = document.createElement("button");
    cart.innerText = "Add to Cart";
    cart.addEventListener("click", () => {
      cartFunction(el, id);
    });

    container.append(image, category, des, price, title, cart);
    root.append(container);
  });
}

let cartArr = [];

function cartFunction(el, id) {
  alert("Successfully added Item : " + el.category + " in your cart");
  cartArr.push(el);
  localStorage.setItem("cart", JSON.stringify(cartArr));
}
