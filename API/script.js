const root = document.getElementById('root')
const length = document.getElementById('length')
const URL="https://fakestoreapi.com/products"
async function getData(){
    try {
        let response = await fetch(URL)
        let data = await response.json()
        showData(data)   
    } 
    catch (error) {
        console.log(error.message)
    }
}
getData()

function showData(arr){
    length.innerText=`You have ${arr.length} item's in your store`
   arr.map((el,id)=>{
    let container = document.createElement('div')
    container.className='container'
    let category=document.createElement('h4')
    category.innerText="Category : "+el.category
    let des=document.createElement('p')
    des.innerText="Description : "+el.description.slice(0,20)
    let image = document.createElement('img')
    image.src=el.image
    let price = document.createElement('h3')
    price.innerText=`Price : ₹${Math.ceil(el.price)*100}/-`
    let title = document.createElement('h6')
    title.innerText=el.title
    container.append(image,category,des,price,title)
    root.append(container)
   })

}

