import React from "react";


function About() {
    return (
        <section>
            <div className="p-6 mx-auto bg-white shadow-lg flex items-center space-x-12">
            <h1 className="underline text-lg font-medium">Thriftix</h1>
            <div className="flex space-x-6">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
            </div>
            </div>

            
      <div className="container">
      <div class="columns-4 md:columns-3 gap-8">
  <img className="w-full aspect-video ..." src={require("../About/images/list.png")} alt="img"/>
  <img className="w-full aspect-square ..." src={require("../About/images/userstae screenshot.png")} alt="img" />
  <img className="w-full aspect-video ..." src={require("../About/images/list.png")} alt="img"/>
  <img className="w-full aspect-video ..." src={require("../About/images/list.png")} alt="img"/>
  <img className="w-full aspect-video ..." src={require("../About/images/list.png")} alt="img"/>
</div>

<div className="columns-2">
<p>Well, let me tell you something, ...</p>
  <p className="break-before-column">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>
      <p>
  Today I spent most of the day researching ways to ...
  <span class="inline-flex items-baseline">
   maybe not
    <span>Kramer</span>
  </span>
  keeps telling me there is no way to make it work, that ...
</p>
    </div>      
            
        </section>
    )
}


export default About;