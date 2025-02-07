import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function Header() {
  // Estados
  const [activeSection, setActiveSection] = useState('proyectos');
  // const [theme, setTheme] = useState('light');
  // const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para aplicar el tema
  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.classList.remove('light', 'dark');
  //   if (theme === 'system') {
  //     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  //     root.classList.add(systemTheme);
  //   } else {
  //     root.classList.add(theme);
  //   }
  // }, [theme]);

  // Datos de secciones y temas
  const sections = ['proyectos', 'sobremi', 'contacto'];
  // const themeOptions = [
  //   { id: 'light', icon: Sun, label: 'Claro' },
  //   { id: 'dark', icon: Moon, label: 'Oscuro' },
  //   { id: 'system', icon: Monitor, label: 'Sistema' }
  // ];

  // Función para manejar el clic en una sección
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'contacto') {
      window.location.href = 'mailto:thiagoelias365@gmail.com'; // Reemplaza con tu email
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    // document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Función para cambiar el tema
  // const handleThemeChange = (newTheme: string) => {
  //   setTheme(newTheme);
  //   setShowThemeMenu(false);
  // };

  return (
    <header className={`fixed rounded-full top-3 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white dark:bg-gray-800 shadow-md' : ''}`}>
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-11 items-center">
          {/* Botones de sección */}
          <div className="flex space-x-1 sm:space-x-4">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out
                  ${activeSection === section ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-full transform origin-left transition-transform duration-200 ease-out" />
                )}
              </button>
            ))}
          </div>
          
          {/* Selector de tema */}
          {/* <div className="relative ml-4">
            <button
              onClick={() => setShowThemeMenu(!showThemeMenu)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
            >
              {React.createElement(themeOptions.find(opt => opt.id === theme)?.icon || Sun, { className: "w-5 h-5 text-gray-500 dark:text-gray-400" })}
            </button>

            {showThemeMenu && (
              <div className="absolute p-1 right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ease-out">
                {themeOptions.map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => handleThemeChange(id)}
                    className={`rounded-lg flex items-center w-full px-4 py-2 text-sm ${theme === id ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </nav>
    </header>
  );
}