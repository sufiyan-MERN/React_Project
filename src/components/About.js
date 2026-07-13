const About = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        backgroundColor: "#c6f8c6",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        color: "#2f4f2f",
      }}
    >
      <h1>About Us</h1>
      <p>
        We are a food-loving team dedicated to bringing delicious meals to your
        doorstep with speed and care.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make every dining experience simple, tasty, and
        satisfying for our customers.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>Fresh and quality ingredients</li>
        <li>Fast delivery and friendly service</li>
        <li>Easy ordering experience</li>
      </ul>
    </div>
  );
};

export default About;
