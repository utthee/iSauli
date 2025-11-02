import React from 'react';

import TurnInIcon from '../../assets/turn-in.svg';

function TurnInButton() {

    return (
        <div className="w-[400px] h-[500px] relative shadow-lg hover:shadow-xl transition-all cursor-pointer group">
            <div className="w-[400px] h-[500px] absolute top-0 left-0 bg-white shadow-md rounded-[20px] group-hover:bg-[#A41D21] transition-colors" />
            <div className="w-[274px] h-[60px] absolute top-[400px] left-[63px] text-center justify-center flex flex-col text-[#A41D21] text-2xl font-bold font-inter group-hover:text-white transition-colors">
                Turn In
            </div>
            <div className="w-[250px] h-[250px] absolute top-[125px] left-[75px] overflow-hidden">
                <img src={TurnInIcon} alt="Turn In" className="w-[229.16px] h-[187.38px] absolute top-[31.25px] left-[10.42px] group-hover:brightness-0 group-hover:invert transition-all" />
            </div>
        </div>
    );
}

export default TurnInButton