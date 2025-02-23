// Array de objetos representando os meses e suas camapnhas de conscientização.
const meses = [
    { nome: "Janeiro Branco", cor: "White", descricao: "Saúde mental e bem-estar." },
    { nome: "Fevereiro Roxo", cor: "purple", descricao: "Lúpus, Alzheimer e fibromialgia." },
    { nome: "Março Azul", cor: "blue", descricao: "Conscientização sobre o Transtorno do Espectro Autista( TEA)." },
    { nome: "Abril Verde", cor: "green", descricao: "Conscientização sobre a importância da segurança no trabalho." },
    { nome: "Maio Amarelo", cor: "yellow", descricao: "Prevenção de acidentes de trânsito." },
    { nome: "Maio Vermelho", cor: "red", descricao: "Prevenção da hepatite." },
    { nome: "Junho Laranja", cor: "orange", descricao: "Conscientização sobre a anemia e leucemia." },
    { nome: "Junho Vermelho", cor: "red", descricao: "Incentivo á doação de sangue." },
    { nome: "Julho Amarelo", cor: "yellow", descricao: "Conscientização sobre o câncer ósseo e hepatites virais." },
    { nome: "Agosto Laranja", cor: "orange", descricao: "Esclerose Múltipla." },
    { nome: "Setembro Verde", cor: "green", descricao: "Conscientização sobre a doação de orgãos e prevenção do câncer no intestino." },
    { nome: "Setembro Amarelo", cor: "yellow", descricao: "Prevenção ao suicídio." },
    { nome: "Outubro Rosa", cor: "pink", descricao: "Conscientização sobre o câncer de mama." },
    { nome: "Novembro Azul", cor: "blue", descricao: "Prevenção e combate ao câncer de próstata." },
    { nome: "Dezembro Vermelho", cor: "red", descricao: "Prevenção contra a AIDS." },
    { nome: "Dezembro Laranja", cor: "orange", descricao: "Conscientização sobre o câncer de pele." }
];

// Seleciona a div onde os meses serão inseridos no HTML
const container = document.getElementById("meses-container");

// Percoree o array 'meses' e cria elementos na página oara cada um.
meses.forEach(mes => {
    //Cria um elemento <article> dinamicamente.
    const article = document.createElement("article");
    //Define a cor de fundo do artigp com base na cor do mês.
    article.style.backgroundColor = mes.cor;
    // Insere o título (h2) e a descrição (p) dentro do artigo.
    article.innerHTML = `<h2>${mes.nome}</h2><p>${mes.descricao}</p>`;
    // Adiciona o artigo dentro do container na página.
    container.appendChild(article);
});