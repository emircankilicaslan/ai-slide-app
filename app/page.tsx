export const runtime = 'edge';

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#2563eb', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '24px',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>BAŞARDIK! 🚀</h1>
      <p>Kırmızı çarpı gitti, Mavi ekran geldi.</p>
    </div>
  );
}