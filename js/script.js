document.getElementById('geradorCpf').addEventListener('click', gerarModalCpf);
document.getElementById('geradorNome').addEventListener('click', gerarModalNome);
document.getElementById('geradorCnpj').addEventListener('click', gerarModalCnpj);
document.getElementById('geradorTelefone').addEventListener('click', gerarModalTelefone);
document.getElementById('menu-hambuguer').addEventListener('click', abrirEfecharMenu);
document.getElementById('sobre-site').addEventListener('click',preencherModalSobreNos)


/******************* Modais *******************/
function gerarModalCpf() {
    limparModal()
    gerarTopoModal('Gerador de CPF')
    gerarFieldsetFiltros();
    gerarDivAgrupadorMobile(2);
    gerarFiltroUF();
    gerarFiltroQuantidade()
    gerarFiltroFormatacaoCpfCnpj()
    criarBotaoGerar('agrupador-2', 'gerarCpf()');
    criarCampoRetornoDados();
    criarBotaoCopiar();
};

function gerarModalNome() {
    limparModal();
    gerarTopoModal('Gerador de nomes');
    gerarFieldsetFiltros();
    gerarDivAgrupadorMobile(2);
    gerarFiltroSexo();
    gerarFiltroQuantidade();
    gerarFiltroFormatacaoNome();
    criarBotaoGerar('agrupador-2', 'gerarNome()');
    criarCampoRetornoDados();
    criarBotaoCopiar();
};

function gerarModalCnpj() {
    limparModal();
    gerarTopoModal('Gerador de CNPJ');
    gerarFieldsetFiltros();
    gerarDivAgrupadorMobile(2);
    gerarFiltroNumeroFilial();
    gerarFiltroQuantidade();
    gerarFiltroFormatacaoCpfCnpj();
    criarBotaoGerar('agrupador-2', 'gerarCnpj()');
    criarCampoRetornoDados();
    criarBotaoCopiar();
};

function gerarModalTelefone() {
    limparModal();
    gerarTopoModal('Gerador de telefones');
    gerarFieldsetFiltros();
    gerarDivAgrupadorMobile(2);
    gerarFiltroUF();
    gerarFiltroOperadora()
    gerarFiltroQuantidade();
    gerarFiltroFormatacaoTelefone()
    criarBotaoGerar('agrupador-2', 'gerarTelefone()');
    criarCampoRetornoDados();
    criarBotaoCopiar();
};




/*********************************************************/



/******************* Filtros completos *******************/
function gerarFiltroUF() {
    gerarDivElementosFiltros('agrupador-1', 'uf');
    gerarInputsTipoSelect('uf', 'filtro-uf', 'UF');
    criarComboUf('filtro-uf');
};

function gerarFiltroSexo() {
    gerarDivElementosFiltros('agrupador-1', 'sexo');
    gerarInputsTipoSelect('sexo', 'filtro-sexo', 'Sexo');
    criarComboSexo();
};

function gerarFiltroFormatacaoNome() {
    gerarDivElementosFiltros('agrupador-2', 'formatacao-nome');
    gerarInputsTipoSelect('formatacao-nome', 'filtro-formatacao-nome', 'Formatação');
    criarComboFormatacaoNome();
};

function gerarFiltroQuantidade() {
    gerarDivElementosFiltros('agrupador-1', 'quantidade')
    gerarInputsTipoNumero('quantidade', 'filtro-quantidade', 'Quantidade*');
    inserirOnfocusoutCampo('filtro-quantidade','limitarNumeroMaximo("filtro-quantidade", 400000)')
    inserirPlaceholder('filtro-quantidade', 'Quantidade')
};

function gerarFiltroFormatacaoCpfCnpj() {
    gerarDivElementosFiltros('agrupador-2', 'formatacao-cpfCnpj')
    gerarInputsTipoSelect('formatacao-cpfCnpj', 'filtro-formacatao-cpfCnpj', 'Formatação')
    criarComboFormatacaoCpfCnpj('filtro-formacatao-cpfCnpj');
};

