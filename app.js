const SUPABASE_URL = "https://mpwfdutputzlawztxarb.supabase.co";
const SUPABASE_KEY = "sb_publishable_BqP5QoPFlZB4pUIxWdPr8w_ILbjj1ew";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Worker PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let partiturData = [];
let filteredData = [];
let currentPartitur = null;

// Fetch Data
async function fetchPartitur() {
    const { data, error } = await db.from('koleksi_partitur').select('*').order('created_at', { ascending: false });
    if (error) return console.error("Gagal mengambil data:", error);
    
    partiturData = data;
    filteredData = [...partiturData];
    renderLatest();
    renderList();
}

// Render 5 Lagu Terbaru
function renderLatest() {
    const container = document.getElementById('latest-grid');
    container.innerHTML = '';
    const latest = partiturData.slice(0, 5);
    
    if(latest.length === 0) {
        container.innerHTML = '<p style="color:#64748b;">Belum ada partitur yang diunggah.</p>';
        return;
    }

    latest.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3 class="pt-serif">${item.judul}</h3>
            <p><strong>${item.komposer}</strong></p>
            <div style="margin-top:8px;">
                <span class="tag-badge">${item.kategori_suara || 'SATB'}</span>
                <span class="tag-badge" style="background:#f1f5f9; color:#475569;">${item.kategori_tema || 'Umum'}</span>
            </div>
        `;
        card.onclick = () => openDetail(item);
        container.appendChild(card);
    });
}

// Render Daftar Alfabetis
function renderList() {
    const list = document.getElementById('full-list');
    list.innerHTML = '';
    const sorted = [...filteredData].sort((a, b) => a.judul.localeCompare(b.judul));
    
    if(sorted.length === 0) {
        list.innerHTML = '<li style="background:none; border:none; color:#64748b;">Tidak ada partitur yang sesuai filter.</li>';
        return;
    }

    sorted.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${item.judul}</strong> <span style="color:#64748b;">- ${item.komposer}</span>
            </div>
            <div>
                <span class="tag-badge">${item.kategori_suara || 'SATB'}</span>
            </div>
        `;
        li.onclick = () => openDetail(item);
        list.appendChild(li);
    });
}

// Fitur Filter
window.applyFilters = function() {
    const suara = document.getElementById('filterSuara').value;
    const tema = document.getElementById('filterTema').value;
    
    filteredData = partiturData.filter(item => {
        const matchSuara = suara === "" || item.kategori_suara === suara;
        const matchTema = tema === "" || item.kategori_tema === tema;
        return matchSuara && matchTema;
    });
    renderList();
};

// Fitur Pencarian
window.searchPartitur = function() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    filteredData = partiturData.filter(item => 
        item.judul.toLowerCase().includes(keyword) || 
        item.komposer.toLowerCase().includes(keyword) ||
        (item.kategori_suara && item.kategori_suara.toLowerCase().includes(keyword)) ||
        (item.kategori_tema && item.kategori_tema.toLowerCase().includes(keyword))
    );
    renderList();
    if(keyword !== "") showPage('list');
};

// Modal Detail
async function openDetail(item) {
    currentPartitur = item;
    document.getElementById('detail-title').innerText = item.judul;
    document.getElementById('detail-composer').innerText = item.komposer;
    document.getElementById('detail-suara').innerText = item.kategori_suara || 'SATB';
    document.getElementById('detail-tema').innerText = item.kategori_tema || 'Umum';
    document.getElementById('detail-desc').innerText = item.deskripsi || "Tidak ada deskripsi tambahan.";
    
    const btnDownload = document.getElementById('btn-download');
    
    // Logika Penguncian Unduhan
    if (item.bisa_download) {
        const { data } = await db.storage.from('partitur-pdf').createSignedUrl(item.file_path, 300); // URL berlaku 5 menit
        btnDownload.href = data.signedUrl;
        btnDownload.style.display = 'inline-block';
    } else {
        btnDownload.style.display = 'none'; // Sembunyikan tombol total jika View Only
    }

    document.getElementById('modal-detail').classList.remove('hidden');
}

window.closeModal = function() {
    document.getElementById('modal-detail').classList.add('hidden');
};

// Fullscreen Canvas Viewer (Aman dari Download Langsung)
window.openFullscreenPDF = async function() {
    if (!currentPartitur) return;
    window.closeModal();

    const viewer = document.getElementById('pdf-viewer');
    const container = document.getElementById('pdf-canvas-container');
    document.getElementById('pdf-title').innerText = currentPartitur.judul;
    container.innerHTML = '<p style="color:white; text-align:center; width:100%;">Memuat partitur...</p>';
    
    viewer.classList.remove('hidden');

    try {
        const { data, error } = await db.storage.from('partitur-pdf').download(currentPartitur.file_path);
        if (error) throw error;

        const buffer = await data.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
        container.innerHTML = '';

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({ canvasContext: context, viewport: viewport }).promise;
            container.appendChild(canvas);
        }
    } catch(err) {
        container.innerHTML = `<p style="color:#ef4444; text-align:center; width:100%;">Gagal memuat PDF: ${err.message}</p>`;
    }
};

window.closeFullscreenPDF = function() {
    document.getElementById('pdf-viewer').classList.add('hidden');
    document.getElementById('pdf-canvas-container').innerHTML = '';
};

window.showPage = function(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
};

fetchPartitur();
