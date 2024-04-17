import React from "react";
import './MainSample.css';
import vids from './reactinterviewsamplevideo.mp4';
import { SiGooglesheets } from "react-icons/si";
import angry from './angrybeards.png';
import magic from './magicsound.png';
import deli from './delidips.png';
import chic from './chicstore.jpg';
import oldcontent from './oldcontent.png';
import newcontent from './newcontent.png';
import logo from './store.link.png';

function MainSample(){
    return(
        <div>
            <div id="navbar">
                <img src={logo} alt="store.link logo" className="logo" ></img>
                <h3 className="demo_store">Demo store</h3>
                <h3 className="pricing">Pricing</h3>
                <button className="login">Login</button>
                <button className="createbtn">Create Store.link</button>
            </div>
            <div id="First_div">
                <div className="first"> 
                    <h1 style={{width:"400px",fontSize:38}}>Building & Managing an Online Store is <span style={{color:"grey",textDecoration:"line-through",textDecorationColor:"#963c0b"}}>hard</span> easy!</h1>
                    <h5 style={{width:"400px",fontWeight:200,fontSize:25,height:"50px",marginTop:"-5px"}}>Create a modern e-commerce website using and get orders on Email, WhatsApp & Sheet.</h5>
                    <h4 style={{marginLeft:"340px",marginTop:"-50px"}}><SiGooglesheets style={{color:"#2e960b"}}/>Google Sheets</h4>
                    <div style={{marginTop:"80px"}}>
                        <button style={{width:"250px",height:"50px",borderRadius:"25px",marginLeft:"10px",backgroundColor:"#2e960b",border:"1px "}}><div className="store">Create a Store.link</div> <div className="free">its Free!</div></button>
                        <button  style={{width:"160px",height:"50px",borderRadius:"25px",marginLeft:"30px",color:"#2e960b",border:"1px solid  #49ed37",backgroundColor:"white"}}>Visit Demo Store</button>
                        <h5 style={{color:"grey",fontWeight:"100"}}>No coding required. No credit card required.</h5>
                    </div>
                </div>
            
                <div className="video1">
                    <video controls width="600">
                     <source src= {vids} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="Partners">
                <h3 style={{marginLeft:"70px",color:"grey"}}>Powering <span style={{color:"#49ed37"}}>1,000+</span>  E-commerce stores</h3>
                <div>
                    <img src={angry} alt="Angry beards logo" className="angry"></img>
                    <img src={magic} alt="Magic Sound Logo" className="magic" ></img>
                    <img src={deli} alt="Delipdips logo" className="deli" ></img>
                    <img src={chic} alt="chicstore logo" className="chic" ></img>
                </div>
            </div>
            <div id="oldmethod">
                <div className="oldbtn">
                    <h5 style={{marginTop:"8px",marginLeft:"13px",color:"white"}}>old method</h5>
                </div>
                <h1 style={{marginLeft:"450px",marginTop:"50px"}}>Managing Products is <span style={{color:"#c93102"}}>tedious work </span>🤯</h1>
                <h5 style={{marginLeft:"520px",marginTop:"30px",color:"grey"}}>Adding and updating a product in your online store should not be the <br></br>same as filing a tax form, it's a battle against endless forms.</h5>
                <img src={oldcontent} alt="old content image" className="oldcontimg"></img>
            </div>
            <div id="newmethod">
                <div className="newbtn">
                    <h5 style={{marginTop:"8px",marginLeft:"50px",color:"white"}}>New Store.link Method</h5>
                </div>
                <h1 style={{marginLeft:"450px",marginTop:"50px"}}>One <span style={{color:"#2e960b"}}>Row</span> = <span style={{color:"#2e960b"}}>One Product.</span> It's that Simple 😇</h1>
                <h5 style={{marginLeft:"520px",marginTop:"30px"}}>Just add or update your product name, price and other details into a <br></br>single Google Sheet row and watch the Magic happen ✨</h5>
                <img src={newcontent} alt="New Content Image" className="newcontimg" ></img>
            </div>
        </div>
    );
}

export default MainSample;