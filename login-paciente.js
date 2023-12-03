const URL = 'http://localhost:3000/pacientes';
const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoTelefone = document.querySelector('#telefone');
const campoCidade = document.querySelector('#cidade');
const campoNomeDeUsuario = document.querySelector('#nome-de-usuario');
const campoSenha = document.querySelector('#senha');
//const campoConfirmarSenha = document.querySelector('#confirmar-senha');
const btnSalvar = document.querySelector('#btn-salvar');

btnSalvar.onclick = async () => {
  const nome = campoNome.value;
  const email = campoEmail.value;
  const senha = campoSenha.value;
  const cidade = campoCidade.value;
  const telefone = campoTelefone.value;
  const nomedeUsuario = campoNomeDeUsuario.value;

  const usuario = { nome, email, senha, cidade, telefone, nomedeUsuario };

  const chamada = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });

  console.log('chamada:', chamada);
  if (chamada.status == 201) {
    alert('salvo com sucesso');
    mensagem.textContent = 'Usuario salvo com sucesso';
    mensagem.style.background = 'green';
    mensagem.style.padding = '10px';
  } else {
    // tratar erro
  }
};