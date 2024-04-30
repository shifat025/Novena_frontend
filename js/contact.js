const LoadContact = (event) => {
    event.preventDefault();
    const name = getValue("name");
    const phone = getValue("phone");
    const problem = getValue("problem");
    const info = {
        name,
        phone,
        problem
    };

    fetch("https://nevana-api.onrender.com/contact_us/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  // Corrected header key
        },
        body: JSON.stringify(info)
    })
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .catch((error) => console.error('Error:', error));
};

const getValue = (value) => {
    return document.getElementById(value).value; // Corrected typo 'vlaue' to 'value'
};
