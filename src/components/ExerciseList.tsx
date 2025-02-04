import React from 'react';

interface Exercise {
  exercise: string;
  sets: number;
  reps: number;
  rest: string;
  guide: string;
}

interface WorkoutRoutine {
  day: number;
  exercises: Exercise[];
  note?: string;
}

interface ExerciseListProps {
  routines: WorkoutRoutine[];
}

const ExerciseList: React.FC<ExerciseListProps> = ({ routines }) => {
  return (
    // generate a list of exercises else return a message
    <ul>
      {routines.length > 0 ? (
        routines.map((routine, index) => (
          <li key={index}>
            <h2>Day {routine.day}</h2>
            <ul> 
            {routine.exercises.length > 0 ? (
                routine.exercises.map((exercise, index) => (
                  <li key={index}>
                    <div className='p-4'>
                      <h3>{exercise.exercise}</h3>
                      <p>Sets: {exercise.sets}</p>
                      <p>Reps: {exercise.reps}</p>
                      <p>Rest: {exercise.rest}</p>
                      <p>Guide: {exercise.guide}</p>
                    </div>
                  </li>
                ))
              ) : (
                <li><div className='p-4'> {routine.note}</div></li>
              )}
            </ul>
          </li>
        ))
      ) : (
        <li>No exercises found</li>
      )}
    </ul>
  );
};

export default ExerciseList;