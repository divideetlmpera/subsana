import { useState } from 'react';
import Layout from './components/Layout';
import BackButton from './components/BackButton';
import BusinessForm from './components/BusinessForm';
import ClientForm from './components/ClientForm';
import BusinessProfile from './components/BusinessProfile';
import ClientProfile from './components/ClientProfile';
import HomeScreen from './components/HomeScreen';

export default function App() {
  const [role, setRole] = useState<'customer' | 'business' | null>(null);
  const [screen, setScreen] = useState<'home' | 'profile'>('home');

  // 🧭 Главный экран
  if (!role) {
    return (
      <Layout>
        <HomeScreen onSelectRole={(r) => setRole(r)} />
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
        {role === 'business' ? (<BusinessForm onSuccess={() => setScreen('profile')} />) : (<ClientForm onSuccess={() => setScreen('profile')} />)}
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
