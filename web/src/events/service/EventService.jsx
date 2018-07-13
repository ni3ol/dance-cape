import api from 'web/api.jsx';

const EVENTS_ENDPOINT = '/events/';

export default class EventService {
  static getEvents() {
    return new Promise((resolve, reject) => {
      api
        .get(EVENTS_ENDPOINT)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
