//slider
$(document).ready(function(){
    
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });


    //Posts
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

  });

