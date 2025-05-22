import React, { useState } from 'react';
import { Mail, Send, MapPin } from 'lucide-react';

const ContactFormulaire: React.FC = () => { // Renamed from Contact
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    address: ''  // Will be used when map feature is implemented
  });
  
  // Future Implementation: Google Maps
  /*
  const [mapUrl, setMapUrl] = useState(
    'https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Paris,France'
  );
  */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Future Implementation: Google Maps address search
    /*
    if (name === 'address' && value.trim()) {
      const encodedAddress = encodeURIComponent(value);
      setMapUrl(`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`);
    }
    */
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-neutral-darker">
      {/* Section Principale */}
      <div className="relative section">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="max-w-xl mb-layout-xl lg:mb-0">
              <h1 className="text-display-2 text-white mb-layout-lg">Contactez-Nous</h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-card p-layout-lg">
                <h2 className="text-white mb-2">Entrez en Contact</h2>
                <p className="text-gray-300 mb-layout-sm text-body">
                  Nous serions ravis d'avoir de vos nouvelles!<br />
                  Voici comment vous pouvez nous joindre:
                </p>
                <p className="text-primary mb-layout-md text-body">Réponse en 24h maximum</p>
                
                <div className="grid grid-cols-1 gap-layout-sm">
                  <div className="bg-white rounded-input p-layout-md flex items-center gap-layout-sm">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="text-small text-gray-600">Email:</div>
                      <div className="text-neutral-dark font-medium text-body">contact@parkeeyz.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[600px]">
              <img 
                src="/contactusparkingoverview.webp" 
                alt="Aperçu du Stationnement"
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/neutral-dark/primary-light?text=Aperçu+Stationnement'; // Updated placeholder
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Formulaire de Contact */}
      <div className="bg-white section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-xl">
            <div>
              <h2 className="text-neutral-dark mb-layout-lg">Contactez-Nous</h2>
              <form onSubmit={handleSubmit} className="space-y-layout-md">
                <div>
                  <label htmlFor="fullName" className="block text-small font-medium text-gray-700 mb-1">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="input bg-neutral-light placeholder-gray-500"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-small font-medium text-gray-700 mb-1">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input bg-neutral-light placeholder-gray-500"
                    placeholder="jean@example.com"
                  />
                </div>
                
                {/* Future Implementation: Address input for map integration */}
                {/*
                <div>
                  <label htmlFor="address" className="block text-small font-medium text-gray-700 mb-1">
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
                      className="input pl-12 bg-neutral-light placeholder-gray-500"
                      placeholder="Entrez votre adresse"
                    />
                  </div>
                </div>
                */}

                <div>
                  <label htmlFor="message" className="block text-small font-medium text-gray-700 mb-1">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="input bg-neutral-light placeholder-gray-500 resize-none"
                    placeholder="Écrivez votre message ici..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary btn-lg w-full flex items-center justify-center gap-2"
                >
                  Envoyer le Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            {/* Future Implementation: Google Maps integration */}
            {/*
            <div>
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
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormulaire; // Renamed export 