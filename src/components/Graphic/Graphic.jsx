import React from 'react'
import './graphic.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Population Data ',
    },
  },
  animation: {
    duration: 2000, 
  },
};

export const Graphic = ({labels, populations}) => {

  const data = {
    labels,       
    datasets: [   
      {
        label: 'Populations',
        data: populations, 
        backgroundColor: '#2F89AA',
      },
    ],
  };


  return (
    <div className='graphic'>
      <Bar options={options} data={data} />;
    </div>
  )
}
