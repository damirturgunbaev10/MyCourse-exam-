const coursesData = [
  {
    id: 1,
    title: "Design Fundamentals",
    author: "Kitani Studio",
    description: "More than 8yr Experience as Illustrator...",
    price: 24.92,
    oldPrice: 32.9,
    category: "design",
    level: "beginner",
    votes: "1.2K",
    image: "/assets/card_img5.png",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    author: "Creative Lab",
    description: "Become a professional UI/UX designer.",
    price: 29.99,
    oldPrice: 39.99,
    category: "design",
    level: "intermediate",
    votes: "980",
    image: "/assets/card_img1.png",
  },
  {
    id: 3,
    title: "Adobe Illustrator Scratch",
    author: "Art Master",
    description: "Learn Illustrator from zero to hero.",
    price: 22.5,
    oldPrice: 30.0,
    category: "design",
    level: "beginner",
    votes: "760",
    image: "/assets/card_img3.png",
  },
  {
    id: 4,
    title: "Advanced Graphic Design",
    author: "Design Pro",
    description: "Advanced techniques for designers.",
    price: 34.9,
    oldPrice: 45.0,
    category: "design",
    level: "advanced",
    votes: "540",
    image: "/assets/card_img10.png",
  },
  {
    id: 5,
    title: "JavaScript Essentials",
    author: "Code Academy",
    description: "Core concepts of JavaScript.",
    price: 19.99,
    oldPrice: 27.99,
    category: "programming",
    level: "beginner",
    votes: "2.3K",
    image: "/assets/card_img11.png",
  },
  {
    id: 6,
    title: "Vue.js Web Framework",
    author: "Kitani Studio",
    description: "Build modern web apps with Vue.",
    price: 24.92,
    oldPrice: 32.9,
    category: "programming",
    level: "intermediate",
    votes: "1.1K",
    image: "/assets/card_img4.png",
  },
  {
    id: 7,
    title: "Advanced React",
    author: "Tech Guru",
    description: "Hooks, Context, Performance.",
    price: 39.99,
    oldPrice: 54.99,
    category: "programming",
    level: "advanced",
    votes: "890",
    image: "/assets/card_img2.png",
  },
  {
    id: 8,
    title: "Backend Basics",
    author: "Dev School",
    description: "Understand backend fundamentals.",
    price: 21.0,
    oldPrice: 29.0,
    category: "programming",
    level: "beginner",
    votes: "670",
    image: "/assets/card_img12.png",
  },
  {
    id: 9,
    title: "Business Strategies",
    author: "John Smith",
    description: "Grow and scale your business.",
    price: 19.99,
    oldPrice: 29.9,
    category: "business",
    level: "advanced",
    votes: "540",
    image: "/assets/card_img7.png",
  },
  {
    id: 10,
    title: "Startup Fundamentals",
    author: "Business Lab",
    description: "From idea to first revenue.",
    price: 18.5,
    oldPrice: 25.0,
    category: "business",
    level: "beginner",
    votes: "820",
    image: "/assets/card_img9.png",
  },
  {
    id: 11,
    title: "Marketing Analytics",
    author: "Growth Team",
    description: "Analyze and optimize campaigns.",
    price: 26.0,
    oldPrice: 35.0,
    category: "business",
    level: "intermediate",
    votes: "430",
    image: "/assets/card_img6.png",
  },
  {
    id: 12,
    title: "Finance for Entrepreneurs",
    author: "Finance Pro",
    description: "Understand numbers in business.",
    price: 23.99,
    oldPrice: 31.99,
    category: "business",
    level: "intermediate",
    votes: "610",
    image: "/assets/card_img3.png",
  },
];

const container = document.getElementById("cards-container");
const checkboxes = document.querySelectorAll(".filter__checkbox");

function renderCourses(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<h3>No reults</h3>";
    return;
  }

  data.forEach((course) => {
    const cardHTML = `
      <div class="card">
        <div class="card__top" style="background-image: url('${course.image}')">
          <div class="card__tags">
            <p class="card__tag1">Best Seller</p>
            <p class="card__tag2">20% OFF</p>
            <img class="card__person_outline" src="/assets/person_outline_img.svg" alt="">
          </div>
        </div>

        <div class="card__down">
          <h5 class="card__title">${course.title}</h5>

          <div class="card__author__name">
            <img src="/assets/person_outline_img.svg" alt="">
            ${course.author}
          </div>

          <p class="card__text">${course.description}</p>

          <div class="card__stars">
            <img src="/assets/card__star__img.svg" alt="">
            <img src="/assets/card__star__img.svg" alt="">
            <img src="/assets/card__star__img.svg" alt="">
            <img src="/assets/card__star__img.svg" alt="">
            <img src="/assets/card__halfstar__img.svg" alt="">
            <p class="card_-votes">(${course.votes})</p>
          </div>

          <div class="card__prices">
            <h3 class="card__actual__price">$${course.price}</h3>
            <h3 class="card__old__price">$${course.oldPrice}</h3>
          </div>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });
}

function filterCourses() {
  const categories = [
    ...document.querySelectorAll('input[name="category"]:checked'),
  ].map((i) => i.value);
  const levels = [
    ...document.querySelectorAll('input[name="level"]:checked'),
  ].map((i) => i.value);

  const filtered = coursesData.filter((course) => {
    const categoryMatch =
      categories.length === 0 || categories.includes(course.category);
    const levelMatch = levels.length === 0 || levels.includes(course.level);
    return categoryMatch && levelMatch;
  });

  renderCourses(filtered);
}

checkboxes.forEach((cb) => cb.addEventListener("change", filterCourses));

renderCourses(coursesData);

const searchInput = document.querySelector(".search__navbar__input");
const searchForm = document.querySelector(".search__navbar__form");

function filterCourses() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked'),
  ).map((cb) => cb.value);

  const selectedLevels = Array.from(
    document.querySelectorAll('input[name="level"]:checked'),
  ).map((cb) => cb.value);

  const filteredCourses = coursesData.filter((course) => {
    const titleMatch = course.title.toLowerCase().includes(searchValue);
    const authorMatch = course.author.toLowerCase().includes(searchValue);

    const searchMatch = searchValue === "" || titleMatch || authorMatch;

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);

    const levelMatch =
      selectedLevels.length === 0 || selectedLevels.includes(course.level);

    return searchMatch && categoryMatch && levelMatch;
  });

  renderCourses(filteredCourses);
}

searchInput.addEventListener("input", filterCourses);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  filterCourses();
});

checkboxes.forEach((cb) => {
  cb.addEventListener("change", filterCourses);
});