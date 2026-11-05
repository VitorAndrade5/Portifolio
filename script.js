function escrevendoLetra() {
    const titulo = document.querySelector('.Digitando');
    if (!titulo) return;

    const texto = Array.from(titulo.textContent);
    titulo.textContent = '';
    texto.forEach((letra, i) => {
        setTimeout(() => {
            titulo.textContent += letra;
        }, 100 * i);
    });
}

escrevendoLetra();

const ativaMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector ('header .Navegação-primaria')

ativaMenu.addEventListener('click',()=>{
    ativaMenu.classList.toggle('fa-bars');
    ativaMenu.classList.toggle('fa-xmark');
    navMenu.classList.toggle('ativado')
})
