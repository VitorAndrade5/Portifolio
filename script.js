//efeito digitando//
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


//menu sanduiche//
    function MenuMobol(){
    const ativaMenu = document.querySelector('.fa-bars')
    const navMenu = document.querySelector ('header .Navegação-primaria')

    ativaMenu.addEventListener('click',()=>{
        ativaMenu.classList.toggle('fa-bars');
        ativaMenu.classList.toggle('fa-xmark');
        navMenu.classList.toggle('ativado')
    });
}
MenuMobol();


//efeito slide//

function sobreMim(){

    //experience
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    //education//
    const diveducation = document.querySelectorAll('.education_content div');
    const lieducation = document.querySelectorAll('.education_content ul li');

    //exp//
    function slideShowExperience(index){
        if (!divExperiencia[index] || !liExperiencia[index]) return;

        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        })
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
    } 

    //edu//
    function slideShow2(index){
        diveducation.forEach((div)=>{
            div.classList.remove('ativo');
        })
        lieducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        diveducation[index].classList.add('ativo')
        lieducation[index].classList.add('ativo')
    }

    liExperiencia.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShowExperience(index)
        });
        
    });lieducation.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });

    slideShowExperience(0);
}
sobreMim();

/*Lista dos projetos*/
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonAll = document.querySelectorAll('.projects_models .all');

function removeClick (index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo')
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
         item.classList.remove('ativo');
})

if(buttom == 'design'){
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
}
if(buttom == 'graphic'){
    lista[2].classList.add('ativo');
}
if(buttom == 'websites'){
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
}
if(buttom == 'all'){
    lista[0].classList.add('ativo');
    lista[1].classList.add('ativo');
    lista[2].classList.add('ativo');
    lista[3].classList.add('ativo');
    lista[4].classList.add('ativo');
    lista[5].classList.add('ativo');
    lista[6].classList.add('ativo');
    lista[7].classList.add('ativo');
}

}

buttonGeral.forEach((item)=>{
    item.addEventListener('click',(e)=>{
     let currentButton = e.target;
     if (currentButton.classList.contains('all')){
        showLista(listaALL);
     }

     if (currentButton.classList.contains('design')){
        showLista(listaALL, "design");
     }

     if (currentButton.classList.contains('graphic')){
        showLista(listaALL, "graphic");
     }

     if (currentButton.classList.contains('websites')){
        showLista(listaALL, "websites");
     }

     if (currentButton.classList.contains('all')){
        showLista(listaALL,"all");
     }

    })
})

showLista(listaALL);

