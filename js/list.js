var list = [
    "ALI PINZON WILSON ALBERTO",
    "ARDILA ARRIETA ADRIAN ANDRES",
    "ARIZA CANTILLO JUAN CARLOS",
    "BLANCO MARTINEZ JANER JOSE",
    "BUITRAGO TABARES JEAN PAUL",
    "CANDELARIO GUERRERO GABRIEL ALFONSO",
    "DE LA CRUZ OROZCO RICARDO ANDRES",
    "DE LA VALLE ACUÑA JOSE DAVID",
    "FERRER MARCONY JERSON DAVID",
    "FIGUEREDO ORTIZ PEDRO ANDRES",
    "FONTALVO ORTIZ DANIEL DAVID",
    "GONGORA AMAYA EDWIN",
    "JIMENEZ ALVAREZ HOLMAN JOSE",
    "JIMENEZ RINCON DANIEL FERNANDO",
    "JULIO SIERRA ERIK HARNER",
    "MARQUEZ HINOJOSA YORMARYS",
    "MEDINA HURTADO RONALDO ALFREDO",
    "MENDOZA VIVES GERARDO RAFAEL",
    "MUÑOZ BECERRA GUSTAVO ANTONIO",
    "NOSSA BARRIOS MICHAEL JOSE",
    "PEREA PIMIENTA ELVER YESID",
    "POLO PRADA ERNESTO FELIPE",
    "QUIÑONEZ NIER ADRIAN ORLANDO",
    "RAMIREZ MARADEY GABRIEL ENRIQUE",
    "RANGEL RINCON RICARDO",
    "RUBIO CASTELLANOS JOHN STEVEN",
    "SALCEDO CASSIANNI RAUL ESTEBAN",
    "SERRANO ROMERO DANIEL ALFONSO",
    "TANG CANTILLO JULIO CESAR",
    "VARELA MERCADO CARLOS ANDRES"
];
var show = true;

function deploylist() {
    for(let i=0; i<list.length; i++){
        document.getElementById('table').innerHTML += 
        '<div class="table-row display-flex justify-center">'+
         '<div class="border id">' + (i+1) + '</div>'+
         '<div class="border name text-left">'+ list[i] +'</div>' +
         '</div>';
    }
}
function clearlist() {
        document.getElementById('table').innerHTML = 
        /*'<div class="table-header display-flex justify-center">'+
        '<div class="text-center border id">'+
        '<h3>Id</h3>'+
        '</div>'+
        '<div class="text-center border id">'+
        '<h3>Nombre</h3>'+
        '</div>'+
        '</div>'+*/
        '<div class="table-row display-flex justify-center">'+
         '<div class="border id">' + '</div>'+
         '<div class="border name text-left">' + '</div>' +
         '</div>';
}
function showlist() {
    let button = document.getElementById('showlist');
    let list = document.getElementById('list');

    if(show){
        list.style.display='none';
        button.innerText = 'Mostrar Lista';
        show=false;
    }else{
        list.style.display='block';
        button.innerText = 'Ocultar Lista';
        show=true;
    }
}

deploylist();

$( ".table-row" ).click(function() {
    var index = parseInt(this.getElementsByClassName('id')[0].innerText);
    console.log(index-1);
    list.splice(index-1, 1);
    console.log(list);
    clearlist();
    deploylist();
  });