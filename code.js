
$(document).ready(function cronos(){
    var num = 0;
    setInterval(function(){
            num = num + 1;
            $("#tempo").val(num)
    }, 1000);
});

var number = 0;
function timer(){
    setInterval(soma, 1000);
}
function soma(){
    number = number + 1;
    $("#time").val(number);
};
setTimeout(timer, 1000);

$(document).ready(function(){
    let segundos = 0;
    setInterval(function(){
        segundos++;
        $("#contador").text(segundos);
    }, 1000);
});
