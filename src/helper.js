// export const filter = (query) => {
//   return (elem) => {
//     let rez = false;
//     for (const key in elem) {
//       if (elem.hasOwnProperty(key)) {
//         const nestedObj = elem[key];
//         console.log('---- внешний объект')
        
//         for (const key in nestedObj) {
//           if (nestedObj.hasOwnProperty(key)) {
//             const string = nestedObj[key];
//             console.log(key);

//             if (string.toLowerCase().trim().includes(query)) {
//               rez = true
//             } else {
//               rez = false;
//             }

//           }
//         }
//       }
//     }
//     console.log(rez)
//     return rez;
//   }
// }

// const test = [{
//   general: {
//     firstName: "Liana",
//     lastName: "Crooks",
//     avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
//   },
//   job: {
//     company: "Ledner, Johnson and Predovic",
//     title: "Investor Functionality Coordinator"
//   },
//   contact: {
//     email: "Gerry_Hackett77@gmail.com",
//     phone: "(895) 984-0132"
//   },
//   address: {
//     street: "1520 Zemlak Cove",
//     city: "New Devon",
//     zipCode: "42586-7898",
//     country: "Guinea-Bissau"
//   }
// }]

// test.filter(filter("Liana"))

export const filter = (query) => {
  return (elem) => {
    let rez = false;
    
    const {general, job, contact, address} = elem

    // const objToArray = (obj) => {
    //   let arr = [];
    //   for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //       const element = Object.values(obj[key]);

    //       arr = arr.concat(element)
    //     }
    //   }
    //   return arr
    // }

    // rez = objToArray(elem).reduce((accumulator, currentValue) => {
    //   return accumulator || currentValue.includes(query);
    // }, false);

    // rez = checkObj(general, query) ||
    //       checkObj(job, query) ||
    //       checkObj(contact, query) ||
    //       checkObj(address, query)

    rez = general.firstName.toLowerCase().includes(query) ||
    general.lastName.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.title.toLowerCase().includes(query) ||
    contact.email.toLowerCase().includes(query) ||
    contact.phone.toLowerCase().includes(query) ||
    address.street.toLowerCase().includes(query) ||
    address.city.toLowerCase().includes(query) ||
    address.zipCode.toLowerCase().includes(query) ||
    address.country.toLowerCase().includes(query) ||

    console.log(rez)
    return rez;
  }
}