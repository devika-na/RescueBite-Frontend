function ImpactDashboard({impact}) {


  return (

    <div style={styles.container}>


      <h2>
        🌍 Sustainability Impact
      </h2>



      <div style={styles.grid}>


        <div style={styles.card}>

          <h3>
            🍽 Meals Rescued
          </h3>

          <p>
            {impact?.meals || "100"}
          </p>

        </div>





        <div style={styles.card}>

          <h3>
            ♻ Food Saved
          </h3>

          <p>
            {impact?.food || "2 kg"}
          </p>

        </div>






        <div style={styles.card}>

          <h3>
            🌍 CO₂ Reduced
          </h3>

          <p>
            {impact?.co2 || "3 kg"}
          </p>

        </div>







        <div style={styles.card}>

          <h3>
            🎯 SDG Impact
          </h3>

          <p>
            SDG 2 • SDG 12 • SDG 13
          </p>

        </div>



      </div>


    </div>

  );

}





const styles={


container:{

marginTop:"30px",

background:"white",

padding:"25px",

borderRadius:"15px",

boxShadow:"0 4px 15px rgba(0,0,0,0.1)"

},



grid:{

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:"20px",

marginTop:"20px"

},



card:{

border:"2px solid #22c55e",

borderRadius:"12px",

padding:"20px",

textAlign:"center",

background:"#f0fdf4"

}



};



export default ImpactDashboard;