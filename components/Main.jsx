import {useState,useEffect} from "react"

export default function Main() {
    const [meme,setMeme] = useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme,setAllMeme] = useState([])

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prevMeme => ({...prevMeme,[name]:value}))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    },[])
    
    function randomImg(){
        const randomNum = Math.floor(Math.random() * allMeme.length)
        const newImg = allMeme[randomNum].url   
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl:newImg
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={randomImg}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}