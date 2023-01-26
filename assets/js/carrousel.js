$(function(){

  
  function atualizar_informacoes() {
    $("#habilidades-name").text( $(".slick-center").data("name") );
  }

  $(".habilidades-slider").on('init', function(){
    atualizar_informacoes();
  });

      $(".habilidades-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        prevArrow: $("#arrow-prev"),
        nextArrow: $("#arrow-next"),
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1
            }
          }
        ]
  });


  $(".projetos-slider").slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $("#arrow-prev"),
    nextArrow: $("#arrow-next"),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".habilidades-slider").on('afterChange', function(){
    atualizar_informacoes();
  });

})
