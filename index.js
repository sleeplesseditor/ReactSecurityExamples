import React from 'react';
import { render } from 'react-dom';

import EscapeInput from './components/EscapeInput';
import DangerousHTML from './components/DangerousHTML';

render(
    <div>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHTML />
    </div>,
    document.getElementById('root')
); 