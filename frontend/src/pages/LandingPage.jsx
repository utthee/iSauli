import React from 'react';

import Navbar from '../components/Navbar.jsx'
import TurnInButton from '../components/LandingPage/TurnInButton.jsx';
import ClaimButton from '../components/LandingPage/ClaimButton.jsx';

function LandingPage() {
    return(
        <>
            <Navbar/>
            <div className="flex justify-center items-center gap-20 py-40">
                <TurnInButton/>
                <ClaimButton/>
            </div>
        </>
    );
}
export default LandingPage