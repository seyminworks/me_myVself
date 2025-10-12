// Sample data
// YouTube video ID는 URL에서 가져옵니다
// 예: https://www.youtube.com/watch?v=dQw4w9WgXcQ 에서 'dQw4w9WgXcQ' 부분
const personas = [];

// First 3 personas - Released (for testing)
const releasedPersonas = [
    {
        id: 1,
        name: "Kim Minsu",
        tag: "AI Researcher",
        youtubeId: "dQw4w9WgXcQ",
        released: true,
        conversations: [
            "I want to talk about the future of artificial intelligence. How will our lives change as technology advances?",
            "I believe ethical AI development is truly important."
        ],
        keywords: ["AI", "Future", "Ethics", "Technology"]
    },
    {
        id: 2,
        name: "Park Jieun",
        tag: "Digital Artist",
        youtubeId: "dQw4w9WgXcQ",
        released: true,
        conversations: [
            "We live in an era where the boundaries between art and technology are blurring.",
            "The possibilities of expression through digital media are infinite."
        ],
        keywords: ["Art", "Digital", "Creation", "Expression"]
    },
    {
        id: 3,
        name: "Lee Junho",
        tag: "Environmental Activist",
        youtubeId: "dQw4w9WgXcQ",
        released: true,
        conversations: [
            "I think about what we can do for the future of our planet.",
            "Small actions can come together to create big changes."
        ],
        keywords: ["Environment", "Sustainability", "Action", "Change"]
    }
];

personas.push(...releasedPersonas);

// Remaining 47 personas - Not released
for (let i = 4; i <= 50; i++) {
    personas.push({
        id: i,
        name: "****",
        tag: "Coming Soon",
        youtubeId: null,
        released: false,
        conversations: [
            "This persona will be revealed soon.",
            "Stay tuned for updates."
        ],
        keywords: ["****", "****", "****"]
    });
}

// Create grid
const grid = document.getElementById('personasGrid');
personas.forEach(persona => {
    const card = document.createElement('a');
    card.className = `persona-card${!persona.released ? ' unreleased' : ''}`;
    card.href = '#';
    
    if (persona.released) {
        card.onclick = (e) => {
            e.preventDefault();
            showDetail(persona.id);
        };
    } else {
        card.onclick = (e) => {
            e.preventDefault();
        };
    }
    
    card.innerHTML = `
        <div class="persona-image">
            <img src="data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23${persona.released ? Math.floor(Math.random()*16777215).toString(16) : 'cccccc'}'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='24' font-family='monospace'%3E${persona.name}%3C/text%3E%3C/svg%3E" alt="${persona.name}">
        </div>
        <div class="persona-name">${persona.name}</div>
        <div class="persona-tag">${persona.tag}</div>
    `;
    grid.appendChild(card);
});

// Show detail page
function showDetail(id) {
    const persona = personas.find(p => p.id === id);
    if (!persona) return;

    document.getElementById('detailName').textContent = persona.name;
    document.getElementById('detailTag').textContent = persona.tag;

    // YouTube video embed
    const videoSection = document.getElementById('videoSection');
    if (persona.youtubeId && persona.released) {
        videoSection.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${persona.youtubeId}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        `;
    } else {
        videoSection.innerHTML = '<div>Coming Soon</div>';
    }

    const convContent = document.getElementById('conversationContent');
    convContent.innerHTML = persona.conversations
        .map(conv => `<div class="conversation-box">${conv}</div>`)
        .join('');

    const keywordsContent = document.getElementById('keywordsContent');
    keywordsContent.innerHTML = persona.keywords
        .map(keyword => `<span class="keyword-tag">${keyword}</span>`)
        .join('');

    document.getElementById('indexPage').style.display = 'none';
    document.getElementById('detailPage').classList.add('active');
    window.location.hash = `persona-${id}`;
    window.scrollTo(0, 0);
}

// Back to index page
function showIndex() {
    document.getElementById('indexPage').style.display = 'block';
    document.getElementById('detailPage').classList.remove('active');
    window.location.hash = 'grid';
    window.scrollTo(0, 0);
}

// Hash change detection
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash === 'grid' || hash === '') {
        showIndex();
    } else if (hash.startsWith('persona-')) {
        const id = parseInt(hash.replace('persona-', ''));
        showDetail(id);
    }
});

// Initial load - check hash
window.addEventListener('load', () => {
    const hash = window.location.hash.slice(1);
    if (hash.startsWith('persona-')) {
        const id = parseInt(hash.replace('persona-', ''));
        showDetail(id);
    }
});
