import React from "react";
import Emoji from "./partiales/Emoji";
import Meaning from "./partiales/Meaning";

function Entry(prop){
    return (

    <div className="term">
        <Emoji emoji = {prop.emoji} name = {prop.name} />
        <Meaning meaning = {prop.meaning} />
      </div>
    );
}

export default Entry;