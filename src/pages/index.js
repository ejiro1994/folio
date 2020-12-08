import React from "react"
import "./index.scss"
import Hero from "./Hero"
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>testetststststststs</title>
        <meta name="og:title" content="The Rock" />
        <meta name="og:type" content="movie" />
        <meta name="og:url" content="http://www.ejirolennox.com" />
        <meta name="og:image" content="https://lh3.googleusercontent.com/jkRCEaBKzyVNijg12zycgjObWmQucwktNiscALqOZp5GL-0ZFG-I3AENfYXpHr8h_jrjng1sGbbrfX63O_Yg7-YToMejArZVUki8zw" />
        <meta name="og:site_name" content="IMDb" />
        <meta name="og:description" content="A group of U.S. Marines, under command of..." />
      </Helmet>
        <div className="title">
          <Hero />
        </div>
    </div>
  )
}
