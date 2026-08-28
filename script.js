// ===========================
// AOS Animation Library Init
// ===========================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 100
});

// ===========================
// Navigation Functions
// ===========================

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate toggle button
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activeNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activeNavOnScroll);

// Close Mobile Menu on Link Click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const targetPosition = target.offsetTop - 70;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Typing Effect for Hero
// ===========================
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 500);
}

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (you can replace this with actual form submission)
        alert('شكراً لتواصلك! سأرد عليك في أقرب وقت ممكن.');
        
        // Reset form
        contactForm.reset();
        
        // Here you would typically send the data to a server
        // Example: fetch('/api/contact', { method: 'POST', body: formData })
        console.log('Form Data:', data);
    });
}

// ===========================
// Dynamic Year in Footer
// ===========================
const footer = document.querySelector('.footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} حماد حافظ حنيف - جميع الحقوق محفوظة | صُمم بـ <i class="fas fa-heart"></i>`;
}

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-card, .skill-item, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Prevent Right Click (Optional)
// ===========================
// Uncomment if you want to protect your content
/*
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
*/

// ===========================
// Loading Animation (Optional)
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Parallax Effect for Hero Shapes
// ===========================
const heroShapes = document.querySelectorAll('.hero-shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    heroShapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// Service Cards Hover Effect
// ===========================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Skills Progress Animation
// ===========================
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = 'fadeInUp 0.6s ease forwards';
        }, index * 50);
    });
}

// Trigger skills animation when section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillsObserver.observe(skillsSection);
}

// ===========================
// Add fadeInUp animation
// ===========================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Console Message
// ===========================
console.log('%c مرحباً بك في بورتفوليو الخاص بي! 🚀', 'color: #4A90E2; font-size: 20px; font-weight: bold;');
console.log('%c إذا كنت مهتماً بالتعاون، لا تتردد في التواصل معي!', 'color: #50C878; font-size: 14px;');

// ===========================
// Project Journey Modal
// ===========================

