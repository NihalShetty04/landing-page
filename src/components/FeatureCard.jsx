function FeatureCard({ title, description }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "10px",
      transition: "0.3s"
    }}
    className="card"
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
