const root = document.getElementById("root");

const URL = "https://movies-database-gold.vercel.app/movies";
const getData = async () => {
  try {
    let response = await fetch(URL);
    let data = await response.json();
    showData(data);
  } catch (error) {
    console.log(error.message);
  }
};
getData();

const showData = (data) => {
  data.map((el) => {
    const main = document.createElement("div");
    main.className = "main";
    const poster = document.createElement("img");
    poster.src = el.Images[0];
    let Title = document.createElement('h3')
    Title.innerText="Series : "+el.Title
    const button = document.createElement("button");
    button.innerText = "More Info !";
    button.addEventListener("click", () => {
      singleMovie(el);
    });
    main.append(poster,Title, button);
    root.append(main);
  });
};

function singleMovie(el) {
  localStorage.setItem("movie", JSON.stringify(el));
  setTimeout(() => {
    window.location.href = "single.html";
  }, 500);
}





