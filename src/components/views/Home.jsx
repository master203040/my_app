import React from 'react'
import {useState,useEffect } from 'react'

//importacion de datos de prueba json
//import movie from "../../../src/data/movie.json"


function Home() {

    const [characters,setCharacters]= useState ([])

    const URI = "http://hp-api.herokuapp.com/api/characters";

   // const URI = "https://api.themoviedb.org/3/movie/popular?api_key=6d7fd495ff0c7f01d746d1d79f72c34c";

	
	

    const Characters= async ()=>{
        const res = await fetch(URI)
        const movie = await res.json()
        console.log(movie)
        setCharacters(movie);
    }


    useEffect(()=>{
       Characters()
    },[])

    return (


        

       <main>
            <div className="container color rounded mt-3">
                <h1 className="fw-bold mt-2 text-white">Characters</h1>
                <p className="lh-sm text-white">Esta plataforma de prueba es para ver todos tus personajes y Episodios favoritos de Harry Pooter </p>
 
            </div>

            <div className="container">
                <div className="row">
                   
                    { characters.map((item,index)=>(
                    
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="card h-100">
                                <img src={item.image} className="card-img-top" style={{width:"100", height:"80" }}alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">Name: {item.name}</h5>
                                    <p className="card-text">Species: {item.species}</p>
                                    <p className="card-text">gender: {item.gender}</p>
                                    <p className="card-text">house: {item.house}</p>
                                    <p className="card-text">dateOfBirth: {item.dateOfBirth}</p>
                                </div>
                            </div>
                        </div>


                    ))}
                    
                </div>
                
            </div>
            
       </main> 
       
    )
}

export default Home
