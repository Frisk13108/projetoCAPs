import { ref } from "vue";
export const produtosCarrinho = ref([
        {
    id: 2,
    titulo: 'Game of thrones: Fogo e Sangue',
    autor: 'George R. R. Martin',
    resenha:
      'Fogo & Sangue narra a história da dinastia Targaryen em Westeros, da conquista de Aegon I até a sangrenta guerra civil que dizimou seus dragões. Escrito como uma crônica, o livro detalha a ascensão e queda da família e serve como base para a série A Casa do Dragão.',
    preco: 199.9,
    capa: 'https://m.media-amazon.com/images/I/81pa0QoG6ML._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    titulo: 'Os Distorcidos',
    autor: 'Scott Cawthon e Kira Breed-Wrisley',
    resenha:
      'Charlie tenta superar o passado, mas novos assassinatos revelam monstros biomecânicos e ilusórios criados por William Afton.Ela é caçada implacavelmente pelos terríveis animatrônicos Distorcidos, culminando em um desfecho brutal e surpreendente.',
    preco: 149.9,
    capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0iSvfOI3-4Rv0jcRfZwtu-IG3TAIWvcSGw&s',
  }
]);