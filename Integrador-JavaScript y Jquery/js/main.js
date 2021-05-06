//slider
$(document).ready(function(){
    
  if(window.location.href.indexOf('index')> -1){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });
  }

    //Posts
    if(window.location.href.indexOf('index')> -1){
  var posts = [
    {
        title: 'prueba de titulo 1',
        date: moment().format("MMMM Do YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean eu felis at orci rutrum placerat sed in libero. Nunc interdum et velit ac luctus. Integer fringilla ante neque. Etiam ullamcorper semper risus, id consequat mi fermentum eget. Curabitur gravida ligula at lectus commodo eleifend. Donec vel est cursus, accumsan nulla ac, condimentum diam. Ut pharetra justo eget magna tempus, et varius justo molestie.'
    },
    {
      title: 'prueba de titulo 2',
      date: moment().format("MMMM Do YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean eu felis at orci rutrum placerat sed in libero. Nunc interdum et velit ac luctus. Integer fringilla ante neque. Etiam ullamcorper semper risus, id consequat mi fermentum eget. Curabitur gravida ligula at lectus commodo eleifend. Donec vel est cursus, accumsan nulla ac, condimentum diam. Ut pharetra justo eget magna tempus, et varius justo molestie.'
    },
    {
      title: 'prueba de titulo 3',
      date: moment().format("MMMM Do YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean eu felis at orci rutrum placerat sed in libero. Nunc interdum et velit ac luctus. Integer fringilla ante neque. Etiam ullamcorper semper risus, id consequat mi fermentum eget. Curabitur gravida ligula at lectus commodo eleifend. Donec vel est cursus, accumsan nulla ac, condimentum diam. Ut pharetra justo eget magna tempus, et varius justo molestie.'
    },
    {
      title: 'prueba de titulo 4',
      date: moment().format("MMMM Do YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean eu felis at orci rutrum placerat sed in libero. Nunc interdum et velit ac luctus. Integer fringilla ante neque. Etiam ullamcorper semper risus, id consequat mi fermentum eget. Curabitur gravida ligula at lectus commodo eleifend. Donec vel est cursus, accumsan nulla ac, condimentum diam. Ut pharetra justo eget magna tempus, et varius justo molestie.'
    },
    {
      title: 'prueba de titulo 5',
      date: moment().format("MMMM Do YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean eu felis at orci rutrum placerat sed in libero. Nunc interdum et velit ac luctus. Integer fringilla ante neque. Etiam ullamcorper semper risus, id consequat mi fermentum eget. Curabitur gravida ligula at lectus commodo eleifend. Donec vel est cursus, accumsan nulla ac, condimentum diam. Ut pharetra justo eget magna tempus, et varius justo molestie.'
    }
  ];

  posts.forEach((item, index)=>{
    var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>`;
                
    $("#posts").append(post);
  });
}
  //Selector de temas
  var theme = $("#theme");
  $("#to-green").click(()=>{
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(()=>{
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(()=>{
    theme.attr("href", "css/blue.css");
  });

  //Scroll al inicio de la web
  $('.subir').click(function(e){
    e.preventDefault();

    $('html, body').animate({
      scrollTop:0
    }, 1000);
    
    return false;
  });

  $("#login form").submit(function(){
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if(form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");

    about_parrafo.html("Bienvenido, "+form_name);
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión </a>");

    $("#login").hide();
  
    $("#logout").click(()=>{
      localStorage.clear();
      location.reload();
    });
  }
  if(window.location.href.indexOf('about')> -1){
    $('#acordeon').accordion();
  }

  if(window.location.href.indexOf('reloj')> -1){
    setInterval(()=>{
      var reloj = moment().format("hh:mm:ss");
      $('#reloj').html(reloj);
    },1000);
  }

  if(window.location.href.indexOf('contact')> -1){

    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    });
    $.validate({
      lang: 'es'
    });
  }

  });

