interface SafetyBadgeProps {
  level: 'green' | 'yellow' | 'red';
  size?: 'sm' | 'md' | 'lg';
}

export function SafetyBadge({ level, size = 'md' }: SafetyBadgeProps) {
  const configs = {
    green: {
      emoji: '🟢',
      label: 'Nivel Verde',
      description: '¡Totalmente Seguro!',
      gradient: 'from-green-400 to-emerald-500',
      textColor: 'text-green-900',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400',
    },
    yellow: {
      emoji: '🟡',
      label: 'Nivel Amarillo',
      description: 'Supervisión Sugerida',
      gradient: 'from-yellow-400 to-orange-500',
      textColor: 'text-yellow-900',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
    },
    red: {
      emoji: '🔴',
      label: 'Nivel Rojo',
      description: 'Supervisión Obligatoria',
      gradient: 'from-red-400 to-pink-500',
      textColor: 'text-red-900',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400',
    },
  };

  const config = configs[level];

  const sizes = {
    sm: {
      container: 'px-3 py-1.5',
      emoji: 'text-lg',
      text: 'text-xs',
      description: 'text-[10px]',
    },
    md: {
      container: 'px-4 py-2',
      emoji: 'text-2xl',
      text: 'text-sm',
      description: 'text-xs',
    },
    lg: {
      container: 'px-6 py-3',
      emoji: 'text-3xl',
      text: 'text-base',
      description: 'text-sm',
    },
  };

  const sizeConfig = sizes[size];

  return (
    <div
      className={`inline-flex items-center gap-2 ${sizeConfig.container} ${config.bgColor} border-2 ${config.borderColor} rounded-full shadow-md`}
    >
      <span className={sizeConfig.emoji}>{config.emoji}</span>
      <div className="flex flex-col">
        <span className={`${sizeConfig.text} font-bold ${config.textColor}`} style={{ fontFamily: 'var(--font-baloo)' }}>
          {config.label}
        </span>
        {size !== 'sm' && (
          <span className={`${sizeConfig.description} ${config.textColor} opacity-75 font-semibold`}>
            {config.description}
          </span>
        )}
      </div>
    </div>
  );
}

// Made with Bob
