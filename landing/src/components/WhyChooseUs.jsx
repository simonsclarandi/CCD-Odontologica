import { Card, CardContent, Typography } from '@mui/material';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ShieldIcon from '@mui/icons-material/Shield';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import BiotechIcon from '@mui/icons-material/Biotech';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: 'Diagnóstico real',
      description: 'No improvisamos tratamientos. Analizamos, explicamos y decidimos con vos.',
      icon: <FactCheckIcon sx={{ fontSize: 40, color: '#d4af37' }} /> // Dorado
    },
    {
      title: 'Conservación antes que reemplazo',
      description: 'Siempre que se pueda salvar un diente, lo vamos a hacer.',
      icon: <ShieldIcon sx={{ fontSize: 40, color: '#111827' }} /> // Negro
    },
    {
      title: 'Estética natural',
      description: 'Buscamos que tu sonrisa se vea real, no artificial.',
      icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 40, color: '#d4af37' }} />
    },
    {
      title: 'Tecnología + criterio',
      description: 'La tecnología sola no sirve sin saber cuándo usarla.',
      icon: <BiotechIcon sx={{ fontSize: 40, color: '#111827' }} />
    },
    {
      title: 'Equipo integral',
      description: 'Distintas especialidades, un mismo enfoque.',
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#d4af37' }} />
    },
    {
      title: 'Claridad total',
      description: 'Entendés qué te pasa y por qué hacemos cada paso.',
      icon: <LightbulbIcon sx={{ fontSize: 40, color: '#111827' }} />
    }
  ];

  return (
    <section id="experiencia" className="py-24 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Encabezado de la sección */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Odontología honesta, <br className="md:hidden" />pensada para vos
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 rounded bg-gold-500"></div>
        </div>

        {/* Grilla de 6 tarjetas */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              sx={{ 
                borderRadius: '16px', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                border: '1px solid #f3f4f6',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.1)',
                  borderColor: '#d4af37' // Borde dorado al pasar el mouse
                } 
              }}
            >
              <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="mb-4">
                  {item.icon}
                </div>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1.5, color: '#111827' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}