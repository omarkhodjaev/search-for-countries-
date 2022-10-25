const listEl = document.querySelector(".countries__list");
const countrySearchEl = document.querySelector(".country__search");


fetch("https://restcountries.com/v2/all")
.then(data => data.json())
.then(data => renderFunction(data.slice(1,10)));


function renderFunction(countries){
    listEl.innerHTML = ""; // clear 
    countries.forEach(country => {
        (country)

        const newCountryLiEl = document.createElement("li");
        newCountryLiEl.className = "item";

        const newDivEl = document.createElement("div")
        newDivEl.className = "information"

        const countryImgEl = document.createElement("img")
        countryImgEl.src = country.flag;

        countryImgEl.setAttribute("width","264px") 
        countryImgEl.setAttribute("height","160px")

        
        const countryNameEl =   document.createElement("h3");
        countryNameEl.innerHTML = country.name;
        countryNameEl.className = "name__country"; 

        const countryPopulation = document.createElement("p");
        countryPopulation.innerHTML = "<strong>Population: </strong>" + country.population;

        const countryRegion = document.createElement("p");
        countryRegion.innerHTML = "<strong>Region: </strong>" + country.region;

        const countryCapital = document.createElement("p");
        countryCapital.innerHTML =  "<strong>Capital: </strong>" + country.capital; 

        newCountryLiEl.append(countryImgEl,newDivEl);
        newDivEl.append(countryNameEl,countryPopulation,countryRegion,countryCapital)
        listEl.appendChild(newCountryLiEl)
    });
}


countrySearchEl.addEventListener("change", (event) => {
fetch("https://restcountries.com/v2/name/" + event.target.value).then(res => res.json()).then(data => {
    if(data.status != 404){
        renderFunction(data.slice(0,10))
    }
    else{
        console.log("Topilmadi")
    }
})
    
})


