homepage();
function homepage() {
  const promise = axios.get(API);
  promise.then(escreverQuizzes);
}

//essa função vai receber a lista e passar ela para o HTML
let quizzlist;
let userQuizArray = [];


function escreverQuizzes(list) {
    
    quizzlist = list.data;
    const main = document.querySelector("main");
    main.innerHTML = `
        <div class="myQuizzes">

        </div>

        <div>
            <div>
                <h2>Todos os Quizzes</h2>
            </div>
            <div class="all-quizzes">

            </div>
        </div>`;

    //essa função vai determinar se o usuário já criou ou não algum quizz
    let userQuizzesBoard = document.querySelector(".myQuizzes");
    console.log(userQuizzesBoard)
    if (userQuizArray.length === 0){
        userQuizzesBoard.innerHTML = `
        <div class="your_quizzes">
          <p class="warning">Você não criou nenhum quizz ainda :(</p>
          <div class="button" onclick="createQuizz()">Criar Quizz</div>
        </div>`;
    }
    else {
        userQuizzesBoard.innerHTML = `
      <div class="personal_quizzes">
        <div class="title">
          <h2>Seus Quizzes</h2>
          <div class="add_button" onclick="createQuizz()">
            <ion-icon name="add-circle"></ion-icon>
          </div>
        </div>
        <div class="container_quizzes">
    <!-- Listar quizzes do usuário -->
        </div>
      </div>`;
    }

    const QuizzBoard = document.querySelector(".all-quizzes");
    for (let i = 0; i < quizzlist.length; i++){
        QuizzBoard.innerHTML +=`
        <div class="quizz-image" id="${quizzlist[i].id}" onclick="playQuizz(this)">
            <img src="${quizzlist[i].image}" />
            <div class ="quizz">
                <p>${quizzlist[i].title}</p>
            </div>
        </div>`;
        
    }
}





