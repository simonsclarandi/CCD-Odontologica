import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Hero() {
  return (
    <section 
      // Quitamos lg:items-center y lg:text-center de aquí
      className="relative flex flex-col justify-center min-h-[80vh] px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/Hero-background.webp')" }}
    >
      
      {/* Contenedor general: Se centra en la pantalla con lg:mx-auto, pero alinea sus hijos a la izquierda por defecto */}
      <div className="relative z-10 w-full max-w-7xl lg:mx-auto">
        
        {/* Título: Aplicamos lg:text-center SOLO aquí */}
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl lg:text-center">
          No todos los tratamientos <br className="hidden md:block" />
          <span className="text-gold-500">son iguales.</span>
        </h1>
        
        {/* Párrafo: lg:mx-auto centra la caja del párrafo, lg:text-center centra el texto interior */}
        <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-800 md:text-xl lg:mx-auto lg:text-center">
          En Consalvi Centro Dental evitamos pernos y coronas innecesarias mediante odontología biomimética.
          <br className="mb-2" />
          <span className="block font-bold">Conservamos tu diente, no lo destruimos.</span>
        </p>

        {/* --- DESDE AQUÍ TODO VUELVE A LA IZQUIERDA NATURALMENTE --- */}

        {/* Botón */}
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <Button 
            variant="contained"
            component="a"
            href='/#turnos'
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
              '&:hover': { backgroundColor: '#111827', color: '#d4af37', borderWidth: '2px' },
              transition: 'all 0.3s ease'
            }}
          >
            Agendar Consulta
          </Button>
        </div>

        {/* Viñetas */}
        <div className="mt-8 text-left">
          <ul className="space-y-2 text-sm font-bold tracking-widest text-gray-600">
            <li>✔️ Atención en Córdoba</li>
            <li>✔️ Tecnología moderna</li>
            <li>✔️ Enfoque conservador y estético</li>
          </ul>
        </div>

      </div>
    </section>
  );
}