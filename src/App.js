import { Component } from 'react';
import { BookService } from './services/book.service'
import {WishList} from './cmps/WishList'
import './assets/styles/styles.scss'

export class App extends Component {
  state = {
    books: null
  }

  async componentDidMount() {
    let books = await BookService.query()
    this.setState({ books })
  }

  render() {
    return (
      <div className="App">
        <WishList />
      </div>
    )
  }
}

