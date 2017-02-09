// Urutan warna yang akan diimplementasikan
// sebagai warna icon sidebar.
// Dapat ditambah atau diubah urutan sesuka hati.

var color = ['#FF7373', '#BF73FF', '#7A73FF', '#739EFF','#73C9FF', '#F5BB5F', '#FF9F89'];

// PENTING!
// Ini adalah kode jQuery yang diperlukan untuk 
// men-generate warna icon sidebar secara otomatis.

$(document).ready(function(){
	icon_color();
	sidebar_toggle();
});

function icon_color()
{
	var index = 0;

	$(".sidebar-nav > li[class!='active'] > a > i").each(function(){
		$(this).css('color', color[index]);
		index = (index >= color.length - 1) ? 0 : index + 1;
	});
}

function sidebar_toggle()
{
	$(".sidebar-toggle").click(function(e){
		e.preventDefault();
		$("#wrapper").toggleClass('sidebar-show');
	});
}