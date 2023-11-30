const Header = ({categories}) => {
  return (
    <div className="header">
      <h1>Product List</h1>
      {categories.map(item=>{
        return <a className="button">{item.toUpperCase()}</a>
      })}
    </div>
  )
}

export default Header
