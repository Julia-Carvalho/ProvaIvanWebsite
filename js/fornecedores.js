const formulario = document.querySelector('#formularioFornecedores');
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#fone');
const inputEmail = document.querySelector('#email');
const inputProduto = document.querySelector('#produto');
const fornecedores = document.querySelector('#fornecedores');
const mensagens = document.querySelector('#mensagens');

var lista_fornecedores=[];


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (inputNome.value === '' || inputTelefone.value === '' || inputEmail.value === '' || inputProduto.value === '') {
        mensagens.style.display = 'block';
        mensagens.style.background = 'red';
        mensagens.innerHTML = 'Preencha todos os campos!';
    } else {
        const li = document.createElement('li');
        li.innerHTML = `Nome: ${inputNome.value} <br>Telefone : ${inputTelefone.value}   <br>Email  : ${inputEmail.value} <br>Produto: ${inputProduto.value}`;
        li.addEventListener('click', (e) => {
            const deletar = confirm('Você realmente gostaria de deletar este fornecedor?');

            if (deletar) {
                e.target.remove();
            }
        })
        var email_ok = true;
        for (var i = 0; i < lista_fornecedores.length; i++) {
            var obj_lista = lista_fornecedores[i];
            if (obj_lista.Email === inputEmail.value){
                mensagens.style.display = 'block';
                mensagens.style.background = 'red';
                mensagens.innerHTML = 'Email já Cadastrado!'; 
                email_ok = false;
            }
        }

        if (email_ok === true){

            var obj_fornecedor = {Nome:inputNome.value,Telefone:inputTelefone.value,Email:inputEmail.value,produto:inputProduto.value};

            lista_fornecedores.push(obj_fornecedor);


            fornecedores.appendChild(li);
            mensagens.style.display = 'none';

            inputNome.value = '';
            inputTelefone.value = '';
            inputEmail.value = '';
            inputProduto.value = '';
        }
    }
})