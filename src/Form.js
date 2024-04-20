import React from "react";
import data from "./data";
export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2kbn1e.jpg",
  });
  const [allMemeImages, setAllImages] = React.useState(data);

  // const [imageMeme, setImage] = React.useState("");
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          className="form-input"
          name="topText"
          value={meme.topText}
          type="text"
          onChange={handleChange}
        ></input>
        <input
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          type="text"
          onChange={handleChange}
        ></input>
        <button className="form-button" onClick={getMemeImage}>
          Get a new Meme Image{" "}
        </button>
        <div className="imageDiv">
          <img src={meme.randomImage} alt="Meme" className="meme-image"></img>
          <h2 className="memeText top">{meme.topText}</h2>
          <h2 className="memeText bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
