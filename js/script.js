
document.getElementById('spanGeradorNome').addEventListener('click', scriptAbrirGeradorNome);
document.getElementById('spanGeradorCpf').addEventListener('click', scriptAbrirGeradorCPF);
document.getElementById('spanGeradorCnpj').addEventListener('click', scriptAbrirGeradorCNPJ);
document.getElementById('spanGeradorTelefone').addEventListener('click', scriptAbrirGeradorTelefone);
document.getElementById('btn-copiar-nome').addEventListener('click', copiarNome);
document.getElementById('btn-copiar-cpf').addEventListener('click', copiarCpf);
document.getElementById('btn-copiar-cnpj').addEventListener('click', copiarCnpj);
document.getElementById('btn-copiar-telefone').addEventListener('click', copiarTelefone);
document.getElementById('formatacao-telefones').addEventListener('focus', inativarCampoOperadoraTelefones);
document.getElementById('menu-hambuguer').addEventListener('click', abrirEfecharMenu);

/************************** Abrir gerador **************************/
function scriptAbrirGeradorCPF() {
    abrirEfechar('modal-cpf');
    criarComboUf('uf');
    criarComboFormatacaoCpfCnpj('formatacao');
};

function scriptAbrirGeradorNome() {
    abrirEfechar('modal-nome');
    criarComboSexo('sexo');
    criarComboFormatacaoNome('tipo-nome');
};

function scriptAbrirGeradorCNPJ() {
    abrirEfechar('modal-cnpj');
    criarComboFormatacaoCpfCnpj('formatacao-cnpj');
};

function scriptAbrirGeradorTelefone() {
    abrirEfechar('modal-telefone');
    criarComboUf('uf-telefone');
    criarComboOperadora('operadora-telefone');
    criarComboFormatacaoTelefone('formatacao-telefones');
};


/************************** Fechar gerador **************************/
function scriptsFecharGeradorCPF() {
    limparCampo('quantidade-cpf');
    limparCampo('retorno-cpf');
    removerCombobox('#uf');
    removerCombobox('#formatacao');
};

function scriptsFecharGeradorNome() {
    limparCampo('quantidade-nome');
    limparCampo('retorno-nome');
    removerCombobox('#sexo');
    removerCombobox('#tipo-nome');
};

function scriptsFecharGeradorCNPJ() {
    limparCampo('quantidade-matriz');
    limparCampo('quantidade-cnpj');
    limparCampo('retorno-cnpj');
    removerCombobox('#formatacao-cnpj')
};

function scriptsFecharGeradorTelefone() {
    limparCampo('quantidade-telefones');
    limparCampo('retorno-telefone');
    removerCombobox('#formatacao-telefones')
    removerCombobox('#operadora-telefone')
    removerCombobox('#uf-telefone')
};


/************************** Criar combobox **************************/
function criarComboOperadora(selectorCampo) {
    const operadora = ['Claro', 'Oi', 'Tim', 'Vivo'];
    criarOptionsSelectValorIgualTexto(selectorCampo, operadora);
};

function criarComboUf(selectorCampo) {
    const uf = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    criarOptionsSelectValorIgualTexto(selectorCampo, uf);
};

function criarComboSexo(selecorCampo) {
    const sexo = ['Indiferente', 'Feminino', 'Masculino'];
    criarOptionsSelectValorDiferenteTexto(selecorCampo, sexo);
};

function criarComboFormatacaoTelefone(selectorCampo) {
    const formatação = ['DDD + telefone, com formatação', 'DDD + telefone, sem formatação', 'Apenas telefone, com formatação', 'Apenas telefone, sem formatação', 'Apenas DDD, com formatação', 'Apenas DDD, sem formatação'];
    criarOptionsSelectValorDiferenteTexto(selectorCampo, formatação);
};

function criarComboFormatacaoCpfCnpj(selectorCampo) {
    const formatacao = ['Pontos e traço', 'Apenas pontos', 'Apenas traço', 'Sem formatação'];
    criarOptionsSelectValorDiferenteTexto(selectorCampo, formatacao);
};

