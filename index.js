// Welcome to HealthFit!
// HealthFit is your personal fitness companion, designed to help you achieve your health and fitness goals.
// Whether you're aiming to lose weight, build muscle, or improve your overall well-being,
// HealthFit provides the tools and motivation you need to succeed.
// Say hello to a healthier, happier you with HealthFit!

// Sample code to demonstrate basic functionality of HealthFit

// Define a User class to represent users in HealthFit
class User {
    constructor(name, age, weight, height, fitnessGoal) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.fitnessGoal = fitnessGoal;
    }

    calculateBMI() {
        const heightInMeters = this.height / 100; // Convert height to meters
        return this.weight / (heightInMeters * heightInMeters);
    }

    updateFitnessGoal(newGoal) {
        this.fitnessGoal = newGoal;
    }
}

// Define a FitnessTracker class to track fitness activities in HealthFit
class FitnessTracker {
    constructor() {
        this.activities = [];
    }

    addActivity(activity, duration) {
        this.activities.push({ activity, duration });
    }

    displayActivities() {
        console.log('Activities tracked in HealthFit:');
        this.activities.forEach(activity => {
            console.log(`- ${activity.activity}: ${activity.duration} minutes`);
        });
    }
}

// Example usage of HealthFit functionality
const user = new User('John Doe', 30, 75, 180, 'Lose weight');
user.updateFitnessGoal('Build muscle');

const tracker = new FitnessTracker();
tracker.addActivity('Running', 30);
tracker.addActivity('Weightlifting', 45);

// Display activities tracked in HealthFit
tracker.displayActivities();
