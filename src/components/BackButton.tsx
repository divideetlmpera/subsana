export default function BackButton({ onClick }: { onClick: () => void }) {
    return (
      <div className="absolute top-4 left-4">
        <button
          onClick={onClick}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Назад
        </button>
      </div>
    );
  }  