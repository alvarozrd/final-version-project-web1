// o objeto dados é um conjunto de camadas, objeto raiz. Cada nível dentro do objeto é uma propriedade, ou seja, o bloco do horário está dentro do dia, que está dentro do semesrtre, que está dentro do curso, que está dentro do objeto dados. 


let dados = {
  analise: {
    1: {
      segunda: {
        primeiro: 'CJOADMA<br>Edvando<br>Sala 10',
        segundo: 'CJOINGT<br>Karin<br>Sala 10'
      },
      terca: {
        primeiro: 'CJOALGA<br>Augusto<br>Sala 10',
        segundo: 'CJOMATE<br>Josivan<br>Sala 10'
      },
      quarta: {
        primeiro: 'CJOCOEA<br>Karin<br>Sala 10',
        segundo: 'CJOALGA<br>Augusto<br>Sala 10'
      },
      quinta: {
        primeiro: 'CJOALGA<br>Augusto<br>Sala 10',
        segundo: 'CJOARQC<br>Josivan<br>Sala 10'
      },
      sexta: {
        primeiro: 'CJOARQC<br>Josivan<br>Sala 10',
        segundo: 'CJOMATE<br>Josivan<br>Sala 10'
      }
    },

    2: {
      segunda: {
        primeiro: 'CJOBDD1<br>Paulo<br>Sala 06',
        segundo: 'CJOESTA<br>Josivan<br>Sala 06'
      },
      terca: {
        primeiro: 'CJOENGA<br>Avelino<br>Sala 06',
        segundo: 'CJOLIPA<br>Augusto<br>Sala 11'
      },
      quarta: {
        primeiro: 'CJOWEB1<br>Alisson<br>Sala 03',
        segundo: 'CJOENGA<br>Avelino<br>Sala 06'
      },
      quinta: {
        primeiro: 'CJOWEB1<br>Alisson<br>Sala 01',
        segundo: 'CJOBDD1<br>Paulo<br>Sala 12'
      },
      sexta: {
        primeiro: 'CJOEXT1<br>Avelino<br>Sala 06',
        segundo: 'CJOLIPA<br>Augusto<br>Sala 11'
      }
    },

    3: {
      segunda: {
        primeiro: 'CJOSOPA<br>Josivan<br>Sala 11',
        segundo: 'CJOBDD2<br>Paulo<br>Sala 11'
      },
      terca: {
        primeiro: 'CJOWEB2<br>Fernando<br>Sala 11',
        segundo: 'CJOSIGA<br>Edvando<br>Sala 06'
      },
      quarta: {
        primeiro: 'CJOWEB2<br>Fernando<br>Sala 11',
        segundo: 'CJOSOPA<br>Josivan<br>Sala 11'
      },
      quinta: {
        primeiro: 'CJOBDD2<br>Paulo<br>Sala 11',
        segundo: 'CJOESTD<br>Geterson<br>Sala 11'
      },
      sexta: {
        primeiro: 'CJOESTD<br>Geterson<br>Sala 11',
        segundo: 'CJOMETP<br>João Correia<br>Sala 06'
      }
    },

    4: {
      segunda: {
        primeiro: 'CJOEXT2<br>Geterson<br>Sala 01',
        segundo: 'CJOEXT2<br>Geterson<br>Sala 01'
      },
      terca: {
        primeiro: 'CJOPROO<br>Paulo<br>Sala 01',
        segundo: 'CJORED1<br>Avelino<br>Sala 12'
      },
      quarta: {
        primeiro: 'CJORED1<br>Avelino<br>Sala 12',
        segundo: 'CJOPROO<br>Paulo<br>Sala 01'
      },
      quinta: {
        primeiro: 'CJOAPSI<br>Avelino<br>Sala 06',
        segundo: 'CJOAPSI<br>Avelino<br>Sala 06'
      },
      sexta: {
        primeiro: 'CJOWEB3<br>Fernando<br>Sala 03',
        segundo: 'CJOGETI<br>Geterson<br>Sala 03'
      }
    },

    5: {
      segunda: {
        primeiro: 'CJOEXT3<br>João Evangelista<br>Sala 12',
        segundo: 'CJOEXT3<br>João Evangelista<br>Sala 12'
      },
      terca: {
        primeiro: 'CJOPRO1<br>Helton<br>Sala 03',
        segundo: 'CJOPRO1<br>Helton<br>Sala 03'
      },
      quarta: {
        primeiro: 'CJOGEPO<br>João Correia<br>Sala 06',
        segundo: 'CJOEXT3<br>João Evangelista<br>Sala 12'
      },
      quinta: {
        primeiro: 'CJORED2<br>João Evangelista<br>Sala 03',
        segundo: 'CJORED2<br>João Evangelista<br>Sala 03'
      },
      sexta: {
        primeiro: 'CJOTAV1<br>Paulo<br>Sala 01',
        segundo: 'CJOTAV1<br>Paulo<br>Sala 01'
      }
    },

    6: {
      segunda: {
        primeiro: 'CJOPRO2<br>Helton<br>Sala 03',
        segundo: 'CJOPRO2<br>Helton<br>Sala 03'
      },
      terca: {
        primeiro: 'CJOHCQS<br>Geterson<br>Sala 12',
        segundo: 'CJOHCQS<br>Geterson<br>Sala 01'
      },
      quarta: {
        primeiro: 'CJOTAV2<br>Augusto<br>Sala 01',
        segundo: 'CJOCMSA<br>Edvando<br>Sala 03'
      },
      quinta: {
        primeiro: 'CJOEMPE<br>João Correia<br>Sala 12',
        segundo: 'CJOTAV2<br>Augusto<br>Sala 01'
      },
      sexta: {
        primeiro: 'CJOSEGA<br>João Evangelista<br>Sala 12',
        segundo: 'CJOSEGA<br>João Evangelista<br>Sala 12'
      }
    }
  }
};

