let QuizzTitle;
let QuizzImage;
let NumberOfQuestions;
let NumberOfLevels;
let main = document.querySelector("main");
function createQuizz(){            
    main.innerHTML =`
    <div class="start-create">
        <h2>Comece pelo começo</h2>
        <div class="informacoes-quizz">
            <div>
                <input class="create-title" placeholder="Título do seu quizz"></input>
                <input class="create-image" placeholder="URL da imagem do seu quizz"></input>
                <input class="create-questions" placeholder="Quantidade de perguntas do quizz"></input>
                <input class="create-levels" placeholder="Quantidade de níveis do quizz"></input>
            </div>
        </div>
        <button onclick="createQuizz2()">Prosseguir para criar perguntas</button>
    </div>`
}
//continua para a próxima tela de criação do quizz (inserir perguntas)
//armazena os valores dos inputs dados
function createQuizz2(){
    QuizzTitle = document.querySelector(".create-title").value;
    QuizzImage = document.querySelector(".create-image").value;
    NumberOfQuestions = document.querySelector(".create-questions").value;
    NumberOfLevels = document.querySelector(".create-levels").value;
    if ((QuizzTitle.length < 20 || QuizzTitle.length > 65) ||
    (QuizzImage.startsWith("https://") === false) ||
    (isNaN(NumberOfQuestions) || NumberOfQuestions < 3) ||
    (isNaN(NumberOfLevels) || NumberOfLevels < 2)){
        alert("Insira dados válidos, por favor")
    }
    else {
        main.innerHTML =""
    }
}