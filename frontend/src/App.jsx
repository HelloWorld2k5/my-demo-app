import { useState, useEffect } from "react";

function App() {
    const [msg, setMsg] = useState('Đang tải...');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
            .then(res => res.json())
            .then(data => setMsg(data.message))
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div>
            <h1>Frontend React</h1>
            <p>Thông báo từ backend: {msg}</p>
        </div>
    );
}

export default App;