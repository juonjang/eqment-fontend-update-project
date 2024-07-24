import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';


export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="pt-16 p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          {/* Add your content here */}
        </main>
      </div>
    </div>
  );
}
