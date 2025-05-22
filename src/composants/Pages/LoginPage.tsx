import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page they were trying to access before being redirected to login
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        // Redirect them back to the page they tried to visit when they were
        // redirected to the login page
        navigate(from, { replace: true });
      } else {
        setError('Identifiants invalides. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section bg-neutral-light">
      <div className="container max-w-md mx-auto">
        <div className="card p-layout-xl">
          <h1 className="text-heading-2 text-center mb-layout-lg">Connexion</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-layout-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-layout-md">
            <div>
              <label htmlFor="email" className="block text-small font-medium text-gray-700 mb-1">
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-small font-medium text-gray-700 mb-1">
                Mot de Passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="flex justify-end">
              <a href="#" className="text-small text-primary">
                Mot de passe oublié?
              </a>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full py-3"
              disabled={isLoading}
            >
              {isLoading ? 'Connexion en cours...' : 'Se Connecter'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage; 