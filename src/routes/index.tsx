import { createBrowserRouter, RouteObject } from 'react-router-dom';
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

// Define the routes structure
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'a-propos',
        element: <APropos />
      },
      {
        path: 'contact',
        element: <ContactFormulaire />
      },
      {
        path: 'tutorials',
        element: <TutorielsVideos />
      },
      {
        path: 'boutique-forfaits',
        element: <BoutiqueForfaits onNavigate={(path) => null} />
      },
      {
        path: 'terms',
        element: <ConditionsGenerales />
      },
      {
        path: 'privacy',
        element: <PolitiqueConfidentialite />
      },
      {
        path: 'product-detail',
        element: <DetailProduit onNavigate={(path) => null} />
      },
      {
        path: 'shipping',
        element: <InformationsLivraison onNavigate={(path) => null} />
      },
      {
        path: 'payment',
        element: <OptionsPaiement total="208,00€" onPaymentComplete={() => null} />
      },
      // Backward compatibility - redirect to boutique-forfaits
      {
        path: 'pricing',
        element: <BoutiqueForfaits onNavigate={(path) => null} />
      },
      {
        path: 'shop',
        element: <BoutiqueForfaits onNavigate={(path) => null} />
      }
    ]
  }
];

// Create the router instance
const router = createBrowserRouter(routes);

export default router; 