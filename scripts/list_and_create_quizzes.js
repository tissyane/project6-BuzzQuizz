let API = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes";
homepage();
function homepage() {
  const promise = axios.get(API);
  promise.then(escreverQuizzes);
}

//essa função vai receber a lista e passar ela para o HTML
let quizzlist;
let userQuizArray = [];
let userQuizIds = Object.keys(localStorage)

function escreverQuizzes(list) {
    window.scrollTo(0, 0);
    quizzlist = list.data;
    const main = document.querySelector("main");
    main.innerHTML = `
        <div class="myQuizzes">

        </div>

        <div class="other-quizzes">
            <div>
                <h2>Todos os Quizzes</h2>
            </div>
            <div class="all-quizzes">

            </div>
        </div>`;

    //essa função vai determinar se o usuário já criou ou não algum quizz
    let userQuizzesBoard = document.querySelector(".myQuizzes");
    console.log(localStorage);
    if (localStorage.length === 0){
        userQuizzesBoard.innerHTML = `
        <div class="your_quizzes">
          <p class="warning">Você não criou nenhum quizz ainda :(</p>
          <div class="button" onclick="createQuizz()">Criar Quizz</div>
        </div>`;
    }
    else {
        userQuizzesBoard.innerHTML = `
      <div class="personal_quizzes">
        <div class="title">
            <h2>Seus Quizzes</h2>
            <ion-icon name="add-circle" class="add_button" onclick="createQuizz()"></ion-icon>
        </div>
        <div class="container_quizzes">
    
        </div>
      </div>`;

      for (let i = 0; i < localStorage.length; i++){
        userQuizArray[i] = JSON.parse(localStorage.getItem(userQuizIds[i]));
      }

      for (let i = 0; i < userQuizArray.length; i++){
        userQuizzesBoard.querySelector(".container_quizzes").innerHTML +=`
        <div class="quizz-image" id="${userQuizArray[i].id}" onclick="playUserQuizz(this)">
            <img src="${userQuizArray[i].image}" />
            <div class ="quizz">
                <p>${userQuizArray[i].title}</p>
            </div>
        </div>`
      }
    }

    const QuizzBoard = document.querySelector(".all-quizzes");
    loop1:
      for (let i = 0; i < quizzlist.length; i++){
        loop2:
          for(let j = 0; j < userQuizArray.length; j++){
            if (quizzlist[i].id === userQuizArray[j].id){
              continue loop1
            }
          }
          QuizzBoard.innerHTML +=`
          <div class="quizz-image" id="${quizzlist[i].id}" onclick="playQuizz(this)">
              <img src="${quizzlist[i].image}" />
              <div class ="quizz">
                  <p>${quizzlist[i].title}</p>
              </div>
          </div>`;
          
      }
}





//variáveis que vão receber os valores do quizz criado
let QuizzTitle;
let QuizzImage;
let NumberOfQuestions;
let NumberOfLevels;
let QuizzQuestions;
let QuizzLevels;

