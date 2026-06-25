// um array de objetos contendo os dados de busca, cada objeto representa uma página ou seção do site com título, descrição, link e palavras-chave 

let dadosBusca = [
  {
    titulo: 'Calendário Acadêmico',
    descricao: 'Horários das aulas, dias da semana, disciplinas, professores e salas.',
    link: 'index2.html',
    palavras: 'calendario horário horarios aula aulas prova provas disciplina semestre sala'
  },
  // cada objeto tem uma chave que organiza as informações da página, incluindo título, descrição, link e palavras-chave para busca.
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
// o campo busca é o elemento de input onde o usuário digita a palavra-chave, e resultadosBusca é o elemento onde os resultados da busca serão exibidos associando a variável campoBusca ao elemento de input com id 'busca-site' e a variável resultadosBusca ao elemento com id 'resultados-busca'.

let campoBusca = document.getElementById('busca-site');
let resultadosBusca = document.getElementById('resultados-busca');

// o parametro texto vem do campo de busca
function normalizarTexto(texto) {
  return texto
    .toLowerCase() // converte o texto para minúsculas
    .normalize('NFD') // normaliza o texto para decompor caracteres acentuados em seus componentes básicos
    .replace(/[\u0300-\u036f]/g, ''); // remove os diacríticos/acentos do texto, deixando apenas os caracteres básicos
}
// o parametro item representa cada objeto do array de dados da busca

// a função monta o resultado da busca em HTML, criando um link para a página correspondente e exibindo o título e a descrição do item
function montarResultado(item) {
  let externo = item.link.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
  //o target="_blank" faz com que o link seja aberto em uma nova aba do navegador, e o rel="noopener" é uma medida de segurança para evitar que a página aberta tenha acesso à página original


  // cria um elemento div contendo o link descrição...
  return '<div class="resultado-busca">' +
    '<a href="' + item.link + '"' + externo + '>' + item.titulo + '</a>' +
    '<p>' + item.descricao + '</p>' +
    '</div>';
}

// add event listener é um método que escuta um evento no elemento, nesse caso, o evento 'input' no campo de busca, e executa a função anônima sempre que o usuário digita algo no campo de busca. A função pega o valor digitado, normaliza o texto e filtra os resultados da busca com base nas palavras-chave dos objetos do array dadosBusca. Se houver resultados, eles são exibidos na página; caso contrário, uma mensagem de aviso é mostrada.


// ela é anônimo pois nao tem um nome definido, acontecendo sempre que o evento 'input' é disparado, ou seja, sempre que o usuário digita algo no campo de busca. A função pega o valor digitado, normaliza o texto e filtra os resultados da busca com base nas palavras-chave dos objetos do array dadosBusca. Se houver resultados, eles são exibidos na página; caso contrário, uma mensagem de aviso é mostrada.
campoBusca.addEventListener('input', function () {
  let termo = normalizarTexto(campoBusca.value.trim());

  if (termo.length < 2) {
    resultadosBusca.innerHTML = '<p class="mensagem-busca">Digite uma palavra para ver sugestões.</p>';
    return;
  }

  //filter é um método que cria um novo array com todos os elementos que passam no teste implementado pela função fornecida. Nesse caso, ele percorre cada item do array dadosBusca e verifica se o termo digitado pelo usuário está presente no título, descrição ou palavras-chave do item. A função normalizarTexto é usada para garantir que a busca seja insensível a maiúsculas/minúsculas e acentos
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
