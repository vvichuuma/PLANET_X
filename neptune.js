function neptune(){


  alert("Happy journey to Neptune. When Neptune and Earth line up on the same side of the sun, at their closest, they are only 2.7 billion miles (4.3 billon kilometers) apart. But when the planets are on opposite sides of the sun, they can put as many as 2.9 billion miles (4.7 billion km) between them.");

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