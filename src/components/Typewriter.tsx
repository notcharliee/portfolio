"use client"

import TypewriterEffect from "typewriter-effect"

export default function Typewriter({ typeString }: { typeString: string }) {
  return (
    <TypewriterEffect
      onInit={(typewriter) => {
        typewriter.typeString(typeString).start().changeDelay(1000)
      }}
    ></TypewriterEffect>
  )
}
