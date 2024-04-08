from flask import Flask

app = Flask(__name__)

@app.route('/api/test', methods=['POST'])
def test_request():
    return 'success!'

if __name__ == '__main__':
    app.run(debug=True, port=8080)