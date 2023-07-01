import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
    <>
    <div style={{width: "1200px", height : "800px"}} >

      <div   className={styles.loadingCSS} >
     
        <img
          width="250px"
          src="https://media0.giphy.com/media/3ov9jKQbfWvDNu2Z0s/200w.webp?cid=ecf05e47khktnqytnpttj6jvfzm4lnrtr3i65e38n7bfq2xy&ep=v1_gifs_search&rid=200w.webp&ct=g"
          alt="loading..."
          />
       <h1 style={{fontSize :"50px", marginTop : "-50px"}} >suFi</h1>
      </div>
   </div>
    </>
  );
};

export default Loading;
