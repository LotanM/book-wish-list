
import {BookService} from '../services/book.service.js'
import { Component } from 'react';
import {WishListPreview} from './WishListPreview'
import { eventBusService } from '../services/eventBusService.js'
export class WishList extends Component {
    state={
        wishlist: null
    }
    async componentDidMount() {
        this.loadWishList()
        eventBusService.on('onAddToWishList', ({book, isChecked}) => {
            this.onAddToWishList(book, isChecked)
        })
    }

    async loadWishList() {
        const wishlist = await BookService.getWishList()
        this.setState({ wishlist })
    }
    removeBook= async(bookId)=>{
        const idx = this.state.wishlist.findIndex(book=>book._id===bookId)
        console.log('idx', idx)
        await BookService.removeBook(idx)
        this.loadWishList()
    }

    onAddToWishList= async(book, isChecked)=>{
        console.log('isChecked', isChecked)
        if(isChecked) await BookService.addToWishList(book)
        else {
            const idx = this.state.wishlist.findIndex(b=>b._id===book._id)
            await BookService.removeBook(idx)
        }
        this.loadWishList()
    }
    render(){
        return(
            <div className="wish-list">
                {
                this.state.wishlist && this.state.wishlist.map(book => <WishListPreview key={book._id} book={book} removeBook={this.removeBook} />)
                }
            </div>
        )
    }
}