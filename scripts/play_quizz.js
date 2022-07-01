

function playQuizz(quizz) {
   
    const promise = axios.get(`${API}/${quizz.id}`);
    promise.then(showQuizz)
    };

// Função para renderizar o Quizz selecionado

function showQuizz(resposta){

        main.innerHTML = 
        `<div class="openQuizz">
            <div class="quizz-header">
                <img src="${resposta.data.image}">
                <div class="overlay"><div>
                <h3>${resposta.data.title}</h3>
            </div>
            <div>
                <div class="show_questions"></div>
            </div>
            
        </div>`;  
    
    let questionbox = document.querySelector(".show_questions");
    
        
        for (let i=0; i<resposta.data.questions.length; i++) {
        main.innerHTML += `
            <div class="container_questions">
                <div class="questions_header questions_header${i}" style="background-color:${resposta.data.questions[i].color}">
                    <h4>${resposta.data.questions[i].title}</h4>
                </div>   
                <div> 
                <div class="answers answers${i}"></div>
                </div>                
            </div>
            `;
        
            resposta.data.questions[i].answers.sort(aleatory)
            let answerbox = document.querySelector(".answers"+i)
            for (let j = 0; j < resposta.data.questions[i].answers.length; j++){
            answerbox.innerHTML += 
            `<div class="container_answers ${resposta.data.questions[i].answers[j].isCorrectAnswer}">
                <div>
                    <img src="${resposta.data.questions[i].answers[j].image}">
                    <p>${resposta.data.questions[i].answers[j].text}</p>
                </div
            </div>`
            }   
        }
}  
    
    function aleatory() { 
        return Math.random() - 0.5
    }

