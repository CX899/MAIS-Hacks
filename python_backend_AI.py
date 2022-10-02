import spacy
nlp = spacy.load('en_core_web_sm')
text = input("Enter the statement to be niced: ")

about_text = (text)

about_doc = nlp(about_text)
        
words = [token for token in about_doc]

"""
#words = [token for token in about_doc if not token.is_stop and not token.is_punct]
#code used if implemented with website
"""
    
final_sentence = ""
for token in words:
    if token.pos_ == 'NOUN':
        final_sentence += 'gentleman '
    elif token.pos_ == 'ADJ':
        final_sentence += 'amazing '
    elif token.pos_ == 'ADV':
        final_sentence += 'cheerfully '
    elif token.pos_ == 'VERB':
        final_sentence += 'helped '
    else:
        final_sentence += (str(token) + ' ')
        
"""
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

This code is used if implemented in the website. We use lists to provide a wider range
of nice word choices.
"""

print("Here is a nicer way to say your statement: " + final_sentence)
