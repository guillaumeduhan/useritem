import React from 'react';
import ReactDOM from 'react-dom/client';
import UserItem from './components/UserItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <UserItem title="Guillaume Duhan" backgroundColor="#323444" noPadding />
</React.StrictMode>);