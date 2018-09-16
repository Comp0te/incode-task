export const filter = (query) => {
  return (elem) => {
    let rez;
    for (const key in elem) {
      if (elem.hasOwnProperty(key)) {
        const nestedObj = elem[key];
        console.log('---- внешний объект')
        
        for (const key in nestedObj) {
          if (nestedObj.hasOwnProperty(key)) {
            const string = nestedObj[key];
            console.log(key);

            if (string.toLowerCase().trim().includes(query)) {
              rez = true
            } else {
              rez = false;
            }

          }
        }
      }
    }
    console.log(rez)
    return rez;
  }
}

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