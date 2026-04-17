import { IconButton, Typography, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactFooter() {
  return (
    <footer id="contacto" className="bg-[#111827] text-white pt-20 pb-10">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Grilla Principal del Footer */}
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Bloque 1: Identidad */}
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tight">
              CCD<span className="text-gold-500">Odontológica</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Centro Dental Cristian Consalvo. <br/>
              Odontología basada en criterio biomimético. Arte, ciencia y tecnología al servicio de tu salud bucal.
            </p>
            <div className="flex gap-2">
              <IconButton 
                component="a" 
                href="https://www.instagram.com/odontologia.ccd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ color: '#d4af37', '&:hover': { bgcolor: '#ffffff10' } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton  
                component="a" 
                href="https://www.facebook.com/odocon/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ color: '#d4af37', '&:hover': { bgcolor: '#ffffff10' } }}>
                <FacebookIcon />
              </IconButton>
            </div>
          </div>

          {/* Bloque 2: Navegación */}
          <div>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4, borderLeft: '4px solid #d4af37', pl: 2 }}>
              Navegación
            </Typography>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Inicio</a></li>
              <li><a href="#filosofia" className="hover:text-gold-500 transition-colors">Filosofía</a></li>
              <li><a href="#servicios" className="hover:text-gold-500 transition-colors">Servicios</a></li>
              <li><a href="#experiencia" className="hover:text-gold-500 transition-colors">Diferenciales</a></li>
            </ul>
          </div>

          {/* Bloque 3: Tratamientos Clave */}
          <div>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4, borderLeft: '4px solid #d4af37', pl: 2 }}>
              Tratamientos
            </Typography>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Restauraciones Biomiméticas</li>
              <li>Rehabilitación Oral</li>
              <li>Implantes Dentales</li>
              <li>Estética de Alta Gama</li>
            </ul>
          </div>

          {/* Bloque 4: Contacto */}
          <div>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 4, borderLeft: '4px solid #d4af37', pl: 2 }}>
              Contacto
            </Typography>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <PlaceIcon sx={{ color: '#d4af37', fontSize: 20 }} />
                <span>
                  <a href="https://maps.app.goo.gl/D4szRbJi9mQ93UrV7" target="_blank" rel="noopener noreferrer">
                    Córdoba Capital, Argentina <br />
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon sx={{ color: '#d4af37', fontSize: 20 }} />
                <span>+54 351 335 9417</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon sx={{ color: '#d4af37', fontSize: 20 }} />
                <span>info@centroconsalvo.com</span>
              </li>
            </ul>
          </div>

        </div>

        <Divider sx={{ bgcolor: '#374151', mb: 6 }} />

        {/* Créditos Finales */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} CCD Centro Dental - Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}