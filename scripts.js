const button = document.getElementById('convert-button');
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000085


const convertValues = () => {
const inputReais = document.getElementById("input-real").value;
const realValueText = document.getElementById("real-value-text");
const currencyValueText = document.getElementById("currency-value-text");


realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
    {style: 'currency', currency: 'BRL'}
).format(inputReais)

if (select.value === "US$ Dólar Americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
    {style: 'currency', currency: 'USD'}
).format(inputReais / dolar)
}

if (select.value === "€ Euro") {
currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
    {style: 'currency', currency: 'EUR'}
).format(inputReais / euro)
}
if (select.value === "Ƀ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
        {style: 'currency', currency: 'BTC'}
    ).format(inputReais * bitcoin)
    }
}

chanceCurrency = () => { 
    const currentName = document.getElementById("currency-name")
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dólar Americano'){
        currentName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.jpg"
    }

    if(select.value === '€ Euro'){
        currentName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.jpg"
    }

    if(select.value === 'Ƀ Bitcoin'){
        currentName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/img-bitcon.png"
    }

    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', chanceCurrency)