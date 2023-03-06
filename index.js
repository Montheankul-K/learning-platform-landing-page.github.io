(function() {
    var myBlog = [
      {
        title: "C# Programing",
        text: "Get start with C# programing from basic to advance.",
        image: "images/csharp-course-image.png",
        link: "#"
      },
      {
        title: "Python Programing",
        text: "Learn Python programing hand-on 10 workshops.",
        image: "images/python-course-image.png",
        link: "#"
      },
      {
        title: "Typescript",
        text: "Get start with Typescript form basic to intermediate.",
        image: "images/typescript-course-image.png",
        link: "#"
      },
      {
        title: "Machine Learning Fundamental",
        text: "Learn about Machine Learning fundamental and hand-on workshops.",
        image: "images/machine-learning-course-image.jpg",
        link: "#"
      },
      {
        title: "Web Development",
        text: "Get start on Web Development from zero to hero.",
        image: "images/web-development-course-image.jpg",
        link: "#"
      },
      {
        title: "Node.js",
        text: "Pactice Node.js with hand-on workshops.",
        image: "images/node.js-course-image.png",
        link: "#"
      }
    ];
  var blog = document.getElementById("myListBlog");
  var innerHTML = "";
  for (let i = 0; i < myBlog.length; i++) {
    let data = myBlog[i];
    innerHTML += `
      <li class="list-item">
      <div class="thumb">
        <a href="${data.image}" class="lightbox">
          <img class="info_img" src="${data.image}" alt="" />
        </a>
      </div>
      <h3 class="head_color before">${data.title}</h3>
      <p>${data.text}</p>
    </li>
    `;
  }
  blog.innerHTML = innerHTML;
})();
  