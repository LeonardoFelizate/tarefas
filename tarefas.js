  var tarefas = [];

function verTarefas() {
  if (tarefas.length === 0) {
    document.getElementById('mensagem').innerHTML = 'Sua lista de tarefas está vazia.';
  } else {
    let lista = ''
    for (const tarefa of tarefas) {
      // criar um checkbox de acordo com tarefa.completa true ou false
      let checkbox = '';
      if (tarefa.completa) {
        checkbox = `<input type="checkbox" checked onclick="completarTarefa('${tarefa.nome}')" />`
      } else {
        checkbox = `<input type="checkbox" onclick="completarTarefa('${tarefa.nome}')" />`
      }
      lista += `<li>${checkbox} ${tarefa.nome}</li>`
    }
    document.getElementById('mensagem').innerHTML = `<ul>${lista}</ul>`
  }
}

function adicionarTarefa() {
  const novaTarefa = document.getElementById('txtvalue').value
  const tarefa = {nome: novaTarefa, completa: false}
  if (novaTarefa != '') {
    tarefas.push(tarefa);
    document.getElementById('mensagem').innerHTML = `${novaTarefa} foi adicionada à lista.`;
  } else {
    document.getElementById('mensagem').innerHTML = 'Essa tarefa não é permitida.';
  }
  verTarefas()
  focarInputPrincipal()
}

function removerTarefa() {
  const tarefaRemover = document.getElementById('txtvalue').value;
  
  const indice = acharIndiceTarefa(tarefaRemover)
  if (indice !== -1) {
    tarefas.splice(indice, 1);
    document.getElementById('mensagem').innerHTML = `${tarefaRemover} foi removida da lista.`;
  } else {
    document.getElementById('mensagem').innerHTML = `${tarefaRemover} não foi encontrada na lista.`;
  }
  verTarefas()
  focarInputPrincipal()
}

function atualizarTarefa() {
  const tarefaAntiga = document.getElementById('txtvalue').value;
  const tarefaNova = document.getElementById('txtatualizarNovo').value;

  const indice = acharIndiceTarefa(tarefaAntiga) 
  
  if (indice != -1) {
    const tarefa = tarefas[indice]
    tarefa.nome = tarefaNova;
    document.getElementById('mensagem').innerHTML = `${tarefaAntiga} foi atualizada para ${tarefaNova}`;
  } else {
    document.getElementById('mensagem').innerHTML = `${tarefaAntiga} não foi encontrada na lista.`;
  }
  verTarefas()
  focarInputPrincipal()
}

function completarTarefa(nome) {
  const indice = acharIndiceTarefa(nome) 
  if (indice != -1) {
    const tarefa = tarefas[indice]
    tarefa.completa = !tarefa.completa; // inverte o valor de true para false ou false para true
  } else {
    document.getElementById('mensagem').innerHTML = `${tarefaAntiga} não foi encontrada na lista.`;
  }
  verTarefas()
}

function acharIndiceTarefa(nome) {
  let indice = -1
  for (let i = 0; i < tarefas.length; i++) {
    const tarefa = tarefas[i]
    if (tarefa.nome === nome) {
      indice = i
    }
  }
  return indice
}


function focarInputPrincipal() {
  document.getElementById('txtvalue').value = ''
  document.getElementById('txtvalue').focus()
}  








