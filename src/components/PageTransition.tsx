"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/styles/transitions.module.scss';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  
  useEffect(() => {
    // Se o pathname mudar, inicia a transição de saída
    setTransitionStage('fadeOut');
    
    const timeout = setTimeout(() => {
      // Após a transição de saída, atualiza o conteúdo e inicia a transição de entrada
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, 300); // Duração da transição
    
    return () => clearTimeout(timeout);
  }, [pathname, children]);
  
  // Classes CSS baseadas no estágio da transição
  const transitionClasses = {
    fadeIn: `${styles.pageTransition} ${styles.pageTransitionEnterActive}`,
    fadeOut: `${styles.pageTransition} ${styles.pageTransitionExitActive}`,
  };
  
  return (
    <div className={transitionClasses[transitionStage as keyof typeof transitionClasses]}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;

