async function getProfile() {

    let username = document.getElementById("username").value;

    const url = `https://api.github.com/users/${username}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        
        document.getElementById("profile").innerHTML = `
        
        <div class="profile-card">
            
            <!-- LEFT -->
            <div class="left">
                <img src="${data.avatar_url}">
                <h5>${data.name || "No Name"}</h5>
                <p>@${data.login}</p>

                <p style="font-size:12px; color:gray;">
                    ${data.bio || "No bio available"}
                </p>

                <a href="${data.html_url}" target="_blank" class="btn btn-success btn-sm btn-custom">
                    View Profile
                </a>
            </div>

            <!-- RIGHT -->
            <div class="right">

                <div>
                    <h6>${data.followers}</h6>
                    <small>Followers</small>
                </div>

                <div>
                    <h6>${data.public_repos}</h6>
                    <small>Repositories</small>
                </div>

                <div>
                    <h6>${data.following}</h6>
                    <small>Following</small>
                </div>

                <div>
                    <small><b>Email:</b> ${data.email || "Not public"}</small>
                </div>

                <div>
                    <small><b>Location:</b> ${data.location || "Not available"}</small>
                </div>

                <div>
                    <small><b>Joined:</b> ${new Date(data.created_at).toLocaleDateString()}</small>
                </div>

            </div>

        </div>

        `;

    } catch (error) {
        console.log("Error:", error);
    }
}