// a variável dados é um objeto que contém as informações do calendário de ADS, organizado por curso (analise) e semestre (1 a 6). Cada semestre possui os dias da semana (segunda a sexta) e dois blocos de horário (primeiro e segundo), com as informações da disciplina, professor e sala. 
// o objeto possui chaves, organizando hierárquicamente as informações.


let dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];
//arrays simples!
let nomesDias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];


// horas das aulas, array também -- lista de strings
let horarios = [
  '19h00 às 19h50',
  '19h50 às 20h40',
  '21h00 às 21h50',
  '21h50 às 22h40'
];

// Separa disciplina, porf e sala, dividindo pelos brs, dividindo pelos indices, o 0 recbe a disciplina, o 1 recebe o professor e o 2 recebe a sala. Retorna um objeto com essas informações.
function separarAula(aula) {
  let partes = aula.split('<br>');

  return {
    disciplina: partes[0],
    professor: partes[1],
    sala: partes[2]
  };
}

// Pega o objeto já separado, e retorna uma string HTML formatado pronto para ser mostrado na página, com a disciplina em negrito, e o professor e sala em linhas separadas.
function mostrarAula(aula) {
  return '<strong>' + aula.disciplina + '</strong><br>' +
         aula.professor + '<br>' +
         aula.sala;
}


let curso = document.getElementById('curso');
let semestre = document.getElementById('semestre');
let secaoTabela = document.getElementById('secao-tabela');
let corpoTabela = document.getElementById('corpo-tabela');
//busca o primeiro elemento que tenha o atributo data-schedule-title, data-schedule-description e data-calendar-summary: uma forma de selecionar o conteúdo específico para poder manipular mais tarde
let tituloTabela = document.querySelector('[data-schedule-title]');
let descricaoTabela = document.querySelector('[data-schedule-description]');
let resumoCalendario = document.querySelector('[data-calendar-summary]');
// casa document.getelementbid pega o elemento pelo id, para fazer as manipulações pelo javascript

