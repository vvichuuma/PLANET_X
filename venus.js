function venus(){


  alert("Happy journey to Venus. At its farthest, Venus lies 162 million miles (261 million kilometers) away, according to NASA. On average, it is 25 million miles (40 million km) away at this point, though it can reach as close as 24 million miles (38 million km).")



s

}

function home(){
	alert("This app was created by Vishnu")
	window.location = "home.html";
}


function bg(){
  
var btn = document.getElementById("bt");




  if (document.body.style.backgroundPosition == "center center") {
    
       console.log("now it is right");
       document.body.style.backgroundPosition = "";

  }else{
      
      document.body.style.backgroundPosition = "center";
      console.log("now it is center");

  }; 



}