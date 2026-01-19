$(document).ready(function () {

   // $(this).scrollTop(0);
 
   $('html, body').animate({
        scrollTop: 0
        }, 1000);
 
    // Remove input text values on page refresh

    $(".cls-contact-div input").val('');

    // Header scroll functionality

    $(window).scroll(function () {
        var sticky = $('.cls-bm-header'),
            scroll = $(window).scrollTop();

        if (scroll >= 10) {
            sticky.addClass('fixed');
        }
        else {
            sticky.removeClass('fixed');

        }
    });

    

    // Courses hover expand functionality 

    $(document).on('mouseenter click', '.cls-courseinfo', '.cls-course-dropdown', function () {
        var popupContent = $('.cls-dropdown-container').find('.cls-course-dropdown');
        popupContent.addClass('show-popup');
        if ($(".cls-bm-header").hasClass('fixed')) {
             $(".cls-common-dropdown").css("top", "88px");
            $(".cls-dropdown-container .cls-course-dropdown").css("height", "calc(100vh - 100px)"); 
            $(".cls-bm-header").css("border-bottom","solid 1px #bebebe");
          
        }
        else {
            $(".cls-common-dropdown").css("top", "90px");
             $(".cls-bm-header").css("border-bottom","solid 1px #d7d7d7");
        }
    })

     if ($(".cls-bm-header").hasClass('fixed')) {
            $(".cls-bm-header").css("border-bottom","rgb(184, 172, 172)");
    }else{
        $(".cls-bm-header").css("border-bottom","solid 1px #d7d7d7");
    }

    $(document).on('mouseleave', '.cls-courseinfo', function () {
        $(".cls-course-dropdown").removeClass('show-popup');
    })


    $(document).on('mouseenter', '.cls-course-dropdown', function (e) {
        if (!e.target.classList.contains(".cls-course-dropdown")) {
            $(".cls-course-dropdown").addClass('show-popup');
        }
    });

    $(document).on('mouseleave', '.cls-course-dropdown', function (e) {
        if (!e.target.classList.contains(".cls-course-dropdown")) {
            $(".cls-course-dropdown").removeClass('show-popup');
        }
    });

    $(document).on('click', '#courseinfoHome', function () {
        window.location.href='pages/courses.html'; 
    })

    $(document).on('click', '#courseinfoInner', function () {
        window.location.href='courses.html'; 
    })

    $(".cls-navbar-toggle-icon").bind('click', function () {
        $(".cls-nav-items-hidden").css("display","block");
    });

    
    $(".close-sidebar").bind('click', function () {
        $(".cls-nav-items-hidden").css("display","none");
    });

    // Menu  navigation funtionality

    window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    }

     $(".cls-home").bind('click', function () {
        $(".cls-nav-items a:not(.cls-home)").removeClass("active");
        $(this).addClass("active");
      /* var target = $(".cls-home").attr('href'); 
        var offset = $(target).offset().top; 
        $('html, body').animate({
        scrollTop: offsetcls-explore
        }, 1000);*/
    }); 

     $(".cls-about").bind('click', function () {
       //event.preventDefault();
        $(".cls-nav-items a:not(.cls-about)").removeClass("active");
        $(this).addClass("active");
        
    });
    

    $('.cls-nav-items a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 98 + 'px',
                      }, 1000);
                      return false;
                  }
            }
        });

      
     $(".cls-explore").bind('click', function () {
       // event.preventDefault();
        $(".cls-nav-items a:not(.cls-explore)").removeClass("active");
        $(this).addClass("active");
    });

    $(".cls-advert").bind('click', function () {
    //event.preventDefault();
        $(".cls-nav-items a:not(.cls-advert)").removeClass("active");
        $(this).addClass("active");
    });

    $(".cls-workflow").bind('click', function () {
       // event.preventDefault();
        $(".cls-nav-items a:not(.cls-workflow)").removeClass("active");
        $(this).addClass("active");
    });

    $(".cls-contact").bind('click', function () {
        $(".cls-nav-items a:not(.cls-contact)").removeClass("active");
        $(this).addClass("active");
    });

    
    $("#coursesInfo, #coursesbookNow").bind('click', function () {
        window.location.href='pages/about_us.html'; 
    });

    $("#coursesInfo, #exploreMore").bind('click', function () {
        window.location.href='pages/courses.html'; 
    });

    $("#coursesInfo, #adSectionExplore").bind('click', function () {
        window.location.href='pages/services.html'; 
    });

    $(".cls-about").bind('click', function () {
      //  alert("hai");
       // window.location.href='../../index.html';
    });
    
    // Case study Button navigation functionality 

    $(".cls-DXU-casestudy-btn").on('click', function () {
        window.location.href='case_study_inner_DXU.html'; 
    })

    $(".cls-NGCX-casestudy-btn").on('click', function () {
        window.location.href='case_study_inner_NGCX.html'; 
    })

     $(".cls-back-to-project").on('click', function () {
        window.location.href='case_study.html'; 
    })

    

   
    // Numbers changing funtionality

    var sectionCheck = document.querySelector('.cls-assistdetails');
    var hasEntered = false;

    window.addEventListener('scroll', (e) => {
        var shouldAnimate = (window.scrollY + window.innerHeight) >= sectionCheck.offsetTop;

        if (shouldAnimate && !hasEntered) {
            hasEntered = true;

            $('.cls-assistdetails .value').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

        }
    });

   // Boxes animate funtionality

   var $window = $(window);

   function checkView() {
       var window_height = $window.height();
       var window_top_position = $window.scrollTop();
       var window_bottom_position = (window_top_position + window_height);

       $('.cls-process-section-details,.cls-card-button,.cls-about-inner,.cls-productinfo,.cls-info-div,.cls-contact-section,.cls-abt-divider,.cls-process-more,.cls-right-content,.cls-ad-info,.cls-contact,.cls-testimonial,.cls-footer-col,.cls-testimonials-div,.cls-contact-wrapper,.cls-ad,.cls-ad-section-more, .cls-explore,.cls-explore-more,.cls-aboutus,.cls-continue,.cls-rt-content-details,.cls-left-content').each(function () {
           var $element = $(this);
           var element_height = $element.outerHeight();
           var element_top_position = $element.offset().top;
           var element_bottom_position = (element_top_position + element_height);

           if ((element_bottom_position >= window_top_position) &&
               (element_top_position <= window_bottom_position)) {
               $element.addClass('transform-view');
           } else {
               $element.removeClass('transform-view');
           }
       });

   }

   $(".cls-casestudy-btn").on('click',function(){
     $('html,body').animate({
        scrollTop: $("#case-study-1").offset().top - 100 },
        'slow');
   })
   

   $window.on('scroll resize', checkView);
   $window.trigger('scroll');



    /* Testimonials scroll functionality */

    $('.cls-testimonials-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });

    // Footer navigation

    $("#aboutUs").click(function () {
        alert("hai");
        $('html, body').animate({
            scrollTop: $("#contact-section").position().top - 50
        }, 1000);
    });

    /* $(".tabWrap #tab-04").click(function () {
        
        $("#article-04").css("display", "block");
        $("#article-03").css("display", "none");
        $("#article-02").css("display", "none");
        $("#article-01").css("display", "none");
    });

    $(".tabWrap #tab-03").click(function () {
        
        $("#article-03").css("display", "block");
        $("#article-04").css("display", "none");
        $("#article-02").css("display", "none");
        $("#article-01").css("display", "none");
    });

    $(".tabWrap #tab-02").click(function () {
        
        $("#article-02").css("display", "block");
        $("#article-04").css("display", "none");
        $("#article-03").css("display", "none");
        $("#article-01").css("display", "none");
    });

    $(".tabWrap #tab-01").click(function () {
        
        $("#article-01").css("display", "block");
        $("#article-04").css("display", "none");
        $("#article-03").css("display", "none");
        $("#article-02").css("display", "none");
    });
 */

    var first = [''];
var second = ['UI / UX Designer','Web Developer Lead', 'UX Design Manager', 'Tech Enthusiast', 'Creative Coder','Project Lead','Project Manager'];
var firstM = [], secondM = [], el;

var $first = $('.the-first'); 
var $second = $('.the-second strong'); 
var $container = $('.cls-headline');

$first.text(first[0]);
$second.text(second[0]);

for(var i = 0; i < first.length; i++){
    el = $('<div class="measurable">' + first[i] + '</div>');
    $container.append(el);
    firstM.push(el.width());
}
for(var i = 0; i < second.length; i++){
    el = $('<div class="measurable">' + second[i] + '</div>');
    $container.append(el);
    secondM.push(el.width());
}


var positions = [];
$('#container > span').each(function(){
    positions.push($(this).position());
});
$('#container > span').each(function(){
    var pos = positions.shift();
    $(this).css({
        position: 'absolute',
        left: pos.left,
        top: pos.top
    });
});


var firstInitialWidth = $first.width();
var secondInitialWidth = $second.width();


var activeWordsIndex = 0;
setInterval(function(){
    activeWordsIndex++;
    var firstIndex = activeWordsIndex % first.length;
    var secondIndex = activeWordsIndex % second.length;
    
    $first.text( first[firstIndex] );
    $second.text( second[secondIndex] );
    
    var firstLineOffset = (firstM[firstIndex] - firstInitialWidth) / 2;
    var secondLineOffset = (secondM[secondIndex] - secondInitialWidth) / 2;
   
    $('.static.first').css({
        transform: 'translateX(' + firstLineOffset + 'px)'
    });
    $('.static.second').css({
        transform: 'translateX(' + (-secondLineOffset) + 'px)'
    });
    
    $first.css({
        transition: 'none', 
        transform: 'translate(' + (-firstLineOffset) + 'px, -30px)',
        opacity: '0'
    });
    setTimeout(function(){
        $first.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-firstLineOffset) + 'px, 0px)',
            opacity: '1'
        });
    }, 50);
    
    $second.css({
        transition: 'none', 
        transform: 'translate(' + (-secondLineOffset) + 'px, 30px)',
        opacity: '0'
    });
    setTimeout(function(){
        $second.css({
            transition: 'all 1s ease',
            transform: 'translate(' + (-secondLineOffset) + 'px, 0px)',
            opacity: '1'
        });
    }, 50);
}, 2000);

