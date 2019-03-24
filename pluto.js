function pluto(){


 alert("Happy journey to pluto. The planets in the solar system travel in elliptical orbits rather than perfect circles, and so the distances between them are constantly changing. At its most distant, when the two bodies are on the opposite sides of the sun from one another, Pluto lies 4.67 billion miles (7.5 billion kilometers) from Earth.");

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