let main = document.querySelector("main");
function createQuizz() {
    main.innerHTML = `
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
function createQuizz2() {
    QuizzTitle = document.querySelector(".create-title").value;
    QuizzImage = document.querySelector(".create-image").value;
    NumberOfQuestions = document.querySelector(".create-questions").value;
    NumberOfLevels = document.querySelector(".create-levels").value;

    //validações das restrições
    if ((QuizzTitle.length < 20 || QuizzTitle.length > 65) ||
        (QuizzImage.startsWith("https://") === false) ||
        (isNaN(NumberOfQuestions) || NumberOfQuestions < 3) ||
        (isNaN(NumberOfLevels) || NumberOfLevels < 2)) {
        alert("Insira dados válidos, por favor");
    }
    else {
        main.innerHTML = `
        <div class="create">
            <h2>Crie suas perguntas</h2>
            <div class="quizz-questions">
                
            </div>
            <button onclick="createQuizz3()">Prosseguir para criar níveis</button>
        </div>`;

        const questions = document.querySelector(".quizz-questions");
        for (let i = 1; i <= NumberOfQuestions; i++) {
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

function insertQuestions(question) {
    //toggle hide nos icones e aparece as divs de input
    question = question.parentNode.parentNode;
    question.querySelector(".question-open").classList.remove("hidden");
    question.querySelector(".question-click").classList.add("hidden");
}

let QuestionsData = [];
function createQuizz3() {
    //variáveis pegando dados dos inputs para armazenarem no array de perguntas
    let text = document.querySelectorAll('[placeholder="Texto da pergunta"]');
    let color = document.querySelectorAll('[placeholder="Cor de fundo da pergunta"]');
    let rightAnswer = document.querySelectorAll('[placeholder="Resposta correta"]');
    let rightAnswerImg = document.querySelectorAll('[placeholder="URL da imagem"]');
    let wrongAnswer1 = document.querySelectorAll('[placeholder="Resposta incorreta 1"]');
    let wrongAnswerImg1 = document.querySelectorAll('[placeholder="URL da imagem 1"]');
    let wrongAnswer2 = document.querySelectorAll('[placeholder="Resposta incorreta 2"]');
    let wrongAnswerImg2 = document.querySelectorAll('[placeholder="URL da imagem 2"]');
    let wrongAnswer3 = document.querySelectorAll('[placeholder="Resposta incorreta 3"]');
    let wrongAnswerImg3 = document.querySelectorAll('[placeholder="URL da imagem 3"]');

    for (let i = 0; i < NumberOfQuestions; i++) {
        //validações das restrições
        if ((text[i].value.length < 20) ||
            (isHex(color[i].value) === false) ||
            (rightAnswer[i].value === "" || wrongAnswer1[i].value === "") ||
            (rightAnswerImg[i].value.startsWith("https://") === false ||
                wrongAnswerImg1[i].value.startsWith("https://") === false)) {
            alert(`Insira dados válidos na pergunta ${i+1}\nÉ obrigatório preencher a resposta correta e a resposta incorreta 1`);
            return
        }
        else {
            //Formação do array de perguntas
            QuestionsData[i] = {
                title: text[i].value, color: color[i].value, answers: [
                    { text: rightAnswer[i].value, image: rightAnswerImg[i].value, isCorrectAnswer: true },
                    { text: wrongAnswer1[i].value, image: wrongAnswerImg1[i].value, isCorrectAnswer: false }]
            };
            if (wrongAnswer2[i].value !== "" || wrongAnswerImg2[i].value !== "") {
                if (wrongAnswerImg2[i].value.startsWith("https://") === false || wrongAnswer2[i].value === "") {
                    alert(`Insira dados válidos na Resposta incorreta 2 da pergunta ${i+1}`);
                    return
                }
                else {
                    QuestionsData[i].answers.push({ text: wrongAnswer2[i].value, image: wrongAnswerImg2[i].value, isCorrectAnswer: false });
                }
            }
            if (wrongAnswer3[i].value !== "" || wrongAnswerImg3[i].value !== "") {
                if (wrongAnswerImg3[i].value.startsWith("https://") === false || wrongAnswer3[i].value === "") {
                    alert(`Insira dados válidos na Resposta incorreta 3 da pergunta ${i+1}`);
                    return
                }
                else {
                    if (wrongAnswer2[i].value === "" || wrongAnswerImg2[i].value === ""){
                        alert(`Insira dados válidos na Resposta incorreta 2 da pergunta ${i+1} antes de preencher os dados da resposta incorreta 3`);
                        return
                    }
                    QuestionsData[i].answers.push({ text: wrongAnswer3[i].value, image: wrongAnswerImg3[i].value, isCorrectAnswer: false });
                }
            }
        }
    }
    createQuizz4();
}

function isHex(color) {
    const reghex = /^#[0-9A-Fa-f]{6}$/i;
    return reghex.test(color);
}

function createQuizz4() {
    main.innerHTML = `
    <div class="create">
        <h2>Agora, decida os níveis</h2>
        <div class="quizz-levels">
            
        </div>
        <button onclick="createQuizz5()">Finalizar Quizz</button>
    </div>`;

    const levels = document.querySelector(".quizz-levels");

    for (let i = 1; i <= NumberOfLevels; i++){
        levels.innerHTML += `
        <div class="level">
            <div class="level-click">
                <h3>Nível ${i}</h3>
                <img onclick="insertLevels(this)" src="images/create.svg" />
            </div>
            <div class="level-data hidden">
                <h3>Nível ${i}</h3>
                <input placeholder="Título do nível"></input>
                <input placeholder="% de acerto mínima"></input>
                <input placeholder="URL da imagem do nível"></input>
                <input placeholder="Descrição do nível"></input>
            </div>
        </div>`;
    }
}

function insertLevels(level) {
    //toggle hide nos icones e aparece as divs de input
    level = level.parentNode.parentNode;
    level.querySelector(".level-data").classList.remove("hidden");
    level.querySelector(".level-click").classList.add("hidden");
}

//função para armazenar os dados dos níveis
let LevelsData = [];
function createQuizz5() {
    //variáveis usadas para armazenar os dados a serem inseridos no array de nível
    let text = document.querySelectorAll('[placeholder="Título do nível"]');
    let percentage = document.querySelectorAll('[placeholder="% de acerto mínima"]');
    let image = document.querySelectorAll('[placeholder="URL da imagem do nível"]');
    let description = document.querySelectorAll('[placeholder="Descrição do nível"]');

    let contains0 = false; //para verificar se uma das porcentagens é 0

    for (let i = 0; i < NumberOfLevels; i++){
        if ((text[i].value.length < 10) ||
        (isNaN(percentage[i].value) || percentage[i].value < 0 || percentage[i].value > 100) ||
        (image[i].value.startsWith("https://") === false) ||
        (description[i].value.length < 30)){
            alert(`Insira dados válidos para o nível ${i+1}`);
            return
        }
        else {
            LevelsData[i] = {title: text[i].value, image: image[i].value, 
                text: description[i].value, minValue: Number(percentage[i].value)}
            if (LevelsData[i].minValue === 0){
                contains0 = true;
            }
        }
    }
    if (contains0 === false){
        alert("Insira uma porcentagem igual a 0");
        return
    }
    const promise = axios.post(API, {title: QuizzTitle, image: QuizzImage, questions: QuestionsData, levels: LevelsData});
    promise.then(createQuizz6);
}

function createQuizz6(CreatedQuizz) {
    // userQuizArray.push = CreatedQuizz.data;
    main.innerHTML =` 
    <div class="create">
        <h2>Seu quizz está pronto!</h2>
        <div class="quizz-image">
            <img src="${CreatedQuizz.data.image}" />
            <div class ="quizz">
                <p>${CreatedQuizz.data.title}</p>
            </div>
        </div>
        <button class="enter-quizz" id="${CreatedQuizz.data.id}" onclick="playQuizz(this)">Acessar Quizz</button>
        <button class="back-button" onclick="homepage()">Voltar pra home</button>
    </div>;`
    localStorage.setItem(CreatedQuizz.data.id, JSON.stringify(CreatedQuizz.data));
}