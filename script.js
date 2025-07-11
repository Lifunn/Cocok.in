// script.js - For enhanced interactivity and animations

document.addEventListener('DOMContentLoaded', () => {
    // --- Global Quiz Variables (MUST BE DEFINED BEFORE USE) ---
    const quizQuestions = [
        {
            id: 1,
            question: "Aktivitas apa yang paling Anda nikmati?",
            options: [
                { text: "Menganalisis data dan memecahkan masalah logika", category: "saintek", weight: 2 },
                { text: "Menciptakan karya seni atau desain", category: "soshum", weight: 2 },
                { text: "Bereksperimen dengan sains atau teknologi", category: "saintek", weight: 2 },
                { text: "Berdiskusi tentang isu sosial/kemanusiaan", category: "soshum", weight: 2 }
            ]
        },
        {
            id: 2,
            question: "Mata pelajaran mana yang lebih Anda sukai di sekolah?",
            options: [
                { text: "Matematika atau Fisika", category: "saintek", weight: 2 },
                { text: "Sejarah atau Sosiologi", category: "soshum", weight: 2 },
                { text: "Biologi atau Kimia", category: "saintek", weight: 1.5 },
                { text: "Bahasa atau Sastra", category: "soshum", weight: 1.5 }
            ]
        },
        {
            id: 3,
            question: "Ketika menghadapi masalah kompleks, Anda cenderung:",
            options: [
                { text: "Mencari solusi logis dan sistematis", category: "saintek", weight: 2 },
                { text: "Mempertimbangkan dampak sosial dan emosional", category: "soshum", weight: 2 },
                { text: "Melakukan riset mendalam dan analisis data", category: "saintek", weight: 1 },
                { text: "Berkolaborasi dan mencari perspektif orang lain", category: "soshum", weight: 1 }
            ]
        },
        {
            id: 4,
            question: "Jenis buku atau film apa yang paling menarik bagi Anda?",
            options: [
                { text: "Fiksi ilmiah atau dokumenter teknologi", category: "saintek", weight: 1.5 },
                { text: "Drama historis atau biografi tokoh inspiratif", category: "soshum", weight: 1.5 },
                { text: "Puzzle atau buku tentang cara kerja sesuatu", category: "saintek", weight: 1 },
                { text: "Novel psikologis atau film tentang isu sosial", category: "soshum", weight: 1 }
            ]
        },
        {
            id: 5,
            question: "Dalam sebuah proyek tim, peran apa yang paling Anda nikmati?",
            options: [
                { text: "Sebagai analis atau problem solver teknis", category: "saintek", weight: 2 },
                { text: "Sebagai komunikator atau fasilitator diskusi", category: "soshum", weight: 2 },
                { text: "Sebagai peneliti atau pengembang strategi", category: "saintek", weight: 1 },
                { text: "Sebagai mediator atau yang membangun hubungan tim", category: "soshum", weight: 1 }
            ]
        },
        {
            id: 6,
            question: "Jika Anda memiliki waktu luang, kegiatan mana yang akan Anda pilih?",
            options: [
                { text: "Mempelajari bahasa pemrograman baru atau coding", category: "saintek", weight: 2 },
                { text: "Menulis cerita, puisi, atau artikel opini", category: "soshum", weight: 2 },
                { text: "Merakit atau memperbaiki perangkat elektronik", category: "saintek", weight: 1.5 },
                { text: "Menjadi sukarelawan untuk kegiatan sosial", category: "soshum", weight: 1.5 }
            ]
        },
        {
            id: 7,
            question: "Lingkungan kerja seperti apa yang Anda idamkan?",
            options: [
                { text: "Lingkungan yang fokus pada inovasi teknologi dan data", category: "saintek", weight: 1.5 },
                { text: "Lingkungan yang kolaboratif dan berorientasi pada manusia", category: "soshum", weight: 1.5 },
                { text: "Lingkungan yang terstruktur dengan target yang jelas", category: "saintek", weight: 1 },
                { text: "Lingkungan yang dinamis dan memungkinkan interaksi sosial tinggi", category: "soshum", weight: 1 }
            ]
        },
        {
            id: 8,
            question: "Topik diskusi mana yang paling membuat Anda antusias?",
            options: [
                { text: "Perkembangan terbaru dalam kecerdasan buatan (AI)", category: "saintek", weight: 2 },
                { text: "Analisis dampak kebijakan publik terhadap masyarakat", category: "soshum", weight: 2 },
                { text: "Penemuan ilmiah baru dan implikasinya", category: "saintek", weight: 1 },
                { text: "Gerakan sosial dan perubahan budaya global", category: "soshum", weight: 1 }
            ]
        },
        {
            id: 9,
            question: "Ketika belajar hal baru, metode apa yang paling efektif untuk Anda?",
            options: [
                { text: "Melalui eksperimen langsung dan praktik (learning by doing)", category: "saintek", weight: 2 },
                { text: "Melalui diskusi kelompok dan bertukar ide", category: "soshum", weight: 2 },
                { text: "Membaca buku teks dan memahami konsep secara mendalam", category: "saintek", weight: 1.5 },
                { text: "Menghubungkan materi dengan pengalaman pribadi atau cerita", category: "soshum", weight: 1.5 }
            ]
        },
        {
            id: 10,
            question: "Jenis permainan atau teka-teki apa yang Anda sukai?",
            options: [
                { text: "Permainan strategi berbasis logika atau angka (catur, sudoku)", category: "saintek", weight: 2 },
                { text: "Permainan peran (role-playing games) atau permainan kata", category: "soshum", weight: 2 },
                { text: "Teka-teki mekanik atau membangun model", category: "saintek", weight: 1 },
                { text: "Permainan yang melibatkan negosiasi atau interaksi sosial", category: "soshum", weight: 1 }
            ]
        }
    ];
    let currentQuestionIndex = 0;
    let userAnswers = new Array(quizQuestions.length).fill(null);

    // --- Element Variables (fetched once per page load) ---
    const splashScreen = document.getElementById('splashScreen');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const alumniSignupForm = document.getElementById('alumniSignupForm');
    const greetingName = document.getElementById('userGreetingName');
    const dashboardContent = document.querySelector('.dashboard-content');

    const quizContainer = document.getElementById('quizContainer');
    const questionTextEl = document.getElementById('questionText');
    const optionsContainerEl = document.getElementById('optionsContainer');
    const quizFormEl = document.getElementById('quizForm');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');
    const finishButton = document.getElementById('finishButton');
    const quizProgressBar = document.getElementById('quizProgressBar');
    const quizProgressText = document.getElementById('quizProgressText');
    const logoutButton = document.getElementById('logoutButton'); // Added logout button

    // --- Chatbot Elements ---
    const chatToggleButton = document.getElementById('chatToggleButton');
    const chatContainer = document.getElementById('chatContainer');
    const closeChatButton = document.getElementById('closeChatButton');
    const chatMessagesContainer = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendChatButton = document.getElementById('sendChatButton');

    // --- General Page Load Logic ---
    const currentPagePath = window.location.pathname;
    const userName = localStorage.getItem('userName');
    const quizResultKey = userName ? `quizResultData_${userName}` : null;

    if (!userName && (currentPagePath.endsWith('dashboard.html') || currentPagePath.endsWith('quiz.html'))) {
        alert('Anda harus login terlebih dahulu.');
        window.location.href = 'login.html';
        return;
    }

    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
                if (userName) {
                    if (quizResultKey && localStorage.getItem(quizResultKey)) {
                        window.location.href = 'dashboard.html';
                    } else {
                        window.location.href = 'quiz.html';
                    }
                }
            }, 500);
        }, 2000);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const derivedUserName = email.split('@')[0];
            localStorage.setItem('userName', derivedUserName);
            const userQuizResultKey = `quizResultData_${derivedUserName}`;
            if (localStorage.getItem(userQuizResultKey)) {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'quiz.html';
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = document.getElementById('fullName').value;
            localStorage.setItem('userName', fullName);
            window.location.href = 'quiz.html';
        });
    }

    if (alumniSignupForm) {
        alumniSignupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const alumniFullName = document.getElementById('alumniFullName').value;
            localStorage.setItem('userName', alumniFullName);
            window.location.href = 'quiz.html';
        });
    }

    if (currentPagePath.endsWith('dashboard.html')) {
        if (!userName) {
            window.location.href = 'login.html';
            return;
        }
        if (quizResultKey && !localStorage.getItem(quizResultKey)) {
            alert('Anda harus menyelesaikan Tes Minat Bakat terlebih dahulu.');
            window.location.href = 'quiz.html';
            return;
        }
        if (greetingName && userName) {
            greetingName.textContent = userName;
        }
        const talentResultSection = document.getElementById('talentResultSection');
        if (talentResultSection) {
            const storedResultData = quizResultKey ? localStorage.getItem(quizResultKey) : null;
            if (storedResultData) {
                const resultData = JSON.parse(storedResultData);
                talentResultSection.innerHTML = `
                    <div class="talent-result-card">
                        <div class="talent-score">
                            <div class="score-circle">${resultData.scorePercentage}%</div>
                        </div>
                        <div class="talent-info">
                            <h3>Hasil Minat Bakat Anda</h3>
                            <p><strong>Rekomendasi Bidang: ${resultData.field}</strong></p>
                            <p>Skor Saintek: ${resultData.saintekPercentage}% (Raw: ${resultData.saintekRaw})</p>
                            <p>Skor Soshum: ${resultData.soshumPercentage}% (Raw: ${resultData.soshumRaw})</p>
                            <p>${resultData.message}</p>
                            <button id="retakeQuizButton" class="button-link retake-quiz-button">Ulangi Tes Minat Bakat</button>
                        </div>
                    </div>
                `;
                const retakeQuizButton = document.getElementById('retakeQuizButton');
                if (retakeQuizButton) {
                    retakeQuizButton.addEventListener('click', () => {
                        if (quizResultKey) {
                            localStorage.removeItem(quizResultKey);
                        }
                        currentQuestionIndex = 0;
                        userAnswers = new Array(quizQuestions.length).fill(null);
                        window.location.href = 'quiz.html';
                    });
                }
            } else {
                talentResultSection.innerHTML = `
                    <div class="talent-result-card placeholder">
                        <div class="talent-info">
                            <h3>Hasil Minat Bakat</h3>
                            <p>Anda belum menyelesaikan Tes Minat Bakat.</p>
                            <a href="quiz.html" class="button-link">Mulai Tes Sekarang</a>
                        </div>
                    </div>
                `;
            }
        }
        if (dashboardContent) {
            setTimeout(() => {
                dashboardContent.classList.add('visible');
            }, 100);
        }
    }

    if (currentPagePath.endsWith('quiz.html')) {
        console.log("DEBUG: Entering Quiz Page Specific Logic");
        if (!userName) {
            alert('Anda harus login terlebih dahulu untuk mengerjakan tes.');
            window.location.href = 'login.html';
            return;
        }
        if (quizResultKey && localStorage.getItem(quizResultKey)) {
            alert('Anda sudah mengerjakan Tes Minat Bakat. Mengarahkan ke Dashboard.');
            window.location.href = 'dashboard.html';
            return;
        }

        if (quizContainer && questionTextEl && optionsContainerEl && quizFormEl && nextButton && backButton && finishButton && quizProgressBar && quizProgressText) {
            console.log("DEBUG: All quiz elements found, proceeding to initialize quiz.");
            currentQuestionIndex = 0;
            userAnswers = new Array(quizQuestions.length).fill(null);

            loadQuestion(currentQuestionIndex);
        } else {
            console.error("CRITICAL: One or more essential quiz elements are missing from quiz.html. Check IDs.");
            if (!quizContainer) console.error("Missing: quizContainer");
            if (!questionTextEl) console.error("Missing: questionTextEl");
            if (!optionsContainerEl) console.error("Missing: optionsContainerEl");
            return;
        }
    }

    function loadQuestion(index) {
        console.log(`DEBUG: loadQuestion called for index: ${index}`);
        if (!questionTextEl || !optionsContainerEl) {
            console.error("loadQuestion ERROR: questionTextEl or optionsContainerEl is null.");
            return;
        }
        if (!quizQuestions || index < 0 || index >= quizQuestions.length) {
            console.error(`loadQuestion ERROR: Invalid question index ${index} or quizQuestions data is missing/empty.`);
            questionTextEl.textContent = 'Error: Could not load question data.';
            optionsContainerEl.innerHTML = '';
            return;
        }

        const question = quizQuestions[index];
        questionTextEl.textContent = question.question;
        optionsContainerEl.innerHTML = '';

        question.options.forEach((option, optionIndex) => {
            const optionId = `q${index}_option${optionIndex}`;
            const label = document.createElement('label');
            label.className = 'quiz-option';
            label.htmlFor = optionId;

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question_${index}`;
            input.id = optionId;
            input.value = optionIndex;
            input.required = true;

            if (userAnswers[index] !== null && parseInt(userAnswers[index]) === optionIndex) {
                input.checked = true;
                label.classList.add('selected');
            }

            input.addEventListener('change', () => {
                document.querySelectorAll(`input[name="question_${index}"]`).forEach(optRadio => {
                    optRadio.closest('.quiz-option').classList.remove('selected');
                });
                if (input.checked) {
                    label.classList.add('selected');
                }
                userAnswers[index] = input.value;
            });

            const span = document.createElement('span');
            span.textContent = option.text;

            label.appendChild(input);
            label.appendChild(span);
            optionsContainerEl.appendChild(label);
        });

        updateNavigationButtons();
        updateProgressBar();
    }

    function updateNavigationButtons() {
        if (!nextButton || !backButton || !finishButton) return;
        backButton.disabled = currentQuestionIndex === 0;
        if (currentQuestionIndex === quizQuestions.length - 1) {
            nextButton.style.display = 'none';
            finishButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            finishButton.style.display = 'none';
        }
    }

    function updateProgressBar() {
        if (!quizProgressBar || !quizProgressText) return;
        const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
        quizProgressBar.style.width = `${progressPercentage}%`;
        quizProgressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (!currentPagePath.endsWith('quiz.html')) return;
            if (userAnswers[currentQuestionIndex] === null) {
                alert('Harap pilih salah satu jawaban.');
                return;
            }
            if (currentQuestionIndex < quizQuestions.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
            }
        });
    }

    if (backButton) {
        backButton.addEventListener('click', () => {
            if (!currentPagePath.endsWith('quiz.html')) return;
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion(currentQuestionIndex);
            }
        });
    }

    if (quizFormEl) {
        quizFormEl.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!currentPagePath.endsWith('quiz.html')) return;

            if (userAnswers[currentQuestionIndex] === null && currentQuestionIndex === quizQuestions.length - 1) {
                alert('Harap pilih salah satu jawaban untuk pertanyaan terakhir.');
                return;
            }
            const allAnswered = userAnswers.every(answer => answer !== null);
            if (!allAnswered) {
                 alert('Harap jawab semua pertanyaan sebelum menyelesaikan kuis.');
                 const firstUnanswered = userAnswers.findIndex(answer => answer === null);
                 if (firstUnanswered !== -1) {
                     currentQuestionIndex = firstUnanswered;
                     loadQuestion(currentQuestionIndex);
                 }
                 return;
            }
            calculateAndStoreResults();
            window.location.href = 'dashboard.html';
        });
    }

    function calculateAndStoreResults() {
        let saintekScore = 0;
        let soshumScore = 0;
        userAnswers.forEach((answerIndex, questionIdx) => {
            if (answerIndex !== null) {
                const question = quizQuestions[questionIdx];
                const selectedOption = question.options[parseInt(answerIndex)];
                if (selectedOption.category === 'saintek') {
                    saintekScore += selectedOption.weight;
                } else if (selectedOption.category === 'soshum') {
                    soshumScore += selectedOption.weight;
                }
            }
        });
        let maxSaintek = 0;
        let maxSoshum = 0;
        quizQuestions.forEach(q => {
            q.options.forEach(opt => {
                if(opt.category === 'saintek') maxSaintek += opt.weight;
                if(opt.category === 'soshum') maxSoshum += opt.weight;
            });
        });
        const result = getInterestRecommendationAPI_V2(saintekScore, soshumScore, maxSaintek, maxSoshum);
        const currentUserNameForStorage = localStorage.getItem('userName');
        const userSpecificQuizResultKey = currentUserNameForStorage ? `quizResultData_${currentUserNameForStorage}` : null;
        if (userSpecificQuizResultKey) {
            localStorage.setItem(userSpecificQuizResultKey, JSON.stringify(result));
        } else {
            console.error("Error: userName not found, cannot save quiz results.");
        }
    }

    function getInterestRecommendationAPI_V2(saintekScore, soshumScore, maxSaintek, maxSoshum) {
        let recommendation = {
            field: "Belum diketahui",
            scorePercentage: 0,
            message: "Selesaikan Tes Minat Bakat untuk melihat rekomendasi.",
            saintekPercentage: maxSaintek > 0 ? parseFloat((saintekScore / maxSaintek * 100).toFixed(1)) : 0,
            soshumPercentage: maxSoshum > 0 ? parseFloat((soshumScore / maxSoshum * 100).toFixed(1)) : 0,
            saintekRaw: saintekScore,
            soshumRaw: soshumScore
        };
        const saintekRatio = maxSaintek > 0 ? saintekScore / maxSaintek : 0;
        const soshumRatio = maxSoshum > 0 ? soshumScore / maxSoshum : 0;

        if (saintekRatio > soshumRatio && saintekRatio >= 0.6) {
            recommendation.field = "Dominan Saintek";
            recommendation.scorePercentage = recommendation.saintekPercentage;
            recommendation.message = `Dengan skor Saintek ${recommendation.saintekPercentage}% dan Soshum ${recommendation.soshumPercentage}%, Anda menunjukkan minat kuat di bidang Saintek. Pertimbangkan jurusan seperti Teknik, Kedokteran, atau Ilmu Komputer.`;
        } else if (soshumRatio > saintekRatio && soshumRatio >= 0.6) {
            recommendation.field = "Dominan Soshum";
            recommendation.scorePercentage = recommendation.soshumPercentage;
            recommendation.message = `Dengan skor Soshum ${recommendation.soshumPercentage}% dan Saintek ${recommendation.saintekPercentage}%, Anda menunjukkan minat kuat di bidang Soshum. Jurusan seperti Psikologi, Komunikasi, atau Hukum bisa jadi pilihan.`;
        } else if (saintekRatio >= 0.4 && soshumRatio >= 0.4) {
            recommendation.field = "Seimbang (Saintek & Soshum)";
            recommendation.scorePercentage = parseFloat(Math.max(recommendation.saintekPercentage, recommendation.soshumPercentage).toFixed(1));
            recommendation.message = `Skor Anda cukup seimbang (Saintek ${recommendation.saintekPercentage}%, Soshum ${recommendation.soshumPercentage}%). Anda memiliki fleksibilitas untuk memilih di kedua bidang atau mencari jurusan yang menggabungkan keduanya.`;
        } else if (saintekRatio > soshumRatio) {
            recommendation.field = "Cenderung Saintek";
            recommendation.scorePercentage = recommendation.saintekPercentage;
            recommendation.message = `Anda cenderung memiliki minat ke Saintek (${recommendation.saintekPercentage}%) dibandingkan Soshum (${recommendation.soshumPercentage}%). Eksplorasi lebih lanjut jurusan Saintek yang menarik bagi Anda.`;
        } else if (soshumRatio > saintekRatio) {
            recommendation.field = "Cenderung Soshum";
            recommendation.scorePercentage = recommendation.soshumPercentage;
            recommendation.message = `Anda cenderung memiliki minat ke Soshum (${recommendation.soshumPercentage}%) dibandingkan Saintek (${recommendation.saintekPercentage}%). Eksplorasi lebih lanjut jurusan Soshum yang menarik bagi Anda.`;
        } else if (saintekScore === 0 && soshumScore === 0 && (maxSaintek > 0 || maxSoshum > 0)) {
             recommendation.field = "Tidak Ada Preferensi Jelas";
             recommendation.scorePercentage = 0;
             recommendation.message = `Anda belum menunjukkan preferensi yang jelas antara Saintek (${recommendation.saintekPercentage}%) dan Soshum (${recommendation.soshumPercentage}%). Coba ulangi tes atau diskusikan minat Anda lebih lanjut.`;
        } else {
            recommendation.field = "Perlu Eksplorasi Lebih Lanjut";
            recommendation.scorePercentage = parseFloat(Math.max(recommendation.saintekPercentage, recommendation.soshumPercentage, 20).toFixed(1));
            recommendation.message = `Hasil tes Anda (Saintek ${recommendation.saintekPercentage}%, Soshum ${recommendation.soshumPercentage}%) menunjukkan perlunya eksplorasi minat lebih dalam. Coba diskusikan dengan konselor atau alumni.`;
        }
        return recommendation;
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('userName');
            // Optionally, remove quiz results too, or handle them as per your app's logic
            // For example, to remove all quiz results associated with the user (if you have a pattern):
            // Object.keys(localStorage).forEach(key => {
            //     if (key.startsWith('quizResultData_')) { // Or a more specific pattern if needed
            //         localStorage.removeItem(key);
            //     }
            // });
            window.location.href = 'login.html';
        });
    }

    // --- Chatbot Logic ---
    if (chatToggleButton && chatContainer && closeChatButton && chatMessagesContainer && chatInput && sendChatButton) {
        chatToggleButton.addEventListener('click', () => {
            chatContainer.classList.toggle('hidden');
            if (!chatContainer.classList.contains('hidden')) {
                chatInput.focus();
            }
        });

        closeChatButton.addEventListener('click', () => {
            chatContainer.classList.add('hidden');
        });

        sendChatButton.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleSendMessage();
            }
        });

        async function handleSendMessage() { // Made async
            const messageText = chatInput.value.trim();
            if (messageText === '') return;

            appendMessage(messageText, 'user');
            chatInput.value = '';
            appendMessage('Bot sedang mengetik...', 'bot-typing'); // Typing indicator

            try {
                const botResponse = await getOpenRouterResponse(messageText);
                // Remove typing indicator before appending actual response
                const typingIndicator = chatMessagesContainer.querySelector('.bot-typing');
                if (typingIndicator) {
                    typingIndicator.remove();
                }
                appendMessage(botResponse, 'bot');
            } catch (error) {
                console.error('Error fetching from OpenRouter:', error);
                const typingIndicator = chatMessagesContainer.querySelector('.bot-typing');
                if (typingIndicator) {
                    typingIndicator.remove();
                }
                appendMessage('Maaf, terjadi kesalahan saat menghubungi AI. Coba lagi nanti.', 'bot');
            }
        }

        function appendMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', sender);
            messageDiv.textContent = text;
            chatMessagesContainer.appendChild(messageDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Auto-scroll to bottom
        }

        async function getOpenRouterResponse(userMessage) {
            // !!! IMPORTANT: REPLACE 'YOUR_OPENROUTER_API_KEY' WITH YOUR ACTUAL KEY !!!
            // !!! DO NOT COMMIT THIS KEY TO A PUBLIC REPOSITORY. CONSIDER USING A BACKEND PROXY FOR PRODUCTION !!!
            const OPENROUTER_API_KEY = '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'; 
            const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

            // You can choose different models available on OpenRouter
            // For example: "openai/gpt-3.5-turbo", "google/gemini-pro", "mistralai/mistral-7b-instruct"
            // Check OpenRouter documentation for available models: https://openrouter.ai/docs#models
            const modelToUse = 'google/gemini-2.0-flash-lite-001'; // Example model, choose one that fits your needs

            const headers = {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json'
            };

            const body = JSON.stringify({
                model: modelToUse,
                messages: [
                    { role: 'system', content: 'Anda adalah asisten AI untuk Cocok.in, sebuah aplikasi yang membantu pengguna menemukan jalur universitas yang cocok. Berikan jawaban yang ramah, membantu, dan relevan dengan pencarian jurusan, tes minat bakat, dan informasi seputar universitas.' },
                    { role: 'user', content: userMessage }
                    // To maintain conversation history, you would add previous messages here.
                    // For example: 
                    // ...chatMessagesContainer.querySelectorAll('.chat-message:not(.bot-typing)').map(msgElement => ({
                    //    role: msgElement.classList.contains('user') ? 'user' : 'assistant',
                    //    content: msgElement.textContent
                    // })),
                    // { role: 'user', content: userMessage } // Current user message is already added
                ]
            });

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: headers,
                    body: body
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('OpenRouter API Error:', errorData);
                    throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || response.statusText}`);
                }

                const data = await response.json();
                if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
                    return data.choices[0].message.content.trim();
                } else {
                    console.error('Unexpected response structure from OpenRouter:', data);
                    throw new Error('Could not extract message from API response.');
                }
            } catch (error) {
                console.error('Fetch error:', error);
                throw error; // Re-throw to be caught by handleSendMessage
            }
        }

        // Remove or comment out the old getSimulatedBotResponse function
        /*
        function getSimulatedBotResponse(userMessage) {
            // ... old simulation logic ...
        }
        */
    }

}); // Akhir dari DOMContentLoaded
