function valueMinus(){
	var getValueForItemNo2 = document.getElementById('howmany').value--;
if(getValueForItemNo2<1){
	getValueForItemNo2 = document.getElementById('howmany').value = '0';
}
}

function newnewValuePLus(){
	var getValueForItemNo1 = document.getElementById('howmany').value++;
	if(getValueForItemNo1>99){
		getValueForItemNo1 = document.getElementById('howmany').value = '100';
	}
}


$(document).ready( function(){
	var pgtitle = document.title;

if(pgtitle.includes('Pet') && pgtitle.includes('Product')){
document.querySelector('.breadcrumb').innerHTML = '<a class="breadcrumb-item" href="../index.html">Homepage</a><a class="breadcrumb-item" href="../petbottles.html">Pet Bottles</a><a class="breadcrumb-item">'+pgtitle+'</a>';
}

else if(pgtitle.includes('Polycarbonate') && pgtitle.includes('Product')){
document.querySelector('.breadcrumb').innerHTML = '<a class="breadcrumb-item" href="../index.html">Homepage</a><a class="breadcrumb-item" href="pcbottles.html">Polycarbonate Bottles</a><a class="breadcrumb-item">'+pgtitle+'</a>';
}

else if(pgtitle!='Home'){

    document.querySelector('.breadcrumb').innerHTML = '<a class="breadcrumb-item" href="index.html">Homepage</a><a class="breadcrumb-item">'+pgtitle+'</a>';
}

else{
	 document.querySelector('.breadcrumb').innerHTML = '<a class="breadcrumb-item" href="index.html">Homepage</a><a class="breadcrumb-item">'+pgtitle+'</a>';
}


})