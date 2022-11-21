const filterForm = document.createElement("div");

filterForm.className = "filter-form";
filterForm.innerHTML = `<div class="filter-block">
<label for="filter-title" class="filter-label">По імені</label>
  <input type="text" placeholder="Введіть текст" id="filter-title"/>
<label for="filter-status" class="filter-label">За статусом</label>
<select name="Пошук за статусом" class="filter-select" id="filter-status">
  <option value="ALL" class="filter-status--option">All</option>
  <option value="Done" class="filter-status--option">Open</option>
  <option value="Open" class="filter-status--option">Done</option>
</select>
<label for="filter-urgency" class="filter-label">За терміновістю</label>
<select name="Пошук за терміновістю" class="filter-select" id="filter-urgency">
  <option value="ALL" class="filter-status--option">All</option>
  <option value="High" class="filter-urgency--option">High</option>
  <option value="Normal" class="filter-urgency--option">Normal</option>
  <option value="Low" class="filter-urgency--option">Low</option>
</select>
<button class="filter-btn">Скидання</button>
</div>`;

export default filterForm;
