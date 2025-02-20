"use client";
import * as uuid from 'uuid';
import { useState, useEffect } from 'react';

function Chatbot() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Generate a new session ID when the component mounts on the client
    setSessionId(uuid.v4());
  }, []);

  return (
    <>
      <script src="https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.7/dist/build/static/js/bundle.min.js"></script>
      <langflow-chat
        window_title="MetaAgent"
        flow_id="6d84b87a-7e17-40fc-b113-f04ac53ffd13"
        host_url="https://bot.agentsprotocol.xyz"
        api_key="sk-b7H4Ow9hT3aH3GlGh4Jc6aHcid-Q15RN46qKYu1Ryxs"
        style={{
          position: "fixed",
          bottom: 12,
          right: 12,
          zIndex: 9999
        }}
        chat_position="top-left"
        session_id={sessionId}
      >
      </langflow-chat>
    </>
  )

}

export default Chatbot