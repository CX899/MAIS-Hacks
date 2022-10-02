import spacy
nlp = spacy.load('en_core_web_sm')
text = str(input())

about_text = (text)

about_doc = nlp(about_text)
    
spacy_stopwords = spacy.lang.en.stop_words.STOP_WORDS
        
words = [token for token in about_doc if not token.is_stop and not token.is_punct]
print (words)

for token in words:
    print (token, token.pos_)
    
n = []
adj = []
adv = []
v = []
for token in words:
    if token.pos_ == 'NOUN':
        n.append(token)
    elif token.pos_ == 'ADJ':
        adj.append(token)
    elif token.pos_ == 'ADV':
        adv.append(token)
    elif token.pos_ == 'VERB':
        v.append(token)
