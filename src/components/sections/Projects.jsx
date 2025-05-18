export const Projects = () =>{
    return <section id="projects"
    className="min-h-screen flex items-center justify-center py-20"
    > 
    
    <div className="max-w-5xl m-auto px-4"> 
        <h2 
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects </h2>

    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6"> 
        
        
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
          <h3 className="text-xl font-bold mb-2">✈️ Flight Delay Analysis</h3>
          <p className="text-gray-400 mb-4">
<ul>
<li><strong>Problem: </strong>What causes flight delays, and how do they vary across airports and seasons?
</li>
<br></br>
<li><strong>Insight: </strong> Late aircraft accounts for ~40% of delay time. Winter sees peak delays, while summer cancellations nearly double. Regional airports like St. Cloud and Owensboro show best performance.
</li>
</ul>             
</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Exploratory Data Analysis","Python"].map((tech, key)=>(
                <span
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                            {tech}
                            </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <a href="https://github.com/pabodaR/Flight-Delay-EDA"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            > 
            View Project 🔗</a>

            <a href="https://medium.com/your-article-link"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            > 
            View Blog 📝</a>

          </div>
        </div>



<div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
          <h3 className="text-xl font-bold mb-2">🔋 Home Energy Usage Prediction
</h3>
          <p className="text-gray-400 mb-4">
<ul>
<li><strong>Problem: </strong>Can we predict energy use based on real-time household data or just time of day?
</li>
<br></br>
<li><strong>Insight: </strong> Built a 99.9% accurate model to predict power usage using voltage and appliance data, and a classifier that detects high-usage periods from time features alone—showing how behavior and timing drive demand.
</li>
</ul>
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Machine Learning","Classification","Regression"].map((tech, key)=>(
                <span
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            ">
                            {tech}
                            </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <a href="https://github.com/pabodaR/Home-Energy-Usage-Prediction"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            > 
            View Project 🔗</a>

            <a href="https://medium.com/@paboda-ratnayake/from-voltage-to-insight-966fc838a84b"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            > 
            View Blog 📝</a>
          </div>
        </div>




    </div>

    </div>
    </section>
  }