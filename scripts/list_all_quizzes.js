const promise = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
promise.then(escreverQuizzes);

//essa função vai receber a lista e passar ela para o HTML
let quizzlist;
function escreverQuizzes(list) {
    quizzlist = list.data;
    const QuizzBoard = document.querySelector(".all-quizzes");
    for (let i = 0; i < quizzlist.length; i++){
        QuizzBoard.innerHTML +=`
        <div class ="quizz" style="background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url('${quizzlist[i].image}');">
            <p>${quizzlist[i].title}</p>
        </div>`
    }
}