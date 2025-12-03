import React from 'react';

interface RecipientSenderToggleProps {
  mode: 'recipient' | 'sender';
  onChange: (mode: 'recipient' | 'sender') => void;
  disabled?: boolean;
}

const RecipientSenderToggle: React.FC<RecipientSenderToggleProps> = ({
  mode,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="relative inline-flex rounded-lg border border-gray-300 p-1 bg-white">
      <button
        type="button"
        onClick={() => onChange('recipient')}
        disabled={disabled}
        className={`
          relative px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200
          ${mode === 'recipient'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        Collect Recipient Data
      </button>
      <button
        type="button"
        onClick={() => onChange('sender')}
        disabled={disabled}
        className={`
          relative px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200
          ${mode === 'sender'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        Collect Sender Data
      </button>
    </div>
  );
};

export default RecipientSenderToggle;
