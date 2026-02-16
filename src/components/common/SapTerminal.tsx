"use client";

import { Flex, Text, RevealFx, Column, SmartImage } from "@/once-ui/components";
import { useEffect, useState } from "react";

export const SapTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    // Fast simulated log generation
    const interval = setInterval(() => {
      setOrderCount(prev => prev + 1);
      const timestamp = new Date().toLocaleTimeString('pt-BR', { hour12: false });
      const orderId = Math.floor(Math.random() * 10000) + 4000;
      
      const newLog = `[${timestamp}] INFO: Order #${orderId} created successfully via SAP GUI. Processing time: 0.8s`;
      
      setLogs((prev) => {
        const newLogs = [...prev, newLog];
        return newLogs.slice(-8); // Keep last 8 lines
      });
    }, 150); // Very fast updates to simulate speed

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      fillWidth
      background="surface"
      border="neutral-medium"
      radius="l"
      overflow="hidden"
      direction="column"
      style={{ minHeight: "350px", boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
    >
      {/* SAP GUI Header Simulation */}
      <Flex
        fillWidth
        paddingX="s"
        paddingY="12"
        gap="8"
        background="neutral-medium"
        vertical="center"
        borderBottom="neutral-medium"
      >
        <Flex gap="4">
           {/* Classic Windows Controls */}
           <div style={{ width: 12, height: 12, background: '#ccc', border: '1px solid #999', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{width: 8, height: 2, background: 'black'}}></div></div>
           <div style={{ width: 12, height: 12, background: '#ccc', border: '1px solid #999', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{width: 8, height: 8, border: '1px solid black'}}></div></div>
           <div style={{ width: 12, height: 12, background: '#f88', border: '1px solid #999', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{width: 8, height: 8, position: 'relative'}}><div style={{position: 'absolute', top: 0, left: 3, width: 2, height: 8, background: 'black', transform: 'rotate(45deg)'}}></div><div style={{position: 'absolute', top: 0, left: 3, width: 2, height: 8, background: 'black', transform: 'rotate(-45deg)'}}></div></div></div>
        </Flex>
        <Flex
          flex={1}
          paddingX="s"
          vertical="center"
        >
          <Text variant="label-default-s" style={{ color: '#333', fontWeight: 'bold' }}>SAP Business One - Order Generator Bot [Running]</Text>
        </Flex>
      </Flex>

      {/* Terminal/Log Content */}
      <Column
        fillWidth
        flex={1}
        padding="m"
        background="neutral-strong"
        gap="4"
        style={{ fontFamily: "Consolas, monospace", fontSize: '12px' }}
      > 
        <Flex fillWidth horizontal="space-between" marginBottom="8">
           <Text variant="label-default-s" onBackground="success-medium">STATUS: RUNNING</Text>
           <Text variant="label-default-s" onBackground="brand-medium">ORDERS PROCESSED: {orderCount}</Text>
        </Flex>
        <div style={{ width: '100%', height: '1px', background: '#333', marginBottom: '8px' }}></div>

        {logs.map((log, index) => (
          <RevealFx key={index} translateY="2">
            <Text variant="code-default-s" onBackground="neutral-weak" style={{ opacity: 0.8, color: log.includes('INFO') ? '#4caf50' : '#ccc' }}>
              {log}
            </Text>
          </RevealFx>
        ))}
        <Text variant="code-default-s" onBackground="brand-medium" className="blinking-cursor">_</Text>
      </Column>
      <style jsx global>{`
        .blinking-cursor {
          animation: blink 0.5s step-end infinite;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </Flex>
  );
};
