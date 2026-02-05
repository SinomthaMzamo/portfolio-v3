import React, { useState, useRef, useEffect } from 'react';
import { FileItem } from '@/data/portfolioData';

interface TerminalInputProps {
  prompt: string;
  onExecute: (command: string) => void;
  getCompletions: (partial: string) => string[];
  getPreviousCommand: () => string;
  getNextCommand: () => string;
  getCurrentDirectory: () => FileItem | null;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  prompt,
  onExecute,
  getCompletions,
  getPreviousCommand,
  getNextCommand,
  getCurrentDirectory
}) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const parts = input.split(' ');
      const command = parts[0];
      const arg = parts.slice(1).join(' ');
      
      // Get completions based on current input
      const currentDir = getCurrentDirectory();
      let completions: string[] = [];
      
      if (parts.length === 1) {
        // Complete commands
        const commands = ['ls', 'cd', 'cat', 'pwd', 'clear', 'help', 'whoami', 'tree'];
        completions = commands.filter(c => c.startsWith(command));
      } else if (['cd', 'cat'].includes(command) && currentDir?.children) {
        // Complete file/directory names
        completions = currentDir.children
          .filter(item => {
            if (command === 'cd' && item.type !== 'directory') return false;
            if (command === 'cat' && item.type !== 'file') return false;
            return item.name.toLowerCase().startsWith(arg.toLowerCase());
          })
          .map(item => item.name);
      }
      
      if (completions.length === 1) {
        // Single completion - apply it
        if (parts.length === 1) {
          setInput(completions[0] + ' ');
        } else {
          setInput(`${command} ${completions[0]}`);
        }
        setShowSuggestions(false);
      } else if (completions.length > 1) {
        // Multiple completions - show them
        setSuggestions(completions);
        setSelectedSuggestion(0);
        setShowSuggestions(true);
      }
      return;
    }
    
    if (e.key === 'Enter') {
      if (showSuggestions && suggestions.length > 0) {
        // Apply selected suggestion
        const parts = input.split(' ');
        if (parts.length === 1) {
          setInput(suggestions[selectedSuggestion] + ' ');
        } else {
          setInput(`${parts[0]} ${suggestions[selectedSuggestion]}`);
        }
        setShowSuggestions(false);
      } else {
        onExecute(input);
        setInput('');
      }
      return;
    }
    
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions) {
        setSelectedSuggestion(prev => Math.max(0, prev - 1));
      } else {
        const prevCommand = getPreviousCommand();
        if (prevCommand) setInput(prevCommand);
      }
      return;
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions) {
        setSelectedSuggestion(prev => Math.min(suggestions.length - 1, prev + 1));
      } else {
        const nextCommand = getNextCommand();
        setInput(nextCommand);
      }
      return;
    }
    
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      return;
    }
    
    // Hide suggestions on other keys
    if (showSuggestions && !['Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) {
      setShowSuggestions(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setShowSuggestions(false);
  };

  return (
    <div className="mt-2 relative">
      <div className="flex items-start gap-1 flex-wrap">
        <span className="text-terminal-directory terminal-glow-subtle shrink-0">
          {prompt}
        </span>
        <div className="flex-1 min-w-0 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-foreground terminal-glow-subtle outline-none font-mono caret-primary"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
          />
          <span 
            className="absolute top-0 left-0 pointer-events-none text-transparent"
            style={{ width: `${input.length}ch` }}
          >
            {input}
            <span className="cursor-blink text-primary ml-0.5 font-bold">█</span>
          </span>
        </div>
      </div>
      
      {/* Tab completion suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="mt-2 ml-0 md:ml-4 p-2 bg-secondary/80 border border-border rounded">
          <div className="text-xs text-muted-foreground mb-2">
            Tab completions ({suggestions.length}):
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <span
                key={suggestion}
                className={`px-2 py-1 text-sm ${
                  index === selectedSuggestion
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground'
                }`}
              >
                {suggestion}
              </span>
            ))}
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            ↑↓ to select • Enter to apply • Esc to cancel
          </div>
        </div>
      )}
    </div>
  );
};
