const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(escreverQuizzes);

//essa função vai receber a lista e passar ela para o HTML
let quizzlist;
function escreverQuizzes(list) {
    quizzlist = list.data;
    const QuizzBoard = document.querySelector(".all-quizzes");
    for (let i = 0; i < quizzlist.length; i++){
        QuizzBoard.innerHTML +=`
        <div class="quizz-image">
            <img src="${quizzlist[i].image}" />
            <div class ="quizz">
                <p>${quizzlist[i].title}</p>
            </div>
        </div>`
    }
}