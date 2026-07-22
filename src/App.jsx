import { useState } from "react";
import axios from "axios";

import { FaLeaf } from "react-icons/fa";

import Card from "./components/Card";
import ImpactDashboard from "./components/ImpactDashboard";
import AgentStatus from "./components/AgentStatus";


function App() {

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



  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }



  function handleImage(e) {

    setImage(e.target.files[0]);

  }




  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);
    setResult(null);


    try {

      const data = new FormData();


      data.append("donor_name", formData.donor_name);
      data.append("organization", formData.organization);
      data.append("food_name", formData.food_name);
      data.append("quantity", formData.quantity);
      data.append("prep_time", formData.prep_time);
      data.append("location", formData.location);



      if(image) {

        data.append("image", image);

      }



      const response = await axios.post(
        "http://127.0.0.1:8000/donate",
        data,
        {
          headers:{
            "Content-Type":"multipart/form-data"
          }
        }
      );


      setResult(response.data);


    } catch(error) {

      console.log(error);
      alert("Backend connection failed");

    }


    finally {

      setLoading(false);

    }

  }





  return (

    <div style={styles.container}>


      <div style={styles.header}>

        <h1 style={styles.title}>
          <FaLeaf /> RescueBite AI
        </h1>


        <p style={styles.subtitle}>
          Intelligent Food Rescue Network
        </p>

      </div>





      <div style={styles.card}>


        <h2>
          🍱 Donate Excess Food
        </h2>



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




        <label>
          📷 Upload Food Image
        </label>



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


            <p>
              {image.name}
            </p>


          </div>

        }





        <button style={styles.button}>

          🚀 Rescue Food

        </button>



        </form>


      </div>






      {
        loading &&

        <AgentStatus />

      }







      {
        result &&


        <div style={styles.result}>


          <h2>
            📊 RescueBite AI Report
          </h2>




          <div style={styles.reportGrid}>





            <Card title="Donor" icon="👤">

              <p>
                {result.donor_name}
              </p>

            </Card>





            <Card title="Food Details" icon="🍱">

              <p>
                Food: {result.food_name}
              </p>

              <p>
                Quantity: {result.quantity}
              </p>

              <p>
                Type: {result.food_type}
              </p>

              <p>
                Servings: {result.servings}
              </p>

            </Card>






            <Card title="Food Safety" icon="🛡️">

              <p style={styles.textBlock}>
                {result.safety_status}
              </p>

            </Card>






            <Card title="NGO Match" icon="🤝">

              <p>
                NGO: {result.matched_ngo}
              </p>

              <p>
                Location: {result.ngo_location}
              </p>

            </Card>






            <Card title="Route Planning" icon="🚗">

              <p style={styles.textBlock}>
                {result.route}
              </p>

            </Card>



          </div>





          <Card title="Notifications" icon="📱">

            <p style={styles.textBlock}>
              {result.notification}
            </p>

          </Card>





          <ImpactDashboard />



        </div>

      }




    </div>

  );

}






const styles = {


header:{

  textAlign:"center",

  marginBottom:"30px"

},



title:{

  color:"#15803D"

},



subtitle:{

  color:"#4B5563",

  fontSize:"18px"

},



container:{

  minHeight:"100vh",

  padding:"40px",

  background:"#F5FDF7",

  fontFamily:"Arial"

},




card:{

  background:"white",

  padding:"25px",

  borderRadius:"15px",

  maxWidth:"450px",

  margin:"20px auto",

  boxShadow:"0 4px 15px rgba(0,0,0,0.1)"

},




input:{

  width:"100%",

  padding:"12px",

  margin:"8px 0",

  borderRadius:"8px",

  border:"1px solid #ccc"

},




button:{

  width:"100%",

  padding:"12px",

  marginTop:"15px",

  background:"#16A34A",

  color:"white",

  border:"none",

  borderRadius:"10px",

  fontSize:"16px",

  cursor:"pointer"

},




preview:{

  textAlign:"center",

  marginTop:"15px"

},




image:{

  width:"220px",

  height:"220px",

  borderRadius:"15px",

  objectFit:"cover"

},




result:{

  background:"white",

  padding:"30px",

  borderRadius:"15px",

  margin:"30px auto",

  maxWidth:"1000px",

  boxShadow:"0 4px 15px rgba(0,0,0,0.1)"

},




reportGrid:{

  display:"grid",

  gridTemplateColumns:"repeat(2,1fr)",

  gap:"20px"

},




textBlock:{

  whiteSpace:"pre-wrap",

  lineHeight:"1.6",

  color:"#374151"

}


};



export default App;