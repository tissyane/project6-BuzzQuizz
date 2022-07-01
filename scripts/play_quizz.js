let selectedquizz;


//essa função vai requisitar o Quizz selecionado

function playQuizz(quizz) {
    console.log(quizz.id)
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizz.id}`);
    promise.then(showQuizz)
    };
    
//essa função vai renderizar o Quizz selecionado
function showQuizz(quizz) {
    selectedquizz = quizz.data;
    console.log(selectedquizz);
   
    const main = document.querySelector("main");
                
    main.innerHTML = `
        <ul>
            <li> 
                <div class="quizz-header">
                <img src="${selectedquizz.image}">
                <h3>${selectedquizz.title}</h3>
                <div class="overlay"></div>
                </div>                
                <div class="show_questions"${selectedquizz.questions}>
                </div>

            </li>
        </ul>
        `
        // main.innerHTML = `
        // <ul>
        //     <li> 
        //         <div class="quizz-header">
        //         <img src="${quizz.querySelector("img").src}">
        //         <h3>${quizz.querySelector("p").innerHTML}</h3>
        //         <div class="overlay"></div>
        //         </div>                
        //         <div class="show_questions">
        //         </div>

        //     </li>
        // </ul>
        // `
       renderQuestions();
       
}


//essa função vai renderizar as perguntas do Quizz selecionado

function renderQuestions(quizz) {
       
    const questionbox = document.querySelector(".show_questions");
    questionbox.innerHTML = "";

    for (let i=0; i<selectedquizz.questions.length; i++) {
        questionbox.innerHTML += `
            <div class="container_questions">
                <div class="questions_header">
                    <h4>${selectedquizz.questions[i].title}</h4>
                </div>    
                <div class="answers">
                </div>                
            </div>
    `;
    }
    
}


//essa função vai renderizar as respostas de cada pergunta do Quizz selecionado - 
// falta puxar as respostas

function renderAnswers(quizz) {
       
    const answerbox = document.querySelector(".answers");
    answerbox.innerHTML = "";

    for (let i=0; i<selectedquizz.questions.length; i++) {
        questionbox.innerHTML += `
            <div class="container_questions">
                <div class="questions_header">
                    <h4>${selectedquizz.questions[i].title}</h4>
                </div>    
                <div class="answers">
                </div>                
            </div>
    `;
    }
    
}










//USADO APENAS PARA MONTAR O CSS DA CAIXA DE PERGUNTAS/RESPOSTAS - APAGAR ASSIM QUE POSSÌVEL
// function renderQuestions(questions) {
//     let questionbox = document.querySelector(".container_questions");
//     questionbox.innerHTML = "";
    

//     questionbox.innerHTML +=
//     `<div class="show_questions">
//         <div class="questions_header">
//           <h4>${question.title}</h4>
//         </div>
//         <div class="container_answers">
//             <div class="answer">
//                 <img src="images/gatinho.png"/>
//                 <p>Gatinho</p>
//             </div>
//             <div class="answer">
//                 <img src="images/gatinho.png"/>
//                 <p>Gatinho</p>
//             </div>
//             <div class="answer">
//                 <img src="images/gatinho.png"/>
//                 <p>Gatinho</p>
//             </div>
//             <div class="answer">
//                 <img src="images/gatinho.png"/>
//                 <p>Gatinho</p>
//             </div>
//         </div>
//     </div>`
//     }




