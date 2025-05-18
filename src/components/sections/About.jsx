export const About = () => {

    const dataAnalysisSkills = ['Python', 'SQL'];
    const dataVisualizationSkills = ['Power BI', 'Amazon QuickSight'];
    const machineLearningSkills = ['Python'];
    const dbs = ['Microsoft SQL Server','Oracle']
    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20"> 
    
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me

        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"> 
            
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Data Analysis
                    </h3>

                    <div className="flex fle-wrap gap-2"> 
                        {dataAnalysisSkills.map((tech, key)=> (
                            <span
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            ">
                            {tech}
                            </span>
                        ))}

                    </div>
                </div>



                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Data Visualization
                    </h3>

                    <div className="flex fle-wrap gap-2"> 
                        {dataVisualizationSkills.map((tech, key)=> (
                            <span
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            ">
                            {tech}
                            </span>
                        ))}

                    </div>
                </div>




                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Machine Learning
                    </h3>

                    <div className="flex fle-wrap gap-2"> 
                        {machineLearningSkills.map((tech, key)=> (
                            <span
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            ">
                            {tech}
                            </span>
                        ))}

                    </div>
                </div>




                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Databases
                    </h3>

                    <div className="flex fle-wrap gap-2"> 
                        {dbs.map((tech, key)=> (
                            <span
                            key = {key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            ">
                            {tech}
                            </span>
                        ))}

                    </div>
                </div>




            </div>
        
        </div>
    
    <div className="grid gris-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"> 
        <h3 className ="text-xl font-bold mb-4"> Education </h3>
        
                <strong>🎓 Bsc.(Hons) Information Technology Specializing in Data Science</strong> - SLIIT (2021- 2024)
           
        </div>

        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"> 
        <h3 className ="text-xl font-bold mb-4"> Work Experience </h3>
                <div className = "space-y-4 text-gray-300" >

                    <div>
            <h4 className="font-semibold" >Power BI Developer at Kerner Norland (2025 Feb - Present) </h4>
                                    <br></br>

                        <p> 
                            ✅ Built interactive Power BI reports and data models to support performance tracking and insights.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">Data Analyst Trainee at Verdentra (2024 Oct - 2025 Feb) </h4>
                         <br></br>
                        <p> 
                            ✅ Delivered end-to-end BI solutions with Power BI and QuickSight, including analysis, collaboration, and documentation.

                        </p>
                                               

                    </div>

                    <div>
                        <h4 className="font-semibold">Undergraduate Trainee at IFS R&D International Pvt Ltd (2022 May - 2024 June) </h4>
                        <br></br>
                        <p> 
                            ✅ Developed automated test scripts and Power BI reports to support internal analytics and QA workflows.
                        </p>
                                           

                    </div>
                   
                </div>
        </div>
    </div>
    
    </div>
    </section>
}