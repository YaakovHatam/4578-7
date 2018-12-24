try {
    JSON.parse("a"); // Produces a SyntaxError
} catch (error) {
    // Handle the error
    alert(error.message);
}

// Creating errors

throw new Error("I hungry. Fridge empty.");
