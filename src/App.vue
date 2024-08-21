<template>
  <div>
    <header
      class="relative h-screen bg-gradient-to-r from-blue-500 to-green-400 bg-cover bg-center"
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div
        class="relative flex flex-col items-center justify-center h-full text-white"
      >
        <h1
          class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600"
        >
          Studio Nio
        </h1>
        <p class="mt-4 text-lg">Desain yang Menginspirasi</p>
      </div>
    </header>

    <section class="py-20 text-center bg-gray-100">
      <h2 class="text-3xl font-semibold text-blue-600">Tentang Saya</h2>
      <div
        class="flex flex-col md:flex-row items-center justify-center mt-8 max-w-4xl mx-auto"
      >
        <img
          src=""
          alt="Tentang Saya"
          class="w-64 h-64 object-cover rounded-full md:mr-8 mb-4 md:mb-0"
        />
        <!-- Gambar dikosongkan -->
        <p class="mt-4 md:mt-0 text-left px-4 md:px-0">
          Saya adalah seorang arsitek dengan pengalaman dalam menciptakan desain
          yang inovatif dan fungsional. Saya percaya bahwa setiap ruang memiliki
          cerita yang unik untuk diceritakan. Dengan latar belakang pendidikan
          yang kuat dan pengalaman di berbagai proyek, saya berkomitmen untuk
          memberikan solusi desain yang tidak hanya memenuhi kebutuhan klien
          tetapi juga menciptakan pengalaman yang menyenangkan bagi pengguna
          ruang tersebut. Saya selalu berusaha untuk mengikuti tren terbaru
          dalam arsitektur dan desain interior, serta menerapkan prinsip
          keberlanjutan dalam setiap proyek yang saya kerjakan. Dengan
          pendekatan yang kolaboratif, saya bekerja sama dengan klien untuk
          memahami visi mereka dan mewujudkannya dalam bentuk desain yang
          menarik dan fungsional.
        </p>
      </div>
    </section>

    <section class="py-20 text-center bg-white">
      <h2 class="text-3xl font-semibold text-green-600">
        Jasa yang Saya Tawarkan
      </h2>
      <div class="flex flex-wrap justify-center gap-8 mt-8">
        <div
          class="max-w-xs p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <img
            src=""
            alt="Desain Arsitektur"
            class="w-full h-32 object-cover rounded-t-lg"
          />
          <!-- Gambar dikosongkan -->
          <h3 class="text-xl font-semibold mt-4 text-blue-600">
            Desain Arsitektur
          </h3>
          <p class="mt-2">
            Menciptakan desain bangunan yang estetis dan fungsional.
          </p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Order
          </button>
        </div>
        <div
          class="max-w-xs p-6 bg-yellow-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <img
            src=""
            alt="Perencanaan Ruang"
            class="w-full h-32 object-cover rounded-t-lg"
          />
          <!-- Gambar dikosongkan -->
          <h3 class="text-xl font-semibold mt-4 text-yellow-600">
            Perencanaan Ruang
          </h3>
          <p class="mt-2">
            Merencanakan penggunaan ruang yang efisien dan nyaman.
          </p>
          <button
            class="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Order
          </button>
        </div>
        <div
          class="max-w-xs p-6 bg-red-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <img
            src=""
            alt="Konsultasi Desain"
            class="w-full h-32 object-cover rounded-t-lg"
          />
          <!-- Gambar dikosongkan -->
          <h3 class="text-xl font-semibold mt-4 text-red-600">
            Konsultasi Desain
          </h3>
          <p class="mt-2">Memberikan konsultasi untuk proyek desain Anda.</p>
          <button
            class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Order
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 text-center bg-gray-100">
      <h2 class="text-3xl font-semibold text-purple-600">Portofolio</h2>
      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <div
          class="max-w-xs p-6 bg-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
        >
          <img
            src=""
            alt="Proyek 1"
            class="w-full h-32 object-cover rounded-t-lg"
          />
          <!-- Gambar dikosongkan -->
          <h3 class="text-xl font-semibold mt-4 text-green-600">Proyek 1</h3>
          <p class="mt-2">Deskripsi singkat tentang proyek 1.</p>
          <button
            class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Order
          </button>
        </div>
        <div
          class="max-w-xs p-6 bg-orange-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
        >
          <img
            src=""
            alt="Proyek 2"
            class="w-full h-32 object-cover rounded-t-lg"
          />
          <!-- Gambar dikosongkan -->
          <h3 class="text-xl font-semibold mt-4 text-orange-600">Proyek 2</h3>
          <p class="mt-2">Deskripsi singkat tentang proyek 2.</p>
          <button
            class="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Order
          </button>
        </div>
        <div
          class="max-w-xs p-6 bg-pink-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
        >
          <img
            src=""
            alt="Proyek 3"
            class="w-full h-32 object-cover rounded-t-lg"
          />
          <!-- Gambar dikosongkan -->
          <h3 class="text-xl font-semibold mt-4 text-pink-600">Proyek 3</h3>
          <p class="mt-2">Deskripsi singkat tentang proyek 3.</p>
          <button
            class="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Order
          </button>
        </div>
      </div>
    </section>

    <section class="py-20 text-center bg-gray-100">
      <h2 class="text-3xl font-semibold text-blue-600">Testimoni Klien</h2>
      <div class="flex flex-wrap justify-center gap-8 mt-8">
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <p>"Desain yang luar biasa! Sangat puas dengan hasilnya."</p>
          <p class="mt-2 font-semibold">- Klien A</p>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <p>"Sangat profesional dan kreatif. Sangat merekomendasikan!"</p>
          <p class="mt-2 font-semibold">- Klien B</p>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <p>
            "Pengalaman bekerja dengan Studio Nio sangat menyenangkan. Mereka
            memahami visi saya dengan baik."
          </p>
          <p class="mt-2 font-semibold">- Klien C</p>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <p>
            "Hasil desain melebihi ekspektasi saya. Sangat detail dan
            fungsional!"
          </p>
          <p class="mt-2 font-semibold">- Klien D</p>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <p>
            "Tim yang sangat responsif dan selalu siap membantu. Terima kasih!"
          </p>
          <p class="mt-2 font-semibold">- Klien E</p>
        </div>
      </div>
    </section>

    <section class="py-20 text-center bg-gray-100">
      <h2 class="text-3xl font-semibold text-blue-600">Blog</h2>
      <div class="flex flex-wrap justify-center gap-8 mt-8">
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">Judul Artikel 1</h3>
          <p class="mt-2">Deskripsi singkat tentang artikel 1.</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Baca Selengkapnya
          </button>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">Judul Artikel 2</h3>
          <p class="mt-2">Deskripsi singkat tentang artikel 2.</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Baca Selengkapnya
          </button>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">Judul Artikel 3</h3>
          <p class="mt-2">Deskripsi singkat tentang artikel 3.</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Baca Selengkapnya
          </button>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">Judul Artikel 4</h3>
          <p class="mt-2">Deskripsi singkat tentang artikel 4.</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Baca Selengkapnya
          </button>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">Judul Artikel 5</h3>
          <p class="mt-2">Deskripsi singkat tentang artikel 5.</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Baca Selengkapnya
          </button>
        </div>
        <div class="max-w-xs p-6 bg-white rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold">Judul Artikel 6</h3>
          <p class="mt-2">Deskripsi singkat tentang artikel 6.</p>
          <button
            class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Baca Selengkapnya
          </button>
        </div>
      </div>
    </section>

    <h1 class="text-3xl font-bold">Form Input</h1>
    <InputComponent v-model="inputData" />
    <button
      @click="submitInput"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Kirim Input
    </button> 

    <footer class="py-10 text-center bg-gray-800 text-white">
      <p>
        Hubungi saya:
        <a href="mailto:email@example.com" class="underline"
          >email@example.com</a
        >
      </p>
      <div class="mt-4">
        <a href="#" class="text-white mx-2">Facebook</a>
        <a href="#" class="text-white mx-2">Instagram</a>
        <a href="#" class="text-white mx-2">LinkedIn</a>
      </div>
    </footer>

    <!-- Ikon WhatsApp -->
    <a
      href="https://wa.me/+6285755128696"
      target="_blank"
      class="whatsapp-icon"
    >
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";
import { useRouter } from "vue-router";

