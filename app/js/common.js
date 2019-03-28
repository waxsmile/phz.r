$(function() {



$("#my-menu").mmenu({
	extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
	navbar:{
		title: "Меню"
	},
});

	var api = $("#my-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").classList.toggle("on");
	});

$(".toggle-mnu").click(function() {
	var mmAPI = $("#my-menu").data( "mmenu" );
	mmAPI.open();
	$(this).toggleClass("on");
	$(".main-mnu").slideToggle();
	return false;
});




});

var toggle = document.querySelector('.toggle-mnu')
console.log(toggle);

toggle.onclick = function(){
	console.log('work')
	toggle.classList.toggle("on");
	return false;

}



