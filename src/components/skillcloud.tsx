// components/SkillBar.tsx
interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white">{name}</span>
        <span className="text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full" 
          style={{ width: `${level}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};