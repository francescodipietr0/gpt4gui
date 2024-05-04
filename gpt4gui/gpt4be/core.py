from flask import Flask, Response, request, jsonify, stream_with_context
from flask_cors import CORS
from flask_compress import Compress
import os, requests, json

app = Flask(__name__)
CORS(app)
Compress(app)

# api esposta al fe
@app.route('/api/test', methods=['GET'])
def get_prompt_from_fe():

    prompt = request.args.get('prompt')
    previous_messages_json = request.args.get('storedMessages')
    previous_messages = json.loads(previous_messages_json)

    # TODO: nel momento in cui la logica di memorizzazione verrà spostata sul back end
    # bisognerà fare un grande rework per andare a non scrivere ogni volta tutto l'array di history
    # ma ad aggiungere solo il nuovo elemento

    history = [{'role': 'system', 'content': 'comportati come un chatbot pronto ad aiutare ed esaudire al meglio le richieste che ti vengono fatte; rispondi in italiano'}]
    
    for message in previous_messages:
        role = message['answer']['choices']['message']['role']
        content = message['answer']['choices']['message']['content']
        history.append({'role': role, 'content': content})
        
    history.append({'role': 'user', 'content': prompt})

    # # chiamata a gpt 4 dando come parametro il prompt ricevuto e la history
    # response = get_openai_response(prompt, history)

    # # ritorno la risposta dell'api invocata
    # return jsonify(response)

    return Response(
        stream_with_context(get_openai_response(prompt, history)),
        content_type='application/json'
    )


# chiamata ad api di openai
def get_openai_response(prompt, history):

    api_key = os.getenv("openai_key")
    if(api_key):
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }
        data = {
            'model': 'gpt-4-0125-preview',
            'messages': history,
            'stream':True
        }
        # response = requests.post('https://api.openai.com/v1/chat/completions', headers=headers, json=data)
        # response_json = response.json()

        # return response_json
        with requests.post('https://api.openai.com/v1/chat/completions', headers=headers, json=data, stream=True) as r:
            for chunk in r.iter_lines():
                if chunk:
                    yield chunk

    return "variabile d'ambiente non trovata"

if __name__ == '__main__':
    app.run(debug=True, port=8080)