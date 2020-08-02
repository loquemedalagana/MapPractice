import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function makeEntry(emojielement){
  return (
    <Entry 
      key = {emojielement.id}
      emoji = {emojielement.emoji}
      name = {emojielement.name}
      meaning = {emojielement.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(makeEntry)}
      </dl>
    </div>
  );
}

export default App;
