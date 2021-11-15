//https://chatengine.io/projects/e91e2a1b-a860-401f-b623-cf7a5aa1ba58
// above link for chatengine for set user id and name
// import { ChatEngine } from 'react-chat-engine';
// import logo1 from './logo1.gif'
// import logomp4 from './logomp4.mp4'
import logomp4 from './logomp4.mp4'
import './App.css'
const App = () =>
 {
  return ( <>
  <h1>hello check</h1>
  <video autoPlay loop muted>
  <source src={logomp4} type="video/mp4"/>
  </video>
 
{/* <img src={logo1} alt="loading..."/> */}


  {/* <ChatEngine
        height="100vh"
        projectID="e91e2a1b-a860-401f-b623-cf7a5aa1ba58 "
        userName="vishwajeet"
        userSecret="123123"
      />
   */}
  </>
  
    );
    
}

export default App;
