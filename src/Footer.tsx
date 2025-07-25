import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-900 text-white py-10 mt-10">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 px-4">
      {/* Logo/Initials */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 p-1 shadow-lg mb-2 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
          <img src="/alianda.jpeg" alt="Alianda Rollins" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      {/* Name */}
      <div className="text-xl font-semibold tracking-wide mb-1">Alianda Rollins Maloba</div>
      <div className="text-slate-300 italic text-sm mb-2 text-center max-w-md">“Compassionate, committed, and curious — pursuing a future in advanced nursing and clinical research.”</div>
      {/* Social Icons */}
      <div className="flex flex-row gap-6 text-2xl mb-2">
        <a href="https://www.linkedin.com/in/alianda-rollins" target="_blank" rel="noopener noreferrer" title="LinkedIn"
          className="rounded-full border-2 border-blue-700 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800 p-2 flex items-center justify-center hover:scale-110 hover:border-blue-400 hover:bg-blue-800 transition-all duration-200 shadow-lg">
          <Linkedin size={24} className="text-blue-300" />
        </a>
        <a href="mailto:rollinsace11534@gmail.com" title="Email"
          className="rounded-full border-2 border-indigo-700 bg-gradient-to-br from-indigo-900 via-indigo-700 to-blue-800 p-2 flex items-center justify-center hover:scale-110 hover:border-indigo-400 hover:bg-indigo-800 transition-all duration-200 shadow-lg">
          <Mail size={24} className="text-indigo-200" />
        </a>
        <a href="https://wa.me/254115288203" target="_blank" rel="noopener noreferrer" title="WhatsApp"
          className="rounded-full border-2 border-green-700 bg-gradient-to-br from-green-900 via-green-700 to-emerald-800 p-2 flex items-center justify-center hover:scale-110 hover:border-green-400 hover:bg-green-800 transition-all duration-200 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-200">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.51 5.8L0 24l6.36-1.67A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.25-6.18-3.48-8.52zM12 22c-1.85 0-3.62-.5-5.14-1.37l-.37-.21-3.77.99 1-3.67-.24-.38A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.62-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
          </svg>
        </a>
      </div>
      {/* Copyright */}
      <div className="text-slate-400 text-xs mt-2 text-center">
        © {new Date().getFullYear()} Alianda Rollins Maloba. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 