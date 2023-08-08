import { useEffect, useState } from "react";

export default function Home() {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    const showPerfil = async () => {
      const response = await fetch("https://api.github.com/users/jairo-tumiri");
      const data = await response.json();
      setPerfil(data);
    };
    showPerfil();
  }, []);

  console.log(perfil);
  return (
    <>
      <div className="h-full w-full text-white">
        <img src={perfil.avatar_url} alt="" />
        <div className="flex justify-center gap-1 my-1 w-full">
          <kbd className="kbd">J</kbd>
          <kbd className="kbd">A</kbd>
          <kbd className="kbd">I</kbd>
          <kbd className="kbd">R</kbd>
          <kbd className="kbd">O</kbd>
        </div>
      </div>
    </>
  );
}
