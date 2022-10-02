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
    let words = inputed_text,
    wordArray = words.toLowerCase().split(' ');

    console.log(wordArray);

    const bad_words = ["fuck", "dumbass", "acrotomophilia", 'anal', 'anilingus', 'anus', 'apeshit', 'arsehole', 'ass', 'asshole', 'assmunch', 'autoerotic', 'babeland', 'bangbros', 'bangbus', 'bareback', 'barenaked', 'bastard', 'bastardo', 'bastinado', 'bbw', 'bdsm', 'beaner', 'beaners', 'beastiality', 'bestiality', 'bimbos', 'birdlock', 'bitch', 'bitches', 'blowjob', 'blumpkin', 'bollocks', 'bondage', 'boner', 'boob', 'boobs', 'bukkake', 'bulldyke', 'bullshit', 'bunghole', 'busty', 'butt', 'buttcheeks', 'butthole', 'camgirl', 'camslut', 'camwhore', 'carpetmuncher', 'cialis', 'circlejerk', 'clit', 'clitoris', 'clusterfuck', 'cock', 'cocks', 'coprolagnia', 'coprophilia', 'cornhole', 'coon', 'coons', 'creampie', 'cum', 'cumming', 'cumshot', 'cumshots', 'cunnilingus', 'cunt', 'darkie', 'daterape', 'deepthroat', 'dendrophilia', 'dick', 'dildo', 'dingleberry', 'dingleberries', 'doggiestyle', 'doggystyle', 'dolcett', 'domination', 'dominatrix', 'dommes', 'dvda', 'ecchi', 'ejaculation', 'erotic', 'erotism', 'escort', 'eunuch', 'fag', 'faggot', 'fecal', 'felch', 'fellatio', 'feltch', 'femdom', 'figging', 'fingerbang', 'fingering', 'fisting', 'footjob', 'frotting', 'fuck', 'fuckin', 'fucking', 'fucktards', 'fudgepacker', 'futanari', 'gangbang', 'genitals', 'goatcx', 'goatse', 'gokkun', 'goodpoop', 'goregasm', 'grope', 'g-spot', 'guro', 'handjob', 'hardcore', 'hentai', 'homoerotic', 'honkey', 'hooker', 'horny', 'humping', 'incest', 'intercourse', 'jailbait', 'jigaboo', 'jiggaboo', 'jiggerboo', 'jizz', 'juggs', 'kike', 'kinbaku', 'kinkster', 'kinky', 'knobbing', 'livesex', 'lolita', 'lovemaking', 'masturbate', 'masturbating', 'masturbation', 'milf', 'mong', 'motherfucker', 'muffdiving', 'nambla', 'nawashi', 'negro', 'neonazi', 'nigga', 'nigger', 'nimphomania', 'nipple', 'nipples', 'nsfw', 'nude', 'nudity', 'nutten', 'nympho', 'nymphomania', 'octopussy', 'omorashi', 'orgasm', 'orgy', 'paedophile', 'paki', 'panties', 'panty', 'pedobear', 'pedophile', 'pegging', 'penis', 'pikey', 'pissing', 'pisspig', 'playboy', 'ponyplay', 'poof', 'poon', 'poontang', 'punany', 'poopchute', 'porn', 'porno', 'pornography', 'pthc', 'pubes', 'pussy', 'queaf', 'queef', 'quim', 'raghead', 'rape', 'raping', 'rapist', 'rectum', 'rimjob', 'rimming', 'sadism', 'santorum', 'scat', 'schlong', 'scissoring', 'semen', 'sex', 'sexcam', 'sexo', 'sexy', 'sexual', 'sexually', 'sexuality', 'shemale', 'shibari', 'shit', 'shitblimp', 'shitty', 'shota', 'shrimping', 'skeet', 'slanteye', 'slut', 's&m', 'smut', 'snatch', 'snowballing', 'sodomize', 'sodomy', 'spastic', 'spic', 'splooge', 'spooge', 'spunk', 'strapon', 'strappado', 'suck', 'sucks', 'swastika', 'swinger', 'threesome', 'throating', 'thumbzilla', 'tit', 'tits', 'titties', 'titty', 'topless', 'tosser', 'towelhead', 'tranny', 'tribadism', 'tubgirl', 'tushy', 'twat', 'twink', 'twinkie', 'undressing', 'upskirt', 'urophilia', 'vagina', 'viagra', 'vibrator', 'vorarephilia', 'voyeur', 'voyeurweb', 'voyuer', 'vulva', 'wank', 'wetback', 'whore', 'worldsex', 'xx', 'xxx', 'yaoi', 'yiffy', 'zoophilia']

    const nice_words = ["angel", "nice person", "darling", "treasure", "endearing person", "gentleman", "salt of the earth", "genius", ]

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