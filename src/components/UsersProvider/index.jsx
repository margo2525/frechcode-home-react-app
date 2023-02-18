import React, { Component } from 'react';

class UsersProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch('/data/users.json')
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .catch(err => this.setState({ error: err }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  }

  render() {
    const { users, isFetching, error } = this.state;
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {error && <div>ERROR</div>}
        <ul>
          {users.map(u => (
            <li key={u.id}>
              <img src={u.src} alt={u.firstName} />
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default UsersProvider;