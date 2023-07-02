import React, { useState } from "react";
import { Card, Button, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

//components
import Filter from "./components/Filter";
import TabelPlayer from "./components/TabelPlayer";
import { toggle, handleChange, handleFilter, handleFilterNumber, handleChangeNumber } from "./general-function"

const contohData = [
    {
        id: 1,
        username: 'PussySlayer613',
        email: 'pussy.slay3r@gmail.com',
        password: '$2b$10$D1Ok/SaQ6VeKKFVpXIZb4ek3g7M8F0bPi8FHj8o1mgsomh1cDm4cO',
        experience: 600000,
        lvl: 600
    },
    {
        id: 2,
        username: 'HardcoreLevellingWarrior',
        email: 'hclw@gmail.com',
        password: '$2b$10$T5.1q8bkz3LD0MCCb9ud5uVupwFPaAGc/1.duVneV/.NAqbSX8TRS',
        experience: 600000,
        lvl: 666
    }
]

function PlayerListPage() {
    //show/hide add modal
    const [showModal, setShowModal] = useState(false);

    //show inserted Data
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    // inserted Data
    const [formData, setformData] = useState({username:"", email:"", password:"", experience: 0})

    // data
    const [playerData, setPlayerData] = useState({ data: [...contohData] })

    // filter text
    const [filterName, setFilterName] = useState("")

    // filter number
    const [filterNumber, setFilterNumber] = useState("")

    const handleAddFormChange = (event) => {
        setformData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Perform the logic to add the player with addFormData
        const newPlayer = { id: contohData.length + 1, ...formData };
        toggle(showModal, setShowModal);
        setformData({username:"", email:"", password:"", experience: 0});
        setSelectedPlayer({...newPlayer});
    };

    const handleCloseModal = () => {
        setSelectedPlayer(null);
    };

    return (
        <div>
            <Card className='m-3 p-3' outline color="secondary">
                <CardTitle tag="h3">Player List</CardTitle>
                <hr></hr>
                <Filter
                    filterName={filterName}
                    filterNumber={filterNumber}
                    handleChange={(event) => handleChange(event, setFilterName)}
                    handleChangeNumber={(event) => handleChangeNumber(event, setFilterNumber)}
                    handleFilter={() => handleFilter(playerData, filterName, setPlayerData, contohData)}
                    handleFilterNumber={() => handleFilterNumber(playerData, filterNumber, setPlayerData, contohData)}
                />
            </Card>
            <Card className='m-3 p-3' outline color="secondary">
                <TabelPlayer playerData={playerData} />
                <Button type='button' onClick={() => toggle(showModal, setShowModal)}>Add Article</Button>
                <Modal isOpen={showModal} toggle={() => toggle(showModal, setShowModal)}>
                <ModalHeader toggle={() => toggle(showModal, setShowModal)}>Create New Player</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleAddFormSubmit}>
                        <FormGroup>
                            <Label for="username">
                                Username
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                placeholder="username"
                                type="text"
                                value={formData.username}
                                onChange={handleAddFormChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="email"
                                type="email"
                                value={formData.email}
                                onChange={handleAddFormChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                                value={formData.password}
                                onChange={handleAddFormChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="experience">
                                Experience
                            </Label>
                            <Input
                                id="experience"
                                name="experience"
                                placeholder="experience"
                                type="number"
                                value={formData.experience}
                                onChange={handleAddFormChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button type="submit" color="primary" onClick={handleAddFormSubmit}>
                        Submit
                    </Button>{' '}
                    <Button color="secondary" onClick={() => toggle(showModal, setShowModal)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={selectedPlayer !== null} toggle={handleCloseModal}>
                <ModalHeader toggle={handleCloseModal}>Player Details</ModalHeader>
                {selectedPlayer && (
                    <ModalBody>
                        <p>Id: {selectedPlayer.id}</p>
                        <p>Username: {selectedPlayer.username}</p>
                        <p>Email: {selectedPlayer.email}</p>
                        <p>Password: {selectedPlayer.password}</p>
                        <p>Experience: {selectedPlayer.experience}</p>
                    </ModalBody>
                )}
                <ModalFooter>
                    <Button color="secondary" onClick={handleCloseModal}>Close</Button>
                </ModalFooter>
            </Modal>
            </Card>
            
        </div>
    )
}

export default PlayerListPage;