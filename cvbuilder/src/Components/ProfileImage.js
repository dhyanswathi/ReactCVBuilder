import React, { useState } from "react";
import "./ProfileImage.css";


function ProfileImage () {
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div>
      
      {selectedImage && (
        <div>
        <img className="profileImage" alt="not found" src={URL.createObjectURL(selectedImage)} />
        
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default ProfileImage

