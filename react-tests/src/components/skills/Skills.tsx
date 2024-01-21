type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <>
      <ul>
        {skills.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </>
  );
}
