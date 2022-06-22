import io
import json
import sqlite3

import pandas as pd

conn = sqlite3.connect('./flaskapp/umls/databases/umls.db')
c = conn.cursor()
c.execute("select * from descriptions")

writer = csv.writer(open("./data/descriptions.csv", "w+", encoding="utf-8"))
for row in c:
    print(row)
    writer.writerow(row)

umlsDF = pd.read_csv('./data/descriptions.csv', encoding='utf-8', index_col=None, header=0)
umlsDF.columns = ['CUI', 'LAT', 'SAB', 'TTY', 'STR', 'STY']

result = pd.read_csv('./dataset-csv/disease-symptom-merged.csv', encoding='utf-8', index_col=None, header=0)


def findConcept(cui, lat):
    results = umlsDF.loc[(umlsDF['CUI'] == cui) & (umlsDF['LAT'] == lat)]["STR"].unique()

    if len(results) >= 1:
        return results[0]
    else:
        return cui


labelsDir = "./flaskapp/app/frontend/data/"
languages = ["GER", "ENG"]
convertIso = {"GER": "de", "ENG": "en"}
sy_cuis = result["Symptom"].unique()

for lat in languages:
    currentLatOut = []

    for sy in sy_cuis:
        currentLatOut.append({"label": findConcept(sy, lat), "value": sy})
    print(currentLatOut)
    with io.open(labelsDir + convertIso[lat] + '_Labels.js', 'w+', encoding='utf-8') as f:
        f.write("exports." + convertIso[lat] + "LABELS = " + json.dumps(currentLatOut, ensure_ascii=False) + ";")
