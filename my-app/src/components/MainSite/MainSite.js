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
                    <div id="user-text" placeholder="Enter Text" contenteditable="true" class="text-boarder"></div>
                </div>
                <div class="error-text-container">
                    <div class="error-text text-boarder">
                        <div>Suggestions</div>
                        <div id="suggestion-text">HELLO</div>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <button type="submit" class="btn btn-outline-dark btn-lg"> Scan for toxicity</button>
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
    wordArray = words.split(' ');

    console.log(wordArray);

    const bad_words = ["fuck", "cunt", "shit", "TH"]
    const nice_words = ["thank you", "nice person", "nice", "colin"]

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] in bad_words){
            wordArray[i].replace(wordArray[i], nice_words[Math.floor(Math.random()*nice_words.length)])
        }
        else{
            //pass
        }
        ;
      }
    
      const final_text = wordArray.join(' ')

      return document.getElementById("error-text").textContent = final_text;
    
    
};

//function suggest(correction_words) {
   
//};

export default MainSite;