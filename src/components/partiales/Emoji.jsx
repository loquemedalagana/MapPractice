import React from "react";

function Emoji(prop){
    return (
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {prop.emoji}
          </span>
          <span>{prop.name}</span>
        </dt>
    );
}

export default Emoji;