//essa função vai requisitar o Quizz selecionado
function playQuizz() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    promise.then(showQuizz())
    };
  
  
//essa função vai renderizar o Quizz selecionado
function showQuizz() {
    
    const main = document.querySelector("main");
    main.innerHTML= "";
    
    for (let i=0; i<quizzlist.length; i++){
        
        main.innerHTML+= `
        <ul>
            <li id="${quizzlist[i].id}" class="quizz">
                <div class="quizz-header">
                <img src="${quizzlist[i].image}">
                <h3>${quizzlist[i].title}</h3>
                <div class="overlay"></div>
                </div>
                
                <div class="container_questions">
                </div>

            </li>
        </ul>
        `
    }
}

//essa função vai renderizar as respostas
function renderQuestions() {
    let questionsQuizz = document.querySelector(".container_questions")
    questionsQuizz.innerHTML = "";
for (let j=0;j<quizzlist[i].questions.length;j++) {
    questionsQuizz.innerHTML += `
        <div class="question-area">
            <li class="questions">
                <div>
                    <span>${quizzlist[i].questions[j].title}</span>
                </div>
                <div class="answers answers${j}">
                </div>
            </li> 
        </div>
    `;
}
}
renderQuestions() 