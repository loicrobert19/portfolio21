jQuery(document).ready(function() {

    // Quand on clique sur la fenêtre
    // On cache toutes les popup détails
    document.body.addEventListener("click", () => 
    {
        const div_list = document.getElementsByName("popup");   

        for(i = 0; i < div_list.length; i++)
        {
            div_list[i].style.display = "none";
        }
    }, true);

    
    // Quand on clique sur le liens détails infos 
    // On affiche la popup correspondante
    $("#details-infos").on("click", function(event){
        event.preventDefault();
        $("#popup-infos").css("display", "block")
    });

    $("#details-competences").on("click", function(event){
        event.preventDefault();
        $("#popup-competences").css("display", "block")
    });

    $("#details-experiences").on("click", function(event){
        event.preventDefault();
        $("#popup-experiences").css("display", "block")
    });


    $("#details-passions").on("click", function(event){
        event.preventDefault();
        $("#popup-passions").css("display", "block")
    });

    $("#details-diplomes").on("click", function(event){
        event.preventDefault();
        $("#popup-diplomes").css("display", "block")
    });
    

});
