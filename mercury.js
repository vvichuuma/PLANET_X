function data(){

    var ans = localStorage.getItem('name');

	console.log(ans);

	document.getElementById("header").innerHTML = ans;
}