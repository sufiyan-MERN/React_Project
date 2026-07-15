const Cart = () => {
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
      <h1>Your Cart</h1>
      <p>Your selected items will appear here.</p>

      <div
        className="cart-items"
        style={{
          marginTop: "16px",
          padding: "16px",
          backgroundColor: "#e7fbe7",
          borderRadius: "8px",
        }}
      >
        <div className="cart-items-list">
          <h4>Item 1</h4>
        </div>
        <div className="cart-items-list">
          <h4>Item 2</h4>
        </div>
        <div className="cart-items-list">
          <h4>Item 3</h4>
        </div>
        <div className="cart-items-list">
          <h4>Item 4</h4>
        </div>
        <div className="cart-items-list">
          <h4>Item 5</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
