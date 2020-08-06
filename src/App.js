import React from "react";
import "./styles.css";
import { Table, Col, Row } from 'reactstrap';
import Detail from './Detail';

export default class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    const urlFetch = fetch("https://reqres.in/api/users?page=2");
    urlFetch
      .then(res => {
        if (res.status === 200) return res.json();
      })
      .then(resJson => {
        this.setState(
          {
            data: resJson.data
          }
        );
      });
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="h3 mb-4 mt-4 text-gray-800 text-center">Daftar Pengguna</h1>
        <Row>
          <Col md="12">
            <Table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, i) =>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td><img src={item.avatar}></img></td>
                    <td>
                      <Detail id_user={item.id}></Detail>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
