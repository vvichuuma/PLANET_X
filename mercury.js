function mercury(){


    alert("Happy journery to mercury.Mercury gets to within 77.3 million km away from the Earth. Light takes only 4.3 minutes to travel from the Earth to Mercury when they’re at their closest point.");

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