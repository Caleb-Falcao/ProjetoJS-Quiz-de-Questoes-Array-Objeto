//Array de questões contendo as perguntas, alternativas e as respostas
let questoes = [
    {
        pergunta: ['Quem descobriu o Brasil?'],
        alternativas: ['Indiana Jones', 'Deodoro da Fonseca','Luiz Inacio', 'Pedro Alvares Cabral'],
        resposta: 2
    },
    {
        pergunta: ['Qual é a segunda letra do alfabeto?'],
        alternativas: ['Letra G', 'Letra H', 'Letra B', 'Letra F'],
        resposta: 2
    },
    {
        pergunta: ['Qual é a terceira letra do alfabeto:'],
        alternativas: ['Letra C', 'Letra B', 'Letra J', 'Letra G'],
        resposta: 0
    },
    {
        pergunta: ['Qual é a quarta letra do alfabeto?'],
        alternativas: ['Letra A', 'Letra B', 'Letra E', 'Letra D'],
        resposta: 3
    },
    {
        pergunta: ['Qual é a quinta letra do alfabeto?'],
        alternativas: ['Letra E', 'Letra M', 'Letra W', 'Letra Q'],
        resposta: 0
    }
];
let pont_f = 0; //Variavel pontos
let n_quest = 0; //Variavel número da questão
let correta = 0; //Variavel para resposta correta

//Buscar Elementos da propriedade Perguntas, Alternativas e Resposta
function questao() {
    correta = questoes[n_quest].resposta; //Atribuição da propriedade resposta para variavel correta

    //--Perguntas
    for (const per of questoes[n_quest].pergunta) {
        $('#pergunta').text(per);
    };
    //--Alternativas
    for (let i = 0; i < questoes.length; i++) {
        $('#btn-r' + i).text(questoes[n_quest].alternativas[i]);
    };
};

//Alternativas em um loop for
for (let i = 0; i <= 3; i++) {
    //Ao detectar que um botão foi clicado entrar na condicional
    $('.btn-resposta#btn-r' + i).on('click', function () {
        //Se botão clicado for diferente da variavel correta
        if (correta != i) {
            //Varivel pisca com alternativa errada
            var pisca = $('.btn-resposta#btn-r' + i);
            pisca.addClass('errado');
            //Função para remover a classe errado com 590 milisegundos
            setTimeout(function () {
                pisca.removeClass('errado');
            }, 590);
            // Se botão clicado for igual a correta mostrar botão de classe verde
        } else if (correta == i) {
            //Variavel pisca com alternativa correta
            var pisca = $('.btn-resposta#btn-r' + i);
            pisca.addClass('correto');
            //Função para remover a classe correto com 590 milisegundos
            setTimeout(function () {
                pisca.removeClass('correto');
                // Variavel pont_f, ganha 250 pontos para cada alternativa correta. 
                pont_f += 250;
            }, 590);
        };
    });
};
//-----------------------------------------------------//
$('.container-quiz').hide();
$('.btn-reiniciar').hide();
$('.container-pontuacao').hide();
//Botão Jogar ao ser clicado
$('.btn-jogar').on('click', function () {
    $(this).hide();
    $('img').hide();
    $('.container-quiz').show();
    $('.btn-reiniciar').show();
    questao();
});
//Botão Resposta ao ser clicado
$('.btn-resposta').on('click', function () {
    n_quest++; //Alterar Questão
    //Se n_quest diferente de 5 mostrar a questão se não mostrar a janela de pontuação
    if (n_quest != 5) {
        setTimeout(function () {
            questao(); //Chamar a função questão com tempo de 590 milisegundos
        }, 590);
    } else {
        setTimeout(function () {
            JPontuacao();//Chamar Janela pontuação com tempo de 590 milisegundos
        }, 590);
    };
});
//Função janela pontuação
function JPontuacao() {
    //Se n_quest == 5 mostrar a janela de pontuação
    if (n_quest == 5) {
        $('#pontuacaof').text(pont_f.toString()); //Variavel transformada em string para ser mostrada na tela.
        $('.container').hide();
        $('.container-quiz').hide();
        $('.menu-autores').hide();
        $('.container-pontuacao').show();
    };
};
//Botão Reiniciar ao ser clicado
$('.btn-reiniciar').on('click', function () {
    //reiniciar o quiz
    location.reload();
});
//Botão Voltar  ao ser clicado
$('.btn-voltar').on('click', function () {
    $('.menu-autores').hide();
    $('.container').show();
    //Se n_quest == 5 ao voltar mostrar pontuação ao invés de container
    if (n_quest == 5) {
        $('.container').hide();
        $('.container-pontuacao').show();
    };
});
//Botão Saber Mais
$('.btn-saibamais').on('click', function () {
    $('.container').hide();
    $('.container-pontuacao').hide();
    $('.menu-autores').show();
});
