import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from stt import transcribe

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/upload-audio', methods=['POST'])
def upload_audio():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    audio_file = request.files['audio']
    language = request.form['language']

    if audio_file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Save the file to the uploads folder
    file_path = os.path.join(r"D:\misc\temp", 'tmp' + audio_file.filename)
    audio_file.save(file_path)
    
    transcription = transcribe(file_path, language)

    print(transcription)

    return jsonify({"transcription": transcription }), 200

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=80, debug=True, use_reloader=False)