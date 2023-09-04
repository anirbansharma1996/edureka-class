const solo_user_root = document.getElementById("solo-user-root");

const user= JSON.parse(localStorage.getItem('user')) || {}


const showData = (data) => {
    let main = document.createElement("div");
     main.className = "main";
     let id = document.createElement("p");
     id.innerText = " ID : " + data.id;
     let image = document.createElement("img");
     image.src = data.avatar;
     let name = document.createElement("h3");
     name.innerText = "Name : " + data.first_name+" "+data.last_name;
    let email = document.createElement('h4')
    email.innerText=" Email : "+data.email

    main.append(image,id, name,email  );
    solo_user_root.append(main);
 
};

showData(user)