from werkzeug.security import generate_password_hash
from app.models import db, User, League
from faker import Faker
# Adds a demo user, you can add other users here if you want
def seed_users():
    fake = Faker()
    users = [
        {'username':'Demo', 'email': 'demo@aa.io','password':'password'},
        ]
    for _ in range(40):
        users.append({
            'username': fake.user_name(),
            'email': fake.email(),
            'password': 'password'
        })
    for user in users:
        load_user = User(username=user['username'], email=user['email'], password=user['password'])
        db.session.add(load_user)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
