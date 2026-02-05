import React, { useEffect, useRef } from 'react';
import { useTerminal } from '@/hooks/useTerminal';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';

export const Terminal: React.FC = () => {
  const {
    lines,
    getPrompt,
    executeCommand,
    getCompletions,
    getPreviousCommand,
    getNextCommand,
    showWelcome,
    getCurrentDirectory
  } = useTerminal();
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const hasShownWelcome = useRef(false);

  useEffect(() => {
    if (!hasShownWelcome.current) {
      showWelcome();
      hasShownWelcome.current = true;
    }
  }, [showWelcome]);

  // Auto-scroll to bottom when lines change
  useEffect(() => {
    // Use setTimeout to ensure DOM has updated
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 10);
  }, [lines]);

  const handleTerminalClick = () => {
    const input = document.querySelector('input[type="text"]') as HTMLInputElement;
    input?.focus();
  };

  return (
    <div className="min-h-screen bg-background crt-container crt-flicker">
      {/* Terminal Header */}
      <div className="sticky top-0 z-20 bg-secondary/90 backdrop-blur-sm border-b border-border px-4 py-2 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-warning"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span className="ml-4 text-muted-foreground text-sm terminal-glow-subtle">
          sinomtha@portfolio — bash — 80×24
        </span>
      </div>
      
      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 md:p-6 min-h-[calc(100vh-48px)] overflow-auto cursor-text"
        onClick={handleTerminalClick}
      >
        <div className="max-w-4xl mx-auto font-mono text-sm md:text-base">
          {/* Output Lines */}
          <TerminalOutput lines={lines} />
          
          {/* Input Line */}
          <TerminalInput
            prompt={getPrompt()}
            onExecute={executeCommand}
            getCompletions={getCompletions}
            getPreviousCommand={getPreviousCommand}
            getNextCommand={getNextCommand}
            getCurrentDirectory={getCurrentDirectory}
          />
        </div>
      </div>
      
      {/* Mobile hint */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden text-center text-xs text-muted-foreground terminal-glow-subtle">
        Tap to type • Use keyboard for commands
      </div>
    </div>
  );
};
