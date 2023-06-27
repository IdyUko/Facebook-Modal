import React, { useState } from "react";
import "./App.css"
import {AiFillHome, AiOutlineSearch} from "react-icons/ai"
import {BsShop, BsMessenger} from "react-icons/bs"
import {CgMenuGridO, CgGames} from "react-icons/cg"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineOndemandVideo, MdGroups} from "react-icons/md"


function App () {

        const [modal, setModal] = useState(false)

        const toggleModal =() => {
        setModal (!modal)
 }
        const[file, setFile] = useState()
        function getFile(event) {
                setFile(URL.createObjectURL(event.target.files[0]))
        }


    return( 
        <div className="App">

                <div className="Header">
                <div className="Header-wrap">
                        <div  className="Leftnavs">
                                <div className="Logo"><img className="Logoimg" src="/Facebook logo.svg"  alt=""/></div>
                                <div className="Search-hold"> 
                                        <div className="Search-icon"><AiOutlineSearch style={{width: 18, height: 15, color: "gray", paddingLeft: 10}} /></div>
                                        <div><input  placeholder="Search Facebook"/></div>
                                </div>
                        </div> 
                
                        <div className="Midnavs">
                                <nav><AiFillHome  style= {{width: 25, height: 25, color: "blue"}}/></nav>
                                <nav><MdOutlineOndemandVideo  style= {{width: 25, height: 25, color: "gray"}} /></nav>
                                <nav><BsShop  style= {{width: 25, height: 25, color: "gray"}}/></nav>
                                <nav className="Group"><MdGroups  style= {{width: 22, height: 22}}/></nav>
                                <nav><CgGames  style= {{width: 30, height: 30, color: "gray"}} /></nav>
                        </div>

                        <div className="Rightnavs">
                                <div className="Menu"><CgMenuGridO  style={{width: 25, height: 25}}/></div>
                                <div className="Message"><BsMessenger  style={{width: 18, height: 18}}/></div>
                                < div className="Notification"><IoIosNotifications  style={{width: 30, height: 20}}/></div>
                                < div className="Account"><img  className="Profileimg" src="/idy.jpg"  alt=""/></div>
                        </div>
               
                </div>
                </div>
       
                <div className="Hero">
                        <div className="Left"></div>

                        < div className="Mid">
                                <div className="Card1">
                                        <div className="Top">
                                                < div className="Topwrap">
                                                        <div>Stories</div>
                                                        <div>Reels</div>
                                                        <div>Rooms</div>
                                                </div>
                                        </div>
                                        <div className="Cardwrap">
                                                <div className="Create-story">
                                                        <div className="Create-story-didy">
                                                                <div className="Plus">+</div>
                                                        </div>
                                                        <div className="Create-story-bottom">Create story</div>
                                                </div>
                                                <div className="Create-story-1">  </div>
                                                <div className="Create-story-2">  </div>
                                                <div className="Create-story-3">  </div>
                                                <div className="Create-story-4">  </div> 
                                        </div>
                                </div >
                                <div className="Card2">
                                        <div className="Top-post">
                                                < div className="Account"><img  className="Profileimg" src="/idy.jpg"  alt=""/></div> 
                                                <button  
                                                        onClick={toggleModal}
                                                        className= "Post-button">
                                                        "What's on your mind, Didy?"
                                                </button>  
                                        </div>
                                        <div className="Icons">
                                                <div className="Iconswrap">
                                                        <div  className="video">
                                                                <img src="/video.png"/>
                                                                <div>Live video</div>
                                                        </div>
                                                        <div className="photo">
                                                                <img src="/photo.png"/>
                                                                <div>Photo/video</div>  
                                                        </div>
                                                        <div className="smiley">
                                                                <img src="/smiley.png"/>
                                                                <div>Feeling/activity</div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>

                        <div className="Right"></div>    
                </div>

                {modal &&(
                        <div className= 'Post-Card'>
                                <div className='Post-Card-Top'>  
                                        <div  className="Post-Cardwrap-Top">
                                                <div  style={{fontWeight:"bold", fontSize:20}}>Create post</div>
                                                < div className="Account"><img  className="Profileimg" src="/idy.jpg"  alt=""/></div> 
                                                {/* <button 
                                                className='Close'
                                                onClick={toggleModal}
                                                >X</button> */}
                                        </div>
                                </div>
                                <div className= 'Post-Card-Bottom'>
                                <div className='Post-Cardwrap-Bottom'>
                                        <textarea placeholder="type text here"> </textarea>
                                        <div className='Image-preview'>
                                                <div className='Preview'>
                                                        <img  className= "File-preview"  src={file}/>
                                                        <input  className= "Choose-file" type="file" onChange={getFile}></input>
                                                </div>
                                        </div>
                                        <div className="Post"><button className='Post-Button' onClick={toggleModal}>Close</button></div>
                                </div>
                        </div>
                        </div>
                ) }
        </div>      
    )
}

export default App;