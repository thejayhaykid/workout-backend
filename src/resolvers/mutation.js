module.exports = {
    createWorkout: async (parent, { workout }, { prisma }, info) => {
        return await prisma.workout.create(workout);
    },
    updateWorkout: async (parent, { id, workout }, { prisma }, info) => {
        return await prisma.workout.update({ where: { id: id }, data: { workout } })
    },
    deleteWorkout: async (parent, { id }, { prisma }, info) => {
        return await prisma.workout.delete({ where: { id: id } })
    },
    createExercise: async (parent, { exercise }, { prisma }, info) => {
        return await prisma.exercise.create(exercise);
    },
    updateExercise: async (parent, { id, exercise }, { prisma }, info) => {
        return await prisma.exercise.update({ where: { id: id }, data: { exercise } })
    },
    deleteExercise: async (parent, { id }, { prisma }, info) => {
        return await prisma.exercise.delete({ where: { id: id } })
    }
};