import React from "react";
import { useState } from "react";
import meme from "../../public/assets/memeimg.png"

export default function Content(){

    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    async function getAllMemeImages(){
        const response = await fetch(`https://api.imgflip.com/get_memes`)
        const data = await response.json()
        setAllMemeImages(data.data.memes)
    }
    
    React.useEffect(()=>{
        getAllMemeImages()
    },[])

   

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })


    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevState=>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    
    
    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))        
    }


    return (
        <main className="content">
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder="Top text" 
                    type="text"
                    name="topText"  
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    className="form--input" 
                    placeholder="Bottom text" 
                    type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}

                />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}                > 
                    Get a new meme image  🖼 
                </button> 
            </div>
            <div className="content-image">
                <h1 className="meme-text topText">{meme.topText}</h1>
                <img src={meme.randomImage} alt=""/>
                <h1 className="meme-text bottomText">{meme.bottomText}</h1>

            </div>
        </main>


    )
}