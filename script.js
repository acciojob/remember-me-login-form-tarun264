//your JS code here. If required.
document.getElementById("login-form").addEventListener("submit",function (event) {
	event.preventDefault();
const username=document.getElementById("Username").value;
const password=document.getElementById("Password").value;
	const remember=document.getElementById("rememberMe").checked;

	if(remember){
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
	}
	else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
});