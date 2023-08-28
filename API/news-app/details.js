const details_root = document.getElementById("details-root")

const News = JSON.parse(localStorage.getItem("news")) || {}

const showDeatailsNews=(obj)=>{
    let main = document.createElement("div")
    main.className='deatils-main'
    let image = document.createElement('img')
    image.src = obj.image
    let headline = document.createElement('h3')
    headline.innerText=obj.headline
    let date = document.createElement('h5')
    date.innerText=obj.date
    let description = document.createElement('h4')
    description.innerText=obj.description

   main.append(image,headline,date,description)
   details_root.append(main)

}

showDeatailsNews(News)