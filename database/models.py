# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 29, 2024 11:22:07
# Database: sqlite:////tmp/tmp.4qOT2N9VEG/flinstones_1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Activity(SAFRSBaseX, Base):
    """
    description: Represents an activity offered at a destination.
    """
    __tablename__ = 'activity'
    _s_collection_name = 'Activity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    DestinationActivityList : Mapped[List["DestinationActivity"]] = relationship(back_populates="activity")
    GuideList : Mapped[List["Guide"]] = relationship(back_populates="activity")
    UserPreferenceList : Mapped[List["UserPreference"]] = relationship(back_populates="preferred_activity")



class Destination(SAFRSBaseX, Base):
    """
    description: Represents a holiday destination.
    """
    __tablename__ = 'destination'
    _s_collection_name = 'Destination'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    location = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    AccommodationList : Mapped[List["Accommodation"]] = relationship(back_populates="destination")
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="destination")
    DestinationActivityList : Mapped[List["DestinationActivity"]] = relationship(back_populates="destination")
    EventList : Mapped[List["Event"]] = relationship(back_populates="destination")
    PackageDestinationList : Mapped[List["PackageDestination"]] = relationship(back_populates="destination")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="destination")
    TransportationList : Mapped[List["Transportation"]] = relationship(back_populates="destination")
    UserPreferenceList : Mapped[List["UserPreference"]] = relationship(back_populates="preferred_destination")



class Package(SAFRSBaseX, Base):
    """
    description: Represents holiday packages that include multiple destinations.
    """
    __tablename__ = 'package'
    _s_collection_name = 'Package'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    price = Column(Float)

    # parent relationships (access parent)

    # child relationships (access children)
    PackageDestinationList : Mapped[List["PackageDestination"]] = relationship(back_populates="package")



class User(SAFRSBaseX, Base):
    """
    description: Represents a user in the Flintstones holiday planner.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    BookingList : Mapped[List["Booking"]] = relationship(back_populates="user")
    ReviewList : Mapped[List["Review"]] = relationship(back_populates="user")
    UserPreferenceList : Mapped[List["UserPreference"]] = relationship(back_populates="user")



class Accommodation(SAFRSBaseX, Base):
    """
    description: Represents accommodation available at destinations.
    """
    __tablename__ = 'accommodation'
    _s_collection_name = 'Accommodation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    type = Column(String)
    destination_id = Column(ForeignKey('destination.id'))

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("AccommodationList"))

    # child relationships (access children)



class Booking(SAFRSBaseX, Base):
    """
    description: Represents a booking made by a user for a holiday.
    """
    __tablename__ = 'booking'
    _s_collection_name = 'Booking'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    destination_id = Column(ForeignKey('destination.id'))
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    total_cost = Column(Float)

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("BookingList"))
    user : Mapped["User"] = relationship(back_populates=("BookingList"))

    # child relationships (access children)



class DestinationActivity(SAFRSBaseX, Base):
    __tablename__ = 'destination_activity'
    _s_collection_name = 'DestinationActivity'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    destination_id = Column(ForeignKey('destination.id'))
    activity_id = Column(ForeignKey('activity.id'))

    # parent relationships (access parent)
    activity : Mapped["Activity"] = relationship(back_populates=("DestinationActivityList"))
    destination : Mapped["Destination"] = relationship(back_populates=("DestinationActivityList"))

    # child relationships (access children)



class Event(SAFRSBaseX, Base):
    """
    description: Represents special events occurring at a destination.
    """
    __tablename__ = 'event'
    _s_collection_name = 'Event'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    date = Column(DateTime)
    destination_id = Column(ForeignKey('destination.id'))

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("EventList"))

    # child relationships (access children)



class Guide(SAFRSBaseX, Base):
    """
    description: Represents guides available for activities at destinations.
    """
    __tablename__ = 'guide'
    _s_collection_name = 'Guide'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    activity_id = Column(ForeignKey('activity.id'))

    # parent relationships (access parent)
    activity : Mapped["Activity"] = relationship(back_populates=("GuideList"))

    # child relationships (access children)



class PackageDestination(SAFRSBaseX, Base):
    """
    description: Represents destinations included in a holiday package.
    """
    __tablename__ = 'package_destination'
    _s_collection_name = 'PackageDestination'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    package_id = Column(ForeignKey('package.id'))
    destination_id = Column(ForeignKey('destination.id'))

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("PackageDestinationList"))
    package : Mapped["Package"] = relationship(back_populates=("PackageDestinationList"))

    # child relationships (access children)



class Review(SAFRSBaseX, Base):
    """
    description: Represents reviews given by users for destinations.
    """
    __tablename__ = 'review'
    _s_collection_name = 'Review'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    destination_id = Column(ForeignKey('destination.id'))
    rating = Column(Integer)
    comments = Column(String)

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("ReviewList"))
    user : Mapped["User"] = relationship(back_populates=("ReviewList"))

    # child relationships (access children)



class Transportation(SAFRSBaseX, Base):
    """
    description: Represents transportation options available for a destination.
    """
    __tablename__ = 'transportation'
    _s_collection_name = 'Transportation'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    type = Column(String)
    cost = Column(Float)
    destination_id = Column(ForeignKey('destination.id'))

    # parent relationships (access parent)
    destination : Mapped["Destination"] = relationship(back_populates=("TransportationList"))

    # child relationships (access children)



class UserPreference(SAFRSBaseX, Base):
    """
    description: Represents user preferences for activities and destinations.
    """
    __tablename__ = 'user_preference'
    _s_collection_name = 'UserPreference'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'))
    preferred_activity_id = Column(ForeignKey('activity.id'))
    preferred_destination_id = Column(ForeignKey('destination.id'))

    # parent relationships (access parent)
    preferred_activity : Mapped["Activity"] = relationship(back_populates=("UserPreferenceList"))
    preferred_destination : Mapped["Destination"] = relationship(back_populates=("UserPreferenceList"))
    user : Mapped["User"] = relationship(back_populates=("UserPreferenceList"))

    # child relationships (access children)
