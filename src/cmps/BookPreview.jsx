import { Component } from 'react'

export class BookPreview extends Component {

    state = {
    }

    async componentDidMount() {
    }



    addToWishList = ({ book }) => {
        // console.log(target);
        // this.setState({})
    }

    render() {
        return (
            <div className="book-preview">
                {
                    this.props.books.map((book, idx) =>
                        <div key={idx}>

                            {book.title}

                            <input type="checkbox" onChange={() => this.addToWishList(book)} />

                        </div>)
                }
            </div>

        )
    }
}