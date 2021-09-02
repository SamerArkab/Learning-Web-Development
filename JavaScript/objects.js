var person = {
  name: "Samr",
  id: 123456789,
  student: true,
  info: [ //An array of objects
    {
      name: "AB",
      major: "Software",
      year: 3
    },
    {
      name: "BA",
      major: "Biology",
      year: 2
    }
  ],
  printId: function(){
    document.write("<h3>" + this.id + "</h3>");
  }
};

document.write(person.name + "<br/>" + person.id + "<br/>Student? " + person.student);
person.printId();
document.write(person.info[1].major);
