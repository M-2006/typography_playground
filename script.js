// Get the select element for font family, input element for font size, input element for font color,
// select element for font style, textarea element for default text, textarea element for user text,
// and paragraph element for preview text
const fontFamilySelect = document.getElementById('font-family');
const fontSizeInput = document.getElementById('font-size');
const fontColorInput = document.getElementById('font-color');
const fontStyleSelect = document.getElementById('font-style');
const defaultTextInput = document.getElementById('default-text');
const userTextInput = document.getElementById('user-text');
const previewText = document.getElementById('preview-text');

// Add event listeners to update the preview when the font family, font size, font color, font style,
// default text, or user text changes
fontFamilySelect.addEventListener('change', updatePreview);
fontSizeInput.addEventListener('input', updatePreview);
fontColorInput.addEventListener('input', updatePreview);
fontStyleSelect.addEventListener('change', updatePreview);
defaultTextInput.addEventListener('input', updatePreview);
userTextInput.addEventListener('input', updatePreview);

// Function to update the preview text based on the selected font family, font size, font color, and font style,
// as well as the default text or user text input
function updatePreview() {
  // Get the selected font family, font size with 'px', font color, and font style
  const fontFamily = fontFamilySelect.value;
  const fontSize = fontSizeInput.value + 'px';
  const fontColor = fontColorInput.value;
  const fontStyle = fontStyleSelect.value;
  // Get the default text and user text
  const defaultText = defaultTextInput.value;
  const userText = userTextInput.value;

  // Set the font family, font size, font color, and font style of the default text input
  defaultTextInput.style.fontFamily = fontFamily;
  defaultTextInput.style.fontSize = fontSize;
  defaultTextInput.style.color = fontColor;
  defaultTextInput.style.fontStyle = fontStyle;

  // Set the font family, font size, font color, and font style of the user text input
  userTextInput.style.fontFamily = fontFamily;
  userTextInput.style.fontSize = fontSize;
  userTextInput.style.color = fontColor;
  userTextInput.style.fontStyle = fontStyle;

  // Set the font family, font size, font color, and font style of the preview text
  previewText.style.fontFamily = fontFamily;
  previewText.style.fontSize = fontSize;
  previewText.style.color = fontColor;
  previewText.style.fontStyle = fontStyle;

  // Set the text content of the preview text to either the default text or the user text
  previewText.textContent = defaultText || userText;
}
