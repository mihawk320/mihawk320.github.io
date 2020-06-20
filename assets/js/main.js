setTimeout(function(){
    $('.loader_bg').fadeToggle();
},1500);

function goepav(){
    Swal.fire({
        title: 'Goepav',
        text: 'Página realizada con PHP, Jquery y Ajax, que si bien no es usada realmente, la hice para adjuntarla al portafolio (Contiene pagos por paypal pero el host gratuito no lo admite, F)',
        imageUrl: 'https://mihawk320.github.io/assets/images/goepav.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

function serviteca(){
    Swal.fire({
        title: 'Serviteca',
        text: 'Página realizada con HTML, CSS y JavaScript de un taller de mecánica, una simple muestra de diseño',
        imageUrl: 'http://127.0.0.1:5501/assets/images/serviteca.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

function hackaton(){
    Swal.fire({
        title: 'Hackaton',
        text: 'Página realizada mientras estuve en una academia, la misión era construir una página en 4 horas con React, y este fue el resultado',
        imageUrl: 'http://127.0.0.1:5501/assets/images/hackaton.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

function adopta(){
    Swal.fire({
        title: 'AdoptaMed',
        text: 'Página de adopción animal la cual está siendo construida en este momento, pero hay un adelanto. Es en React, SPA',
        imageUrl: 'http://127.0.0.1:5501/assets/images/adoptamed.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}
