import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1A1A1A] mb-12">
          Politique de Confidentialité
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Lorem ipsum dolor sit amet consectetur. Non in convallis 
                rhoncus ipsum et aliquam tellus lectus. Nam convallis tellus 
                ultrices integer urna proin at tempor bibendum. Libero lectus 
                pretium nibh porttitor amet et justo. Erat semper risus elit 
                condimentum ut viverra elit ipsum nisi. Nunc ac augue 
                interdum id sociis enim in. Mattis elit imperdiet tempus 
                adipiscing arcu sapien in. Nulla elementum venenatis in 
                tempus enim volutpat. Lectus sagittis et luctus nulla. Semper 
                dui accumsan at porttitor eget mauris morbi commodo tellus. 
                Habitant at purus orci facilisis scelerisque.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur. Non in convallis rhoncus ipsum et aliquam tellus lectus. 
                Nam convallis tellus ultrices integer urna proin at tempor bibendum. Libero lectus pretium nibh 
                porttitor amet et justo. Erat semper risus elit condimentum ut viverra elit ipsum nisi. Nunc ac 
                augue interdum id sociis enim in. Mattis elit imperdiet tempus adipiscing arcu sapien in. Nulla 
                elementum venenatis in tempus enim volutpat. Lectus sagittis et luctus nulla. Semper dui 
                accumsan at porttitor eget mauris morbi commodo tellus. Habitant at purus orci facilisis 
                scelerisque.
              </p>
            </div>

            <div className="relative">
              <img 
                src="/parkingillustration.svg" 
                alt="Illustration de Stationnement"
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x300/003366/e6f7ff?text=Parking+Illustration';
                }}
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Lorem ipsum dolor sit amet consectetur. Non in convallis 
                rhoncus ipsum et aliquam tellus lectus. Nam convallis tellus 
                ultrices integer urna proin at tempor bibendum. Libero lectus 
                pretium nibh porttitor amet et justo. Erat semper risus elit 
                condimentum ut viverra elit ipsum nisi. Nunc ac augue 
                interdum id sociis enim in. Mattis elit imperdiet tempus 
                adipiscing arcu sapien in. Nulla elementum venenatis in 
                tempus enim volutpat. Lectus sagittis et luctus nulla. Semper 
                dui accumsan at porttitor eget mauris morbi commodo tellus. 
                Habitant at purus orci facilisis scelerisque.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <img 
              src="/privacypolicy.svg" 
              alt="Icône de Politique de Confidentialité"
              className="w-96 h-96 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/384x384/e6f7ff/003366?text=P';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;