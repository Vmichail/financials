


var name='Vasileios Michail';
$(document).ready(function(){
    $(".name").html(name);
    $("#Expenses").click(function(){
        window.location.href = "expenses.html";
    }
    );
    $(".home").click(function(){
        window.location.href = "index.html";
    });
  });
