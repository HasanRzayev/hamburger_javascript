$(()=>{
  $("li").css({
    "display": "inline-block",
    "color": "#455f51",
    "font-size":20,
    "padding-left":8
  });
  $("#right ul").css("text-align", "left");

  $("#right a").css("text-decoration", "none");
  $("#right").css("float", "left");
  $("#over li").css("display", "block");
  $("#over a").css("text-decoration", "none");
  $("body").css("background-color","#e3ded1");
  $("#over").hide()

  var imageUrl = "../images/menu.webp";

  $("button").css({
 
    "height":"70",
    "width":"70",
   
    
  })
  $("button").text("\u2630")
  $("button").hide()
  $( window ).resize(function() {
    if($(window).width()<600){
      $("button").css({
        "margin-left":(($(window).width()/2)-70).toString()+"px",
        "margin-top":"30px",
       
      });
      $("button").show()
      $("#over").css({
        
        "margin-left":(($(window).width()/2)-110).toString()+"px",
      });
      $("#right").hide()
    }
    else{
      $("button").text("\u2630");
      $("button").css({
        "height":"70",  
        "width":"70"
        
      })
      $("button").hide() 
      $("#over").hide()
      $("#right").show()
    }
  });

  $("button").click(function() {

    $(this).text($(this).text() == "\u2715" ? "\u2630" : "\u2715");
    $("#over").toggle("visibility")
  });

  
    
});