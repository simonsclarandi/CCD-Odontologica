import { Card, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// Importación de íconos (usamos íconos representativos para cada área médica)
import ContentCutIcon from '@mui/icons-material/ContentCut'; // Cirugía
import ChildCareIcon from '@mui/icons-material/ChildCare'; // Odontopediatría
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter'; // Ortopedia
import HealingIcon from '@mui/icons-material/Healing'; // Restauraciones
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'; // Estética
import AutorenewIcon from '@mui/icons-material/Autorenew'; // Rehabilitación
import BuildCircleIcon from '@mui/icons-material/BuildCircle'; // Implantes
import MasksIcon from '@mui/icons-material/Masks'; // Endodoncia
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'; // Blanqueamiento
import SpaIcon from '@mui/icons-material/Spa'; // Periodoncia

export default function Services() {
  const treatments = [
    {
      title: 'Cirugía',
      subtitle: 'Intervenir solo cuando es necesario.',
      description: 'Realizamos procedimientos quirúrgicos con planificación precisa y mínima invasión, siempre priorizando la preservación de tejidos.',
      icon: <ContentCutIcon sx={{ fontSize: 36, color: '#111827' }} />
    },
    {
      title: 'Odontopediatría',
      subtitle: 'Cuidar desde el inicio es prevenir a futuro.',
      description: 'Acompañamos el desarrollo dental de los más chicos con un enfoque preventivo, educativo y respetuoso.',
      icon: <ChildCareIcon sx={{ fontSize: 36, color: '#d4af37' }} />
    },
    {
      title: 'Ortopedia',
      subtitle: 'Guiar el crecimiento, no forzarlo.',
      description: 'Intervenimos en etapas clave del desarrollo para lograr armonía funcional y estructural a largo plazo.',
      icon: <AlignHorizontalCenterIcon sx={{ fontSize: 36, color: '#111827' }} />
    },
    {
      title: 'Restauraciones',
      subtitle: 'Conservar estructura es preservar el futuro.',
      description: 'Rehabilitamos dientes respetando su biología, reforzando su estructura y evitando tratamientos invasivos innecesarios.',
      icon: <HealingIcon sx={{ fontSize: 36, color: '#d4af37' }} />
    },
    {
      title: 'Estética dental',
      subtitle: 'Resultados naturales, no artificiales.',
      description: 'Mejoramos la estética de tu sonrisa respetando forma, función y armonía facial. Porque lo mejor es que no parezca hecho.',
      icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 36, color: '#111827' }} />
    },
    {
      title: 'Rehabilitación',
      subtitle: 'Recuperar función con criterio.',
      description: 'Abordamos casos complejos devolviendo estabilidad, función y estética, siempre desde un enfoque conservador y planificado.',
      icon: <AutorenewIcon sx={{ fontSize: 36, color: '#d4af37' }} />
    },
    {
      title: 'Implantes',
      subtitle: 'Cuando reemplazar es realmente necesario.',
      description: 'Indicamos implantes solo cuando no hay otra alternativa viable, priorizando siempre la conservación de lo natural.',
      icon: <BuildCircleIcon sx={{ fontSize: 36, color: '#111827' }} />
    },
    {
      title: 'Endodoncia',
      subtitle: 'Eliminar el dolor, preservar el diente.',
      description: 'Tratamientos precisos que buscan mantener el diente en boca, evitando extracciones innecesarias.',
      icon: <MasksIcon sx={{ fontSize: 36, color: '#d4af37' }} />
    },
    {
      title: 'Blanqueamiento',
      subtitle: 'Estética cuidando la salud.',
      description: 'Mejoramos el color de tu sonrisa con protocolos seguros, respetando la estructura dental.',
      icon: <AutoAwesomeIcon sx={{ fontSize: 36, color: '#111827' }} />
    },
    {
      title: 'Periodoncia',
      subtitle: 'La base de todo tratamiento.',
      description: 'La salud de las encías es fundamental para sostener cualquier resultado a largo plazo.',
      icon: <SpaIcon sx={{ fontSize: 36, color: '#d4af37' }} />
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Encabezado Principal */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Tratamientos pensados para <br className="hidden md:block"/>
            <span className="text-gold-500">conservar, no reemplazar.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 md:text-xl">
            Cada intervención se define desde el diagnóstico, la biología y el criterio clínico. No trabajamos por rutina, trabajamos por decisión.
          </p>
        </div>

        {/* Grilla de Tratamientos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, index) => (
            <Card 
              key={index} 
              sx={{ 
                borderRadius: '16px', 
                boxShadow: 'none',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  borderColor: '#111827',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05)',
                } 
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl">
                    {item.icon}
                  </div>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#111827' }}>
                    {item.title}
                  </Typography>
                </div>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#d4af37', mb: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {item.subtitle}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.6, flexGrow: 1, mb: 3 }}>
                  {item.description}
                </Typography>

                <Button 
                  variant="text" 
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    justifyContent: 'flex-start',
                    padding: 0,
                    color: '#111827', 
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: 'transparent', color: '#d4af37' }
                  }}
                >
                  Conocer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}