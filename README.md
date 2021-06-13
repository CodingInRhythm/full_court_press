<div align="center">
   <h1>Full Court Press</h1>
</div>

Full Court Press is a basketball trading card app that allows user to sign up, join leagues with their friends and add 5 players to their team.  They can drop players and select from a list of available players.

## Technologies
- ReactJS and Redux
- Python
- Flask
- Flask-SQL Alchemy
- PostgresQL

## Features

#### Splash Page

#### Main Team Page

#### User leagues
- Users can see their joined and non-joined leagues
- Users can create leagues 
- Users can join leagues 
- Users can delete leagues

#### User teams
- Users can see their teams
- Users can create teams
- Users can edit their teams by adding and dropping players
- Users can delete their teams.


## Getting started

To run this project, follow these types:

1. Clone repository

   ```bash
   git clone https://github.com/CodingInRhythm/full_court_press.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```
      
      ```bash
      cd react-app
      npm install
      ```

3. Create a **.env** file based on the example .env in the root of your project.

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file.

5. Enter your pipenv shell, migrate and then seed your database, and run your flask app:

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run app in development, at root level:
   ```bash
   flask run
   ```
   and then from react-app folder:
   ```bash
   npm start
   ```


