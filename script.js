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
