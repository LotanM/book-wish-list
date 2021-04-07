import { Component } from 'react';
import { BookService } from './services/book.service'

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

      </div>
    )
  }
}

