'use client';

import { useState } from 'react';
import Image from 'next/image';

const formatCodes = [
  { label: '§l', code: '§l' },
  { label: '§o', code: '§o' },
  { label: '§n', code: '§n' },
  { label: '§m', code: '§m' },
  { label: '§r', code: '§r' },
  { label: '§0', code: '§0' },
  { label: '§1', code: '§1' },
  { label: '§2', code: '§2' },
  { label: '§3', code: '§3' },
  { label: '§4', code: '§4' },
  { label: '§5', code: '§5' },
  { label: '§6', code: '§6' },
  { label: '§7', code: '§7' },
  { label: '§8', code: '§8' },
  { label: '§9', code: '§9' },
  { label: '§a', code: '§a' },
  { label: '§b', code: '§b' },
  { label: '§c', code: '§c' },
  { label: '§d', code: '§d' },
  { label: '§e', code: '§e' },
  { label: '§f', code: '§f' },
];

export default function MotdPage() {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');

  const insertCode = (code: string, lineSetter: (val: string) => void, line: string) => {
    const newText = line + code;
    lineSetter(newText);
  };

  const motdPreview = `${line1}\n${line2}`;

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
            <div>{line1}</div>
            <div>{line2}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block mb-1 text-sm">Linha 1:</label>
            <input
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 mb-3"
              placeholder="§aServidor RazeHost"
            />
            <label className="block mb-1 text-sm">Linha 2:</label>
            <input
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              className="w-full p-2 rounded bg-neutral-800 border border-neutral-700"
              placeholder="§7A melhor hospedagem do Brasil!"
            />
          </div>

          <div>
            <p className="text-sm mb-2">Inserir códigos de formatação:</p>
            <div className="flex flex-wrap gap-2">
              {formatCodes.map(({ label, code }) => (
                <button
                  key={label}
                  onClick={() => insertCode(code, setLine1, line1)}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                >
                  {label}
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