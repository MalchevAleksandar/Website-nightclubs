/**
 * Created by Aleksandar on 15.06.2016.
 */
$(document).ready(function(){


    var tags= [
        "Midnight",  "Marakana", "Paradiso", "XO","Stobi","Cinema","Sektor 909","Havana","Ciao"
    ];
    $("#search").autocomplete({
        source:tags
    });
    $("#btn-search").click(function(){
        var klub=$("#search").val();
        $("#search").val("");
        switch(klub) {
            case "Midnight":
                $(location).attr("href", "midnight.html") ;
                break;
            case "Marakana":
                $(location).attr("href", "marakana.html") ;
                break;
            case "Paradiso":
                $(location).attr("href", "paradiso.html") ;
                break;
            case "XO":
                $(location).attr("href", "XO.html") ;
                break;
            case "Sektor":
                $(location).attr("href", "sector.html") ;
                break;
            case "Havana":
                $(location).attr("href", "havana.html") ;
                break;
            case "Stobi":
                $(location).attr("href", "stobi.html") ;
                break;
            case "Cinema":
                $(location).attr("href", "cinema.html") ;
                break;
            case "Ciao":
                $(location).attr("href", "ciao.html") ;
                break;
        }
    });

    // Hide all the tooltips
    $("#jquery li").each(function() {
        $("a strong", this).css("opacity", "0");
    });

    $("#jquery li").hover(function() { // Mouse over
        $(this)
            .stop().fadeTo(500, 1)
            .siblings().stop().fadeTo(500, 0.2);

        $("a strong", this)
            .stop()
            .animate({
                opacity: 1,
                top: "-10px"
            }, 300);

    }, function() { // Mouse out
        $(this)
            .stop().fadeTo(500, 1)
            .siblings().stop().fadeTo(500, 1);

        $("a strong", this)
            .stop()
            .animate({
                opacity: 0,
                top: "-1px"
            }, 300);
    });

});