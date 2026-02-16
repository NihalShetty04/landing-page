import FeatureCard from "./FeatureCard"

function Features() {
  return (
    <section className="container" style={{display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"}}>
      
      <FeatureCard 
        title="Fast Performance"
        description="Optimized for speed and efficiency."
      />

      <FeatureCard 
        title="Secure"
        description="Your data is protected with best practices."
      />

      <FeatureCard 
        title="Easy Integration"
        description="Connect with your favorite tools easily."
      />

    </section>
  )
}

export default Features
