"use client";

import { useEffect, useState } from 'react';
import ExerciseList from '../../components/ExerciseList';

const ExerciseListPage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('/exercise_plan.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setExercises(data.workout_routine);
      } catch (error) {
        console.error('Failed to fetch exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <h1>Workout Routine</h1>
      <ExerciseList routines={exercises} />
    </div>
  );
};

export default ExerciseListPage;


