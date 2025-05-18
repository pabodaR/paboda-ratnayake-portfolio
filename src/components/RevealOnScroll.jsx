import { useEffect } from "react";

const RevealOnScroll = ({children}) =>{

    const ref = useRef(null)

    useEffect(() => {
const observer= new IntersectionObserver(([entry]) => {

    if(entry.isIntersecting){
        ref.current.classList.add("visible");
    }
},{threshold:0.2, rootMargin:"0p 0px -50px 0px"} );

if(ref.current) observer.observer(ref.current);
return () => observer.disconnect();
    })

    return <div ref={ref} className="reveal">

        {children}
    </div>
};