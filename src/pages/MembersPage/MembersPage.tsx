import imgNickolas from './assets/img/NickolasPerfil.jpeg'
import imgVitoria from './assets/img/VitoriaPerfil.jpeg'
import imgIshii from './assets/img/FelipePerfil.jpeg'

const TeamMember = ({ member }: { member: Member }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-1">
    <img 
      src={member.img} 
      alt={member.nome}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.nome}</h3>
    <p className="text-gray-600 mb-2">RM: {member.rm}</p>
    <p className="text-gray-600 mb-4">Turma: {member.turma}</p>
    <div className="flex justify-center gap-4 mb-4">
      <a 
        href={member.linkedin} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        LinkedIn
      </a>
      <a 
        href={member.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black transition-colors"
      >
        GitHub
      </a>
    </div>
  </div>
);

type Member = {
    nome: string;
    img: string;
    rm: string;
    turma: string;
    github: string;
    linkedin: string;
};

const membros: Member[] = [
  {
    nome: "Felipe Ishii",
    img: imgIshii,
    rm: "565339",
    turma: "1TDSR",
    github: "https://github.com/Japitu",
    linkedin: "https://www.linkedin.com/in/felipe-ishii",
    
  },
  {
    nome: "Nickolas Souza",
    img: imgNickolas,
    rm: "564105",
    turma: "1TDSR",
    github: "https://github.com/Nickolas0506",
    linkedin: "https://www.linkedin.com/in/nickolas-davi-17824b355/",
  },
  {
    nome: "Vitória Rodrigues",
    img: imgVitoria,
    rm: "565160",
    turma: "1TDSR",
    github: "https://github.com/Vitoria146",
    linkedin: "https://www.linkedin.com/in/vitoria-rodrigues-martins?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  }
];

const MembersPage = () => {
    return (
        <section className="py-8 xs:py-12 sm:py-16 bg-gray-50" id="team">
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 mb-2 xs:mb-4">Nossos Integrantes</h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600">Conheça a equipe por trás do Matching Work</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-6xl mx-auto">
          {membros.map((m) => (
            <TeamMember 
              key={m.nome}
              member={m}
            />
          ))}
        </div>
      </div>
    </section>
    )
}
export default MembersPage;