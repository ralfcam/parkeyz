import React from 'react';
import { ShoppingCart, Lightbulb, Shield, Settings, Search, ThumbsUp } from 'lucide-react';

const ProductCard: React.FC<{
  title: string;
  description: string;
  price: string;
  image: string;
  isActive?: boolean;
}> = ({ title, description, price, image, isActive = false }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex justify-center mb-8">
      <img src={image} alt={title} className="w-48 h-48 object-contain" />
    </div>
    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 h-16">{description}</p>
    <div className="flex items-center justify-between mb-6">
      <span className="text-4xl font-bold text-[#00b8ff]">{price}</span>
    </div>
    <div className="flex gap-4">
      <button 
        className={`flex-grow py-3 rounded-lg font-medium transition-colors ${
          isActive 
            ? 'bg-[#1A1A1A] text-white hover:bg-[#333]' 
            : 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-gray-50'
        }`}
      >
        View Details
      </button>
      <button className="w-12 h-12 flex items-center justify-center bg-[#00b8ff] text-white rounded-lg hover:bg-[#0099ff] transition-colors">
        <ShoppingCart className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
}> = ({ icon, title }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="flex justify-center mb-6">
      <div className="text-[#1A73E8] w-16 h-16">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#00264d] to-[#003366]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-20 w-72 h-72 bg-[#00b8ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute right-0 top-40 w-96 h-96 bg-[#1A73E8]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-32 pb-24 relative">
          <div className="text-center">
            <span className="inline-block px-6 py-2 mb-8 text-[#00b8ff] bg-[#003366]/50 rounded-full backdrop-blur-sm border border-[#00b8ff]/20">
              About ParkSmart
            </span>
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Unlocking the Future of<br />Smart Parking Access
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              We're revolutionizing urban parking through innovative technology and smart solutions 
              that make life easier for property managers and drivers alike.
            </p>
            
            {/* Hero Illustration */}
            <div className="relative max-w-6xl mx-auto mt-16">
              <img 
                src="/abouthero.svg" 
                alt="Smart Parking Innovation"
                className="w-full h-auto max-w-4xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="inline-block px-6 py-2 mb-6 text-[#1A73E8] bg-blue-50 rounded-full text-sm font-medium">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                About Parkeeyz
              </h2>
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-[#1A1A1A]">
                  Notre Histoire
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Chez Parkeeyz, tout a commencé avec une vision simple : transformer l'expérience du 
                  stationnement pour qu'elle soit plus fluide, plus sécurisée et plus intelligente.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Confrontés aux défis quotidiens de la gestion des parkings, nous avons décidé de créer une{' '}
                  <a href="#" className="text-[#1A73E8] hover:text-[#1557b0] transition-colors">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/ourstory.svg" 
                alt="Smart Parking Experience"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-[#f5f8ff] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                image: "/missionsection1.svg",
                title: "To eliminate parking hassles through technology.",
                description: "Streamlining the parking experience with smart solutions."
              },
              {
                image: "/missionsection2.svg",
                title: "To deliver unmatched security for private and shared parking.",
                description: "Ensuring peace of mind with advanced security features."
              },
              {
                image: "/missionsection3.svg",
                title: "To revolutionize the way people manage access.",
                description: "Making parking management effortless and efficient."
              }
            ].map((mission, index) => (
              <div key={index} className="text-center group">
                <div className="mb-8 relative">
                  <div className="w-48 h-48 mx-auto relative">
                    <img
                      src={mission.image}
                      alt={mission.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#003366] mb-4 leading-tight">
                  {mission.title}
                </h3>
                <p className="text-lg text-[#003366]/70">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notre Histoire Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">Notre Histoire</h2>
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Imagine un monde où le stationnement n'est plus un souci. Chez Parkeeyz, nous avons transformé 
                cette vision en réalité. Inspirés par l'idée d'un accès simple, sécurisé et élégant, nous avons 
                créé Bouncer Spot : une solution qui redéfinit la gestion des parkings.
              </p>
              <p>
                Notre mission est claire : vous offrir liberté et sérénité, en combinant innovation technologique 
                et design durable. Avec Parkeeyz, chaque stationnement devient une expérience fluide et sans effort.
              </p>
              <p className="font-medium text-[#003366]">
                Rejoignez-nous dans cette révolution du stationnement intelligent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-8 py-3 mb-8 text-[#1A73E8] bg-blue-100 rounded-full text-lg font-medium">
              Our Solutions
            </span>
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">What We Do</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Parkeeyz offers cutting-edge smart access solutions that blend Bluetooth and 4G technology 
              to ensure secure, reliable, and user-friendly parking management. From private driveways 
              to urban parking facilities, our products cater to a wide range of needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ProductCard
              title="Bouncer"
              description="Secure Your Parking, Effortlessly"
              price="$99.99"
              image="/whatwedo1.svg"
              isActive
            />
            <ProductCard
              title="Enterprise"
              description="Multi-user management for shared facilities."
              price="$99.99"
              image="/whatwedo2.svg"
            />
            <ProductCard
              title="Terminal"
              description="Premium parking solutions for large-scale enterprises."
              price="$99.99"
              image="/whatwedo3.svg"
            />
          </div>

          <p className="text-center text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Each product is designed to provide real-time control, effortless management, 
            and unmatched security—right from your smartphone.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To simplify parking access through innovation, security, and technology. We aim to empower 
              individuals and organizations with tools that make managing parking spaces easier, smarter, 
              and safer.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lightbulb className="w-full h-full stroke-[1.5]" />}
              title="Innovation First"
            />
            <FeatureCard
              icon={<Shield className="w-full h-full stroke-[1.5]" />}
              title="Security You Can Trust"
            />
            <FeatureCard
              icon={<Settings className="w-full h-full stroke-[1.5]" />}
              title="Scalable Solutions"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Search className="w-full h-full stroke-[1.5]" />}
              title="User-Centric Approach"
            />
            <FeatureCard
              icon={<ThumbsUp className="w-full h-full stroke-[1.5]" />}
              title="Reliable Support"
            />
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">Our Vision</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To lead the smart parking revolution by creating seamless access solutions that connect 
              people, spaces, and technology effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Join the Revolution Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
                Join the Smart Access Revolution
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Parkeeyz, we are more than a product—we're a promise of convenience, innovation, and 
                security. Whether you're a homeowner, business owner, or urban parking manager, we 
                invite you to experience the future of smart access.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/aboutsmartparkimgrevo.svg" 
                alt="Smart Parking Revolution" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/e6f7ff/003366?text=Smart+Parking+Revolution';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Unlock Section */}
      <div className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="w-1/4">
              <img 
                src="/aboutparkingdevice.svg" 
                alt="Parking Device" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/300x300/e6f7ff/003366?text=Parking+Device';
                }}
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
                Ready to unlock smarter parking?
              </h2>
              <button className="px-12 py-4 bg-[#1A73E8] text-white rounded-full text-xl font-medium hover:bg-[#1557b0] transition-colors">
                Get in Touch
              </button>
            </div>

            <div className="w-1/4">
              <img 
                src="/aboutparkingdeviceqr.svg" 
                alt="Parking Device QR" 
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/300x300/e6f7ff/003366?text=Parking+Device+QR';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;