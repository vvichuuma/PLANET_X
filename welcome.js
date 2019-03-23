



window.onload = function(){

     var ans = localStorage.getItem('name');

	console.log(ans);

	document.getElementById("header").innerHTML = "Welcome " + ans;


}