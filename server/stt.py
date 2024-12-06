from transformers import AutoModelForCTC, AutoProcessor
import torch
import librosa

model_id = "facebook/mms-1b-all"

processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForCTC.from_pretrained(model_id)

def transcribe(audio_file, language) -> str:
    processor.tokenizer.set_target_lang(language)
    model.load_adapter(language)

    input_audio, _ = librosa.load(audio_file, sr=16000)

    # tokenize
    inputs = processor(input_audio, sampling_rate=16_000, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs).logits

    ids = torch.argmax(outputs, dim=-1)[0]
    transcription = processor.decode(ids)

    return transcription