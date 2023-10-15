let pilha = []  // Inicializa uma pilha vazia para armazenar as cartas.
let opcao = ""  // Inicializa a variável que irá armazenar a opção escolhida pelo usuário.

do {
    let carta = ""  // Inicializa uma string vazia para armazenar as informações das cartas na pilha.

    // Constrói a representação das cartas atualmente na pilha.
    for (let i = 0; i < pilha.length; i++) {
        carta += (i + 1) + "° - " + pilha[i] + "\n"
    }

    // Solicita uma opção ao usuário e a converte para um número.
    opcao = Number(prompt("Carta Atual:\n" + carta + "\n" +
        "\nEscolha uma opção\n1. Adicionar nova carta\n2. Puxar última carta\n3. Sair"))

    // Realiza a ação correspondente com base na opção escolhida pelo usuário.
    switch (opcao) {
        case 1:
            // Opção 1: Adiciona uma nova carta à pilha.
            const newCard = prompt("Insira qual a carta deseja adicionar")
            pilha.push(newCard)
            break
        case 2:
            // Opção 2: Remove a última carta da pilha, se houver.
            const removeCard = pilha.pop()
            if (!removeCard) {
                alert("Sem cartas na pilha, selecione a opção 1 para adicionar")
            } else {
                alert("Carta " + removeCard + " removida da pilha!")
            }
            break
        case 3:
            // Opção 3: Encerra o programa.
            alert("Encerrando...")
            break
        default:
            // Ação padrão para opções inválidas.
            alert("[ERRO] Comando inválido!")
    }

} while (opcao != 3)  // Continua o loop até que o usuário escolha sair (opção 3).
