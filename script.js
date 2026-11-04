function ativaLetras(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(() =>{
            elemento.innerHTML += letra;
        }, 120 * i)
    })

}




const titulo = document.querySelector('.Digitando');
/*const sobre = document.querySelector('.Sobre');*/

ativaLetras(titulo);
/*ativaLetras(sobre);*/


