



window.onload = function(){

     var ans = localStorage.getItem('name');

	console.log(ans);

	document.getElementById("header").innerHTML = "Welcome " + ans;


}


function engine(){

   var planet = document.getElementById("music").value; 
   console.log(planet);

    if(planet == "default"){

    	alert("Please select a planet");
    }else{

         if(planet == "mercury"){
  
     window.location = "mercury.html";

  }else if(planet == "venus"){

  	  window.location = "venus.html";

  }else if(planet == "earth"){
     
     window.location = "earth.html";

  }else if(planet == "mars"){
     
     window.location = "mars.html";

  }else if(planet == "jupiter"){
     
     window.location = "jupiter.html";

  }else if(planet == "saturn"){
     
     window.location = "saturn.html";

  }else if(planet == "uranus"){
     
     window.location = "uranus.html";

  }else if(planet == "neptune"){
     
     window.location = "neptune.html";

  }else if(planet == "pluto"){
     
     window.location = "pluto.html";

  }




    }






}

