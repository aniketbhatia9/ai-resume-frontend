"use client";
import {useState} from "react";
import axios from "axios";


export default function LandingPage(){
return(
    <header>
        <nav className="flex justify-around p-6 bg-gray-100 shadow-md">
            <a href="#" className="text-3xl font-bold text-blue-900">Features</a>
            <a href="#" className="text-3xl font-bold text-blue-900">Customers</a>
            <a href="#" className="text-3xl font-bold text-blue-900">Pricing</a>
            <a href="#" className="text-3xl font-bold text-blue-900">Company</a>
            <a href="#" className="text-3xl font-bold text-blue-900">Login</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-3xl font-bold hover:bg-blue-700 transition duration-300">Start free trial</button>
            <button className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-full text-3xl font-bold hover:bg-gray-200 transition duration-300">GitHub</button>
            <button className="bg-white text-blue-900 border-2 border-blue-900 px-6 py-2 rounded-full text-3xl font-bold hover:bg-gray-200 transition duration-300">Dark Mode</button>
        </nav>
    </header>
)
}