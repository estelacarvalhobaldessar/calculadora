function insert(num) {
    let tela = document.getElementById("resposta").innerHTML;
    if( tela == '0'){
        tela = '';
    }
    document.getElementById("resposta").innerHTML = tela + num;
}
function clean() {
    document.getElementById("resposta").innerHTML = "";
}
function resultado() {
    let tela = document.getElementById("resposta").innerHTML;
    document.getElementById("resposta").innerHTML = eval(tela);
}