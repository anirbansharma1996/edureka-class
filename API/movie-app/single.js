const single_root = document.getElementById("single-root");

const movieObj = JSON.parse(localStorage.getItem("movie")) || {}


const showData=(obj)=>{
   let count = 1
   let price = 100
   //--------------- CREATION ---------------------------
   let actor = document.createElement('h4')
   actor.innerText=obj.Actors
   let awards = document.createElement('p')
   awards.innerText=obj.Awards
   let country = document.createElement('p')
   country.innerText=obj.Country
   let genre = document.createElement('p')
   genre.innerText=obj.Genre
   let plot = document.createElement('p')
   plot.innerText=obj.Plot
   let Title = document.createElement('h3')
   Title.innerText="Series : "+obj.Title
   let imdbRating = document.createElement('p')
   imdbRating.innerText="IMDB Rating : "+obj.imdbRating
   let poster = document.createElement('img')
   poster.src=obj.Images[1]
   //-----------------------------------------------
    let Dec = document.createElement("button")
    Dec.innerText='Remove '
    Dec.addEventListener("click",()=>{
       if(count>1){
        count--
        seats.innerText=count
        total.innerText="Total : $"+price*count
       }
    })
    let Inc = document.createElement("button")
    Inc.innerText='Add '
    Inc.addEventListener("click",()=>{
      count++
      seats.innerText=count
      total.innerText="Total : $"+price*count
    })
    let seats = document.createElement('h5')
    seats.innerText=count
    //----------------------------------------
    let total = document.createElement('h3')
    total.innerText="Total : $"+price*count
    let confirm = document.createElement("button")
    confirm.innerText='Book  '
    confirm.addEventListener("click",()=>{
          alert(`Ticket Booked Successfuly for`)
    })
   //-----------------Creating THE DIVs ------------------------
   let main=document.createElement("div")
   main.className='main_solo'
   let image_div=document.createElement("div")
   image_div.className='image_div'
   let data_div=document.createElement("div")
   data_div.className='data_div'
   let book_div=document.createElement("div")
   book_div.className='book_div'
   let button_div=document.createElement("div")
   button_div.className='button_div'
   //-------------------APPENDING with DIVs--------------------
   image_div.append(poster)
   book_div.append(Dec,seats,Inc)
   button_div.append(total,book_div,confirm)
   data_div.append(Title,imdbRating,genre,actor,awards,country,plot,button_div)
   //------------------MAIN APPENDING -----------------------
   main.append(image_div,data_div)
   single_root.append(main)


}
showData(movieObj)