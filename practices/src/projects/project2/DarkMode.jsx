import React, { useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
            <h1>Dark Mode Toggle</h1>
            <button className="toggle-btn" onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <p>This is an example of a dark mode toggle.</p>
        </div>
    );
};

export default DarkMode;