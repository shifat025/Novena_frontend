let currentPage = 1;

const LoadAbout = (page)=>{
    fetch(`https://nevana-api.onrender.com/doctor/List/?page=${page}`)
    .then((res)=> res.json())
    .then((data)=> DisplayAbout(data.results))

}

const DisplayAbout = (abouts)=>
{
   
    const parent = document.getElementById("index-div");
    parent.innerHTML="";
    abouts.forEach((about)=>
    {
        const div = document.createElement("div");

        div.innerHTML = `
        
        <div class="card border-none" style="width: 15rem;">
        <img src="${about.images}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">Dr.${about.user}</h5>
            <p class="card-text opacity-50">${about.speclization}</p>

        </div>
            </div>
        `;
        parent.appendChild(div);
    });
}

const nextPage = ()=>
{
    currentPage++;
    LoadAbout(currentPage)
}

const previousPage = ()=>
{
    if (currentPage > 1){
        currentPage--;
        LoadAbout(currentPage)
    }
}

LoadAbout(currentPage);










