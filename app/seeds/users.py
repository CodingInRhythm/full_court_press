from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    alex = User(username='Alex', email='lbj@lbj.com', password='password')
    
    ben = User(username='Ben', email='ben@ben.com', password='password')

    steve = User(username='Steve', email="alex@alex.com", password='password')

    jim = User(username='Jim', email="jim@jim.com", password="password", leagues_in=[1,2])
    db.session.add(demo)
    db.session.add(alex)
    db.session.add(ben)
    db.session.add(steve)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
