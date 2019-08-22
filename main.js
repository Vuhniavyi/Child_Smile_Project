//slider

//sliderblock1

$('.clients-slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  
  autoplay: true,  
  autoplaySpeed: 3000,

     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
      }
    }
  ]

  
});

// endslider

// tabs
(function() {
  $(function() {
    var toggle;
    return toggle = new Toggle('.toggle1');
  });

  this.Toggle = (function() {
    Toggle.prototype.el = null;

    Toggle.prototype.tabs = null;

    Toggle.prototype.panels = null;

    function Toggle(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab1");
      this.panels = this.el.find(".panel1");
      this.bind();
    }

    Toggle.prototype.show = function(index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      this.panels.hide();
      activePanel = this.panels.get(index);
      return $(activePanel).show();
    };

    Toggle.prototype.bind = function() {
      var _this = this;
      return this.tabs.unbind('click').bind('click', function(e) {
        return _this.show($(e.currentTarget).index());
      });
    };

    return Toggle;

  })();

}).call(this);

// endtabs

//sliderblock3

$('.clients-slider1').slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  
  autoplay: true,  
  autoplaySpeed: 1000,

     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      }
    }
  ]

  
});

// endslider2

//sliderblock4

$('.clients-slider2').slick({
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  
  autoplay: true,  
  autoplaySpeed: 3000,

     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
      }
    }
  ]

  
});

// endslider3

// tabs2
(function() {
  $(function() {
    var toggle;
    return toggle = new Toggle1('.toggle2');
  });

  this.Toggle1 = (function() {
    Toggle1.prototype.el = null;

    Toggle1.prototype.tabs = null;

    Toggle1.prototype.panels = null;

    function Toggle1(toggleClass) {
      this.el = $(toggleClass);
      this.tabs = this.el.find(".tab2");
      this.panels = this.el.find(".panel2");
      this.bind();
    }

    Toggle1.prototype.show = function(index) {
      var activePanel, activeTab;
      this.tabs.removeClass('active');
      activeTab = this.tabs.get(index);
      $(activeTab).addClass('active');
      this.panels.hide();
      activePanel = this.panels.get(index);
      return $(activePanel).show();
    };

    Toggle1.prototype.bind = function() {
      var _this = this;
      return this.tabs.unbind('click').bind('click', function(e) {
        return _this.show($(e.currentTarget).index());
      });
    };

    return Toggle1;

  })();

}).call(this);

// endtabs2


// sliderblock8


$('.slider__items').slick({
  infinite: true,
  slidesToShow: 1,
  dots: false,
  arrows: false,
  autoplay: true,  
  autoplaySpeed: 3000,
}).on('afterChange', function(){
  var currentImage = $('.slick-current').find('.slide__image').attr('data-src');
  $('.slider__circle').css('background-image', 'url('+ currentImage +')')
});

// endsliderblock8



//falling out modal1
$(document).ready(function() {
  $('.do-open').on('click', function() {
      $('#modal').css('display', 'block');
  });
  $('.do-close').on('click', function() {
      $('#modal').css('display', 'none');
  });
});