// Project data
const projectData = {
    ecommerce: {
        title: 'متجر إلكتروني متكامل',
        description: 'منصة تجارة إلكترونية شاملة مع جميع المميزات الحديثة',
        steps: [
            {
                number: 1,
                title: 'الفكرة والتخطيط',
                subtitle: 'دراسة المتطلبات وتحديد الأهداف',
                color: 'primary',
                features: [
                    'دراسة السوق المستهدف وتحليل المنافسين',
                    'تحديد الميزانية والجدول الزمني للمشروع',
                    'رسم خريطة رحلة المستخدم (User Journey)',
                    'تحديد الميزات الأساسية والإضافية',
                    'اختيار التقنيات المناسبة للمشروع'
                ],
                mockups: [
                    {
                        type: 'desktop',
                        icon: 'fa-desktop',
                        title: 'نسخة الحاسوب',
                        desc: 'تصميم شامل وسهل التصفح'
                    },
                    {
                        type: 'tablet',
                        icon: 'fa-tablet-alt',
                        title: 'نسخة التابلت',
                        desc: 'تجربة مثالية للأجهزة اللوحية'
                    },
                    {
                        type: 'mobile',
                        icon: 'fa-mobile-alt',
                        title: 'نسخة الجوال',
                        desc: 'تصميم متجاوب للهواتف الذكية'
                    }
                ]
            },
            {
                number: 2,
                title: 'التصميم والنماذج الأولية',
                subtitle: 'إنشاء واجهات المستخدم الجذابة',
                color: 'secondary',
                features: [
                    'تصميم الهوية البصرية والشعار',
                    'إنشاء نماذج أولية تفاعلية (Wireframes)',
                    'تصميم واجهات جميع الصفحات (UI Design)',
                    'اختبار تجربة المستخدم (UX Testing)',
                    'اعتماد التصاميم النهائية من العميل'
                ]
            },
            {
                number: 3,
                title: 'التطوير والبرمجة',
                subtitle: 'تحويل التصاميم إلى موقع عامل',
                color: 'warning',
                features: [
                    'بناء الواجهة الأمامية (Frontend) باستخدام React',
                    'تطوير الخادم والـ APIs (Backend) بـ Node.js',
                    'إنشاء قاعدة البيانات وربطها',
                    'تطبيق نظام الدفع الإلكتروني الآمن',
                    'إضافة نظام إدارة المحتوى (CMS)',
                    'تطبيق سلة التسوق ونظام الطلبات',
                    'إضافة لوحة تحكم للمدير'
                ],
                mainFeatures: [
                    {
                        icon: 'fa-shopping-cart',
                        title: 'سلة التسوق',
                        desc: 'نظام متقدم لإدارة المشتريات'
                    },
                    {
                        icon: 'fa-credit-card',
                        title: 'الدفع الآمن',
                        desc: 'بوابة دفع متعددة وآمنة'
                    },
                    {
                        icon: 'fa-user',
                        title: 'حسابات العملاء',
                        desc: 'إدارة حسابات وطلبات العملاء'
                    },
                    {
                        icon: 'fa-search',
                        title: 'بحث ذكي',
                        desc: 'محرك بحث متقدم وفلترة'
                    },
                    {
                        icon: 'fa-star',
                        title: 'التقييمات',
                        desc: 'نظام تقييمات ومراجعات'
                    },
                    {
                        icon: 'fa-chart-line',
                        title: 'التقارير',
                        desc: 'تقارير مبيعات تفصيلية'
                    }
                ]
            }
        ]
    },
    restaurant: {
        title: 'موقع مطعم تفاعلي',
        description: 'منصة عصرية لعرض القائمة وإدارة الحجوزات والطلبات',
        steps: [
            {
                number: 1,
                title: 'الفكرة والتخطيط',
                subtitle: 'تحديد احتياجات المطعم والعملاء',
                color: 'primary',
                features: [
                    'دراسة نوع المطعم والجمهور المستهدف',
                    'تحديد الخدمات المطلوبة (حجوزات، توصيل، طلبات)',
                    'التخطيط لعرض القائمة بشكل جذاب',
                    'تحديد طرق الدفع والتوصيل المتاحة',
                    'رسم مخطط الموقع وصفحاته'
                ],
                mockups: [
                    {
                        type: 'desktop',
                        icon: 'fa-desktop',
                        title: 'نسخة الحاسوب',
                        desc: 'عرض شامل للقائمة والخدمات'
                    },
                    {
                        type: 'tablet',
                        icon: 'fa-tablet-alt',
                        title: 'نسخة التابلت',
                        desc: 'مثالية لاستخدام العملاء بالمطعم'
                    },
                    {
                        type: 'mobile',
                        icon: 'fa-mobile-alt',
                        title: 'نسخة الجوال',
                        desc: 'سهولة الطلب والحجز من الجوال'
                    }
                ]
            },
            {
                number: 2,
                title: 'التصميم والنماذج الأولية',
                subtitle: 'تصميم هوية بصرية مميزة',
                color: 'secondary',
                features: [
                    'تصميم شعار وهوية بصرية للمطعم',
                    'اختيار الألوان المناسبة لنوع المطعم',
                    'تصميم قائمة الطعام بشكل جذاب',
                    'إنشاء معرض صور احترافي للأطباق',
                    'تصميم واجهات الحجز والطلب',
                    'اعتماد التصاميم مع فريق المطعم'
                ]
            },
            {
                number: 3,
                title: 'التطوير والإطلاق',
                subtitle: 'بناء موقع سريع وسهل الاستخدام',
                color: 'warning',
                features: [
                    'بناء الصفحة الرئيسية مع قائمة تفاعلية',
                    'تطبيق نظام الحجوزات الأونلاين',
                    'إضافة نظام الطلبات والتوصيل',
                    'ربط الموقع بموقع المطعم على الخريطة',
                    'إضافة معرض صور ديناميكي',
                    'تحسين السرعة والأداء (SEO)',
                    'الربط مع وسائل التواصل الاجتماعي'
                ],
                mainFeatures: [
                    {
                        icon: 'fa-utensils',
                        title: 'القائمة التفاعلية',
                        desc: 'عرض الأطباق مع الصور والأسعار'
                    },
                    {
                        icon: 'fa-calendar-check',
                        title: 'نظام الحجوزات',
                        desc: 'حجز الطاولات أونلاين بسهولة'
                    },
                    {
                        icon: 'fa-shopping-bag',
                        title: 'الطلبات والتوصيل',
                        desc: 'طلب الطعام مع خدمة التوصيل'
                    },
                    {
                        icon: 'fa-map-marker-alt',
                        title: 'الموقع والاتجاهات',
                        desc: 'خريطة تفاعلية لموقع المطعم'
                    },
                    {
                        icon: 'fa-images',
                        title: 'معرض الصور',
                        desc: 'صور احترافية للأطباق والمطعم'
                    },
                    {
                        icon: 'fa-comment-dots',
                        title: 'التقييمات والآراء',
                        desc: 'آراء العملاء وتقييماتهم'
                    }
                ]
            }
        ]
    }
};

