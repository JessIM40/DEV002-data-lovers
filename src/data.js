const sortData = (data, sortBy, sortOrder) => {
    return sortBy == "type" ?
        sortOrder == "upward" ?
            data.sort(function (a, b) {
                let x = a.type[0].toLowerCase();
                let y = b.type[0].toLowerCase();
                if (x > y) return 1;
                if (x < y) return -1;
                return 0;
            })
            :
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

// function filterData(e, loadData) {
//     if (e.target.id == "type-select") {
//         let filteredData = loadData.filter(item => item.type[0] == e.target.value);
//         return filteredData;
//     }
// }

function filterData(filteredBy, loadData) {
    let filteredData = loadData.filter(item => item.type[0] == filteredBy);
    return filteredData;
}

export { sortData, filterData };