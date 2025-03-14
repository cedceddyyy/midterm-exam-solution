function delayedGreeting(name) {
    console.log("Function started...");
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000); 
  }
  
  delayedGreeting("Alice");
  