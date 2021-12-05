import Image from 'next/image'

import {ProviderButton} from './../../ui/buttons'
import google from './../../../public/google.png'

function GoogleProvider(){
    return (
        <ProviderButton>
            <Image
            src={google}
            alt="google company logo"
            width={22}
            height={22}
            />
            Sign Up With Google
        </ProviderButton>
    )
}

export default GoogleProvider