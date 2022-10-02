import React from "react";
import './MainSite.css';


//Page HTML as react component
class MainSite extends React.Component{
  render() {
    return (

    <body>
        <div class="header-container">
        <div class="header">HowToBeNice.io</div>
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
    console.log(inputed_text);
    document.getElementById("user-text").textContent = "";//Empties input on click (not needed)
    let words = inputed_text,
    wordArray = words.toLowerCase().split(' ');

    console.log(wordArray);

    const bad_words = ["fuck", "cunt", "shit", "TH"]
    const nice_words = ["thank you", "nice person", "nice", "colin"]

    for (let i = 0; i < wordArray.length; i++) {
        if (bad_words.includes(wordArray[i])){
            wordArray[i] = nice_words[Math.floor(Math.random()*nice_words.length)]
        }
        else{
            console.log("something is wrong")
        }
        ;
      }
    
      const final_text = wordArray.join(' ')

      return document.getElementById("suggestion-text").textContent = final_text;
    
    
};

//function suggest(correction_words) {
   
//};

export default MainSite;