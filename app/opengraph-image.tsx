import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = '[Clinic Name]';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0056b3',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
            marginBottom: 20,
          }}
        >
          [Clinic Name]
        </div>
        <div
          style={{
            fontSize: 40,
            opacity: 0.9,
          }}
        >
          Exceptional Healthcare Services
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
