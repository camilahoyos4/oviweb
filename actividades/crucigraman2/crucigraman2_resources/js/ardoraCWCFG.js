//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#6B4141"; colorButton="#FFDCC0"; colorText="#000000"; colorSele="#9B7E6C";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Crucigrama completado"; messageTime="El tiempo a finalizado"; messageError="Incorrecto"; messageErrorG="Incorrecto"; messageAttempts="A suerado el limite de intetos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYW4y"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","UA","","","","","",""],["","","","","","Tw","","","","","",""],["","Qw","TA","QQ","Uw","Uw","","","","","",""],["","","","","","SQ","TQ","Rw","","SA","",""],["","","","","","VA","","","","RQ","",""],["","","","","RA","SQ","Uw","UA","TA","QQ","WQ",""],["","","","","","Tw","","","","RA","",""],["Qg","VQ","VA","VA","Tw","Tg","","","","RQ","",""],["","","SQ","","","","","","SA","Ug","RQ","Rg"],["","","VA","","","","","","","","",""],["","","TA","","","","","","","","",""],["","","RQ","","","","","","","","",""]];
var x1=[2,6,5,1,9,6,10,3];
var y1=[3,4,6,8,9,1,4,8];
var x2=[6,8,11,6,12,6,10,3];
var y2=[3,4,6,8,9,8,9,12];
var imaCW=["","","","","","","",""];
var audioCW=["","","","","","","",""];
var defCW=["Funciona como selector de clases de estilo en las etiquetas  HTML.","Esta etiqueta permite mostrar una imagen en la pagina web.","Es una de las propiedades de CSS, y una de sus funciones es permitir controlar si un objeto se carga o visualiza en la página.","Se utiliza pa crear botones.","Permite generar un vínculo o en las a una URL externa o interna.","Permite definir el tipo de posición de un elemento y su comportamiento.","Este elemento se usa para definir un encabezado de alguna parte de una página Web","Esta etiqueta define un título y es obligatoria dentro de la sección head."];
var colNum=12;
var rowNum=12;
