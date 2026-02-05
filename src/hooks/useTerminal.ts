import { useState, useCallback, useRef } from 'react';
import { FILE_SYSTEM, FileItem, HELP_TEXT, WHOAMI_TEXT, ASCII_ARTS } from '@/data/portfolioData';

export interface TerminalLine {
  id: number;
  type: 'input' | 'output' | 'error' | 'ascii';
  content: string;
  prompt?: string;
}

export const useTerminal = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentPath, setCurrentPath] = useState<string[]>(['~']);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const lineIdRef = useRef(0);

  const getPrompt = useCallback(() => {
    return `sinomtha@portfolio:${currentPath.join('/')}$`;
  }, [currentPath]);

  const getCurrentDirectory = useCallback((): FileItem | null => {
    let current: FileItem | null = FILE_SYSTEM;
    
    for (let i = 1; i < currentPath.length; i++) {
      const child = current?.children?.find(c => c.name === currentPath[i]);
      if (child && child.type === 'directory') {
        current = child;
      } else {
        return null;
      }
    }
    
    return current;
  }, [currentPath]);

  const addLine = useCallback((type: TerminalLine['type'], content: string, prompt?: string) => {
    const newLine: TerminalLine = {
      id: lineIdRef.current++,
      type,
      content,
      prompt
    };
    setLines(prev => [...prev, newLine]);
  }, []);

  const getCompletions = useCallback((partial: string): string[] => {
    const parts = partial.split(' ');
    const command = parts[0];
    const arg = parts.slice(1).join(' ');
    
    const commands = ['ls', 'cd', 'cat', 'pwd', 'clear', 'help', 'whoami', 'tree'];
    
    if (parts.length === 1) {
      return commands.filter(c => c.startsWith(command));
    }
    
    if (['cd', 'cat'].includes(command)) {
      const currentDir = getCurrentDirectory();
      if (!currentDir?.children) return [];
      
      const matchingItems = currentDir.children.filter(item => {
        if (command === 'cd' && item.type !== 'directory') return false;
        if (command === 'cat' && item.type !== 'file') return false;
        return item.name.toLowerCase().startsWith(arg.toLowerCase());
      });
      
      return matchingItems.map(item => `${command} ${item.name}`);
    }
    
    return [];
  }, [getCurrentDirectory]);

  const executeCommand = useCallback((input: string) => {
    const trimmedInput = input.trim();
    addLine('input', trimmedInput, getPrompt());
    
    if (trimmedInput) {
      setCommandHistory(prev => [...prev, trimmedInput]);
      setHistoryIndex(-1);
    }
    
    const parts = trimmedInput.split(/\s+/);
    const command = parts[0]?.toLowerCase();
    const args = parts.slice(1).join(' ');
    
    switch (command) {
      case 'ls': {
        const currentDir = getCurrentDirectory();
        if (!currentDir?.children) {
          addLine('error', 'ls: cannot access directory');
          break;
        }
        
        const listing = currentDir.children.map(item => {
          if (item.type === 'directory') {
            return `📁 ${item.name}/`;
          }
          return `📄 ${item.name}`;
        }).join('\n');
        
        addLine('output', listing);
        break;
      }
      
      case 'cd': {
        if (!args || args === '~') {
          setCurrentPath(['~']);
          break;
        }
        
        if (args === '..') {
          if (currentPath.length > 1) {
            setCurrentPath(prev => prev.slice(0, -1));
          }
          break;
        }
        
        const currentDir = getCurrentDirectory();
        const targetDir = currentDir?.children?.find(
          c => c.name === args && c.type === 'directory'
        );
        
        if (targetDir) {
          // Show ASCII art for the section
          const sectionArt = ASCII_ARTS[args as keyof typeof ASCII_ARTS];
          if (sectionArt) {
            addLine('ascii', sectionArt);
          }
          setCurrentPath(prev => [...prev, args]);
        } else {
          addLine('error', `cd: ${args}: No such directory`);
        }
        break;
      }
      
      case 'cat': {
        if (!args) {
          addLine('error', 'cat: missing file operand');
          break;
        }
        
        const currentDir = getCurrentDirectory();
        const file = currentDir?.children?.find(
          c => c.name === args && c.type === 'file'
        );
        
        if (file && file.content) {
          addLine('ascii', ASCII_ARTS.cat);
          addLine('output', file.content);
        } else {
          addLine('error', `cat: ${args}: No such file`);
        }
        break;
      }
      
      case 'pwd': {
        addLine('output', currentPath.join('/'));
        break;
      }
      
      case 'clear': {
        setLines([]);
        break;
      }
      
      case 'help': {
        addLine('ascii', ASCII_ARTS.help);
        addLine('output', HELP_TEXT);
        break;
      }
      
      case 'welcome': {
        addLine('ascii', ASCII_ARTS.welcome);
        addLine('output', `
╔═══════════════════════════════════════════════════════════════════════╗
║         FULL-STACK DEVELOPER & CLOUD ENGINEER                         ║
║   Building incredible user interfaces that leave lasting impressions  ║
╚═══════════════════════════════════════════════════════════════════════╝

Welcome to my interactive terminal portfolio!

Type 'help' for available commands, or start exploring with 'ls'.

💡 Quick start:
   • ls                   - List available sections
   • cd projects          - Browse my projects
   • cat bio.txt          - Learn about me
   • help                 - See all commands

`);
        break;
      }
      
      case 'whoami': {
        addLine('output', WHOAMI_TEXT);
        break;
      }
      
      case 'tree': {
        const buildTree = (item: FileItem, prefix: string = ''): string => {
          let result = '';
          if (item.children) {
            item.children.forEach((child, index) => {
              const isLast = index === item.children!.length - 1;
              const connector = isLast ? '└── ' : '├── ';
              const icon = child.type === 'directory' ? '📁' : '📄';
              result += `${prefix}${connector}${icon} ${child.name}${child.type === 'directory' ? '/' : ''}\n`;
              if (child.type === 'directory' && child.children) {
                const newPrefix = prefix + (isLast ? '    ' : '│   ');
                result += buildTree(child, newPrefix);
              }
            });
          }
          return result;
        };
        
        const treeOutput = `${currentPath.join('/')}/\n${buildTree(getCurrentDirectory()!)}`;
        addLine('output', treeOutput);
        break;
      }
      
      case '': {
        break;
      }
      
      default: {
        addLine('error', `${command}: command not found. Type 'help' for available commands.`);
      }
    }
  }, [addLine, getPrompt, getCurrentDirectory, currentPath]);

  const getPreviousCommand = useCallback(() => {
    if (commandHistory.length === 0) return '';
    
    const newIndex = historyIndex === -1 
      ? commandHistory.length - 1 
      : Math.max(0, historyIndex - 1);
    
    setHistoryIndex(newIndex);
    return commandHistory[newIndex] || '';
  }, [commandHistory, historyIndex]);

  const getNextCommand = useCallback(() => {
    if (historyIndex === -1) return '';
    
    const newIndex = historyIndex + 1;
    if (newIndex >= commandHistory.length) {
      setHistoryIndex(-1);
      return '';
    }
    
    setHistoryIndex(newIndex);
    return commandHistory[newIndex] || '';
  }, [commandHistory, historyIndex]);

  const showWelcome = useCallback(() => {
    addLine('ascii', ASCII_ARTS.welcome);
    addLine('output', `
╔═══════════════════════════════════════════════════════════════════════╗
║         FULL-STACK DEVELOPER & CLOUD ENGINEER                         ║
║   Building incredible user interfaces that leave lasting impressions  ║
╚═══════════════════════════════════════════════════════════════════════╝

Welcome to my interactive terminal portfolio!

Type 'help' for available commands, or start exploring with 'ls'.

💡 Quick start:
   • ls                   - List available sections
   • cd projects          - Browse my projects
   • cat bio.txt          - Learn about me
   • help                 - See all commands

`);
  }, [addLine]);

  return {
    lines,
    currentPath,
    getPrompt,
    executeCommand,
    getCompletions,
    getPreviousCommand,
    getNextCommand,
    showWelcome,
    getCurrentDirectory
  };
};
