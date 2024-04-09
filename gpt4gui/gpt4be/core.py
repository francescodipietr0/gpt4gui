from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/test', methods=['GET'])
def test_request():
    prompt = request.args.get('prompt')
    result = 'success! il prompt era: ' + prompt

    # chiamata a gpt 4 dando come parametro il promp ricevuto
    # ritornare la risposta dell'api invocata
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=8080)