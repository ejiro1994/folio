import React from "react"
import "./index.scss"
import Hero from "./Hero"
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>testetststststststs</title>
        <meta property="og:title" content="Creative Developer - Ejiro Lennox - London UK" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.ejirolennox.com" />
        <meta property="og:image" content="https://lh3.googleusercontent.com/jkRCEaBKzyVNijg12zycgjObWmQucwktNiscALqOZp5GL-0ZFG-I3AENfYXpHr8h_jrjng1sGbbrfX63O_Yg7-YToMejArZVUki8zw" />
        <meta name="og:description" content="A multidisciplinary creative specialising in music production and web design. Based in London" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href=""/>
      </Helmet>
        <div className="title">
          <Hero />
        </div>
    </div>
  )
}
