import { useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');
    
    const sendMessage = async () => {
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        const data = await response.json();
        console.log(data); // Log the response from the backend
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
}
