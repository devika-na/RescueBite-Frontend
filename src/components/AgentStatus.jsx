import { useEffect, useState } from "react";


function AgentStatus(){

  const agents = [

    "👤 Intake Agent",
    "📷 Vision AI Agent",
    "🛡️ Safety Agent",
    "🤝 NGO Matching Agent",
    "🚚 Logistics Agent",
    "📱 Notification Agent"

  ];


  const [active,setActive] = useState(0);



  useEffect(()=>{


    const timer = setInterval(()=>{


      setActive(prev => {

        if(prev < agents.length-1)
          return prev+1;

        return prev;

      });


    },700);



    return ()=>clearInterval(timer);


  },[]);





  return (

    <div style={styles.container}>


      <h2>
        🤖 AI Agents Running
      </h2>



      {
        agents.map((agent,index)=>(


          <div

          key={agent}

          style={{

            ...styles.agent,

            background:

            index <= active

            ? "#dcfce7"

            : "white"

          }}

          >


          {
            index < active

            ?

            "✅ "

            :

            index === active

            ?

            "🔄 "

            :

            "⏳ "

          }


          {agent}


          </div>


        ))

      }



    </div>

  );

}





const styles={


container:{

background:"white",

padding:"25px",

borderRadius:"15px",

marginTop:"30px",

boxShadow:"0 4px 15px rgba(0,0,0,0.1)"

},



agent:{

padding:"12px",

margin:"10px 0",

borderRadius:"10px",

border:"1px solid #22c55e",

fontWeight:"bold"

}



};



export default AgentStatus;