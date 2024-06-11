import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    // Create a new Broadcast Channel with a specific name
    const channel = new BroadcastChannel('exampleChannel');
    
    // Add event listener to listen for messages
    channel.onmessage = event => {
      setMessage(event.data);
    };

    return () => {
      // Clean up by closing the channel when component unmounts
      channel.close();
    };
  }, []);

  const sendMessage = () => {
    // Create a new Broadcast Channel with the same name to send messages
    const channel = new BroadcastChannel('exampleChannel');
    
    // Send a message
    channel.postMessage('Hello from React!');
  };

  return (
    <div>
      <h1>React Broadcast Channel Example</h1>
      <button onClick={sendMessage}>Send Message</button>
      <p>Received Message: {message}</p>
    </div>
  );
}

export default App;
