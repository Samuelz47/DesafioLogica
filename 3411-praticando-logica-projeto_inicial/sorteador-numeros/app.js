
gerarNumeroAleatorio();
 
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value) ;
    let de = parseInt(document.getElementById('de').value) ;
    let ate = parseInt(document.getElementById('ate').value) ;
    let contador = 1;
    let numeroAleatorioArray = [];
    
    if(de >= ate || (ate - de) < quantidade){
        limparCampos();
        alert('Dados inválidos!');
        return ;
    } else{
        while (quantidade >= contador){
            let numeroAleatorio = gerarNumeroAleatorio(de, ate);
            contador ++;

            while(numeroAleatorioArray.includes(numeroAleatorio)){
                numeroAleatorio = gerarNumeroAleatorio(de, ate);
            }

            numeroAleatorioArray.push(numeroAleatorio)
        }
        exibirNumeros(quantidade, numeroAleatorioArray);
        alterarStatusBotao();
    }
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min ;
}

function exibirNumeros(quantidade, numeros){
    let palavraNumero = quantidade > 1 ? 'Numeros Sorteados:' : 'Numero Sorteado:' ;
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">${palavraNumero} ${numeros}</label>`

}

function limparCampos(){
    let campoQuantidade = document.getElementById('quantidade');
    let campoDe = document.getElementById('de');
    let campoAte = document.getElementById('ate');
    campoQuantidade.value = '';
    campoDe.value = '';
    campoAte.value = '';
}

function mensagemInicial(){
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>' ;
}

function reiniciar(){
    gerarNumeroAleatorio();
    limparCampos();
    mensagemInicial();
    alterarStatusBotao();
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}