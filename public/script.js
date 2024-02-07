const botaoEnviar = document.getElementById('enviar');
const caixaMensagens = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagens.value !== "") {
        socket.emit('nova mensagem',caixaMensagens.value);
        caixaMensagens.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg)=>{
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
} )