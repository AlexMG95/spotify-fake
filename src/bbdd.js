export const spotify ={

    header : {
        h1 : { 
            src  : '/assets/logo.svg',
            alt  : 'Spotify',
            href : '#'
        },

        menu :   
   
        [
          {id : 0 , icono : '/assets/home.svg', texto: 'Inicio', href :'/'},
          {id : 1 , icono : '/assets/buscar.svg', texto: 'Buscar', href :'/buscar'},
          {id : 2 , icono : '/assets/biblioteca.svg', texto: ' Tu biblioteca', href :'/biblioteca'}, 
          
          

        ],

        submenu:
        [
            {id : 3 , icono : '/assets/Mas.svg' , texto: 'Crear Lista' , href:'#'},
            {id : 4 , icono : '/assets/Like.svg' , texto: 'Canciones que te gustan' , href:'#'}
        ],

        legal : [
            {id: 0, texto : 'Legal' , href: '#'},
            {id: 1, texto : 'Centro de privacidad' , href:'#'},
            {id: 2, texto : 'Política de privacidad' , href: '#'},
            {id: 3, texto : 'Configuración de cookies' , href: '#'},
            {id: 4, texto : 'Información de los anuncios' , href: '#'},
            {id: 5, texto : 'Cookies', href: '#'}
        ],

        idioma : [
            {id:0, texto:'Español de España', href:'#'}
        ]
    },

    superior: {

        

        premium : [
            {id:0, texto: 'Premium', href : '#'},
            {id:1, texto: 'Asistencia', href : '#'},
            {id:2, texto: 'Descargar', href : '#'}
        ],
        session : [
            {id:0, texto: 'Registrarse', href : '#'},
            {id:1, texto: 'Iniciar sesión', href:'#'}
        ],

        flechas : [
            {id: 0, src:'/assets/flecha izquierda.svg' ,  texto:'Anterior'},
            {id: 1, src:'/assets/flecha derecha.svg'   ,  texto:'Siguiente'}
        ],

    },

    main : [
        {
            id: 0,
            titulo: 'Concentración',
            listas: [
                {
                    id : 0,
                    titulo : 'Peaceful Piano',
                    parrafo : 'Relax and indulge with beautiful piano pieces',
                    img : {src : '/assets/Peaceful.jpeg', alt: 'Imagen'},
                    a : {href: '#', title: ''}
                },
                {
                    id : 1,
                    titulo : 'Deep Focus',
                    parrafo : 'Keep calm and focus with ambient and post-rock music.',
                    img : {src : '/assets/Deep.jpeg', alt: 'Imagen'},
                    a : {href: '#', title: ''}
                },
                {
                    id : 2,
                    titulo : 'Instrumental Study',
                    parrafo : 'Focus with soft study music in the background.',
                    img : {src : '/assets/Instrumental.jpeg', alt: 'Imagen'},
                    a : {href: '#', title: ''}
                },
                {
                    id : 3,
                    titulo : 'Chill lofi study  ',
                    parrafo : 'The perfect study beats. Find your focus, crush your productivity.',
                    img : {src : '/assets/Chill.jpeg', alt: 'Imagen'},
                    a : {href: '#', title: ''}
                },
                { 
                    id      : 4 ,
                    titulo  : 'Today Top Hits' ,
                    parrafo : 'PinkPantheress & Ice Spice are on top of the Hottest 50!',
                    img     : { src : '/assets/Todays.jpeg'  , alt : 'Imagen' },
                    a       : { href : '#' , title : ''}
                },
                { 
                    id      : 5 ,
                    titulo  : 'Rock Classics',
                    parrafo : 'Rock legends & epic songs that continue to inspire generations.',
                    img     : { src : '/assets/Rock.jpeg'  , alt : 'Imagen' },
                    a       : { href : '#' , title : ''}
                },
                  
            ]
        },
        {
            id : 1,
            titulo : 'Spotify Playlists',
            listas : [
                { 
                    id      : 0 ,
                    titulo  : 'Today Top Hits' ,
                    parrafo : 'PinkPantheress & Ice Spice are on top of the Hottest 50!',
                    img     : { src : '/assets/Todays.jpeg'  , alt : 'Imagen' },
                    a       : { href : '#' , title : ''}
                },
                { 
                    id      : 1 ,
                    titulo  : 'Rap Caviar',
                    parrafo : 'New music from Polo G, Don Toliver and A Boogie Wit da Hoodie.',
                    img     : { src : '/assets/Rap.jpeg'  , alt : 'Imagen' },
                    a       : { href : '#' , title : ''}
                },
                { 
                    id      : 2 ,
                    titulo  : 'All Out 2010s',
                    parrafo : 'The biggest songs of the 2010s..',
                    img     : { src : '/assets/All Out.jpeg'  , alt : 'Imagen' },
                    a       : { href : '#' , title : ''}
                },
                { 
                    id      : 3 ,
                    titulo  : 'Rock Classics',
                    parrafo : 'Rock legends & epic songs that continue to inspire generations.',
                    img     : { src : '/assets/Rock.jpeg'  , alt : 'Imagen' },
                    a       : { href : '#' , title : ''}
                },
                {
                    id : 4,
                    titulo : 'Deep Focus',
                    parrafo : 'Keep calm and focus with ambient and post-rock music.',
                    img : {src : '/assets/Deep.jpeg', alt: 'Imagen'},
                    a : {href: '#', title: ''}
                },
                {
                    id : 5,
                    titulo : 'Peaceful Piano',
                    parrafo : 'Relax and indulge with beautiful piano pieces',
                    img : {src : '/assets/Peaceful.jpeg', alt: 'Imagen'},
                    a : {href: '#', title: ''}
                },
                
        
            ]

        },
   ]

}

export const todasPlaylist =[

    [
        {
            id : 0,
            titulo : 'Peaceful Piano',
            parrafo : 'Relax and indulge with beautiful piano pieces',
            img : {src : '/assets/Peaceful.jpeg', alt: 'Imagen'},
            a : {href: '#', title: ''}
        },
        {
            id : 1,
            titulo : 'Deep Focus',
            parrafo : 'Keep calm and focus with ambient and post-rock music.',
            img : {src : '/assets/Deep.jpeg', alt: 'Imagen'},
            a : {href: '#', title: ''}
        },
        {
            id : 2,
            titulo : 'Instrumental Study',
            parrafo : 'Focus with soft study music in the background.',
            img : {src : '/assets/Instrumental.jpeg', alt: 'Imagen'},
            a : {href: '#', title: ''}
        },
        {
            id : 3,
            titulo : 'Chill lofi study  ',
            parrafo : 'The perfect study beats. Find your focus, crush your productivity.',
            img : {src : '/assets/Chill.jpeg', alt: 'Imagen'},
            a : {href: '#', title: ''}
        },
        { 
            id      : 4 ,
            titulo  : 'Today Top Hits' ,
            parrafo : 'PinkPantheress & Ice Spice are on top of the Hottest 50!',
            img     : { src : '/assets/Todays.jpeg'  , alt : 'Imagen' },
            a       : { href : '#' , title : ''}
        },
        { 
            id      : 5 ,
            titulo  : 'Rock Classics',
            parrafo : 'Rock legends & epic songs that continue to inspire generations.',
            img     : { src : '/assets/Rock.jpeg'  , alt : 'Imagen' },
            a       : { href : '#' , title : ''}
        },
          
    ]
]