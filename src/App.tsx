import { useState } from 'react';
import Layout from './components/Layout';
import BackButton from './components/BackButton';
import BusinessForm from './components/BusinessForm';
import ClientForm from './components/ClientForm';
import BusinessProfile from './components/BusinessProfile';
import ClientProfile from './components/ClientProfile';

export default function App() {
  const [role, setRole] = useState<'customer' | 'business' | null>(null);
  const [screen, setScreen] = useState<'home' | 'profile'>('home');

  // 🧭 Главный экран
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

  // 🧾 Форма регистрации
  if (screen === 'home') {
    return (
      <Layout>
        <BackButton onClick={() => setRole(null)} />
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {role === 'business' ? 'Регистрация бизнеса' : 'Регистрация клиента'}
        </h2>
        {role === 'business' ? (
          <BusinessForm onSuccess={() => setScreen('profile')} />
        ) : (
          <ClientForm onSuccess={() => setScreen('profile')} />
        )}
      </Layout>
    );
  }

  // 🧩 Профиль
  if (screen === 'profile') {
    return (
      <Layout>
        <BackButton onClick={() => { setRole(null); setScreen('home'); }} />
        {role === 'business' ? <BusinessProfile /> : <ClientProfile />}
      </Layout>
    );
  }

  return null;
}
