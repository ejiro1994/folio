import React from "react"
import "./index.scss"
import Hero from "./Hero"
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>testetststststststs</title>
        <meta
          name='description'
          content='this is the content part if this shows the helmet is working'
        />
        <meta 
        property="og:url" 
        content="https://stories.google/"
         />
        <meta 
        property="og:title" 
        content="Web Stories on Google" 

        />
        <meta 
        name="description" 
        content="The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web."
        />
          <meta 
          property="og:description" 
          content="The tappable story format has never been more accessible—to creators and readers alike. See what happens when Google brings stories to the open web." 

          />
          <meta 
          property="og:image" 
          content="https://lh3.googleusercontent.com/jkRCEaBKzyVNijg12zycgjObWmQucwktNiscALqOZp5GL-0ZFG-I3AENfYXpHr8h_jrjng1sGbbrfX63O_Yg7-YToMejArZVUki8zw" 

          />
          <meta 
          property="og:image:width" 
          content="1200" 

          />
          <meta 
          property="og:image:height" 
          content="630" 

          />

      </Helmet>
        <div className="title">
          <Hero />
        </div>
    </div>
  )
}
