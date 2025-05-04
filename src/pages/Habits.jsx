import { useEffect, useState } from 'react';
import API from '../api/axios';

export default function Habits() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const res = await API.get('/habits');
    setHabits(res.data);
  };

  const completeHabit = async (id) => {
    try {
      await API.post(`/habits/${id}/complete`);
      fetchHabits(); // обновим
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div>
      <h2>Мои привычки</h2>
      {habits.map((habit) => (
        <div key={habit._id}>
          <h3>{habit.name}</h3>
          <p>{habit.description}</p>
          <p>Выполнено: {habit.completedDates?.length || 0} раз</p>
          <button onClick={() => completeHabit(habit._id)}>Отметить выполнение</button>
        </div>
      ))}
    </div>
  );
}
