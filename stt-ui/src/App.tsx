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
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const options = supportedLanguages.map((option) => ({
    value: option,
    label: option,
  }));  
  const [availableLanguages, setAvailableLanguages] = useState<LanguageOption[]>(options);
  const [selectedLanguage, setSelectedLanguages] = useState<string>("eng");
  const [transcription, setTranscription] = useState<string>('Your transcription will appear here');

  const handleLanguageSelection = (selected: any) => {
    setSelectedLanguages(selected["value"]);
  };

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
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
      {/* Transcribed text section */}
      <div className="mt-6 p-4 bg-white shadow rounded-lg w-1/2" style={{minWidth: '400px'}}>
        <h2 className="text-lg font-semibold text-gray-800">Transcribed Text:</h2>
        <p className="text-gray-600 mt-2">
          {/* Placeholder for transcription */}
          {transcription}
        </p>
      </div>
    </div>
  );
};

export default App;
