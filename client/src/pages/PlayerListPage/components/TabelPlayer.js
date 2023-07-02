import React, { useState } from "react";
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function TabelPlayer({ playerData }) {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handleDetailClick = (playerData) => {
        setSelectedPlayer(playerData);
    };

    const handleCloseModal = () => {
        setSelectedPlayer(null);
    };

    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player username</th>
                        <th>Player email</th>
                        <th>Player experience</th>
                        <th>Player level</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.data.map(function (data) {
                        return (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.experience}</td>
                                <td>{data.lvl}</td>
                                <td>
                                    <Button outline color="primary" onClick={() => handleDetailClick(data)}>Detail</Button>{' '}
                                </td>
                                <td>
                                    <Button outline color="success" onClick={() => handleDetailClick(data)}>Update</Button>{' '}
                                </td>
                                <td>
                                    <Button outline color="danger">Delete</Button>{' '}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <Modal isOpen={selectedPlayer !== null} toggle={handleCloseModal}>
                <ModalHeader toggle={handleCloseModal}>Player Details</ModalHeader>
                {selectedPlayer && (
                    <ModalBody>
                        <p>Id: {selectedPlayer.id}</p>
                        <p>Username: {selectedPlayer.username}</p>
                        <p>Email: {selectedPlayer.email}</p>
                        <p>Experience: {selectedPlayer.experience}</p>
                        <p>Level: {selectedPlayer.lvl}</p>
                    </ModalBody>
                )}
                <ModalFooter>
                    <Button color="secondary" onClick={handleCloseModal}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default TabelPlayer;