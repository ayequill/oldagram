const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "/img/Vincent van Gogh.png",
    post: "/img/post-image-one.png",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "img/avatar-courbet.png",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
//  declaring DOM variables
const likeIcon = document.createElement("img");
likeIcon.setAttribute("class", "icon");
likeIcon.setAttribute("src", "/img/like.png");

const shareIcon = document.createElement("img");
shareIcon.setAttribute("class", "icon");
shareIcon.setAttribute("src", "/img/share.png");

const commentIcon = document.createElement("img");
setAttributes(commentIcon, { class: "icon", src: "/img/comment.png" });

const header = document.querySelector(".header");
let section = document.createElement("section");

let container = document.createElement("div");
container.classList = "container";

let userAvatar = document.createElement("img");
setAttributes(userAvatar, {
  class: "avatar",
  src: "/img/Vincent van Gogh.png",
});

let name = document.createElement("p");
setAttributes(name, { class: "name text-color text-sm text-bold" });
let userLocation = document.createElement("span");

setAttributes(userLocation, { class: "location text-sm" });

let post = document.createElement("img");
setAttributes(post, { class: "post", src: "/img/post-image-one.png" });

const likesCount = document.createElement("p");
setAttributes(likesCount, { class: "likes text-sm text-bold" });

const userName = document.createElement("p");
setAttributes(userName, { class: "username text-color text-sm text-bold" });

const comments = document.createElement("p");
setAttributes(comments, { class: "comment text-sm text-color" });

// function to render layout
function renderLayout() {
  document.body.appendChild(section);
  // header.nextSibling.after(section, header.nextSibling)
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
  container.appendChild(comments);
}

function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
}

function sectionOne() {
  name.textContent = posts[0].name;
  likesCount.textContent = `${posts[0].likes} likes`;
  userName.textContent = "ayequill";
  comments.textContent = posts[0].comment;
  // Object.assign(location,layout[3])

  userLocation.textContent = posts[0].location;

  renderLayout();
}

sectionOne();
