const Anthropic = require("@anthropic-ai/sdk");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const generateViralContent = async ({ niche, platform, contentType, audience, tone }) => {
  const prompt = `You are an expert viral content strategist and social media growth hacker.

Generate highly engaging ${platform} content for a creator in the "${niche}" niche.

Details:
- Platform: ${platform}
- Content Format: ${contentType}
- Target Audience: ${audience}
- Tone: ${tone}

Respond ONLY with valid JSON (no markdown, no explanation), structured exactly like this:
{
  "hook": "A single irresistible opening hook that stops the scroll",
  "reelIdeas": ["Idea 1 with specific angle", "Idea 2 with specific angle", "Idea 3 with specific angle"],
  "caption": "A complete engaging caption with emojis, storytelling, and a strong CTA. At least 100 words.",
  "hashtags": ["#hashtag1","#hashtag2","#hashtag3","#hashtag4","#hashtag5","#hashtag6","#hashtag7","#hashtag8","#hashtag9","#hashtag10"],
  "thumbnailText": "Bold thumbnail text under 8 words",
  "cta": "A powerful call-to-action sentence",
  "strategyTips": ["Tip 1 specific to ${platform}", "Tip 2 for maximizing reach", "Tip 3 for retention", "Tip 4 for growth"]
}`;

  const message = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = message.content.map((b) => b.text || "").join("");
  const cleaned = raw.replace(/```json|```/g, "").trim();
  return JSON.parse(cleaned);
};

module.exports = { generateViralContent };
