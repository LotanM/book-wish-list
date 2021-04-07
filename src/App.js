import { Component } from 'react';
import { BookPreview } from './cmps/BookPreview';
import { BookService } from './services/book.service';
// import '../src/assets/styles.scss'
export class App extends Component {
  state = {
    books: null
  }

  async componentDidMount() {
    let books = await BookService.query()
    this.setState({ books })
  }

  render() {
    const {books} = this.state
    if(!books) return <div>loading...</div>
    return (
      <div className="App">
        <BookPreview books={books}/>
      </div>
    )
  }
}

