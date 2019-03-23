function goto2(){
 


 var name = document.getElementById("name").value; 
 console.log(name);

 localStorage.setItem('name' , name);

 window.location = "mercury.html" ;



}