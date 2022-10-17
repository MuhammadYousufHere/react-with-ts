import React from 'react';

const Header = ({ title = 'Header' }: { title: string }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default Header;
