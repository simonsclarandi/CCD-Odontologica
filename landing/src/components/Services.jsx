import { useState } from 'react'; // <-- Importamos useState
import { Typography, Button, Dialog, DialogContent, IconButton } from '@mui/material'; // <-- Agregamos Dialog, DialogContent e IconButton
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close'; // <-- Icono para cerrar el modal

export default function Services() {

  // 1. Memoria para saber si el modal está abierto (true) o cerrado (false)
  const [open, setOpen] = useState(false);
  
  // 2. Memoria para guardar toda la información del tratamiento que el usuario clickeó
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  // Memoria para saber qué tarjeta se tocó en el celular
  const [activeCard, setActiveCard] = useState(null);

  // Función que se ejecuta al tocar "Saber más"
  const handleOpen = (treatment) => {
    setSelectedTreatment(treatment); // Guardamos qué tratamiento es
    setOpen(true); // Abrimos la ventana
  };

  // Función que se ejecuta al tocar la "X" o afuera del modal
  const handleClose = () => {
    setOpen(false); // Cerramos la ventana
    // Esperamos 300ms (lo que dura la animación de cierre) para borrar la info y que no parpadee feo
    setTimeout(() => setSelectedTreatment(null), 300); 
  };

  const treatments = [
    {
      title: 'Cirugía',
      subtitle: 'Intervenir solo cuando es necesario.',
      description: 'Realizamos procedimientos quirúrgicos con planificación precisa y mínima invasión, siempre priorizando la preservación de tejidos.',
      image: '/Cards/Cirugia.jpeg',
      // Datos modal
      extraInfo: 'Intervenir solo cuando sea realmente necesario. \n\n La cirugía debe ser una indicación precisa, no una costumbre. En CCD valoramos cada caso con criterio biológico, priorizando siempre las alternativas conservadoras cuando son viables.\n\n Cuando el tratamiento quirúrgico es necesario, lo planificamos con exactitud para reducir trauma, mejorar la recuperación y favorecer un resultado funcional y biológicamente estable.\n\nObjetivo: resolver lo necesario con la menor agresión posible.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Odontopediatría',
      subtitle: 'Cuidar desde el inicio es prevenir a futuro.',
      description: 'Acompañamos el desarrollo dental de los más chicos con un enfoque preventivo, educativo y respetuoso.',
      image: '/Cards/Odontopediatria.jpeg',
      // Datos modal
      extraInfo: 'Cuidar desde el inicio es prevenir el futuro. \n\nLa odontología infantil no consiste solo en tratar caries: consiste en acompañar el crecimiento, educar hábitos y proteger el desarrollo bucal desde edades tempranas.\n\nNuestra mirada biomimética en niños prioriza prevención, mínima invasión y tratamientos respetuosos con la biología y la experiencia emocional del paciente.\n\nObjetivo: construir salud bucal desde el comienzo, con cuidado y confianza.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Ortopedia',
      subtitle: 'Guiar el crecimiento, no forzarlo.',
      description: 'Intervenimos en etapas clave del desarrollo para lograr armonía funcional y estructural a largo plazo.',
      image: '/Cards/Ortopedia.jpeg',
      // Datos modal
      extraInfo: 'Guiar el crecimiento, no forzarlo.\n\nLa ortopedia funcional busca acompañar y orientar el desarrollo, aprovechando el potencial biológico del paciente en crecimiento.\n\nDesde una mirada respetuosa de la biología, priorizamos diagnósticos tempranos e intervenciones que favorezcan función, respiración, desarrollo y armonía facial, evitando tratamientos innecesariamente agresivos.\n\nObjetivo: intervenir a tiempo para guiar mejor el crecimiento.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Restauraciones',
      subtitle: 'Conservar estructura es preservar el futuro.',
      description: 'Rehabilitamos dientes respetando su biología, reforzando su estructura y evitando tratamientos invasivos innecesarios.',
      image: '/Cards/Restauraciones.jpeg',
      // Datos modal
      extraInfo: 'Conservar estructura es preservar el futuro\n\nLa odontología biomimética parte de una idea central: cuanto más tejido sano se conserva, mejor pronóstico tiene el diente.\n\nPor eso nuestras restauraciones buscan imitar el comportamiento natural del diente, reforzar lo debilitado y evitar preparaciones invasivas innecesarias. No solo restauramos una cavidad: devolvemos biomecánica, sellado y función.\n\nObjetivo: restaurar respetando la biología y la estructura remanente.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Estética dental',
      subtitle: 'Resultados naturales, no artificiales.',
      description: 'Mejoramos la estética de tu sonrisa respetando forma, función y armonía facial. Porque lo mejor es que no parezca hecho.',
      image: '/Cards/Estetica.jpeg',
      // Datos modal
      extraInfo: 'Resultados naturales, no artificiales.\n\nLa verdadera estética no consiste en que todos los dientes se vean iguales, sino en respetar proporciones, textura, luz, función y armonía facial.\n\nNuestra odontología estética se basa en principios biomiméticos: restaurar imitando la naturaleza, conservando tejido sano y evitando sobretratamientos que sacrifiquen estructura por una estética forzada.\n\nObjetivo: una sonrisa armónica, saludable y creíble.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Rehabilitación',
      subtitle: 'Recuperar función con criterio.',
      description: 'Abordamos casos complejos devolviendo estabilidad, función y estética, siempre desde un enfoque conservador y planificado.',
      image: '/Cards/Rehabilitacion.jpeg',
      // Datos modal
      extraInfo: 'Recuperar función con criterio.\n\nRehabilitar no es solo “arreglar dientes”, sino devolver equilibrio al sistema oral. En CCD estudiamos la causa del desgaste, la pérdida de estructura o la alteración funcional antes de indicar cualquier tratamiento.\n\nLa visión biomimética nos permite planificar restauraciones que respeten la biomecánica del diente, preserven remanente sano y distribuyan mejor las cargas.\n\nObjetivo: reconstruir función, estética y estabilidad a largo plazo.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Implantes',
      subtitle: 'Cuando reemplazar es realmente necesario.',
      description: 'Indicamos implantes solo cuando no hay otra alternativa viable, priorizando siempre la conservación de lo natural.',
      image: '/Cards/Implante.jpeg',
      // Datos modal
      extraInfo: 'Reemplazar solo cuando realmente es necesario.\n\nUn implante no debe ser la primera respuesta automática. En CCD priorizamos conservar dientes siempre que exista una posibilidad real, predecible y biológicamente favorable.\n\nCuando la pieza no puede mantenerse, indicamos implantes con diagnóstico preciso y planificación cuidadosa, buscando restituir función y estética de manera armónica con el resto del sistema oral.\n\nObjetivo: reemplazar con criterio, no extraer por rutina.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Endodoncia',
      subtitle: 'Eliminar el dolor, preservar el diente.',
      description: 'Tratamientos precisos que buscan mantener el diente en boca, evitando extracciones innecesarias.',
      image: '/Cards/Endoncia.jpeg',
      // Datos modal
      extraInfo: 'Eliminar dolor y conservar posibilidades.\n\nLa endodoncia es una herramienta valiosa cuando el diente la necesita, pero nunca debe indicarse por inercia. Desde una mirada biomimética, evaluamos cada caso con el objetivo de preservar la mayor cantidad posible de estructura sana.\n\nCuando el tratamiento de conducto es necesario, buscamos que el diente mantenga su integridad biomecánica y pueda ser restaurado de forma funcional y durable.\n\nObjetivo: resolver la patología preservando el futuro restaurador del diente.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Blanqueamiento',
      subtitle: 'Estética cuidando la salud.',
      description: 'Mejoramos el color de tu sonrisa con protocolos seguros, respetando la estructura dental.',
      image: '/Cards/Blanqueo.jpeg',
      // Datos modal
      extraInfo: 'Una estética que respeta el diente.\n\nEn CCD entendemos el blanqueamiento como un tratamiento estético que debe realizarse con criterio, diagnóstico y control profesional. No se trata solo de “blanquear”, sino de mejorar el color dental preservando la estructura y cuidando la sensibilidad.\n\nNuestra visión biomimética prioriza resultados armónicos, naturales y seguros, evitando excesos que comprometan la salud del esmalte o generen una apariencia artificial.\n\nObjetivo: mejorar la sonrisa sin perder naturalidad ni salud.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
    },
    {
      title: 'Periodoncia',
      subtitle: 'La base de todo tratamiento.',
      description: 'La salud de las encías es fundamental para sostener cualquier resultado a largo plazo.',
      image: '/Cards/Peridoncia.jpeg',
      // Datos modal
      extraInfo: 'La salud de las encías es la base de todo\n\nNo existe odontología de calidad sin salud periodontal. Las encías y los tejidos de soporte son el fundamento sobre el que se sostienen la estética, la función y la estabilidad de cualquier tratamiento.\n\nDesde una visión biomimética, no tratamos solo dientes: tratamos el sistema completo. Por eso evaluamos inflamación, sangrado, soporte óseo y hábitos que puedan afectar el equilibrio del medio bucal.\n\nObjetivo: recuperar salud, estabilidad y un entorno biológico sano para cualquier rehabilitación.',
      //igEmbed: 'https://www.instagram.com/p/ejemplo_del_video/embed'
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {treatments.map((item, index) => (
            <div 
              key={index} 
              // Al tocar, si es la misma tarjeta la cierra (null), si es otra la abre (index)
              onClick={() => setActiveCard(activeCard === index ? null : index)} 
              // Si el usuario desliza el dedo afuera, se cierra
              onMouseLeave={() => setActiveCard(null)} 
              className="relative group overflow-hidden rounded-2xl shadow-lg h-[350px] cursor-pointer"
            >
              {/* Imagen de fondo */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              
              {/* Capa oscura (se activa con hover en PC, o al tocar en móvil) */}
              <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent ${activeCard === index ? 'from-black/95 via-black/70' : 'group-hover:from-black/95 group-hover:via-black/70'}`}></div>

              {/* Contenedor del contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                
                {/* Textos siempre visibles */}
                <Typography variant="h5" component="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
                  {item.subtitle}
                </Typography>

                {/* Textos y botón ocultos (AQUÍ ESTÁ LA MAGIA) */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCard === index ? 'max-h-48 opacity-100 mt-3' : 'max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-3'}`}>
                  <Typography variant="body2" sx={{ color: '#e5e7eb', mb: 3, lineHeight: 1.5 }}>
                    {item.description}
                  </Typography>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que se cierre la tarjeta al tocar el botón
                      handleOpen(item);
                    }}
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
      {/* --- INICIO DEL MODAL INFORMACION EXTRA --- */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth 
        PaperProps={{ sx: { borderRadius: '24px', overflow: 'hidden' } }}
      >
        {/* Solo renderizamos el contenido si hay un tratamiento seleccionado */}
        {selectedTreatment && (
          <div className="relative bg-white">
            
            {/* Botón X para cerrar */}
            <IconButton 
              onClick={handleClose} 
              sx={{ position: 'absolute', right: 8, top: 8, color: '#9ca3af', zIndex: 10, '&:hover': { color: '#111827' } }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0 }}>
              <div className="flex flex-col md:flex-row">
                
                {/* Columna Izquierda: Texto y Botón de Turno */}
                <div className="flex flex-col justify-center p-8 md:w-1/2">
                  <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 'bold', letterSpacing: 1.5 }}>
                    {selectedTreatment.title}
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'extrabold', color: '#111827', mt: 1, mb: 2, lineHeight: 1.1 }}>
                    {selectedTreatment.subtitle}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                    {selectedTreatment.extraInfo}
                  </Typography>

                  <Button 
                    variant="contained" 
                    href="#turnos" 
                    onClick={handleClose} // Cierra el modal para ir a la sección de turnos
                    sx={{ backgroundColor: '#111827', color: 'white', width: 'fit-content', textTransform: 'none', fontWeight: 'bold', borderRadius: '8px', '&:hover': { backgroundColor: '#d4af37', color: '#111827' } }}
                  >
                    Consultar por este tratamiento
                  </Button>
                </div>

                {/* Columna Derecha: Video de Instagram */}
                <div className="flex items-center justify-center p-4 bg-gray-100 min-h-[400px] md:w-1/2">
                  {/* --- VERSIÓN ACTUAL: Muestra la imagen de la tarjeta --- */}
                  <img 
                    src={selectedTreatment.image} 
                    alt={`Imagen representativa de ${selectedTreatment.title}`} 
                    className="object-cover w-full h-[400px] md:h-[100%]"
                  />

                  {/* --- VERSIÓN FUTURA: Videos de Instagram --- */}
                  {/* Cuando tengas los videos, borra la etiqueta <img> de arriba, 
                      descomenta este bloque y asegúrate de agregar los links en el array treatments.

                  {selectedTreatment.igEmbed ? (
                    <iframe
                      src={selectedTreatment.igEmbed}
                      className="w-full h-[500px] md:h-[600px] rounded-xl border border-gray-200 shadow-sm"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency="true"
                      allow="encrypted-media"
                      title={`Video de ${selectedTreatment.title}`}
                    ></iframe>
                  ) : (
                    <div className="text-center text-gray-400 p-4">
                      <p>Video demostrativo no disponible aún.</p>
                    </div>
                  )}
                  */}
                </div>

              </div>
            </DialogContent>
          </div>
        )}
      </Dialog>
      {/* --- FIN DEL MODAL --- */}
    </section>
  );
}