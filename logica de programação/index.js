// let primeiroNome   = "Pedro";
// let sobreNome      = "Mendes";
// let idade          = "25";

// -------------------------------------

// console.log(`Olá meu nome é ${primeiroNome}, e meu segundo nome é ${sobreNome}. E eu tenho ${idade} anos.`)

// -------------------------------------

// let preco1     = 15
// let preco2     = 25
// let precoTotal = preco1 + preco2

// console.log(`Comprei uma xicara por ${preco1} e dois copos por ${preco2}. No total gastei ${precoTotal}`);

// -------------------------------------

// let contador = 0;

// console.log(contador);
// contador ++
// console.log(contador);
// contador ++
// console.log(contador);
// contador ++
// console.log(contador);
// contador ++
// console.log(contador);
// contador ++
// console.log(contador);

// -------------------------------------

// let anoAtual      = 2022;
// let anoNascimento = 1996;
// let idadeAtual    = anoAtual - anoNascimento;

// console.log(`No ano ${anoAtual} eu vou fazer ${idadeAtual} anos de idades. `)

// -------------------------------------

// let alturaRetangulo    = 5;
// let larguraRetangulo   = 7;
// let areaRetangulo      = alturaRetangulo * larguraRetangulo

// console.log(`Um retangulo largura de ${larguraRetangulo}cm e altura de ${alturaRetangulo}cm possui ${areaRetangulo}cm² de area total.`);

// -------------------------------------

// let diaAtual         = 14;
// let mesAtual         = 06;
// let anoAtual         = 2022;
// let dataFormanda     = (`${diaAtual}/${mesAtual}/${anoAtual}`)

// console.log (`A data de hoje é ${dataFormanda}`)

// -------------------------------------

// let valorA = 7
// let valorB = 3
// let valorC = ""

// valorC = valorA
// valorA = valorB
// valorB = valorC

// console.log(`Antes a variavel 'valorA' possuia o valor ${valorB}, agora ela possui ${valorA}`)
// console.log(`Antes a variavel 'valorB' possuia o valor ${valorA}, agora ela possui ${valorB}`)

// -------------------------------------

// let meuNome = "Jose Pedro Pires Mendes"
// console.log(meuNome.length)

// console.log(`Meu nome possui ${meuNome.length} caracteres de comprimento`)

// -------------------------------------

// let preco        = 15
// let precoFormado = "R$15,00"

// console.log(`O valor ${preco} formatado ficaria assim ${precoFormado}`)

// -------------------------------------

// let cumprimento         = "Bom Dia"
// let nome                = "Pedro"
// let sobreNome           = "Mendes"

// const newLocal = `${cumprimento}  ${nome}  ${sobreNome}`
// let mensagemCumprimento = newLocal 

// console.log(mensagemCumprimento)

// -------------------------------------

// let usuario1Altura = "1.80"
// let usuario2Altura = "1.75"
// let comparacaoDeAlturas = usuario1Altura > usuario2Altura

// console.log(comparacaoDeAlturas)

// -------------------------------------

// let valor1              = 15;
// let valor2              = "15";
// let comparacaoDeValores = valor1 !== valor2;

// console.log(comparacaoDeValores);

// -------------------------------------

// let idade        = 20
// let avaliarIdade = idade > 18 && idade < 25

// if (avaliarIdade){
    
//     console.log(`A idade está entre 18 e 25`)
// }else {

//     console.log(`A idade não está entre 18 e 25`)
// }

// -------------------------------------

// let carroNome   = "Chevrolet"
// let carroAno    = 2017


// if (carroNome == "Chevrolet" && carroAno == 2019){
//     console.log("Carro encontrado")
// }else{
//     console.log("Carro não encontrado")
// }

// -------------------------------------

// let botaoMenu     = false
// let avaliarClick  = !botaoMenu

// if (avaliarClick == false){
//     console.log("abrir menu")
// }else{
//     console.log("fechar menu")
// }

// -------------------------------------

// let usuarioAutenticado = !true

// if(usuarioAutenticado){
//     console.log("Seja bem vindo")
// }else {
//     console.log("tente novamente")
// }

// -------------------------------------

// let usuario = "Ana"
// let auntenticado = !false

// if(usuario == "Ana" && auntenticado == true){
//     console.log(`Olá ${usuario} você está autenticado `)
// }

// -------------------------------------

// let produto                         = "maçã"
// let quantidadeDoProduto             = 10
// let quantidadeDoProdutoParaPromocao = 5 - quantidadeDoProduto

// if(produto = "maçã" && quantidadeDoProduto >= 5){
//     console.log(`você recebeu uma promoção, o valor da ${produto} será R$5,00`)
// }else{
//     console.log(`Se você adcionar mais ${quantidadeDoProdutoParaPromocao}  ${produto}(s) o valor sairá por R$5,00`)
// }

