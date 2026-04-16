import { Fab, Zoom, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FloatingWhatsApp() {
  return (
    <Tooltip
      title="Escribinos por WhatsApp"
      placement="left"
      arrow
      TransitionComponent={Zoom}
    >
      <Fab
        component="a"
        href="https://wa.me/5493516768244"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          backgroundColor: '#25D366',
          color: 'white',
          width: 64,
          height: 64,
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#128C7E',
            transform: 'scale(1.1)',
            boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </Fab>
    </Tooltip>
  );
}
