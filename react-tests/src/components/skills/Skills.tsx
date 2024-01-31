import { useEffect, useState } from "react";

type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogin(true);
    }, 1001);
  }, []);
  return (
    <div className="bg-gray-100 mx-auto max-w-6xl mt-10 p-10">
      <ul>
        {skills.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div className="mt-10">
        {login ? (
          <button className="bg-blue-500 text-white px-10 py-3 hover:bg-blue-600 rounded-xl">
            Start learning
          </button>
        ) : (
          <button
            onClick={() => setLogin(true)}
            className="bg-blue-500 text-white px-10 py-3 hover:bg-blue-600 rounded-xl"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}
