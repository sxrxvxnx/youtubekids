const videos = [
  {
    title: "Learn JavaScript in 10 Minutes",
    channel: "CodeMaster",
    thumbnail: "https://via.placeholder.com/300x180"
  },
  {
    title: "HTML & CSS Full Course",
    channel: "Web Dev",
    thumbnail: "https://via.placeholder.com/300x180"
  },
  {
    title: "Build YouTube Clone",
    channel: "Dev Studio",
    thumbnail: "https://via.placeholder.com/300x180"
  }
];

const container = document.getElementById("video-container");

function displayVideos(videoList) {
  container.innerHTML = "";
  videoList.forEach(video => {
    const card = document.createElement("div");
    card.classList.add("video-card");

    card.innerHTML = `
      <img src="${video.thumbnail}" />
      <div class="video-info">
        <div class="video-title">${video.title}</div>
        <div class="video-channel">${video.channel}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

function searchVideos() {
  const query = document.querySelector("input").value.toLowerCase();
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(query)
  );
  displayVideos(filtered);
}

// Load videos initially
displayVideos(videos);