const root = document.getElementById("root");

const getData = async () => {
  try {
    root.innerHTML = "Loading...";
    let response = await fetch("https://reqres.in/api/users");
    let { data } = await response.json();
    root.innerHTML = "";
    showData(data);
    console.log(data);
  } catch (error) {
    root.innerHTML = "404| Something Went Wrong";
    console.log(error.message);
  }
};
getData();

const showData = (data) => {
  data.forEach((el) => {
    let main = document.createElement("div");
    main.className = "main";
    let image = document.createElement("img");
    image.src = el.avatar;
    let first_name = document.createElement("h3");
    first_name.innerText = "Name : " + el.first_name;
    let button = document.createElement("button");
    button.innerText = "More Info !";
    button.addEventListener("click", () => {
      MoreInfo(el);
    });

    main.append(image, first_name, button);
    root.append(main);
  });
};

const MoreInfo = (el) => {
  localStorage.setItem("user", JSON.stringify(el));
  setTimeout(() => {
    window.location.href = "solo-user.html";
  }, 1000);
};
