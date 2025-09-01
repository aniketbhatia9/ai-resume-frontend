"use client";

import {useState} from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function ResumeUploadForm() {
const [file, setFile] = useState<File | null>(null);
const [jobDescription, setJobDescription] = useState("");
const [result, setResult] = useState<AnalysisResult | null>(null);
const [loading, setLoading] = useState(false);

interface AnalysisResult {
  fileName: string;
  message: string;
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
}


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !jobDescription) {
        alert("Please upload a file and enter a job description.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("jobDescription", jobDescription);
    try{
        setLoading(true);
        const response = await axios.post
        ("https://aniket-resume-api-czd9e6e8a2d9azgf.centralindia-01.azurewebsites.net/api/resume/analyze", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setResult(response.data);
    }catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to analyze resume.");
    }finally {
        setLoading(false);
    }
};
return (
    <>    
    <div className="max-w-screen-xl mx-auto p-10 bg-white shadow-lg rounded-4xl">
        <h2 className="text-2xl font-bold mb-4">AI Resume Analyzer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="file" 
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                className="block w-full border p-2 rounded"
            />
            <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Enter job description"
                className="w-full border p-2 rounded h-32"
            ></textarea>
            <button 
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            disabled={loading}
            >
                {loading ? "Analyzing..." : "Analyze Resume"}
                </button>
                </form>

            {result && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                    <h3 className="text-lg font-semibold mb-2">Analysis Result</h3>
                    {/* Progress Bar */}
    <div className="mb-4">
      <p className="mb-2 font-medium">Match Percentage</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${result.matchPercentage}%` }}
        ></div>
      </div>
      <p className="text-sm mt-1">{result.matchPercentage}% match</p>
    </div>

    {/* Skills List */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div>
        <p className="font-medium text-green-600">Matched Skills ✅</p>
        <ul className="list-disc list-inside text-sm">
          {result.matchedSkills.map((skill, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-medium text-red-600">Missing Skills ❌</p>
        <ul className="list-disc list-inside text-sm">
          {result.missingSkills.map((skill, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Pie Chart */}
    <div className="flex justify-center">
      <PieChart width={300} height={250}>
        <Pie
          data={[
            { name: "Matched", value: result.matchedSkills.length },
            { name: "Missing", value: result.missingSkills.length },
          ]}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          <Cell fill="#22c55e" /> {/* Green */}
          <Cell fill="#ef4444" /> {/* Red */}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  </div>
  
)}
</div>
</>
);
}
