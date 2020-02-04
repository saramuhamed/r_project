
$("a").click(function(){
   let aHref = $(this).attr("href");
   $("body,html").animate({ scrollTop:$(aHref).offset().top-150},3000)
})
 // -------- left Side -------
$(".left .container_left .col-md-4 .open").click(function(){
   $(".left .container_left .col-md-4 .open").css({"left":"25px",})
   $(".left .container_left .col-md-8 #list").css({"display":"inline-block" ,"margin-top":"50px" , "transition":"display 3s"})
   $("#services").css({"margin-left":"50%"})
   $("#contacts").css({"margin-left":"50%"})
})

$(".left .container_left .col-md-8 #list i").click(function(){
   $(".left .container_left .col-md-8 #list").css({"display":"none" , "transition":"display 3s"})
   $(".left .container_left .col-md-4 .open").css({"left":"10px",})
   $("#services").css({"margin":"auto"})
   $("#contacts").css({"margin":"auto"})
})


$(".left .container_left .col-md-8 #list a").click(function(){
   $(this).next().slideToggle(1000);
   $(this).next().siblings(".left .container_left .col-md-8 #list .select").slideUp(1000);
})

// -------------- services --------------
$(".left .container_left .col-md-8 #list .select .service1").click(function(){
   $("#services .container #s1").css({"display":"inline-block"})
   $("#services .container #s2").css({"display":"none"})
   $("#services .container #s3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .service2").click(function(){
   $("#services .container #s1").css({"display":"none"})
   $("#services .container #s2").css({"display":"inline-block"})
   $("#services .container #s3").css({"display":"none"})
})

$(".left .container_left .col-md-8 #list .select .service3").click(function(){
   $("#services .container #s1").css({"display":"none"})
   $("#services .container #s2").css({"display":"none"})
   $("#services .container #s3").css({"display":"inline-block"})
})

// -------------- contacts --------------
$(".left .container_left .col-md-8 #list .select .contact1").click(function(){
   $("#contacts .container #c1").css({"display":"inline-block"})
   $("#contacts .container #c2").css({"display":"none"})
   $("#contacts .container #c3").css({"display":"none"})
})
$(".left .container_left .col-md-8 #list .select .contact2").click(function(){
   $("#contacts .container #c1").css({"display":"none"})
   $("#contacts .container #c2").css({"display":"inline-block"})
   $("#contacts .container #c3").css({"display":"none"})
})
$(".left .container_left .col-md-8 #list .select .contact3").click(function(){
   $("#contacts .container #c1").css({"display":"none"})
   $("#contacts .container #c2").css({"display":"none"})
   $("#contacts .container #c3").css({"display":"inline-block"})
})

$(document).ready(function() {
   $("c1").validate({
     rules: {
       name : {
         required: true,
         minlength: 2
       },
       email: {
         required: true,
         email: true
       },
       phone :{
         matches:"[0-9]+",
         minlength:10,
          maxlength:10

       },
      }
     })
   });

$(document).ready(function() {
   $("c2").validate({
     rules: {
       name : {
         required: true,
         minlength: 2
       },
       email: {
         required: true,
         email: true
       },
       phone :{
         matches:"[0-9]+",
         minlength:10,
          maxlength:10

       },
      }
     })
   });
$(document).ready(function() {
   $("c3").validate({
     rules: {
       name : {
         required: true,
         minlength: 2
       },
       email: {
         required: true,
         email: true
       },
       phone :{
         matches:"[0-9]+",
         minlength:10,
          maxlength:10

       },
      }
     })
   });