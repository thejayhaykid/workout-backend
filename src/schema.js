const { gql } = require('apollo-server');

module.exports = gql`
    type User {
        id: ID!
        username: String!
        name: String
        password: String
        email: String
    }
    type Workout {
        id: ID!
        title: String 
        description: String
        category: String 
        focus: String 
        dateAdded: String
        exercises: [Exercise]
    }
    input WorkoutInput {
        title: String 
        category: String 
        description: String
        focus: String
    }
    type Exercise {
        id: ID!
        title: String
        description: String
        category: String
        focus: String
        dateAdded: String
        Workouts: [Workout]
    }
    input ExerciseInput {
        title: String
        description: String
        category: String
        focus: String
    }
    type Query {
        workouts(
            id: ID
            title: String 
            description: String
            category: String 
            focus: String 
            dateAdded: String
        ): [Workout]
        exercises(
            id: ID
            title: String
            description: String
            category: String
            focus: String
            dateAdded: String
        ): [Exercise]
        users(
            id: ID
            username: String
            name: String
            email: String
        ): [User]
        me: User
    }
    type Mutation {
        createWorkout(workout: WorkoutInput): Workout
        updateWorkout(id: ID!, workout: WorkoutInput): Workout
        deleteWorkout(id: ID!): ID
        createExercise(exercise: ExerciseInput): Exercise
        updateExercise(id: ID!, exercise: ExerciseInput): Exercise
        deleteExercise(id: ID!): ID
    }
`;