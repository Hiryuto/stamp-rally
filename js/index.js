fetch("item.json?v=4")
  .then((response) => response.json())
  .then((items) => {
    Object.entries(items.stamp).forEach(([key, item]) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.style.display = "flex"; // Flexboxレイアウトを使用

      const itemImageElement = document.createElement("div");
      itemImageElement.classList.add("item-image");

      const imageElement = document.createElement("img");
      imageElement.src = item.image;
      imageElement.alt = "画像";
      imageElement.width = 200;

      itemImageElement.appendChild(imageElement);
      itemElement.appendChild(itemImageElement);

      const itemContentElement = document.createElement("div");
      itemContentElement.classList.add("item-content");
      itemContentElement.style.marginLeft = "10px"; // 画像との間にスペースを作成

      const titleElement = document.createElement("h1");
      titleElement.setAttribute("data-item-id", key);
      titleElement.textContent = item.name;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = item.description;

      itemContentElement.appendChild(titleElement);
      itemContentElement.appendChild(descriptionElement);
      itemElement.appendChild(itemContentElement);

      document.querySelector(".container").appendChild(itemElement);
    });
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("stamp-") && localStorage.getItem(key) === "true") {
        //data-item-idがkeyの要素を探し、色を変える
        //keyからstamp-を削除する
        const id = key.slice(6);
        document.querySelector(`[data-item-id="${id}"]`).style.color = "red";
      } else {
        return;
      }
    });
    document.querySelector(".loading").style.display = "none";
  });
