fetch('http://localhost:3000/users')
    .then((response) => {
        console.log(response); // Logga hela responsen för att säkerställa att det fungerar
        return response.json(); // Översätt svaret till JSON
    })
    .then((users) => {
        console.log('Parsed users:', users); // Logga den parsade JSON-datan


        // Skapa en oordnad lista (<ul>)
        const ul = document.createElement('ul');
        // Tailwind-klasser för listans container
        ul.className = "max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden";


        // Iterera över varje användarobjekt i listan
        users.forEach((user) => {
            // Skapa en <li> för varje användare
            const li = document.createElement('li');
            li.className = "p-4 flex flex-col space-y-2 rounded-md text-black border border-gray-300"; // Tailwind-styling 

            // Använd if-satsen för att sätta bakgrundsfärg på <li>
            if (user.color) {
                li.style.backgroundColor = user.color; // Sätt färgen direkt på <li>
            }

            // Skapa en rubrik för fullständigt namn
            const nameHeader = document.createElement('h3');
            nameHeader.className = "text-lg font-semibold";
            nameHeader.textContent = `Namn: ${user.firstName} ${user.lastName}`;

            // Skapa en paragraf för användarnamn
            const usernameParagraph = document.createElement('p');
            usernameParagraph.className = "text-sm";
            usernameParagraph.textContent = `Användarnamn: ${user.username}`;

            // Lägg till de skapade elementen i <li>
            li.appendChild(nameHeader);
            li.appendChild(usernameParagraph);
            
            // Lägg till <li> i <ul>
            ul.appendChild(li); 
        });

        // Lägg till listan i DOM:en (body)
        document.body.appendChild(ul);
    })
    // Logga eventuella fel vid hämtning
    .catch((error) => {
        console.error('Error fetching users:', error);
    });