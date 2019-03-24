function uranus(){


    alert("Happy journey to Uranus. Because the solar system is in constant motion, the distance between Earth and Uranus changes daily. The closest the two get is 1.6 billion miles (2.6 billion kilometers). At their farthest, they are separated by 1.98 billion miles (3.2 billion km).");

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