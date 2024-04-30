const LoadRegister = (event) => {
    event.preventDefault();

    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password1 = getValue("password1");
    const password2 = getValue("password2");

    const info = {
        username,
        first_name,
        last_name,
        email,
        password1,
        password2
    }

    if (password1 == password2) {

        document.getElementById("p").innerText = "";
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password1)) {
            console.log(info)
            fetch("https://nevana-api.onrender.com/patient/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" , 
                },
                body: JSON.stringify(info)
            })
                .then((res) => res.json())
                .then((data)=>console.log(data))

        }
        else {
            document.getElementById("p").innerText = "pass must contain Minimum eight characters, at least one letter and one number";
        }
    }
    else {
        document.getElementById("p").innerText = "Password Don't Match , Please try again";
    }
}

const getValue = (value) => {
    return document.getElementById(value).value;
}