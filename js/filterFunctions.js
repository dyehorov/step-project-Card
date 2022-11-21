function filterByInput() {
  document.getElementById("filter-title").oninput = function () {
    let value = this.value;
    let cardItems = document.querySelectorAll(
      '.card span[data-name="fullName"]'
    );
    if (value !== "") {
      cardItems.forEach(function (item) {
        if (item.textContent.search(value) === -1) {
          item.closest(".card").classList.add("hidden");
          item.innerHTML = item.textContent;
        } else {
          item.closest(".card").classList.remove("hidden");
        }
      });
    } else {
      cardItems.forEach(function (item) {
        item.closest(".card").classList.remove("hidden");
        item.innerHTML = item.textContent;
      });
    }
  };
}

function filterByStatus(event) {
  const cardCollect = document.querySelectorAll(".card");
  cardCollect.forEach((item) => {
    let statusForFilter = item.querySelector('[data-status="status"]');
    if (event.target.value === "ALL") {
      item.classList.remove("hidden");
    } else if (
      !statusForFilter.textContent.includes(event.target.value.toLowerCase())
    ) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function filterByUrgency(event) {
  const cardCollect = document.querySelectorAll(".card");
  cardCollect.forEach((item) => {
    let urgencyForFilter = item.querySelector('[data-urgency="urgency"]');
    if (event.target.value === "ALL") {
      item.classList.remove("hidden");
    } else if (urgencyForFilter.textContent.includes(event.target.value)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

function clear() {
  const filterTitle = document.querySelector("#filter-title");
  const filterStatus = document.querySelector("#filter-status");
  const filterUrgency = document.querySelector("#filter-urgency");
  filterTitle.value = "";
  filterStatus.value = "ALL";
  filterUrgency.value = "ALL";
}

export { filterByInput, filterByStatus, filterByUrgency, clear };
