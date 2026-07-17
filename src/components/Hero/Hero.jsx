import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">

        <div className="hero-content">
          <h1 className="hero-title">
            The thinkers and doers were changing the status Quo with
          </h1>

          <p className="hero-subtitle">
            We are a team of strategists, designers, and visionaries.
            Together, we create bold ideas that happen when you dare to think
            big.
          </p>
        </div>

        <div className="hero-images">
          <div className="floating-img img-1"></div>
          <div className="floating-img img-2"></div>
          <div className="floating-img img-3"></div>
          <div className="floating-img img-4"></div>
          <div className="floating-img img-5"></div>
          <div className="floating-img img-6"></div>
          <div className="floating-img img-7"></div>
          <div className="floating-img img-8"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;