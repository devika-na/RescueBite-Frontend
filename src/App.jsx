import { useState } from "react";
import axios from "axios";

import { FaLeaf } from "react-icons/fa";

import Card from "./components/Card";
import ImpactDashboard from "./components/ImpactDashboard";
import AgentStatus from "./components/AgentStatus";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {

  const [page, setPage] = useState("login");

  const [user, setUser] = useState(null);

  const [notification, setNotification] = useState(false);

  const [formData, setFormData] = useState({
    donor_name: "",
    organization: "",
    food_name: "",
    quantity: "",
    prep_time: "",
    location: ""
  });

  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleImage(e){
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e){

    e.preventDefault();

    setNotification(true);

    setTimeout(() => {
      setNotification(false);
    }, 3000);

    setLoading(true);
    setResult(null);

    try{
      const data = new FormData();

      Object.keys(formData).forEach((key)=>{
        data.append(key, formData[key]);
      });

      if(image){
        data.append("image", image);
      }

      const response = await axios.post(
        "https://rescuebite-ai-agent.onrender.com/donate",
        data,
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      );

      setResult(response.data);

    }
    catch(error){
      console.log(error);
      alert("Backend connection failed");
    }
    finally{
      setLoading(false);
    }
  }


  // REGISTER PAGE

  if(page === "register"){

    return (
      <Register
        setPage={setPage}
        setUser={setUser}
      />
    );

  }


  // LOGIN PAGE

  if(!user){

    return (
      <Login
        setUser={setUser}
        setPage={setPage}
      />
    );

  }


  // NGO PAGE TEMPORARY

  if(user.role === "ngo"){

    return (
      <div style={styles.container}>
        <h1 style={styles.title}>🤝 NGO Dashboard</h1>
        <p>Welcome {user.email}</p>
        <h3>Food donations will appear here.</h3>
      </div>
    );

  }


  // DONOR PAGE

  return (

    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>
          <FaLeaf />
          RescueBite AI
        </h1>
        <p style={styles.subtitle}>Intelligent Food Rescue Network</p>
        <p>Welcome {user.email}</p>
      </div>

      <div style={styles.card}>

        <h2>🍱 Donate Excess Food</h2>

        <form onSubmit={handleSubmit}>

          {
            [
              ["donor_name","Donor Name"],
              ["organization","Organization/Event"],
              ["food_name","Food Name"],
              ["quantity","Quantity"],
              ["prep_time","Preparation Time"],
              ["location","Pickup Location"]
            ].map((field)=>(
              <input
                key={field[0]}
                style={styles.input}
                name={field[0]}
                placeholder={field[1]}
                onChange={handleChange}
              />
            ))
          }

          <label>📷 Upload Food Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {
            image &&
            <div style={styles.preview}>
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                style={styles.image}
              />
            </div>
          }

          <button style={styles.button}>🚀 Rescue Food</button>

        </form>

      </div>

      {
        notification &&
        <div style={styles.notificationPopup}>
          🍲 Your extra food is no longer extra —
          it's now a reason for someone to smile! 😊
        </div>
      }

      {
        loading &&
        <AgentStatus />
      }

      {
        result &&
        <div style={styles.result}>

          <h2>📊 RescueBite AI Report</h2>

          <Card title="Donor" icon="👤">
            <p>{result.donor_name}</p>
          </Card>

          <Card title="Food Details" icon="🍱">
            <p>Food: {result.food_name}</p>
            <p>Quantity: {result.quantity}</p>
            <p>Type: {result.food_type}</p>
            <p>Servings: {result.servings}</p>
          </Card>

          <Card title="Food Safety" icon="🛡️">
            <p style={styles.textBlock}>{result.safety_status}</p>
          </Card>

          <Card title="NGO Match" icon="🤝">
            <p>NGO: {result.matched_ngo}</p>
            <p>Location: {result.ngo_location}</p>
          </Card>

          <Card title="Route" icon="🚚">
            <p style={styles.textBlock}>{result.route}</p>
          </Card>

          

          <ImpactDashboard />

        </div>
      }

    </div>

  );

}


const styles = {
  container:{ minHeight:"100vh", padding:"40px", background:"#F5FDF7", fontFamily:"Arial" },
  header:{ textAlign:"center", marginBottom:"30px" },
  title:{ color:"#15803D" },
  subtitle:{ color:"#4B5563" },
  card:{ background:"white", padding:"25px", borderRadius:"15px", maxWidth:"450px", margin:"auto", boxShadow:"0 4px 15px rgba(0,0,0,0.1)" },
  input:{ width:"100%", padding:"12px", margin:"8px 0", borderRadius:"8px", border:"1px solid #ccc" },
  button:{ width:"100%", padding:"12px", marginTop:"15px", background:"#16A34A", color:"white", border:"none", borderRadius:"10px", cursor:"pointer" },
  preview:{ marginTop:"15px", textAlign:"center" },
  image:{ width:"220px", borderRadius:"15px" },
  result:{ background:"white", padding:"30px", marginTop:"30px", borderRadius:"15px" },
  textBlock:{ whiteSpace:"pre-wrap" },
  notificationPopup: {
    position:"fixed",
    top:"30px",
    right:"30px",
    background:"#16A34A",
    color:"white",
    padding:"18px 25px",
    borderRadius:"15px",
    fontSize:"16px",
    fontWeight:"600",
    boxShadow:"0 10px 30px rgba(0,0,0,0.2)",
    zIndex:1000,
    maxWidth:"350px"
  }
};

export default App;