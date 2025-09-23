"use client";

import { useState } from "react";

export default function DiseasePredictionPage() {
  const [symptom, setSymptom] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    // Mock prediction logic
    if (symptom.toLowerCase().includes("gill")) {
      setPrediction("Possible Gill Disease. Suggested Action: Check oxygen levels.");
    } else if (symptom.toLowerCase().includes("appetite")) {
      setPrediction("Possible Bacterial Infection. Suggested Action: Monitor feeding & consider treatment.");
    } else {
      setPrediction("No critical disease detected. Continue monitoring.");
    }
  };

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Disease Prediction</h1>

      {/* Input Form */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold">Enter Fish Symptoms</h2>
        <input
          type="text"
          placeholder="e.g., loss of appetite, gill discoloration"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          className="w-full p-2 border border-[#007AFF] rounded-lg"
        />
        <button
          onClick={handlePredict}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Predict Disease
        </button>
      </div>

      {/* Prediction Result */}
      {prediction && (
        <div className="bg-white shadow-md rounded-2xl border border-blue-300 p-6">
          <h2 className="text-lg font-semibold text-blue-600">Prediction Result</h2>
          <p className="mt-2 text-gray-700">{prediction}</p>
        </div>
      )}
    </div>
  );
}
