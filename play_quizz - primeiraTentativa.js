// let selectedquizz;


// // Função para requisitar o Quizz selecionado

// function playQuizz(quizz) {
   
//     const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizz.id}`);
//     promise.then(showQuizz)
//     };
    
// // Função para renderizar o Quizz selecionado
// function showQuizz(quizz) {
//     selectedquizz = quizz.data;

//     const main = document.querySelector("main");        
//     main.innerHTML = `
//         <ul>
//             <li> 
//                 <div class="quizz-header">
//                 <img src="${selectedquizz.image}">
//                 <h3>${selectedquizz.title}</h3>
//                 <div class="overlay"></div>
//                 </div>                
//                 <div class="show_questions"${selectedquizz.questions}>
//                 </div>

//             </li>
//         </ul>
//         `
//     renderQuestions();
       
// }

// //Função para renderizar as perguntas do Quizz selecionado

// function renderQuestions(quizz) {
       
//     const questionbox = document.querySelector(".show_questions");
//     questionbox.innerHTML = "";

//     for (let i=0; i<selectedquizz.questions.length; i++) {
//         questionbox.innerHTML += `
//             <div class="container_questions">
//                 <div class="questions_header">
//                     <h4>${selectedquizz.questions[i].title}</h4>
//                 </div>    
//                     <div class="answers-container"></div>
//                 </div>                
//             </div>
//     `;
//     }
//    renderAnswers(quizz);
// }

// function renderAnswers(answer) {

//     let questions = selectedquizz.questions;
//     let answersbox = document.querySelector(".answers-container")
//     answersbox.innerHTML = ""; 

//     questions.answers.forEach(answer => {
    
//         answersbox.innerHTML += `
//             <div class= "container_answers">
//                 <img src="${answer.image}" alt="Resposta">\
//                 ${answer.text}\
//             </div>`;
//     });
// }







