function toggleDropdown(id) {
    var dropdownContent = document.getElementById(id).getElementsByClassName('dropdown-content')[0];
    var iconElement = document.querySelector("#" + id + " > h2 > i");
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
        iconElement.classList.toggle("fa-caret-down");
        iconElement.classList.toggle("fa-caret-up");
    } else {
        dropdownContent.style.display = 'none';
        iconElement.classList.toggle("fa-caret-down");
        iconElement.classList.toggle("fa-caret-up");
    }
}
