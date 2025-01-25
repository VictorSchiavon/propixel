import React from 'react';

// Definir o tipo para as props do componente
interface CircularProgressProps {
  percentage: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percentage }) => {
  // O círculo completo (360º) tem o valor de 2 * Math.PI * radius
  const radius = 50;  // Raio do círculo
  const circumference = 2 * Math.PI * radius;

  // A porcentagem para a borda interna (em %)
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center items-center relative">
      <svg width="120" height="120" className="transform rotate-90">
        {/* Círculo de fundo */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#e0e0e0"  // Cor do fundo (borda externa)
          strokeWidth="3"
        />
        {/* Círculo de progresso */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke="#E47201"  // Cor do progresso (borda interna)
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute text-2xl font-bold">
        {percentage}%
      </div>
    </div>
  );
};

export default CircularProgress;
