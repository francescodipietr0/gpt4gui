from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_compress import Compress
import os, requests, time

app = Flask(__name__)
CORS(app)
Compress(app)

# api esposta al fe
@app.route('/api/test', methods=['GET'])
def get_prompt_from_fe():

    prompt = request.args.get('prompt')

    # chiamata a gpt 4 dando come parametro il prompt ricevuto
    response = get_openai_response(prompt)

    # ritorno la risposta dell'api invocata
    return jsonify(response)

# chiamata ad api di openai
def get_openai_response(prompt):

    api_key = os.getenv("openai_key")
    if(api_key):
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }
        data = {
            'model': 'gpt-4-0125-preview',
            'messages': [
                {'role': 'system', 'content': 'comportati come un chatbot pronto ad aiutare ed esaudire al meglio le richieste che ti vengono fatte; rispondi in italiano'},
                {'role': 'user', 'content': prompt}
            ]
        }
        response = requests.post('https://api.openai.com/v1/chat/completions', headers=headers, json=data)
        response_json = response.json()

        return response_json

    return "variabile d'ambiente non trovata"

if __name__ == '__main__':
    app.run(debug=True, port=8080)