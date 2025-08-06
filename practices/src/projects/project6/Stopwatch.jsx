import React from 'react'
import { useState, useEffect } from 'react'
import './Stopwatch.css'

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval;

        if(isRunning) {
            interval = setInterval(() => {
                setSeconds(function(prev) {
                    return prev + 1
                })
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        };
    }, [isRunning])
    
  return (
    <div className='stopwatch'>
        <h1 className='stopwatch-time'>{new Date(seconds * 1000).toISOString().substr(11, 8)}</h1>
        <div className='stopwatch-controls'>
            <button className='stopwatch-btn' onClick={() => setIsRunning(true)}>Start</button>
            <button className='stopwatch-btn' onClick={() => setIsRunning(false)}>Stop</button>
            <button className='stopwatch-btn reset' onClick={() => {setIsRunning(false); setSeconds(0)}}>Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch