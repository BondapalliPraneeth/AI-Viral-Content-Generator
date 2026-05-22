const { generateViralContent } = require("../services/anthropicService");

const generateContent = async (req, res, next) => {
  try {
    const { niche, platform, contentType, audience, tone } = req.body;
    const result = await generateViralContent({ niche, platform, contentType, audience, tone });
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

module.exports = { generateContent };
