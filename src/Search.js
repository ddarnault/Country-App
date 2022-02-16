import axios from "axios";

async function getSearchCountryData(name) {
    const countryInformation = document.getElementById("container");

    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`);
        console.log(result.data)
        const countries = result.data[0]

        countryInformation.innerHTML = `
        <img src="${countries.flag}" class="flag"/>
        <h3>${countries.name}</h3>
        <p>${countries.name + " is situated in " + countries.region + "." + " It has a population of " + countries.population + " people."}</p>
        <p>${"The capital is " + countries.capital + " and you can pay with " + countries.currencies[0].name + "s."}</p>
        <p>${"They speak " + countries.languages[0].name + "."}</p>
        `
    } catch (e) {
        console.error(e);
    }
}

getSearchCountryData()

const searchResults = document.getElementById("results")
searchResults.addEventListener("submit", searchCountries)

function searchCountries(e) {
    e.preventDefault()
    const inputField = document.getElementById("search-country")
    getSearchCountryData(inputField.value)
}

    





