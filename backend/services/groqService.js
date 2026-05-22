const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const generateViralContent = async ({ niche, platform, contentType, audience, tone }) => {
  const prompt = `You are an expert viral content strategist and social media growth hacker.

Generate highly engaging ${platform} content for a creator in the "${niche}" niche.

Details:
- Platform: ${platform}
- Content Format: ${contentType}
- Target Audience: ${audience}
- Tone: ${tone}

Respond ONLY with valid JSON (no markdown, no explanation):
{
  "hook": "irresistible opening hook that stops the scroll",
  "reelIdeas": ["idea 1 with specific angle", "idea 2 with specific angle", "idea 3 with specific angle"],
  "caption": "full engaging caption with emojis, storytelling and CTA, at least 100 words",
  "hashtags": ["#tag1","#tag2","#tag3","#tag4","#tag5","#tag6","#tag7","#tag8","#tag9","#tag10"],
  "thumbnailText": "bold thumbnail text under 8 words",
  "cta": "powerful call-to-action sentence",
  "strategyTips": ["tip 1 for ${platform}", "tip 2 for reach", "tip 3 for retention", "tip 4 for growth"]
}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile", // Best free Groq model
    messages: [
      {
        role: "system",
        content: "You are a viral content strategist. Always respond with valid JSON only. No markdown, no explanation.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.8,
    max_tokens: 1024,
  });

  const raw = response.choices[0]?.message?.content || "";
  const cleaned = raw.replace(/```json|```/g, "").trim();
  return JSON.parse(cleaned);
};

module.exports = { generateViralContent };
