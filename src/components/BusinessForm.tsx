import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function BusinessForm({ onSuccess }: { onSuccess: () => void }) {
  const [form, setForm] = useState({ name: '', inn: '', telegram_username: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from('businesses').insert([form]);
    if (!error) onSuccess();
  };

  return (
    <div className="space-y-3">
      <input name="name" placeholder="Название компании" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="inn" placeholder="ИНН" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="telegram_username" placeholder="@telegram" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="phone" placeholder="Телефон" onChange={handleChange} className="w-full p-2 border rounded" />
      <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded">Продолжить</button>
    </div>
  );
}
