'use client';

import { useState } from 'react';
import * as ResizablePanel from './resizable-panel';

export default function Page() {
  let [state, setState] = useState(3);

  return (
    <div className="max-w-xs mx-auto mt-4">
      <div className="flex gap-2">
        <input
          type="range"
          value={state}
          onChange={(e) => setState(+e.target.value)}
          min={0}
          max={7}
        />
        <p>{state}</p>
        {/* <button
          className="border border-gray-300 rounded px-3 py-1"
          onClick={() => setState('a')}
        >
          Panel 1
        </button>
        <button
          className="border border-gray-300 rounded px-3 py-1"
          onClick={() => setState('b')}
        >
          Panel 2
        </button> */}
      </div>
      <div className="max-w-sm mx-auto bg-blue-500 rounded-lg text-white mt-8 p-8">
        <ResizablePanel.Root value={`${state}`}>
          {planets.map((planet, i) => (
            <ResizablePanel.Content value={`${i}`} key={i}>
              <div>
                <p className="text-2xl font-bold">{planet.name}</p>
                <p className="mt-4">{planet.summary}</p>
              </div>
            </ResizablePanel.Content>
          ))}
        </ResizablePanel.Root>
      </div>
    </div>
  );
}

const planets = [
  {
    name: 'Mercury',
    summary:
      'Mercury, the smallest planet, is closest to the Sun with a rocky surface and extreme temperatures.',
  },
  {
    name: 'Venus',
    summary:
      "Venus is often called Earth's twin due to its similar size and composition. However, its thick, toxic atmosphere creates a severe greenhouse effect, leading to extremely high surface temperatures and pressure.",
  },
  {
    name: 'Earth',
    summary:
      'Earth, our home planet, is the only known planet to support life, featuring diverse ecosystems and climates.',
  },
  {
    name: 'Mars',
    summary:
      'Mars, the Red Planet, has fascinated humans for centuries with its potential to support life. It has a thin atmosphere, surface features reminiscent of both Earth and the Moon, and the tallest volcano and largest canyon in the solar system.',
  },
  {
    name: 'Jupiter',
    summary:
      "Jupiter, the gas giant, is the largest planet in our solar system. It is known for its Great Red Spot, a massive storm that has raged for centuries. Jupiter's strong magnetic field and dozens of moons, including the largest moon Ganymede, make it a fascinating planet.",
  },
  {
    name: 'Saturn',
    summary:
      'Saturn is renowned for its beautiful ring system, composed of ice and rock particles. It is a gas giant with a thick atmosphere, numerous moons, and a unique feature—hexagonal storm patterns at its poles.',
  },
  {
    name: 'Uranus',
    summary:
      'Uranus is a blue-green gas giant with a tilted axis, causing it to rotate on its side. This unusual orientation leads to extreme seasonal variations. Its atmosphere is mostly hydrogen and helium, with traces of methane giving it its color.',
  },
  {
    name: 'Neptune',
    summary:
      'Neptune, the farthest known planet from the Sun, is a deep blue gas giant. It is known for having the strongest winds in the solar system, with speeds reaching over 1,200 miles per hour. Neptune also has a faint ring system and 14 known moons, with Triton being the largest.',
  },
];
