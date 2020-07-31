import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { listarUsuarios } from '../redux/actions/index';

class UsuariosListado extends Component {
  componentDidMount = () => {
    this.props.listarUsuarios();
  };

  getUsersListener = () => {
    this.props.listarUsuarios();
  };

  pintarUsuarios = () => {
    return this.props.users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <Button variant='primary' onClick={this.getUsersListener}>
          Get Users
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.pintarUsuarios()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.list,
  };
};
export default connect(mapStateToProps, { listarUsuarios })(UsuariosListado);
