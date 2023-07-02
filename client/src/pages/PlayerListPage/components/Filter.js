import React from "react";
import { Button, Label, Input } from "reactstrap";

// input bisa berdasarkan username atau email
function Filter({ handleChange, handleChangeNumber, filterName, filterNumber, handleFilter, handleFilterNumber }) {
    return (
        <div>
            <Label for="player-filter">
                Player Username or Email:
            </Label>
            <div className="d-flex justify-content-center">
                <Input
                    value={filterName}
                    onChange={handleChange}
                    type="text"
                    id="player-filter"
                    placeholder="Please input username or email here..."
                />
                <Button onClick={handleFilter} className="ml-3" outline color="success">Search</Button>
            </div>
            <Label for="player-filter-number">
                Player Experience or Level:
            </Label>
            <div className="d-flex justify-content-center">
                <Input
                    value={filterNumber}
                    onChange={handleChangeNumber}
                    type="number"
                    id="player-filter-number"
                    placeholder="Please input experience or level here..."
                />
                <Button onClick={handleFilterNumber} className="ml-3" outline color="success">Search</Button>
            </div>
        </div>
    )
}

export default Filter;