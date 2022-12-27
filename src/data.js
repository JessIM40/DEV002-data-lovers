
const sortData = (data, sortBy, sortOrder) => {
    //Condicion 1:
    return sortBy == "type" ?
        //Entonces haz esto:
        sortOrder == "upward" ?
            data.sort(function (a, b) {
                let x = a.type[0].toLowerCase();
                // console.log(x);
                let y = b.type[0].toLowerCase();
                // console.log(y);
                if (x > y) {
                    // console.log(1)
                    return 1;
                }
                if (x < y) {
                    // console.log(-1)
                    return -1;
                }
                else {
                    return 0;
                }
            })

            //return el data.sort
            : /*De lo contrario haz esto: */
            data.sort(function (a, b) {
                let x = a.type[0].toLowerCase();
                let y = b.type[0].toLowerCase();
                if (x > y) return -1;
                if (x < y) return 1;
                return 0;
            })
        :
        sortBy == "number" ?
            data.sort(function (a, b) {
                if (a.num > b.num) return sortOrder === "upward" ? 1 : -1
                if (a.num < b.num) return sortOrder === "upward" ? -1 : 1
                return 0;
            })
            :
            data
}

function configureFiltered(e, loadData) {
    if (e.target.id == "type-select") {
        let filteredData = loadData.filter(item => item.type[0] == e.target.value); // filtrar por item.type[1]??? 
        return filteredData;
    }
}

export { sortData, configureFiltered };