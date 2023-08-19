var cart_root = document.getElementById('cart-root')
var cart_count = document.getElementById('cart-count')
var bill = document.getElementById('bill')

let cartData = JSON.parse(localStorage.getItem('cart')) || []

showData(cartData)


function showData(arr) {
    cart_count.innerText = `You have ${arr.length} item's in your Cart`;
    var sum = 0
    arr.map((el, id) => {
      bill.innerText="₹ "+(sum+=Math.ceil(el.price*100))+"/-"
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
      let remove = document.createElement('button')
      remove.innerText="Remove"
      remove.addEventListener('click',()=>{
         removeFunction(el,id)
      })
      container.append(image, category, des, price, title,remove);
      cart_root.append(container);
    });
  }

  function removeFunction(el,id){
    alert('Do You want to Remove item ? '+el.category)
    cartData.splice(id,1)
    localStorage.setItem('cart',JSON.stringify(cartData))
    setTimeout(()=>{
      window.location.reload()
    },500)
  }