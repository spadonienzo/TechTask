module.exports = (arr) => {
    arr = arr.map(e=>{
        
    return {
        id: e.id,
        name: e.name,
        image: e.sprites.other.dream_world.front_default,
        life: e.stats[0].base_stat,
        attack:e.stats[1].base_stat,
        defense:e.stats[2].base_stat,
        speed:e.stats[5].base_stat,
        height: e.height,
        weight: e.weight,
        types: e.types
            ? e.types.map((elem) => elem.type.name)
            : "Unknown Type",
        
        created: false
    }
    })
    
    return arr
}