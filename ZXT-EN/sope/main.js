function orderNow(button) {
    const productCard = button.parentElement;
    const productName = productCard.getAttribute('data-name');
    const productPrice = productCard.getAttribute('data-price');
    const productImage = productCard.getAttribute('data-code');
 
    const message = `تم طلب المنتج :
 اسم المنتج : ${productName}
 سعر المنتج : ${productPrice} ديـنـار
 كود المنتج : ${productImage}`;
 
    const encodedMessage = encodeURIComponent(message);
    const username = "ZXT5_BOT"; // معرف حسابك في تليجرام
    const url = `https://t.me/${username}?text=${encodedMessage}`;
    window.open(url);
  }

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
  }
  
  setInterval(nextSlide, 5000); // تعديل المدة بين الصور هنا (بالميلي ثانية)
 