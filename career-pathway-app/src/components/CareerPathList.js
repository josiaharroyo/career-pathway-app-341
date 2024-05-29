import React, { useEffect, useState } from 'react';
import { getCareerPaths } from '../api';

const CareerPathList = () => {
  const [careerPaths, setCareerPaths] = useState([]);

  useEffect(() => {
    const fetchCareerPaths = async () => {
      try {
        const data = await getCareerPaths();
        setCareerPaths(data);
      } catch (error) {
        console.error('Error fetching career paths', error);
      }
    };

    fetchCareerPaths();
  }, []);

  return (
    <div>
      <h1>Career Paths</h1>
      <ul>
        {careerPaths.map((path, index) => (
          <li key={index}>{path.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CareerPathList;
