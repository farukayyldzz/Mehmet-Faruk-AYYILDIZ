import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface VisitorLogProps {
  lang: Language;
}

interface LogEntry {
  id: number;
  ip: string;
  location: string;
  time: string;
  status: 'Connected' | 'Disconnected' | 'Viewing Projects' | 'Viewing Contact';
}

const LOCATIONS = ['Istanbul, TR', 'New York, US', 'Berlin, DE', 'London, UK', 'Tokyo, JP', 'Ankara, TR', 'Izmir, TR', 'Paris, FR'];
const ACTIONS: LogEntry['status'][] = ['Connected', 'Viewing Projects', 'Viewing Contact'];

const VisitorLog: React.FC<VisitorLogProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: 1, ip: '192.168.43.12', location: 'Istanbul, TR', time: '10:42:15', status: 'Connected' },
    { id: 2, ip: '10.0.0.5', location: 'London, UK', time: '10:41:55', status: 'Viewing Projects' },
    { id: 3, ip: '172.16.0.23', location: 'Berlin, DE', time: '10:40:12', status: 'Connected' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: Date.now(),
        ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
        time: new Date().toLocaleTimeString('en-GB'),
        status: Math.random() > 0.8 ? 'Disconnected' : ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
      };

      setLogs(prev => [newLog, ...prev].slice(0, 5)); // Keep only last 5
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white border-t border-gray-200 py-12 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h3 className="text-xs font-mono font-bold text-gray-400 mb-4 uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          {t.visitor_log_title}
        </h3>
        
        <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-gray-50">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-gray-100 text-gray-500 border-b border-gray-200">
              <tr>
                <th className="p-3 font-bold">{t.visitor_th_ip}</th>
                <th className="p-3 font-bold">{t.visitor_th_loc}</th>
                <th className="p-3 font-bold">{t.visitor_th_time}</th>
                <th className="p-3 font-bold text-right">{t.visitor_th_action}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white transition-colors">
                  <td className="p-3 text-gray-600">{log.ip}</td>
                  <td className="p-3 text-dark font-medium">{log.location}</td>
                  <td className="p-3 text-gray-400">{log.time}</td>
                  <td className={`p-3 text-right font-bold ${
                    log.status === 'Disconnected' ? 'text-red-400' : 'text-green-600'
                  }`}>
                    {log.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VisitorLog;