// GCSE Science Foundation Revision Flashcard Data
// Grid: 4 Rows x 4 Columns (1 Pt Recall, 2 Pts Describe, 3 Pts Apply, 4 Pts Challenge)
// Total Points: 40 Points (Green Pen Marking)

const flashcards = [
    // --- ROW 1: STATES OF MATTER & CHANGES ---
    {
        id: 1,
        row: 1,
        topic: "matter",
        topicName: "States of Matter & Changes",
        points: 1,
        pointsLabel: "1 Point • Recall",
        question: "What do we call the change of state when solid ice turns into liquid water?",
        answer: "Melting."
    },
    {
        id: 2,
        row: 1,
        topic: "matter",
        topicName: "States of Matter & Changes",
        points: 2,
        pointsLabel: "2 Points • Describe",
        question: "How are particles arranged in a solid?",
        answer: "Tightly packed together in neat/regular rows (vibrating on the spot)."
    },
    {
        id: 3,
        row: 1,
        topic: "matter",
        topicName: "States of Matter & Changes",
        points: 3,
        pointsLabel: "3 Points • Apply",
        question: "Steam hits a cold mirror and turns into water droplets. What is the name of this state change?",
        answer: "Condensing (or condensation)."
    },
    {
        id: 4,
        row: 1,
        topic: "matter",
        topicName: "States of Matter & Changes",
        points: 4,
        pointsLabel: "4 Points • Challenge",
        question: "Why are changes of state called physical changes rather than chemical changes?",
        answer: "Because they are easy to reverse and no new substance is made."
    },

    // --- ROW 2: SPECIFIC HEAT & LATENT HEAT ---
    {
        id: 5,
        row: 2,
        topic: "heat",
        topicName: "Specific Heat & Latent Heat",
        points: 1,
        pointsLabel: "1 Point • Recall",
        question: "Which heats up faster: water or metal?",
        answer: "Metal."
    },
    {
        id: 6,
        row: 2,
        topic: "heat",
        topicName: "Specific Heat & Latent Heat",
        points: 2,
        pointsLabel: "2 Points • Describe",
        question: "What happens to the temperature of ice while it is melting into water?",
        answer: "It stays the same (stays flat at 0°C)."
    },
    {
        id: 7,
        row: 2,
        topic: "heat",
        topicName: "Specific Heat & Latent Heat",
        points: 3,
        pointsLabel: "3 Points • Apply",
        question: "Is the energy needed to melt a solid without changing its temperature called specific or latent heat?",
        answer: "Latent heat."
    },
    {
        id: 8,
        row: 2,
        topic: "heat",
        topicName: "Specific Heat & Latent Heat",
        points: 4,
        pointsLabel: "4 Points • Challenge",
        question: "At the beach, why does the sea stay cool while the sand gets very hot on a sunny day?",
        answer: "Water has a much higher specific heat capacity than sand, so it takes much more energy to warm up."
    },

    // --- ROW 3: GAS PRESSURE ---
    {
        id: 9,
        row: 3,
        topic: "pressure",
        topicName: "Gas Pressure",
        points: 1,
        pointsLabel: "1 Point • Recall",
        question: "True or False: Gas particles stay completely still inside a balloon.",
        answer: "False (they move very fast in all directions)."
    },
    {
        id: 10,
        row: 3,
        topic: "pressure",
        topicName: "Gas Pressure",
        points: 2,
        pointsLabel: "2 Points • Describe",
        question: "What causes gas pressure inside a container?",
        answer: "Gas particles bumping/colliding into the walls of the container."
    },
    {
        id: 11,
        row: 3,
        topic: "pressure",
        topicName: "Gas Pressure",
        points: 3,
        pointsLabel: "3 Points • Apply",
        question: "What happens to the speed of gas particles when you heat them up?",
        answer: "They move faster (gain kinetic energy)."
    },
    {
        id: 12,
        row: 3,
        topic: "pressure",
        topicName: "Gas Pressure",
        points: 4,
        pointsLabel: "4 Points • Challenge",
        question: "Why does pumping more air into a bike tyre increase the pressure inside it?",
        answer: "There are more particles inside, so they hit the walls more often."
    },

    // --- ROW 4: DENSITY & FLOATING ---
    {
        id: 13,
        row: 4,
        topic: "density",
        topicName: "Density & Floating",
        points: 1,
        pointsLabel: "1 Point • Recall",
        question: "What do we call the upward push of water that helps boats float?",
        answer: "Upthrust."
    },
    {
        id: 14,
        row: 4,
        topic: "density",
        topicName: "Density & Floating",
        points: 2,
        pointsLabel: "2 Points • Describe",
        question: "Water has a density of 1.0 g/cm³. Will an ice cube (density 0.9 g/cm³) float or sink?",
        answer: "Float (because 0.9 is less dense than 1.0)."
    },
    {
        id: 15,
        row: 4,
        topic: "density",
        topicName: "Density & Floating",
        points: 3,
        pointsLabel: "3 Points • Apply",
        question: "What is the formula for calculating Density using Mass and Volume?",
        answer: "Density = Mass ÷ Volume (or Density = Mass / Volume)."
    },
    {
        id: 16,
        row: 4,
        topic: "density",
        topicName: "Density & Floating",
        points: 4,
        pointsLabel: "4 Points • Challenge",
        question: "Calculate the density of a rock with a Mass of 30 g and a Volume of 6 cm³.",
        answer: "30 ÷ 6 = 5 g/cm³."
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');
    const flipAllButton = document.getElementById('flip-all-button');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const flippedCountEl = document.getElementById('flipped-count');
    const totalCountEl = document.getElementById('total-count');
    const scoreCountEl = document.getElementById('score-count');
    const progressBarFill = document.getElementById('progress-bar-fill');

    let currentFilter = 'all';

    // Topic Icons
    const topicIcons = {
        matter: '🧊',
        heat: '🔥',
        pressure: '🎈',
        density: '⚖️'
    };

    // Render flashcards
    function renderFlashcards() {
        container.innerHTML = '';

        flashcards.forEach(card => {
            const cardEl = document.createElement('div');
            cardEl.className = 'flashcard';
            cardEl.setAttribute('data-id', card.id);
            cardEl.setAttribute('data-topic', card.topic);
            cardEl.setAttribute('data-points', card.points);
            cardEl.setAttribute('tabindex', '0');
            cardEl.setAttribute('role', 'button');
            cardEl.setAttribute('aria-label', `Question ${card.id} (${card.pointsLabel}): ${card.question}. Click to reveal answer.`);

            if (currentFilter !== 'all' && card.topic !== currentFilter) {
                cardEl.classList.add('hidden');
            }

            const icon = topicIcons[card.topic] || '💡';

            cardEl.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="card-meta-row">
                            <span class="question-number">Question ${card.id}</span>
                            <span class="points-badge pts-${card.points}">${card.pointsLabel}</span>
                        </div>
                        <div class="topic-tag topic-${card.topic}">${icon} ${card.topicName}</div>
                        <div class="question-text">${card.question}</div>
                        <div class="click-hint">Click card to reveal answer &rarr;</div>
                    </div>
                    <div class="card-back topic-${card.topic}">
                        <div class="card-meta-row">
                            <span class="answer-label">Answer ${card.id}</span>
                            <span class="green-pen-badge">✓ Green Pen</span>
                        </div>
                        <div class="answer-points-banner">${card.pointsLabel}</div>
                        <div class="answer-text">${card.answer}</div>
                        <div class="click-hint">&larr; Click to show question</div>
                    </div>
                </div>
            `;

            // Click flip handler
            cardEl.addEventListener('click', () => {
                cardEl.classList.toggle('flipped');
                updateProgress();
            });

            // Keyboard accessibility (Enter or Space)
            cardEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    cardEl.classList.toggle('flipped');
                    updateProgress();
                }
            });

            container.appendChild(cardEl);
        });

        updateProgress();
    }

    // Update study progress & score tracker
    function updateProgress() {
        const visibleCards = Array.from(document.querySelectorAll('.flashcard:not(.hidden)'));
        const flippedVisible = visibleCards.filter(c => c.classList.contains('flipped'));

        let totalScore = 0;
        let earnedScore = 0;

        visibleCards.forEach(c => {
            const pts = parseInt(c.getAttribute('data-points'), 10) || 0;
            totalScore += pts;
            if (c.classList.contains('flipped')) {
                earnedScore += pts;
            }
        });

        flippedCountEl.textContent = flippedVisible.length;
        totalCountEl.textContent = visibleCards.length;
        if (scoreCountEl) {
            scoreCountEl.textContent = earnedScore;
            const maxScoreEl = document.getElementById('max-score');
            if (maxScoreEl) maxScoreEl.textContent = totalScore;
        }

        const percentage = visibleCards.length > 0 ? (flippedVisible.length / visibleCards.length) * 100 : 0;
        progressBarFill.style.width = `${percentage}%`;
    }

    // Reset all cards
    function resetAllCards() {
        const allCards = document.querySelectorAll('.flashcard');
        allCards.forEach(c => c.classList.remove('flipped'));
        updateProgress();
    }

    // Flip all visible cards
    function flipAllCards() {
        const visibleCards = document.querySelectorAll('.flashcard:not(.hidden)');
        visibleCards.forEach(c => c.classList.add('flipped'));
        updateProgress();
    }

    // Filter cards by topic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            currentFilter = btn.getAttribute('data-topic');

            const allCards = document.querySelectorAll('.flashcard');
            allCards.forEach(card => {
                const cardTopic = card.getAttribute('data-topic');
                if (currentFilter === 'all' || cardTopic === currentFilter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });

            updateProgress();
        });
    });

    // Attach footer button listeners
    resetButton.addEventListener('click', resetAllCards);
    flipAllButton.addEventListener('click', flipAllCards);

    // Initial render
    renderFlashcards();
});
