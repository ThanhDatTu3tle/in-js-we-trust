import * as React from 'react';
import Context from './Context';

const Provider: React.FC<any> = ({ children }) => {

    return (
        <Context.Provider value={'inactive'}>
            {children}
        </Context.Provider>
    )
}

export default Provider;
