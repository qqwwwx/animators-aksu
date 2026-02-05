// ====== Калькулятор ======
function calculate(){
  const kids = Math.max(1, parseInt(document.getElementById("kids").value || "1", 10));
  const time = parseInt(document.getElementById("time").value, 10);
  const foam = document.getElementById("foam").checked ? 4000 : 0;
  const character = parseInt(document.getElementById("character").value, 10);

  const kidsFee = kids * 500;
  const total = time + foam + character + kidsFee;

  document.getElementById("result").innerText =
    `Итого: ${total.toLocaleString("ru-RU")} ₸`;
}

// ====== Фильтр персонажей ======
function filterChar(type, btn){
  document.querySelectorAll(".charCard").forEach(card=>{
    const ok = type === "all" || card.classList.contains(type);
    card.style.display = ok ? "block" : "none";
  });

  document.querySelectorAll(".filters .chip").forEach(b=>b.classList.remove("chip--active"));
  if(btn) btn.classList.add("chip--active");
}

// ====== Заявка (сохранение в админку localStorage) ======
function sendForm(e){
  e.preventDefault();

  const order = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    age: (document.getElementById("age").value || "").trim(),
    date: (document.getElementById("date").value || "").trim(),
    comment: (document.getElementById("comment").value || "").trim(),
    createdAt: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Заявка отправлена! 😊");
  e.target.reset();
}

// ====== Быстрый лид (из hero-карточки) ======
function quickLead(e){
  e.preventDefault();
  const phone = document.getElementById("qPhone").value.trim();

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push({
    name: "Быстрый заказ",
    phone,
    age:"",
    date:"",
    comment:"",
    createdAt: new Date().toISOString()
  });
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Спасибо! Напишем вам в WhatsApp 😊");
  e.target.reset();
}

// ====== RU / KZ (первые экраны) ======
const translations = {
  ru:{
    pill:"Аксу · выезд по городу",
    title:"Праздник, который запомнят",
    text:"Любимые герои, безопасные игры и премиум-сервис без переплат. Вы отдыхаете — мы делаем вау-эффект."
  },
  kz:{
    pill:"Ақсу · қала бойынша шығамыз",
    title:"Есте қаларлық мереке",
    text:"Сүйікті кейіпкерлер, қауіпсіз ойындар және артық төлемсіз премиум қызмет. Сіз демаласыз — біз әсер жасаймыз."
  }
};

function setLang(l){
  document.getElementById("heroPill").innerText = translations[l].pill;
  document.getElementById("heroTitle").innerText = translations[l].title;
  document.getElementById("heroText").innerText = translations[l].text;
}
