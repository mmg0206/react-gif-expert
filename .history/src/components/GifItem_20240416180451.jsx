
const GifItem = ({id, title, url}) => {
  return (
    <div className="card-grid">
      {title} {id} {url}
    </div>
  )
}

export default GifItem
