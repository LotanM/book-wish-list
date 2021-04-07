import { Component } from 'react'

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

    addToWishList = ({ book }) => {
        // console.log(target);
        // this.setState({})
    }

    render() {
        const { idx } = this.state
        // if (!books) return <div>loading...</div>
        return (
            <div key={idx} className="book-preview">
                {this.props.books[idx].title}

                <input type="checkbox" onChange={() => this.addToWishList(this.props.books[idx])} />

                <button onClick={this.nextBook}> next </button>
                <button onClick={this.prevBook}> back </button>

            </div>

        )
    }
}