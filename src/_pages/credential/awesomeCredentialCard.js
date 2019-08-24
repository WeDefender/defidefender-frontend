import React from 'react'
import HealthCard from 'react-health-card'
import './card.css'
import './card-types.css'


export function AwesomeCredentialCard(props) {

    const [flippy, setFlippy] = React.useState(false)

    const handleFlippy = () => {
        setFlippy(!flippy)
    }

    return (
        <HealthCard
            cardNumber="12345678"
            name="Jake Moxey"
            issueDate="12122020"
            issueNumber="12"
            rank="01"
            memberNumber="87654321A"
            memberNumberLength={9}
            focused="memberNumber"
            isFlipped={flippy}
            onClick={handleFlippy}
        />
    )
}  
