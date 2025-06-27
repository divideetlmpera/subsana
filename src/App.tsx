import { useState } from 'react';
import Layout from './components/Layout';
import BackButton from './components/BackButton';

export default function App() {
  const [role, setRole] = useState<'customer' | 'business' | null>(null);
  const [screen, setScreen] = useState<'home' | 'profile'>('home');

  // 🧭 Стартовый экран
  if (!role) {
    return (
      <Layout>
        <img
          src="/logo-subsana.png"
          alt="SubSana"
          className="w-28 h-28 mx-auto mb-4"
        />
  
        <p className="text-gray-600 mt-2 text-base leading-relaxed">
          Сервис подписок на всё: оформляй, управляй, экономь.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setRole('business')}
            className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-800 shadow-sm hover:bg-gray-100 transition"
          >
            Я — бизнес
          </button>
          <button
            onClick={() => setRole('customer')}
            className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-800 shadow-sm hover:bg-gray-100 transition"
          >
            Я — клиент
          </button>
        </div>
      </Layout>
    );
  }

  // 🎫 Экран клиента
  if (role === 'customer' && screen === 'home') {
    return (
      <Layout>
        <BackButton onClick={() => setRole(null)} />
        <h2 className="text-xl font-bold text-gray-900 mb-4">Экран клиента</h2>
        <p className="text-gray-600">Скоро здесь появится меню управления подписками</p>
      </Layout>
    );
  }

  // 🧩 Экран бизнеса
  if (role === 'business') {
    return (
      <Layout>
        <BackButton onClick={() => setRole(null)} />
        <h2 className="text-xl font-bold text-gray-900 mb-4">Экран бизнеса</h2>
        <p className="text-gray-600">Скоро здесь появится фунционал настройки подписок</p>
      </Layout>
    );
  }

  return null;
}