console.log("I am connected");

const userDiv = document.getElementById("div");
console.log(userDiv);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

        userDiv.innerHTML = `
            <table class="user-table">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(user => `
                        <tr>
                            <td>${user.userId}</td>
                            <td>${user.id}</td>
                            <td>${user.title}</td>
                            <td>${user.body}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;

    })
    .catch(error => {
        console.log("Error:", error);
    });