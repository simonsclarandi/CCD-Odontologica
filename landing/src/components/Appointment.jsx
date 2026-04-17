import { useState } from 'react';
import { TextField, Button, MenuItem, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MapIcon from '@mui/icons-material/Map';

export default function Appointment() {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  // Lista de servicios para el menú desplegable
  const services = [
    'Consulta General',
    'Cirugía',
    'Odontopediatría',
    'Ortopedia / Ortodoncia',
    'Estética Dental',
    'Implantes',
    'Endodoncia',
    'Blanqueamiento',
    'Otro'
  ];

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para enviar a WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Número de destino (el de la clínica)
    const phoneNumber = "543513359417"; 

    // Armamos el mensaje que va a llegar al WhatsApp
    const text = `Hola clínica CCD. Me gustaría agendar una consulta.%0A%0A*Mis datos:*%0A👤 Nombre: ${formData.name}%0A📱 Teléfono: ${formData.phone}%0A🦷 Tratamiento de interés: ${formData.service}%0A%0A*Mensaje:*%0A${formData.message}`;

    // Creamos el link y abrimos una nueva pestaña
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  // Estilos personalizados para los inputs de Material UI (para que brillen en dorado al hacer clic)
  const textFieldStyles = {
    mb: 3,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': { borderColor: '#d4af37' },
    },
    '& label.Mui-focused': { color: '#d4af37' },
  };

  return (
    <section id="turnos" className="py-24 bg-white border-t border-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-gold-600">
            Da el primer paso
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Agendá tu consulta hoy
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Dejanos tus datos y el tratamiento de tu interés. Te responderemos a la brevedad para coordinar tu turno.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Columna Izquierda: Mapa e Información */}
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-hidden shadow-xl rounded-2xl border border-gray-100 h-[300px] lg:h-auto relative">
              {/* iFrame de Google Maps (Centrado en Córdoba Capital - Reemplazar la URL en src por la del mapa real) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13622.106655292706!2d-64.18551185729932!3d-31.399612588247123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329844d688616f%3A0xb59d9e661b755b98!2sConsalvi%20Centro%20Dental!5e0!3m2!1ses-419!2sar!4v1776385795783!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de CCD Odontológica"
              ></iframe>
            </div>
            
            <div className="mt-6 text-center lg:text-left">
              <Button 
                variant="text" 
                startIcon={<MapIcon />}
                href="https://maps.app.goo.gl/D4szRbJi9mQ93UrV7" // Link directo a la app de Google Maps
                target="_blank"
                sx={{ color: '#111827', fontWeight: 'bold', textTransform: 'none', '&:hover': { color: '#d4af37' } }}
              >
                Abrir en la aplicación de Google Maps
              </Button>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="p-8 shadow-2xl bg-gray-50 rounded-3xl sm:p-10">
            <form onSubmit={handleSubmit}>
              
              <TextField
                fullWidth
                required
                label="Nombre completo"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              />

              <TextField
                fullWidth
                required
                label="Teléfono / WhatsApp"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              />

              <TextField
                fullWidth
                select
                required
                label="Tratamiento de interés"
                name="service"
                value={formData.service}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              >
                {services.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Mensaje o consulta breve (Opcional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                sx={textFieldStyles}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: '#111827',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  padding: '12px 0',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  mt: 2,
                  '&:hover': { backgroundColor: '#d4af37', color: '#111827' },
                  transition: 'all 0.3s ease'
                }}
              >
                Enviar por WhatsApp
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}