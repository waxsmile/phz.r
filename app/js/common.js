$(function() {



$("#my-menu").mmenu({
	navbar:{
		title: "Меню"
	}
});

// $(".toggle-mnu").click(function() {

// 	$(this).toggleClass("on");
// 	$(".main-mnu").slideToggle();
// 	return false;
// });




});

var toggle = document.querySelector('.toggle-mnu')
var mnu = document.querySelector('.d-md-none')
var topMenu = document.querySelector('nav')
console.log(toggle);

toggle.onclick = function(){
	console.log('work')
	toggle.classList.toggle("on");
	toggle.classList.toggle("abs");
	mnu.classList.toggle("block");
	topMenu.classList.add("mobile");
	return false;

}


