function calcularJurosSimples() {
    
    let juros = parseFloat(document.getElementById("juros").value);
    let valorInicial = parseFloat(document.getElementById("Valor Inicial").value);
    let meses = parseInt(document.getElementById("meses").value);
    let valor = (juros * valorInicial * meses/100);

    let div = document.getElementById("resultado");
    div.innerHTML = "O valor total de Juros Simples é de: R$" + valor;

}


