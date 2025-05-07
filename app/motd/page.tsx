'use client';

import { useState } from 'react';

const formatCodes = [
  { label: 'Negrito', code: '§l' },
  { label: 'Itálico', code: '§o' },
  { label: 'Sublinhado', code: '§n' },
  { label: 'Tachado', code: '§m' },
  { label: 'Resetar', code: '§r' },
  { label: 'Verde', code: '§a' },
  { label: 'Vermelho', code: '§c' },
  { label: 'Amarelo', code: '§e' },
  { label: 'Azul', code: '§9' },
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
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Editor de MOTD - RazeHost</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block mb-1">Linha 1:</label>
          <input
            value={line1}
            onChange={(e) => setLine1(e.target.value)}
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 mb-4"
            placeholder="§aServidor RazeHost"
          />

          <label className="block mb-1">Linha 2:</label>
          <input
            value={line2}
            onChange={(e) => setLine2(e.target.value)}
            className="w-full p-2 rounded bg-neutral-800 border border-neutral-700 mb-4"
            placeholder="§7A melhor hospedagem do Brasil!"
          />

          <div className="mb-4">
            <p className="mb-2">Inserir código de formatação:</p>
            <div className="flex flex-wrap gap-2">
              {formatCodes.map(({ label, code }) => (
                <button
                  key={label}
                  onClick={() => insertCode(code, setLine1, line1)}
                  className="px-2 py-1 bg-orange-600 hover:bg-orange-700 rounded text-sm"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCopy}
            className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
          >
            Copiar Código
          </button>
        </div>

        <div>
          <label className="block mb-2">Pré-visualização:</label>
          <div className="bg-black text-green-400 p-4 border border-neutral-700 rounded font-mono whitespace-pre-wrap text-sm">
            {motdPreview}
          </div>
        </div>
      </div>
    </div>
  );
}