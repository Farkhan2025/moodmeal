const recipes = {
  happy: [
    {
      title: "Fresh Fruit Salad",
      description: "A colorful mix of seasonal fruits to keep your spirits high."
    },
    {
      title: "Chocolate Brownies",
      description: "Rich, fudgy brownies to celebrate your happiness."
    }
  ],
  stressed: [
    {
      title: "Chamomile Tea",
      description: "Relaxing tea to calm your nerves and ease your mind."
    },
    {
      title: "Avocado Toast",
      description: "Simple and nutritious to keep you grounded."
    }
  ],
  tired: [
    {
      title: "Energy Smoothie",
      description: "Packed with bananas, spinach, and protein for a quick boost."
    },
    {
      title: "Oatmeal with Nuts",
      description: "Slow-release energy to keep you going."
    }
  ],
  energetic: [
    {
      title: "Quinoa Salad",
      description: "Light, fresh, and packed with protein for active days."
    },
    {
      title: "Grilled Chicken Wrap",
      description: "Fuel your energy with a tasty and filling meal."
    }
  ]
};

const moodButtons = document.querySelectorAll(".moods button");
const recipeList = document.getElementById("recipe-list");

function showMessage(message) {
  recipeList.innerHTML = `<p class="message">${message}</p>`;
}

function showRecipes(mood) {
  recipeList.innerHTML = "";

  const moodRecipes = recipes[mood];
  if (!moodRecipes) {
    showMessage("No recipes found for this mood.");
    return;
  }

  moodRecipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card", "fade-slide-up");

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const desc = document.createElement("p");
    desc.textContent = recipe.description;

    card.appendChild(title);
    card.appendChild(desc);
    recipeList.appendChild(card);

    // Trigger reflow to restart animation (optional, for repeated clicks)
    void card.offsetWidth;
    card.classList.add("fade-slide-up");
  });
}

// Initial message on page load
showMessage("Choose a mood to see recipes!");

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    showRecipes(mood);
  });
});
