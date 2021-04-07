import { Component } from 'react';
import { BookService } from './services/book.service'
import { Sorting } from './cmps/Sorting'

export class App extends Component {
  state = {
    books: null,
    sortBy: ''
  }

  async componentDidMount() {
    this.loadBooks();
  }

  async loadBooks() {
    const books = await BookService.query(this.state.sortBy)
    this.setState({ books })
  }

  onChangeSort = (filterBy) => {
    this.setState({ filterBy }, console.log(this.state.filterBy))// ,this.loadContacts)
    this.loadBooks();
  }

  render() {
    return (
      <div className="App">
        <Sorting onChangeSort={this.onChangeSort} />
      </div>
    )
  }
}

