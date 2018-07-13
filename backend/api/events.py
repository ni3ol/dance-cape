from flask import Blueprint, jsonify
from backend.api import event_service
from backend.api.schemas import EventSchema

blueprint = Blueprint('events', __name__)


@blueprint.route('/events/')
def retrieve_events():
    events = event_service.get_events()
    return events
