//variáveis que vão receber os valores do quizz criado
let QuizzTitle;
let QuizzImage;
let NumberOfQuestions;
let NumberOfLevels;
let QuizzQuestions;
let QuizzLevels;

let main = document.querySelector("main");
function createQuizz(){            
    main.innerHTML =`
    <div class="create">
        <h2>Comece pelo começo</h2>
        <div class="informacoes-quizz">
            <div>
                <input class="create-title" placeholder="Título do seu quizz"></input>
                <input class="create-image" placeholder="URL da imagem do seu quizz"></input>
                <input class="create-questions" placeholder="Quantidade de perguntas do quizz"></input>
                <input class="create-levels" placeholder="Quantidade de níveis do quizz"></input>
            </div>
        </div>
        <button onclick="createQuizz2()">Prosseguir para criar perguntas</button>
    </div>`
}
//continua para a próxima tela de criação do quizz (inserir perguntas)
//armazena os valores dos inputs dados
function createQuizz2(){
    QuizzTitle = document.querySelector(".create-title").value;
    QuizzImage = document.querySelector(".create-image").value;
    NumberOfQuestions = document.querySelector(".create-questions").value;
    NumberOfLevels = document.querySelector(".create-levels").value;

    if ((QuizzTitle.length < 20 || QuizzTitle.length > 65) ||
    (QuizzImage.startsWith("https://") === false) ||
    (isNaN(NumberOfQuestions) || NumberOfQuestions < 3) ||
    (isNaN(NumberOfLevels) || NumberOfLevels < 2)){
        alert("Insira dados válidos, por favor");
    }
    else {
        main.innerHTML =`
        <div class="create">
            <h2>Crie suas perguntas</h2>
            <div class="perguntas-quizz">
                
            </div>
            <button onclick="createQuizz3()">Prosseguir para criar níveis</button>
        </div>`;
        
        const perguntas = document.querySelector(".perguntas-quizz");
        for(let i = 1; i <= NumberOfQuestions; i++){
            perguntas.innerHTML += `
            <div class="pergunta">
                <div>
                    <h3>Pergunta ${i}</h3>
                    <img onclick="insertQuestions()" src="images/create.svg" />
                </div>    
            </div>`;
        }
    }
}

function insertQuestions(){
    //toggle hide nos icones e aparece as divs de input
}