function gerarFiltroFormatacaoTelefone() {
    gerarDivElementosFiltros('agrupador-2', 'formatacao-telefone')
    gerarInputsTipoSelect('formatacao-telefone', 'filtro-formatacao-telefone', 'Formatação')
    criarComboFormatacaTelefone('filtro-formatacao-telefone');
};

function gerarFiltroNumeroFilial() {
    gerarDivElementosFiltros('agrupador-1', 'filial');
    gerarInputsTipoNumero('filial', 'filtro-filial', 'Numero da filial');
    inserirValorInicialInput('filtro-filial', 1)
    inserirOnfocusoutCampo('filtro-filial', 'limitarNumeroMaximo("filtro-filial", 9999)')
};

function  gerarFiltroOperadora() {
    gerarDivElementosFiltros('agrupador-1', 'operadora');
    gerarInputsTipoSelect('operadora', 'filtro-operadora', 'Operadora');
    criarComboOperadora('filtro-operadora')
}


/**********************************************/


/******************* Inputs *******************/
function gerarInputsTipoSelect(idDivPai, idElemento, nomeLabel) {
    let elementoPai = document.getElementById(idDivPai);
    let newLabel = document.createElement('label')
    let newSelect = document.createElement('select')
    newLabel.setAttribute('for', idElemento);
    newSelect.setAttribute('id', idElemento);
    newLabel.innerHTML = nomeLabel;
    elementoPai.append(newLabel, newSelect)
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

function inserirPlaceholder(idElemento, placeholder) {
    let elemento = document.getElementById(idElemento);
    elemento.setAttribute('placeholder', placeholder)
};

function inserirValorInicialInput(idInput, valor) {
    let input = document.getElementById(idInput);
    input.setAttribute('value', valor)
}

function inserirOnfocusoutCampo(idElemento, função) {
    let elemento = document.getElementById(idElemento)
    elemento.setAttribute('onfocusout', função)
};
/**********************************************/



/******************* Combos *******************/
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

function criarComboFormatacaoNome() {
    const formatacao = ['Nome e sobrenome completo', 'Nome e sobrenome abreviado', 'Apenas o primeiro nome'];
    criarOptionsSelectValorDiferenteTexto('filtro-formatacao-nome', formatacao);
};

function criarComboFormatacaoCpfCnpj(selectorCampo) {
    const formatacao = ['Pontos e traço', 'Apenas pontos', 'Apenas traço', 'Sem formatação'];
    criarOptionsSelectValorDiferenteTexto(selectorCampo, formatacao);
};

function criarComboUf(selectorCampo) {
    let uf = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let ufFormatada = uf.sort(
        function (a, b) {
            return a.localeCompare(b);
        });
    criarOptionsSelectValorIgualTexto(selectorCampo, ufFormatada);
};

function criarComboSexo() {
    const sexo = ['Indiferente', 'Feminino', 'Masculino'];
    criarOptionsSelectValorDiferenteTexto('filtro-sexo', sexo);
};

function criarComboOperadora(selectorCampo) {
    const operadora = ['Claro', 'Oi', 'Tim', 'Vivo'];
    let operadoraFormatada = operadora.sort(
        function (a, b) {
            return a.localeCompare(b);
        });
    criarOptionsSelectValorIgualTexto(selectorCampo, operadoraFormatada);
};

function criarComboFormatacaTelefone(selectorCampo) {
    let formatacao = ['DDD + telefone, com formatação','DDD + telefone, sem formatação','Apenas telefone, com formatação','Apenas telefone, sem formatação','Apenas DDD, com formatação','Apenas DDD, sem formatação']
    criarOptionsSelectValorDiferenteTexto(selectorCampo, formatacao);
}


/*******************************************************/



/******************* Elementos modal *******************/
function limparModal() {
    let modalSobreNos = document.querySelector('#sobre-nos');
    modalSobreNos.classList.add('close')
    let modal = document.getElementById('modal')
    modal.classList.remove('close')
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

function gerarDivElementosFiltros(idDivPai, idDiv) {
    let container = document.getElementById(idDivPai)
    let newDiv = document.createElement("div")
    newDiv.setAttribute('class', 'elemento-filtros');
    newDiv.setAttribute('id', idDiv);
    container.append(newDiv)
};

function gerarDivAgrupadorMobile(quantidadeDivs) {
    let container = document.getElementById('filtros');
    for (let i = 1; i <= quantidadeDivs; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'agrupador-mobile');
        newDiv.setAttribute('id', 'agrupador-' + i);
        container.append(newDiv);
    };
};

function criarCampoRetornoDados() {
    let elementoPai = document.getElementById('modal')
    let divRetorno  = document.createElement('div');
    let background  = document.createElement('div');
    let textArea    = document.createElement('textarea');
    background.setAttribute('class', 'background');
    background.setAttribute('id', 'background-modal');
    divRetorno.setAttribute('class', 'retorno-container');
    textArea.setAttribute('class', 'retorno');
    textArea.setAttribute('id', 'textArea');
    textArea.setAttribute('disabled', 'disabled');
    elementoPai.append(divRetorno);
    divRetorno.append(background);
    divRetorno.append(textArea);
};
/**********************************************/



/******************* Botões *******************/
function criarBotaoGerar(idElementoPai, funçãoGerar) {
    let elementoPai = document.getElementById(idElementoPai);
    let divBotao = document.createElement('div')
    let botao = document.createElement('input')
    botao.type = 'button';
    botao.setAttribute('id', 'botao-gerar');
    botao.setAttribute('class', 'botao');
    botao.value = 'Gerar'
    botao.setAttribute('onclick', funçãoGerar)
    divBotao.setAttribute('class', 'btn-gerar')
    elementoPai.append(divBotao);
    divBotao.appendChild(botao)
};

function criarBotaoCopiar() {
    let elementoPai = document.getElementById('modal');
    let botaoCopiar = document.createElement('div');
    botaoCopiar.setAttribute('class', 'btn-copiar botao');
    botaoCopiar.setAttribute('id', 'btn-copiar');
    botaoCopiar.setAttribute('onclick', 'copiar()');
    botaoCopiar.innerHTML = 'Copiar';
    elementoPai.append(botaoCopiar)
};

/**************************************************/



/******************* Auxiliares *******************/
function copiar() {
    let retorno = document.getElementById('textArea').value;
    if (retorno == '') {
        return window.alert('Nada a ser copiado!!');
    };
    navigator.clipboard.writeText(retorno);
    window.alert('Conteúdo copiado!!');
};

function abrirEfecharMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('menu-open');
};

