const fs = require('fs');

fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}',(err) => {
    if(err) console.log(err);
})

fs.readFile('./employees.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File content:', data);
    }
  });

  fs.writeFile('employees.json','{"name": "Employee 2 Name", "salary": 2050}',(err) => {
    if(err) console.log(err);
})


//! burayo yorum satırına alırsanız tekrardan dosya oluşturulur
fs.unlink('./employees.json',(err)=>{
    if(err) console.log(err);
})
