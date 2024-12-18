from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Habilita CORS para solicitudes desde el frontend

@app.route('/')
def index():
    return render_template('index.html')  # Servimos el archivo HTML

@app.route('/api/process', methods=['POST'])
def process_data():
    data = request.json  # Obtiene los datos en formato JSON
    print("Datos recibidos:", data)  # Imprime los datos para verificar
    
    if not data:
        return jsonify({'error': 'No data received'}), 400

    user_input = data.get('input', '')
    result = f"Servidor Python: {user_input}"
    return jsonify({'result': result})  # Devuelve la respuesta en JSON

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Render uses the PORT env variable
    app.run(host='0.0.0.0', port=port, debug=True)
