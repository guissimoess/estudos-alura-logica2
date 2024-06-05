function calculaIMC (alturaMetros, peso) {
    let imc = peso / (alturaMetros * alturaMetros);
}



function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);



  function converteDolar (valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorConvertido = valorEmDolar * cotacaoDolar;
    return valorConvertido.toFixed(2);
  }
  let valorEmDolar = 50;
  let valorEmReais = converteDolar(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

  

  function areaRetangulo (altura, largura) {
    return altura * largura;
  }
  function perimetroRetangulo (altura, largura) {
    return 2 * (altura + largura);
  }



  function areaCirculo (raio) {
    let pi = 3.14;
    return pi * raio * raio;
  }
  function perimetroCirculo (raio) {
    let pi = 3.14;
    return 2 * pi * raio;
  }


  function tabuada (numero) {
    for (let i=0; i<10; i++) {
        let resultado = numero * i;
        console.log (`${numero} x ${i}  = ${resultado}`);
    }
  }
