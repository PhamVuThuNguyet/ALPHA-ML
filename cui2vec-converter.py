import numpy as np
import pandas as pd


# read in the 50-dimensional GloVe vectors
def read_glove_vecs(file):
    with open(file, 'r', encoding='utf8') as f:
        words = set()
        word_to_vec_map = {}

        for line in f:
            print("running")
            line = line.strip().split()
            word = line[0]
            words.add(word)
            word_to_vec_map[word] = np.array(line[1:], dtype=np.float64)

    return words, word_to_vec_map


cui_vecs_df = pd.read_csv('data/cui2vec_pretrained.csv')
cui_vecs_df.set_index('CUI', inplace=True)
x = cui_vecs_df.to_string(header=False, index=True, index_names=False)
x = x.replace('  ', ' ')
tfile = open('data/cui2vec_pretrained.txt', 'a', encoding='utf8')
tfile.write(x)
tfile.close()

words, word_to_vec_map = read_glove_vecs('data/cui2vec_pretrained.txt')

print(
    "now convert to magnitude python -m pymagnitude.converter -i ./cui2vec_pretrained.txt -o ./cui2vec_pretrained.magnitude")
