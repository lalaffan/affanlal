import { index } from "./index.astro.0.mts";

export function displayImages() {
let i;
const images = document.getElementsByClassName("image");
for (i = 0; i < images.length; i++) {
images[i].style.display = "none";
}
index++;
if (index > images.length) {
index = 1;
}
images[index - 1].style.display = "block";
setTimeout(displayImages, 2000);
}
