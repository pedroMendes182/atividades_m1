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

let produto                         = "maçã"
let quantidadeDoProduto             = 10
let quantidadeDoProdutoParaPromocao = 5 - quantidadeDoProduto

if(produto = "maçã" && quantidadeDoProduto >= 5){
    console.log(`você recebeu uma promoção, o valor da ${produto} será R$5,00`)
}else{
    console.log(`Se você adcionar mais ${quantidadeDoProdutoParaPromocao}  ${produto}(s) o valor sairá por R$5,00`)
}