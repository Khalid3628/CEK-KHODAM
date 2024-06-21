document.getElementById("khodamForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const result = checkKhodam(name);

  document.getElementById("result").innerHTML = result.message;
  document.getElementById("result").classList.add("show");

  const khodamImage = document.getElementById("khodamImage");
  if (result.image) {
      khodamImage.src = result.image;
      khodamImage.style.display = "block";
  } else {
      khodamImage.style.display = "none";
  }
  khodamImage.classList.add("show");
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('khodamForm');
  const resultDiv = document.getElementById('result');
  const image = document.getElementById('khodamImage');

  form.addEventListener('reset', function(event) {
      resultDiv.textContent = '';
      image.style.display = 'none';
  });
});

function checkKhodam(name) {
  const khodamTypes = [
      { name: "harimau benggala", image: "images/harimau-benggala.jpg" },
      { name: "elang", image: "images/elang.jpeg" },
      { name: "naga hitam", image: "images/naga-hitam.jpg" },
      { name: "tupai", image: "images/serigala.jpg" },
      { name: "gajah sirkus", image: "images/gajah.jpg" },
      { name: "macan tutul", image: "images/macan.jpg" },
      { name: "kuda poni", image: "images/kudaponi.jpg" },
      { name: "singa emas", image: "images/singa.jpg" },
      { name: "wc jongkok", image: "images/wc jongkok.jpg" },
      { name: "velg motor", image: "images/velg motor.jpg" },
      { name: "tuyul albino", image: "images/tuyul albino.jpg" },
      { name: "tugu kujang", image: "images/tugu kujang.jpeg" },
      { name: "trenggiling", image: "images/trenggiling.jpeg" },
      { name: "toren air", image: "images/toren air.jpeg" },
      { name: "tikus hitam", image: "images/tikus hitam.jpeg" },
      { name: "tiang listrik", image: "images/tiang listrik.jpeg" },
      { name: "sundel bolong", image: "images/sundel bolong.jpg" },
      { name: "stop kontak", image: "images/stop kontak.jpg" },
      { name: "soklin lantai", image: "images/soklin lantai.jpg" },
      { name: "slamet kopling", image: "images/slamet kopling.jpg" },
      { name: "sigit rendang", image: "images/sigit rendang.png" },
      { name: "sepeda ontel", image: "images/sepeda ontel.jpeg" },
      { name: "sendok", image: "images/sendok.jpeg" },
      { name: "sendok semen", image: "images/sendok semen.jpg" },
      { name: "sendal jepit", image: "images/sendal jepit.jpeg" },
      { name: "sapu lidi", image: "images/sapu lidi.jpg" },
      { name: "sapi kurban", image: "images/sapi kurban.jpeg" },
      { name: "santan kara", image: "images/santan kara.jpg" },
      { name: "roger sumatra", image: "images/roger sumatra.jpeg" },
      { name: "rice cooker", image: "images/rice cooker.jpeg" },
      { name: "raket nyamuk", image: "images/raket nyamuk.jpeg" },
      { name: "pragos", image: "images/pragos.jpeg" },
      { name: "pot bunga", image: "images/pot bunga.jpg" },
      { name: "pohon bambu", image: "images/pocong bambu.jpg" },
      { name: "pohon pisang", image: "images/pohon pisang.jpeg" },
      { name: "nasi padang", image: "images/nasi padang.jpeg" },
      { name: "naga", image: "images/naga.jpg" },
      { name: "mesin jahit", image: "images/mesin jahit.jpg" },
      { name: "mesin cuci", image: "images/mesin cuci.png" },
      { name: "masha and the bear", image: "images/masha and the bear.jpeg" },
      { name: "macan takbir", image: "images/macan takbir.jpg" },
      { name: "kursi hajatan", image: "images/kursi hajatan.jpg" },
      { name: "kupu kupu rgb", image: "images/kupu kupu rgb.jpeg" },
      { name: "kuntilanak merah", image: "images/kuntilanak merah.jpg" },
      { name: "kulkas", image: "images/kulkas.jpeg" },
      { name: "kuda lumping", image: "images/kuda lumping.jpeg" },
      { name: "kucing garong", image: "images/kucing garong.jpeg" },
      { name: "kompor listrik", image: "images/kompor listrik.jpg" },
      { name: "kipas angin", image: "images/kipas angin.jpg" },
      { name: "kepala charger", image: "images/kepala charger.jpg" },
      { name: "kapibara", image: "images/kapibara.jpeg" },
      { name: "kalajengking", image: "images/kalajengking.jpg" },
      { name: "jemuran", image: "images/jemuran.jpeg" },
      { name: "ikan lohan", image: "images/ikan lohan.jpg" },
      { name: "ikan cupang", image: "images/ikan cupang.jpg" },
      { name: "hantu rgb", image: "images/hantu rgb.jpeg" },
      { name: "gerobak sampah", image: "images/gerobak sampah.jpg" },
      { name: "genduruwo", image: "images/genduruwo.jpeg" },
      { name: "garpu", image: "images/garpu.jpeg" },
      { name: "dugong jawa", image: "images/dugong jawa.jpg" },
      { name: "cicak merah", image: "images/cicak merah.jpeg" },
      { name: "charger type c", image: "images/charger type c.jpg" },
      { name: "buaya putih", image: "images/buaya putih.jpg" },
      { name: "badut mixue", image: "images/badut mixue.jpg" },
      { name: "api unggun", image: "images/api unggun.jpg" },
      { name: "air cucian beras", image: "images/aircucianberas.jpeg" },
      { name: "thomas", image: "images/thomas.jpeg" },
      { name: "kak gem", image: "images/kak gem.jpeg" },
      { name: "bajing loncat", image: "images/bajing loncat.jpg" },
      { name: "dora botak", image: "images/dora botak.jpg" },
      { name: "monyet keriting", image: "images/monyet keriting.jpg" },
      { name: "ceker ayam", image: "images/ceker ayam.jpeg" },
      { name: "babi ngepet", image: "images/babi ngepet.jpg" },
      { name: "belut listrik", image: "images/belut listrik.jpg" },
      { name: "hp android", image: "images/hp android.jpeg" },
      { name: "kecoa albino", image: "images/kecoa albino.jpeg" },
  ];

  const randomIndex = Math.floor(Math.random() * khodamTypes.length);
  const khodamType = khodamTypes[randomIndex];
  const khodam = Math.random() >= 0.5;

  if (khodam) {
      return {
          message: `Selamat, ${name}!   Kamu memiliki khodam <span class="not-found1">${khodamType.name}</span>.`,
          image: khodamType.image,
      };
  } else {
      return {
          message: `Maaf, ${name}. <span class="not-found">Kamu tidak memiliki khodam</span>.`,
          image: null,
      };
  }
}