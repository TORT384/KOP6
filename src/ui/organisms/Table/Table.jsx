import React from 'react';

export function Table({ headers = [], data = [], onRowClick, renderRow }) {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
  };

  const thTd = {
    padding: '12px 16px',
    textAlign: 'left',
    borderBottom: '1px solid var(--color-border)',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr style={{ backgroundColor: 'var(--color-bg)' }}>
          {headers.map((h, i) => (
            <th key={i} style={thTd}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => renderRow(item, idx, thTd, onRowClick))}
      </tbody>
    </table>
  );
}