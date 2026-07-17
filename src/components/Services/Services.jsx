import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        {/* Left Image */}
        <div className="services-left">
          <div className="services-image-container">
            <div className="services-image"></div>

            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>

        {/* Right Content */}
        <div className="services-right">
          <h2 className="section-title">
            See how we can help you progress
          </h2>

          <p className="section-subtitle">
            We are half of your team. We are the ones who dare to dream
            big and then make it happen. We believe in the power of
            design, strategy and sense.
          </p>

          <button className="link-btn">
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;