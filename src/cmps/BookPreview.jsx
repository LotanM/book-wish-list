import { Component } from 'react'
import { eventBusService } from '../services/eventBusService.js'

export class BookPreview extends Component {

    state = {
        idx: 0,
    }

    async componentDidMount() {
    }

    nextBook = () => {
        var idx = this.state.idx;
        if (idx >= this.props.books.length - 1) return
        this.setState({ idx: idx + 1 })
    }

    prevBook = () => {
        var idx = this.state.idx;
        if (idx <= 0) return
        this.setState({ idx: this.state.idx - 1 })
    }

    onAddToWishList = (book, isChecked) => {
        console.log('isChecked', isChecked)
        eventBusService.emit('onAddToWishList', { book, isChecked })
        console.log('hi')
    }

    render() {
        const { idx } = this.state
        const { books } = this.props
        // if (!books) return <div>loading...</div>
        return (
            <div key={idx} className="book-preview">
                <button onClick={this.prevBook}> ↫ </button>
                <div className="book-container">
                    <div className="header">
                        <h2>
                            {books[idx].title}
                        </h2>
                        <input type="checkbox" onChange={(ev) => this.onAddToWishList(books[idx], ev.target.checked)} />
                    </div>
                    <div className="main">
                        <h2>
                            {books[idx].author}
                        </h2>
                        {books[idx].description}
                    </div>
                    <div className="footer">
                        <p>
                            Rating:  {books[idx].rating}
                        </p>
                        <p>
                            Price:  {books[idx].price}
                        </p>
                    </div>
                </div>

                <button onClick={this.nextBook}> ↬ </button>

            </div>

        )
    }
}