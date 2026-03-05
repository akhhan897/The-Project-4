import React, { useState } from 'react';
import Example from './components/example/Example';
import States from './components/states/States';

function P4() {
  const [view, setView] = useState('example');

  const switchView = () => {
    setView(view === 'example' ? 'states' : 'example');
  };

  return (
    <div>
      <button onClick={switchView}>
        Switch to {view === 'example' ? 'States' : 'Example'}
      </button>
      {view === 'example' ? <Example /> : <States />}
    </div>
  );
}

export default P4;