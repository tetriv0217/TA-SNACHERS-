function grammarCheck(sentence) {
    const errors = [];
    const words = sentence.split(" ");
  
    // Check for capitalization errors
    if (words[0][0] !== words[0][0].toUpperCase()) {
      errors.push("Capitalization error: First word should be capitalized.");
    }
    for (let i = 1; i < words.length; i++) {
      if (words[i][0] === words[i][0].toUpperCase()) {
        errors.push(`Capitalization error: "${words[i]}" should not be capitalized.`);
      }
    }
  
    // Check for punctuation errors
    const lastWord = words[words.length - 1];
    if (lastWord[lastWord.length - 1] !== "." && lastWord[lastWord.length - 1] !== "!" && lastWord[lastWord.length - 1] !== "?") {
      errors.push("Punctuation error: Sentence should end with a period, exclamation mark, or question mark.");
    }
  
    // Check for common spelling errors
    const commonErrors = {
      "dont": "don't",
      "doesnt": "doesn't",
      "cant": "can't",
      "wont": "won't",
      "shouldnt": "shouldn't",
      "wouldnt": "wouldn't",
      "isnt": "isn't",
      "arent": "aren't",
      "wasnt": "wasn't",
      "werent": "weren't"
    };
    words.forEach((word, i) => {
      if (commonErrors[word]) {
        errors.push(`Spelling error: "${word}" should be spelled "${commonErrors[word]}".`);
        words[i] = commonErrors[word];
      }
    });
  
    // Return errors or success message
    if (errors.length > 0) {
      return errors.join("\n");
    } else {
      return "No errors found!";
    }
  }
  
  const textArea = document.getElementById("text");
  const checkBtn = document.getElementById("check-btn");
  const errorsDiv = document.getElementById("errors");
  
  checkBtn.addEventListener("click", function() {
    const text = textArea.value;
    const result = grammarCheck(text);
    errorsDiv.innerHTML = result.replace(/\n/g, "<br>") || "No errors found!";
    errorsDiv.className = result ? "error" : "";
  });
  