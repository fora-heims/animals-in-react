import React from 'react'
import './Animal.css'

export default function Animal({ name, type, says, top, left }) {
  return (
    <div className="animal" style={{ top, left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} alt={name}></img>
      <span className="name">{name}</span>
      <span>{says}</span>
    </div>
  )
}
