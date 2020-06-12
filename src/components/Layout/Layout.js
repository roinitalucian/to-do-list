import React from 'react';
import Aux from '../../utils/Wrapper';
import './Layout.css';

const layout = (props) => (
    <Aux>
    <main className='Content'>
        {props.children}
    </main>
    </Aux>
);

export default layout;