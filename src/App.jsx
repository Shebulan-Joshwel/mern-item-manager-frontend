import { useEffect, useState } from "react";
import { getItems } from "./api";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

export default function App() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h1>Campus Food Manager</h1>
      <ItemForm onItemAdded={loadItems} />
      <ItemList items={items} onRefresh={loadItems} />
    </div>
  );
}
