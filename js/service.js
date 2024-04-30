let currentPage = 1;

const LoadService = (page) => {
    fetch(`https://nevana-api.onrender.com/service/?page=${page}`)
        .then((res) => res.json())
        .then((data) => DisplayService(data.results)); 
}

const DisplayService = (services) => {
    const parent = document.getElementById('service-div');
    parent.innerHTML = ""; // clear previous content

    services.forEach((service) => { 
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card border-none shadow" style="width: 20rem;">
                <img src="${service.images}" class="card-img-top p-3" alt="...">
                <div class="card-body mb-5">
                    <h5 class="card-title fw-bold">${service.name}</h5>
                    <p class="card-text opacity-50">${service.description}</p>
                </div>
            </div>
        `;
        parent.appendChild(div);
    });
}

const nextPage = () => {
    currentPage++;
    LoadService(currentPage);
}

const previousPage = () => {
    if (currentPage > 1) {
        currentPage--;
        LoadService(currentPage);
    }
}

LoadService(currentPage); 
