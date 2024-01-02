const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".facts-List");

//Create DOM elements: rendering facts in list
factList.innerHTML = "";
loadFacts();

//Load the data from supabase
async function loadFacts() {
  const res = await fetch(
    "https://zluulgxiajscnvxkecku.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdXVsZ3hpYWpzY252eGtlY2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1ODg5NjUsImV4cCI6MjAxMjE2NDk2NX0.dPGAPNPfG-mfkS8wlBTa1EAY3Qqi-oZ9piPLmREBNj8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdXVsZ3hpYWpzY252eGtlY2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1ODg5NjUsImV4cCI6MjAxMjE2NDk2NX0.dPGAPNPfG-mfkS8wlBTa1EAY3Qqi-oZ9piPLmREBNj8",
      },
    }
  );
  const data = await res.json();
  //   console.log(data);
  //const filterArray = data.filter((fact) => fact.category === "technology");
  //createFactsLists(filterArray);
  createFactsLists(data);
}

function createFactsLists(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class=fact>
      <p> ${fact.text}
           <a class="links"
              href="${fact.source}"
              target="_blank"
          >(source)
          </a>
      </p>
                    <span class="tags" style="background-color:${
                      CATEGORIES.find((cat) => cat.name === fact.category).color
                    }"
                      >${fact.category}</span
                    ></li>`
  );
  html = htmlArr.join("");
  factList.innerHTML = html;
}

//Toggle for visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
