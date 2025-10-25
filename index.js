// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
function addElementToDOM(id, message) {
    const newElement = document.createElement('p')
    newElement.textContent = message
    newElement.id = id
    dynamic = document.getElementById("dynamic-content")
    dynamic.append(newElement)

}
// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function removeElementFromDOM(id) {
    removeElement = document.getElementById(id)
    removeElement.remove()

}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

function simulateClick(id, message) {
    const click = document.getElementById(id)
    click.textContent = message
}

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function handleFormSubmit(formId, elementId) {
    const form = document.getElementById(formId)
    const error = document.getElementById("error-message")
    const userInput = form.elements['user-input']
    const element = document.getElementById(elementId)
    if (userInput.value === "") {
        
        error.textContent = 'Input cannot be empty'
        error.classList.remove('hidden')
    }
    element.textContent = userInput.value
    
}
module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
}