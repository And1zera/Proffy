//procura o botao
//quando clicar no botao
var teste = document.querySelector('#add-time').addEventListener('click', cloneField);

//executar uma acao
function cloneField(){
    //duplicar campos, quais campos ? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //limpar os campos
    const filds = newFieldContainer.querySelectorAll('input');

    //para cada campo limpar
    filds.forEach(field =>{
        field.value = "";
    })

    //colocar na pagina, onde ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
