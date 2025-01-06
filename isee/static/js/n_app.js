$('.carusel-new').owlCarousel({
  loop:true,
  nav: false,
  margin:10,
  autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
  responsive:{
      0:{ 
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.advent-1').owlCarousel({
    loop:true,
    nav: false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{ 
            items:1
        }
    }
  })
  $('.otziv__carusel').owlCarousel({
    loop:true,
    nav: false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{ 
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  })
  $('.cert__carusel').owlCarousel({
    loop:true,
    nav: false,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{ 
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  })




  jQuery(document).ready(function($) {
    $('.popup-content').magnificPopup({
        type: 'inline'
    });
});

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}