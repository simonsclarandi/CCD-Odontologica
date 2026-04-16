import { Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Services() {
  const treatments = [
    {
      title: 'Cirugía',
      subtitle: 'Intervenir solo cuando es necesario.',
      description: 'Realizamos procedimientos quirúrgicos con planificación precisa y mínima invasión, siempre priorizando la preservación de tejidos.',
      image: '/Cards/Cirugia.jpeg'
    },
    {
      title: 'Odontopediatría',
      subtitle: 'Cuidar desde el inicio es prevenir a futuro.',
      description: 'Acompañamos el desarrollo dental de los más chicos con un enfoque preventivo, educativo y respetuoso.',
      image: '/Cards/Odontopediatria.jpeg'
    },
    {
      title: 'Ortopedia',
      subtitle: 'Guiar el crecimiento, no forzarlo.',
      description: 'Intervenimos en etapas clave del desarrollo para lograr armonía funcional y estructural a largo plazo.',
      image: '/Cards/Ortopedia.jpeg'
    },
    {
      title: 'Restauraciones',
      subtitle: 'Conservar estructura es preservar el futuro.',
      description: 'Rehabilitamos dientes respetando su biología, reforzando su estructura y evitando tratamientos invasivos innecesarios.',
      image: '/Cards/Restauraciones.jpeg'
    },
    {
      title: 'Estética dental',
      subtitle: 'Resultados naturales, no artificiales.',
      description: 'Mejoramos la estética de tu sonrisa respetando forma, función y armonía facial. Porque lo mejor es que no parezca hecho.',
      image: '/Cards/Estetica.jpeg'
    },
    {
      title: 'Rehabilitación',
      subtitle: 'Recuperar función con criterio.',
      description: 'Abordamos casos complejos devolviendo estabilidad, función y estética, siempre desde un enfoque conservador y planificado.',
      image: '/Cards/Rehabilitacion.jpeg'
    },
    {
      title: 'Implantes',
      subtitle: 'Cuando reemplazar es realmente necesario.',
      description: 'Indicamos implantes solo cuando no hay otra alternativa viable, priorizando siempre la conservación de lo natural.',
      image: '/Cards/Implante.jpeg'
    },
    {
      title: 'Endodoncia',
      subtitle: 'Eliminar el dolor, preservar el diente.',
      description: 'Tratamientos precisos que buscan mantener el diente en boca, evitando extracciones innecesarias.',
      image: '/Cards/Endoncia.jpeg'
    },
    {
      title: 'Blanqueamiento',
      subtitle: 'Estética cuidando la salud.',
      description: 'Mejoramos el color de tu sonrisa con protocolos seguros, respetando la estructura dental.',
      image: '/Cards/Blanqueo.jpeg'
    },
    {
      title: 'Periodoncia',
      subtitle: 'La base de todo tratamiento.',
      description: 'La salud de las encías es fundamental para sostener cualquier resultado a largo plazo.',
      image: '/Cards/Peridoncia.jpeg'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50">
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

        {/* Grilla de Tratamientos Visuales */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-lg h-[350px] cursor-pointer"
            >
              {/* Imagen de fondo (se agranda en hover) */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Capa oscura (se oscurece más en hover para poder leer el texto) */}
              <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/70"></div>

              {/* Contenedor del contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                
                {/* Textos siempre visibles */}
                <Typography variant="h5" component="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
                  {item.subtitle}
                </Typography>

                {/* Textos y botón ocultos (se revelan en hover) */}
                <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-3">
                  <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 3, lineHeight: 1.5 }}>
                    {item.description}
                  </Typography>

                  <Button 
                    variant="outlined" 
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      color: 'white', 
                      borderColor: '#d4af37',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      '&:hover': { backgroundColor: '#d4af37', color: '#111827', borderColor: '#d4af37' }
                    }}
                  >
                    Saber más
                  </Button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}