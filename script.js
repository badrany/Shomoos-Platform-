function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  }
  function showAlert(plan) {
    alert(`To choose the rest, please call us at:01010658547`);
  }
    // إخفاء شاشة التحميل ب  1.5 ثواني
window.addEventListener('load', function() {
  setTimeout(function() {
      document.querySelector('.loading-screen').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
  }, 1500); // 1.5 ثواني
});

