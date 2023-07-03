import React, { useState } from "react";
import "./App.css"
import {AiFillHome, AiOutlineSearch} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"
import {BsShop, BsMessenger} from "react-icons/bs"
import {CgMenuGridO, CgGames} from "react-icons/cg"
import {FaBookOpen, FaTimes} from "react-icons/fa"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineOndemandVideo, MdGroups} from "react-icons/md"


function App () {

        const [modal, setModal] = useState(false)

        const toggleModal =() => {
        setModal (!modal)
 }
        const[file, setFile] = useState()

        function handleChange(e) {
                console.log(e.target.files)
                setFile(URL.createObjectURL(e.target.files[0]))
        }

        const [details, setDetails] = useState([])
        const [texts, setTexts] = useState([])

        const Post = () => {
                const Items={
                        text: texts,
                        image: file,
                }
                setDetails([...details, Items])
        }


    return( 
        <div className="App">

                <div className="Header">
                <div className="Header-wrap">
                        <div  className="Leftnavs">
                                <div className="Logo"><img className="Logoimg" src="/Facebook logo.svg"  alt=""/></div>
                                <div className="Search-hold"> 
                                        <div className="Search-icon"><AiOutlineSearch style={{width: 18, height: 18, color: "gray"}} /></div>
                                        <div><input  placeholder="Search Facebook"/></div>
                                </div>
                        </div> 
                
                        <div className="Midnavs">
                                <nav><AiFillHome  style= {{width: 25, height: 25, color: "dodgerblue"}}/></nav>
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
                                                        <div  className="Fa"  style={{display: "flex", alignItems: "center"}}><FaBookOpen  style={{width: 25, height: 25, color: "dodgerblue"}}/>Stories</div>
                                                        <div className="Fa"  style={{display: "flex", alignItems: "center"}} ><BiVideoPlus  style={{width: 30, height: 30}}/>Reels</div>
                                                        <div className="Fa"  style={{display: "flex", alignItems: "center"}} ><BiVideoPlus  style={{width: 30, height: 30}} />Rooms</div>
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
                                                <button 
                                                        className='Close'
                                                        onClick={toggleModal}><FaTimes/>
                                                </button>
                                        </div>
                                </div>
                                <div className= 'Post-Card-Bottom'>
                                <div className='Post-Cardwrap-Bottom'>
                                        <textarea placeholder="What's on your mind, Didy?"
                                        value= {texts}  onChange = {(e) =>{
                                                setTexts(e.target.value);
                                        }}> </textarea>
                                        <div className='Image-preview'>
                                                <div className='Preview'>
                                                        <img  className= "File-preview"  src={file}/>
                                                        <input  className= "Choose-file" type="file" onChange={handleChange} />
                                                </div>
                                        </div>
                                        <div className="Post"><button className='Post-Button' onClick={Post}>Post</button></div>
                                </div>
                        </div>
                        </div>
                ) }

                {details && details.map((props) =>{
                  return(                                                   
                        <div className='Display-Post'>
                                <div className='Display-Post-Top'>
                                        < div className="Identity">
                                                <div className="Account"><img  className="Profileimg" src="/idy.jpg"  alt=""/></div>
                                                <p style={{fontSize: 12}}><b>Didy Bassey Uko</b></p>
                                        </div>
                                        <div  className= "Dots"><b>...</b></div>
                                </div>

                                <div className='Display-Post-Mid' key= {props.id}>
                                        <p className="Text">{props.text}</p>
                                        <img  className="Picture" src= {props.image} />
                                </div>

                                <div className='Display-Post-Bottom'> 
                                        <div className='Display-Post-Bottom-1'>
                                                <div className="Wrap-1">
                                                        <div>Like</div>
                                                        <div>Comment</div>
                                                        <div>Share</div>
                                                </div>
                                        </div>
                                        <div className="Line"></div>
                                        <div className='Display-Post-Bottom-2'>
                                                < div className="Account"><img  className="Profileimg" src="/idy.jpg"  alt=""/></div> 
                                                <div className= "Post-comment">Write a comment...</div>  
                                        </div>
                                </div>
                        </div>
                   )
                    })}  
        </div>      
    )
}

export default App;