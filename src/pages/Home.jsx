import { useState } from "react";
export default function Home() {
  const [skill, setSkill] = useState(Skills)
  const noSkills = ["MongoDB", "Java", "C++", "MySQL", "PHP"];
  const Skills = skill.map((e) => {
    if (e.name != noSkills.find((a) => a == e.name)) return e;
  });

  return (
    <>
       <div>
        <h1>Home</h1>
        <p>Home page content</p>
        <h1>Jairo Tumiri Cuellar</h1>
       </div>
    </>
  );
}
