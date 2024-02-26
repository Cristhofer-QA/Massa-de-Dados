const url = "https://viacep.com.br/ws/SP/Fernandopolis/Maria Rosa da Silva/json"

async function getCeps() {

    const response = await fetch(url);

    const data = await response.json();
    console.log(data)
}

getCeps();