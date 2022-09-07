// Create a Constructor for creating users or employee's data ( id, employee name, father name, email, address, designation, experience, salary)
// Creating a constructor and passing arguments
function Data (
    id,
    employeeName,
    fatherName,
    email,
    address,
    designation,
    experience,
    salary
) {
    this.id = id;
    this.employeeName = employeeName;
    this.fatherName = fatherName;
    this.email = email;
    this.address = address;
    this.designation = designation;
    this.experience = experience;
    this.salary = salary;
}

let data1 = new Data(
    "5001",
    "Micheal",
    "Chorps",
    "micheal123@gmail.com",
    "Barmy st USA",
    "CEO",
    "10 years",
    "2500$"
  );
  let data2 = new Data(
    "5002",
    "Stewart",
    "Thomas",
    "stewart123@gmail.com",
    "Rolph st USA",
    "Senior Developer",
    "7 years",
    "1150$"
  );
  let data3 = new Data(
    "5003",
    "Hazel",
    "captilleo",
    "hazel123@gmail.com",
    "anderson USA",
    "Designer",
    "4 years",
    "550$"
  );
  let data4 = new Data(
    "5004",
    "Karen",
    "Freeburn",
    "karen123@gmail.com",
    "Freeman st USA",
    "Supervisor",
    "2.5 years",
    "350$"
  );
  let data5 = new Data(
    "5005",
    "Danny",
    "Morrison",
    "danny123@gmail.com",
    "Conbot st USA",
    "Manager",
    "4.5 years",
    "500$"
  );
  let allData = [data1, data2, data3, data4 , data5] ;

  var table1 = document.getElementById("table1");

  for (var i = 0; i < allData.length; i++) {
    var tr = document.createElement("tr");
    for (var a in allData[i]) {
        var td = document.createElement("td");
        var text = document.createTextNode(allData[i]);
        td.appendChild(text);
        tr.appendChild(td);
        table1.appendChild(tr);
        console.log(tr);
    }
  }





  function Shapes(width, height, color, border, borderRadius , transform) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.border = border;
    this.borderRadius = borderRadius;
    this.transform = transform
  }

  // Declaring Variables for Shapes
  let rectangle = new Shapes("300px", "200px", "orangered", "5px solid black");
  let circle = new Shapes("200px", "200px", "magenta", "5px solid black", "50%");
  let square = new Shapes("200px", "200px", "blue" , "5px solid black");
  let parallelogram = new Shapes("250px" , "200px" , "chartreuse" , "5px solid black" , undefined ,"skew(20deg)" )
  
  // Targeting Element
  let box = document.getElementById("box");
  
  // Creating Shapes (Rectangle)
  let rectangleBox = document.createElement("div");
  rectangleBox.style.width = rectangle.width;
  rectangleBox.style.height = rectangle.height;
  rectangleBox.style.backgroundColor = rectangle.color;
  rectangleBox.style.border = rectangle.border;
  box.appendChild(rectangleBox);
  
  //  (Circle)
  let circleBox = document.createElement("div");
  circleBox.style.width = circle.width;
  circleBox.style.height = circle.height;
  circleBox.style.backgroundColor = circle.color;
  circleBox.style.border = circle.border;
  circleBox.style.borderRadius = circle.borderRadius;
  box.appendChild(circleBox);
  
  // (Square)
  let squareBox = document.createElement("div");
  squareBox.style.width = square.width;
  squareBox.style.height = square.height;
  squareBox.style.backgroundColor = square.color;
  squareBox.style.border = square.border;
  box.appendChild(squareBox);
  
  // (Parallelogram)
  let parallelBox = document.createElement("div");
  parallelBox.style.width = parallelogram.width;
  parallelBox.style.height = parallelogram.height;
  parallelBox.style.backgroundColor = parallelogram.color;
  parallelBox.style.border = parallelogram.border;
  parallelBox.style.transform = parallelogram.transform;
  box.appendChild(parallelBox);
  

  // Creating Constructor For MENU
function Menu(itemName, price) {
    this.itemName = itemName;
    this.price = price;
  }
  
  // Declaring Variables For Menu
  let menu1 = new Menu("Burgers :", "250");
  let menu2 = new Menu("BBQ :", "500");
  let menu3 = new Menu("Premiums :", "750");
  let menu4 = new Menu("Sandwiches :", "300");
  let menu5 = new Menu("Rolls :", "150");
  let menu6 = new Menu("Fast Food :", "500");
  let menu7 = new Menu("Desi Food :", "400");
  let menu8 = new Menu("IceCreams :", "200");
  let menu9 = new Menu("Beverages :", "100");
  let menu10 = new Menu("Sea Foods :", "1000");
  let allMenu = [
    menu1,
    menu2,
    menu3,
    menu4,
    menu5,
    menu6,
    menu7,
    menu8,
    menu9,
    menu10,
  ];
  
  // Targeting And Creating Elements
  let menu = document.getElementById("menu");
  let heading = document.createElement("h1");
  heading.style.textAlign = "center";
  heading.appendChild(document.createTextNode("MENU"));
  menu.appendChild(heading);
  
  // Printing Menu
  let ul = document.createElement("ul");
  let h4 = document.createElement("h4");
  h4.style.textTransform = "capitalize";
  for (let key in menu1) {
    h4.appendChild(document.createTextNode(" " + key));
    ul.appendChild(h4);
    menu.appendChild(ul);
  }
  for (let i = 0; i < allMenu.length; i++) {
    let li2 = document.createElement("li");
    for (let key in allMenu[i]) {
      li2.appendChild(document.createTextNode("  " + allMenu[i][key]));
      ul.appendChild(li2);
      menu.appendChild(ul);
    }
  }