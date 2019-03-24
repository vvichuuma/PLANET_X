function earth(){


    alert("Happy journey to earth. Home is always sweet");

}

function home(){
	alert("This app was created by Vishnu")
	window.location = "home.html";
}

function bg(){
  
var btn = document.getElementById("bt");

// btn.addEventListener('click' , function(){

     
//      if(document.body.style.backgroundPosition == "center center") {
//      	  document.body.style.backgroundPosition = "";
//      }else{
//      	document.body.style.backgroundPosition = "center";
//      	console.log(document.body.style.backgroundPosition);
//      }



// })


  if (document.body.style.backgroundPosition == "center center") {
    
       console.log("now it is right");
       document.body.style.backgroundPosition = "";

  }else{
      
      document.body.style.backgroundPosition = "center";
      console.log("now it is center");

  }; 



}