import React from "react";

export default prop => (
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {prop.emoji}
    </span>
    <span>{prop.name}</span>
  </dt>
);