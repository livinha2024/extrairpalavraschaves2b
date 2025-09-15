import { PALAVRAS_RUINS} from "./palavrasruins";

const botaoMostraPalavras = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.assEventListener ('clik', mostraPalavrasChaves);

function mostraPalavrasChaves () {
    const texto = document.querySelector('entrada-de-texto').ariaValueMax;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChaves.join(",");
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
   
    for (let i in palavras){
        palavras [i] =palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencia(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenapalavra(p1,p2) {
        return frequencias[p2] - frequencias[p1];
    }

    
}