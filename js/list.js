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

var showList = true;
var showNew = false;

function deploylist() {
    for(let i=0; i<list.length; i++){
        document.getElementById('table-body').innerHTML += 
        '<div class="table-row display-flex justify-center">'+
         '<div class="border id">' + (i+1) + '</div>'+
         '<div class="border name text-left">'+ list[i] +'</div>' +
         '</div>';
    }
}
function clearlist() {
    document.getElementById('table-body').innerHTML = '';
}
function clearlist1() {
    document.getElementById('col1').innerHTML = '';
    document.getElementById('col2').innerHTML = '';
}
function showlist() {
    let button = document.getElementById('showlist');
    let list = document.getElementById('list');

    if(showList){
        list.style.display='none';
        button.innerText = 'Mostrar Lista';
        showList=false;
    }else{
        list.style.display='block';
        button.innerText = 'Ocultar Lista';
        showList=true;
    }
}

function showNewInput() {
    let New = document.getElementById('New');
    if(showNew){
        New.style.display='none';
        showNew=false;
    }else{
        New.style.display='block';
        showNew=true;
    }

}
function generateList(){
    var salio=[];
    var i=0;
    var listSize =  list.length;
    while(salio.length < listSize){
        var nuevo = parseInt(Math.random()*listSize);
        if(salio.indexOf(list[nuevo]) != -1){
            console.log('ya salio');
        }else{
            salio.push(list [nuevo]);             
        }
    }
    clearlist1();
    Mostrar(salio);
}
function Mostrar(salio){
    for(var i=0;i<list.length;i++){
        document.getElementById('col1').innerHTML += 
        '<div class="border margen letra">'+list[i]+'</div>';

        document.getElementById('col2').innerHTML += 
        '<div class="border margen letra">'+salio[i]+'</div>';
    }
}


deploylist();
var index = 0;

function addEvent() {
    $(".table-row").click(function() {
        index = parseInt(this.getElementsByClassName('id')[0].innerText);
        $('.table-row').removeClass('selected');
        $(this).addClass('selected');
        $('#remove').removeAttr('disabled');
      });
}
addEvent();

function deleteElement() {
    var deleted = list.splice(index-1, 1);
    alert('Persona Eliminada Corectamente');
    clearlist();
    deploylist();
    $('#remove').attr('disabled', 'true');
    addEvent();
}

function addNew() {
    let name = document.getElementById('NewName');

    if(name.value != ""){
        list.push(name.value.toUpperCase());
        name.value = "";
        alert('Persona Agregada Corectamente');
        clearlist();
        deploylist();
        addEvent();
    }else {
        alert('El campo Nombre esta vacio');
    }
}