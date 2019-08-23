import React from 'react'
import PaymentCard from 'react-payment-card-component'

export function AwesomeCredentialCard(props) {
    return(
        <PaymentCard
            bank="santander"
            model="prime"
            type="white"
            brand="brand"
            number="weid:2323212"
            cvv="12345678"
            holderName="高天尧"
            expiration="过期时间：2019年12月20日"
            flipped={false}
        />
    )
}  
