const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "/img/Vincent van Gogh.png",
    post: "/img/post-image-one.png",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "img/avatar-courbet.png",
    post: "/img/post-image-two.png",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "img/Joseph Ducreux.png",
    post: "/img/post-image-three.png",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
}

function renderLayout() {
  posts.forEach(function (posts) {
    const header = document.querySelector(".header");
    const section = document.createElement("section");
    const likeIcon = document.createElement("img");
    likeIcon.setAttribute("class", "icon");
    likeIcon.setAttribute("src", "/img/like.png");

    const shareIcon = document.createElement("img");
    shareIcon.setAttribute("class", "icon");
    shareIcon.setAttribute("src", "/img/share.png");

    const commentIcon = document.createElement("img");
    setAttributes(commentIcon, { class: "icon", src: "/img/comment.png" });

    const container = document.createElement("div");
    container.classList = "container";

    const userAvatar = document.createElement("img");
    setAttributes(userAvatar, { class: "avatar", src: posts.avatar });

    const name = document.createElement("p");
    name.textContent = posts.name;
    setAttributes(name, { class: "name text-color text-sm text-bold" });

    const userLocation = document.createElement("span");
    userLocation.textContent = posts.location;
    setAttributes(userLocation, { class: "location text-sm" });

    const post = document.createElement("img");
    setAttributes(post, { class: "post", src: posts.post });

    let likesCount = document.createElement("p");
    likesCount.textContent = `${posts.likes} likes`;
    setAttributes(likesCount, { class: "likes text-sm text-bold" });

    const userName = document.createElement("p");
    userName.textContent = posts.username;
    setAttributes(userName, { class: "username text-color text-sm text-bold" });

    const comments = document.createElement("span");
    comments.textContent = posts.comment;
    setAttributes(comments, { class: "comment text-sm text-color" });

    document.body.appendChild(section);
    section.appendChild(container);
    container.appendChild(userAvatar);
    container.appendChild(name);
    name.append(userLocation);
    container.appendChild(post);
    container.appendChild(likeIcon);
    container.appendChild(commentIcon);
    container.appendChild(shareIcon);
    container.appendChild(likesCount);
    container.appendChild(userName);
    userName.append(comments);

    post.addEventListener("dblclick", function () {
      posts.likes += 1;
      likesCount.textContent = `${posts.likes} likes`;
    });
  });
}

renderLayout();
