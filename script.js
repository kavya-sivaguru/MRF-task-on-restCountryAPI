var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);

    var asianC = data.filter((val) => val.region === 'Asia').map((val) => val.name)
    console.log(asianC);

    var population_less_than_2lacs = data.filter((val) => val.population < 200000).map((val) => val.name)
    console.log(population_less_than_2lacs);

    var currency_USD = data.filter((val) => {
        for (var i in val.currencies) {

            if (val.currencies[i].code == "USD") {
                return val.name;
            }
        }
    })
    console.log(currency_USD);

    var populationSum = data.reduce((accum, val) => accum + val.population, 0);
    console.log(populationSum);
}