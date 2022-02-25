export const productos = [
  {
    id: 0,
    title: "Nike Waffles One",
    description:
      "Con un diseño inspirado en algo tan sencillo como una waflera de hierro, una idea que revolucionó al cofundador de Nike. ",
    price: 17499,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645061218/nike-waffles-one.jpg",
    category: "Zapatillas",
    stock: 11,
  },
  {
    id: 1,
    title: "Nike Air Max 90",
    description:
      "Para vos que te gusta estar en constante contacto con la naturaleza y disfrutar del aire con cada kilómetro que recorrés.",
    price: 23999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1644777495/nike-air-max-90.jpg",
    category: "Zapatillas",
    stock: 10,
  },

  {
    id: 2,
    title: "Nike Crater Impact",
    description:
      "Para vos que recorrés las calles de la ciudad, las Zapatillas Nike Crater Impact son ideales por su diseño inspirado en las pistas de atletismo.",
    price: 18999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1644777486/nike-crater-impact.jpg",
    category: "Zapatillas",
    stock: 15,
  },
  {
    id: 3,
    title: "Adidas Essentials",
    description:
      "La Remera adidas Essentials tiene un logo camuflado en el frente para darle estilo a una prenda de todos los días. Su corte clásico te permite moverte cómodamente y está elaborada en algodón para brindarte la suavidad y el confort que buscas.",
    price: 4499,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645369349/adidas-essentials.jpg",
    category: "Remeras",
    stock: 14,
  },
  {
    id: 4,
    title: "Puma Essential Heather",
    description:
      "Lucí un estilo relajado y casual con la Remera Puma Essential Heather, confeccionada en algodón y poliéster y con un diseño sencillo para que puedas combinarla con todas tus prendas. Su cuello redondo y calce regular la vuelven una remera ideal para acompañarte en tu día a día.",
    price: 3799,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645369372/puma-essentials-heather.jpg",
    category: "Remeras",
    stock: 9,
  },

  {
    id: 5,
    title: "Converse Classic Fit",
    description:
      "La remera Converse Classic Fit está confeccionada en tela suave de algodón para una sensación de máxima comodidad. De corte regular, con cuello redondo y mangas cortas, su diseño lleva el estampado con el logo tradicional de la marca para que la vistas todos los días.",
    price: 3499,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645369365/converse-classic-fit.jpg",
    category: "Remeras",
    stock: 9,
  },

  {
    id: 6,
    title: "Nike Repel Miler",
    description:
      "No dejes que el frío te detenga con la Campera Nike Repel Miler. Una prenda para corredores elaborada en 100% poliéster reciclado, capucha para protegerte del frío y la lluvia y bolsillos para que puedas. llevar lo necesario con vos en tu rutina de running. Además cuenta con detalles reflectivos para que no pierdas tu oportunidad de ejercitarte a cualquier hora.",
    price: 14999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645369770/nike-repel-miler.jpg",
    category: "Camperas",
    stock: 13,
  },
  {
    id: 7,
    title: "Nike Yoga Dri-Fit",
    description:
      "La campera Nike Yoga Dri-Fit está confeccionada en algodón y posee tecnología Dri-FIT que trabaja para mantenerte fresco y seco al mismo tiempo que sentís una absoluta comodidad y suavidad. La capucha de gran tamaño mejora la calidez y cobertura mientras caminas por la ciudad. El cierre frontal completo te permite una apertura y calce rápido y bajo tus necesidades.",
    price: 11999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645369770/nike-yoga-dri-fit.jpg",
    category: "Camperas",
    stock: 7,
  },
  {
    id: 8,
    title: "Adidas Tokyo Run",
    description:
      "El éxito no siempre lo medís por las medallas o reconocimiento que tenés también cuenta la distancia y el recorrido en tu camino, la Campera adidas Tokyo Run se convertirá en parte de tu éxito gracias a su diseño ligeramente ajustado, cuello alto y codos performados te da la ligereza y libertad de movimientos que necesitás mientras te ejercitas.",
    price: 13999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645369800/adidas-tokyo-run.jpg",
    category: "Camperas",
    stock: 16,
  },
];
 

export const obtenerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 3500);
});
