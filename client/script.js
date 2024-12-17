fetch('http://localhost:3000/users') 
    .then((response) => {
        console.log(response); // Logga hela responsen för att säkerställa att det fungerar
        return response.json(); // Översätt svaret till JSON
    })
    .then((users) => {
        console.log('Parsed users:', users); // Logga den parsade JSON-datan

        // Skapa en oordnad lista (<ul>)
        const ul = document.createElement('ul');

        // Iterera över varje användarobjekt i listan
        users.forEach((user) => {
            const li = document.createElement('li');
            li.innerHTML = `${user.firstName} ${user.lastName} (${user.username})`; // Skriv ut användarens namn och användarnamn
            ul.appendChild(li); // Lägg till listpunkten i listan
        });

        // Lägg till listan i body
        document.body.appendChild(ul);
    })
    .catch((error) => {
        console.error('Error fetching users:', error); // Hantera eventuella fel
    });

    //.then((response) => response.json()) 
    //.then((users) => {
      //  console.log(users);
        //const ul = document.createElement('ul');
        //users.forEach((users) =>{
            //const li = document.createElement('li');
            //li.innerHTML = user.firstName;
            //ul.append(li);
        
        //});
        
        //document.body.append(ul);
        //hej
    
        
    //});