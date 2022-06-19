class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        return this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo)
            return "Saldo Insuficiente.";
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = 'conta corrente';
        this._saldo = saldo;
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupaca extends ContaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'conta poupanca';
    }
    
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = 'conta universitaria';
        this._saldo = saldo;
    }
    
    sacar(valor){
        if(valor >= 500){
            return "Ultrapassa limite de saque.";
        }

        return this._saldo -= valor;
    }
}

class ContaInvestimento extends ContaBancaria {
    constructor(agencia, numero, saldo, taxa){
        super(agencia, numero, saldo);
        this.tipo = 'conta investimento';
        this._saldo = saldo;
        this._taxa = taxa;
    }
    
    investir(valor){
        valor *= this._taxa;
        return this.saldo += valor;
    }
}