const Contact = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        backgroundColor: "#c6f8c6 ",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        color: "#2f4f2f",
      }}
    >
      <h1>Contact Us</h1>
      <p>We would love to hear from you. Reach out anytime!</p>

      <h2>Get in Touch</h2>
      <p>
        <strong>Email:</strong> sufiyantdc@gmail.com
      </p>
      <p>
        <strong>Phone:</strong> +91 98765 43210
      </p>
      <p>
        <strong>Address:</strong> moghalpura , charminar
      </p>
      <p>
        {" "}
        <strong> Pin Code:</strong> 500001
      </p>
    </div>
  );
};

export default Contact;