export default {
  name: "App",
  components: {
    InputComponent,
  },
  data() {
    return {
      inputData: "",
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    submitInput() {
      // Navigasi ke halaman input display dengan mengirimkan inputData
      this.router.push({
        path: "/input-display",
        query: { input: this.inputData },
      });
    },
  },
};
</script>

<style>
/* Tambahkan gaya tambahan jika diperlukan */
.whatsapp-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366; /* Warna hijau WhatsApp */
  color: white;
  border-radius: 50%; /* Membuatnya bulat */
  width: 60px; /* Lebar tetap */
  height: 60px; /* Tinggi tetap */
  display: flex; /* Menggunakan flexbox untuk memusatkan ikon */
  align-items: center; /* Memusatkan secara vertikal */
  justify-content: center; /* Memusatkan secara horizontal */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  font-size: 28px; /* Ukuran ikon */
  transition: background-color 0.3s;
}

.whatsapp-icon:hover {
  background-color: #128c7e; /* Warna hijau gelap saat hover */
}

/* Media Queries untuk Responsivitas */
@media (max-width: 768px) {
  h1 {
    font-size: 3rem; /* Mengurangi ukuran font pada layar kecil */
  }
  .whatsapp-icon {
    width: 50px; /* Mengurangi ukuran ikon pada layar kecil */
    height: 50px;
    font-size: 24px; /* Mengurangi ukuran ikon */
  }
  .max-w-xs {
    max-width: 90%; /* Mengatur lebar maksimum untuk kartu */
  }
  .text-3xl {
    font-size: 2rem; /* Mengurangi ukuran font untuk judul */
  }
}
</style>
