import React from "react";
import './MainSite.css';


//Page HTML as react component
class MainSite extends React.Component{
  render() {
    return (
    <body>
        <div class="header-container">
        <div class="header">Toxicity Detector</div>
        </div>
        <div class="main">
            <div class="text-container"> 
                <div class="user-text-container">
                    <div id="user-text" placeholder="Enter Text" contenteditable="true" class="border border-primary"></div>
                </div>
                <div class="error-text-container">
                    <div class="error-text">WHERE ERROR</div>
                </div>
            </div>
            <div class="button-container">
                <button type="submit" onClick={TextInput} class="btn btn-outline-primary btn-lg"> Scan for toxicity</button>
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
    console.log(inputed_text);
    document.getElementById("user-text").textContent = "";//Empties input on click (not needed)
    return matchWords(inputed_text)
    
}

function matchWords(inputed_text) {
    const banned_words = ["fuck", "shit", "bitch"]

    console.log("functions works!")

    var regexMetachars = /[(){[*+?.\\^$|]/g;

    for (var i = 0; i < banned_words.length; i++) {
        banned_words[i] = banned_words[i].replace(regexMetachars, "\\$&");
    }

    var regex = new RegExp("\\b(?:" + banned_words.join("|") + ")\\b", "gi");

    return inputed_text.match(regex) || [];
  
};

export default MainSite;