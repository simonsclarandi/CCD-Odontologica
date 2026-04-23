import { Avatar, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Staff() {
  const team = [
    {
      name: 'Dr. Cristian Consalvi',
      specialty: 'DIRECTOR CLÍNICO Y LÍDER DE EQUIPO',
      bio: 'Fundador de CCD. Especialista en odontología general, implantología y rehabilitación biomimética fija. Experto en diseño de sonrisa con resinas y porcelana.',
      image: 'Odontologos/CristianConsalvi.jpeg'
    },
    {
      name: 'Dra. Camila Santana',
      specialty: 'ODONTOPEDIATRÍA Y ODONTOLOGÍA GENERAL',
      bio: 'Especializada en el diagnóstico biomimético integral y en el cuidado de la salud bucal infantil, acompañando el desarrollo con un enfoque preventivo y cercano.',
      image: 'Odontologos/CamilaSantana.png',
      imagePosition: 'center 0%'
    },
    {
      name: 'Dra. Juliana Stempless',
      specialty: 'CIRUGÍA Y PRÓTESIS REMOVIBLE',
      bio: 'Enfocada en el análisis biomimético detallado, procedimientos quirúrgicos conservadores y soluciones protésicas para recuperar la estabilidad y confianza.',
      image: 'Odontologos/JulianaStempless.jpeg'
    },
    {
      name: 'Dra. Ana Giunta',
      specialty: 'ENDODONCIA Y MICROENDODONCIA',
      bio: 'Especialista en salvar la estructura dental natural. Realiza tratamientos de conducto de alta precisión y mínima invasión para eliminar el dolor y preservar tu sonrisa.',
      image: 'Odontologos/AnaGiunta.png',
      imagePosition: 'center',
      imageScale: '1.2'
    }
  ];

  return (
    <section id="equipo" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Encabezado de Sección */}
        <div className="mb-16 text-center">
          <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-gold-600">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Profesionales comprometidos <br className="hidden md:block" /> con tu salud y bienestar.
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 rounded bg-gold-500"></div>
        </div>

        {/* Grilla de Profesionales */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Contenedor de la Foto con efecto hover */}
              <div className="relative mb-6">
                <div className="absolute inset-0 transition-transform duration-300 border-2 rounded-full border-gold-500 scale-105 group-hover:scale-110"></div>
                <Avatar 
                  src={member.image} 
                  alt={member.name}
                  sx={{ 
                    width: 200, 
                    height: 200, 
                    border: '4px solid white',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', '& .MuiAvatar-img': {
                      objectPosition: member.imagePosition || 'center',
                      transform: `scale(${member.imageScale || '1'})`,
                    }
                  }}
                />
              </div>

              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#111827', mb: 0.5 }}>
                {member.name}
              </Typography>
              
              <Typography variant="subtitle2" sx={{ color: '#d4af37', fontWeight: 'bold', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                {member.specialty}
              </Typography>
              
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                {member.bio}
              </p>

              {/* Redes del profesional (Opcional) */}
              <div className="flex gap-2 mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                <IconButton size="small" sx={{ color: '#111827' }}><LinkedInIcon fontSize="small" /></IconButton>
                <IconButton size="small" sx={{ color: '#d4af37' }}><InstagramIcon fontSize="small" /></IconButton>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}