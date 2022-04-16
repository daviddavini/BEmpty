# BEmpty
Find empty classrooms near you. Website for UCLA students.

### Installing Python Packages:
'pip install -r requirements.txt' 

### Download Chromedriver in BEmpty folder from this link:

	 https://chromedriver.chromium.org/home

## Server Side

### 1. Run `scrape.py`
Creates `data_classrooms.csv` and `data_courses.csv`

### 2. Run `scrape_loc.py`
Creates `data_buildings.csv`

### 3. Run `format.py`
Creates `data_formatted_classrooms.csv`, `data_formatted_courses.csv` and `data_formatted_buildings.csv`
(To be sent to client)

Put these in `my-app/public/`.

## Client side

### 1. Run `npm start`
Starts localhost for testing

### 2. Run `nom run deploy`
Deploys current version to github

