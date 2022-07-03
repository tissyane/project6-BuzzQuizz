let quizzDetails;
let nextquestion;
let rightAnswers;
let scoreFinal;
let quizz; 
let isUserQuizz = false;
let levels;

function playQuizz(quizz) {
    isUserQuizz = false;
    const promise = axios.get(`${API}/${quizz.id}`);
    promise.then(showQuizz);
}

// Função para renderizar o Quizz selecionado

function showQuizz(resposta){
    window.scrollTo(0, 0);
    quizzDetails = resposta.data;
    quizzSize = quizzDetails.questions.length;  
    levels = quizzDetails.levels 
    rightAnswers = 0;
    

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

function playUserQuizz(quizz){
    window.scrollTo(0, 0);
    isUserQuizz = true;
    quizzDetails = JSON.parse(localStorage.getItem(quizz.id));
    quizzSize = quizzDetails.questions.length;  
    levels = quizzDetails.levels
    rightAnswers = 0;
       
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
                <div> 
                <div class="result"></div>
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

// Função para controlar o comportamento das respostas 

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
                
               
			} else {
				child.classList.add("wrong");
                
			}  
		}       
        if (element.classList.contains("correct")){
            rightAnswers++;
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

// Função para calcular a pontuação 

function calculateScore() {    
    return Math.round((rightAnswers/quizzSize)* 100);
}


// função para calcular o nível 

function calculateLevel(score) {
    levels.sort((a, b) => a.minValue - b.minValue);
    
    let level = levels[0];
    for (let i = 1; i < levels.length; i++) {
      if (score < levels[i].minValue) {
        return level;
      }
  
      level = levels[i];
    }
  
    return level;
  }

// função para mostrar o resultado do quizz

function renderScore() {
    let score = calculateScore();
    let level = calculateLevel();

    main.innerHTML +=  `
        <div class="container_result">
            <div class="result_header">
                <h3>${score}% de acerto: level.title}</h3>
            </div>
            <div class="levelDetails">
                <img src="level.img}" />
                 <p>
                 level.text}
                </p>
             </div>
        </div>
        </div>
            <div class="restart-quizz" onclick="restartQuizz()">Reiniciar Quizz</div>
            <div class="return-home"   onclick="homepage()">Voltar para home</div>
	    </div>`;  
    
    const showQuizResult = document.querySelector(".container_result");
    showQuizResult.scrollIntoView({
        behavior :'smooth'
    });
    
}


function restartQuizz(){
  
    document.querySelector(".openQuizz").scrollIntoView();
    if(isUserQuizz === false){
        playQuizz(quizzDetails);
    }
    else {
        playUserQuizz(quizzDetails);
    }
  }

  