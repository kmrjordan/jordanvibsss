function handleParallax(e) {
    const img = e.currentTarget.querySelector('.parallax-img');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const moveX = x * 20;
    const moveY = y * 20;

    img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
  }

  function resetParallax(e) {
    const img = e.currentTarget.querySelector('.parallax-img');
    img.style.transform = 'scale(1) translate(0, 0)';
  }