// -------------------------------------

// let numero1 = parseInt(prompt("Insira um numero Inteiro aqui"))

// alert(`Seu numero é o ${numero1}`)

// -------------------------------------

// let numero1 = parseInt(prompt("Insira um numero inteiro"))
// let numero2 = parseInt(prompt("Insira mais um numero inteiro"))
// let numero3 = parseInt(prompt("Insira o ultimo numero inteiro"))

// let totalSoma = numero1 + numero2 + numero3

// alert(`O resultado da soma desses numeros é igual a: ${totalSoma}`)

// -------------------------------------

// let nota1 = parseInt(prompt("Nota do primeiro semestre"))
// let nota2 = parseInt(prompt("Nota do segundo semestre"))

// let mediaAnual = (nota1 + nota2) / 2

// alert(`A media anual é: ${parseFloat(mediaAnual)}`)

// -------------------------------------

// let numero1 = parseInt(prompt("Insira um numero inteiro aqui"))

// let resultadoDivisao = numero1 % 2 

// if(resultadoDivisao == 0){
// alert(`Seu numero é par`)
// }else {
//     alert(`Seu numero é impar`)
// }

// -------------------------------------

// let numero1 = parseInt(prompt("Insira um numero inteiro aqui"))

// let resultadoQuadrado = Math.pow(numero1, 2)

// alert(`O quadrado desse numero é: ${resultadoQuadrado}`)

// -------------------------------------

// function somaNumeros(numb1 , numb2){
    
//     return numb1 + numb2  
// }

// console.log(somaNumeros(15 , 876))

// -------------------------------------

// function tipo (valor1, valor2){

//     return valor1 * valor2    
// }

// let resultado = tipo(2, 3)
// if(resultado == 6){

//     resultado = true
// }

// console.log(`o valor ${resultado} é do tipo ${typeof(resultado)}`)

// -------------------------------------

// function somaDasNotas(nota1, nota2, nota3, nota4){

//     if(typeof(nota1, nota2, nota3, nota4) === "number"){

//         console.log(`A soma das notas bimestrais são: ${nota1 + nota2 + nota3 + nota4}`)
//     }else{ 

//         console.log("Os campos só podem receber números")
// }
// }

// somaDasNotas(9, 4, 6, "7")

// -------------------------------------

// function soma(valor1, valor2, valor3, valor4){
//     return valor1 + valor2 + valor3 + valor4
// }

// function media(value){
//     return value / 4
// }

// function resultado(nota1, nota2, nota3, nota4){ 
//     return media(soma(nota1, nota2, nota3, nota4))
// }

// console.log('Média do aluno Carlos: ' + resultado(5, 6, 8, 9))

// -------------------------------------
function converterParaCelsius(tempFinal, valorDaTemperatura){
    
    if (tempFinal === "fahrenheit"){
        return valorDaTemperatura * 1.8 + 32        
    }
    if (tempFinal === "kelvin"){
        return valorDaTemperatura + 273
    }
        
} 

function converterParaKelvin(tempFinal, valorDaTemperatura){

    if (tempFinal === "fahrenheit"){
        return (valorDaTemperatura-32) * 5 / 9 + 273
    }
    if (tempFinal === "celsius"){
        return valorDaTemperatura + 273
    }
}

function converterParaFahrenheit(tempFinal, valorDaTemperatura){

    if(tempFinal === "celsius"){
        return valorDaTemperatura * 1.8 + 32
    }
    if(tempFinal === "kelvin"){
        return (valorDaTemperatura-273) * 1.8 + 32
    }
}


function converterTemperaturas(Temperatura, tipoDetemperatura, tipoFinaldaTemperatura){

        if (tipoDetemperatura === "fahrenheit" || "kelvin"){
            if (tipoFinaldaTemperatura === "celsius"){
   
                console.log(converterParaCelsius(tipoDetemperatura, Temperatura))
        }
    }
        
        if (tipoDetemperatura === "kelvin" || "celsius"){
            if(tipoFinaldaTemperatura === "fahrenheit"){
                console.log(converterParaFahrenheit(tipoDetemperatura,Temperatura))
        }
    }

        if (tipoDetemperatura === "fahrenheit" || "celsius"){
            if(tipoFinaldaTemperatura === "kelvin"){
                console.log(converterParaKelvin(tipoDetemperatura,Temperatura))
    }
    }   
        if(tipoDetemperatura === tipoFinaldaTemperatura){
            console.log("Digite um tipo diferente do atual para ser convertido")
        }
}
      
converterTemperaturas(270, "celsius", "celsius")
