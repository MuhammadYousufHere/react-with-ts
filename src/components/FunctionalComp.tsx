import React, { ReactNode, useState } from 'react';

const FunctionalComp = ({
    children,
    header,
}: {
    children: (num: number) => ReactNode;
    header?: (num: number) => ReactNode;
}) => {
    const [state, setState] = useState<number>(1);
    return (
        <div>
            {header && <h2>{header(state)}</h2>}
            <div>{children(state)}</div>
            <div className='btn'>
                <button
                    className='bg-slate-600 text-gray-50 p-2 pl-4 pr-4 m-3'
                    onClick={() => setState(state + 1)}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default FunctionalComp;
