import { createBrowserRouter, RouteObject, ScrollRestoration } from 'react-router-dom';
import App from '../composants/App';
import ContactFormulaire from '../composants/ContactFormulaire';
import TutorielsVideos from '../composants/TutorielsVideos';
import ConditionsGenerales from '../composants/ConditionsGenerales';
import PolitiqueConfidentialite from '../composants/PolitiqueConfidentialite';
import DetailProduit from '../composants/DetailProduit';
import InformationsLivraison from '../composants/InformationsLivraison';
import OptionsPaiement from '../composants/OptionsPaiement';
import APropos from '../composants/APropos';
import BoutiqueForfaits from '../composants/BoutiqueForfaits';
import HomePage from '../composants/Pages/HomePage';
import LoginPage from '../composants/Pages/LoginPage';
import ProtectedRoute from '../composants/ProtectedRoute';

// Error page for when a route doesn't exist
const ErrorPage = () => (
  <div className="container py-section-md">
    <h1>Page Non Trouvée</h1>
    <p>Désolé, la page que vous recherchez n'existe pas.</p>
  </div>
);

// Checkout Layout component to wrap checkout routes
const CheckoutLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="checkout-layout">
    <div className="checkout-progress mb-layout-lg">
      {/* Progress indicator would go here */}
    </div>
    {children}
    <ScrollRestoration />
  </div>
);

// Define the routes structure
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'a-propos',
            element: <APropos />,
          },
          {
            path: 'contact',
            element: <ContactFormulaire />,
          },
          {
            path: 'tutorials',
            element: <TutorielsVideos />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          // Boutique and Forfaits nested routes
          {
            path: 'boutique-forfaits',
            children: [
              {
                index: true,
                element: <BoutiqueForfaits />,
              },
              {
                path: 'product/:id',
                element: <DetailProduit />,
              },
            ],
          },
          // Checkout flow with nested routes - protected by authentication
          {
            path: 'checkout',
            element: (
              <ProtectedRoute>
                <CheckoutLayout>
                  <ScrollRestoration />
                </CheckoutLayout>
              </ProtectedRoute>
            ),
            children: [
              {
                path: 'shipping',
                element: <InformationsLivraison />,
              },
              {
                path: 'payment',
                element: <OptionsPaiement total="208,00€" onPaymentComplete={() => null} />,
              },
              {
                path: 'confirmation',
                element: (
                  <div className="container py-section-md text-center">
                    <h1 className="text-heading-1 mb-layout-md">Commande Confirmée!</h1>
                    <p className="text-body-large">Merci pour votre achat!</p>
                  </div>
                ),
              }
            ],
          },
          // Legal pages
          {
            path: 'terms',
            element: <ConditionsGenerales />,
          },
          {
            path: 'privacy',
            element: <PolitiqueConfidentialite />,
          },
          // Legacy routes for backward compatibility
          {
            path: 'product-detail',
            element: <DetailProduit />,
          },
          {
            path: 'shipping',
            element: (
              <ProtectedRoute>
                <InformationsLivraison />
              </ProtectedRoute>
            ),
          },
          {
            path: 'payment',
            element: (
              <ProtectedRoute>
                <OptionsPaiement total="208,00€" onPaymentComplete={() => null} />
              </ProtectedRoute>
            ),
          },
          {
            path: 'pricing',
            element: <BoutiqueForfaits />,
          },
          {
            path: 'shop',
            element: <BoutiqueForfaits />,
          },
        ],
      },
    ],
  },
];

// Create the router instance with scroll restoration
const router = createBrowserRouter(routes);

export default router; 