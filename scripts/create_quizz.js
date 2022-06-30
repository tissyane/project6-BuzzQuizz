function createQuizz(){
    let main = document.querySelector("main");            
    main.innerHTML =`
    <div class="start-create">
        <h2>Comece pelo começo</h2>
        <div class="informacoes-quizz">
            <div>
                <input placeholder="Título do seu quizz"></input>
                <input placeholder="URL da imagem do seu quizz"></input>
                <input placeholder="Quantidade de perguntas do quizz"></input>
                <input placeholder="Quantidade de níveis do quizz"></input>
            </div>
        </div>
        <button onclick="createQuizz2()">Prosseguir para criar perguntas</button>
    </div>`
}
//continua para a próxima tela de criação do quizz (inserir perguntas)
//armazena os valores dos inputs dados
function createQuizz2(){

}