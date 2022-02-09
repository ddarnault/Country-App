import axios from 'axios';

console.log('Hallo daar!');

/* Installeer en importeer Axios;

    1. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint. Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
    2. Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
    3. Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
    4. Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen mapt om de landen op de pagina weer te geven.

 */

async function getCountryData() {


    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        console.log(result.data);
        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        getAllCountries(result.data)


    } catch (e) {
        console.error(e);
    }
}

getCountryData()

function getAllCountries(countries) {
    const countryUnorderedList = document.getElementById("country-list")


    countries.map((allCountries) => {
        const countryList = document.createElement("li")
        countryList.innerHTML = `
        <img src="${allCountries.flag}" class="flag"/>
        <h3 class = "${allCountries.region}">${allCountries.name}</h3>
        <p class="population">${"Has a population of " + allCountries.population + " people"} </p>
        `
        countryUnorderedList.appendChild(countryList);
    });

}