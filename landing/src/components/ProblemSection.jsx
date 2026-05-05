import { useState } from 'react';
import { Typography, Dialog, DialogContent, IconButton, Button } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function ProblemSection() {
  // Memoria para el modal del video
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const quotes = [
    "Hay que hacer un perno y corona.",
    "El diente ya no se puede salvar.",
    "Es lo que se hace siempre."
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Título de advertencia */}
        <div className="mb-12 text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Prestá mucha atención
          </h2>
          <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 'bold', letterSpacing: 2 }}>
            Si te dijeron ...
          </Typography>
        </div>

        {/* Las frases que asustan al paciente */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          {quotes.map((quote, index) => (
            <div key={index} className="relative p-8 border border-gray-800 bg-gray-800/50 rounded-2xl">
              <FormatQuoteIcon sx={{ color: '#4b5563', fontSize: 40, position: 'absolute', top: 16, left: 16, opacity: 0.3 }} />
              <p className="relative z-10 mt-4 text-xl font-medium text-center text-gray-300">
                "{quote}"
              </p>
            </div>
          ))}
        </div>

        {/* El Remate y Cierre (La luz de esperanza) */}
        <div className="max-w-3xl p-8 mx-auto text-center bg-white shadow-xl rounded-2xl">
          <p className="mb-2 text-xl font-bold text-gray-900">
            No siempre es la única opción. <br className="md:hidden" />
            <span className="font-normal text-red-600">Muchas veces se desgasta el diente innecesariamente.</span>
          </p>
          
          <div className="w-16 h-1 mx-auto my-6 rounded-full bg-gold-500"></div>
          
          <p className="mb-6 text-lg text-gray-600">
            Hoy existe una <strong className="text-gray-900">alternativa mucho más conservadora</strong> que prioriza salvar tu estructura dental antes de reemplazarla.
          </p>

          {/* Botón para abrir el video */}
          <Button 
            onClick={handleOpen}
            variant="contained" 
            size="large"
            startIcon={<PlayArrowIcon />}
            sx={{ 
              backgroundColor: '#111827', 
              color: 'white', 
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '10px 24px',
              '&:hover': { backgroundColor: '#d4af37', color: '#111827' }
            }}
          >
            Mirá nuestra explicación
          </Button>
        </div>

      </div>

      {/* --- INICIO DEL MODAL DEL VIDEO --- */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="sm" // Lo hacemos un poco más angosto porque es solo el video
        fullWidth 
        PaperProps={{ sx: { borderRadius: '24px', overflow: 'hidden', backgroundColor: 'transparent', boxShadow: 'none' } }}
      >
        <div className="relative flex justify-center w-full">
          
          {/* Botón X para cerrar (por fuera del video para que no moleste) */}
          <IconButton 
            onClick={handleClose} 
            sx={{ position: 'absolute', right: 0, top: -40, color: '#fff', zIndex: 10, backgroundColor: 'rgba(0,0,0,0.5)', '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' } }}
          >
            <CloseIcon />
          </IconButton>
            
          {/* Video de Instagram */}
          <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.instagram.com/reel/DU6irYGkUJB/embed" /* <-- AQUÍ ESTÁ TU VIDEO LIMPIO */
              className="w-full h-[600px] md:h-[700px]"
              frameBorder="0"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
              title="Explicación sobre perno y corona"
            ></iframe>
          </div>
            
        </div>
        
      </Dialog>
      {/* --- FIN DEL MODAL --- */}

    </section>
  );
}