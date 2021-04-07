import { Component } from 'react'
import { eventBusService } from '../services/eventBusService.js'

export class BookPreview extends Component {

    state = {
    }

    async componentDidMount() {
    }



    onAddToWishList = (book, isChecked) => {
        console.log('isChecked', isChecked)
        eventBusService.emit('onAddToWishList', {book, isChecked})
        console.log('hi')
    }

    render() {
        return (
            <div className="book-preview">
                {
                    this.props.books.map((book, idx) =>
                        <div key={idx}>

                            {book.title}

                            <input type="checkbox" onChange={(ev) => this.onAddToWishList(book, ev.target.checked)}/>

                        </div>)
                }
            </div>

        )
    }
}