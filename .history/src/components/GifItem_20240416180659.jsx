
const GifItem = ({id, title, url}) => {
  return (
    <div className="card">
      {title} {id} {url}
    </div>
  )
}

export default GifItem
