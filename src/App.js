import { Component } from 'react';
import { BookService } from './services/book.service'
import { Sorting } from './cmps/Sorting'
import { WishList } from './cmps/WishList'
import './assets/styles/styles.scss'

import { BookPreview } from './cmps/BookPreview';
// import '../src/assets/styles.scss'
export class App extends Component {
  state = {
    books: null,
    sortBy: {}
  }

  async componentDidMount() {
    this.loadBooks();
  }

  async loadBooks() {
    const books = await BookService.query(this.state.sortBy)
    this.setState({ books })
  }

  onChangeSort = ({ sortBy }) => {
    this.setState({ sortBy }, console.log(this.state.sortBy));
  }

  render() {
    const { books, sortBy } = this.state
    if (!books) return <div>loading...</div>
    return (
      <div className="App">
        <Sorting onChangeSort={this.onChangeSort} />
        <WishList sortBy={sortBy} />
        <BookPreview books={books} />
      </div>
    )
  }
}

