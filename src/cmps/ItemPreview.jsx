
export function ItemPreview({ item, removeItem }) {
  return (
      <div className="item-preview">
        <p>{item.title}</p>
        <button onClick={()=>removeItem(item._id)}>X</button>
      </div>
  )
}
