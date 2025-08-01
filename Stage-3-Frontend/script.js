
fetch('./data/profile.json')
.then(response=>{
    if(!response.ok){
        throw new Error("failed to load json")
    }
    return response.json()
})
.then(data => {
      document.getElementById("dev").textContent = data.name;
      document.getElementById("handle").textContent = `@${data.username}`;
      document.getElementById("text").textContent = data.bio;
      document.getElementById("following").textContent = `${data.following} Following`;
      document.getElementById("followers").textContent = `${data.followers} Followers`;
      document.getElementById("link").textContent = data.website;
      document.getElementById("link").href = data.website;
      document.getElementById("location").textContent = data.location;
      document.getElementById("avatar").src = data.avatar_url;
    })
    .catch(error => console.error("Error loading data:", error));