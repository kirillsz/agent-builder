import { useState, useEffect } from 'react';

export const useOpenAI = () => {
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    const storedKey = localStorage.getItem('openai_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const saveApiKey = (key: string) => {
    localStorage.setItem('openai_api_key', key);
    setApiKey(key);
  };

  const clearApiKey = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
  };

  return { apiKey, saveApiKey, clearApiKey };
};