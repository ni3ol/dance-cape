from flask import Flask, request


app = Flask(__name__)


@app.route("/")
def welcome():
    name = request.args['name']
    return 'Welcome to DanceCape, ' + name


def main():
    app.run(host="0.0.0.0", port=5000, debug=True)


if __name__ == "__main__":
    main()
