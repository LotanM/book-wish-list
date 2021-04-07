
import {BookService} from '../services/book.service.js'
import { Component } from 'react';
import {ItemPreview} from './ItemPreview'
export class WishList extends Component {
    state={
        wishlist: null
    }
    async componentDidMount() {
        this.loadWishList()
    }

    async loadWishList() {
        const wishlist = await BookService.getWishList()
        this.setState({ wishlist })
    }
    removeItem= async(itemId)=>{
        const idx = this.state.wishlist.findIndex(item=>item._id===itemId)
        console.log('idx', idx)
        await BookService.removeItem(idx)
        this.loadWishList()
    }

    addToWishList(){
        ///////////?????? Awaiting Preview to be functional
    }
    render(){
        return(
            <div className="wish-list">
                {
                this.state.wishlist && this.state.wishlist.map(item => <ItemPreview key={item._id} item={item} removeItem={this.removeItem} />)
                }
            </div>
        )
    }
}