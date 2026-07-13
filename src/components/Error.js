const Error = () => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "24px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        backgroundColor: "#c6f8c6",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        color: "#2f4f2f",
      }}
    >
      <h1>Oops!</h1>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default Error;
