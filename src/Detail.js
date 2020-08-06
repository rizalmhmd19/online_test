import React, { useEffect, useState } from 'react';
import { Modal, Button, Col, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Detail(props) {
    const {
        id_user
    } = props

    const [modal, setModal] = useState(false);
    const [detail, setDetail] = useState({});
    const toggleAndData = () => {
        fetch("https://reqres.in/api/users/" + id_user)
            .then(res => {
                if (res.status === 200) return res.json();
            })
            .then(resJson => {
                setDetail(resJson.data)
                setModal(!modal);
            });
    }
    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <button className="btn btn-warning" onClick={toggleAndData} title="Detail">
                Detail
            </button>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
                <ModalHeader toggle={toggle}>Detail Pengguna</ModalHeader>
                <ModalBody>
                    <div className="text-center">
                        <img className="mb-3" src={detail.avatar}></img>
                        <h6>{detail.first_name + " " + detail.last_name}</h6>
                        <h6>{detail.email}</h6>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}