function criarComboFormatacaoNome(selectorCampo) {
    const formatacao = ['Nome e sobrenome completo', 'Nome e sobrenome abreviado', 'Apenas o primeiro nome'];
    criarOptionsSelectValorDiferenteTexto(selectorCampo, formatacao);
};


/************************** Copiar dados **************************/
function copiarNome() {
    let text = document.getElementById('retorno-nome').value;
    verificarRetornoVazio(text);
    navigator.clipboard.writeText(text);
    window.alert("Nomes copiados")
};

function copiarCpf() {
    let text = document.getElementById('retorno-cpf').value;
    verificarRetornoVazio(text);
    navigator.clipboard.writeText(text);
};

function copiarCnpj() {
    let text = document.getElementById('retorno-cnpj').value;
    verificarRetornoVazio(text);
    navigator.clipboard.writeText(text);
};

function copiarTelefone() {
    let text = document.getElementById('retorno-telefone').value;
    verificarRetornoVazio(text);
    navigator.clipboard.writeText(text);
};

function verificarRetornoVazio(campoRetorno) {
    if (campoRetorno == '') {
        window.alert('Não há nada para ser copiado!');
    };
};


/************************** Funções auxiliares **************************/
function abrirEfechar(elemento) {
    let element = document.getElementById(elemento);
    let propriedade = window.getComputedStyle(element);
    let atributo = propriedade.getPropertyValue('display');
    if (atributo == "none") {
        document.getElementById(elemento).style.display = "flex";
    } else {
        document.getElementById(elemento).style.display = "none";
    }
};

function limitarCaracteres(elemento) {
    const element = document.getElementById(elemento);
    if (element.value.length > element.maxLength) {
        element.value = element.value.slice(0, element.maxLength);
    }
};

function transformarNumeroParaPositivo(elemento) {
    const campoParaObservar = document.getElementById(elemento);
    if (campoParaObservar.value < 0) {
        campoParaObservar.value = (campoParaObservar.value * (-1));
    }
};

function limitarNumeroMinimo(elemento) {
    transformarNumeroParaPositivo(elemento);
    const campoParaObservar = document.getElementById(elemento);
    const min = 1;
    if (campoParaObservar.value <= min) {
        campoParaObservar.value = min;
    }
};

function limitarNumeroMaximo(element, maximo) {
    const max = maximo;
    limitarNumeroMinimo(element);
    const campoParaObservar = document.getElementById(element);
    if (campoParaObservar.value > max) {
        campoParaObservar.value = max;
    }
};

function criarPrimeiraOptionInativa(seletorCampo, primeiroElemento) {
    const select = document.getElementById(seletorCampo);
    select.appendChild(new Option(primeiroElemento, "0")).setAttribute("disabled", "disabled");
};

function criarOptionsSelectValorIgualTexto(seletorCampo, listaElementos) {
    const select = document.getElementById(seletorCampo);
    listaElementos.forEach(function (chave) {
        select.appendChild(new Option(chave, chave));
    });
};

function criarOptionsSelectValorDiferenteTexto(seletorCampo, listaElementos) {
    const select = document.getElementById(seletorCampo);
    listaElementos.forEach(function (chave, elemento) {
        select.appendChild(new Option(chave, elemento + 1));
    });
};

function removerCombobox(selectorCampo) {
    const select = document.querySelector(selectorCampo);
    let options = select.getElementsByTagName('OPTION');
    while (options.length > 0) {
        select.remove(options[0]);
    };
};

function limparCampo(selectorCampo) {
    const campo = document.getElementById(selectorCampo);
    campo.value = '';
};


function inativarCampoOperadoraTelefones() {
    let campoOperadora = document.querySelector('#operadora-telefone').value;
    if(campoOperadora == '5' || campoOperadora.value == '6') {
        let operadora = documetn.querySelector('#operadora-telefone');
        operadora.setAttribute("disabled", "disabled");
    };
};

{
let itensMenu = document.querySelectorAll('.item-menu');
itensMenu.forEach(item =>{
    item.onclick = () => {
        itensMenu.forEach(item => item.classList.remove('menu-clicado'))
        item.classList.add('menu-clicado')
    }
})}



function abrirEfecharMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('menu-open')
}


