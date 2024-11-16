// Komponen untuk item individu di daftar belanja
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li key={item.id}>
      <input type="checkbox" onChange={() => onToggleItem(item.id)}></input>
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
