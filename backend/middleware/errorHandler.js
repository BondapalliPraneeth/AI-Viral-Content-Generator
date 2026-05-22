const errorHandler = (err, req, res, next) => {
  console.error("[Error]", err.message);

  if (err.status && err.message)
    return res.status(err.status).json({ success: false, error: `AI API Error: ${err.message}` });

  if (err instanceof SyntaxError)
    return res.status(500).json({ success: false, error: "Failed to parse AI response. Please try again." });

  res.status(500).json({ success: false, error: err.message || "Internal server error." });
};

module.exports = { errorHandler };
