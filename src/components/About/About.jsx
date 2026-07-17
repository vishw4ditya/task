import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="about-left">
          <div className="about-image-container">
            <div className="about-image"></div>

            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>

        <div className="about-right">
          <h2 className="section-title">
            Tomorrow should be better than today
          </h2>

          <p className="section-subtitle">
            We believe the future is designed and it's our job to help you build it.
            In your first 90 days.
          </p>

          <button className="link-btn">
            Know more →
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;