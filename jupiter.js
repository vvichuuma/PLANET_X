function jupiter(){


    alert("Happy journey to Jupiter. Because both planets travel in an elliptical path around the sun, Jupiter's distance from Earth is constantly changing. When the two planets are at their closest point, the distance to Jupiter is only 365 million miles (588 million kilometers).");

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