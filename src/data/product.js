// Este arquivo é um módulo JavaScript que exporta uma lista de produtos, representando livros disponíveis para compra. Cada produto é um objeto com propriedades como id, título, autor, resenha, preço e capa (URL da imagem). Esta lista pode ser importada e utilizada em outros componentes do aplicativo para exibir os produtos aos usuários, permitindo que eles naveguem pelos livros disponíveis e adicionem itens ao carrinho de compras. Não se limitem a esses livros sugeridos. Fiquem a vontade para aumentar esta base de dados de livros para serem apresentados pro usuário. Com uma variedade maior, vocẽs podeao filtrar por autor, por preço, por gênero, etc. E também podem adicionar mais informações sobre os livros, como número de páginas, editora, data de publicação, etc. Quanto mais informações vocês tiverem sobre os livros, melhor será a experiência do usuário ao navegar pelos produtos e tomar decisões de compra.
export const produtos = [
  {
    id: 1,
    titulo: 'Game of thrones: Fogo e Sangue',
    autor: 'George R. R. Martin',
    resenha:
      'Fogo & Sangue narra a história da dinastia Targaryen em Westeros, da conquista de Aegon I até a sangrenta guerra civil que dizimou seus dragões. Escrito como uma crônica, o livro detalha a ascensão e queda da família e serve como base para a série A Casa do Dragão.',
    preco: 199.9,
    capa: '/images/fire-and-blood.jpg',
    categoria: 'Fantasia'
  },
  {
    id: 2,
    titulo: 'Os Distorcidos',
    autor: 'Scott Cawthon e Kira Breed-Wrisley',
    resenha:
      'Charlie tenta superar o passado, mas novos assassinatos revelam monstros biomecânicos e ilusórios criados por William Afton.Ela é caçada implacavelmente pelos terríveis animatrônicos Distorcidos, culminando em um desfecho brutal e surpreendente.',
    preco: 149.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0iSvfOI3-4Rv0jcRfZwtu-IG3TAIWvcSGw&s',
    categoria: 'Terror'
  },
  {
    id: 3,
    titulo: 'Ordem Paranormal: O livro de regras do mestre',
    autor: 'Rafael "Cellbit" Lange',
    resenha:
      'O Livro de Regras é o primeiro conteúdo de Ordem Paranormal RPG, jogo oficial do universo criado por Cellbit. Anunciado em novembro de 2021, o sistema introduz a base e os conceitos para criar personagens e histórias desse cenário.',
    preco: 249.9,
    capa: 'https://m.media-amazon.com/images/I/81CJ-m4FlZL._AC_UF1000,1000_QL80_.jpg://covers.openlibrary.org/b/isbn/9781593279509-L.jpg',
    categoria: 'Terror'
  },
  {
    id: 4,
    titulo: "Drácula",
    autor: 'Bram Stoker',
    resenha: 'O corretor de imóveis Jonathan Harker viaja para a transilvânia para vender uma propiedade ao conde Drácula',
    preco: 159.9,
    capa: 'https://imagens.disal.com.br/produtos/ampliada/5697026.jpg',
    categoria: 'Terror'
  },
  {
    id: 5,
    titulo: 'O hobbit',
    autor: 'J. R. R. Tolkien',
    resenha:
      'Bilbo, o hobbit, entra em aventura épica liderada pelo grande Gandalf, o mago, Thorin e seus comparças anões para reconquistar a montanha',
    preco: 159.9,
    capa: 'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg',
    categoria: 'Fantasia'
  },
  {
    id: 6,
    titulo: 'A Sociedade do Anel',
    autor: 'J. R. R. Tolkien',
    resenha: 'Esse volume inicial de O Senhor dos Anéis apresenta a formação da Sociedade do Anel e a jornada de Frodo e seus companheiros para destruir o Um Anel, raiz do poder de Sauron. A narrativa começa no Condado, com a herança deixada por Bilbo, e se expande para uma aventura épica que une hobbits, homens, elfos e anões contra o Senhor Sombrio. É considerado o marco do gênero fantasia moderna, fruto da imaginação e erudição de Tolkien.',
    preco: 74.90,
    capa: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_ML2_.jpg',
    categoria: 'Fantasia'
  },
  {
    id: 7,
    titulo: 'Batman’s guide to being cool',
    autor: 'The Batman',
    resenha:
      'Guia para ser legal escrito pelo garndioso e másculo herói de Gothan City, Batman',
    preco: 139.9,
    capa: 'https://m.media-amazon.com/images/I/81I+UJdG9OL._AC_UF1000,1000_QL80_.jpg',
    categoria: 'Infantil'
  },
  {
    id: 8,
    titulo: 'Vermelho branco e sangue azul',
    autor: 'Casey McQuiston',
    resenha: 'Um romance improvével entre o filho da presidente dos EUA e o príncipe da Inglaterra',
    preco: 299.9,
    capa: 'https://m.media-amazon.com/images/I/71ugcKCFW7L._AC_UF1000,1000_QL80_.jpg',
    categoria: 'Romance'
  },
  {
    id: 9,
    titulo: 'O Diario Perdido de Gravity Falls',
    autor: 'Stanford Pines',
    resenha: 'O diário relata as aventuras dos gêmeos Dipper e Mabel e detalha os mistérios da pacata cidade',
    preco: 67.69,
    capa: 'https://m.media-amazon.com/images/I/61n4ciGrcfL.jpg',
    categoria: 'Fantasia'
  },
  // {
  //   id: ,
  //   titulo: '',
  //   autor: '',
  //   resenha: '',
  //   preco: ,
  //   capa: '',
  //  categoria: ''
  // },
  {
    id: 10,
    titulo: 'O Livro do Bill',
    autor: 'Alex Hirsch',
    resenha: 'Diferente dos diários anteriores focados nos heróis, este livro é inteiramente narrado por Bill Cipher, o icônico demônio triangular da série. Do além, ele usa as páginas para contar o seu lado da história. A obra funciona como um compilado perturbador que mistura a trágica e bizarra origem de Bill em sua dimensão 2D, seus planos de dominação mundial e suas interferências secretas na história da humanidade.',
    preco: 90,
    capa: 'https://m.media-amazon.com/images/I/81IioFHXeOL._UF1000,1000_QL80_.jpg',
    categoria: 'Fantasia'
  },
  {
    id: 11,
    titulo: 'O Retrato De Dorian Gray',
    autor: 'Oscar Wilde',
    resenha: 'Acompanha um jovem aristocrata que faz um pacto faustiano: ele vende sua alma para manter-se eternamente jovem, enquanto um retrato pintado por um amigo envelhece e apodce fisicamente a cada um de seus pecados e crimes',
    preco: 99.90,
    capa: 'https://http2.mlstatic.com/D_NQ_NP_733742-MLU50456317179_062022-O.webp',
    categoria: 'Terror'
  },
  {
    id: 12,
    titulo: 'O Gato de Botas',
    autor: 'Charles Perrault',
    resenha: 'UM livro sobre as magicas aventuras de um Gato falante com Botas',
    preco: 5.90,
    capa: 'https://m.media-amazon.com/images/I/91PRdeBw3lL._UF1000,1000_QL80_.jpg',
    categoria: 'Infantil'
  },
  {
    id: 13,
    titulo: 'O Diário de John Winchester',
    autor: 'Alex Irvine',
    resenha: 'Esse diário fictício de John Winchester reúne lendas, folclores e superstições sobre criaturas sobrenaturais, além de suas próprias experiências e angústias após a morte de Mary. O livro traz rituais de exorcismo, histórias de Samuel Colt, a primeira caçada de Dean, memórias da infância de Sam e estratégias de combate que serviram de guia para os irmãos Winchester em sua saga contra forças malignas.',
    preco: 44.91,
    capa: 'https://m.media-amazon.com/images/I/91UVv5+k1LL._SY466_.jpg',
    categoria: 'Suspense'
  },
  {
    id: 14,
    titulo: 'Supernatural: Livro dos Monstros',
    autor: 'Alex Irvine',
    resenha: 'Esse livro fictício mergulha o leitor em um universo sombrio inspirado nas aventuras de Sam e Dean Winchester. Cada capítulo apresenta relatos detalhados dos irmãos caçadores sobre criaturas horripilantes e lendas esquecidas, acompanhados de ilustrações vívidas. Além de narrar encontros macabros, eles revelam métodos para derrotar cada entidade, transformando a obra em um guia sinistro de pesadelos e mistérios. Em resumo, é uma jornada intensa pelas trevas, onde o desconhecido espreita a cada página.',
    preco: 50.73,
    capa: 'https://m.media-amazon.com/images/I/81fVpW5wPUL._SY466_.jpg',
    categoria: 'Terror'
  },
  {
    id: 15,
    titulo: 'ED & LORRAINE WARREN: LUGAR SOMBRIO ',
    autor: 'Gerald Brittle',
    resenha: 'O livro narra o famoso caso real do exorcismo de Connecticut, ocorrido em 1980. A obra detalha o terror vivido pela família Snedeker após se mudar para uma casa, sem saber que o local havia funcionado como uma antiga funerária',
    preco: 56.21,
    capa: 'https://http2.mlstatic.com/D_NQ_NP_757989-MLU50421276832_062022-O.webp',
    categoria: 'Terror'
  },
  {
    id: 16,
    titulo: 'ED & LORRAINE WARREN: VIDAS ETERNAS',
    autor: 'Gerald Brittle',
    resenha: 'A obra relata o apavorante caso de infestação demoníaca na casa da família Smurl, na Pensilvânia, durante a década de 1980. A obra detalha os anos de tormento, abusos físicos e manifestações sobrenaturais que assolaram a família, exigindo a intervenção dos investigadores Warren',
    preco: 64.50,
    capa: 'https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1233404/879528_ampliada.jpg?v=637298951682970000',
    categoria: 'Terror'
  },
]

