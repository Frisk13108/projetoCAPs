// Este arquivo é um módulo JavaScript que exporta uma lista de produtos, representando livros disponíveis para compra. Cada produto é um objeto com propriedades como id, título, autor, resenha, preço e capa (URL da imagem). Esta lista pode ser importada e utilizada em outros componentes do aplicativo para exibir os produtos aos usuários, permitindo que eles naveguem pelos livros disponíveis e adicionem itens ao carrinho de compras. Não se limitem a esses livros sugeridos. Fiquem a vontade para aumentar esta base de dados de livros para serem apresentados pro usuário. Com uma variedade maior, vocẽs podeao filtrar por autor, por preço, por gênero, etc. E também podem adicionar mais informações sobre os livros, como número de páginas, editora, data de publicação, etc. Quanto mais informações vocês tiverem sobre os livros, melhor será a experiência do usuário ao navegar pelos produtos e tomar decisões de compra.
export const produtos = [
  {
    id: 1,
    titulo: 'Game of thrones: Fogo e Sangue',
    autor: 'George R. R. Martin',
    resenha:
      'Fogo & Sangue narra a história da dinastia Targaryen em Westeros, da conquista de Aegon I até a sangrenta guerra civil que dizimou seus dragões. Escrito como uma crônica, o livro detalha a ascensão e queda da família e serve como base para a série A Casa do Dragão.',
    preco: 199.9,
    capa: 'https://m.media-amazon.com/images/I/81pa0QoG6ML._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    titulo: 'Os Distorcidos',
    autor: 'Scott Cawthon e Kira Breed-Wrisley',
    resenha:
      'Charlie tenta superar o passado, mas novos assassinatos revelam monstros biomecânicos e ilusórios criados por William Afton.Ela é caçada implacavelmente pelos terríveis animatrônicos Distorcidos, culminando em um desfecho brutal e surpreendente.',
    preco: 149.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0iSvfOI3-4Rv0jcRfZwtu-IG3TAIWvcSGw&s',
  },
  {
    id: 3,
    titulo: 'Ordem Paranormal: O livro de regras do mestre',
    autor: 'Rafael "Cellbit" Lange',
    resenha:
      'O Livro de Regras é o primeiro conteúdo de Ordem Paranormal RPG, jogo oficial do universo criado por Cellbit. Anunciado em novembro de 2021, o sistema introduz a base e os conceitos para criar personagens e histórias desse cenário.',
    preco: 249.9,
    capa: 'https://m.media-amazon.com/images/I/81CJ-m4FlZL._AC_UF1000,1000_QL80_.jpg://covers.openlibrary.org/b/isbn/9781593279509-L.jpg',
  },
  {
    id: 4,
    titulo: "Drácula",
    autor: 'Bram Stoker',
    resenha: 'O corretor de imóveis Jonathan Harker viaja para a transilvânia para vender uma propiedade ao conde Drácula',
    preco: 159.9,
    capa: 'https://imagens.disal.com.br/produtos/ampliada/5697026.jpg',
  },
  {
    id: 5,
    titulo: 'O hobbit',
    autor: 'J. R. R. Tolkien',
    resenha:
      'Bilbo, o hobbit, entra em aventura épica liderada pelo grande Gandalf, o mago, Thorin e seus comparças anões para reconquistar a montanha',
    preco: 159.9,
    capa: 'https://m.media-amazon.com/images/I/91M9xPIf10L.jpg',
  },
  {
    id: 6,
    titulo: 'Artbook Undertale',
    autor: 'Toby Fox',
    resenha: 'Um pouco sobre o processo de desenvolvimento do jogo Undertale',
    preco: 199.9,
    capa: 'https://r2.gallerynucleus.com/nucleus/nucleus-production/assets/attachments_p/000/102/043/original_IMG_9403.webp',
  },
  {
    id: 7,
    titulo: 'Batman’s guide to being cool',
    autor: 'The Batman',
    resenha:
      'Guia para ser legal escrito pelo garndioso e másculo herói de Gothan City, Batman',
    preco: 139.9,
    capa: 'https://m.media-amazon.com/images/I/81I+UJdG9OL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 8,
    titulo: 'Vermelho branco e sangue azul',
    autor: 'Casey McQuiston',
    resenha: 'Um romance improvével entre o filho da presidente dos EUA e o príncipe da Inglaterra',
    preco: 299.9,
    capa: 'https://m.media-amazon.com/images/I/71ugcKCFW7L._AC_UF1000,1000_QL80_.jpg',
  },
]

