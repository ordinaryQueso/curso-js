function converter() {
    let v1 = Number(document.getElementById('v1').value);
    let tv1 = document.getElementById('tv1').value;
    let tv2 = document.getElementById('tv2').value;
    
    if (tv1 == tv2) {
        window.alert('ERRO, escolha temperaturas diferentes')
    } else {
        if (tv1 == "celcius" && tv2 == "kelvin") {
            var conv = 273.15 + v1
        } else if (tv1 == "celcius" && tv2 == "fahrenheit") {
            var conv = (v1 * 9/5) + 32
        } else if (tv1 == "kelvin" && tv2 == "fahrenheit") {
            var conv = (v1 - 273.15) * 9/5 + 32
        } else if (tv1 == "kelvin" && tv2 == "celcius") {
            var conv = v1 - 273.15
        } else if (tv1 == "fahrenheit" && tv2 == "celcius") {
            var conv = (v1 - 32) * 5/9
        } else {
            var conv = (v1 - 32) * 5/9 + 273.15
        }
        document.getElementById('v2').value = conv.toFixed(2)
    }  
}