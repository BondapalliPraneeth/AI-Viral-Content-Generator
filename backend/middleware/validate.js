const validateContentRequest = (req, res, next) => {
  const { niche, platform, contentType, audience, tone } = req.body;

  if (!niche || niche.trim().length < 2)
    return res.status(400).json({ success: false, error: "Niche is required (min 2 chars)." });
  if (!audience || audience.trim().length < 3)
    return res.status(400).json({ success: false, error: "Target audience is required." });

  const platforms = ["Instagram", "YouTube", "LinkedIn", "TikTok"];
  if (!platforms.includes(platform))
    return res.status(400).json({ success: false, error: `Platform must be one of: ${platforms.join(", ")}` });

  const types = ["Reel", "Carousel", "Shorts", "Post", "Video"];
  if (!types.includes(contentType))
    return res.status(400).json({ success: false, error: `ContentType must be one of: ${types.join(", ")}` });

  const tones = ["Viral", "Professional", "Funny", "Motivational", "Educational"];
  if (!tones.includes(tone))
    return res.status(400).json({ success: false, error: `Tone must be one of: ${tones.join(", ")}` });

  next();
};

module.exports = { validateContentRequest };
