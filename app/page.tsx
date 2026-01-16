export const runtime = 'edge';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: 'red', 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '50px', 
      color: 'white',
      fontWeight: 'bold',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      TEST: BURADAYIM!
    </div>
  );
}