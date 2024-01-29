
//document.getElementById('spanGeradorNome').addEventListener('click', scriptAbrirGeradorNome);
document.getElementById('spanGeradorCpf').addEventListener('click', gerarModalCpf);
// document.getElementById('spanGeradorCnpj').addEventListener('click', scriptAbrirGeradorCNPJ);
// document.getElementById('spanGeradorTelefone').addEventListener('click', scriptAbrirGeradorTelefone);
// document.getElementById('btn-copiar-nome').addEventListener('click', copiarNome);
// document.getElementById('btn-copiar-cpf').addEventListener('click', copiarCpf);
// document.getElementById('btn-copiar-cnpj').addEventListener('click', copiarCnpj);
// document.getElementById('btn-copiar-telefone').addEventListener('click', copiarTelefone);
// document.getElementById('formatacao-telefones').addEventListener('focus', inativarCampoOperadoraTelefones);
document.getElementById('menu-hambuguer').addEventListener('click', abrirEfecharMenu);




function gerarModalCpf() {
    limparModal()
    gerarTopoModal('Gerador de CPF')
    gerarFieldsetFiltros();
    gerarDivAgrupadorMobile(2);
    gerarDivElementosFiltros('agrupador-1', 'uf-cpf')
    gerarInputsTipoSelect('uf-cpf', 'filtro-uf-cpf', 'UF')
    gerarDivElementosFiltros('agrupador-1', 'quantidade-cpf')
    gerarInputsTipoNumero('quantidade-cpf', 'filtro-quantidade-cpf', 'Quantidade*')
    criarComboUf('filtro-uf-cpf');
    gerarDivElementosFiltros('agrupador-2', 'formatacao-cpf')
    gerarInputsTipoSelect('formatacao-cpf', 'filtro-formacatao-cpj', 'Formatação')
    criarComboFormatacaoCpfCnpj('filtro-formacatao-cpj');
    criarBotaoGerar('agrupador-2')
}

function limparModal() {
    let modal = document.getElementById('modal')
    modal.innerHTML = ''
}

function gerarTopoModal(titulo) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'top-modal')
    let container = document.getElementById('modal');

    newDiv.innerHTML = "<h2 id='title'>" + titulo + "</h2>";
    container.append(newDiv)
}

function gerarFieldsetFiltros() {
    let newFieldsetFiltros = document.createElement("fieldset")
    let container = document.getElementById('modal');
    newFieldsetFiltros.setAttribute('id', 'filtros')
    newFieldsetFiltros.innerHTML = '<legend>Filtros</legend)'
    container.append(newFieldsetFiltros)
}

function gerarDivAgrupadorMobile(quantidadeDivs) {
    let container = document.getElementById('filtros')
    for (let i = 1; i <= quantidadeDivs; i++) {
        let newDiv = document.createElement("div")
        newDiv.setAttribute('class', 'agrupador-mobile')
        newDiv.setAttribute('id', 'agrupador-' + i)
        container.append(newDiv)
    }
}

function gerarDivElementosFiltros(idDivPai, idDiv) {
    let container = document.getElementById(idDivPai)
    let newDiv = document.createElement("div")
    newDiv.setAttribute('class', 'elemento-filtros');
    newDiv.setAttribute('id', idDiv);
    container.append(newDiv)
}

function gerarInputsTipoNumero(idDivPai, idElemento, nomeLabel) {
    let elementoPai = document.getElementById(idDivPai);
    let newLabel = document.createElement('label')
    let newInput = document.createElement('input')
    newInput.type = 'number';
    newLabel.setAttribute('for', idElemento);
    newInput.setAttribute('id', idElemento);
    newLabel.innerHTML = nomeLabel;
    elementoPai.append(newLabel, newInput)
}

function gerarInputsTipoSelect(idDivPai, idElemento, nomeLabel) {
    let elementoPai = document.getElementById(idDivPai);
    let newLabel = document.createElement('label')
    let newSelect = document.createElement('select')
    newLabel.setAttribute('for', idElemento);
    newSelect.setAttribute('id', idElemento);
    newLabel.innerHTML = nomeLabel;
    elementoPai.append(newLabel, newSelect)
}

function criarBotaoGerar(idElementoPai) {
    let elementoPai = document.getElementById(idElementoPai);
    let divBotao = document.createElement('div')
    let botao = document.createElement('input')
    botao.type ='button';
    botao.setAttribute('id', 'bt-gerar-cpf')
    botao.value = 'Gerar'
    botao.setAttribute('onclick', 'gerarCpf(gerarCpf)')
    divBotao.setAttribute('class', 'btn-gerar')
    elementoPai.append(divBotao);
    divBotao.appendChild(botao)
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
