from flask import Flask, request, jsonify

from flask_cors import CORS

app = Flask(__name__)


@app.route("/")
def welcome():
    name = request.args['name']
    return 'Welcome to DanceCape, ' + name

@app.route("/events/")
def events():
    return jsonify(name='nicol', venue='UCT', date=222222)



def main():
    CORS(app)
    app.run(host="0.0.0.0", port=5000, debug=True)


if __name__ == "__main__":
    main()
