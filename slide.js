let slide = (e) => {
  try {
    // Getting parent from clicked node
    let checkbox = getCheckboxFromClickedNode(e.target);

    // Getting Checkbox slider from checkbox
    let checkboxSlider = getCheckboxSliderFromParent(checkbox);

    // Sliding checkbox slider
    checkboxSlider.classList?.toggle("slide");
    // Setting image to slider
    checkboxSlider.classList?.toggle("moon");
    checkboxSlider.classList?.toggle("sun");

    // Setting container background
    checkbox.classList.toggle("checkbox-moon-background");
    checkbox.classList.toggle("checkbox-sun-background");
  } catch (e) {
    console.warn(e);
  }
};

let getCheckboxSliderFromParent = (parent) => {
  let checkboxSlider;
  parent.childNodes.forEach((child) => {
    if (child.classList?.contains("checkbox-slider")) checkboxSlider = child;
  });
  if (!checkboxSlider)
    throw new Error(
      `Checkbox-slider wasn't found searching from parent - slide.js | getCheckboxSliderFromParent`,
    );
  return checkboxSlider;
};

let getCheckboxFromClickedNode = (node) => {
  let checkbox;
  if (node.classList.contains("checkbox")) {
    checkbox = node;
  } else if (node.parentNode.classList.contains("checkbox")) {
    checkbox = node.parentNode;
  }
  if (!checkbox)
    throw new Error(`Checkbox wasn't found searching from clicked node`);
  return checkbox;
};
