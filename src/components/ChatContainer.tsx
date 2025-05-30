
import React, { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage, { Message } from './ChatMessage';
import ChatInput from './ChatInput';
import { ScrollArea } from '@/components/ui/scroll-area';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Ciao! Benvenuto nella chat. Puoi scrivere messaggi e condividere file qui.',
      sender: 'Assistant',
      timestamp: new Date(),
      isOwn: false,
    },
    {
      id: '2',
      text: 'Perfetto! Posso vedere che funziona tutto bene. Grazie per avermi aiutato a creare questa chat!',
      sender: 'Tu',
      timestamp: new Date(Date.now() - 60000),
      isOwn: true,
    }
  ]);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string, file?: File) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'Tu',
      timestamp: new Date(),
      isOwn: true,
      file: file ? {
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file)
      } : undefined,
    };

    setMessages(prev => [...prev, newMessage]);

    // Simula una risposta dell'assistente dopo un breve delay
    setTimeout(() => {
      const responses = [
        'Messaggio ricevuto! Come posso aiutarti?',
        'Interessante! Dimmi di più.',
        'Ho visto il tuo file. Grazie per averlo condiviso!',
        'Ottimo! Continuiamo la conversazione.',
        'Perfetto! Tutto chiaro.',
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: file ? `Ho ricevuto il file "${file.name}". ${randomResponse}` : randomResponse,
        sender: 'Assistant',
        timestamp: new Date(),
        isOwn: false,
      };

      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <ChatHeader />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 px-6 py-4" ref={scrollAreaRef}>
          <div className="space-y-1">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatContainer;
