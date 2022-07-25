const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(2)

    let classificacao = ''
    if (valorIMC <= 18.5) {
      classificacao = 'abaixo do peso.'
    } else if (valorIMC >= 18.6 && valorIMC <= 25) {
      classificacao = 'com peso ideal. Parabéns!'
    } else if (valorIMC >= 25.1 && valorIMC <= 30) {
      classificacao = 'levemtne acima do peso'
    } else if (valorIMC >= 30.1 && valorIMC <= 35) {
      classificacao = 'com obesidade Grau I.'
    } else if (valorIMC >= 35.1 && valorIMC <= 40) {
      classificacao = 'com obesidade Grau II'
    } else {
      classificacao = 'com obesidade Grau III. Cuidado!'
    }

    resultado.textContent = `${nome} seu imc é ${valorIMC} e você está ${classificacao}`
  } else {
    resultado.textContent = 'Preencha todos os campos!'
  }
}
calcular.addEventListener('click', imc)
