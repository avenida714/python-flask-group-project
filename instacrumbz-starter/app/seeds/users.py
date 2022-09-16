import profile
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo',
        email='demo@aa.io',
        name='Demo',
        bio='Im Demo',
        gender='Robot',
        cellphone='5109114200',
        profile_img='img.jpeg',
        password='password'
        )
    marnie = User(
        username='marnie',
        email='marnie@aa.io',
        name='marnie',
        bio='Im Marnie',
        gender='Female',
        cellphone='5109114201',
        profile_img='img.jpeg',
        password='password'
        )
    bobbie = User(
        username='bobbie',
        email='bobbie@aa.io',
        name='Bobbie',
        bio='Im bobbie',
        gender='Male',
        cellphone='5109114202',
        profile_img='img.jpeg',
        password='password'
        )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
