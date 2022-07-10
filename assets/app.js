const url = 'https://api.adviceslip.com/advice';
const imagemClique = document.querySelector('.principal__imagem')

imagemClique.addEventListener("click", requisicaoAdvice)

async function requisicaoAdvice() {
    let response = await fetch(url);
    let data = await response.json();
    let id = data.slip.id;
    let advice = data.slip.advice;
    document.querySelector('.principal__id').innerHTML = `Advice # ${id}`;
    document.querySelector('.principal__paragrafo').innerHTML = advice;
}

