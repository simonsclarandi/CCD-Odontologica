import { useState } from 'react';
import { Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileOpen(open);
  };

  const navLinks = [
    { text: 'Inicio', href: '#' },
    { text: 'Filosofía', href: '#filosofia' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Experiencia', href: '#experiencia' },
    { text: 'Contacto', href: '#contacto' },
  ];

  const drawerContent = (
    <div className="w-[280px] h-full bg-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <span className="text-xl font-black tracking-tight">CCD<span className="text-gold-500">Odontológica</span></span>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.text} disablePadding>
            <ListItemButton
              component="a"
              href={link.href}
              onClick={toggleDrawer(false)}
              sx={{
                '&:hover': { backgroundColor: '#fef9e7', color: '#d4af37' },
              }}
            >
              <ListItemText
                primary={link.text}
                primaryTypographyProps={{ fontWeight: 'medium', fontSize: '1.1rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="p-4 mt-4">
        <Button
          variant="contained"
          fullWidth
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/5493516768244"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: '#111827',
            color: 'white',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: '8px',
            padding: '12px 24px',
            '&:hover': { backgroundColor: '#d4af37', color: '#111827' }
          }}
        >
          Agendar Consulta
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm">

        {/* Logo Real (Lee el archivo desde la carpeta public) */}
        <div className="flex items-center justify-center overflow-hidden w-20 h-20 md:w-24 md:h-24 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
          <img
            src="/Logo.jpeg"
            alt="CCD Centro Dental"
            className="w-full h-full object-cover scale-[1] mix-blend-multiply transition-all duration-300"
          />
        </div>

        {/* Enlaces de navegación (Ocultos en celulares, visibles en PC) */}
        <div className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="font-medium text-gray-700 transition-colors hover:text-gold-600"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Botón Call to Action - Estilo Premium (solo desktop) */}
        <div className="hidden md:block">
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/5493516768244"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#111827',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '8px 24px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              '&:hover': { backgroundColor: '#d4af37', color: '#111827' }
            }}
          >
            Agendar Consulta
          </Button>
        </div>

        {/* Botón Menú Hamburguesa (solo móvil) */}
        <div className="md:hidden">
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ color: '#111827', '&:hover': { color: '#d4af37' } }}
            aria-label="Abrir menú"
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </div>

      </nav>

      {/* Drawer para menú móvil */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 280 }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}