function preencherModalSobreNos() {
    fecharModalGerador();
    let modalSobreNos = document.querySelector('#sobre-nos');
    modalSobreNos.innerHTML = '';
    let divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'divContainer');

    let titulo = document.createElement('h1');
    titulo.innerText= 'Sobre o site';
    let corpo = document.createElement('p');
    corpo.innerText = `Bem-vindo ao nosso site, sua plataforma de geração de massa de dados para testes de software. Desenvolvido por um profissional de QA, entendemos as necessidades específicas e os desafios enfrentados por aqueles que trabalham na garantia da qualidade.

    Nosso principal objetivo é fornecer a você, profissional de QA, uma ferramenta que simplifique e otimize o processo de teste.
    
    É importante ressaltar que nosso site é projetado exclusivamente para uso como suporte em testes de qualidade. Não se destina a ser usado em ambientes de produção ou para qualquer finalidade além de testes e validação de sistemas.
            
    Obrigado por escolher nosso site como seu parceiro de confiança em testes de qualidade.`
    modalSobreNos.appendChild(divContainer);
    divContainer.appendChild(titulo);
    divContainer.appendChild(corpo);
};

function fecharModalGerador() {
    let modalGerador = document.querySelector('#modal');
    modalGerador.classList.add('close');
    let modalSobreNos = document.querySelector('#sobre-nos');
    modalSobreNos.classList.remove ('close');
}

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
/********************************************************/



/******************* Limitador inputs *******************/
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