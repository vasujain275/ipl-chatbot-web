const API_BASE_URL = "https://api-ipl-chatbot.vasujain.me";

export async function fetchExampleQuestions(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/examples`);
    if (!response.ok) {
      throw new Error("Failed to fetch example questions");
    }
    const data = await response.json();
    return data.questions;
  } catch (error) {
    console.error("Error fetching example questions:", error);
    return [];
  }
}

export async function sendQuestion(
  question: string,
  conversationId: string | null,
) {
  const response = await fetch(`${API_BASE_URL}/api/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question,
      conversation_id: conversationId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send question");
  }

  return response.json();
}

export async function getConversation(conversationId: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/conversations/${conversationId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch conversation");
  }

  return response.json();
}

export async function deleteConversation(conversationId: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/conversations/${conversationId}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete conversation");
  }

  return response.json();
}
