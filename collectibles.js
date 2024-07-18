const importar = (marca) => {
    const fs = require('fs');
    let nomArchivo = "";
    if(marca === "Hot Toys"){
        nomArchivo = "figuras1.json"
    }
    else if(marca === "Bandai"){
        nomArchivo = "figuras2.json"
    }
    else if(marca === "Star Wars"){
        nomArchivo = "figuras3.json"
    }
    const ruta = `./datos/${nomArchivo}`
    const marcaJSON = fs.readFileSync(ruta,'utf-8')
    const marcaParse = JSON.parse(marcaJSON)
    return marcaParse
}

module.exports = importar;






