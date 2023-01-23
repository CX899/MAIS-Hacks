import React from "react";
import './MainSite.css';
import svg from './Vector.svg'
import axios from 'axios';


//Page HTML as react component
class MainSite extends React.Component{
  render() {
    return (

    <body>
        <div class="header-container">
            <div><a href='./'><img src={svg} alt='reloading page' className='logo'></img></a></div>
            <div class="header">
                <a href="./">HowToBeNice.io</a>
            </div>
            <div class='spacer'> </div>
        </div>
        <div class="main">
            <div class="text-container"> 
                <div class="user-text-container">
                    <div id="user-text" placeholder="Enter Text" contenteditable="true" class="text-boarder"></div>
                </div>
                <div class="error-text-container">
                    <div class="error-text text-boarder">
                        <div class="subtitle">Suggestions</div>
                        <div id="suggestion-text"></div>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <button type="submit" onClick={TextInput} class="btn btn-outline-dark btn-lg"> Be Nice </button>
            </div>
        </div>
        <div class="footer-container">
            <div class="footer">Copyright © Broke Uni Students</div>
        </div>
    </body>
    )
  };
};


//Main program starts here

//Function to pull text of div in 
function TextInput() {
    const inputed_text=document.getElementById("user-text").textContent;
    // console.log(inputed_text);
    // let words = inputed_text,
    // wordArray = words.toLowerCase().split(' ');

    axios.get("http://127.0.0.1:5000/get_result/"+inputed_text).then(res => 
        {
            console.log(res);
            document.getElementById("suggestion-text").textContent = res.data.serverReply;
            console.log(res.data.serverReply)
        }
    );

};

export default MainSite;