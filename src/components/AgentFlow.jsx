function AgentFlow(){

const agents = [

{
icon:"👤",
name:"Intake Agent"
},

{
icon:"📷",
name:"Vision AI Agent"
},

{
icon:"🛡️",
name:"Safety Agent"
},

{
icon:"🤝",
name:"NGO Matching Agent"
},

{
icon:"🚚",
name:"Logistics Agent"
},

{
icon:"📱",
name:"Notification Agent"
}

];


return (

<div style={styles.container}>

<h2>
🤖 AI Agent Workflow
</h2>


<div style={styles.flow}>


{
agents.map((agent,index)=>(

<div key={agent.name}>


<div style={styles.agent}>

<span>
{agent.icon}
</span>

<p>
{agent.name}
</p>

</div>



{
index !== agents.length-1 &&

<div style={styles.arrow}>
↓
</div>

}


</div>

))

}


</div>


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



flow:{

display:"flex",

flexDirection:"column",

alignItems:"center"

},



agent:{

border:"2px solid #22c55e",

borderRadius:"12px",

padding:"12px 30px",

minWidth:"250px",

textAlign:"center",

background:"#f0fdf4",

fontWeight:"bold"

},



arrow:{

fontSize:"30px",

color:"#16a34a"

}


};


export default AgentFlow;