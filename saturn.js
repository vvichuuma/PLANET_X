function saturn(){


   alert("Happy journey to saturn. The distance to Saturn from our planet is constantly changing as both of the planets travel through space. When the two are closest, they lie approximately 746 million miles (1.2 billion kilometers) apart, or eight times the distance between the Earth and the sun");

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