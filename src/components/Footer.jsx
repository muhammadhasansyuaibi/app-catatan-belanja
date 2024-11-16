// Komponen footer untuk menampilkan statistik daftar belanja
export default function Footer({ items }) {
  if (items.length === 0) {
    return <footer className="stats">Daftar belanjaan masih kosong</footer>;
  }

  const totalItems = items.length; // Total barang
  const checkedItems = items.filter((item) => item.checked).length; // Barang yang sudah dibeli
  const percetage = Math.round((checkedItems / totalItems) * 100); // Persentase barang yang sudah dibeli

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percetage}%)
    </footer>
  );
}
