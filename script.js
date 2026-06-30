document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggler
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // 2. Change Navbar styling on scroll
    const header = document.getElementById('header');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        // Background change
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll progress percentage calculation
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const percentage = (window.scrollY / totalHeight) * 100;
            scrollProgress.style.width = percentage + '%';
        }
    });

    // 3. Reveal Elements on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Counter Up Animation for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const isZero = target === 0;
        
        // If the target is exactly 0, handle it instantly
        if (isZero) {
            el.textContent = '0';
            return;
        }

        let current = 0;
        const duration = 2000; // 2 seconds duration
        const increment = target / (duration / 16); // ~60fps
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                el.textContent = Math.ceil(current) + (target === 100 ? '%' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                el.textContent = target + (target === 100 ? '%' : '+');
            }
        };
        
        updateCounter();
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNumber = entry.target;
                animateCounter(targetNumber);
                observer.unobserve(targetNumber); // Animate only once
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(num => statsObserver.observe(num));

    // 5. FAQ Accordion Animation
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items first (optional, but clean UX)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-content').style.maxHeight = '0px';
                    otherItem.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle active state for current item
            if (isActive) {
                item.classList.remove('active');
                content.style.maxHeight = '0px';
                button.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                // Calculate scrollHeight dynamically for the transition
                content.style.maxHeight = content.scrollHeight + 'px';
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 6. Dynamic Year in Footer
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // 7. Services Modal and Image Carousel
    const servicesData = {
        corporativo: {
            badge: "CORPORATIVO",
            title: "Móveis Corporativos",
            desc: "Nossa especialidade é a montagem técnica e layout de alta performance para escritórios, salas de reunião, coworkings e comércios. Desenvolvemos toda a logística de montagem para garantir prazos rápidos, alinhamento cirúrgico e estabilidade a longo prazo dos seus móveis de trabalho.",
            images: [
                "assets/corporativo_1.png",
                "assets/corporativo_2.png"
            ],
            features: [
                "Montagem em escala de Estações de Trabalho",
                "Fixação precisa de Mesas de Reunião e Gerência",
                "Montagem de Cadeiras e Gaveteiros Corporativos",
                "Passagem segura de cabeamento por calhas e furações",
                "Ajuste micrométrico de portas, trilhos e arquivos"
            ],
            whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento para montagem de móveis corporativos."
        },
        residencial: {
            badge: "RESIDENCIAL",
            title: "Móveis Residenciais",
            desc: "Cuidado absoluto com o seu lar. Nossos montadores são treinados para manusear e fixar desde painéis suspensos a guarda-roupas de grande porte com precisão absoluta. Garantimos que seus móveis fiquem perfeitos, organizados e sem qualquer arranhão nas superfícies.",
            images: [
                "assets/residencial_1.png",
                "assets/residencial_2.png"
            ],
            features: [
                "Montagem cuidadosa de Guarda-roupas de casal e solteiro",
                "Instalação e fixação firme de Painéis suspensos para TV",
                "Nivelamento de portas de correr com amortecedores",
                "Montagem de camas, criados-mudos e cômodas",
                "Limpeza pós-montagem com descarte adequado de caixas"
            ],
            whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento para montagem de móveis residenciais."
        },
        divisorias: {
            badge: "ACABAMENTO",
            title: "Paredes, Gesso & Pintura",
            desc: "Instalação especializada de divisórias navais (Eucatex), paredes de drywall, forros de gesso/PVC e pintura profissional residencial ou comercial. Soluções completas com acabamento de alta qualidade e rapidez.",
            images: [
                "assets/divisorias_1.png",
                "assets/divisorias_2.png"
            ],
            features: [
                "Montagem e ajuste de Divisórias Navais (Eucatex) para escritórios",
                "Construção de Paredes de Drywall com excelente isolamento",
                "Instalação de Forros de Gesso liso e teto de PVC",
                "Pintura residencial e comercial de alto padrão",
                "Preparação de superfícies com massa corrida e texturas",
                "Acabamentos decorativos com sancas, molduras e rodapés"
            ],
            whatsappMessage: "Olá! Vim pelo site e gostaria de solicitar um orçamento para paredes navais, gesso ou pintura."
        }
    };

    const serviceCards = document.querySelectorAll('.clickable-card');
    const serviceModal = document.getElementById('service-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const modalBadge = document.getElementById('modal-service-badge');
    const modalTitle = document.getElementById('modal-service-title');
    const modalDesc = document.getElementById('modal-service-desc');
    const modalFeaturesList = document.getElementById('modal-features-list');
    const modalWhatsappBtn = document.getElementById('modal-whatsapp-btn');
    const carouselTrack = document.getElementById('carousel-track');
    const carouselIndicators = document.getElementById('carousel-indicators');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');

    let currentSlide = 0;
    let slidesCount = 0;
    let autoplayTimer = null;
    
    // Drag/Swipe state
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let deltaX = 0;

    const openModal = (serviceKey) => {
        const data = servicesData[serviceKey];
        if (!data) return;

        // Set Content
        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        // Features
        modalFeaturesList.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                <span>${feat}</span>
            `;
            modalFeaturesList.appendChild(li);
        });

        // WhatsApp CTA
        const whatsappNumber = "5531982957313";
        modalWhatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(data.whatsappMessage)}`;

        // Carousel slides
        carouselTrack.innerHTML = '';
        carouselIndicators.innerHTML = '';
        currentSlide = 0;
        slidesCount = data.images.length;

        data.images.forEach((imgUrl, idx) => {
            // Slide
            const slide = document.createElement('div');
            slide.classList.add('carousel-slide');
            slide.innerHTML = `<img src="${imgUrl}" alt="${data.title} foto ${idx + 1}" draggable="false">`;
            carouselTrack.appendChild(slide);

            // Indicator dot
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            carouselIndicators.appendChild(dot);
        });

        updateCarouselPosition();

        // Show Modal
        serviceModal.classList.add('active');
        serviceModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Start Autoplay
        startAutoplay();
    };

    const closeModal = () => {
        serviceModal.classList.remove('active');
        serviceModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        stopAutoplay();
    };

    // Carousel Navigation
    const goToSlide = (idx) => {
        if (idx < 0) idx = slidesCount - 1;
        if (idx >= slidesCount) idx = 0;
        currentSlide = idx;
        updateCarouselPosition();
        resetAutoplay();
    };

    const updateCarouselPosition = () => {
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        const dots = carouselIndicators.querySelectorAll('.indicator-dot');
        dots.forEach((dot, idx) => {
            if (idx === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    // Autoplay functions
    const startAutoplay = () => {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 4000); // changes every 4 seconds
    };

    const stopAutoplay = () => {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    };

    const resetAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    // Event listeners for open/close
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            openModal(serviceKey);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    
    // Close on clicking backdrop
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeModal();
        }
    });

    // Close on Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Arrow Navs
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // --- Drag & Swipe Support for Carousel ---
    const viewport = document.getElementById('carousel-viewport');

    const handleDragStart = (e) => {
        isDragging = true;
        stopAutoplay();
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        carouselTrack.style.transition = 'none'; // disables transition while dragging
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        deltaX = currentX - startX;
        
        // Calculate dynamic translation during drag
        const transformPercentage = (-currentSlide * 100) + (deltaX / viewport.offsetWidth * 100);
        carouselTrack.style.transform = `translateX(${transformPercentage}%)`;
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        isDragging = false;
        carouselTrack.style.transition = ''; // restores transition property
        
        const swipeThreshold = 50; // swipe 50px to trigger change
        if (deltaX < -swipeThreshold) {
            goToSlide(currentSlide + 1);
        } else if (deltaX > swipeThreshold) {
            goToSlide(currentSlide - 1);
        } else {
            goToSlide(currentSlide); // Snap back to current slide
        }
        
        deltaX = 0;
        startAutoplay();
    };

    // Mouse events
    viewport.addEventListener('mousedown', handleDragStart);
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    
    // Touch events
    viewport.addEventListener('touchstart', handleDragStart, { passive: true });
    viewport.addEventListener('touchmove', handleDragMove, { passive: true });
    viewport.addEventListener('touchend', handleDragEnd);

    // 8. Email Scheduling Modal Logic
    const emailModal = document.getElementById('email-modal');
    const emailTriggers = document.querySelectorAll('.email-modal-trigger');
    const emailCloseBtn = document.getElementById('email-modal-close-btn');
    const emailForm = document.getElementById('email-schedule-form');
    const successMsg = document.getElementById('sched-success');
    const successCloseBtn = document.getElementById('sched-success-close');

    const emailFormContainer = document.getElementById('email-form-container');

    const openEmailModal = () => {
        // Reset form & success state
        emailForm.reset();
        emailFormContainer.style.display = 'flex';
        successMsg.style.display = 'none';

        // Set date input min value to today
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('sched-date');
        if (dateInput) {
            dateInput.min = today;
        }

        // Show Modal
        emailModal.classList.add('active');
        emailModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeEmailModal = () => {
        emailModal.classList.remove('active');
        emailModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Attach click listeners to triggers
    emailTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openEmailModal();
        });
    });

    emailCloseBtn.addEventListener('click', closeEmailModal);
    successCloseBtn.addEventListener('click', closeEmailModal);

    // Close on clicking backdrop
    emailModal.addEventListener('click', (e) => {
        if (e.target === emailModal) {
            closeEmailModal();
        }
    });

    // Close on Esc key for email modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && emailModal.classList.contains('active')) {
            closeEmailModal();
        }
    });

    // Form Submission
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('sched-name').value;
        const email = document.getElementById('sched-email').value;
        const phone = document.getElementById('sched-phone').value;
        const service = document.getElementById('sched-service').value;
        const dateVal = document.getElementById('sched-date').value;
        const period = document.getElementById('sched-period').value;
        const notes = document.getElementById('sched-notes').value;

        // Format Date to DD/MM/YYYY
        let formattedDate = dateVal;
        if (dateVal) {
            const parts = dateVal.split('-');
            if (parts.length === 3) {
                formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
        }

        // Construct Subject & Body
        const recipient = "contato@vinicorpsolutions.com.br";
        const subject = `Solicitação de Agendamento - ${name}`;
        
        let body = `Olá VINI Corp Solutions,\n\n`;
        body += `Gostaria de solicitar um agendamento de montagem com os seguintes dados:\n\n`;
        body += `- Nome Completo: ${name}\n`;
        body += `- E-mail: ${email}\n`;
        body += `- WhatsApp/Telefone: ${phone}\n`;
        body += `- Tipo de Serviço: ${service}\n`;
        body += `- Data Desejada: ${formattedDate}\n`;
        body += `- Período de Preferência: ${period}\n\n`;
        
        if (notes.trim()) {
            body += `Observações / Detalhes dos Móveis:\n${notes}\n\n`;
        }
        
        body += `Aguardo retorno para confirmação.\n`;

        // Open Mailto link
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Use window.location.href to trigger native email client without redirecting
        window.location.href = mailtoUrl;

        // Show Success UI state
        emailFormContainer.style.display = 'none';
        successMsg.style.display = 'block';
    });
});
