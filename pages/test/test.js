const data = [
    {
      _id: {
        date: '13/01/2023',
        organizationId: '6390072c9c5e904e2417e976'
      },
      totalBlockUsed: 4
    },
    {
      _id: {
        date: '13/01/2023',
        organizationId: '5f28c5217bd7ea79c33fd798'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '13/01/2023',
        organizationId: '5dd55bb3007458fe66d0c0c6'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '12/01/2023',
        organizationId: '6390072c9c5e904e2417e976'
      },
      totalBlockUsed: 3
    },
    {
      _id: {
        date: '12/01/2023',
        organizationId: '63462696dcccbe8324aa2e99'
      },
      totalBlockUsed: 520
    },
    {
      _id: {
        date: '11/01/2023',
        organizationId: '6390072c9c5e904e2417e976'
      },
      totalBlockUsed: 116
    },
    {
      _id: {
        date: '11/01/2023',
        organizationId: '638565945d79a47746891219'
      },
      totalBlockUsed: 40
    },
    {
      _id: {
        date: '11/01/2023',
        organizationId: '5f7d37f11898610f7ead4037'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '11/01/2023',
        organizationId: '5f28c5217bd7ea79c33fd798'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '10/01/2023',
        organizationId: '638565945d79a47746891219'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '10/01/2023',
        organizationId: '5f7d37f11898610f7ead4037'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '10/01/2023',
        organizationId: '5f28c5217bd7ea79c33fd798'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '09/01/2023',
        organizationId: '6390072c9c5e904e2417e976'
      },
      totalBlockUsed: 6
    },
    {
      _id: {
        date: '09/01/2023',
        organizationId: '638565945d79a47746891219'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '09/01/2023',
        organizationId: '5f7d37f11898610f7ead4037'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '09/01/2023',
        organizationId: '5f28c5217bd7ea79c33fd798'
      },
      totalBlockUsed: 0
    },
    {
      _id: {
        date: '09/01/2023',
        organizationId: '5dd55bb3007458fe66d0c0c6'
      },
      totalBlockUsed: 0
    }
  ];
  
  const dataObject = {}
  let arrResult = []
  data.forEach(e => {
    if(dataObject[e._id.date]){
      dataObject[e._id.date].totalBlockUsed += e.totalBlockUsed
    }
    else{
      dataObject[e._id.date] = {date : e._id.date , totalBlockUsed : e.totalBlockUsed}
    }
  })
  for (const key in dataObject) {
    arrResult.push(dataObject[key])
  }
  console.log(arrResult);
//   const date = ['13/01/2023', '12/01/2023', '11/01/2023', '10/01/2023', '09/01/2023']
//   const data2 = [];

//   const data3 = [4, 4, 3, 4, 5, 3, 2];

//   ['13/01/2023', '12/01/2023', '11/01/2023', '10/01/2023', '09/01/2023']

// let arr = []



// const result = data.reduce(function(obj,v){
//     obj[v._id.date]=(obj[v._id.date]||0)+1;
//     return obj;
// },{})

// const result1 = date.reduce(function(obj,v){
//     obj[v]=(obj[v]||0)+1;
//     return obj;
// },{})
// console.log(result1);

// for (const key in result) {
//     console.log(result[key]);
// }