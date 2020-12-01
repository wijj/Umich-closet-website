//function test(){
    //document.getElementById('h1').style.visibility='visible';
    //document.querySelector('.o1').style.visibility='visible';
    //console.log('made images')
    //setTimeout(function() {
       // document.getElementById('h1').style.visibility='hidden';
       // document.querySelector('.o1').style.visibility='hidden';
      //}, 500);
//};
function update(){
    if (window.matchMedia("(min-width: 800px)").matches & window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        console.log('changed');
        document.getElementById('toadd').innerHTML+=' (Hover!!!)'
        // credit to https://stackoverflow.com/questions/55121685/how-to-disable-javascript-code-in-mobile-version for if statement
        //also to https://www.joshwcomeau.com/react/prefers-reduced-motion/
    }
    else{
        console.log('nochange');
    };
};
if(window.matchMedia("(min-width: 800px)").matches & window.matchMedia('(prefers-reduced-motion: no-preference)').matches){
    console.log('bigscreen');
    $(document).ready(function(){
        $(".shirt1i").hover(function(){
          $('.shirt1').css('transition', 'opacity .5s ease-in-out .5s, margin 1s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h1').css("visibility", "visible");
          $('.o1').css("visibility", "visible");
          $('#h1').css("opacity", "1");
          $('.o1').css("opacity", "1");
          $('.shirt1').css("visibility", "visible");
          $('.shirt1').css("opacity", "1");
          $('.shirt1i img').css('margin', '50px 0 0 0');
          $('.shirt1i h3').css('margin', '10vw 0 0 0');
          $('.shirt1i div').css('margin', '50px 0 0 0');
          $('.shirt1').css('margin', '0 auto 0 0');
          }, function(){
          $('#h1').css("visibility", "hidden");
          $('.o1').css("visibility", "hidden");
          $('.shirt1').css('transition', 'opacity .1s ease-in-out, margin 2s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h1').css("opacity", "0");
          $('.o1').css("opacity", "0");
          $('.shirt1').css("visibility", "hidden");
          $('.shirt1').css("opacity", "0");
          $('.shirt1i img').css('margin', '0 0 0 0');
          $('.shirt1i h3').css('margin', '4vw 0 0 0');
          $('.shirt1i div').css('margin', '-200px 0 0 0');
          $('.shirt1').css('margin', ' -70px 0 0 0');
        });
      });
      $(document).ready(function(){
        $(".shirt2i").hover(function(){
          $('.shirt2').css('transition', 'opacity .5s ease-in-out .5s, margin 1s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h2').css("visibility", "visible");
          $('.o2').css("visibility", "visible");
          $('#h2').css("opacity", "1");
          $('.o2').css("opacity", "1");
          $('.shirt2').css("visibility", "visible");
          $('.shirt2').css("opacity", "1");
          $('.shirt2i img').css('margin', '50px 0 0 0');
          $('.shirt2i h3').css('margin', '10vw 0 0 0');
          $('.shirt2i div').css('margin', '50px 0 0 0');
          $('.shirt2').css('margin', '0 auto 0 0');
          }, function(){
          $('#h2').css("visibility", "hidden");
          $('.o2').css("visibility", "hidden");
          $('.shirt2').css('transition', 'opacity .1s ease-in-out, margin 2s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h2').css("opacity", "0");
          $('.o2').css("opacity", "0");
          $('.shirt2').css("visibility", "hidden");
          $('.shirt2').css("opacity", "0");      
          $('.shirt2i img').css('margin', '0 0 0 0');
          $('.shirt2i h3').css('margin', '4vw 0 0 0');
          $('.shirt2i div').css('margin', '-200px 0 0 0');
          $('.shirt2').css('margin', '-70px 0 0 0');
    
        });
      });
      $(document).ready(function(){
        $(".shirt3i").hover(function(){
          $('#h3').css("visibility", "visible");
          $('.shirt3').css('transition', 'opacity .5s ease-in-out .5s, margin 1s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('.o3').css("visibility", "visible");
          $('#h3').css("opacity", "1");
          $('.o3').css("opacity", "1");
          $('.shirt3').css("visibility", "visible");
          $('.shirt3').css("opacity", "1");
          $('.shirt3i img').css('margin', '50px 0 0 0');
          $('.shirt3i h3').css('margin', '10vw 0 0 0');
          $('.shirt3i div').css('margin', '50px 0 0 0');
          $('.shirt3').css('margin', '0 auto 0 0');
    
          }, function(){
          $('#h3').css("visibility", "hidden");
          $('.o3').css("visibility", "hidden");
          $('.shirt3').css('transition', 'opacity .1s ease-in-out, margin 2s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h3').css("opacity", "0");
          $('.o3').css("opacity", "0");
          $('.shirt3').css("visibility", "hidden");
          $('.shirt3').css("opacity", "0");
          $('.shirt3i img').css('margin', '0 0 0 0');
          $('.shirt3i h3').css('margin', '4vw 0 0 0');
          $('.shirt3i div').css('margin', '-200px 0 0 0');
          $('.shirt3').css('margin', '-70px 0 0 0');
    
        });
      });
      $(document).ready(function(){
        $(".shirt4i").hover(function(){
          $('.shirt4').css('transition', 'opacity .5s ease-in-out .5s, margin 1s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h4').css("visibility", "visible");
          $('.o4').css("visibility", "visible");
          $('#h4').css("opacity", "1");
          $('.o4').css("opacity", "1");
          $('.shirt4').css("visibility", "visible");
          $('.shirt4').css("opacity", "1");
          $('.shirt4i img').css('margin', '50px 0 0 0');
          $('.shirt4i h3').css('margin', '10vw 0 0 0');
          $('.shirt4i div').css('margin', '50px 0 0 0');
          $('.shirt4').css('margin', '0 auto 0 0');
    
          }, function(){
          $('#h4').css("visibility", "hidden");
          $('.o4').css("visibility", "hidden");
          $('.shirt4').css('transition', 'opacity .1s ease-in-out, margin 2s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h4').css("opacity", "0");
          $('.o4').css("opacity", "0");
          $('.shirt4').css("visibility", "hidden");
          $('.shirt4').css("opacity", "0");
          $('.shirt4i img').css('margin', '0 0 0 0');
          $('.shirt4i h3').css('margin', '4vw 0 0 0');
          $('.shirt4i div').css('margin', '-200px 0 0 0');
          $('.shirt4').css('margin', '-70px 0 0 0');
        });
      });
      $(document).ready(function(){
        $(".shirt5i").hover(function(){
          $('.shirt5').css('transition', 'opacity .5s ease-in-out .5s, margin 1s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h5').css("visibility", "visible");
          $('.o5').css("visibility", "visible");
          $('#h5').css("opacity", "1");
          $('.o5').css("opacity", "1");
          $('.shirt5').css("visibility", "visible");
          $('.shirt5').css("opacity", "1");
          $('.shirt5i img').css('margin', '50px 0 0 0');
          $('.shirt5i h3').css('margin', '10vw 0 0 0');
          $('.shirt5i div').css('margin', '50px 0 0 0');
          $('.shirt5').css('margin', '0 auto 0 0');
    
          }, function(){
          $('#h5').css("visibility", "hidden");
          $('.o5').css("visibility", "hidden");
          $('.shirt5').css('transition', 'opacity .1s ease-in-out, margin 2s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h5').css("opacity", "0");
          $('.o5').css("opacity", "0");
          $('.shirt5').css("visibility", "hidden");
          $('.shirt5').css("opacity", "0");
          $('.shirt5i img').css('margin', '0 0 0 0');
          $('.shirt5i h3').css('margin', '4vw 0 0 0');
          $('.shirt5i div').css('margin', '-200px 0 0 0');
          $('.shirt5').css('margin', '-70px 0 0 0');
    
        });
      });
      $(document).ready(function(){
        $(".shirt6i").hover(function(){
          $('.shirt6').css('transition', 'opacity .5s ease-in-out .5s, margin 1s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h6').css("visibility", "visible");
          $('.o6').css("visibility", "visible");
          $('#h6').css("opacity", "1");
          $('.o6').css("opacity", "1");
          $('.shirt6').css("visibility", "visible");
          $('.shirt6').css("opacity", "1");
          $('.shirt6i img').css('margin', '50px 0 0 0');
          $('.shirt6i h3').css('margin', '10vw 0 0 0');
          $('.shirt6i div').css('margin', '50px 0 0 0');
          $('.shirt6').css('margin', '0 auto 0 0');
    
          }, function(){
          $('.shirt6').css('transition', 'opacity .1s ease-in-out, margin 2s ease-in-out .1s, visibility 1s ease-in-out .5s');
          $('#h6').css("visibility", "hidden");
          $('.o6').css("visibility", "hidden");
          $('#h6').css("opacity", "0");
          $('.o6').css("opacity", "0");
          $('.shirt6').css("visibility", "hidden");
          $('.shirt6').css("opacity", "0");
          $('.shirt6i img').css('margin', '0 0 0 0');
          $('.shirt6i h3').css('margin', '4vw 0 0 0');
          $('.shirt6i div').css('margin', '-200px 0 0 0');
          $('.shirt6').css('margin', '-70px 0 0 0');
        });
      });
}
else{
    console.log('smallscreen');
};
