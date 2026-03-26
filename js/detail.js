const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (artworks[id]) {
  const art = artworks[id];
  document.querySelector(".art-title").textContent = art.title;
  document.querySelector(".art-artist").textContent = "作者：" + art.artist;
  document.querySelector(".art-description").textContent = art.description;
  document.querySelector(".art-image").src =  art.image;
  document.querySelector(".art-image").alt = art.title;
} else {
  document.querySelector(".container").innerHTML = "<p>作品が見つかりませんでした。</p>";
}