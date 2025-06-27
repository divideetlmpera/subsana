export default function HomeScreen({ onSelectRole }: { onSelectRole: (role: 'business' | 'customer') => void }) {
    return (
      <>
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
            onClick={() => onSelectRole('business')}
            className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-800 shadow-sm hover:bg-gray-100 transition"
          >
            Я — бизнес
          </button>
          <button
            onClick={() => onSelectRole('customer')}
            className="px-6 py-2 bg-white border border-gray-300 rounded-full text-gray-800 shadow-sm hover:bg-gray-100 transition"
          >
            Я — клиент
          </button>
        </div>
      </>
    );
  }
  