const productos = [
    {
      "id": 1,
      "nombre": "Pañales para recién nacidos",
      "detalle": "Paquete de 50 pañales para recién nacidos, tamaño pequeño",
      "imagen":"https://ecoparty.com.ar/wp-content/uploads/2023/02/DSC4807-Editar.jpg", 
      "precio" : "20",
      "categorias": ["niños", "recién nacidos"],
    },
    {
      "id": 2,
      "nombre": "Pañales para bebés",
      "detalle": "Paquete de 60 pañales para bebés, tamaño mediano",
      "imagen":"https://ecoparty.com.ar/wp-content/uploads/2023/02/DSC4807-Editar.jpg", 
      "precio" : "51",
      "categorias": ["niños", "bebés"]
    },
    {
      "id": 3,
      "nombre": "Pañales para niños pequeños",
      "detalle": "Paquete de 40 pañales para niños pequeños, con diseños de dibujos animados",
      "imagen": "https://previews.123rf.com/images/amin268/amin2681705/amin268170501069/78447167-l%C3%ADnea-icono-pa%C3%B1al-y-protecci%C3%B3n-gr%C3%A1ficos-de-vector-un-modelo-linear-en-un-fondo-blanco-eps-10-del.jpg",
      "categorias": ["niños", "pequeños"]
    },
    {
      "id": 4,
      "nombre": "Pañales para niños masyores",
      "detalle": "Paquete de 30 pañales para niños mayores, extra absorbentes",
      "imagen": "url_de_imagen_4.jpg",
      "categorias": ["niños", "mayores"]
    },
    {
      "id": 5,
      "nombre": "Pañales para adultos",
      "detalle": "Paquete de 20 pañales para adultos, tamaño grande",
      "imagen": "url_de_imagen_5.jpg",
      "categorias": ["adultos"]
    },
    {
      "id": 6,
      "nombre": "Pañales para adultos mayores",
      "detalle": "Paquete de 25 pañales para adultos mayores, con sistema de cierre ajustable",
      "imagen": "url_de_imagen_6.jpg",
      "categorias": ["adultos", "mayores"]
    },
      {
        "id": 7,
        "nombre": "Pañales ecológicos para bebés",
        "detalle": "Paquete de 50 pañales ecológicos para bebés, fabricados con materiales biodegradables",
        "imagen": "url_de_imagen_7.jpg",
        "categorias": ["niños", "bebés", "ecológicos"]
      },
      {
        "id": 8,
        "nombre": "Pañales de tela para recién nacidos",
        "detalle": "Paquete de 20 pañales de tela suave y ajustables para recién nacidos",
        "imagen": "url_de_imagen_8.jpg",
        "categorias": ["niños", "recién nacidos", "tela"]
      },
      {
        "id": 9,
        "nombre": "Pañales nocturnos para niños",
        "detalle": "Paquete de 40 pañales ultra absorbentes para usar durante la noche",
        "imagen": "url_de_imagen_9.jpg",
        "categorias": ["niños", "nocturnos"]
      },
      {
        "id": 10,
        "nombre": "Pañales para incontinencia en adultos",
        "detalle": "Paquete de 30 pañales para adultos con incontinencia, con barreras anti-fugas",
        "imagen": "url_de_imagen_10.jpg",
        "categorias": ["adultos", "incontinencia"]
      },
      {
        "id": 11,
        "nombre": "Pañales para nadadores niños",
        "detalle": "Paquete de 15 pañales desechables para niños diseñados para su uso en la piscina o la playa",
        "imagen": "url_de_imagen_11.jpg",
        "categorias": ["niños", "nadadores"]
      },
      {
        "id": 12,
        "nombre": "Pañales para nadadores adultos",
        "detalle": "Paquete de 10 pañales desechables para adultos diseñados para su uso en la piscina o la playa",
        "imagen": "url_de_imagen_12.jpg",
        "categorias": ["adultos", "nadadores"]
      },
        {
          "id": 13,
          "nombre": "Pañales de noche para adultos",
          "detalle": "Paquete de 25 pañales extra absorbentes diseñados para uso nocturno en adultos",
          "imagen": "url_de_imagen_13.jpg",
          "categorias": ["adultos", "nocturnos"]
        },
        {
          "id": 14,
          "nombre": "Pañales para niños con piel sensible",
          "detalle": "Paquete de 35 pañales hipoalergénicos y suaves para niños con piel sensible",
          "imagen": "url_de_imagen_14.jpg",
          "categorias": ["niños", "piel sensible"]
        },
        {
          "id": 15,
          "nombre": "Pañales para adultos con fragancia",
          "detalle": "Paquete de 20 pañales con fragancia suave para una sensación fresca",
          "imagen": "url_de_imagen_15.jpg",
          "categorias": ["adultos", "fragancia"]
        },
        {
          "id": 16,
          "nombre": "Pañales para niños con cintura elástica",
          "detalle": "Paquete de 30 pañales con cintura elástica para un ajuste cómodo y seguro",
          "imagen": "url_de_imagen_16.jpg",
          "categorias": ["niños", "cintura elástica"]
        },
        {
          "id": 17,
          "nombre": "Pañales para adultos con velcro reutilizable",
          "detalle": "Paquete de 25 pañales para adultos con sistema de velcro reutilizable",
          "imagen": "url_de_imagen_17.jpg",
          "categorias": ["adultos", "velcro reutilizable"]
        },
        {
          "id": 18,
          "nombre": "Pañales de natación para bebés",
          "detalle": "Paquete de 15 pañales desechables diseñados específicamente para su uso en la piscina o el mar",
          "imagen": "url_de_imagen_18.jpg",
          "categorias": ["niños", "natación"]
        },
        {
          "id": 19,
          "nombre": "Pañales para adultos con tecnología de absorción rápida",
          "detalle": "Paquete de 30 pañales para adultos con tecnología avanzada de absorción rápida",
          "imagen": "url_de_imagen_19.jpg",
          "categorias": ["adultos", "absorción rápida"]
        },
        {
          "id": 20,
          "nombre": "Pañales para niños con barreras anti-fugas",
          "detalle": "Paquete de 40 pañales para niños con barreras laterales que previenen las fugas",
          "imagen": "url_de_imagen_20.jpg",
          "categorias": ["niños", "anti-fugas"]
        },
        {
          "id": 21,
          "nombre": "Pañales para adultos con indicador de humedad",
          "detalle": "Paquete de 25 pañales para adultos con indicador de humedad que cambia de color",
          "imagen": "url_de_imagen_21.jpg",
          "categorias": ["adultos", "indicador de humedad"]
        },
        {
          "id": 22,
          "nombre": "Pañales para niños con personajes de Disney",
          "detalle": "Paquete de 35 pañales para niños con dibujos de personajes de Disney",
          "imagen": "url_de_imagen_22.jpg",
          "categorias": ["niños", "Disney"]
        },
        {
          "id": 23,
          "nombre": "Pañales para adultos con ajuste unisex",
          "detalle": "Paquete de 30 pañales para adultos con diseño unisex para mayor comodidad",
          "imagen": "url_de_imagen_23.jpg",
          "categorias": ["adultos", "unisex"]
        },
        {
          "id": 24,
          "nombre": "Pañales de tela reutilizables para niños",
          "detalle": "Juego de 10 pañales de tela reutilizables para bebés y niños pequeños",
          "imagen": "url_de_imagen_24.jpg",
          "categorias": ["niños", "tela", "reutilizables"]
        },
            
]
  export default productos;