document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const panels = document.querySelectorAll('.panel');

    function showPanel(panelId) {
      panels.forEach(panel => {
        if (panel.id === panelId) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    }

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const panelId = this.getAttribute('data-panel');
        showPanel(panelId);
      });
    });

    showPanel('proyects');

    const overlay = document.getElementById('overlay');
    const expandedImg = document.getElementById('expanded-img');
    const descriptionDisplay = document.getElementById('descriptionDisplay');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;
    let currentImages = [];
    let sharedDescription = '';

    function updateImage() {
      expandedImg.src = currentImages[currentIndex];
    }

    function updateDescription() {
      descriptionDisplay.textContent = sharedDescription;
    }

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
            updateDescription();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            updateImage();
            updateDescription();
        }
    });

    document.querySelectorAll('.expandable').forEach(image => {
        image.addEventListener('click', function() {
          currentImages = this.getAttribute('data-images').split(',');
          sharedDescription = this.getAttribute('data-description');
          currentIndex = 0;
          updateImage();
          updateDescription();
          overlay.style.display = 'flex';
        });
      });
    
});
