//Instanciando todas as variaveis necessessarias para execucao do codigo
//creating all the variables for the project
let userScore = 0;
let computerScore = 0;
let lvls = 0;
let aux = 0;
const hide_div = document.getElementById("choices");
const userScore_Span = document.getElementById("user-score");
const compScore_Span = document.getElementById("comp-score");
const scoreHolder_div = document.querySelector(".score-holder")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const bestT_span = document.getElementById("bestT");
const bestF_span = document.getElementById("bestF");
const options_div = document.getElementById("options-best-of");
const winner_h1 = document.getElementById("winner");
const loser_h1 = document.getElementById("loser");
const luck_p = document.getElementById("luck");
const restart_p = document.getElementById("restart");




function winner(){
  winner_h1.classList.remove('hide');
  winner_h1.classList.add('end');
  luck_p.classList.remove('end');
  luck_p.classList.add('hide');
}

function loser(){
  loser_h1.classList.remove('hide');
  loser_h1.classList.add('end');
  luck_p.classList.remove('end');
  luck_p.classList.add('hide');
}

function removeOptions(){
  hide_div.classList.remove('choice');
  hide_div.classList.add('hide');
}

//Compara a quantidade de vezes que o usuario e o computador ganharam utilizando "if" para tomar uma acao, essa é a melhor de cinco
//Compare the times that the user and the computer won using an "if" to take an action, this is the best three out five
function bestOfFive(){
  if(userScore == 3){
    console.log("Vc ganhou")
    removeOptions();
    winner();
  }else if(computerScore == 3){
    console.log("voce perdeu")
    removeOptions();
    loser();
  }
}

//Compara a quantidade de vezes que o usuario e o computador ganharam utilizando "if" para tomar uma acao, essa é a melhor de tres
//Compare the times that the user and the computer won using an "if" to take an action, this is the best two out three
function bestOfThree(){
  if(userScore == 2){
    console.log("Vc ganhou")
    removeOptions();
    winner();
  }else if(computerScore == 2){
    console.log("voce perdeu")
    removeOptions();
    loser();
  }
}

function win(){
  userScore++;
  userScore_Span.innerHTML = userScore;
}

function lose(){
  computerScore++;
  compScore_Span.innerHTML = computerScore;
}

/*A partir da biblioteca math, cria um numero de 0 ate 3 de forma arredondada utilizando o floor e atribui uma opcao, podendo ser "r" para pedra, "p" para papel
e "s" para tesoura*/
/*Using the Math's library to creat a number between 0 to 3 using the floor round, and seting "r" to rock, "p" to papers
and "s" to scissors*/
function getComputerScore() {
  const choices = ['r','p','s'];
  const random = Math.floor(Math.random() * 3);
  return choices[random]
}

/*Compara utilizando uma variavel auxiliar para criar um laço finito de vezes que o usuario pode escolher entre pedra, papel ou tesoura
compara o valor da variavel lvls para tomar uma acao*/
/*Uses a var to determinate how many time the user can choose the options rock, paper or scissors,
compares the value of lvls to take an action*/
function game(userChoice, lvls){
  if(aux<lvls){
    const computer = getComputerScore();
    switch (userChoice + computer) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice);
        break;
      default:
        lose();
    }
    aux++;
    if(lvls == 3){
      bestOfThree();
    }else{
      bestOfFive();
    }
  }
}

//Criando eventos de listener para as opcoes que o user ira escolher, e tambem trocando a classe de "hide" para "choices"
//Creating listener events for options that the user will choice, and changing the class "hide" to "choices"
function user(){
  rock_div.addEventListener('click', function() {game("r", lvls)});
  paper_div.addEventListener('click', function() {game("p", lvls)});
  scissor_div.addEventListener('click', function() {game("s", lvls)});
  hide_div.classList.remove('hide');
  hide_div.classList.add('choices');
}

//Atribui a escolha do usuario em uma variavel para uso futuro, e muda a classe "options" para "hide"
//Set the user's choice in a var to be used in future, and change the class to "options" to "hide"
function options(userChoice){
  options_div.classList.remove('options');
  options_div.classList.add('hide');
  if(userChoice === "3"){
    lvls = 3;
    console.log("3");
    user();
  }else{
    lvls = 5;
    console.log("5");
    user();
  }
}

//Aqui o usuario escolhe se gostaria de jogar uma melhor de 3 ou de 5, passando um resultado para a funcao "options"
//Here the user can choose in best two out of three or best three out of five, passing the result to funtion "options"
function choice(){
  bestT_span.addEventListener('click', function(){options("3")});
  bestF_span.addEventListener('click', function(){options("5")});
}

//Criando e chamando a funcao main
//Creating and calling the funtion main
function main() {
  choice();
}

main();
