
import { produtos } from '@/data/product'
import { ref, computed } from 'vue'


const carrinho = [
  {
    id: 1,
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    resenha:
      'Um livro sobre boas práticas de programação, escrita de código limpo e melhoria da qualidade de software.',
    preco: 129.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
    quantidade: 2,
    precoTotal: 259.8,
  },
  {
    id: 3,
    titulo: 'Eloquent JavaScript',
    autor: 'Marijn Haverbeke',
    resenha:
      'Uma introdução prática à linguagem JavaScript, com exemplos e conceitos fundamentais para desenvolvimento web.',
    preco: 89.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg',
    quantidade: 1,
    precoTotal: 89.9,
  },
  {
    id: 5,
    titulo: 'Design Patterns',
    autor: 'Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides',
    resenha:
      'Livro clássico sobre padrões de projeto e soluções reutilizáveis para problemas comuns de software.',
    preco: 159.9,
    capa: 'https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg',
    quantidade: 3,
    precoTotal: 479.7,
  },
]

function addCarrinho(idLivro, quantidade) {
  const livro = produtos.find((p) => p.id === idLivro)
  if (livro) {
    const itemExistente = carrinho.find((item) => item.id === idLivro)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * livro.preco
    } else {
      carrinho.push({
        ...livro,
        quantidade,
        precoTotal: quantidade * livro.preco,
      })
    }
  }
}

const cupomDigitado = ref('')
const percentualDesconto = ref(0)
import { produtosCarrinho } from '@/data/produtosCarrinho'

const total = computed(() => {
    return produtosCarrinho.value.reduce((total, produto) => {
        return total + produto.preco * (produto.quantidade ?? 1)
    }, 0)
})

function aplicarCupom() {
  if (cupomDigitado.value === 'DESCONTO10') {
    percentualDesconto.value = 10
    alert('Cupom Validado')
  }
  else if (cupomDigitado.value === 'DESCONTO20') {
    percentualDesconto.value = 20
    alert('Cupom Validado')
  }
  else if (cupomDigitado.value === 'AURA67') {
    percentualDesconto.value = 30
    alert('Cupom Validado')
  }
  else if (cupomDigitado.value === 'CUPOM5') {
    percentualDesconto.value = 5
    alert('Cupom Validado')
  }
  else {
    percentualDesconto.value = 0
    alert('Cupom inválido')
  }

    console.log(percentualDesconto.value)
}

const totalComDesconto = computed(() => {
    return total.value - (total.value * percentualDesconto.value) / 100
})
export { carrinho, addCarrinho, cupomDigitado, percentualDesconto, aplicarCupom, totalComDesconto, total }
