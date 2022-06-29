function userQuizzes(userQuizArray) { 
  
  let html; 
 
  
  if (userQuizArray.length === 0) { 
    html = `
      <div class="your_quizzes">
        <p class="warning">Você não criou nenhum quizz ainda :(</p>
        <div class="button" onclick="createQuizz()">Criar Quizz</div>
      </div>
      `;
  } else { 
    html = `
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
      </div>
      `;
    }
    
    return `<div>${html}</div>`;
  }
  