if (curso && semestre && secaoTabela && corpoTabela) {
  let tabelaHorarios = corpoTabela.parentElement;
  let cabecalhoTabela = tabelaHorarios.querySelector('thead');

  // A tabela começa escondida, só aparece quando o curso e semestre forem escolhidos, mudando o display para block
  secaoTabela.style.display = 'none';

  // Quando o curso for escolhido, mostra os semestres.
  curso.addEventListener('change', function () {
    // o addeventlistner é um método permite ouvir eventos em um elementos, ou seja "quando o usuário mudar a opção do curso, execute essa função"

    semestre.innerHTML = '<option value="">Selecione o semestre</option>';
    secaoTabela.style.display = 'none';

    if (curso.value == '') {
      semestre.disabled = true;
      return;
    }
    // se o curso estiver vazio, desabilita o semestre e da um return, ou seja, não executa o restante da função, para evitar que o usuário escolha um semestre sem escolher um curso primeiro.

    for (let numero = 1; numero <= 6; numero++) {
      semestre.innerHTML +=
        '<option value="' + numero + '">' +
        numero + 'º semestre</option>';
      // o innerHTML é uma propriedade que permite acessar ou modificar o conteúdo HTML de um elemento, nesse caso, estamos adicionando opções ao select de semestre, com o número do semestre como valor e texto.
    }

    semestre.disabled = false;
  });


  semestre.addEventListener('change', function () {
    let cursoEscolhido = curso.value;
    let semestreEscolhido = semestre.value;
    // .value retorna o valor do elemento, ou seja, a opção escolhida pelo usuário no select de curso e semestre.

    if (cursoEscolhido == '' || semestreEscolhido == '') {
      secaoTabela.style.display = 'none';
      return;
    }

    let grade = dados[cursoEscolhido][semestreEscolhido]; // acessando uma parte específica do objeto dados, ou seja, a grade do curso e semestre escolhidos pelo usuário.
    // ou seja, grade vira um subconjunto de dados

    corpoTabela.innerHTML = ''; // permite alterar a tabela inteira, no casa, limpando ela interia, atribuindo uma string vazia

    // Coloca os dias da semana no topo da tabela.
    cabecalhoTabela.innerHTML =
      '<tr>' +
        '<th>Horário</th>' +
        '<th>Segunda</th>' +
        '<th>Terça</th>' +
        '<th>Quarta</th>' +
        '<th>Quinta</th>' +
        '<th>Sexta</th>' +
      '</tr>';
      // tr = linha, th = célula de cabeçalho

    let linha1 = '<tr><th>' + horarios[0] + '</th>';
    // linha um guarda uma string, representando a primeira linha da tabela, começando pelo horário, com as aula em sequência

    for (let i = 0; i < dias.length; i++) {
      let aulaPrimeiroBloco = separarAula(grade[dias[i]].primeiro);

      linha1 += '<td rowspan="2">' + mostrarAula(aulaPrimeiroBloco) + '</td>';
    }

    linha1 += '</tr>';

  // o for percorre os dias da semana, de 0 até o último, pegando a aula do primeiro bloco para cada dia, separando ela em disciplina, professor e sala, e depois mostrando ela formatada na tabela, usando o rowspan="2" para fazer com que a célula ocupe duas linhas, já que a aula do primeiro bloco continua na linha seguinte.

    // nessa linha apenas o horário, pois a aula de cima continua, sem precisar repetir o conteúdo, isso ocorre na quarta também
    let linha2 = '<tr><th>' + horarios[1] + '</th></tr>';

    // início do segundo bloco de aulas
    let linha3 = '<tr><th>' + horarios[2] + '</th>';

    for (let i = 0; i < dias.length; i++) {
      let aulaSegundoBloco = separarAula(grade[dias[i]].segundo);

      linha3 += '<td rowspan="2">' + mostrarAula(aulaSegundoBloco) + '</td>';
    }

    linha3 += '</tr>'; 

    let linha4 = '<tr><th>' + horarios[3] + '</th></tr>';

    corpoTabela.innerHTML = linha1 + linha2 + linha3 + linha4; //junta tudo numa unica string



      // só está dentro de um if para garantir que os elementos exitam na página, só sendo alterado se ele estiver presente, o mesmo acontece com a descrição, evitando erros. 

    if (tituloTabela) {
      tituloTabela.textContent = 'Grade semanal - ADS ' + semestreEscolhido + 'º semestre';
    }

    if (descricaoTabela) {
      descricaoTabela.textContent = 'Os dias aparecem no topo, os horários na lateral e cada aula ocupa o seu espaço na grade.';
    }

    // o status-pill é uma classe CSS que estiliza o texto "Selecionado" como um rótulo, indicando que o semestre foi escolhido, e depois mostra o nome do curso e semestre, junto com uma breve descrição do que a tabela representa

    if (resumoCalendario) {
      resumoCalendario.innerHTML =
        '<span class="status-pill">Selecionado</span>' +
        '<h2>ADS - ' + semestreEscolhido + 'º semestre</h2>' +
        '<p>Veja abaixo qual professor dará aula em cada dia e horário.</p>';
    }

    secaoTabela.style.display = 'block';
    // só mostro a tabela quando tenho certeza que tudo correu bem, mostrando a tabela completa
  });
}

// Formulário de dúvidas.
let formulario = document.getElementById('form-duvida');

if (formulario) {
  let botaoEnviar = document.getElementById('botao-enviar');
  let mensagemRetorno = document.getElementById('mensagem-retorno');
  let nomeInput = document.getElementById('nome');
  let emailInput = document.getElementById('email');
  let assuntoSelect = document.getElementById('assunto');
  let mensagemInput = document.getElementById('mensagem');

  botaoEnviar.addEventListener('click', function (evento) {
    evento.preventDefault();

    let erros = [];
    let primeiroCampoInvalido = null;
    let nome = nomeInput.value.trim();
    let email = emailInput.value.trim();
    let assunto = assuntoSelect.value;
    let mensagem = mensagemInput.value.trim();

    if (!nome) {
      erros.push('Por favor, informe seu nome.');
      primeiroCampoInvalido = primeiroCampoInvalido || nomeInput;
    }

    if (!email) {
      erros.push('Por favor, informe seu e-mail.');
      primeiroCampoInvalido = primeiroCampoInvalido || emailInput;
    } else if (!emailInput.validity.valid) {
      erros.push('Por favor, informe um e-mail válido.');
      primeiroCampoInvalido = primeiroCampoInvalido || emailInput;
    }

    if (!assunto) {
      erros.push('Por favor, selecione um assunto.');
      primeiroCampoInvalido = primeiroCampoInvalido || assuntoSelect;
    }

    if (!mensagem) {
      erros.push('Por favor, descreva sua dúvida.');
      primeiroCampoInvalido = primeiroCampoInvalido || mensagemInput;
    }

    if (erros.length > 0) {
      mensagemRetorno.style.color = 'red';
      mensagemRetorno.innerHTML = erros.join('<br>');
      mensagemRetorno.style.display = 'block';
      if (primeiroCampoInvalido) {
        primeiroCampoInvalido.focus();
      }
      return;
    }

    mensagemRetorno.style.color = 'green';
    mensagemRetorno.textContent = 'Obrigado! Sua dúvida foi registrada.';
    mensagemRetorno.style.display = 'block';

    formulario.reset();

    setTimeout(function () {
      mensagemRetorno.style.display = 'none';
    }, 3000);
  });
}

// 
