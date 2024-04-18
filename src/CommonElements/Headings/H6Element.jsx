import React from 'react';

const H6 = (props) =>{
    console.log("proppppps", props)
    return <h6 {...props.attrH6}>{props.children}</h6>;
};

export default H6;