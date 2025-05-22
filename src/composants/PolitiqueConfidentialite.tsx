import React from 'react';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <h1 className="text-neutral mb-layout-xl">
          Politique de Confidentialité
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-sm">
          <div className="space-y-layout-lg">
            <div className="prose prose-lg max-w-none text-neutral-dark opacity-90 text-body">
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
                src="/parkingillustration.webp" 
                alt="Illustration de Stationnement"
                className="w-full h-auto rounded-card shadow-card"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x300/neutral-dark/primary-light?text=Parking+Illustration';
                }}
              />
            </div>

            <div className="prose prose-lg max-w-none text-neutral-dark opacity-90 text-body">
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
              src="/privacypolicy.webp" 
              alt="Icône de Politique de Confidentialité"
              className="w-96 h-96 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/384x384/primary-light/neutral-dark?text=P';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolitiqueConfidentialite; 