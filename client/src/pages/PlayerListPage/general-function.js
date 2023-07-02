// handle change
function handleChange(event, setFilterName) {
    setFilterName(event.target.value);
}

function handleChangeNumber(event, setFilterNumber) {
    setFilterNumber(event.target.value);
}

// handle filter (pencarian bisa berdasarkan satu huruf saja dan mencari antara username ataupun email)
// untuk pencarian berdasarkan experience atau level, angka harus sesuai
function handleFilter(playerData, filterName, setPlayerData, contohData) {
    const newList = playerData.data.filter(function (value) {
            const usernameData = value.username.toLowerCase().includes(filterName.toLowerCase())
            const emailData = value.email.toLowerCase().includes(filterName.toLowerCase())
            return usernameData || emailData;
    });

    if (filterName !== "") {
        setPlayerData({ data: newList });
    } else {
        setPlayerData({ data: [...contohData] });
    }
}

function handleFilterNumber(playerData, filterNumber, setPlayerData, contohData) {
    const newList = playerData.data.filter(function (value) {
            return value.lvl === parseInt(filterNumber) || value.experience === parseInt(filterNumber);
    });

    if (filterNumber !== "") {
        setPlayerData({ data: newList });
    } else {
        setPlayerData({ data: [...contohData] });
    }
}

//show/hide modal
function toggle(showModal, setShowModal) {
    setShowModal(!showModal)
}

export { toggle, handleFilter, handleFilterNumber, handleChange, handleChangeNumber}