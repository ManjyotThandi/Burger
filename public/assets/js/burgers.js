$(function(){
    $("#button").on("click", function(event){
        event.preventDefault();
        typeOfBurger = {burger_name: $(burgerType).val()}

        $.ajax("/api/burger", {
            type: "POST",
            data: typeOfBurger
        }).then(
            function(){
                console.log("Added in Burger!")
                //location.reload();
            }
        );
    });
})