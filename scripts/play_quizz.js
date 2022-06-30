//essa função vai requisitar o Quizz selecionado

function playQuizz(quizz) {
    console.log(quizz.id)
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizz.id}`);
    promise.then(showQuizz(quizz))
    };
    
//essa função vai renderizar o Quizz selecionado
function showQuizz(quizz) {
    
    const main = document.querySelector("main");
                
    main.innerHTML = `
        <ul>
            <li> 
                <div class="quizz-header">
                <img src="${quizz.querySelector("img").src}">
                <h3>${quizz.querySelector("p").innerHTML}</h3>
                <div class="overlay"></div>
                </div>
                
                <div class="container_questions">
                </div>

            </li>
        </ul>
        `
    
}

// //essa função vai renderizar as respostas
// function renderQuestions() {
//     let questionsQuizz = document.querySelector(".container_questions")
//     questionsQuizz.innerHTML = "";
// for (let j=0;j<quizzlist[i].questions.length;j++) {
//     questionsQuizz.innerHTML += `
//         <div class="question-area">
//             <li class="questions">
//                 <div>
//                     <span>${quizzlist[i].questions[j].title}</span>
//                 </div>
//                 <div class="answers answers${j}">
//                 </div>
//             </li> 
//         </div>
//     `;
// }
// }
// renderQuestions() 