const Header = ({categories}) => {
  return (
    <div className="header">
      <h1>Product List</h1>
      {categories.map(item=>{
        return <a><span key={item.id} className="button">{item.toUpperCase()}</span><i></i></a>
      })}
    </div>
  )
}

export default Header
