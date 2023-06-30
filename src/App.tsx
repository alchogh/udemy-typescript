import React, { useState } from "react";
import { Item } from "./types/type";
import "./App.css";
import InsertItem from "./components/InsertItem";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  return (
    <div>
      <div>
        <div>
          <h1>TodoList</h1>
        </div>
        <InsertItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
