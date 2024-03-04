export const Modal = {
    //object literal
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close '),


    open: function() {
        Modal.wrapper.classList.add('open')
    },
//o close é um short hand, é a mesma coisa que o open, porém com a escrita simplificada
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

Modal.buttonClose.onclick = () => {
    Modal.close()
}


window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    //console.log(event.key)
    //mostra no console o nome da tecla que esta sendo precionada
    if(event.key === 'Escape'){
        Modal.close()
    }
}

//Outra forma de fazer 

//window.onkeydown = handleKeydown
/*porém o "onNomedoEvento", será aceito apenas um por aplicativo!
então se no futuro for usado window.onkeydown em outro arquivo
ele irá desconsiderar esse window.onkeydown e irá considerar o ultimo que ele carregar.
por isso é melhor utilizar o .addEventListener
window.addEventListener('keydown', handleKeydown)
                     //('nome do evento', função)
*/