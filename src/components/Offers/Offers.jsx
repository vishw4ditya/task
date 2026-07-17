import "./Offers.css";

function Offers() {
  const offers = [
    {
      id: 1,
      tag: "Offer is available",
      title: "Collaborative & Partnership",
    },
    {
      id: 2,
      tag: "The largest US Air Force digital appointments",
      title: "We talk about our weight",
    },
    {
      id: 3,
      tag: "Quick-fix concept, social failure",
      title: "Piloting digital confidence",
    },
  ];

  return (
    <section className="offers" id="offers">
      <div className="container">
        <h2 className="section-title centered">
          What we can offer you!
        </h2>

        <div className="offers-list">
          {offers.map((offer) => (
            <div className="offer-item" key={offer.id}>
              <div className="offer-content">
                <span className="offer-tag">{offer.tag}</span>
                <h3>{offer.title}</h3>
              </div>

              <div className="arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;