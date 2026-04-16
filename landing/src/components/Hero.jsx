import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 text-center bg-gray-50">
      
      {/* NOTA: Para poner una imagen real de fondo luego, cambia el bg-gray-50 de arriba por:
        bg-[url('/foto-consultorio.jpg')] bg-cover bg-center
      */}

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Mantenemos el slogan del logo como un detalle sutil */}
        <span className="block mb-4 text-sm font-bold tracking-widest uppercase text-gold-600">
          Arte, Ciencia, Tecnología
        </span>
        
        {/* Título de alto impacto basado en el copy de marketing */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Más que odontología, <br className="hidden md:block" />
          <span className="text-gold-500">criterio biomimético.</span>
        </h1>
        
        {/* Párrafo adaptado de la propuesta */}
        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600 md:text-xl">
          No trabajamos desde protocolos repetidos ni soluciones invasivas por costumbre. 
          Diagnosticamos con precisión e intervenimos con criterio: <strong>conservar antes que reemplazar.</strong>
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<CalendarMonthIcon />}
            sx={{ 
              backgroundColor: '#d4af37', 
              color: '#111827',
              padding: '14px 36px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '12px',
              '&:hover': { backgroundColor: '#111827', color: '#d4af37', borderWidth: '2px' }
            }}
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
}