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
        <div class="quizz-info">
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
            <div class="quizz-questions">
                
            </div>
            <button onclick="createQuizz3()">Prosseguir para criar níveis</button>
        </div>`;
        
        const questions = document.querySelector(".quizz-questions");
        for(let i = 1; i <= NumberOfQuestions; i++){
            questions.innerHTML += `
            <div class="question">
                <div class="question-click">
                    <h3>Pergunta ${i}</h3>
                    <img onclick="insertQuestions(this)" src="images/create.svg" />
                </div>
                <div class="question-open hidden">
                    <div class="question-data">
                        <h3>Pergunta ${i}</h3>
                        <input placeholder="Texto da pergunta"></input>
                        <input placeholder="Cor de fundo da pergunta"></input>
                    </div>
                    <div class="question-data">
                        <h3>Resposta correta</h3>
                        <input placeholder="Resposta correta"></input>
                        <input placeholder="URL da imagem"></input>
                    </div>
                    <div class="question-data">
                        <h3>Respostas incorretas</h3>
                        <div>
                            <input placeholder="Resposta incorreta 1"></input>
                            <input placeholder="URL da imagem 1"></input>
                        </div>
                        <div>
                            <input placeholder="Resposta incorreta 2"></input>
                            <input placeholder="URL da imagem 2"></input>
                        </div>
                        <div>
                            <input placeholder="Resposta incorreta 3"></input>
                            <input placeholder="URL da imagem 3"></input>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }
}

function insertQuestions(question){
    //toggle hide nos icones e aparece as divs de input
    question = question.parentNode.parentNode;
    question.querySelector(".question-open").classList.remove("hidden");
    question.querySelector(".question-click").classList.add("hidden");
}