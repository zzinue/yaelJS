export const getHeroes= async()=>{
    try{
        const respuesta=await fetch (`${apiUtl}/heroes`)
        const body = await respuesta.json()
        return body.heroes
    }catch (error)
}