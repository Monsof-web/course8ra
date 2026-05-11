/* ========================================
   LOGIQUE PRINCIPALE - SCRIPT.JS
   ======================================== */

let currentFilter = 'all';
let selectedCourse = null;

// Initialiser la page au chargement
document.addEventListener('DOMContentLoaded', function() {
    displayCourses(coursesData);
    setupEventListeners();
});

/* ========================================
   AFFICHAGE DES COURS
   ======================================== */

function displayCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';

    courses.forEach(course => {
        // Filtrer par section
        if (currentFilter !== 'all' && course.section !== currentFilter && course.section !== 'all') {
            return;
        }

        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-header">
                <div class="course-icon">${course.icon}</div>
                <div class="course-name">${course.name}</div>
                <div class="course-section">${formatSection(course.section)}</div>
            </div>
            <div class="course-body">
                <p class="course-description">${course.description}</p>
                <p class="course-chapters">📚 ${course.chapters.length} Chapitre(s)</p>
                <button class="view-btn" onclick="openCourseModal(${course.id})">Voir les cours</button>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
}

/* ========================================
   FILTRAGE PAR SECTION
   ======================================== */

function filterBySection(section) {
    currentFilter = section;

    // Mettre à jour les boutons actifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Afficher les cours filtrés
    displayCourses(coursesData);
}

/* ========================================
   MODALES - DÉTAILS DES COURS
   ======================================== */

function openCourseModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    selectedCourse = course;

    const modalTitle = document.getElementById('modalTitle');
    const chaptersContainer = document.getElementById('chaptersContainer');

    modalTitle.textContent = course.name;
    chaptersContainer.innerHTML = '';

    const chaptersList = document.createElement('ul');
    chaptersList.className = 'chapters-list';

    course.chapters.forEach((chapter, index) => {
        const chapterItem = document.createElement('li');
        chapterItem.className = 'chapter-item';
        chapterItem.innerHTML = `
            <div class="chapter-title">${chapter.title}</div>
            <ul class="videos-list">
                ${chapter.videos.map(video => `
                    <li class="video-item" onclick="playVideo('${video.youtubeId}', '${video.title}')">
                        <span class="video-title">▶️ ${video.title}</span>
                        <span class="video-duration">${video.duration}</span>
                    </li>
                `).join('')}
            </ul>
        `;
        chaptersList.appendChild(chapterItem);
    });

    chaptersContainer.appendChild(chaptersList);
    document.getElementById('courseModal').classList.add('show');
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('show');
}

/* ========================================
   MODALES - VIDÉOS YouTube
   ======================================== */

function playVideo(youtubeId, title) {
    const videoFrame = document.getElementById('videoFrame');
    const videoDescription = document.getElementById('videoDescription');

    // Construire l'URL YouTube avec les paramètres
    videoFrame.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;

    videoDescription.innerHTML = `
        <h3>${title}</h3>
        <p>Vidéo éducative du cours de ${selectedCourse.name}</p>
        <p>Cliquez sur l'écran pour les contrôles de lecture complets.</p>
    `;

    document.getElementById('videoModal').classList.add('show');
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('show');
    document.getElementById('videoFrame').src = '';
}

/* ========================================
   GESTION DES ÉVÉNEMENTS
   ======================================== */

function setupEventListeners() {
    // Fermer les modales en cliquant sur X
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });

    // Fermer les modales en cliquant en dehors
    window.addEventListener('click', function(event) {
        const courseModal = document.getElementById('courseModal');
        const videoModal = document.getElementById('videoModal');

        if (event.target === courseModal) {
            courseModal.classList.remove('show');
        }
        if (event.target === videoModal) {
            videoModal.classList.remove('show');
            document.getElementById('videoFrame').src = '';
        }
    });

    // Fermer avec la touche Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('courseModal').classList.remove('show');
            document.getElementById('videoModal').classList.remove('show');
            document.getElementById('videoFrame').src = '';
        }
    });

    // Lissage du scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ========================================
   UTILITAIRES
   ======================================== */

function formatSection(section) {
    const sections = {
        'scientifique': '📐 Scientifique',
        'litteraire': '📖 Littéraire',
        'technique': '⚙️ Technique',
        'all': '🌐 Toutes sections'
    };
    return sections[section] || section;
}

// Désactiver le scroll quand une modale est ouverte
function updateBodyScroll() {
    const courseModal = document.getElementById('courseModal');
    const videoModal = document.getElementById('videoModal');

    if (courseModal.classList.contains('show') || videoModal.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Observer les changements de classe sur les modales
const observer = new MutationObserver(updateBodyScroll);
observer.observe(document.getElementById('courseModal'), { attributes: true, attributeFilter: ['class'] });
observer.observe(document.getElementById('videoModal'), { attributes: true, attributeFilter: ['class'] });