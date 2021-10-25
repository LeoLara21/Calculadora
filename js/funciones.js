
function tecla_abajo(event){
    switch(event.keyCode){

        //primarios
        case 16:  {change_primaryDwn(document.getElementById("ac"));      } break;
        case 17:  {change_primaryDwn(document.getElementById("masmenos"));} break;
        case 19:  {change_primaryDwn(document.getElementById("porcent")); } break;
        //secundarios 
        case 111: {change_secondaryDwn(document.getElementById("entre")); } break;
        case 106: {change_secondaryDwn(document.getElementById("por"));   } break;
        case 109: {change_secondaryDwn(document.getElementById("menos")); } break;
        case 107: {change_secondaryDwn(document.getElementById("mas"));   } break;
        case 10:  {change_secondaryDwn(document.getElementById("equal")); } break;
        //numéricos         
        case 96:  {change_numberDwn(document.getElementById("cero"));     } break;
        case 97:  {change_numberDwn(document.getElementById("uno"));      } break;
        case 98:  {change_numberDwn(document.getElementById("dos"));      } break;
        case 99:  {change_numberDwn(document.getElementById("tres"));     } break;
        case 100: {change_numberDwn(document.getElementById("cuatro"));   } break;
        case 101: {change_numberDwn(document.getElementById("cinco"));    } break;
        case 102: {change_numberDwn(document.getElementById("seis"));     } break;
        case 103: {change_numberDwn(document.getElementById("siete"));    } break;
        case 104: {change_numberDwn(document.getElementById("ocho"));     } break;
        case 105: {change_numberDwn(document.getElementById("nueve"));    } break;
        case 110: {change_numberDwn(document.getElementById("punto"));    } break;
        //default
        default:  {window.alert("Presione una tecla válida");             } break;
    }
}

function tecla_arriba(event){
    switch(event.keyCode){

        //primarios
        case 16:  {change_primaryUp("ac");      } break;
        case 17:  {change_primaryUp("masmenos");} break;
        case 19:  {change_primaryUp("porcent"); } break;
        //secundarios 
        case 111: {change_secondaryUp("entre"); } break;
        case 106: {change_secondaryUp("por");   } break;
        case 109: {change_secondaryUp("menos"); } break;
        case 107: {change_secondaryUp("mas");   } break;
        case 10:  {change_secondaryUp("equal"); } break;
        //numéricos         
        case 96:  {change_numberUp("cero");     } break;
        case 97:  {change_numberUp("uno");      } break;
        case 98:  {change_numberUp("dos");      } break;
        case 99:  {change_numberUp("tres");     } break;
        case 100: {change_numberUp("cuatro");   } break;
        case 101: {change_numberUp("cinco");    } break;
        case 102: {change_numberUp("seis");     } break;
        case 103: {change_numberUp("siete")     } break;
        case 104: {change_numberUp("ocho");     } break;
        case 105: {change_numberUp("nueve");    } break;
        case 110: {change_numberUp("punto");    } break;
        //default
        default:  {window.alert("Presione una tecla válida"); } break;
    }
}

window.onload = function(){
    document.onkeydown = tecla_abajo;
    document.onkeyup   = tecla_arriba;
}


function change_primaryDwn(ob){
    ob.style.backgroundColor = "white";
}

function change_primaryUp(id){
    switch(id){
        case "ac":
            document.getElementById("ac").style.backgroundColor =       'gray';
            document.getElementById("pantalla").value="0";
        break;
        case "masmenos":
            document.getElementById("masmenos").style.backgroundColor = 'gray';
            document.getElementById("pantalla").value*="-1";
        break;
        case "porcent":
            document.getElementById("porcent").style.backgroundColor = 'gray';
            document.getElementById("pantalla").value+="%";
        break;
    } 
}

function change_secondaryDwn(ob){
    ob.style.backgroundColor = 'rgb(210,210,210)';
    ob.style.color = 'orange';
}

function change_secondaryUp(id){
    switch(id){
        case "entre":
            document.getElementById("entre").style.backgroundColor = 'orange';
            document.getElementById("entre").style.color = 'white';
            document.getElementById("pantalla").value+="÷";
        break;        
        case "por":
            document.getElementById("por").style.backgroundColor   = 'orange';
            document.getElementById("por").style.color = 'white';
            document.getElementById("pantalla").value+="×";
        break;
        case "menos":
            document.getElementById("menos").style.backgroundColor = 'orange';
            document.getElementById("menos").style.color = 'white';
            document.getElementById("pantalla").value+="-";
        break;
        case "mas":
            document.getElementById("mas").style.backgroundColor   = 'orange';
            document.getElementById("mas").style.color = 'white';
            document.getElementById("pantalla").value+="+";
        break;
        case "equal":
            document.getElementById("equal").style.backgroundColor = 'orange';   
            document.getElementById("pantalla").value+="=";
        break;
    }
}

function change_numberDwn(ob){    
    ob.style.backgroundColor = 'rgb(105,105,105)';
}

function change_numberUp(id){
    switch(id){
        case "uno":
            document.getElementById("uno").style.backgroundColor    = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="1";
        break;
        case "dos": 
            document.getElementById("dos").style.backgroundColor    = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="2";
        break;
        case "tres":
            document.getElementById("tres").style.backgroundColor   = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="3";
        break;
        case "cuatro":
            document.getElementById("cuatro").style.backgroundColor = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="4";
        break;
        case "cinco":
            document.getElementById("cinco").style.backgroundColor  = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="5";
        break;        
        case "seis":
            document.getElementById("seis").style.backgroundColor   = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="6";
        break;
        case "siete":
            document.getElementById("siete").style.backgroundColor  = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="7";        
        break;        
        case "ocho":
            document.getElementById("ocho").style.backgroundColor   = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="8";        
        break;
        case "nueve":
            document.getElementById("nueve").style.backgroundColor  = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="9";
        break;
        case "cero":
            document.getElementById("cero").style.backgroundColor   = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+="0";
        break;
        case "punto":
            document.getElementById("punto").style.backgroundColor  = 'rgb(42,42,42)';
            document.getElementById("pantalla").value+=",";
        break;
    }    
}

