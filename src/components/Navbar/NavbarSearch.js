import React from 'react'


class NavbarSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(event) {
    this.props.searchKey(event.target.value);
    this.setState(() => {
      return {
        keyword: event.target.value
      };
    });
  }

  render() {
    return (
      <form>
        <div className='note-search'>
          <input 
            type='text' 
            placeholder='Cari catatan ...'
            value={this.state.keyword}
            onChange={this.onSearchChangeHandler}
        />
        </div>
      </form>
    )
  }
}

export default NavbarSearch;
