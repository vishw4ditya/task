import "./Newsletter.css";

function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert(`Thanks for subscribing!\n${email}`);

    e.target.reset();
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Subscribe to our newsletter
          </h2>

          <p className="newsletter-subtitle">
            To make sure that you stay updated and never miss anything
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Subscribe Now
            </button>
          </form>
        </div>

        <div className="newsletter-shape"></div>
      </div>
    </section>
  );
}

export default Newsletter;