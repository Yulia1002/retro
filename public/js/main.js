/***************** Menu navigation ******************/

var toggler = document.querySelector('#menuToggle'),
    menu = document.querySelector('#menuElement');
    toggler.onclick = function () {
        menu.classList.toggle('menu-shown');
    };

/***************** Smooth Scrolling ******************/

$('a[href*="#"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1500
    );
    }
  }
});
 
 /******************* fade-to-on-scroll ***********/

 $(document).ready(function() {   
    $(window).scroll( function(){   
        $('.iconHide').each( function(i){          
            var objectBottom  = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if( windowBottom > objectBottom  ){               
                if ($(this).css("opacity")==0) 
                {
                    $(this).fadeTo(1500,1);
                }                   
            }
            else{
                if ($(this).css("opacity")==1) 
                {
                    $(this).fadeTo(1500,0);
                }
            }           
        });   
    });   
});

