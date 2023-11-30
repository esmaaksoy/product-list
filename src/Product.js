const Product = ({ products }) => {
  return products.map((item) => (
    <div className="card">
     
        <img key={item.id} src={item.image} alt="" />
    
      <p key={item.id}>Price:{item.price}</p>
      <span key={item.id}>{item.title}</span>
    </div>
  ));
};

export default Product;
