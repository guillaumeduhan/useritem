import React from 'react';
import ReactDOM from 'react-dom/client';
// import UI from 'useritem';
import UserItem from './components/UserItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  {/* <UI infos={true} title="Guillaume Duhan" description="Chief Technology Officer" backgroundColor="#323444" /> */}
  <UserItem infos={true} title="Guillaume Duhan" description="Chief Technology Officer" backgroundColor="#323444" verified />
</React.StrictMode>);