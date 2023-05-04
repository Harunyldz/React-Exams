import React, { Component } from 'react'

export class List extends Component {
    state = { filterText: '' }
    onChangeFilterText = (event) => {
        this.setState({ filterText: event.target.value })
    }
    render() {
        const filteredDatas = this.props.contacts.filter((item) => {
            return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1 ||
                item.phone.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
        })
        console.log('Props:::', this.props)
        return (
            <div>
                <input type='text' placeholder='Filter by Name or Phone' name='filter' id='filter' value={this.state.filterText} onChange={this.onChangeFilterText} />
                <ul>

                    {this.props.contacts && filteredDatas.map((contact, index) => {
                        return <li key={index}>
                            <span>{contact.name}</span>
                            <span>{contact.phone}</span>
                        </li>
                    })}
                </ul>

            </div>
        )
    }
}

export default List