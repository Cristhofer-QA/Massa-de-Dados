function gerarCnpj() {
    const numeroFilial = document.querySelector('#filtro-filial').value;
    const formatação = document.querySelector('#filtro-formacatao-cpfCnpj').value;
    const quantidade = document.querySelector('#filtro-quantidade').value;
    const imprimir = document.querySelector('#textArea');

    if (quantidade != '') {
        const cnpj = new GerarMultiplosCnpj(numeroFilial, formatação, quantidade);
        imprimir.value = cnpj.listaCnpj;
    } else {
        window.alert('Informe a QUANTIDADE!');
    }
};

class Cnpj {
    cnpjCompleto;

    constructor(numeroFilial) {
        this.cnpjCompleto = this.gerarCnpjCompleto(numeroFilial);
    };

    gerarCnpjCompleto(numeroFilial) {
        let cnpjSemDigitoVerificador = this.concatenarAlgarismosENumeroFilial(numeroFilial);
        let cnpjComPrimeiroDigitoVerificador = this.gerarPrimeiroDigitoVerificador(cnpjSemDigitoVerificador)
        let cnpjCompleto = this.gerarSegundoDigitoVerificador(cnpjComPrimeiroDigitoVerificador);
        return cnpjCompleto;
    }

    gerarPrimeiroDigitoVerificador(cnpjSemDigitoVerificador) {
        const multiplicadorPrimeiroDigito = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma = 0;

        for (let i = 0; i < multiplicadorPrimeiroDigito.length; i++) {
            soma = soma + (multiplicadorPrimeiroDigito[i] * cnpjSemDigitoVerificador[i]);
        };

        if (soma % 11 < 2) {
            return `${cnpjSemDigitoVerificador}0`;
        };

        return `${cnpjSemDigitoVerificador}${(11 - (soma % 11))}`;
    };

    gerarSegundoDigitoVerificador(cnpjComPrimeiroDigitoVerificador) {
        const multiplicadorPrimeiroDigito = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma = 0;

        for (let i = 0; i < multiplicadorPrimeiroDigito.length; i++) {
            soma = soma + (multiplicadorPrimeiroDigito[i] * cnpjComPrimeiroDigitoVerificador[i]);
        };

        if (soma % 11 < 2) {
            return `${cnpjComPrimeiroDigitoVerificador}0`;
        };

        return `${cnpjComPrimeiroDigitoVerificador}${(11 - (soma % 11))}`;
    };

    concatenarAlgarismosENumeroFilial(numeroFilial) {
        let primeirosDigitos = this.gerarPrimeirosDigitosCnpj();
        let algarismoMatriz = this.converterQuantidadeMatriz(numeroFilial);
        return (`${primeirosDigitos}${algarismoMatriz}`);
    };

    gerarPrimeirosDigitosCnpj() {
        let sequenciaNumerica = '';
        for (let i = 0; i < 8; i++) {
            sequenciaNumerica = `${sequenciaNumerica}${this.gerarDigitosAleatorios()}`;
        };
        return sequenciaNumerica;
    };

    converterQuantidadeMatriz(quantidade) {
        const algarismoFormatado = quantidade.padStart(4, '0');
        return (algarismoFormatado);
    };

    gerarDigitosAleatorios() {
        return Math.floor(Math.random() * 10);
    };
};

class FormatadorCnpj {
    cnpjFormatado;

    constructor(formatação, numeroFilial) {
        const cnpj = new Cnpj(numeroFilial);
        this.cnpjFormatado = this.formatadorCnpj(formatação, cnpj.cnpjCompleto);
    };

    formatadorCnpj(formatação, cnpj) {
        switch (formatação) {
            case '1':
                return `${cnpj[0]}${cnpj[1]}.${cnpj[2]}${cnpj[3]}${cnpj[4]}.${cnpj[5]}${cnpj[6]}${cnpj[7]}/${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}-${cnpj[12]}${cnpj[13]}`;
            case '2':
                return `${cnpj[0]}${cnpj[1]}.${cnpj[2]}${cnpj[3]}${cnpj[4]}.${cnpj[5]}${cnpj[6]}${cnpj[7]}${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}${cnpj[12]}${cnpj[13]}`;
            case '3':
                return `${cnpj[0]}${cnpj[1]}${cnpj[2]}${cnpj[3]}${cnpj[4]}${cnpj[5]}${cnpj[6]}${cnpj[7]}/${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}-${cnpj[12]}${cnpj[13]}`;
            case '4':
                return `${cnpj[0]}${cnpj[1]}${cnpj[2]}${cnpj[3]}${cnpj[4]}${cnpj[5]}${cnpj[6]}${cnpj[7]}${cnpj[8]}${cnpj[9]}${cnpj[10]}${cnpj[11]}${cnpj[12]}${cnpj[13]}`;
        };
    };
};


class GerarMultiplosCnpj {
    listaCnpj = '';

    constructor(numeroFilial, formatação, quantidade) {
        this.gerarMultiplosCnpj(numeroFilial, formatação, quantidade);
    };

    gerarMultiplosCnpj(numeroFilial, formatação, quantidade) {
        for (let i = 0; i < quantidade; i++) {
            const cnpj = new FormatadorCnpj(formatação, numeroFilial)

            if (i < quantidade - 1) {
                this.listaCnpj = this.listaCnpj + cnpj.cnpjFormatado + "\n";
            } else {
                this.listaCnpj = this.listaCnpj + cnpj.cnpjFormatado;
            };
        };
    };
};
