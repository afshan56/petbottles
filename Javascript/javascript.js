$("document").ready(function(){
    $('.stars5').html('<span class="fa fa-star"></span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>');
    $('.stars4').html('<span class="fa fa-star"></span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star text-dark"></span>');

$('.dtoggle').click(function(){

let getimg = $(this).find('img').attr('src');
let getStars = $(this).find("#getStars").html();
let getTitle = $(this).find('.card-title').html();
let getpdf = $(this).find('#getpdf').attr('content');
let getPrices = $(this).find('#getPrices').html();
let getSpecs = $(this).find('#getSpecs').html();

$('#showimg').attr('src',getimg);
$('#stars').html(getStars);
$('#ptitle').html(getTitle);
$('#pdfdown').attr('href',getpdf);
$('#theprice').html(getPrices);
$('#theSpecs').html(getSpecs);

$('#popupbox').fadeToggle();



});


$('#btnclose').click(function(){
    $('#popupbox').fadeToggle();

});

});







