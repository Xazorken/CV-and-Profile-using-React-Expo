# Personal Portfolio Website - Valentino Irving
<img width="1846" height="920" alt="image" src="https://github.com/user-attachments/assets/a720f1e3-cbfa-459f-935f-400fbaed2d3d" />
<img width="1837" height="906" alt="image" src="https://github.com/user-attachments/assets/d6acc1d9-c687-47d7-9e5b-f7beed74bc5a" />
<img width="1821" height="938" alt="image" src="https://github.com/user-attachments/assets/4c556a02-75ec-4e47-9f4c-d11885a6288f" />



Proyek ini adalah website portofolio pribadi statis yang dibangun dengan **Laravel + React (Vite)** dan **Tailwind CSS**. Website ini dirancang untuk menampilkan profil profesional, riwayat pendidikan, serta sinkronisasi proyek secara *real-time* menggunakan GitHub API.

## 🚀 Tech Stack

*   **Framework:** Laravel 11 (sebagai backend statis)
*   **Frontend:** React.js (Inertia.js/Vite)
*   **Styling:** Tailwind CSS
*   **API Integration:** GitHub Rest API (untuk sinkronisasi repositori otomatis)
*   **Icons & UI:** Custom CSS animations & Lucide-style icons

## ✨ Fitur Utama

*   **Dynamic GitHub Sync:** Halaman Projects secara otomatis mengambil data repositori terbaru langsung dari API GitHub.
*   **Responsive Sidebar Navigation:** Navigasi yang halus dan adaptif untuk berbagai ukuran layar.
*   **Technical Skill Matrix:** Visualisasi persentase keahlian backend (Golang, PHP, Java, Database Design).
*   **Auto-Generated Visuals:** Menggunakan Mock Image API untuk memastikan visual profil selalu dinamis dan estetik tanpa ketergantungan file lokal.
*   **Clean & Dark UI:** Desain futuristik dengan skema warna gelap dan aksen indigo untuk kesan profesional.

## 📂 Struktur Proyek

*   `resources/js/app.jsx`: Komponen utama React yang mengatur logika navigasi dan fetch data.
*   `resources/css/app.css`: Konfigurasi Tailwind dan animasi kustom.
*   `routes/web.php`: Routing sederhana untuk menyajikan aplikasi sebagai Single Page Application (SPA).

## 🎓 Informasi Akademik

*   **Institusi:** BINUS University
*   **Semester:** 4 (Angkatan 2024)
*   **Fokus Studi:** Backend Development & Arsitektur Perangkat Lunak

## 🛠️ Cara Menjalankan Secara Lokal

1.  Clone repositori ini:
    ```bash
    git clone https://github.com/Xazorken/CV-and-Profile-using-React-Expo.git
    ```
2.  Install dependencies:
    ```bash
    composer install
    npm install
    ```
3.  Salin file `.env`:
    ```bash
    cp .env.example .env
    ```
4.  Generate app key:
    ```bash
    php artisan key:generate
    ```
5.  Jalankan server pengembangan:
    ```bash
    npm run dev
    # di terminal terpisah
    php artisan serve
    ```

---
Dibuat dengan oleh **Valentino Irving** sebagai bagian dari pengembangan portofolio akademik di BINUS University.
