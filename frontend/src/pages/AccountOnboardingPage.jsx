import React from 'react';

import CreateAccountButton from '../components/AccountOnboardingPage/CreateAccountButton';
import ProceedButton from '../components/AccountOnboardingPage/ProceedButton';

function AccountOnboardingPage() {

    return (
        <>
            <h1 className="text-4xl absolute top-[125px] left-[550px] font-bold text-[#A41D21] mb-20 text-center">
                Are you registered to the system?
            </h1>
            <div className="flex justify-center items-center gap-20 py-40">
                <CreateAccountButton />
                <ProceedButton />
            </div>
        </>
    );
}

export default AccountOnboardingPage