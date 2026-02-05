import React from 'react';
import { TerminalLine } from '@/hooks/useTerminal';

interface TerminalOutputProps {
  lines: TerminalLine[];
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ lines }) => {
  return (
    <div className="space-y-1">
      {lines.map((line) => (
        <div key={line.id} className="leading-relaxed">
          {line.type === 'input' && (
            <div className="flex flex-wrap gap-1">
              <span className="text-terminal-directory terminal-glow-subtle shrink-0">
                {line.prompt}
              </span>
              <span className="text-foreground terminal-glow-subtle break-all">
                {line.content}
              </span>
            </div>
          )}
          
          {line.type === 'output' && (
            <pre className="text-foreground terminal-glow-subtle whitespace-pre-wrap break-words font-mono text-sm md:text-base overflow-x-auto">
              {line.content}
            </pre>
          )}
          
          {line.type === 'error' && (
            <pre className="text-destructive whitespace-pre-wrap break-words font-mono text-sm md:text-base">
              {line.content}
            </pre>
          )}
          
          {line.type === 'ascii' && (
            <pre className="ascii-art text-[6px] sm:text-[8px] md:text-sm leading-none overflow-x-auto whitespace-pre">
              {line.content}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};
