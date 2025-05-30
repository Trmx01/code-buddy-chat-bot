
import React from 'react';
import { User, Clock, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  file?: {
    name: string;
    size: number;
    type: string;
    url: string;
  };
  isOwn?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('it-IT', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const isImage = (type: string) => type.startsWith('image/');

  return (
    <div className={cn(
      "flex w-full mb-4 animate-in slide-in-from-bottom-2 duration-300",
      message.isOwn ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] rounded-2xl px-4 py-3 shadow-sm",
        message.isOwn 
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-12" 
          : "bg-white border border-gray-200 text-gray-800 mr-12"
      )}>
        {!message.isOwn && (
          <div className="flex items-center mb-2 text-sm font-medium">
            <User className="w-4 h-4 mr-2" />
            {message.sender}
          </div>
        )}
        
        {message.text && (
          <p className="text-sm leading-relaxed mb-2">{message.text}</p>
        )}
        
        {message.file && (
          <div className="mt-2">
            {isImage(message.file.type) ? (
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={message.file.url} 
                  alt={message.file.name}
                  className="max-w-full h-auto max-h-64 object-cover"
                />
              </div>
            ) : (
              <div className={cn(
                "flex items-center justify-between p-3 rounded-lg border-2 border-dashed",
                message.isOwn 
                  ? "border-white/30 bg-white/10" 
                  : "border-gray-300 bg-gray-50"
              )}>
                <div className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center mr-3",
                    message.isOwn ? "bg-white/20" : "bg-gray-200"
                  )}>
                    📎
                  </div>
                  <div>
                    <p className="text-sm font-medium truncate max-w-32">
                      {message.file.name}
                    </p>
                    <p className={cn(
                      "text-xs",
                      message.isOwn ? "text-white/70" : "text-gray-500"
                    )}>
                      {formatFileSize(message.file.size)}
                    </p>
                  </div>
                </div>
                <button className={cn(
                  "p-2 rounded-lg transition-colors",
                  message.isOwn 
                    ? "hover:bg-white/20 text-white" 
                    : "hover:bg-gray-100 text-gray-600"
                )}>
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
        
        <div className={cn(
          "flex items-center justify-end mt-2 text-xs",
          message.isOwn ? "text-white/70" : "text-gray-500"
        )}>
          <Clock className="w-3 h-3 mr-1" />
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
