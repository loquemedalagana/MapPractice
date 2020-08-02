import React from "react";
import Emoji from "./partiales/Emoji";
import Meaning from "./partiales/Meaning";

function Entry(){
    return (

    <div className="term">
        <Emoji emoji = "💪" name = "dddddd" />
        <Meaning meaning = "hello world" />
      </div>
    );
}

export default Entry;