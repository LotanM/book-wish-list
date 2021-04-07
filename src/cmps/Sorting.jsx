import { Component } from 'react';
// import '../assets/styles/styles.scss'

export class Sorting extends Component {

    state = {
        sortBy: { by: '', dir: null }
    }

    onSetSort = ({ target }) => {
        const by = { by: target.name, dir: null };
        this.setState({ sortBy: by }, () =>
            this.props.onChangeSort({ ...this.state }))
    }


    render() {
        const { sortBy } = this.state
        return (
            <section className="sorting">
                <button name="title" className={(sortBy.by === 'title') ? 'chosen' : ''} onClick={this.onSetSort}>Title</button>
                <button name="price" className={(sortBy.by === 'price') ? 'chosen' : ''} onClick={this.onSetSort}>Price</button>
                <button name="rating" className={(sortBy.by === 'rating') ? 'chosen' : ''} onClick={this.onSetSort}>Rating</button>
            </section>
        )
    }
}

