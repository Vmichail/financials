


var name='Vasileios Michail';
var display;
$(document).ready(function(){
    $("#june").click(function(){
        display = $("#jInfo").css("display")
        console.log("Display:"+display);
        if(display == "none"){
        $("#jInfo").css("display", "inline");
        }
        else if(display == "inline"){
            $("#jInfo").css("display", "none");
        }
    });
    $(".name").html(name);
    $(".goExpenses").click(function(){
        window.location.href = "expenses.html";
    }
    );
    $(".home").click(function(){
        window.location.href = "index.html";
    });
  });
