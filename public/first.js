console.log("I am connected");

const userDiv = document.getElementById("div");
console.log(userDiv);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        userDiv.innerHTML = `
            <table class="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(user => `
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.address.city}</td>
                            <td>${user.email}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;

    })
    .catch(error => {
        console.log("Error:", error);
    });