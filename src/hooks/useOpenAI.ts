import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useOpenAI = () => {
  const fetchApiKey = async () => {
    const { data, error } = await supabase
      .from('api_configurations')
      .select('api_key')
      .eq('provider', 'openai')
      .single();

    if (error) throw error;
    return data?.api_key;
  };

  const { data: apiKey, isLoading } = useQuery({
    queryKey: ['openai-api-key'],
    queryFn: fetchApiKey,
  });

  const saveApiKey = async (apiKey: string) => {
    const { error } = await supabase
      .from('api_configurations')
      .upsert(
        { 
          provider: 'openai',
          api_key: apiKey,
          user_id: (await supabase.auth.getUser()).data.user?.id
        },
        { onConflict: 'user_id,provider' }
      );

    if (error) throw error;
  };

  return { apiKey, isLoading, saveApiKey };
};