import { useState } from "react";
import axios from "axios";

import {
  FaUser,
  FaCamera,
  FaShieldAlt,
  FaHandsHelping,
  FaRoute,
  FaLeaf,
  FaTruck,
  FaRecycle,
  FaGlobe
} from "react-icons/fa";

import { MdRestaurant } from "react-icons/md";

import { BsFillImageFill } from "react-icons/bs";


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



    try {


      const data = new FormData();


      data.append("donor_name", formData.donor_name);

      data.append("organization", formData.organization);

      data.append("food_name", formData.food_name);

      data.append("quantity", formData.quantity);

      data.append("prep_time", formData.prep_time);

      data.append("location", formData.location);



      if(image){

        data.append("image", image);

      }



      const response = await axios.post(

        "http://127.0.0.1:8000/donate",

        data,

        {

          headers: {

            "Content-Type":"multipart/form-data"

          }

        }

      );



      setResult(response.data);



    }


    catch(error) {


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
          Donate Excess Food
        </h2>



        <form onSubmit={handleSubmit}>


          <input
            style={styles.input}
            name="donor_name"
            placeholder="Donor Name"
            onChange={handleChange}
          />



          <input
            style={styles.input}
            name="organization"
            placeholder="Organization/Event"
            onChange={handleChange}
          />



          <input
            style={styles.input}
            name="food_name"
            placeholder="Food Name"
            onChange={handleChange}
          />



          <input
            style={styles.input}
            name="quantity"
            placeholder="Quantity"
            onChange={handleChange}
          />



          <input
            style={styles.input}
            name="prep_time"
            placeholder="Preparation Time"
            onChange={handleChange}
          />



          <input
            style={styles.input}
            name="location"
            placeholder="Pickup Location"
            onChange={handleChange}
          />



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

            <div style={{
              marginTop:"15px",
              textAlign:"center"
            }}>


              <img

                src={URL.createObjectURL(image)}

                alt="Food Preview"

                style={{

                  width:"220px",

                  height:"220px",

                  borderRadius:"15px",

                  objectFit:"cover",

                  boxShadow:"0 4px 10px rgba(0,0,0,0.2)"

                }}

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

        <h3 style={{textAlign:"center"}}>

          🤖 AI Agents Processing...

        </h3>

      }





      {

        result &&


        <div style={styles.result}>


          <h2>
            📊 RescueBite AI Report
          </h2>



          <section>

            <h3>
              👤 Donor
            </h3>

            <p>
              {result.donor_name}
            </p>

          </section>



          <section>

            <h3>
              🍱 Food Details
            </h3>

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


          </section>



          <section>

            <h3>
              🛡️ Food Safety
            </h3>

            <pre>
              {result.safety_status}
            </pre>


          </section>



          <section>

            <h3>
              🤝 NGO Matching
            </h3>


            <p>
              NGO: {result.matched_ngo}
            </p>


            <p>
              Location: {result.ngo_location}
            </p>


          </section>



          <section>

            <h3>
              🚗 Route Planning
            </h3>

            <pre>
              {result.route}
            </pre>


          </section>



          <section>

            <h3>
              📱 Notifications
            </h3>

            <pre>
              {result.notification}
            </pre>

          </section>



          <section>

            <h3>
              🌍 Sustainability Impact
            </h3>

            <pre>
              {result.impact}
            </pre>

          </section>



        </div>

      }


    </div>

  );

}





const styles = {


  header: {

    textAlign:"center",

    marginBottom:"30px"

  },


  subtitle: {

    color:"#4B5563",

    fontSize:"18px"

  },


  container: {

    minHeight:"100vh",

    padding:"40px",

    background:"#F5FDF7",

    fontFamily:"Arial"

  },


  title:{


    color:"#15803D",

    textAlign:"center"

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


  result:{


    background:"white",

    padding:"30px",

    borderRadius:"15px",

    margin:"30px auto",

    maxWidth:"800px",

    boxShadow:"0 4px 15px rgba(0,0,0,0.1)"

  }


};






export default App;