//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=5; scoreDec=2;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#2E637C"; colorButton="#FFFFFF"; colorText="#000000"; colorSele="#C77320";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=1; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicitaciones "; messageTime="El tiempo a terminado"; messageError="Respuesta incorrecta"; messageErrorG="Respuesta incorrecta"; messageAttempts="Supero el número de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYW4x"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","Rg","","","",""],["","","","","","","Qg","Tw","RA","WQ","",""],["","","","","","","","Tw","","","",""],["","","","","","","","VA","","","","Vw"],["","","","","","","","RQ","","","","SQ"],["","","Qg","QQ","Qw","Sw","Rw","Ug","Tw","VQ","Tg","RA"],["","","","Ug","","","","","","","","VA"],["Uw","RQ","Qw","VA","SQ","Tw","Tg","","","","","SA"],["","","","SQ","","","","","","","",""],["","","","Qw","","","","","","","",""],["","","","RQ","","","","","","","",""]];
var x1=[8,4,1,7,12];
var y1=[1,6,8,2,4];
var x2=[8,4,7,10,12];
var y2=[6,11,8,2,8];
var imaCW=["","","","",""];
var audioCW=["","","","",""];
var defCW=["Define un pie de pagina.","Define un elemento independiente en la página, ejemplo una noticia.","Este elemento representa una sección de un documento o aplicación.","Representa el contenido de un documento HTML.","Define el tamaño de un objeto o  elemento."];
var colNum=12;
var rowNum=11;