// Open modal
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const project = projectData[projectId];
    
    if (!project) return;
    
    let html = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        </div>
        <div class="journey-steps">
    `;
    
    project.steps.forEach(step => {
        html += `
            <div class="journey-step step-${step.number}">
                <div class="step-header">
                    <div class="step-number">${step.number}</div>
                    <div class="step-title">
                        <h3>${step.title}</h3>
                        <p>${step.subtitle}</p>
                    </div>
                </div>
                <div class="step-content">
                    <ul>
                        ${step.features.map(feature => `
                            <li>
                                <i class="fas fa-check-circle"></i>
                                <span>${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
        `;
        
        // Add mockups if exists
        if (step.mockups) {
            html += `
                <div class="visual-mockups">
                    ${step.mockups.map(mockup => `
                        <div class="mockup-card ${mockup.type}" onclick="openDevicePreview('${projectId}', '${mockup.type}')" style="cursor: pointer;">
                            <i class="fas ${mockup.icon}"></i>
                            <h4>${mockup.title}</h4>
                            <p>${mockup.desc}</p>
                            <small style="opacity: 0.8; margin-top: 10px; display: block;">اضغط للمعاينة</small>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        // Add main features if exists
        if (step.mainFeatures) {
            html += `
                <div class="features-grid">
                    ${step.mainFeatures.map(feature => `
                        <div class="feature-item">
                            <i class="fas ${feature.icon}"></i>
                            <h5>${feature.title}</h5>
                            <p>${feature.desc}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    modalContent.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeDeviceModal();
    }
});

// ===========================
// Device Preview Functions
// ===========================

function openDevicePreview(projectType, deviceType) {
    const modal = document.getElementById('deviceModal');
    const preview = document.getElementById('devicePreview');
    
    let content = '';
    
    if (projectType === 'ecommerce') {
        content = getEcommerceDesign(deviceType);
    } else if (projectType === 'restaurant') {
        content = getRestaurantDesign(deviceType);
    }
    
    preview.innerHTML = `
        <div class="device-frame ${deviceType}">
            <div class="device-screen">
                ${content}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDeviceModal() {
    const modal = document.getElementById('deviceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// E-commerce Design Template
function getEcommerceDesign(deviceType) {
    return `
        <div class="ecommerce-mockup">
            <div class="mockup-header">
                <div class="mockup-logo">
                    <i class="fas fa-shopping-bag"></i> متجري
                </div>
                ${deviceType !== 'mobile' ? `
                <div class="mockup-nav">
                    <a href="#">الرئيسية</a>
                    <a href="#">المنتجات</a>
                    <a href="#">العروض</a>
                    <a href="#">من نحن</a>
                </div>
                ` : ''}
                <div class="mockup-icons">
                    <i class="fas fa-search"></i>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-user"></i>
                </div>
            </div>
            
            <div class="mockup-hero">
                <h1>عروض خاصة لفترة محدودة</h1>
                <p>خصم يصل إلى 50% على جميع المنتجات</p>
                <a href="#" class="mockup-btn">تسوق الآن</a>
            </div>
            
            <div class="mockup-products">
                <h2 class="mockup-section-title">المنتجات الأكثر مبيعاً</h2>
                <div class="products-grid">
                    <div class="product-card">
                        <div class="product-image">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <div class="product-info">
                            <div class="product-name">لابتوب احترافي</div>
                            <div class="product-price">2,999 ريال</div>
                            <button class="product-add-btn">
                                <i class="fas fa-cart-plus"></i> أضف للسلة
                            </button>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-image">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="product-info">
                            <div class="product-name">سماعات لاسلكية</div>
                            <div class="product-price">499 ريال</div>
                            <button class="product-add-btn">
                                <i class="fas fa-cart-plus"></i> أضف للسلة
                            </button>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-image">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="product-info">
                            <div class="product-name">هاتف ذكي</div>
                            <div class="product-price">1,899 ريال</div>
                            <button class="product-add-btn">
                                <i class="fas fa-cart-plus"></i> أضف للسلة
                            </button>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-image">
                            <i class="fas fa-camera"></i>
                        </div>
                        <div class="product-info">
                            <div class="product-name">كاميرا رقمية</div>
                            <div class="product-price">3,499 ريال</div>
                            <button class="product-add-btn">
                                <i class="fas fa-cart-plus"></i> أضف للسلة
                            </button>
                        </div>
                    </div>
                    
                    ${deviceType === 'desktop' ? `
                    <div class="product-card">
                        <div class="product-image">
                            <i class="fas fa-tv"></i>
                        </div>
                        <div class="product-info">
                            <div class="product-name">شاشة ذكية</div>
                            <div class="product-price">2,299 ريال</div>
                            <button class="product-add-btn">
                                <i class="fas fa-cart-plus"></i> أضف للسلة
                            </button>
                        </div>
                    </div>
                    
                    <div class="product-card">
                        <div class="product-image">
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <div class="product-info">
                            <div class="product-name">جهاز ألعاب</div>
                            <div class="product-price">1,999 ريال</div>
                            <button class="product-add-btn">
                                <i class="fas fa-cart-plus"></i> أضف للسلة
                            </button>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="mockup-footer">
                <p>© 2026 متجري - جميع الحقوق محفوظة</p>
            </div>
        </div>
    `;
}

// Restaurant Design Template
function getRestaurantDesign(deviceType) {
    return `
        <div class="restaurant-mockup">
            <div class="restaurant-header">
                <div class="mockup-logo">
                    <i class="fas fa-utensils"></i> مطعم الذواقة
                </div>
                ${deviceType !== 'mobile' ? `
                <div class="mockup-nav">
                    <a href="#">الرئيسية</a>
                    <a href="#">القائمة</a>
                    <a href="#">احجز طاولة</a>
                    <a href="#">تواصل معنا</a>
                </div>
                ` : ''}
                <div class="mockup-icons">
                    <i class="fas fa-shopping-bag"></i>
                    <i class="fas fa-user"></i>
                </div>
            </div>
            
            <div class="restaurant-hero">
                <h1>طعام أصيل بنكهة استثنائية</h1>
                <p>تجربة طهي لا تُنسى في قلب المدينة</p>
                <a href="#" class="mockup-btn">اطلب الآن</a>
            </div>
            
            <div class="menu-section">
                <h2 class="mockup-section-title">قائمة الطعام</h2>
                
                <div class="menu-categories">
                    <button class="category-btn active">الكل</button>
                    <button class="category-btn">المقبلات</button>
                    <button class="category-btn">الأطباق الرئيسية</button>
                    <button class="category-btn">الحلويات</button>
                    <button class="category-btn">المشروبات</button>
                </div>
                
                <div class="menu-items">
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <i class="fas fa-pizza-slice"></i>
                        </div>
                        <div class="menu-item-info">
                            <div class="menu-item-name">بيتزا مارغريتا</div>
                            <div class="menu-item-desc">صلصة طماطم طازجة مع جبن موتزاريلا وريحان</div>
                            <div class="menu-item-footer">
                                <div class="menu-item-price">45 ريال</div>
                                <button class="order-btn">اطلب</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <i class="fas fa-hamburger"></i>
                        </div>
                        <div class="menu-item-info">
                            <div class="menu-item-name">برجر لحم مشوي</div>
                            <div class="menu-item-desc">لحم بقري ممتاز مع الخضروات الطازجة</div>
                            <div class="menu-item-footer">
                                <div class="menu-item-price">38 ريال</div>
                                <button class="order-btn">اطلب</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <i class="fas fa-fish"></i>
                        </div>
                        <div class="menu-item-info">
                            <div class="menu-item-name">سمك مشوي</div>
                            <div class="menu-item-desc">سمك طازج مشوي مع الأرز والخضروات</div>
                            <div class="menu-item-footer">
                                <div class="menu-item-price">55 ريال</div>
                                <button class="order-btn">اطلب</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <i class="fas fa-ice-cream"></i>
                        </div>
                        <div class="menu-item-info">
                            <div class="menu-item-name">آيس كريم</div>
                            <div class="menu-item-desc">آيس كريم منزلي بنكهات متعددة</div>
                            <div class="menu-item-footer">
                                <div class="menu-item-price">18 ريال</div>
                                <button class="order-btn">اطلب</button>
                            </div>
                        </div>
                    </div>
                    
                    ${deviceType === 'desktop' ? `
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <i class="fas fa-drumstick-bite"></i>
                        </div>
                        <div class="menu-item-info">
                            <div class="menu-item-name">دجاج مشوي</div>
                            <div class="menu-item-desc">دجاج مشوي بالأعشاب والتوابل الخاصة</div>
                            <div class="menu-item-footer">
                                <div class="menu-item-price">42 ريال</div>
                                <button class="order-btn">اطلب</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="menu-item">
                        <div class="menu-item-image">
                            <i class="fas fa-coffee"></i>
                        </div>
                        <div class="menu-item-info">
                            <div class="menu-item-name">قهوة خاصة</div>
                            <div class="menu-item-desc">قهوة عربية أصيلة بالهيل</div>
                            <div class="menu-item-footer">
                                <div class="menu-item-price">15 ريال</div>
                                <button class="order-btn">اطلب</button>
                            </div>
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="mockup-footer">
                <p>© 2026 مطعم الذواقة - نقدم أفضل تجربة طعام</p>
            </div>
        </div>
    `;
}

// ===========================
// Performance Optimization
// ===========================
// Lazy load images (if you add images later)
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    // Add smooth reveal for hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
    
    console.log('Portfolio loaded successfully! ✅');
});
