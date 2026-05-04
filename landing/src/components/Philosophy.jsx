import { useState } from 'react'; // <-- Importamos useState
import { Typography, Button, Dialog, DialogContent, IconButton } from '@mui/material'; // <-- Agregamos los componentes del modal
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close'; // <-- Icono para cerrar
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // <-- Icono para el botón

export default function Philosophy() {
  // Estado para controlar abrir y cerrar el modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id="filosofia" className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Columna Izquierda: Los textos principales */}
          <div>
            <span className="flex items-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase text-gold-600">
              <AutoAwesomeIcon fontSize="small" />
              Criterio Biomimético
            </span>
            
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Odontología honesta, <br/>
              <span className="text-gold-500">basada en criterio.</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                <strong>CCD nace con una idea clara: hacer lo correcto para cada paciente.</strong> No trabajamos desde la urgencia ni desde soluciones estandarizadas, sino desde el diagnóstico preciso y la planificación consciente.
              </p>
              <p>
                Con un enfoque biomimético y un equipo multidisciplinario, ofrecemos tratamientos que priorizan la conservación, la función y la durabilidad por sobre lo inmediato.
              </p>
              <p>
                Creemos en tratamientos necesarios, explicados con claridad, y en construir confianza a través de decisiones bien tomadas. Porque cuando entendés tu tratamiento, elegís mejor.
              </p>
            </div>

            {/* NUEVO: Botón para abrir el Modal */}
            <div className="mt-8">
              <Button 
                onClick={handleOpen}
                variant="outlined" 
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  color: '#111827', 
                  borderColor: '#d4af37',
                  borderWidth: '2px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  padding: '10px 24px',
                  '&:hover': { backgroundColor: '#d4af37', color: '#fff', borderColor: '#d4af37' }
                }}
              >
                Saber más sobre Biomimética
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta destacada con la frase fuerte */}
          <div className="relative p-10 border shadow-2xl bg-gray-50 rounded-3xl border-gray-100">
            {/* Elemento decorativo dorado */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gold-500 rounded-l-3xl"></div>
            
            <svg className="w-12 h-12 mb-6 text-gold-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <Typography variant="h5" component="blockquote" sx={{ fontWeight: 'bold', fontStyle: 'italic', color: '#111827', lineHeight: 1.5 }}>
              "La verdadera odontología no consiste en desgastar y reemplazar sin pensar, sino en diagnosticar con precisión, intervenir con criterio y reconstruir imitando lo que la naturaleza ya resolvió de la mejor manera. <br/><br/>
              <span style={{ color: '#d4af37' }}>Conserva con inteligencia.</span>"
            </Typography>
          </div>

        </div>

      </div>

      {/* --- INICIO DEL MODAL (Explicación Biomimética) --- */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth 
        PaperProps={{ sx: { borderRadius: '24px', overflow: 'hidden' } }}
      >
        <div className="relative bg-white">
          
          {/* Botón X para cerrar */}
          <IconButton 
            onClick={handleClose} 
            sx={{ position: 'absolute', right: 8, top: 8, color: '#9ca3af', zIndex: 10, '&:hover': { color: '#111827' }, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          >
            <CloseIcon />
          </IconButton>

          <DialogContent sx={{ p: 0 }}>
            <div className="flex flex-col md:flex-row">
              
              {/* Columna Izquierda: Texto Explicativo */}
              <div className="flex flex-col justify-center p-8 md:w-1/2">
                <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 'bold', letterSpacing: 1.5 }}>
                  Profundizando en nuestro enfoque
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'extrabold', color: '#111827', mt: 1, mb: 2, lineHeight: 1.1 }}>
                  ¿Qué es la Odontología Biomimética?
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                  {`La biomimética es la ciencia y el arte de restaurar los dientes imitando a la naturaleza.

                  En lugar de usar las técnicas tradicionales que muchas veces requieren desgastar gran parte del diente sano para colocar fundas o pernos invasivos, la biomimética utiliza tecnología de adhesión avanzada.
                  
                  Nos permite tratar caries y fracturas reforzando el diente con materiales que se comportan física y mecánicamente como el tejido natural.
                  
                  El resultado: conservamos tu diente original, evitamos tratamientos de conducto innecesarios y logramos sonrisas mucho más fuertes y duraderas.`}
                </Typography>

                <Button 
                  variant="contained" 
                  href="#turnos" 
                  onClick={handleClose}
                  sx={{ backgroundColor: '#111827', color: 'white', width: 'fit-content', textTransform: 'none', fontWeight: 'bold', borderRadius: '8px', '&:hover': { backgroundColor: '#d4af37', color: '#111827' } }}
                >
                  Agendar una evaluación
                </Button>
              </div>

              {/* Columna Derecha: Video de Instagram */}
              <div className="flex items-center justify-center p-4 bg-gray-100 min-h-[400px] md:w-1/2">
                <iframe
                  src="https://www.instagram.com/reel/DQXi-i-EZQM/embed" // <-- Reemplaza con tu enlace /embed
                  className="w-full h-[500px] md:h-[600px] rounded-xl border border-gray-200 shadow-sm"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="¿Qué es la Odontología Biomimética?"
                ></iframe>
              </div>

            </div>
          </DialogContent>
        </div>
      </Dialog>
      {/* --- FIN DEL MODAL --- */}
    </section>
  );
}