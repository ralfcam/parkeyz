import React from 'react';
import AppComponent from './composants/App/index';

// This is just a wrapper around the actual App component in /composants/App/index.tsx
// We need to keep this for compatibility with existing imports
function App(props: any) {
  return <AppComponent {...props} />;
}

export default App;