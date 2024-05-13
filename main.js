// Função para adicionar um novo comentário à lista de comentários
function addComment(commentText, imageURL) {
    // Cria um novo elemento de comentário
    var commentItem = document.createElement('div');
    commentItem.classList.add('comment-item');
    
    // Cria um elemento para o texto do comentário
    var commentContent = document.createElement('p');
    commentContent.classList.add('comment-text');
    commentContent.textContent = commentText;
    
    // Adiciona o texto do comentário ao elemento de comentário
    commentItem.appendChild(commentContent);
    
    // Verifica se há uma imagem anexada
    if (imageURL) {
        // Cria um elemento de imagem
        var image = document.createElement('img');
        image.src = imageURL;
        image.classList.add('comment-image');
        // Adiciona a imagem ao elemento de comentário
        commentItem.appendChild(image);
    }
    
    // Adiciona o novo comentário à lista de comentários
    var commentList = document.getElementById('comment-list');
    commentList.appendChild(commentItem);
}

// Evento de envio do formulário de comentário
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtém o texto do comentário do campo de texto
    var commentText = document.getElementById('comment-text').value;
    
    // Verifica se uma imagem foi selecionada
    var imageFile = document.getElementById('image-upload').files[0];
    var imageURL = null;
    if (imageFile) {
        // Cria um URL para a imagem selecionada
        imageURL = URL.createObjectURL(imageFile);
    }
    
    // Chama a função para adicionar o novo comentário à lista de comentários
    addComment(commentText, imageURL);
    
    // Limpa o campo de texto do formulário
    document.getElementById('comment-text').value = '';
    // Limpa o campo de upload de imagem
    document.getElementById('image-upload').value = '';
});
