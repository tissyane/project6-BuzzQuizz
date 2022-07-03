let quizzDetails;
let nextquestion;
let qtQuizRightAnswers = 0;

function playQuizz(quizz) {
   
    const promise = axios.get(`${API}/${quizz.id}`);
    promise.then(showQuizz);
}

// Função para renderizar o Quizz selecionado

function showQuizz(resposta){
    window.scrollTo(0, 0);
    quizzDetails = resposta.data;
       
        main.innerHTML = ` 
            <div class="openQuizz">
                <div class="quizz-header">
                    <img src="${quizzDetails.image}">
                    <div class="overlay"><div>
                    <h3>${quizzDetails.title}</h3>
                </div>
            </div>`;  
            
        for (let i=0; i<quizzDetails.questions.length; i++) {
        main.innerHTML += `
            <div class="container_questions">
                <div class="questions_header questions_header${i}" style="background-color:${quizzDetails.questions[i].color}">
                    <h4>${quizzDetails.questions[i].title}</h4>
                </div>   
                <div> 
                <div class="answers answers${i}"></div>
                </div>                
            </div>`;
        
            quizzDetails.questions[i].answers.sort(aleatory)
            let answerbox = document.querySelector(".answers"+i);
            for (let j = 0; j < quizzDetails.questions[i].answers.length; j++){
            answerbox.innerHTML += `
                <div class="container_answers ${quizzDetails.questions[i].answers[j].isCorrectAnswer}"  onclick="selectAnswer(this)">
                    <div>
                        <img src="${quizzDetails.questions[i].answers[j].image}">
                        <p>${quizzDetails.questions[i].answers[j].text}</p>
                    </div
                </div>`;
            }   
        }
}  
    
function aleatory() { 
    return Math.random() - 0.5;
} 

function selectAnswer(element) {
    
    
    nextquestion = element.parentElement.parentElement.parentElement;

    if (!element.classList.contains("open") && !element.classList.contains("other")) {
		
        const answers = element.parentNode;
		
		element.classList.add("open");
        
		for (let child of answers.children) {
			if (!child.classList.contains("open")) {
				child.classList.add("other");
			}

			if (child.classList.contains(true)) {
				child.classList.add("correct");
                ++qtQuizRightAnswers;
			} else {
				child.classList.add("wrong");

                if (child.classList.contains("correct")) {
                    
                }
			}

           
           
		}

   
        
        
	}
    
    
    setTimeout (() => scrollToNextQuestion(nextquestion), 2000);
}

function scrollToNextQuestion(answeredQuestion) {
    if (answeredQuestion.nextElementSibling !== null) {
        answeredQuestion.nextElementSibling.scrollIntoView({
            top:70,
            behavior :'smooth'
        })
    } else {
        renderScore();
    }
}

function renderScore() {
    console.log(qtQuizRightAnswers);
}

