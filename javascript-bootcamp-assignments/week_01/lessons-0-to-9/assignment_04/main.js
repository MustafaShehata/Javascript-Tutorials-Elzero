console.group("Group 1"); // Group 1 Opens 
    console.log("Message One");
    console.log("Message Two");
    console.group("Child Group"); // Child Group Opens
        console.log("Message One");
        console.log("Message Two");
        console.group("Grand Child Group"); // Grnad Child Opens
            console.log("Message One");
            console.log("Message Two");
            console.groupEnd(); // End of Grand Child Group 
        console.groupEnd(); // End of Child Group
    console.groupEnd(); // End of Group 1
console.group("Group 2");
    console.log("Message One");
    console.log("Message Two");
    console.groupEnd(); // End of Group 2