$(document).ready(function(){
    var display=null;
    
    $(".border2").click(()=>{
        display = $(".allExpenses").css("display")
        console.log("Display:"+display);
        if(display == "none"){
        $(".allExpenses").css("display", "inline");
        }
        else if(display == "block"){
            $(".allExpenses").css("display", "none");
        }
    });
  });
