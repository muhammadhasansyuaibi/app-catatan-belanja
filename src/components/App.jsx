// Mengimpor hook `useState` dari React untuk mengelola state dalam komponen
import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

// Daftar awal barang belanjaan
const groceryItems = [
  {
    id: 1,
    name: " Kopi Bubuk",
    quantity: 2,
    checked: false, // status apakah sudah dibeli
  },
  {
    id: 2,
    name: " Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: " Air Mineral",
    quantity: 3,
    checked: false,
  },
];

// Komponen utama aplikasi
export default function App() {
  // State `items` untuk menyimpan daftar barang
  const [items, setItems] = useState(groceryItems);

  // Fungsi untuk menambah barang baru ke daftar
  function handleAddItem(item) {
    setItems([...items, item]); // Menambahkan item baru ke array `items`
  }

  // Fungsi untuk menghapus barang berdasarkan ID
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id)); // Filter barang dengan ID yang berbeda
  }

  // Fungsi untuk mengubah status `checked` pada barang
  function handleToggleItem(id) {
    setItems(
      (items) =>
        items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        ) // Toggle `checked`
    );
  }

  // Fungsi untuk menghapus semua barang
  function handleClearItems() {
    setItems([]); // Mengosongkan array `items`
  }

  // Render UI aplikasi
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}
