alert('Bem vindo ao meu conversor de moedas simples');


function converter() {
    /* LER STRING DIGITADA */

    var select = document.getElementById('select');
    var value = select.options[select.selectedIndex].value;
    var valor = Number(document.getElementsByName("valor")[0].value);

    var selectDois = document.getElementById('select2');
    var valueDois = select2.options[select2.selectedIndex].value;

    var converte = document.getElementById('converte');

    //PREENCHER TODOS OS DADOS
        if(value === "selecione" && valueDois === "selecione"){
            alert('Preencha todos os campos ! ')
        }else if (value === "selecione" && valueDois === "dolar"){
            alert('Preencha todos os campos ! ')
        }else if (value === "selecione" && valueDois === "euro"){
            alert('Preencha todos os campos ! ')
        }else if (value === "selecione" && valueDois === "real"){
            alert('Preencha todos os campos ! ')
        }else if (value === "selecione" && valueDois === "libras"){
            alert('Preencha todos os campos ! ')
        }else if (value === "dolar" && valueDois === "selecione"){
            alert('Preencha todos os campos ! ')
        }else if (value === "euro" && valueDois === "selecione"){
            alert('Preencha todos os campos ! ')
        }else if (value === "real" && valueDois === "selecione"){
            alert('Preencha todos os campos ! ')
        }else if (value === "libras" && valueDois === "selecione"){
            alert('Preencha todos os campos ! ')
        }




    //DÓLAR
    if(value === "dolar" && valueDois === "dolar"){
        valor = valor ;
        valor.toFixed(2);
        converte.innerHTML = valor + "US$"
    } else if (value === "dolar" && valueDois === "euro") {

        valor = valor * 1.84;
        valor.toFixed(2);
        converte.innerHTML = valor + "€"

    } else if (value === "dolar" && valueDois === "real") {
        valor = valor * 4.87;
        valor.toFixed(2);
        converte.innerHTML = valor + "R$"

    } else if (value === "dolar" && valueDois === "libras") {
        valor = valor * 0.80;
        valor.toFixed(2);
        converte.innerHTML = valor + "£"
    }


    //EURO
    if(value === "euro" && valueDois === "euro"){
        valor = valor ;
        valor.toFixed(2);
        converte.innerHTML = valor + "€"
    } else if (value === "euro" && valueDois === "dolar") {

        valor = valor * 1.09;
        valor.toFixed(2);
        converte.innerHTML = valor + "US$"

    } else if (value === "euro" && valueDois === "real") {
        valor = valor * 5.29;
        valor.toFixed(2);
        converte.innerHTML = valor + "R$"

    } else if (value === "euro" && valueDois === "libras") {
        valor = valor * 0.87;
        valor.toFixed(2);
        converte.innerHTML = valor + "£"
    }

    //REAL
    if(value === "real" && valueDois === "real"){
        valor = valor ;
        valor.toFixed(2);
        converte.innerHTML = valor + "R$"
    } else if (value === "real" && valueDois === "dolar") {

        valor = valor * 0.21;
        valor.toFixed(2);
        converte.innerHTML = valor + "US$"

    } else if (value === "real" && valueDois === "euro") {
        valor = valor * 0.19;
        valor.toFixed(2);
        converte.innerHTML = valor + "€"

    } else if (value === "real" && valueDois === "libras") {
        valor = valor * 0.16;
        valor.toFixed(2);
        converte.innerHTML = valor + "£"
    }


    //LIBRAS
    if(value === "libras" && valueDois === "libras"){
        valor = valor ;
        valor.toFixed(2);
        converte.innerHTML = valor + "£"
    }else if (value === "libras" && valueDois === "dolar") {

        valor = valor * 1.25;
        valor.toFixed(2);
        converte.innerHTML = valor + "US$"

    } else if (value === "libras" && valueDois === "euro") {
        valor = valor * 1.15;
        valor.toFixed(2);
        converte.innerHTML = valor + "€"

    } else if (value === "libras" && valueDois === "real") {
        valor = valor * 6.08;
        valor.toFixed(2);
        converte.innerHTML = valor + "R$"
    }





}