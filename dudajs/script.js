class Massa {

    #nome;
    #preco;

    constructor(nome, preco) {
        this.#nome = nome;
        this.setPreco(preco);
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getPreco() {
        return this.#preco;
    }

    setPreco(preco) {

        if (preco < 0) {
            throw new Error(
                "O preço não pode ser negativo."
            );
        }

        this.#preco = preco;
    }

    preparar() {
        throw new Error(
            "O método preparar() deve ser implementado."
        );
    }
}


class Espaguete extends Massa {

    preparar() {
        console.log(
            "Cozinhando o espaguete..."
        );
    }
}


class Lasanha extends Massa {

    preparar() {
        console.log(
            "Montando as camadas da lasanha..."
        );
    }
}


class Ravioli extends Massa {

    preparar() {
        console.log(
            "Cozinhando o ravioli recheado..."
        );
    }
}


class Pedido {

    #massas = [];

    adicionarMassa(massa) {
        this.#massas.push(massa);
    }

    calcularTotal() {

        let total = 0;

        for (const massa of this.#massas) {
            total += massa.getPreco();
        }

        return total;
    }

    prepararPedido() {

        for (const massa of this.#massas) {

            console.log(
                `Preparando: ${massa.getNome()}`
            );

            massa.preparar();
        }
    }
}


// Criando o pedido

const pedido = new Pedido();


// Adicionando as massas

pedido.adicionarMassa(
    new Espaguete(
        "Espaguete à Bolonhesa",
        25
    )
);

pedido.adicionarMassa(
    new Lasanha(
        "Lasanha de Queijo",
        32
    )
);

pedido.adicionarMassa(
    new Ravioli(
        "Ravioli de Frango",
        30
    )
);


// Preparando o pedido

pedido.prepararPedido();


// Mostrando o total

console.log(
    `Total: R$ ${pedido.calcularTotal().toFixed(2)}`
);