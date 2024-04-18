import React, { Fragment } from 'react';
import { H5, P } from '../../../AbstractElements';

const CardHeaderComponent = ({ title, subtitle, settingIcon }) => {
    console.log("title, subtitle, settingIcon", title, subtitle, settingIcon);
    return (
        <Fragment>
            <div className="header-top d-sm-flex align-items-center">
                <H5>{title}</H5>
                <div className="center-content">
                    <P className="d-flex align-items-center">
                     {subtitle}
                        
                    </P>
                </div>
            </div>
        </Fragment>
    )
}

export default CardHeaderComponent;
