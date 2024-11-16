import { useState } from "react";

// Komponen form untuk menambah barang
export default function Form({ onAddItem }) {
  // State untuk menyimpan input form
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Fungsi untuk menangani submit form
  function handleSubmit(e) {
    e.preventDefault(); // Mencegah reload halaman

    const newItem = { name, quantity, checked: false, id: Date.now() }; // Barang baru
    onAddItem(newItem); // Menambahkan barang ke daftar
    console.log(newItem); // Debug

    setName(""); // Reset input name
    setQuantity(1); // Reset input quantity
  }

  // Membuat dropdown jumlah barang
  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)} // Mengubah state `name`
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
