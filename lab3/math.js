// Practical 3: Handling Merge Conflicts
// This file represents a shared resource where multiple developers might work.

function calculate(a, b) {
    // Version A might use addition, Version B might use multiplication
    // Result of conflict resolution:
    console.log("Resolving conflict between add and multiply...");
    return a + b; // Choosing addition for now
}

console.log("Result:", calculate(10, 5));
