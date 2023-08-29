const root = document.getElementById("root");
const news_count = document.getElementById("news-count");
const page_num = document.getElementById("page")
const limit_num = document.getElementById('limit-result')
let count = 1
let limit=3

limit_num.addEventListener('change',()=>{
  limit=Number(limit_num.value)
  getData()
})

const URL = "https://decan-mock-api-data.onrender.com/newsData";


async function getData() {
  try {
    root.innerHTML = `Loading...`;
    let response = await fetch(URL+"?_limit="+limit+"&_page="+count);  
    // or, let response = await fetch(`${URL}?_limit=${limit}&_page=${count}`);
    let data = await response.json();
    news_count.innerHTML = `${
      data.length
    }  news on ${new Date().toLocaleDateString()} page ${count}`;
    root.innerHTML = "";
    showNews(data);
    showPage()
  } catch (error) {
    root.innerHTML = "404 | Something Went Wrong";
    console.log(error.message);
  }
}

getData();
function showNews(data) {
  data.forEach((el, id) => {
    let main = document.createElement("div");
    main.className = "main";
    let image = document.createElement("img");
    image.src = el.image;
    let headline = document.createElement("h3");
    headline.innerText = el.headline;
    let date = document.createElement("p");
    date.innerText = el.date;
    let read = document.createElement("button");
    read.innerText = "Read More";
    read.addEventListener("click", () => {
      ReadMoreNews(el);
    });

    main.append(image, date, headline, read);
    root.append(main);
  });
}

function ReadMoreNews(news) {
  localStorage.setItem("news", JSON.stringify(news));
  window.location.href = "details.html";
}

//pagination section js

function showPage(){
   let div = document.createElement('div')
   div.className='page_div'
   
   let previous = document.createElement('button')
   previous.innerText='Previous'
   previous.addEventListener('click',()=>{
    if(count>1){
      count--
      getData()
    }
   })

   let page_count = document.createElement("h4")
   page_count.innerText=count


   let next = document.createElement('button')
   next.innerText='Next'
   next.addEventListener('click',()=>{
     count++
     getData()
   })

   div.append(previous,page_count,next)
   page_num.innerHTML=""
   page_num.append(div)

}

