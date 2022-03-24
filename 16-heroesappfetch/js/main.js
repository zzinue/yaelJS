import {getHeroes} from './HeroesService.js'
const main= async()=>{
    try{
        const heroes= await HeroesService.getHeroes()

    }catch(error){

    }
}
const renderHeroes= (heroes)=>{
    heroes.foreach((heroe)=>{
        const card= ``
        <div class= card col col-sm-3 bg-dark text-white border-light border-4'
        <img class='class'`
    })
}