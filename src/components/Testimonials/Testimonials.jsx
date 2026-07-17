import { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Company Inc",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=200",
      text:
        "Elementum delivered the site with stellar results. In its first month live, the site found a 62% increase in bookings. The team also had an impressive ability to use technologies that the company hadn't used, which has also proved to be easy to use and reliable."
    },
    {
      id: 2,
      name: "Emily Smith",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      text:
        "Working with Elementum was an outstanding experience. Their creativity and execution exceeded our expectations."
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
      text:
        "Professional team with excellent communication. Highly recommended."
    },
    {
      id: 4,
      name: "Sophia Lee",
      role: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      text:
        "The quality of work and attention to detail were amazing."
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
      text:
        "Elementum transformed our online presence and increased our customer engagement."
    },
    {
      id: 6,
      name: "Sarah Johnson",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
      text:
        "Amazing designers and developers. We'll definitely work together again."
    }
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        <h2 className="section-title centered">
          What our customer says About Us
        </h2>

        <div className="testimonial-card">

          <div className="testimonial-quote">"</div>

          <p className="testimonial-text">
            {testimonials[active].text}
          </p>

          <div className="testimonial-author">

            <img
              src={testimonials[active].image}
              alt={testimonials[active].name}
              className="author-img"
            />

            <div className="author-info">
              <div className="author-name">
                {testimonials[active].name}
              </div>

              <div className="author-role">
                {testimonials[active].role}
              </div>
            </div>

          </div>

        </div>

        <div className="testimonial-avatars">

          {testimonials.map((item, index) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
              className={`avatar ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;