import nigiri from '../img/nigiri.webp'
import maki from '../img/maki.webp'
import uramaki from '../img/uramaki.webp'

const products = [
    {
        'id': 1, 
        'title':"Nigiri", 
        'description':"Es el sushi más popular entre los seguidores del pescado. Su base de arroz se prensa con las manos, dándole su característica forma ovalada. Se cubre con una pieza de pescado crudo, marisco u otro ingrediente plano. Suele sazonarse con wasabi.", 
        'price':"$10",
        'stock': 100, 
        'pictureUrl': nigiri
    },
    {
        'id': 2,
        'title':"Maki",
        'description': "Otro de los tipos de sushi más conocidos. Consiste en rollitos de arroz envueltos en alga. En el interior suele añadirse una pieza de pescado como atún, salmón, langostino y cangrejo. Se prepara extendiendo el arroz sobre el alga nori seca y se agrega pescado, verdura o fruta. Finalmente se enrolla y se corta el cilindro en pequeñas piezas, quedando al descubierto el interior por ambas caras",
        'price':"$20",
        'stock': 100,
        'pictureUrl': maki
    },
    {
        'id':3,
        'title': "Uramaki",
        'description':"Uramaki significa reverso, por ese motivo este tipo de sushi tiene el arroz al revés, es decir, en la parte exterior rodeando el alga Nori que al mismo tiempo envuelve el centro de la pieza pudiendo ser pescado, fruta y verdura. Comunmente se le añade sésamo negro.",
        'price':"$20",
        'stock': 100,
        'pictureUrl':uramaki
    }
]

export const getProducts = () => {
    const obtieneProductos = new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(products);
        }, 2000)
    })
    return obtieneProductos;
}

