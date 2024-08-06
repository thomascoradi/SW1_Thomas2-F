$(document).ready(function() {

    alert("Meu site funciona!");

    $( "#botaoOla" ).on( "click", function() {
        alert( "Olá 2°F!");
    });
    $( "#cmbCidade" ).on( "change", function() {
        alert( "Selecionado.");
    });
    $( "#txtNome" ).on( "change", function() {
        alert( "Preenchido." );
    });

    $( "#botaoSalvar" ).on("click", function() {
        if($("#cmbCidade").val() == "") {
            alert("Selecione a Cidade.");
            return 0;
        } else if($("#txtNome").val() == ""){
            alert("Preencha seu nome.")
            return 0;
        }
            alert("Salvo!")
            return 0;

    });
});