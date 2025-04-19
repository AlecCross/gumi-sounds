"use client"

import React from 'react'

export default function Sound({ sound }) {
  const absoluteSoundPath = `/sounds/${sound.split('./sounds/')[1]}`;
  console.log("URL звуку:", absoluteSoundPath);
  const play = () => {
    new Audio(absoluteSoundPath).play();
  }
  return <button style={{backgroundColor: "rgba(160,160,40,1)", borderRadius: 10, width: "100%"}} onClick={play}>▶ Play 🦜</button>
}
