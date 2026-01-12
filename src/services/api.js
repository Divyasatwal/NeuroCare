const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

const api = {
  submitFeedback: async (data) => {
    const response = await fetch(`${BACKEND_URL}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) throw new Error("Failed to submit feedback");
    return await response.json();
  },

  sendMessage: async (message) => {
    const response = await fetch(`${BACKEND_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (!response.ok) throw new Error("Failed to send message to chatbot");
    return await response.json();
  }
};

export default api;
