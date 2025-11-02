import React from 'react';
import { useNavigate } from 'react-router-dom';

import TurnInIcon from '../../assets/turn-in.svg';

function TurnInButton() {
    const navigate = useNavigate();

    return (
        <div className="w-[400px] h-[500px] relative cursor-pointer group" onClick={() => navigate('/account-onboarding')}>
            <div className="w-[400px] h-[500px] absolute top-0 left-0 bg-white rounded-[20px] group-hover:bg-[#A41D21] transition-colors" style={{boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.4)'}} />
            <div className="w-[274px] h-[60px] absolute top-[400px] left-[63px] text-center justify-center flex flex-col text-[#A41D21] text-4xl font-bold font-inter group-hover:text-white transition-colors">
                Turn In
            </div>
            <div className="w-[300px] h-[250px] absolute top-[125px] left-[50px] overflow-hidden">
                <img src={TurnInIcon} alt="Turn In" className="w-full h-full group-hover:brightness-0 group-hover:invert transition-all" />
            </div>
        </div>
    );
}

export default TurnInButton