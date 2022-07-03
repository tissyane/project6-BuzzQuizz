function playUserQuizz(quizz){
    window.scrollTo(0, 0);
    quizzDetails = JSON.parse(localStorage.getItem(quizz.id));
       
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