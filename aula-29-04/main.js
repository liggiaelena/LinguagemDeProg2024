
function popularLista(data) {
    const listaAnimais = document.getElementById('lista-animais');

    data.forEach(animal => {
        const { name, idade, raca } = animal;
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${name} (${idade}) - Raça: ${raca}`;
        listaAnimais.appendChild(listItem);
    });
    
}

function carregarLista(){
    fetch("https://6630275bc92f351c03d92479.mockapi.io/linguagens/animais")
    .then(response => response.json())
    .then(data => popularLista(data))
    .catch(error => console.log('Erro: ', error));
    popularLista(data);
}


function adicionarDog(){
            fetch("https://6630275bc92f351c03d92479.mockapi.io/linguagens/animais", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'Totó',
                    age: 12,
                    raca: 'cachorro'
                })
            })
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                // Adicionar apenas o novo cachorro à lista
                const { name, idade, raca } = data;
                const listItem = document.createElement('li');
                listItem.textContent = `Nome: ${name} (${idade}) - Raça: ${raca}`;
                const listaAnimais = document.getElementById('lista-animais');
                listaAnimais.appendChild(listItem);
            })
            .catch(error => console.log('Erro: ', error));
}

document.addEventListener("DOMContentLoaded", function() {
    carregarLista();
});
    