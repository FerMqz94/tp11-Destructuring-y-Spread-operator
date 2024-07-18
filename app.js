const importar = require('./collectibles.js')

const hotToys = importar("Hot Toys")
const bandai  = importar("Bandai")
const starWars = importar("Star Wars")

// console.log(hotToys);
// console.log(bandai);
// console.log(starWars);

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]

// console.log(unifiedCollectibles);

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach((figura,i) => {
            console.log(`${i + 1} - ${figura.marca} ${figura.nombre} ---> precio: $${figura.precio} cantidad: ${auto.stock}`);
        })
    },
    figuresByBrand: function(brand) {
        const figurasPorMarca = this.figuras.filter(({marca}) => marca.toLowerCase() === brand.toLowerCase())
        return figurasPorMarca
    }    
}

console.log(collectibles.figuresByBrand("hot Toys"));
console.log(collectibles.figuresByBrand("bandai"));
console.log(collectibles.figuresByBrand("STAR WARS"));


