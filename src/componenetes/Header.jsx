import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function Header() {
  const [activeSection, setActiveSection] = useState('experiencia');
  const [theme, setTheme] = useState('light');
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'sobremi', label: 'Sobre mí' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const themeOptions = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor },
  ];

  const ThemeIcon = themeOptions.find(opt => opt.id === theme)?.icon || Sun;

  return (
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16 items-center">
            <div className="flex space-x-1 sm:space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out
                    ${activeSection === section.id 
                      ? 'text-blue-500' 
                      : 'text-gray-500 hover:text-gray-700'
                    }
                  `}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full 
                        transform origin-left transition-transform duration-200 ease-out"
                      style={{ transform: 'scaleX(1)' }}
                    />
                  )}
                </button>
              ))}
            </div>
            
            <div className="relative ml-4">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              >
                <ThemeIcon className="w-5 h-5 text-gray-500" />
              </button>

              {showThemeMenu && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 
                    ring-black ring-opacity-5 transform transition-all duration-200 ease-out"
                >
                  <div className="py-1" role="menu">
                    {themeOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => {
                            setTheme(option.id);
                            setShowThemeMenu(false);
                          }}
                          className={`
                            ${theme === option.id ? 'bg-gray-50 text-gray-900' : 'text-gray-700'}
                            flex items-center w-full px-4 py-2 text-sm hover:bg-gray-50 
                            transition-colors duration-150
                          `}
                          role="menuitem"
                        >
                          <Icon className="w-4 h-4 mr-3" />
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

  );
}