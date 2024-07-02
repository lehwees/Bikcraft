// Ativar links do Menu

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){  // Ativar o link, passando o parametro dos links que quer que seja passados
    const url = location.href; //para acessar a url do link
    const href = link.href; // ter informação do link atraves do href tbm


    // url.includes -> Verifica se a palavra existe ou não na string, retornando true ou false
    if(url.includes(href)){
        console.log(link);
    }
}

links.forEach(ativarLink);


// Ativar Itens do Orçamento

const paramentros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const element = document.getElementById(paramentro);

    if(element){
        element.checked = true;
    }
}

paramentros.forEach(ativarProduto);


// Pergutas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", 'true');
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelector('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;

    if (media){
        galeriaContainer.prepend(img);
    }

    console.log(img);
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

// galeria.forEach(eventosGaleria);
console.log(galeria);

// Animação

if(window.SimpleAnime){
    new SimpleAnime();
}





