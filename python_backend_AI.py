import spacy
nlp = spacy.load('en_core_web_sm')
from flask import Flask 
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)

BAD_WORDS = ["fuck", "dumbass", "acrotomophilia", 'anal', 'anilingus', 'anus', 'apeshit', 'arsehole', 'ass', 'asshole', 'assmunch', 'autoerotic', 'babeland', 'bangbros', 'bangbus', 'bareback', 'barenaked', 'bastard', 'bastardo', 'bastinado', 'bbw', 'bdsm', 'beaner', 'beaners', 'beastiality', 'bestiality', 'bimbos', 'birdlock', 'bitch', 'bitches', 'blowjob', 'blumpkin', 'bollocks', 'bondage', 'boner', 'boob', 'boobs', 'bukkake', 'bulldyke', 'bullshit', 'bunghole', 'busty', 'butt', 'buttcheeks', 'butthole', 'camgirl', 'camslut', 'camwhore', 'carpetmuncher', 'cialis', 'circlejerk', 'clit', 'clitoris', 'clusterfuck', 'cock', 'cocks', 'coprolagnia', 'coprophilia', 'cornhole', 'coon', 'coons', 'creampie', 'cum', 'cumming', 'cumshot', 'cumshots', 'cunnilingus', 'cunt', 'darkie', 'daterape', 'deepthroat', 'dendrophilia', 'dick', 'dildo', 'dingleberry', 'dingleberries', 'doggiestyle', 'doggystyle', 'dolcett', 'domination', 'dominatrix', 'dommes', 'dvda', 'ecchi', 'ejaculation', 'erotic', 'erotism', 'escort', 'eunuch', 'fag', 'faggot', 'fecal', 'felch', 'fellatio', 'feltch', 'femdom', 'figging', 'fingerbang', 'fingering', 'fisting', 'footjob', 'frotting', 'fuck', 'fuckin', 'fucking', 'fucktards', 'fudgepacker', 'futanari', 'gangbang', 'genitals', 'goatcx', 'goatse', 'gokkun', 'goodpoop', 'goregasm', 'grope', 'g-spot', 'guro', 'handjob', 'hardcore', 'hentai', 'homoerotic', 'honkey', 'hooker', 'horny', 'humping', 'incest', 'intercourse', 'jailbait', 'jigaboo', 'jiggaboo', 'jiggerboo', 'jizz', 'juggs', 'kike', 'kinbaku', 'kinkster', 'kinky', 'knobbing', 'livesex', 'lolita', 'lovemaking', 'masturbate', 'masturbating', 'masturbation', 'milf', 'mong', 'motherfucker', 'muffdiving', 'nambla', 'nawashi', 'negro', 'neonazi', 'nigga', 'nigger', 'nimphomania', 'nipple', 'nipples', 'nsfw', 'nude', 'nudity', 'nutten', 'nympho', 'nymphomania', 'octopussy', 'omorashi', 'orgasm', 'orgy', 'paedophile', 'paki', 'panties', 'panty', 'pedobear', 'pedophile', 'pegging', 'penis', 'pikey', 'pissing', 'pisspig', 'playboy', 'ponyplay', 'poof', 'poon', 'poontang', 'punany', 'poopchute', 'porn', 'porno', 'pornography', 'pthc', 'pubes', 'pussy', 'queaf', 'queef', 'quim', 'raghead', 'rape', 'raping', 'rapist', 'rectum', 'rimjob', 'rimming', 'sadism', 'santorum', 'scat', 'schlong', 'scissoring', 'semen', 'sex', 'sexcam', 'sexo', 'sexy', 'sexual', 'sexually', 'sexuality', 'shemale', 'shibari', 'shit', 'shitblimp', 'shitty', 'shota', 'shrimping', 'skeet', 'slanteye', 'slut', 's&m', 'smut', 'snatch', 'snowballing', 'sodomize', 'sodomy', 'spastic', 'spic', 'splooge', 'spooge', 'spunk', 'strapon', 'strappado', 'suck', 'sucks', 'swastika', 'swinger', 'threesome', 'throating', 'thumbzilla', 'tit', 'tits', 'titties', 'titty', 'topless', 'tosser', 'towelhead', 'tranny', 'tribadism', 'tubgirl', 'tushy', 'twat', 'twink', 'twinkie', 'undressing', 'upskirt', 'urophilia', 'vagina', 'viagra', 'vibrator', 'vorarephilia', 'voyeur', 'voyeurweb', 'voyuer', 'vulva', 'wank', 'wetback', 'whore', 'worldsex', 'xx', 'xxx', 'yaoi', 'yiffy', 'zoophilia']
NOUNS = ["noble", "good person", "gentleman", "queen", "lady"]
ADJECTIVES = ["nice", "kind", "beautiful", "amazing", "awesome"]
ADVERBS = ["cheerfully", "happily", "kindly", "lovingly", "sweetly"]
VERBS = ["helped", "saved", "rescued", "protected", "saved"]


cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/get_result/<user_data>", methods=["GET"])
def get_result(user_data):
    text = user_data
    about_text = (text)
    about_doc = nlp(about_text)
    words = [token for token in about_doc]
    #words = [token for token in about_doc if not token.is_stop and not token.is_punct]

    final_sentence = ""
    
    for token in words:
        if token.lemma_ in BAD_WORDS:
            if token.pos_ == 'NOUN':
                final_sentence += random.choice(NOUNS) + ' '
            elif token.pos_ == 'ADJ':
                final_sentence += random.choice(ADJECTIVES) + ' '
            elif token.pos_ == 'ADV':
                final_sentence += random.choice(ADVERBS) + ' '
            elif token.pos_ == 'VERB':
                final_sentence += random.choice(VERBS) + ' '
        else:
            final_sentence += (str(token) + ' ')
    
    print(final_sentence)

    return {"serverReply": str(final_sentence)}
    
if __name__ == "__main__":
    app.run(debug=True)