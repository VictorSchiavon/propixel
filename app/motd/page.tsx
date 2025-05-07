'use client';

import { useState } from 'react';
import Image from 'next/image';

const styleCodes = [
  { label: '§l', code: '§l', name: 'Negrito' },
  { label: '§o', code: '§o', name: 'Itálico' },
  { label: '§n', code: '§n', name: 'Sublinhado' },
  { label: '§m', code: '§m', name: 'Tachado' },
  { label: '§r', code: '§r', name: 'Reset' },
];

const colorCodes = [
  { code: '§0', color: '#000000' }, { code: '§1', color: '#0000AA' },
  { code: '§2', color: '#00AA00' }, { code: '§3', color: '#00AAAA' },
  { code: '§4', color: '#AA0000' }, { code: '§5', color: '#AA00AA' },
  { code: '§6', color: '#FFAA00' }, { code: '§7', color: '#AAAAAA' },
  { code: '§8', color: '#555555' }, { code: '§9', color: '#5555FF' },
  { code: '§a', color: '#55FF55' }, { code: '§b', color: '#55FFFF' },
  { code: '§c', color: '#FF5555' }, { code: '§d', color: '#FF55FF' },
  { code: '§e', color: '#FFFF55' }, { code: '§f', color: '#FFFFFF' },
];

function parseMotd(text: string): JSX.Element[] {
  const parts: JSX.Element[] = [];
  const colorMap: { [code: string]: string } = Object.fromEntries(
    colorCodes.map(({ code, color }) => [code[1], color])
  );
  const styleMap: { [code: string]: React.CSSProperties } = {
    l: { fontWeight: 'bold' },
    o: { fontStyle: 'italic' },
    n: { textDecoration: 'underline' },
    m: { textDecoration: 'line-through' },
    r: {} // reset
  };

  let i = 0;
  let style: React.CSSProperties = {};
  let color: string = '#FFFFFF';

  while (i < text.length) {
    if (text[i] === '§' && i + 1 < text.length) {
      const code = text[i + 1];
      i += 2;
      if (colorMap[code]) {
        color = colorMap[code];
        style = { ...style, color };
      } else if (styleMap[code]) {
        if (code === 'r') {
          style = {};
          color = '#FFFFFF';
        } else {
          style = { ...style, ...styleMap[code] };
        }
      }
    } else {
      let chunk = '';
      while (i < text.length && text[i] !== '§') {
        chunk += text[i++];
      }
      parts.push(<span style={style} key={parts.length}>{chunk}</span>);
    }
  }

  return parts;
}

export default function MotdPage() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [activeLine, setActiveLine] = useState<'line1' | 'line2'>('line1');

  const insertCode = (code: string) => {
    if (activeLine === 'line1') {
      setLine1((prev) => prev + code);
    } else {
      setLine2((prev) => prev + code);
    }
  };

  const handleCopy = () => {
    const motd = line2 ? `${line1}\\n${line2}` : line1;
    navigator.clipboard.writeText(motd);
    alert('Código da MOTD copiado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-10">Gerador de MOTD - RazeHost</h1>

      <div className="bg-[#1e1e1e] rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-300 font-medium">Preview da MOTD</span>
          <button className="bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-600">New</button>
        </div>

        <div className="flex items-center bg-[url('/minecraft-bg.png')] bg-cover border border-neutral-700 rounded overflow-hidden">
          <Image src="/server-icon.png" alt="Server Icon" width={64} height={64} />
          <div className="flex-1 py-2 px-4 text-sm font-mono whitespace-pre-wrap">
            <div>{parseMotd(line1)}</div>
            <div>{parseMotd(line2)}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block mb-1 text-sm">Linha 1:</label>
            <input
              value={line1}
              onFocus={() => setActiveLine('line1')}
              onChange={(e) => setLine1(e.target.value)}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 mb-3"
              placeholder="§aServidor RazeHost"
            />
            <label className="block mb-1 text-sm">Linha 2:</label>
            <input
              value={line2}
              onFocus={() => setActiveLine('line2')}
              onChange={(e) => setLine2(e.target.value)}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-700"
              placeholder="§7A melhor hospedagem do Brasil!"
            />
          </div>

          <div>
            <p className="text-sm mb-2">Códigos de Estilo:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {styleCodes.map(({ label, code }) => (
                <button
                  key={label}
                  onClick={() => insertCode(code)}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                >
                  {label}
                </button>
              ))}
            </div>

            <p className="text-sm mb-2">Códigos de Cor:</p>
            <div className="flex flex-wrap gap-2">
              {colorCodes.map(({ code, color }) => (
                <button
                  key={code}
                  onClick={() => insertCode(code)}
                  className="w-8 h-8 rounded text-xs font-bold border border-neutral-700"
                  style={{ backgroundColor: color }}
                >
                  {code.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button onClick={handleCopy} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded">
            Get your MOTD
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
            In-Game Preview
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
