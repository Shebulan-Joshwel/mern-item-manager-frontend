import { useState } from "react";
import { createItem } from "../api";

export default function ItemForm({ onItemAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice]=useState(""); //first one

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name, description,price:Number(price)}); // second
    setName("");
    setDescription("");
    setPrice(""); //third
    onItemAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
      <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} required />
      <input placeholder="price" type="number" value={price} onChange={e=>setPrice(e.target.value)}required/>
      <button type="submit">Add Item</button>
    </form>
  );
}
