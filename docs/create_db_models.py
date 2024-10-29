# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Float, DateTime, Table
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
import datetime

Base = declarative_base()

# Association table for the many-to-many relationship between Destination and Activity
destination_activity_association = Table(
    'destination_activity', Base.metadata,
    Column('id', Integer, primary_key=True, autoincrement=True),
    Column('destination_id', Integer, ForeignKey('destination.id')),
    Column('activity_id', Integer, ForeignKey('activity.id'))
)

class User(Base):
    """
    description: Represents a user in the Flintstones holiday planner.
    """
    __tablename__ = 'user'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String)

class Destination(Base):
    """
    description: Represents a holiday destination.
    """
    __tablename__ = 'destination'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    location = Column(String)

class Activity(Base):
    """
    description: Represents an activity offered at a destination.
    """
    __tablename__ = 'activity'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)

class Booking(Base):
    """
    description: Represents a booking made by a user for a holiday.
    """
    __tablename__ = 'booking'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    destination_id = Column(Integer, ForeignKey('destination.id'))
    start_date = Column(DateTime, default=datetime.datetime.now)
    end_date = Column(DateTime, default=datetime.datetime.now)
    total_cost = Column(Float)

class Accommodation(Base):
    """
    description: Represents accommodation available at destinations.
    """
    __tablename__ = 'accommodation'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    type = Column(String)  # e.g., "hotel", "cottage"
    destination_id = Column(Integer, ForeignKey('destination.id'))

class UserPreference(Base):
    """
    description: Represents user preferences for activities and destinations.
    """
    __tablename__ = 'user_preference'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    preferred_activity_id = Column(Integer, ForeignKey('activity.id'))
    preferred_destination_id = Column(Integer, ForeignKey('destination.id'))

class Transportation(Base):
    """
    description: Represents transportation options available for a destination.
    """
    __tablename__ = 'transportation'

    id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String)  # e.g., "car", "plane", "train"
    cost = Column(Float)
    destination_id = Column(Integer, ForeignKey('destination.id'))

class Review(Base):
    """
    description: Represents reviews given by users for destinations.
    """
    __tablename__ = 'review'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    destination_id = Column(Integer, ForeignKey('destination.id'))
    rating = Column(Integer)  # Rating out of 5
    comments = Column(String)

class Guide(Base):
    """
    description: Represents guides available for activities at destinations.
    """
    __tablename__ = 'guide'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    activity_id = Column(Integer, ForeignKey('activity.id'))

class Event(Base):
    """
    description: Represents special events occurring at a destination.
    """
    __tablename__ = 'event'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    date = Column(DateTime, default=datetime.datetime.now)
    destination_id = Column(Integer, ForeignKey('destination.id'))

class Package(Base):
    """
    description: Represents holiday packages that include multiple destinations.
    """
    __tablename__ = 'package'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float)

class PackageDestination(Base):
    """
    description: Represents destinations included in a holiday package.
    """
    __tablename__ = 'package_destination'

    id = Column(Integer, primary_key=True, autoincrement=True)
    package_id = Column(Integer, ForeignKey('package.id'))
    destination_id = Column(Integer, ForeignKey('destination.id'))

# Create an engine and a database session
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

# Add sample data
user_1 = User(name="Fred Flintstone", email="fred@bedrock.com")
user_2 = User(name="Barney Rubble", email="barney@bedrock.com")

destination_1 = Destination(name="Grand Canyon", location="Arizona")
destination_2 = Destination(name="Yellowstone Park", location="Wyoming")

activity_1 = Activity(name="Dinosaur Ride", description="A thrilling ride on a friendly dinosaur.")
activity_2 = Activity(name="Stone Age Hiking", description="Explore the ancient trails of the Stone Age.")

destination_activity_1 = destination_activity_association.insert().values(destination_id=destination_1.id, activity_id=activity_1.id)
destination_activity_2 = destination_activity_association.insert().values(destination_id=destination_2.id, activity_id=activity_2.id)

booking_1 = Booking(user_id=user_1.id, destination_id=destination_1.id, total_cost=299.99)
booking_2 = Booking(user_id=user_2.id, destination_id=destination_2.id, total_cost=199.99)

accommodation_1 = Accommodation(name="Bedrock Hotel", type="hotel", destination_id=destination_1.id)
accommodation_2 = Accommodation(name="Cave Suite", type="cottage", destination_id=destination_2.id)

user_preference_1 = UserPreference(user_id=user_1.id, preferred_activity_id=activity_1.id, preferred_destination_id=destination_1.id)
user_preference_2 = UserPreference(user_id=user_2.id, preferred_activity_id=activity_2.id, preferred_destination_id=destination_2.id)

transportation_1 = Transportation(type="Flintmobile", cost=49.99, destination_id=destination_1.id)
transportation_2 = Transportation(type="Bouldermobile", cost=39.99, destination_id=destination_2.id)

review_1 = Review(user_id=user_1.id, destination_id=destination_1.id, rating=5, comments="Amazing fun for the family!")
review_2 = Review(user_id=user_2.id, destination_id=destination_2.id, rating=4, comments="Great adventure!")

guide_1 = Guide(name="Bam Bam", activity_id=activity_1.id)
guide_2 = Guide(name="Pebbles", activity_id=activity_2.id)

event_1 = Event(name="Annual Bedrock Festival", date=datetime.datetime(2023, 12, 25), destination_id=destination_1.id)
event_2 = Event(name="Prehistoric Parade", date=datetime.datetime(2024, 1, 13), destination_id=destination_2.id)

package_1 = Package(name="Rocky Adventure", description="8 days exploring the best of Bedrock", price=999.99)
package_destination_1 = PackageDestination(package_id=package_1.id, destination_id=destination_1.id)

# Add data to the session and commit
session.add_all([
    user_1, user_2,
    destination_1, destination_2,
    activity_1, activity_2,
    booking_1, booking_2,
    accommodation_1, accommodation_2,
    user_preference_1, user_preference_2,
    transportation_1, transportation_2,
    review_1, review_2,
    guide_1, guide_2,
    event_1, event_2,
    package_1, package_destination_1
])
session.commit()
