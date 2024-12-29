import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import ConectDB from '../test/Test.jsx'

function Home() {

    const [count, setCount] = useState(0);

    return (
        <>
            <main className='react-container'>
                <div >
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="cardb">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <h2 className="fs-1 fw-bold my-5 text-ligth">
                        ¡Página en desarrollo!
                    </h2>
                </div>
                <ConectDB />
            </main >
        </>
    );
}
export default Home;