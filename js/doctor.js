const LoadDoctor = (search)=>
{
    console.log(search);
    document.getElementById('doctor').innerHTML =""; 
    fetch(`https://nevana-api.onrender.com/doctor/List/?search=${search ? search : ""}`)
    .then((res)=>res.json())
    .then((data)=> {
        console.log(data.results);
        DisplayDoctor(data.results);
    })

}

const DisplayDoctor = (doctors) => {
    
    doctors.forEach((doctor) => { 
        const parent = document.getElementById('doctor');
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card border-none" style="width: 15rem;">
        <img src="${doctor.images}" class="card-img-top hvr-grow" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">Dr.${doctor.user}</h5>
            <p class="card-text opacity-50">${doctor.speclization}</p>

        </div>
        </div>
        `;
        parent.appendChild(div);
    });
}


const LoadSpeclization = () =>
{
    fetch("https://nevana-api.onrender.com/doctor/designation/")
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((items)=>
        {
            const parent = document.getElementById("ul-items");
            const li = document.createElement("li");
            li.textContent = items.name;
            li.classList.add("hvr-underline-from-center");
            li.onclick = function() {
                LoadDoctor(items.name);
            };
            parent.appendChild(li);
        })
    })
}

const LoadSearch = (event) => {
    event.preventDefault();
    document.getElementById('doctor').innerHTML = '';
    const value = document.getElementById("search").value;
    LoadDoctor(value);
}

LoadDoctor();
LoadSpeclization();

