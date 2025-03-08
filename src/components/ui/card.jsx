import React from "react";

export function Card({ children, className }) {
    return (
        <div className={`p-6 rounded-2xl shadow-lg ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ children }) {
    return (
        <div className="mb-4 border-b border-gray-700 pb-2">
            {children}
        </div>
    );
}

export function CardTitle({ children, className }) {
    return (
        <h2 className={`text-2xl font-bold ${className}`}>
            {children}
        </h2>
    );
}

export function CardContent({ children }) {
    return (
        <div className="text-gray-300">
            {children}
        </div>
    );
}

export function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out ${className}`}
        >
            {children}
        </button>
    );
}
