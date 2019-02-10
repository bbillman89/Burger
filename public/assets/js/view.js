
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
        devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
        }).then(
        function() {
            console.log("changed devoured to", newDevoured);
            location.reload();
        }
        );
    });

    $("#create-burger").on("click", function(event) {
        event.preventDefault();

        let newBurger = {
        burger_name: $("#burg-name").val().trim(),
        };

        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("new burger added");
            location.reload();
        }
        );
        $("#form")[0].reset();
    });

});
  