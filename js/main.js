
$(document).ready(function() {
	$("#stdBtn").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
  });
  $('.dropdown-toggle').dropdown();
});
// drop down button script end



// service slider script start
const owl1 = $('.studio_service-slider');

$('#owl-slider-1-prev-slide').click(function () {
  owl1.trigger('prev.owl.carousel');
  console.log("text clicked");
});

$('#owl-slider-1-next-slide').click(function () {
  owl1.trigger('next.owl.carousel');
});
// trigger button end

$('.studio_service-slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  mouseDrag: true,
  touchDrag:true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1025: {
      items: 3
    }
  }
});
// service slider script end

// testimonial slider script start
const owl2 = $('.testimonial-content_slider');

$('#testimonial-slider_prev-btn').click(function () {
  owl2.trigger('prev.owl.carousel');
});

$('#testimonial-slider_next-btn').click(function () {
  owl2.trigger('next.owl.carousel');
});
// trigger button end

$('.testimonial-content_slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  mouseDrag: true,
  touchDrag:true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  }
});
// testimonial slider script end

// service slider script start
const owl3 = $('.artist__slider');

$('#artist__slider-btn-prev-slide').click(function () {
  owl3.trigger('prev.owl.carousel');
});

$('#artist__slider-btn-next-slide').click(function () {
  owl3.trigger('next.owl.carousel');
});
// trigger button end

$('.artist__slider').owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  autoWidth: true,
  autoHeight:true,
  nav: false,
  dots: false,
  mouseDrag: true,
  touchDrag:true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,      
      autoWidth: false,
    },
    768: {
      items: 2
    },
    1025: {
      items: 3
    }
  }
});
// service slider script end

// insta feed slider script start
const owl4 = $('.insta_feed__slider');

$(owl4).owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  mouseDrag: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      loop: true
    },
    600: {
      items: 2,
      loop: true
    },
    900: {
      items: 6,
      loop: true
    }
  }
});
// insta feed slider script end

// nice scroll for project page music section
$(".jp_player_wrapper").niceScroll({
  cursorcolor: "#2E55FF",
  cursorwidth: "10px",
  autohidemode: false,
  background:"#E6E6E6",
  cursorborder:"0",
  cursorborderradius: false
});

// easy image script added
$('.player-section_image').bgimg();

if($("#mapid").length > 0) {
  // map data define here
  var mymap = L.map('mapid', { zoomControl: false }).setView([51.509865, -0.118092], 13);
  var markerIcon = L.icon({
    iconUrl: './img/marker_logo.png',
    iconSize: [40, 41],
  });
  var marker = L.marker([51.509865, -0.118092], { icon: markerIcon }).addTo(mymap);
  marker.bindPopup("<h3>Adrress:</h3> <p>450 Strand, Charing Cross, London WC2R 0RG, UK </p><h3>Phone:</h3>+44 20 7930 8205  ||  +44 20 7839 2323");
  
  var L = window.L;
  L.tileLayer('https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=uv9VVe1r3B2O125JwXmd', {
    attribution: '<a href="https://musicstudio.com/" target="_blank">&copy; musicstudio.com</a>',
    maxZoom: 3,
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(mymap);
  // map data end
}
