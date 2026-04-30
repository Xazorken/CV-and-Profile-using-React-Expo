import './bootstrap.js';
import '../css/app.css';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const [page, setPage] = useState('profile');
    const [githubRepos, setGithubRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    // KONFIGURASI STATIS
    const GITHUB_USERNAME = "Xazorken"; 
    // Menggunakan referensi file yang kamu instruksikan secara verbatim
    const MY_PHOTO = "/The Crew Motorfest Screenshot 2025.12.16 - 22.10.56.91.jpg";

    // --- FETCH GITHUB DATA ---
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
                const data = await response.json();
                if (Array.isArray(data)) {
                    setGithubRepos(data);
                }
            } catch (error) {
                console.error("Gagal sinkronisasi data GitHub:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    // --- SUB-COMPONENTS ---

    const Sidebar = () => (
        <nav className="fixed left-0 top-0 h-full w-20 md:w-64 bg-[#0a0a0a] border-r border-slate-800 flex flex-col items-center py-10 z-50">
            <div className="mb-12 font-black text-2xl text-indigo-500 tracking-tighter">VI.</div>
            {/* Profile Picture Frame */}
            <div className="w-16 h-16 rounded-2xl border border-slate-700 overflow-hidden mb-10 bg-slate-900 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                    src={MY_PHOTO} 
                    className="w-full h-full object-cover" 
                    alt="Valentino Profile"
                    onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=VI&background=6366f1&color=fff"}
                />
            </div>
            <div className="flex flex-col gap-6 w-full px-4">
                {[
                    { id: 'profile', label: 'Home', icon: '👤' },
                    { id: 'education', label: 'Education', icon: '🎓' },
                    { id: 'projects', label: 'Projects', icon: '💻' }
                ].map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => setPage(item.id)} 
                        className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${page === item.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-slate-500 hover:bg-slate-900'}`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="hidden md:block font-bold text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );

    const Profile = () => (
        <div className="animate-fadeIn space-y-20">
            <header className="flex flex-col md:flex-row items-center gap-16 pt-10">
                <div className="relative">
                    <div className="absolute -inset-4 bg-indigo-500/10 rounded-[3rem] blur-2xl"></div>
                    <div className="relative w-80 h-80 bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl group">
                        <img 
                            src={MY_PHOTO} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                            alt="Valentino Large Profile"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-indigo-500 font-bold tracking-[0.4em] uppercase text-sm mb-4">Backend Developer</h2>
                    <h1 className="text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">Valentino<br/>Irving</h1>
                    <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                        Mahasiswa **BINUS University** Semester 4. Fokus pada software development dan arsitektur backend menggunakan Golang, Laravel, dan Java.
                    </p>
                </div>
            </header>

            <section className="bg-slate-900/30 p-10 rounded-[2.5rem] border border-slate-800/50 backdrop-blur-sm">
                <h3 className="text-white font-bold mb-10 uppercase tracking-widest text-xs text-indigo-400">Technical Skill Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                    {[
                        { name: 'Golang (Gin)', val: '92%' }, 
                        { name: 'PHP (Laravel)', val: '88%' }, 
                        { name: 'Java (Maven)', val: '82%' }, 
                        { name: 'Database Design', val: '85%' }
                    ].map((s, i) => (
                        <div key={i}>
                            <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">
                                <span>{s.name}</span>
                                <span>{s.val}</span>
                            </div>
                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" style={{width: s.val}}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    const Education = () => (
        <div className="max-w-4xl animate-fadeIn py-10">
            <h2 className="text-5xl font-black text-white mb-16 tracking-tighter uppercase">Education</h2>
            <div className="space-y-12 border-l-2 border-slate-800 ml-4">
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">BINUS University</h3>
                    <p className="text-indigo-400 font-bold text-sm mb-2 italic">2024 — Sekarang (Semester 4)</p>
                </div>
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-slate-700 rounded-full"></div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">SMA Kristen Kalam Kudus Malang</h3>
                    <p className="text-slate-500 font-bold mb-2 text-sm tracking-widest uppercase">Lulusan 2024</p>
                </div>
                <div className="relative pl-12">
                    <div className="absolute -left-[9px] top-2 w-4 h-4 bg-slate-800 rounded-full"></div>
                    <h3 className="text-xl font-bold text-slate-400 uppercase tracking-tight">SMP & SD Kristen Kalam Kudus Malang</h3>
                </div>
            </div>
        </div>
    );

    const ProjectList = () => (
        <div className="animate-fadeIn py-10">
            <div className="mb-16">
                <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Repositories</h2>
                <p className="text-indigo-500 font-bold text-xs uppercase tracking-[0.3em] mt-2">Live from GitHub @{GITHUB_USERNAME}</p>
            </div>

            {loading ? (
                <div className="text-slate-600 font-bold uppercase tracking-widest animate-pulse">Syncing with GitHub...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {githubRepos.map(repo => (
                        <a 
                            key={repo.id} 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="group bg-[#0a0a0a] border border-slate-800 rounded-[2rem] p-8 hover:border-indigo-500/50 transition-all duration-500 hover:translate-y-[-4px]"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-3xl">📂</div>
                                <span className="text-[9px] font-black text-indigo-400 border border-indigo-500/30 px-2 py-1 rounded-md uppercase">
                                    {repo.language || "Project"}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                                {repo.name.replace(/-/g, ' ')}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 italic">
                                {repo.description || "Personal development repository."}
                            </p>
                            <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest group-hover:text-white transition-colors">
                                Source Code →
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-slate-300 font-sans">
            <Sidebar />
            <main className="pl-20 md:pl-72 pr-6 md:pr-12 pt-10 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    {page === 'profile' && <Profile />}
                    {page === 'education' && <Education />}
                    {page === 'projects' && <ProjectList />}
                </div>
            </main>
        </div>
    );
}

const container = document.getElementById('root');
if (container) { createRoot(container).render(<App />); }