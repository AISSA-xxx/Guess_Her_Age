/*var btn=document.querySelector("Age16");
var btn=document.querySelector("Age16");
var btn=document.querySelector("Age16");
var btn=document.querySelector("Age16");
var btn=document.querySelector("Age16");*/


var btnnext=document.querySelector("#next");
var testText=document.querySelector("#testText");
var ages=document.querySelector("#Ages").getElementsByTagName("input");
var myages=document.querySelector("#Ages");


var choisebtn;
var numpic=0;
var numpicVer=0;
var notesTrue=0;
let pics = ["pic1", "pic2", "pic3","pic4", "pic5", "pic6","pic7", "pic8", "pic9"];


myages.addEventListener("click",selectItem);

function selectItem(n)
{
 if (n.target.nodeName == "INPUT")
 {
  for (var i = 0; i < ages.length; i++) 
  {
   ages[i].classList.remove("selacted");
   ages[i].classList.remove("trueSelect");
   ages[i].classList.remove("falseSelect");
  }
  numpicVer++;
  n.target.classList.add("selacted");
  choisebtn=n.target.name;
  switchReponse();
 }
}

const switchReponse = () => 
{
	if (numpic==0 || numpic==6 || numpic==8)
	{
      corrReponse("0");
	}
	else if (numpic==1 || numpic==3 || numpic==5) 
	{
      corrReponse("3");
	}
	else if (numpic==2 || numpic==4)
	{
      corrReponse("1");
	}
	else
	{
	 corrReponse("6");	
	}
}

const corrReponse = (numberCorr) => 
{
 if(choisebtn==numberCorr)
 {
  ages[numberCorr].classList.add("trueSelect");
  notesTrue++;
 }
 else
 {
  ages[numberCorr].classList.add("trueSelect");
  ages[choisebtn].classList.add("falseSelect");
 }
}



btnnext.addEventListener("click",trueOrFalse);

function trueOrFalse(n)
{
 numpic++;
 if (numpicVer == numpic)
 {
  if (numpic==9)
  {
   numpic=0;
   alertResults();
   notesTrue=0;
   setTimeout(function()
   {
      window.location.reload();
   }, 5000);
  }
  else
  {
   document.getElementById('banniere_image').style.backgroundImage="url("+pics[numpic]+".png)";
   for (var i = 0; i < ages.length; i++) 
   {
    ages[i].classList.remove("selacted");
    ages[i].classList.remove("trueSelect");
    ages[i].classList.remove("falseSelect");
   }
  }
 }
 else
 {
  alert("OPPS!\r"+"Please Answer The Question Before Going To The Next!!!");
  numpic--;
 }
}

const alertResults = () => 
{
 if(notesTrue<5)
 {
  alert("You Scored : "+notesTrue+"/10\r"+"You Lack A Lot Of Experience");
 }
 else if(notesTrue>=5 && notesTrue<8)
 {
  alert("You Scored : "+notesTrue+"/10\r"+"Good Job");
 }
 else
 {
  alert("You Scored : "+notesTrue+"/10\r"+"WOW!! You Are Genius");
 }
}



