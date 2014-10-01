$(document).ready(function(){

    //CREO VARIABLES DE LOS ELEMENTOS
    var $parrafo = $(".paragraph");
    var $header = $("ul li a")
    
    
    //OCULTO PÁRRAFO
    $parrafo.hide();
    
    //MUESTRO EL PRIMERO
    $('.paragraph:first').show();
    
    //ON CLICK
    $header.click(function(e){
        e.preventDefault();
        $parrafo.slideUp("$parrafo");
        $(this).siblings().slideDown("$parrafo");
        
        $header.removeClass(".active");
        $(this).addClass(".active");
        
    });
    
    
});