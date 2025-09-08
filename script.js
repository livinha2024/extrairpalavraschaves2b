import { PALAVRAS_RUINS} from "./palavrasruins";

const botaoMostraPalavras = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.assEventListener ('clik', mostraPalavrasChaves);

function mostraPalavrasChaves () {
    const texto = document.querySelector('entrada-de-texto').ariaValueMax;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChaves.join(",");
}