function gerarCpf() {
    const uf = document.querySelector('#uf').value;
    const formatacao = document.querySelector('#formatacao').value;
    const quantidade = document.querySelector('#quantidade-cpf').value;
    const imprimir = document.querySelector('#retorno-cpf');

    if (quantidade != '') {
        const cpf = new MultiplosCpf(uf, formatacao, quantidade);
        imprimir.value = cpf.listaCpf;
    } else {
        window.alert('Informe a QUANTIDADE!');
    }
};

class Cpf {
    digitosCpf = [];

    constructor(regiaoFiscal) {
        this.digitosCpf[0] = this.gerarDigitosAleatorios();
        this.digitosCpf[1] = this.gerarDigitosAleatorios();
        this.digitosCpf[2] = this.gerarDigitosAleatorios();
        this.digitosCpf[3] = this.gerarDigitosAleatorios();
        this.digitosCpf[4] = this.gerarDigitosAleatorios();
        this.digitosCpf[5] = this.gerarDigitosAleatorios();
        this.digitosCpf[6] = this.gerarDigitosAleatorios();
        this.digitosCpf[7] = this.gerarDigitosAleatorios();
        this.digitosCpf[8] = this.digitoRegiaoFiscal(regiaoFiscal);
        this.digitosCpf[9] = this.geradorDigitoVerificador(0);
        this.digitosCpf[10] = this.geradorDigitoVerificador(1);
    }

    digitoRegiaoFiscal(regiaoFiscal) {
        switch (regiaoFiscal) {
            case "DF": case "GO": case "MS": case "MT": case "TO":
                return 1;
            case "AC": case "AM": case "AP": case "PA": case "RR": case "RO":
                return 2;
            case "CE": case "MA": case "PI":
                return 3;
            case "AL": case "PB": case "PE": case "RN":
                return 4;
            case "BA": case "SE":
                return 5;
            case "MG":
                return 6;
            case "ES": case "RJ":
                return 7;
            case "SP":
                return 8;
            case "PR": case "SC":
                return 9;
            case "RS":
                return 0;
        };
    };

    geradorDigitoVerificador(posiçãoInicial) {
        let somaDigitos = 0;
        let multiplicadorDigitos = 10;

        for (let i = posiçãoInicial; i < 9 + posiçãoInicial; i++) {
            somaDigitos = somaDigitos + (this.digitosCpf[i] * multiplicadorDigitos);
            multiplicadorDigitos--;
        };

        if (somaDigitos % 11 == 0 || somaDigitos % 11 == 1) {
            return 0;
        }
        return (11 - (somaDigitos % 11));
    };

    gerarDigitosAleatorios() {
        return Math.floor(Math.random() * 10);
    };
};

class GerarCpf {
    cpf_valido;

    constructor(regiaoFiscal, tipoPontuacao) {
        const cpf = new Cpf(regiaoFiscal)
        this.cpf_valido = this.escolherTipoPontuacao(tipoPontuacao, cpf);
    }

    escolherTipoPontuacao(tipoPontuacao, cpf) {

        switch (tipoPontuacao) {
            case '1':
                return this.gerarCpfComPontuacao(cpf);
            case '2':
                return this.gerarCpfApenasPontos(cpf);
            case '3':
                return this.gerarCpfApenasTraço(cpf);
            case '4':
                return this.gerarCpfSemPontuacao(cpf);
        };

    };

    gerarCpfComPontuacao(cpf) {
        return `${cpf.digitosCpf[0]}${cpf.digitosCpf[1]}${cpf.digitosCpf[2]}.${cpf.digitosCpf[3]}${cpf.digitosCpf[4]}${cpf.digitosCpf[5]}.${cpf.digitosCpf[6]}${cpf.digitosCpf[7]}${cpf.digitosCpf[8]}-${cpf.digitosCpf[9]}${cpf.digitosCpf[10]}`
    };

    gerarCpfSemPontuacao(cpf) {
        return `${cpf.digitosCpf[0]}${cpf.digitosCpf[1]}${cpf.digitosCpf[2]}${cpf.digitosCpf[3]}${cpf.digitosCpf[4]}${cpf.digitosCpf[5]}${cpf.digitosCpf[6]}${cpf.digitosCpf[7]}${cpf.digitosCpf[8]}${cpf.digitosCpf[9]}${cpf.digitosCpf[10]}`
    };

    gerarCpfApenasPontos(cpf) {
        return `${cpf.digitosCpf[0]}${cpf.digitosCpf[1]}${cpf.digitosCpf[2]}.${cpf.digitosCpf[3]}${cpf.digitosCpf[4]}${cpf.digitosCpf[5]}.${cpf.digitosCpf[6]}${cpf.digitosCpf[7]}${cpf.digitosCpf[8]}${cpf.digitosCpf[9]}${cpf.digitosCpf[10]}`
    };

    gerarCpfApenasTraço(cpf) {
        return `${cpf.digitosCpf[0]}${cpf.digitosCpf[1]}${cpf.digitosCpf[2]}${cpf.digitosCpf[3]}${cpf.digitosCpf[4]}${cpf.digitosCpf[5]}${cpf.digitosCpf[6]}${cpf.digitosCpf[7]}${cpf.digitosCpf[8]}-${cpf.digitosCpf[9]}${cpf.digitosCpf[10]}`
    };
};

class MultiplosCpf {
    listaCpf = '';

    constructor(regiaoFiscal, tipoPontuacao, quantidades) {
        this.gerarMultiplosCpf(regiaoFiscal, tipoPontuacao, quantidades);
    };

    gerarMultiplosCpf(regiaoFiscal, tipoPontuacao, quantidades) {
        for (let i = 0; i < quantidades; i++) {
            const cpf = new GerarCpf(regiaoFiscal, tipoPontuacao);
            this.listaCpf = this.listaCpf + cpf.cpf_valido + "\n";
        };
    };
};