//Pagination

$(".layout li").click(function (event) {
    event.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
});

$(".cls-page01").bind('click', function () {
 $(".cls-nav-items a:not(.cls-page1)").removeClass("active");
 $(this).addClass("active");
 if($(this).hasClass("active")){
    $("#page-01").show();
    $("#page-02").hide();
    $("#page-03").hide();
    $("#page-04").hide();
 }
});

$(".cls-page02").bind("click",function(){
    $(".cls-nav-items a:not(.cls-page02)").removeClass("active");
    $(this).addClass("active");
    if($(this).hasClass("active")){
    $("#page-02").show();
    $("#page-01").hide();
    $("#page-03").hide();
    $("#page-04").hide();
    }
})

$(".cls-page03").bind("click",function(){
    $(".cls-nav-items a:not(.cls-page03)").removeClass("active");
    $(this).addClass("active");
     if($(this).hasClass("active")){
    $("#page-03").show();
    $("#page-01").hide();
    $("#page-02").hide();
    $("#page-04").hide();
    }
})

$(".cls-page04").bind("click",function(){
    $(".cls-nav-items a:not(.cls-page04)").removeClass("active");
    $(this).addClass("active");
    if($(this).hasClass("active")){
    $("#page-04").show();
    $("#page-01").hide();
    $("#page-02").hide();
    $("#page-03").hide();
    }
})

 
});
