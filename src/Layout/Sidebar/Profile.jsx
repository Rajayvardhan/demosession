import React, { Fragment, useEffect, useState } from 'react';
import { Settings } from 'react-feather';
import { Link } from 'react-router-dom';
import { H6, Image, LI, UL, P } from '../../AbstractElements';
import man from '../../assets/images/dashboard/1.png';

const Profile = () => {
    const authenticated = JSON.parse(localStorage.getItem('authenticated'));
    const auth0_profile = JSON.parse(localStorage.getItem('auth0_profile'));
    const [profile, setProfile] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setProfile(localStorage.getItem('profileURL') || man);
        setName(localStorage.getItem('Name'));
    }, [setProfile, setName]);

    return (
        <Fragment>
            <div className="sidebar-user text-center">
                <a className="setting-primary" href="#javascript">
                    <Settings />
                </a>
                <Link to={`${process.env.PUBLIC_URL}/app/users/userProfile`}>
                    <Image attrImage={{ className: 'img-90 rounded-circle', src: authenticated ? auth0_profile.picture : profile, alt: '' }} />
                    <div className="badge-bottom">
                        <div className="badge badge-primary">New
                        </div>
                    </div>
                    <h6>Keendroid </h6>
                </Link>
                <P attrPara={{ className: 'mb-0 font-roboto' }} >Keendroid Pvt Limited</P>
                <UL attrUL={{ className: 'flex-row simple-list' }}>
                   </UL>
            </div>
        </Fragment >
    );
};

export default Profile;