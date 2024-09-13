import React,{Fragment,useState} from 'react'
import "./About.css"

const About = () => {
    const [toggleTab,setToggleTab]=useState(1);
    const toggleState = (index)=>
    {
        setToggleTab(index)
    }
  return (
    <Fragment>

    <section className="about">

    <div className="row">

     <div className="column">
        <div className="about-img"></div>
</div>

<div className="column">
    <div className="tabs">
  
        <div className= {toggleTab === 1 ?"single-tab active-tab": "single-tab"}
        onClick={()=> toggleState(1)}>
            <h2>Farm details</h2>
        </div>

        <div className= {toggleTab === 2 ?"single-tab active-tab": "single-tab"}
        onClick={()=> toggleState(2)}>
            <h2>Cultivation Process</h2>
        </div>

        <div className= {toggleTab === 3 ?"single-tab active-tab": "single-tab"}
        onClick={()=> toggleState(3)}>
            <h2>Sustainability Process</h2>
        </div>

    </div>
    <div className="tab-content">
        {/* {About Content} */}
        <div className={toggleTab===1?"content active-content":"content"}>
          <h2>Farm Story</h2>
          <p>Farm, nestled in the serene countryside of [TamilNadu], embodies a commitment to sustainable agriculture. Specializing in heirloom vegetables, organic fruits, and eco-friendly grains, the farm's ethos revolves around regenerative practices and biodiversity preservation.
            Through striking imagery showcasing crop diversity, eco-friendly techniques, and community engagement, XYZ Farm illustrates its sustainable journey, marked by achievements in reducing carbon footprint, utilizing renewable energy, and pioneering water conservation methods. 
            This comprehensive portrayal invites visitors to witness XYZ Farm's dedication to sustainability, fostering admiration and trust within the community.
</p>
<div className="farm-image">
      <img src=" https://tse1.mm.bing.net/th?id=OIP.p2RsOTAgJlGgf46bjyzcFQHaFj&pid=Api&P=0&h=180" alt="Farm Image 1" />
      <p>Farm Image </p>
      
    {/* <div className='aboutimage'>
    <img src=" https://tse1.mm.bing.net/th?id=OIP.HsT0JsOoVwXUF7OwMdRnrwHaFj&pid=Api&P=0&h=180" alt="Farm Image 1" />
      <p>Maize Image</p>
    </div> */}
    </div>
       </div>
         {/* {Skill content} */}
         <div className={toggleTab===2?"content active-content":"content"}>
          <h2>Process</h2>
          <p>Farm champions diverse and sustainable cultivation methods, ensuring ecological harmony and ethical farming practices. 
            Employing techniques such as crop rotation, companion planting, and integrated pest management, the farm nurtures soil health and biodiversity while minimizing the need for synthetic inputs.
             With a focus on regenerative agriculture, XYZ Farm embraces natural composting and cover cropping to enrich the soil and enhance crop resilience. 
             </p>

           <div className="skills-row">

            <div className="skills-column">
             <div className="progress-wrap">
              <h3>CROP ROTATION</h3>
               <div className="progress">
                <div className="progress-bar Developer">
                  <span>80% </span>
                </div>
                </div>
               </div>
             </div>

         <div className="skills-column">
          <div className="progress-wrap">
          <h3>NATURAL COMPOSTING</h3>
         <div className="progress">
         <div className="progress-bar Designer">
             <span>90% </span>
         </div>
       </div>
    </div>
   </div>

       <div className="skills-column">
          <div className="progress-wrap">
          <h3>ORGANIC PEST CONTROL</h3>
         <div className="progress">
         <div className="progress-bar Javscript">
             <span>85% </span>
         </div>
         </div>
        </div>
       </div>

        <div className="skills-column">
          <div className="progress-wrap">
          <h3>WATER MANAGEMENT STRATEGIES</h3>
         <div className="progress">
         <div className="progress-bar Photoshop">
             <span>88% </span>
         </div>
       </div>
    </div>
   </div>


 </div>
    </div>

     {/* {Experience Content} */}
    <div className={toggleTab===3?"content active-content":"content"}>

      <div className="exp-column">
       <h3>Sustainability Advocate</h3>
        <span>2014-2022</span>
        <p>A dedicated advocate for eco-friendly initiatives and sustainable living. Collaborated with communities and organizations, focusing on renewable energy, waste reduction, and conservation efforts.
           Committed to fostering a greener, more sustainable future.
</p>
      </div>

      <div className="exp-column">
        <h3>Eco-friendly Farming Specialist</h3>
        <span>2014-2022</span>
        <p>Championed organic farming, crop rotation, and regenerative agriculture to preserve soil health and biodiversity. 
          Pioneered water-saving irrigation and integrated pest management for minimal environmental impact, ensuring a healthier ecosystem.</p>
      </div>

      <div className="exp-column">
        <h3>Environmental Conservation Volunteer</h3>
        <span>2014-2022</span>
        <p>Engaged in conservation projects, including tree planting, beach clean-ups, and educating communities on preserving ecosystems and biodiversity.
           Actively involved in sustainable waste management solutions for a healthier planet.</p>
      </div>
</div>

</div>
</div>
</div>
</section>
</Fragment>
  )
}

export default About