function gerarTelefone() {
    const uf = document.querySelector('#filtro-uf').value;
    const operadora = document.querySelector('#filtro-operadora').value;
    const formatacao = document.querySelector('#filtro-formatacao-telefone').value;
    const quantidade = document.querySelector('#filtro-quantidade').value;
    const imprimir = document.querySelector('#textArea');

    if (formatacao != 0 && operadora != 0 && quantidade != '' && uf != 0) {
        const telefone = new MultiplosTelefones(formatacao, uf, operadora, quantidade);
        imprimir.value = telefone.listaTelefones;
    } else {
        window.alert('Informe a QUANTIDADE!');
    };
};



class Telefone {
    telefoneGerado;

    constructor(operadora) {
        this.telefoneGerado = this.gerarTelefone(operadora)
    };

    gerarTelefone(operadora) {
        return `9${this.gerarDigitoOperadora(operadora)}${this.gerarNumeroAleatorio()}${this.gerarNumeroAleatorio()}${this.gerarNumeroAleatorio()}${this.gerarNumeroAleatorio()}${this.gerarNumeroAleatorio()}${this.gerarNumeroAleatorio()}`
    }

    gerarDigitoOperadora(operadora) {
        return this.buscarDadoArray(this.Operadora[operadora]);
    };

    buscarDadoArray(nomeArray) {
        return nomeArray[this.buscarPosicaoArray(this.contarTamanhoArray(nomeArray))];
    };

    buscarPosicaoArray(maximo) {
        let min = 0;
        let max = (maximo - 1);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    contarTamanhoArray(nomeArray) {
        return nomeArray.length;
    };

    gerarNumeroAleatorio() {
        return (Math.floor(Math.random() * 10));
    }

    Operadora = {
        'Tim': [69, 79, 80, 81, 82, 83],
        'Claro': [68, 73, 74, 75, 76, 91, 92, 93, 94],
        'Vivo': [67, 71, 72, 95, 96, 97, 98, 99],
        'Oi': [84, 85, 86, 87, 88, 89]
    };

};

class DDD {
    ddd;

    constructor(uf) {
        this.ddd = this.gerarDDD(uf);
    }

    gerarDDD(uf) {
        return this.buscarDadoArray(this.DDD[uf]);
    };

    buscarDadoArray(nomeArray) {
        return nomeArray[this.buscarPosicaoArray(this.contarTamanhoArray(nomeArray))];
    };

    buscarPosicaoArray(maximo) {
        let min = 0;
        let max = (maximo - 1);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    contarTamanhoArray(nomeArray) {
        return nomeArray.length;
    };


    DDD = {
        'AC': [68],
        'AL': [82],
        'AP': [96],
        'AM': [92, 97],
        'BA': [71, 73, 74, 75, 77],
        'CE': [85, 88],
        'DF': [61],
        'ES': [27, 28],
        'GO': [62, 64],
        'MA': [98, 99],
        'MT': [65, 66],
        'MS': [67],
        'MG': [31, 32, 33, 34, 35, 37, 38],
        'PA': [91, 93, 94],
        'PB': [83],
        'PR': [41, 42, 43, 44, 45, 46],
        'PE': [81, 87],
        'PI': [86, 89],
        'RJ': [21, 22, 24],
        'RN': [84],
        'RS': [51, 53, 54, 55],
        'RO': [69],
        'RR': [95],
        'SC': [47, 48, 49],
        'SP': [11, 12, 13, 14, 15, 16, 17, 18, 19],
        'SE': [79],
        'TO': [63]
    };
};

class TelefoneFormatado {
    telefoneFormatado;

    constructor(formatação, uf, operadora) {
        this.telefoneFormatado = this.retornarTelefonesFormatados(formatação, uf, operadora);
    };

    retornarTelefonesFormatados(formatação, uf, operadora) {
        switch (formatação) {

            //DDD + telefone, com formatação
            case '1':
                return `${this.formatarDDD(uf)} ${this.formatarTelefone(operadora)}`;

            //DDD + telefone, sem formatação
            case '2':
                return `${this.instanciarClassDDD(uf)} ${this.instanciarClassTelefone(operadora)}`;

                //Apenas telefone, com formatação
            case '3':
                return `${this.formatarTelefone(operadora)}`;

                
            //Apenas telefone, sem formatação
            case '4':
                return `${this.instanciarClassTelefone(operadora)}`;

            //Apenas DDD, com formatação
            case '5':
                return `(${this.instanciarClassDDD(uf)})`;

                 //Apenas DDD, sem formatação
            case '6':
                return `${this.instanciarClassDDD(uf)}`;

            
        };
    };

    formatarTelefone(operadora) {
        const telefone = this.instanciarClassTelefone(operadora);
        return `${telefone.slice(0, 5)}-${telefone.slice(5, 10)}`
    };

    formatarDDD(uf) {
        const ddd = this.instanciarClassDDD(uf);
        return `(${ddd})`
    };

    instanciarClassDDD(uf) {
        const ddd = new DDD(uf)
        return ddd.ddd;
    };

    instanciarClassTelefone(operadora) {
        const telefone = new Telefone(operadora)
        return telefone.telefoneGerado;
    };
}

class MultiplosTelefones {
    listaTelefones = '';

    constructor(formatação, uf, operadora, quantidade) {
        this.gerarMultiplosTelefones(formatação, uf, operadora, quantidade);
    };

    gerarMultiplosTelefones(formatação, uf, operadora, quantidade) {
        for (let i = 0; i < quantidade; i++) {
            const telefone = new TelefoneFormatado(formatação, uf, operadora);

            if (i < quantidade - 1) {
                this.listaTelefones = this.listaTelefones + telefone.telefoneFormatado + "\n";
            } else {
                this.listaTelefones = this.listaTelefones + telefone.telefoneFormatado;
            }

            
        };
    };
};
