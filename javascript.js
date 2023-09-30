*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     
  }
  
  body{
     
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to left, #33ccff 0%, #ff99cc 100%)
     
  }
  
  .container{
    max-width: 450px;
    background: #040037;
    border-radius: 8px;
    box-shadow: 0px 0px 15px 3px rgba(0,0,0,0.4);
    font-family: sans-serif;
    padding: 20px;
    box-shadow: 0 0 90px black;
    z-index: 1;
    position: fixed;
  }
                                            /* video */
  .video-container{
    width: 100%;
    height: 100vh;
    position: absolute;
    
     
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 10px;
    animation: type 2s steps(22);
    white-space: nowrap;
    
  }
   
  .Temperature-icon{
    font-size: 45px;
    color: #fff;
  }
  
  h1{
    color: #fff;
    letter-spacing: 1.2px;
    font-size: 30px;
  }
  
  #celsius, #fahrenheit, #kelvin{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }
  
  input{
    flex: 5;
    height: 60px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 8px 0 0 8px;
    padding: 0 10px;
  }
  
  .icon{
    flex: 1;
    height: 60px;
    line-height: 60px;
    padding: 0 5px;
    text-align: center;
    font-size: 30px;
    background: #f37e09bb;
    color: #ffffff;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
  }
  .icon:hover{
    color: aqua;
    box-shadow: 0 0 20px;
  }
  
  .button{
    margin-top: 25px;
    text-align: center;
  }
  
  
  .button button{
    border: none;
    outline: none;
    padding: 10px 30px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s;
  
  }
  
  .button button:hover{
    box-shadow: 0 0 20px rgb(233, 164, 35);
    background: #f206069a;
    color: #fdfbfb;
  }