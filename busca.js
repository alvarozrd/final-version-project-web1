let dadosBusca = [
  {
    titulo: 'Calendário Acadêmico',
    descricao: 'Horários das aulas, dias da semana, disciplinas, professores e salas.',
    link: 'index2.html',
    palavras: 'calendario horário horarios aula aulas prova provas disciplina semestre sala'
  },
  {
    titulo: 'Professores',
    descricao: 'Contatos, disciplinas, áreas de atuação e currículo Lattes dos professores.',
    link: 'index3.html',
    palavras: 'professor professores contato email lattes disciplina docentes'
  },
  {
    titulo: 'Biblioteca',
    descricao: 'Livros recomendados, acervo, Pergamum e apoio aos estudos.',
    link: 'index4.html',
    palavras: 'biblioteca livro livros pergamum acervo estudo materiais'
  },
  {
    titulo: 'FAQ',
    descricao: 'Perguntas frequentes sobre SUAP, notas, senha, horários e disciplinas.',
    link: 'index5.html',
    palavras: 'faq duvida dúvidas suap notas senha horário matricula disciplina'
  },
  {
    titulo: 'Enviar Dúvida',
    descricao: 'Formulário para enviar uma pergunta que ainda não aparece no FAQ.',
    link: 'index5.html#formulario',
    palavras: 'formulario pergunta enviar dúvida duvida contato mensagem'
  },
  {
    titulo: 'Últimas Notícias do IFSP-CJO',
    descricao: 'Comunicados, eventos, editais e oportunidades publicados pelo campus.',
    link: 'https://www.ifspcjo.edu.br/ultimas-noticias',
    palavras: 'noticias notícias comunicado comunicados evento eventos edital editais oportunidade campus'
  }
];

let campoBusca = document.getElementById('busca-site');
let resultadosBusca = document.getElementById('resultados-busca');

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function montarResultado(item) {
  let externo = item.link.startsWith('http') ? ' target="_blank" rel="noopener"' : '';

  return '<div class="resultado-busca">' +
    '<a href="' + item.link + '"' + externo + '>' + item.titulo + '</a>' +
    '<p>' + item.descricao + '</p>' +
    '</div>';
}

campoBusca.addEventListener('input', function () {
  let termo = normalizarTexto(campoBusca.value.trim());

  if (termo.length < 2) {
    resultadosBusca.innerHTML = '<p class="mensagem-busca">Digite uma palavra para ver sugestões.</p>';
    return;
  }

  let resultados = dadosBusca.filter(function (item) {
    let textoCompleto = normalizarTexto(item.titulo + ' ' + item.descricao + ' ' + item.palavras);
    return textoCompleto.includes(termo);
  });

  if (resultados.length == 0) {
    resultadosBusca.innerHTML = '<p class="mensagem-busca">Nenhum resultado encontrado. Tente buscar por calendário, biblioteca, SUAP ou professores.</p>';
    return;
  }

  resultadosBusca.innerHTML = resultados.map(montarResultado).join('');
});
