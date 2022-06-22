# ALPHA
This is a multilingual symptom-disease classification app. Translation is managed through the UMLS coding standard.
A multinomial Naive Bayes classifier is trained on a handpicked dataset, which is freely available under CC4.0. 

To get started:
- Clone this repo
- Install requirements
- Run the scripts (see below) and npm dependencies
- Get a UMLS license to download UMLS lexica & generate DB (umls.sh)
- Run and check [ http://localhost:5001]( http://localhost:5001)
- Done! :tada:
 

### Motivation
Finding the right diagnosis cannot be achieved by extracting symptoms and running a classification algorithm. The hardest part is asking the right questions, focusing what is important in the situation, connecting other events, and much more. Despite all this, I have long been exited about writing a symptom-disease lookup system to quickly gather related symptoms to symptoms etc. Not everything the model outputs is nonsense. Actually it helps a lot to quickly get a list of diseases given to a set of symptoms.

### Data
The data is formatted as CSV files. Example entry:
```csv
Disease,Symptom
C0162565,C0039239
```

Data sources:
- `DiseaseSymptomKB.csv`: extracted from [Disease-Symptom Knowledge Database](http://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html). This data solely belongs to the respective authors. The authors are not not affiliated with this project.
- `disease-symptom-db.csv`: Manually created by hand. Freely available under CC 4.0.

### Install
**Training models & generating files from data:**
1. Run `cui2vec-converter.py` to convert to GloVe-format.
You need to get the pretrained embeddings first, available here: https://figshare.com/s/00d69861786cd0156d81. Place them in the data folder.
2. Run `generateLabels.py` to create the option labels for the select fields.
Languages are currently hardcoded as list and can be extended if needed.
3. Run `Train Notebook.ipynb` to train a MNB classifier (for the disease prediction). Other necessary files are generated, too. 
4. Run `relatedSymptoms.py` to train the model for the autosuggestion feature. This uses cui2vec.
Please note that the authors of cui2vec are not affiliated with this code. 

**React client:**
cd into `flaskapp` and `npm install`. For development `npm run watch`, for production `npm run build`.

### Flask Service
A small flask app is avaiable to showcase the trained models. cd into the `flaskapp` folder and start the app
```bash
python app.py
```
