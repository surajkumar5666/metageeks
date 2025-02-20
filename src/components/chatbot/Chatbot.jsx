// components/ChatbotWidget.tsx
"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { MessageCircle, X, Send, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';

const SOCKET_URL = 'wss://metaagent.agentsprotocol.xyz/';
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_INTERVAL = 3000;

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([
    {
      type: 'system',
      content: 'Please provide your email address to continue.'
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [sessionId] = useState(`session-${Date.now()}`);
  const [email, setEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('connecting');
  const [reconnectAttempts, setReconnectAttempts] = useState(0);

  const messagesEndRef = useRef(null);

  const createWebSocket = useCallback(() => {
    try {
      const socket = new WebSocket(SOCKET_URL);

      socket.onopen = () => {
        console.log('WebSocket Connected');
        setConnectionStatus('connected');
        setReconnectAttempts(0);
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Received message:', data);

          switch (data.type) {
            case 'start-session':
              setMessages(prev => [...prev, {
                type: 'system',
                content: data.message
              }]);
              break;

            case 'verification-started':
              setMessages(prev => [...prev, {
                type: 'system',
                content: data.message
              }]);
              break;

            case 'verification-success':
              setIsEmailVerified(true);
              setMessages(prev => [...prev, {
                type: 'system',
                content: data.message
              }]);
              break;

            case 'verification-failed':
              setMessages(prev => [...prev, {
                type: 'system',
                content: data.message
              }]);
              break;

            case 'stream':
              setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                if (lastMessage?.type === 'assistant') {
                  const updatedMessages = [...prev];
                  updatedMessages[prev.length - 1] = {
                    ...lastMessage,
                    content: lastMessage.content + (data.content || '')
                  };
                  return updatedMessages;
                } else {
                  return [...prev, {
                    type: 'assistant',
                    content: data.content || ''
                  }];
                }
              });
              break;

            case 'error':
              setMessages(prev => [...prev, {
                type: 'system',
                content: data.message
              }]);
              break;
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      socket.onclose = () => {
        console.log('WebSocket Disconnected');
        setConnectionStatus('disconnected');

        if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
          setTimeout(() => {
            setReconnectAttempts(prev => prev + 1);
            setConnectionStatus('connecting');
            createWebSocket();
          }, RECONNECT_INTERVAL);
        }
      };

      socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
        setMessages(prev => [...prev, {
          type: 'system',
          content: 'Connection error. Attempting to reconnect...'
        }]);
      };

      setWs(socket);
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      setConnectionStatus('disconnected');
    }
  }, [reconnectAttempts, messages]);

  useEffect(() => {
    createWebSocket();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!currentMessage.trim() || !ws || connectionStatus !== 'connected') return;

    setMessages(prev => [...prev, {
      type: 'user',
      content: currentMessage
    }]);

    if (!isEmailVerified) {
      if (currentMessage.includes('@')) {
        setEmail(currentMessage);
        ws.send(JSON.stringify({
          type: 'start-session',
          sessionId,
          email: currentMessage
        }));
      } else if (email && currentMessage.length === 6) {
        ws.send(JSON.stringify({
          type: 'complete-verification',
          sessionId,
          email,
          otp: currentMessage
        }));
      } else {
        setMessages(prev => [...prev, {
          type: 'system',
          content: `Welcome to MetaAgent! To ensure a secure and personalized experience, please share your email address so I can assist you further.`
        }]);
      }
    } else {
      ws.send(JSON.stringify({
        type: 'chat',
        sessionId,
        email,
        query: currentMessage
      }));
    }

    setCurrentMessage('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const ConnectionStatus = () => (
    <Badge
      bg={
        connectionStatus === 'connected'
          ? 'success'
          : connectionStatus === 'connecting'
            ? 'warning'
            : 'danger'
      }
      className="d-flex align-items-center"
    >
      <div
        className={`rounded-circle ${connectionStatus === 'connected'
            ? 'bg-success'
            : connectionStatus === 'connecting'
              ? 'bg-warning'
              : 'bg-danger'
          }`}
        style={{ width: '8px', height: '8px' }}
      />
      {connectionStatus === 'connected'
        ? 'Connected'
        : connectionStatus === 'connecting'
          ? 'Connecting...'
          : 'Disconnected'}
    </Badge>
  );

  return (
    <div className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          variant="primary"
          className="rounded-circle p-3"
        >
          <MessageCircle size={24} />
        </Button>
      ) : (
        <Card style={{ width: '24rem', height: '600px' }}>
          <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="mb-0">MetaAgent</h5>
                <ConnectionStatus />
              </div>
              <small>
                Powered by{' '}
                <a
                  href="https://www.agentsprotocol.xyz/"
                  target="_blank"
                  className="text-white text-decoration-underline"
                >
                  Agents Protocol
                </a>
              </small>
            </div>
            <Button
              variant="link"
              className="text-white p-0"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </Button>
          </Card.Header>

          <div className="flex-grow-1 overflow-auto p-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`d-flex ${message.type === 'user' ? 'justify-content-end' : 'justify-content-start'
                  } mb-1`}
              >
                <div
                  className={`p-2 rounded ${message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-light'
                    }`}
                  style={{ maxWidth: '80%' }}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <Card.Footer className="bg-white">
            <Form onSubmit={handleSendMessage}>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder={
                    connectionStatus !== 'connected'
                      ? 'Connecting...'
                      : !isEmailVerified
                        ? email
                          ? 'Enter OTP or email ...'
                          : 'Enter your email...'
                        : 'Type your message...'
                  }
                  disabled={connectionStatus !== 'connected'}
                />
                <Button
                  type="submit"
                  variant="primary"
                  disabled={connectionStatus !== 'connected'}
                >
                  <Send size={20} />
                </Button>
              </InputGroup>
            </Form>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
}