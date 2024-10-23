"use client";
import { useState, useEffect } from 'react';
import AdminNavbar from '../components/Navbar';

export default function AddCategories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  useEffect(() => {
    // จำลองการดึงข้อมูลจาก API
    const mockCategories = [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Comedy' },
      { id: 3, name: 'Drama' },
      { id: 4, name: 'Sci-Fi' },
      { id: 5, name: 'Horror' },
    ];
    setCategories(mockCategories);
  }, []);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      setCategories([...categories, { id: newId, name: newCategory.trim() }]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm('คุณแน่ใจหรือไม่ที่จะลบหมวดหมู่นี้?')) {
      setCategories(categories.filter(category => category.id !== id));
    }
  };

  const handleEditCategory = (id, name) => {
    setEditingId(id);
    setEditingName(name);
  };

  const handleSaveEdit = (id) => {
    setCategories(categories.map(category => 
      category.id === id ? { ...category, name: editingName } : category
    ));
    setEditingId(null);
    setEditingName('');
  };

  return (
    <div className="min-h-screen bg-[#232931]">
      <AdminNavbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-[#EEEEEE] mb-6">จัดการหมวดหมู่</h1>
        
        <form onSubmit={handleAddCategory} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="ชื่อหมวดหมู่ใหม่"
              className="flex-grow p-2 rounded bg-[#393E46] text-[#EEEEEE] border border-[#4ECCA3]"
            />
            <button
              type="submit"
              className="bg-[#4ECCA3] text-[#232931] px-4 py-2 rounded hover:bg-[#45b393] transition-colors"
            >
              เพิ่มหมวดหมู่
            </button>
          </div>
        </form>

        <div className="bg-[#393E46] rounded-lg p-4">
          <h2 className="text-2xl font-bold text-[#4ECCA3] mb-4">รายการหมวดหมู่</h2>
          <ul className="space-y-2">
            {categories.map(category => (
              <li key={category.id} className="flex items-center justify-between bg-[#232931] p-3 rounded">
                {editingId === category.id ? (
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="flex-grow p-1 rounded bg-[#393E46] text-[#EEEEEE] border border-[#4ECCA3]"
                  />
                ) : (
                  <span className="text-[#EEEEEE]">{category.name}</span>
                )}
                <div>
                  {editingId === category.id ? (
                    <button
                      onClick={() => handleSaveEdit(category.id)}
                      className="bg-[#4ECCA3] text-[#232931] px-2 py-1 rounded mr-2 hover:bg-[#45b393] transition-colors"
                    >
                      บันทึก
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditCategory(category.id, category.name)}
                      className="bg-[#4ECCA3] text-[#232931] px-2 py-1 rounded mr-2 hover:bg-[#45b393] transition-colors"
                    >
                      แก้ไข
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="bg-red-500 text-[#EEEEEE] px-2 py-1 rounded hover:bg-red-600 transition-colors"
                  >
                    ลบ
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}