import React from 'react';
import ReactDom from 'react-dom';
import '../Style.css';

class MemeGenerator extends React.Component {
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/265k.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.generateMeme = this.generateMeme.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    generateMeme(event) {
        event.preventDefault();
        const memeImgsArray = this.state.allMemeImgs;
        const randomImage = memeImgsArray[Math.floor(Math.random() * memeImgsArray.length )].url
        console.log(randomImage);
        this.setState({
            randomImg : randomImage
        })
    }

    componentDidMount() {
        const memes = [];
        fetch("https://api.imgflip.com/get_memes").then(response => response.json("memes"))
        .then(response => {
            const {memes} = response.data;
            this.setState({allMemeImgs: memes})
        });
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.generateMeme}>
                <input type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}></input>
                <input type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}></input>
                <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""></img>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;