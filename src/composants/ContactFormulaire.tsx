import React, { useState } from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

const ContactFormulaire: React.FC = () => { // Renamed from Contact
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    address: ''
  });
  
  const [mapUrl, setMapUrl] = useState(
    'https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Paris,France'
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'address' && value.trim()) {
      const encodedAddress = encodeURIComponent(value);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-[#00264d]">
      {/* Section Principale */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="max-w-xl mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Contactez-Nous</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-2">Entrez en Contact</h2>
                <p className="text-gray-300 mb-4">
                  Nous serions ravis d'avoir de vos nouvelles!<br />
                  Voici comment vous pouvez nous joindre:
                </p>
                <p className="text-[#00b8ff] mb-6">Réponse en 24h maximum</p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white rounded-xl p-6 flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#00b8ff]" />
                    <div>
                      <div className="text-sm text-gray-600">Email:</div>
                      <div className="text-[#003366] font-medium">contact@parkeeyz.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[600px]">
              <img 
                src="/contactusparkingoverview.svg" 
                alt="Aperçu du Stationnement"
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/003366/e6f7ff?text=Aperçu+Stationnement'; // Updated placeholder
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Formulaire de Contact */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-8">Contactez-Nous</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-[#00b8ff] placeholder-gray-500"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-[#00b8ff] placeholder-gray-500"
                    placeholder="jean@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Adresse
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 pl-12 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-[#00b8ff] placeholder-gray-500"
                      placeholder="Entrez votre adresse"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-[#00b8ff] placeholder-gray-500 resize-none"
                    placeholder="Écrivez votre message ici..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00b8ff] text-white rounded-xl font-medium hover:bg-[#0099ff] transition-colors flex items-center justify-center gap-2"
                >
                  Envoyer le Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            <div className="h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={mapUrl}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormulaire; // Renamed export 