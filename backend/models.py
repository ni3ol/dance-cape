# makes db conections. talks to db
from sqlalchemy import create_engine, Column, Integer, String, DateTime
# factory makes base
from sqlalchemy.ext.declarative import declarative_base
# makes a session class
from sqlalchemy.orm import sessionmaker

# high level collects data descirptions.
Base = declarative_base()
engine = create_engine('sqlite:///dancecape.db', echo=True)
# manages a db interaction. 
Session = sessionmaker(bind=engine)


# inheriting from base lets sqlalchemy track when models are declared.
class Event(Base):
    __tablename__ = 'events'
    id = Column(Integer, primary_key=True)
    name = Column(String)

# Base.metadata.bind(engine)
#can call with bind=engine
Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)


event = Event(name='Salsa')
session = Session()
session.add(event)
session.commit()
session.close()


session = Session()
events = session.query(Event).all()
print(list(events)[0].name)