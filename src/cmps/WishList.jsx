
import { BookService } from '../services/book.service.js'
import { Component } from 'react';
import { ItemPreview } from './ItemPreview'
export class WishList extends Component {
    state = {
        wishlist: null
    }
    async componentDidMount() {
        this.loadWishList()
    }

    async componentDidUpdate(prevProps) {
        if (!(this.props.sortBy == prevProps.sortBy)) {
            this.loadWishList();
        }
    }

    async loadWishList() {
        console.log(this.props.sortBy);
        const wishlist = await BookService.getWishList(this.props.sortBy)
        this.setState({ wishlist })
    }
    removeItem = async (itemId) => {
        const idx = this.state.wishlist.findIndex(item => item._id === itemId)
        console.log('idx', idx)
        await BookService.removeItem(idx)
        this.loadWishList()
    }

    addToWishList() {
        ///////////?????? Awaiting Preview to be functional
    }
    render() {
        return (
            <div className="wish-list">
                {
                    this.state.wishlist && this.state.wishlist.map(item => <ItemPreview key={item._id} item={item} removeItem={this.removeItem} />)
                }
            </div>
        )
    }
}