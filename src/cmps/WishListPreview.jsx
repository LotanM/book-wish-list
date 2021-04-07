
export function WishListPreview({ book, removeBook }) {
  return (
      <div className="wish-list-preview">
        <p>{book.title}</p>
        <button onClick={()=>removeBook(book._id)}>X</button>
      </div>
  )
}
