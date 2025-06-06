// Sticky navigation
let navbar=$(".navbar");//stored navbar in let variable
$(window).scroll(function(){                           // call jQueury object by $
    let oTop=$(".section-2").offset().top-window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addClass("sticky");
    }else{
        navbar.removeClass("sticky");
    }                                                                  //offset allows us to retrieve the current posiion if the element relating to the document 
     
})
// counter animarion
let nCount=function(selector){
    $(selector).each(function(){
    $(this).animate(
        {
            Counter:$(this).text()
           },
            {
                duration:4000,
                easing:"swing",
                step:function(value){
                  $(this).text(Math.ceil(value));
                }
            }
    );
});
};
let a=0;
$(window).scroll(function(){
    let oTop=$(".numbers").offset().top-window.innerHeight;
    if(a==0 && $(window).scrollTop()>=oTop){

        a++;
        nCount(".rect>h1")
    }
})