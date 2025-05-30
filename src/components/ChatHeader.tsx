
import React from 'react';
import { MessageCircle, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Chat Assistant</h1>
          <p className="text-sm text-gray-500">Condividi messaggi e file</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
          <Users className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
          <Settings className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
