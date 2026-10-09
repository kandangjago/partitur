:root {
    --bg-color: #f8fafc;
    --text-main: #1e293b;
    --primary: #2563eb;
    --primary-hover: #1d4ed8;
    --glass-bg: rgba(255, 255, 255, 0.9);
    --glass-border: rgba(255, 255, 255, 0.4);
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: var(--bg-color);
    color: var(--text-main);
    overflow-x: hidden;
}

h1, h2, .pt-serif { font-family: 'PT Serif', serif; }

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #e2e8f0;
}

.nav-brand { font-weight: 700; font-size: 1.25rem; color: var(--primary); font-family: 'PT Serif', serif; }
.nav-links button {
    background: none; border: none; font-size: 0.95rem; margin-left: 1rem;
    cursor: pointer; font-weight: 500; transition: color 0.2s;
}
.nav-links button:hover { color: var(--primary); }
.btn-login { color: #64748b; font-size: 0.85rem !important; }

/* Hero Section */
.hero {
    text-align: center;
    padding: 3.5rem 1rem;
    background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
    border-bottom: 1px solid #e2e8f0;
}
.hero h1 { margin: 0 0 0.5rem; font-size: 2.2rem; }
.hero p { color: #64748b; margin: 0; }

.search-box { max-width: 500px; margin: 1.8rem auto 0; }
.search-box input {
    width: 100%; padding: 0.85rem 1.4rem;
    border-radius: 50px; border: 1px solid #cbd5e1;
    font-size: 1rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    outline: none; box-sizing: border-box; transition: all 0.3s;
}
.search-box input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(37,99,235,0.2); }

/* Layout & Grid */
.container { max-width: 900px; margin: 0 auto; padding: 2rem 1rem; }
.latest-section { padding: 2.5rem 1rem; max-width: 900px; margin: 0 auto; }
.grid-container {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-top: 1rem;
}

.card {
    background: white; border-radius: 12px; padding: 1.25rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.04); cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid #e2e8f0;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px -5px rgba(0,0,0,0.08); }
.card h3 { margin: 0 0 0.4rem; font-size: 1.15rem; color: #0f172a; }
.card p { margin: 0; font-size: 0.9rem; color: #64748b; }

/* Modal Detail */
.modal {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(4px);
    display: flex; justify-content: center; align-items: center; z-index: 1000;
}
.modal.hidden { display: none; }
.glass-effect {
    background: white; padding: 2rem; border-radius: 16px;
    max-width: 420px; width: 90%; text-align: center; position: relative;
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.2);
}
.close-btn { position: absolute; top: 12px; right: 16px; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #94a3b8; }

.tags-container { display: flex; gap: 0.5rem; justify-content: center; margin: 0.8rem 0; }
.tag-badge { background: #e0f2fe; color: #0369a1; padding: 3px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; }

.action-buttons { display: flex; gap: 0.8rem; justify-content: center; margin-top: 1.5rem; flex-wrap: wrap; }
.btn-primary, .btn-secondary {
    padding: 0.7rem 1.3rem; border-radius: 8px; text-decoration: none; font-weight: 600;
    cursor: pointer; transition: all 0.2s; border: none; font-size: 0.9rem;
}
.btn-primary { background: var(--primary); color: white; }
.btn-primary:hover { background: var(--primary-hover); }
.btn-secondary { background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; }

/* Fullscreen Viewer */
.fullscreen-viewer {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: #0f172a; z-index: 9999; display: flex; flex-direction: column;
}
.fullscreen-viewer.hidden { display: none; }
.pdf-toolbar {
    background: #1e293b; color: white; padding: 12px 20px; display: flex;
    align-items: center; gap: 1rem; border-bottom: 1px solid #334155;
}
.btn-back { background: #334155; border: none; color: white; padding: 6px 16px; border-radius: 20px; cursor: pointer; font-weight: 600; }

.canvas-scroll-area {
    flex-grow: 1; overflow-y: auto; padding: 20px; display: flex;
    flex-direction: column; align-items: center; gap: 15px;
}
.canvas-scroll-area canvas {
    max-width: 95%; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5); background: white; border-radius: 4px;
}

/* Utilities */
.page { display: none; }
.page.active { display: block; }
.filter-bar { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
.filter-bar select { padding: 0.6rem; border-radius: 8px; border: 1px solid #cbd5e1; outline: none; }
.alphabet-list { list-style: none; padding: 0; margin: 0; }
.alphabet-list li {
    padding: 1rem; border-bottom: 1px solid #e2e8f0; cursor: pointer; background: white;
    margin-bottom: 6px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;
}
.alphabet-list li:hover { background: #f8fafc; border-color: #cbd5e1; }
