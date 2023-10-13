const get_url = document.querySelector("#get_data");
const text_box = document.querySelector("#text-box");
const to_display = document.querySelector("#display_url");

const to_reload = document.querySelector("#reset_page");
get_url.onclick = () => {
  const to_short = text_box.value;
  console.log(to_short);
  var apiURL =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(to_short);
  // to_display.innerHTML = to_short;
  fetch(apiURL)
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      to_display.innerHTML = data;
    })
    .catch((error) => {
      to_display.innerHTML = "Error : Unable to shorten URL!";
    });
};

to_reload.onclick = () => {
  text_box.value = "";
  to_display.innerHTML = "";
};
