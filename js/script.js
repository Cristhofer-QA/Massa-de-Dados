document.getElementById('spanGeradorCpf').addEventListener('click', gerarModalCpf);
document.getElementById('menu-hambuguer').addEventListener('click', abrirEfecharMenu);

function gerarModalCpf() {
    limparModal()
    gerarTopoModal('Gerador de CPF')
    gerarFieldsetFiltros();
    gerarDivAgrupadorMobile(2);
    gerarFiltroUF();
    gerarInputQuantidade()
    gerarFiltroFormatacaoCpfCnpj()
    criarBotaoGerar('agrupador-2');
    criarCampoRetornoDados();
    criarBotaoCopiar();
};

function gerarFiltroUF() {
    gerarDivElementosFiltros('agrupador-1', 'uf');
    gerarInputsTipoSelect('uf', 'filtro-uf', 'UF');
    criarComboUf('filtro-uf');
};

function gerarInputsTipoSelect(idDivPai, idElemento, nomeLabel) {
    let elementoPai = document.getElementById(idDivPai);
    let newLabel = document.createElement('label')
    let newSelect = document.createElement('select')
    newLabel.setAttribute('for', idElemento);
    newSelect.setAttribute('id', idElemento);
    newLabel.innerHTML = nomeLabel;
    elementoPai.append(newLabel, newSelect)
};

function limparModal() {
    let modal = document.getElementById('modal')
    modal.innerHTML = ''
};

function gerarTopoModal(titulo) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'top-modal')
    let container = document.getElementById('modal');

    newDiv.innerHTML = "<h2 id='title'>" + titulo + "</h2>";
    container.append(newDiv)
};

function gerarFieldsetFiltros() {
    let newFieldsetFiltros = document.createElement("fieldset")
    let container = document.getElementById('modal');
    newFieldsetFiltros.setAttribute('id', 'filtros')
    newFieldsetFiltros.innerHTML = '<legend>Filtros</legend)'
    container.append(newFieldsetFiltros)
};

function gerarDivAgrupadorMobile(quantidadeDivs) {
    let container = document.getElementById('filtros')
    for (let i = 1; i <= quantidadeDivs; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute('class', 'agrupador-mobile')
        newDiv.setAttribute('id', 'agrupador-' + i)
        container.append(newDiv)
    }
};

function gerarInputsTipoNumero(idDivPai, idElemento, nomeLabel) {
    let elementoPai = document.getElementById(idDivPai);
    let newLabel = document.createElement('label')
    let newInput = document.createElement('input')
    newInput.type = 'number';
    newLabel.setAttribute('for', idElemento);
    newInput.setAttribute('id', idElemento);
    newLabel.innerHTML = nomeLabel;
    elementoPai.append(newLabel, newInput)
};

function gerarInputQuantidade() {
    gerarDivElementosFiltros('agrupador-1', 'quantidade')
    gerarInputsTipoNumero('quantidade', 'filtro-quantidade', 'Quantidade*');
    inserirOnfocusoutCampo('filtro-quantidade')
    inserirPlaceholder('filtro-quantidade', 'Quantidade')
};


function gerarDivElementosFiltros(idDivPai, idDiv) {
    let container = document.getElementById(idDivPai)
    let newDiv = document.createElement("div")
    newDiv.setAttribute('class', 'elemento-filtros');
    newDiv.setAttribute('id', idDiv);
    container.append(newDiv)
};


function criarBotaoGerar(idElementoPai) {
    let elementoPai = document.getElementById(idElementoPai);
    let divBotao = document.createElement('div')
    let botao = document.createElement('input')
    botao.type = 'button';
    botao.setAttribute('id', 'bt-gerar-cpf')
    botao.value = 'Gerar'
    botao.setAttribute('onclick', 'gerarCpf(gerarCpf)')
    divBotao.setAttribute('class', 'btn-gerar')
    elementoPai.append(divBotao);
    divBotao.appendChild(botao)
};

function criarCampoRetornoDados() {
    let elementoPai = document.getElementById('modal')
    let divRetorno = document.createElement('div');
    let background = document.createElement('div');
    let textArea = document.createElement('textarea');
    background.setAttribute('class', 'background');
    background.setAttribute('id', 'background-modal');
    divRetorno.setAttribute('class', 'retorno-container');
    textArea.setAttribute('class', 'retorno');
    textArea.setAttribute('id', 'textArea')
    textArea.setAttribute('disabled', 'disabled')
    elementoPai.append(divRetorno)
    divRetorno.append(background)
    divRetorno.append(textArea)
};

function criarBotaoCopiar() {
    let elementoPai = document.getElementById('modal');
    let botaoCopiar = document.createElement('div');
    botaoCopiar.setAttribute('class', 'btn-copiar');
    botaoCopiar.setAttribute('id', 'btn-copiar');
    botaoCopiar.setAttribute('onclick', 'copiar()');
    botaoCopiar.innerHTML = 'Copiar';
    elementoPai.append(botaoCopiar)
};

function inserirPlaceholder(idElemento, placeholder) {
    let elemento = document.getElementById(idElemento);
    elemento.setAttribute('placeholder', placeholder)
}

function inserirOnfocusoutCampo(idElemento) {
    let elemento = document.getElementById(idElemento)
    elemento.setAttribute('onfocusout', 'limitarNumeroMaximo("' + idElemento + '", 400000)')
};

function copiar() {
    let retorno = document.getElementById('textArea').value;
    navigator.clipboard.writeText(retorno);
}

function gerarFiltroFormatacaoCpfCnpj() {
    gerarDivElementosFiltros('agrupador-2', 'formatacao-cpfCnpj')
    gerarInputsTipoSelect('formatacao-cpfCnpj', 'filtro-formacatao-cpfCnpj', 'Formatação')
    criarComboFormatacaoCpfCnpj('filtro-formacatao-cpfCnpj');
}

function criarComboFormatacaoCpfCnpj(selectorCampo) {
    const formatacao = ['Pontos e traço', 'Apenas pontos', 'Apenas traço', 'Sem formatação'];
    criarOptionsSelectValorDiferenteTexto(selectorCampo, formatacao);
};

function criarComboUf(selectorCampo) {
    const uf = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    criarOptionsSelectValorIgualTexto(selectorCampo, uf);
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





function abrirEfecharMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('menu-open')
}


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

{
    let itensMenu = document.querySelectorAll('.item-menu');
    itensMenu.forEach(
        item => {
            item.onclick = () => {
                itensMenu.forEach(item => item.classList.remove('menu-clicado'))
                item.classList.add('menu-clicado')
            }
        })
};