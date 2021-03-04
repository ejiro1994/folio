import React from "react"
import "./index.scss"
import Hero from "./Hero"
import { Helmet } from 'react-helmet'
import EjImg from '../imgs/ejiro.webp' 

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Ejiro Lennox</title>
        <meta property="og:title" content="Digital Developer - Ejiro Lennox - London UK" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.ejirolennox.com" />
        <meta property="og:image" content={EjImg} />
        <meta name="og:description" content="A multidisciplinary creative specialising in UI/UX, web design, branding and prototyping. Also offering Music production services - Based in London" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href=""/>
      </Helmet>
        <div className="title">
          <Hero />
        </div>
    </div>
  )
}
