function buttonPress(num) {
    var valuePrint = $('.screen').val();
    $('.screen').val(valuePrint + num);
}

function equal() {
    var result = $('.screen').val();
    if (result.endsWith('+') || result.endsWith('-')
        || result.endsWith('/') || result.endsWith('*')){
            result = result.substring(0, result.length - 1)
    };
    $('.screen').val(eval(result));
}

function clean() {
    $('.screen').val('');
}

function del() {
    var delet = $('.screen').val();
    $('.screen').val(delet.substring(0, delet.length - 1));
}