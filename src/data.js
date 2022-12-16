import { showData } from "./main.js";

export const sortData = (data, sortBy, sortOrder) => {
    sortBy == "type" ? 
        sortOrder == "upward" ? (
            showData(data.sort(function(a, b) {
                let x = a.type[0].toLowerCase();
                let y = b.type[0].toLowerCase();
                if(x > y) return 1;
                if(x < y) return -1;
                return 0;
            }))
    ) : (
            showData(data.sort(function(a, b) {
                let x = a.type[0].toLowerCase();
                let y = b.type[0].toLowerCase();
                if(x > y) return -1;
                if(x < y) return 1;
                return 0;
            }))
    ) : sortBy == "number" ? 
            sortOrder == "upward" ? (
                showData(data.sort(function(a, b) {
                    if(a.num > b.num) return 1;
                    if(a.num < b.num) return -1;
                    return 0;
                }))
    ) : (
                showData(data.sort(function(a, b) {
                    if(a.num > b.num) return -1;
                    if(a.num < b.num) return 1;
                    return 0;
                }))

    ): console.log("no requiere orden");
}



// export const filterData = (data, condition) => {
//     data.filter(item => item.type[0] == condition); // filtrar por item.type[1]??? 
// //   return filteredData;
// };

// const computeStats = (data) => {
//   return 'OMG';
// };

// export { sortData };