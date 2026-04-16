import { Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Philosophy() {
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
    </section>
  );
}