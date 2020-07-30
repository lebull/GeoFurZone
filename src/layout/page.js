import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Page = ({children}) => 
  <div>
    <Header />
      {children}
    <Footer />
  </div>