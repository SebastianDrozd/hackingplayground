const grabLineData = (filteredMachines) => {
    return new Promise((resolve, reject) => {
        //set up array of 7 days
        let data = new Array(7);
        //create map of date and count
        const map = new Map();
        //loop through filtered machines
        for (const item of filteredMachines) {
           
            const date1 = new Date(item.datecompleted)//.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
          
            const date = date1.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }); 
            console.log("this is dateddd",date)
            console.log("this is date1",date1)
            const count = map.get(date) || 0;
            map.set(date, count + 1);
        }
        for(let i = 0;i < data.length;i++){
            const subDate = new Date();
            subDate.setDate(subDate.getDate() - 6);
            subDate.setDate(subDate.getDate() + i);
            let count = 0;
            //console.log("this is subdate",subDate.toLocaleDateString(  'en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }))
            if(map.has(subDate.toLocaleDateString(  'en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }))){
              console.log("got trisggerd")

                count = map.get(subDate.toLocaleDateString(  'en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }))
            }
              data[i] ={
                name: (subDate.getMonth() +1 )+ "/" + subDate.getDate(),
                completed: count,
                pv: 2400,
                amt: 100,
              }
          }
          resolve(data)
    })
}

const makeMap = (filteredMachines) => {
    return new Promise((resolve, reject) => {
        const map = new Map();
        for (const item of filteredMachines) {
            const date = new Date(item.datecompleted).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
            const count = map.get(date) || 0;
            map.set(date, count + 1);
        }
        resolve(map)
    })
}
module.exports = {grabLineData}