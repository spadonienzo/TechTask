module.exports = (element)=>{
    element = element.map(elem =>{
        let Types = pokemon.Type.map((type) => type.name)
        return{
            id: elem.id,
            name: elem.name,
            image: elem.image,
            life: elem.life,
            attack: elem.attack,
            defense: elem.defense,
            speed: elem.speed,
            height: elem.height,
            weight: elem.weight,
            Types: Types,
            created: elem.created
        }
    })
    return element; 
}