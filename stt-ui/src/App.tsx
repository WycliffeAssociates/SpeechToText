import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Select from 'react-select';
import supportedLanguages from './langs';
import "./App.css";

interface LanguageOption {
  label: string,
  value: string
};

function App() {
  const options = supportedLanguages.map((option) => ({
    value: option,
    label: option,
  }));
  const [availableLanguages, setAvailableLanguages] = useState<LanguageOption[]>(options);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [selectedLanguage, setSelectedLanguages] = useState<string>("eng");
  const [transcription, setTranscription] = useState<string>('Your transcription will appear here');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleLanguageSelection = (selected: any) => {
    setSelectedLanguages(selected["value"]);
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setIsProcessing(true);
    setTranscription("Processing...")
    setAudioFile(file);
    sendAudioToServer(file, selectedLanguage!);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/*": [], // Allow any audio file type
    }
  });

  const sendAudioToServer = async (audio: File, language: string) => {
    const formData = new FormData();
    formData.append('audio', audio, audio.name);
    formData.append('language', language);

    try {
      const response = await fetch('http://localhost:80/upload-audio', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Audio file uploaded successfully');
        const data = await response.json();
        setTranscription(data["transcription"]);
      } else {
        console.error('Audio upload failed');
      }
      setIsProcessing(false);
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Speech to Text</h1>
      <h2 className="text-1xl italic text-gray-800 mb-8">with MMS</h2>
      <Select
        className="w-60 mb-5"
        options={availableLanguages}
        placeholder="Select Language"
        onChange={handleLanguageSelection}
        styles={{
          option: (baseStyles, _) => ({
            ...baseStyles,
            color: "rgb(75 85 99 / var(--tw-text-opacity, 1))",
          }),
        }}
      />
      <div
        {...getRootProps()}
        className={`w-80 p-12 border-2 border-dashed rounded-lg cursor-pointer transition 
          ${isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-300 bg-white"}`}
      >
        <input {...getInputProps()} />
        <p className="text-center text-gray-600">
          {isDragActive ? "Drop the audio file here..." : "Drag & drop an audio file, or click to select one"}
        </p>
      </div>
      {audioFile && (
        <div className="mt-6 p-4 bg-white shadow rounded-lg w-80">
          <h2 className="text-lg font-semibold text-gray-800">Uploaded File:</h2>
          <p className="text-gray-600 mt-2">{audioFile.name}</p>
          <audio controls className="mt-4 w-full">
            <source src={URL.createObjectURL(audioFile)} type={audioFile.type} />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
      <div className="mt-6 p-4 bg-white shadow rounded-lg w-1/2" style={{ minWidth: '400px' }}>
        <h2 className="text-lg font-semibold text-gray-800">Transcribed Text:</h2>
        <div role="status" className="flex justify-center mt-5" style={{ display: isProcessing ? "flex" : "none" }}>
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        <p className="text-gray-600 mt-2">
          {/* Transcribed text section */}
          {transcription}
        </p>
      </div>
    </div>
  );
};

export default App;
