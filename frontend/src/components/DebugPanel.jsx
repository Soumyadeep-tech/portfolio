import { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';

const DebugPanel = () => {
  const [testResults, setTestResults] = useState({});
  const [loading, setLoading] = useState(false);

  const testAPI = async (endpoint, method = 'GET', body = null) => {
    setLoading(true);
    try {
      const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
      };
      if (body) options.body = JSON.stringify(body);

      const response = await fetch(endpoint, options);
      const data = await response.json();
      
      setTestResults(prev => ({
        ...prev,
        [endpoint]: {
          status: response.status,
          success: response.ok,
          data
        }
      }));
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        [endpoint]: {
          status: 'ERROR',
          success: false,
          error: error.message
        }
      }));
    } finally {
      setLoading(false);
    }
  };

  const testEmail = () => {
    testAPI(API_ENDPOINTS.contact, 'POST', {
      name: 'Debug Test',
      email: 'test@example.com',
      message: 'Testing email from frontend'
    });
  };

  const testChatbot = () => {
    testAPI(API_ENDPOINTS.chat, 'POST', {
      message: 'Hello from frontend debug panel'
    });
  };

  const testHealth = () => {
    testAPI(API_ENDPOINTS.health);
  };

  return (
    <div className="fixed top-20 left-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="text-lg font-bold mb-4">🔧 Debug Panel</h3>
      
      <div className="space-y-2 mb-4">
        <button 
          onClick={testHealth}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-sm"
        >
          Test Health Check
        </button>
        
        <button 
          onClick={testEmail}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-sm"
        >
          Test Email
        </button>
        
        <button 
          onClick={testChatbot}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded text-sm"
        >
          Test Chatbot
        </button>
      </div>

      <div className="text-xs max-h-40 overflow-y-auto">
        {Object.entries(testResults).map(([endpoint, result]) => (
          <div key={endpoint} className={`mb-2 p-2 rounded ${result.success ? 'bg-green-900' : 'bg-red-900'}`}>
            <div className="font-mono text-xs truncate">{endpoint}</div>
            <div>Status: {result.status}</div>
            {result.error && <div className="text-red-300">Error: {result.error}</div>}
            {result.data && (
              <div className="text-gray-300">
                {JSON.stringify(result.data, null, 1).substring(0, 100)}...
              </div>
            )}
          </div>
        ))}
      </div>
      
      {loading && <div className="text-yellow-400">Testing...</div>}
    </div>
  );
};

export default DebugPanel;