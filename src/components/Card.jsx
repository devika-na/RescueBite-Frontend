function Card({ title, icon, children }) {
  return (
    <div style={styles.card}>

      <h3 style={styles.title}>
        {icon} {title}
      </h3>

      <div>
        {children}
      </div>

    </div>
  );
}


const styles = {

  card:{
    background:"white",
    border:"2px solid #22c55e",
    borderRadius:"15px",
    padding:"20px",
    boxShadow:"0 4px 12px rgba(0,0,0,0.08)",
    transition:"0.3s"
  },


  title:{
    color:"#166534",
    marginBottom:"15px"
  }

};


export default Card;