const root = document.getElementById("root");
const news_count = document.getElementById("news-count")


const URL = `https://decan-mock-api-data.onrender.com/newsData`

async function getData (){
  try {
     root.innerHTML=`Loading...`
     let response = await fetch(URL) 
     let data = await response.json() 
     news_count.innerHTML=`You have ${data.length} News On ${new Date().toLocaleDateString()} `
     root.innerHTML=""
     showNews(data)
  } catch (error) {
    root.innerHTML="404 | Something Went Wrong"
    console.log(error.message)
  }
}
getData ()
function showNews(data){
  data.forEach((el,id)=>{
    let main = document.createElement('div')
    main.className="main"
    let image = document.createElement('img')
    image.src = el.image
    let headline = document.createElement('h3')
    headline.innerText = el.headline
    let date = document.createElement('p')
    date.innerText = el.date
   let read= document.createElement('button')
   read.innerText="Read More"
   read.addEventListener('click',()=>{
      ReadMoreNews(el)
   })

    main.append(image,date,headline,read)
    root.append(main)
  })
}

function ReadMoreNews(news){
  localStorage.setItem("news",JSON.stringify(news))
  window.location.href="details.html"
}


