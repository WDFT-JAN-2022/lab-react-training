import React from 'react'

const CreditCard = (props) => {
  return (
    <div style={{width: '400px', height: '200px', backgroundColor: `${props.bgColor}`}}>
    <p style={{textAlign: 'right', paddingRight: '20px'}}>{props.type}</p>
    <p>●●●● ●●●● ●●●● {props.number.slice(12,16)}</p>
    <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2,4)}</p>
    <p>{props.bank}</p>
    <p>{props.owner}</p>
    </div>
  )
}

export default CreditCard;