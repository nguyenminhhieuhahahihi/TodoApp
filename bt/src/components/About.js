import react from "react";
import  './About.css';
import logo from '../assets/images/bg.png';
import police from '../assets/images/police_car.gif';
export const About = () =>{
    // const sun = document.querySelector('.sun');
    // const body = document.querySelector('body');
   
    
    //     sun.onclick= function(){
    //         body.classList.toggle('dark')
    //     }
    const body = document.querySelector('body');
    
       var sun = document.querySelector('.sun');
        //  function sun(){
        //     body.classList.toggle('dark')
        // }
        const sunn = () =>{
            body.classList.toggle('dark')
        }
    
   
    return(
        <>
        <div>
            {/* <h1>About me</h1> */}
            
            <h2 className="menuitem">Họ tên: Nguyễn Minh Hiếu</h2>
            <h3 className="menuitem">Mã số sinh viên: 45.01.104.083</h3>
            
          <section className="scene">
            <div   className="sun" onClick={sunn} >
                
            </div>
            <div className="bg">
                
            <img src={logo} className="bg-edit"/>
                <img src={police} className="car1"/>
                <img src={police} className="car2"/>
            </div>
          </section>
        </div>
      
        </>
    )
};