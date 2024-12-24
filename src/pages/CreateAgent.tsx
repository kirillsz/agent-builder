import { AIAssistant } from "@/components/ai-assistant/AIAssistant";
import { AgentBuilderForm } from "@/components/agent-builder/AgentBuilderForm";

const CreateAgent = () => {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Create New Agent</h1>
        <p className="text-gray-600 mb-6">
          Design and configure a custom agent for any purpose using our comprehensive agent builder.
        </p>
        <AgentBuilderForm />
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-6">
          If you would like assistance in building your agent, use this chat box and our AI assistant will help you.
        </p>
        <AIAssistant />
      </div>
    </div>
  );
};

export default CreateAgent;