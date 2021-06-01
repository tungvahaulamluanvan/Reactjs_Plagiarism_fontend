import React from 'react';

const Iframe = ({ src }) => {

    if (!src) {
        return <div>Loading...</div>;
    }

        
    return (
        // basic bootstrap classes. you can change with yours.
        <div>
                <iframe src={src}></iframe>
        </div>
    );
};

export default Iframe;