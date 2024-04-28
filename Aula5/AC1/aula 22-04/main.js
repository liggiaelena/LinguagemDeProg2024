let titulo = document.getElementById('titulo').innerHTML
console.log(titulo)

let t2 = document.querySelector('#titulo'); //id
let p = document.querySelector('p') //tag
let bo = document.querySelector('.btn') //class

console.log(bo)
bo.innerHTML = 'oi zé mane'

console.log(bo)

// document.querySelector('img').src = 'novo acaminho de imagem'

function changeImg(){
    // let oi = document.querySelector('.btn').innerHTML
    console.log("entrei")
    if(bo.innerHTML == 'oi zé mane'){
        
        bo.innerHTML = 'oi zé ruela'
        bo.style = 'color: red'
        bo.classList.add('btn2')
    }else{
        bo.innerHTML = 'oi zé mane'
        bo.style = 'color: aqua'
        bo.classList.remove('btn2')
    }
}

let buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.classList.add('btn2')
});

let listaClientes =[];


function adicionarCliente(){
    let nome = document.querySelector('#nome').value
     listaClientes.push(nome); 
    AtualizarLista()
}



function AtualizarLista(){
    let lista = document.querySelector('#listaClientes')

    lista.innerHTML = ''

    listaClientes.forEach((cliente, index)=>{
        lista.innerHTML += `<li id="${index}">${cliente} <button onClick="apagar('${index}')">Apagar</button></li>`;
    })

    document.querySelector('#nome').value = '';
    
}

function apagar(index){
    listaClientes.splice(index, 1);


    AtualizarLista();

}