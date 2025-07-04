// Application State
const AppState = {
    currentPage: 'dashboard',
    sidebarOpen: false,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    isAuthenticated: false,
    currentUser: {
        name: 'Alex Johnson',
        email: 'alex.johnson@teamsync.com',
        role: 'Project Manager',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    },
    tasks: [
        {
            id: 1,
            title: 'Design Homepage Layout',
            description: 'Create wireframes and mockups for the new homepage design',
            status: 'todo',
            priority: 'high',
            assignee: 'Sarah Wilson',
            dueDate: '2024-12-15',
            progress: 0,
            project: 'Website Redesign'
        },
        {
            id: 2,
            title: 'API Documentation Update',
            description: 'Review and update API documentation with latest endpoints',
            status: 'todo',
            priority: 'medium',
            assignee: 'Mike Chen',
            dueDate: '2024-12-18',
            progress: 0,
            project: 'Mobile App'
        },
        {
            id: 3,
            title: 'User Authentication System',
            description: 'Implement JWT-based authentication with role management',
            status: 'in-progress',
            priority: 'high',
            assignee: 'Alex Johnson',
            dueDate: '2024-12-20',
            progress: 65,
            project: 'Website Redesign'
        },
        {
            id: 4,
            title: 'Payment Gateway Integration',
            description: 'Integrate Stripe payment processing for subscriptions',
            status: 'review',
            priority: 'high',
            assignee: 'Emma Davis',
            dueDate: '2024-12-12',
            progress: 90,
            project: 'Mobile App'
        },
        {
            id: 5,
            title: 'Database Schema Design',
            description: 'Design and implement the database schema for user management',
            status: 'done',
            priority: 'medium',
            assignee: 'Mike Chen',
            dueDate: 'Completed',
            progress: 100,
            project: 'Website Redesign'
        },
        {
            id: 6,
            title: 'Mobile UI Components',
            description: 'Create reusable UI components for the mobile application',
            status: 'todo',
            priority: 'medium',
            assignee: 'Sarah Wilson',
            dueDate: '2024-12-22',
            progress: 0,
            project: 'Mobile App'
        },
        {
            id: 7,
            title: 'Performance Optimization',
            description: 'Optimize application performance and loading times',
            status: 'in-progress',
            priority: 'low',
            assignee: 'Alex Johnson',
            dueDate: '2024-12-25',
            progress: 30,
            project: 'Website Redesign'
        },
        {
            id: 8,
            title: 'Security Audit',
            description: 'Conduct comprehensive security audit and penetration testing',
            status: 'done',
            priority: 'high',
            assignee: 'Emma Davis',
            dueDate: 'Completed',
            progress: 100,
            project: 'Mobile App'
        },
        {
            id: 9,
            title: 'User Testing',
            description: 'Conduct user testing sessions and gather feedback',
            status: 'done',
            priority: 'medium',
            assignee: 'Sarah Wilson',
            dueDate: 'Completed',
            progress: 100,
            project: 'Marketing Campaign'
        },
        {
            id: 10,
            title: 'Deployment Pipeline',
            description: 'Setup CI/CD pipeline for automated deployments',
            status: 'review',
            priority: 'low',
            assignee: 'Mike Chen',
            dueDate: '2024-12-14',
            progress: 85,
            project: 'Website Redesign'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'Website Redesign',
            description: 'Complete overhaul of the company website with modern design and improved user experience.',
            status: 'active',
            progress: 75,
            deadline: '2024-12-15',
            team: ['Alex Johnson', 'Sarah Wilson', 'Mike Chen'],
            tasks: 15,
            completedTasks: 11
        },
        {
            id: 2,
            name: 'Mobile App Development',
            description: 'Native mobile application for iOS and Android platforms with real-time synchronization.',
            status: 'in-progress',
            progress: 45,
            deadline: '2025-01-20',
            team: ['Mike Chen', 'Emma Davis', 'Sarah Wilson'],
            tasks: 22,
            completedTasks: 10
        },
        {
            id: 3,
            name: 'Marketing Campaign',
            description: 'Q4 marketing campaign for product launch with multi-channel approach.',
            status: 'completed',
            progress: 100,
            deadline: 'Completed',
            team: ['Sarah Wilson', 'Emma Davis'],
            tasks: 8,
            completedTasks: 8
        }
    ]
};

// DOM Elements
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    authModal: document.getElementById('auth-modal'),
    app: document.getElementById('app'),
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebar-toggle'),
    menuItems: document.querySelectorAll('.menu-item'),
    pages: document.querySelectorAll('.page'),
    pageTitle: document.getElementById('page-title'),
    currentPageBreadcrumb: document.getElementById('current-page'),
    taskModal: document.getElementById('task-modal'),
    createTaskBtn: document.getElementById('create-task-btn'),
    createTaskModalBtn: document.getElementById('create-task-modal-btn'),
    modalClose: document.querySelector('.modal-close'),
    modalCancel: document.querySelector('.modal-cancel'),
    calendarBody: document.getElementById('calendar-body'),
    currentMonthDisplay: document.getElementById('current-month'),
    prevMonthBtn: document.getElementById('prev-month'),
    nextMonthBtn: document.getElementById('next-month'),
    settingsMenuItems: document.querySelectorAll('.settings-menu-item'),
    settingsSections: document.querySelectorAll('.settings-section'),
    loginForm: document.getElementById('login-form'),
    signupForm: document.getElementById('signup-form'),
    showSignup: document.getElementById('show-signup'),
    showLogin: document.getElementById('show-login')
};

// Utility Functions
const utils = {
    // Capitalize first letter
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    
    // Format date
    formatDate: (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    },
    
    // Get month name
    getMonthName: (monthIndex) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[monthIndex];
    },
    
    // Get days in month
    getDaysInMonth: (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    },
    
    // Get first day of month
    getFirstDayOfMonth: (month, year) => {
        return new Date(year, month, 1).getDay();
    },
    
    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Generate random ID
    generateId: () => Math.random().toString(36).substr(2, 9),
    
    // Animate element
    animate: (element, animation, duration = 300) => {
        return new Promise((resolve) => {
            element.style.animation = `${animation} ${duration}ms ease-in-out`;
            setTimeout(() => {
                element.style.animation = '';
                resolve();
            }, duration);
        });
    },
    
    // Show toast notification
    showToast: (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 12px;
            color: white;
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            max-width: 300px;
            font-weight: 600;
        `;
        
        switch (type) {
            case 'success':
                toast.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                break;
            case 'error':
                toast.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                break;
            case 'warning':
                toast.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
                break;
            default:
                toast.style.background = 'linear-gradient(135deg, #0ea5e9, #0284c7)';
        }
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
};

// Authentication System
const Auth = {
    init() {
        this.bindEvents();
        this.checkAuthState();
    },
    
    bindEvents() {
        // Form switching
        elements.showSignup?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignupForm();
        });
        
        elements.showLogin?.addEventListener('click', (e) => {
            e.preventDefault();
            this.showLoginForm();
        });
        
        // Form submissions
        const loginForm = elements.loginForm?.querySelector('form');
        const signupForm = elements.signupForm?.querySelector('form');
        
        loginForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e);
        });
        
        signupForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignup(e);
        });
        
        // Google auth buttons
        document.querySelectorAll('.auth-btn.google').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleGoogleAuth();
            });
        });
    },
    
    checkAuthState() {
        // Check if user is already authenticated (in real app, check token/session)
        const isAuthenticated = localStorage.getItem('teamsync-auth') === 'true';
        
        if (isAuthenticated) {
            this.login();
        } else {
            this.showAuthModal();
        }
    },
    
    showAuthModal() {
        elements.authModal?.classList.add('active');
        elements.app?.classList.remove('loaded');
    },
    
    hideAuthModal() {
        elements.authModal?.classList.remove('active');
        elements.app?.classList.add('loaded');
    },
    
    showLoginForm() {
        elements.loginForm?.classList.add('active');
        elements.signupForm?.classList.remove('active');
    },
    
    showSignupForm() {
        elements.signupForm?.classList.add('active');
        elements.loginForm?.classList.remove('active');
    },
    
    handleLogin(e) {
        const formData = new FormData(e.target);
        const email = formData.get('email') || e.target.querySelector('#login-email')?.value;
        const password = formData.get('password') || e.target.querySelector('#login-password')?.value;
        
        // Simulate login validation
        if (email && password) {
            this.login();
            utils.showToast('Welcome back to TeamSync!', 'success');
        } else {
            utils.showToast('Please fill in all fields', 'error');
        }
    },
    
    handleSignup(e) {
        const formData = new FormData(e.target);
        const firstName = e.target.querySelector('#signup-firstname')?.value;
        const lastName = e.target.querySelector('#signup-lastname')?.value;
        const email = e.target.querySelector('#signup-email')?.value;
        const password = e.target.querySelector('#signup-password')?.value;
        const confirmPassword = e.target.querySelector('#signup-confirm')?.value;
        
        // Validate form
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            utils.showToast('Please fill in all fields', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            utils.showToast('Passwords do not match', 'error');
            return;
        }
        
        // Simulate successful signup
        AppState.currentUser.name = `${firstName} ${lastName}`;
        AppState.currentUser.email = email;
        
        this.login();
        utils.showToast('Account created successfully!', 'success');
    },
    
    handleGoogleAuth() {
        // Simulate Google authentication
        utils.showToast('Google authentication simulated', 'info');
        setTimeout(() => {
            this.login();
            utils.showToast('Signed in with Google!', 'success');
        }, 1000);
    },
    
    login() {
        AppState.isAuthenticated = true;
        localStorage.setItem('teamsync-auth', 'true');
        this.hideAuthModal();
        
        // Initialize the main application
        setTimeout(() => {
            App.initializeApp();
        }, 500);
    },
    
    logout() {
        AppState.isAuthenticated = false;
        localStorage.removeItem('teamsync-auth');
        this.showAuthModal();
        utils.showToast('Logged out successfully', 'info');
    }
};

// Loading Screen
const LoadingScreen = {
    init() {
        // Simulate loading time
        setTimeout(() => {
            this.hide();
        }, 2500);
    },
    
    hide() {
        elements.loadingScreen?.classList.add('hidden');
    }
};

// Navigation System
const Navigation = {
    init() {
        this.bindEvents();
        this.setActivePage('dashboard');
    },
    
    bindEvents() {
        // Menu item clicks
        elements.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                if (page) {
                    this.setActivePage(page);
                }
            });
        });
        
        // Settings icon in user profile
        const settingsIcon = document.querySelector('.user-menu i');
        settingsIcon?.addEventListener('click', () => {
            this.setActivePage('settings');
        });
        
        // Sidebar toggle
        elements.sidebarToggle?.addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // Close sidebar on outside click (mobile)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                elements.sidebar &&
                !elements.sidebar.contains(e.target) && 
                !elements.sidebarToggle?.contains(e.target)) {
                this.closeSidebar();
            }
        });
    },
    
    setActivePage(pageName) {
        // Update state
        AppState.currentPage = pageName;
        
        // Update menu items
        elements.menuItems.forEach(item => {
            item.classList.toggle('active', item.dataset.page === pageName);
        });
        
        // Update pages
        elements.pages.forEach(page => {
            page.classList.toggle('active', page.id === `${pageName}-page`);
        });
        
        // Update header
        if (elements.pageTitle) {
            elements.pageTitle.textContent = utils.capitalize(pageName);
        }
        if (elements.currentPageBreadcrumb) {
            elements.currentPageBreadcrumb.textContent = utils.capitalize(pageName);
        }
        
        // Initialize page-specific functionality
        this.initPageFunctionality(pageName);
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            this.closeSidebar();
        }
    },
    
    initPageFunctionality(pageName) {
        switch (pageName) {
            case 'calendar':
                Calendar.render();
                break;
            case 'tasks':
                TaskManager.render();
                break;
            case 'settings':
                Settings.init();
                break;
            case 'projects':
                Projects.render();
                break;
            case 'team':
                Team.render();
                break;
            case 'notifications':
                Notifications.render();
                break;
        }
    },
    
    toggleSidebar() {
        AppState.sidebarOpen = !AppState.sidebarOpen;
        elements.sidebar?.classList.toggle('open', AppState.sidebarOpen);
    },
    
    closeSidebar() {
        AppState.sidebarOpen = false;
        elements.sidebar?.classList.remove('open');
    }
};

// Task Management System
const TaskManager = {
    init() {
        this.bindEvents();
    },
    
    bindEvents() {
        // Create task buttons
        elements.createTaskBtn?.addEventListener('click', () => {
            this.openTaskModal();
        });
        
        elements.createTaskModalBtn?.addEventListener('click', () => {
            this.openTaskModal();
        });
        
        // Modal events
        elements.modalClose?.addEventListener('click', () => {
            this.closeTaskModal();
        });
        
        elements.modalCancel?.addEventListener('click', () => {
            this.closeTaskModal();
        });
        
        // Close modal on outside click
        elements.taskModal?.addEventListener('click', (e) => {
            if (e.target === elements.taskModal) {
                this.closeTaskModal();
            }
        });
        
        // Task form submission
        const taskForm = elements.taskModal?.querySelector('.task-form');
        taskForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleTaskCreation(e);
        });
        
        // Drag and drop
        this.initDragAndDrop();
    },
    
    render() {
        this.renderKanbanBoard();
    },
    
    renderKanbanBoard() {
        const columns = ['todo', 'in-progress', 'review', 'done'];
        
        columns.forEach(status => {
            const taskList = document.querySelector(`[data-status="${status}"]`);
            if (!taskList) return;
            
            const tasks = AppState.tasks.filter(task => task.status === status);
            
            // Update task count
            const countElement = taskList.parentElement.querySelector('.task-count');
            if (countElement) {
                countElement.textContent = tasks.length;
            }
            
            // Clear existing tasks
            taskList.innerHTML = '';
            
            // Render tasks
            tasks.forEach(task => {
                const taskCard = this.createTaskCard(task);
                taskList.appendChild(taskCard);
            });
        });
    },
    
    createTaskCard(task) {
        const card = document.createElement('div');
        card.className = `task-card ${task.status === 'done' ? 'completed' : ''}`;
        card.draggable = true;
        card.dataset.taskId = task.id;
        
        const priorityClass = task.priority;
        const progressHtml = task.progress > 0 ? `
            <div class="task-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${task.progress}%"></div>
                </div>
                <span class="progress-text">${task.progress}%</span>
            </div>
        ` : '';
        
        // Get assignee avatar
        const avatarUrl = this.getAssigneeAvatar(task.assignee);
        
        card.innerHTML = `
            <div class="task-header">
                <div class="task-priority ${priorityClass}"></div>
                <div class="task-menu">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <h4 class="task-title">${task.title}</h4>
            <p class="task-description">${task.description}</p>
            ${progressHtml}
            <div class="task-meta">
                <div class="task-assignee">
                    <img src="${avatarUrl}" alt="${task.assignee}">
                </div>
                <div class="task-due">${task.dueDate}</div>
            </div>
        `;
        
        return card;
    },
    
    getAssigneeAvatar(assigneeName) {
        const avatars = {
            'Alex Johnson': 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop',
            'Sarah Wilson': 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop',
            'Mike Chen': 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop',
            'Emma Davis': 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=24&h=24&fit=crop'
        };
        return avatars[assigneeName] || avatars['Alex Johnson'];
    },
    
    initDragAndDrop() {
        let draggedTask = null;
        
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('task-card')) {
                draggedTask = e.target;
                e.target.style.opacity = '0.5';
            }
        });
        
        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('task-card')) {
                e.target.style.opacity = '';
                draggedTask = null;
            }
        });
        
        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        
        document.addEventListener('drop', (e) => {
            e.preventDefault();
            
            const taskList = e.target.closest('.task-list');
            if (taskList && draggedTask) {
                const newStatus = taskList.dataset.status;
                const taskId = parseInt(draggedTask.dataset.taskId);
                
                // Update task status
                const task = AppState.tasks.find(t => t.id === taskId);
                if (task) {
                    task.status = newStatus;
                    if (newStatus === 'done') {
                        task.progress = 100;
                    }
                }
                
                // Re-render board
                this.renderKanbanBoard();
                
                // Show success message
                utils.showToast('Task moved successfully!', 'success');
            }
        });
    },
    
    handleTaskCreation(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        const title = form.querySelector('#task-title')?.value;
        const description = form.querySelector('#task-description')?.value;
        const assignee = form.querySelector('#task-assignee')?.value;
        const priority = form.querySelector('#task-priority')?.value;
        const dueDate = form.querySelector('#task-due-date')?.value;
        const project = form.querySelector('#task-project')?.value;
        
        if (!title) {
            utils.showToast('Task title is required', 'error');
            return;
        }
        
        // Create new task
        const newTask = {
            id: AppState.tasks.length + 1,
            title,
            description: description || 'No description provided',
            status: 'todo',
            priority: priority || 'medium',
            assignee: this.getAssigneeName(assignee),
            dueDate: dueDate || 'No due date',
            progress: 0,
            project: this.getProjectName(project)
        };
        
        // Add to state
        AppState.tasks.push(newTask);
        
        // Re-render board
        this.renderKanbanBoard();
        
        // Close modal and show success
        this.closeTaskModal();
        utils.showToast('Task created successfully!', 'success');
        
        // Reset form
        form.reset();
    },
    
    getAssigneeName(assigneeValue) {
        const assigneeMap = {
            'alex': 'Alex Johnson',
            'sarah': 'Sarah Wilson',
            'mike': 'Mike Chen',
            'emma': 'Emma Davis'
        };
        return assigneeMap[assigneeValue] || 'Unassigned';
    },
    
    getProjectName(projectValue) {
        const projectMap = {
            'website': 'Website Redesign',
            'mobile': 'Mobile App',
            'marketing': 'Marketing Campaign'
        };
        return projectMap[projectValue] || 'General';
    },
    
    openTaskModal() {
        elements.taskModal?.classList.add('active');
        document.body.style.overflow = 'hidden';
    },
    
    closeTaskModal() {
        elements.taskModal?.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Calendar System
const Calendar = {
    init() {
        this.bindEvents();
        this.render();
    },
    
    bindEvents() {
        elements.prevMonthBtn?.addEventListener('click', () => {
            this.previousMonth();
        });
        
        elements.nextMonthBtn?.addEventListener('click', () => {
            this.nextMonth();
        });
    },
    
    render() {
        this.updateMonthDisplay();
        this.renderCalendarDays();
    },
    
    updateMonthDisplay() {
        if (elements.currentMonthDisplay) {
            elements.currentMonthDisplay.textContent = 
                `${utils.getMonthName(AppState.currentMonth)} ${AppState.currentYear}`;
        }
    },
    
    renderCalendarDays() {
        if (!elements.calendarBody) return;
        
        elements.calendarBody.innerHTML = '';
        
        const daysInMonth = utils.getDaysInMonth(AppState.currentMonth, AppState.currentYear);
        const firstDay = utils.getFirstDayOfMonth(AppState.currentMonth, AppState.currentYear);
        const today = new Date();
        
        // Previous month days
        const prevMonth = AppState.currentMonth === 0 ? 11 : AppState.currentMonth - 1;
        const prevYear = AppState.currentMonth === 0 ? AppState.currentYear - 1 : AppState.currentYear;
        const daysInPrevMonth = utils.getDaysInMonth(prevMonth, prevYear);
        
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            const dayElement = this.createDayElement(day, true);
            elements.calendarBody.appendChild(dayElement);
        }
        
        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = today.getDate() === day && 
                           today.getMonth() === AppState.currentMonth && 
                           today.getFullYear() === AppState.currentYear;
            
            const dayElement = this.createDayElement(day, false, isToday);
            elements.calendarBody.appendChild(dayElement);
        }
        
        // Next month days
        const totalCells = elements.calendarBody.children.length;
        const remainingCells = 42 - totalCells; // 6 rows × 7 days
        
        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = this.createDayElement(day, true);
            elements.calendarBody.appendChild(dayElement);
        }
    },
    
    createDayElement(day, isOtherMonth = false, isToday = false) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        if (isOtherMonth) {
            dayElement.classList.add('other-month');
        }
        
        if (isToday) {
            dayElement.classList.add('today');
        }
        
        // Add random events for demo
        if (Math.random() > 0.8 && !isOtherMonth) {
            dayElement.classList.add('has-events');
        }
        
        return dayElement;
    },
    
    previousMonth() {
        if (AppState.currentMonth === 0) {
            AppState.currentMonth = 11;
            AppState.currentYear--;
        } else {
            AppState.currentMonth--;
        }
        this.render();
    },
    
    nextMonth() {
        if (AppState.currentMonth === 11) {
            AppState.currentMonth = 0;
            AppState.currentYear++;
        } else {
            AppState.currentMonth++;
        }
        this.render();
    }
};

// Projects System
const Projects = {
    render() {
        // Projects are already rendered in HTML
        // In a real app, this would fetch and render dynamic data
        this.bindProjectEvents();
    },
    
    bindProjectEvents() {
        // Add click handlers for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.project-menu')) {
                    const projectTitle = card.querySelector('.project-title')?.textContent;
                    utils.showToast(`Opening ${projectTitle} details...`, 'info');
                }
            });
        });
    }
};

// Team System
const Team = {
    render() {
        // Team members are already rendered in HTML
        // In a real app, this would fetch and render dynamic data
        this.bindTeamEvents();
    },
    
    bindTeamEvents() {
        // Add click handlers for team member cards
        document.querySelectorAll('.team-member-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.member-actions')) {
                    const memberName = card.querySelector('.member-name')?.textContent;
                    utils.showToast(`Viewing ${memberName}'s profile...`, 'info');
                }
            });
        });
        
        // Add handlers for action buttons
        document.querySelectorAll('.member-actions .secondary-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const icon = btn.querySelector('i');
                if (icon.classList.contains('fa-envelope')) {
                    utils.showToast('Opening email client...', 'info');
                } else if (icon.classList.contains('fa-comment')) {
                    utils.showToast('Opening chat...', 'info');
                }
            });
        });
    }
};

// Notifications System
const Notifications = {
    render() {
        // Notifications are already rendered in HTML
        // In a real app, this would fetch and render dynamic data
        this.bindNotificationEvents();
    },
    
    bindNotificationEvents() {
        // Mark notifications as read on click
        document.querySelectorAll('.notification-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.remove('unread');
                utils.showToast('Notification marked as read', 'success');
            });
        });
        
        // Mark all as read button
        const markAllReadBtn = document.querySelector('.page-actions .secondary-btn');
        markAllReadBtn?.addEventListener('click', () => {
            document.querySelectorAll('.notification-item.unread').forEach(item => {
                item.classList.remove('unread');
            });
            utils.showToast('All notifications marked as read', 'success');
        });
    }
};

// Settings System
const Settings = {
    init() {
        this.bindEvents();
        this.setActiveSection('profile');
    },
    
    bindEvents() {
        elements.settingsMenuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.setActiveSection(section);
            });
        });
        
        // Settings form submissions
        document.querySelectorAll('.settings-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSettingsUpdate(e);
            });
        });
    },
    
    setActiveSection(sectionName) {
        // Update menu items
        elements.settingsMenuItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionName);
        });
        
        // Update sections
        elements.settingsSections.forEach(section => {
            section.classList.toggle('active', section.id === `${sectionName}-settings`);
        });
    },
    
    handleSettingsUpdate(e) {
        const form = e.target;
        const formType = form.closest('.settings-section').id;
        
        // Simulate settings update
        utils.showToast('Settings updated successfully!', 'success');
        
        // In a real app, you would send the form data to the server
        console.log('Settings updated:', formType, new FormData(form));
    }
};

// Search Functionality
const Search = {
    init() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', utils.debounce((e) => {
                this.performSearch(e.target.value);
            }, 300));
        }
    },
    
    performSearch(query) {
        if (query.length < 2) return;
        
        // Simulate search functionality
        console.log('Searching for:', query);
        utils.showToast(`Searching for "${query}"...`, 'info');
        
        // In a real app, this would filter content based on the query
    }
};

// Dashboard Interactions
const Dashboard = {
    init() {
        this.bindEvents();
    },
    
    bindEvents() {
        // Stat card clicks
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('click', () => {
                const statLabel = card.querySelector('.stat-label')?.textContent;
                utils.showToast(`Viewing ${statLabel} details...`, 'info');
            });
        });
        
        // Project item clicks
        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('click', () => {
                const projectName = item.querySelector('.project-name')?.textContent;
                utils.showToast(`Opening ${projectName}...`, 'info');
            });
        });
        
        // Activity item clicks
        document.querySelectorAll('.activity-item').forEach(item => {
            item.addEventListener('click', () => {
                utils.showToast('Viewing activity details...', 'info');
            });
        });
        
        // View all buttons
        document.querySelectorAll('.view-all-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cardTitle = btn.closest('.dashboard-card').querySelector('h3')?.textContent;
                if (cardTitle.includes('Projects')) {
                    Navigation.setActivePage('projects');
                } else if (cardTitle.includes('Activity')) {
                    Navigation.setActivePage('team');
                }
            });
        });
    }
};

// Keyboard Shortcuts
const KeyboardShortcuts = {
    init() {
        document.addEventListener('keydown', (e) => {
            // Only handle shortcuts when not in input fields
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        Navigation.setActivePage('dashboard');
                        break;
                    case '2':
                        e.preventDefault();
                        Navigation.setActivePage('projects');
                        break;
                    case '3':
                        e.preventDefault();
                        Navigation.setActivePage('tasks');
                        break;
                    case '4':
                        e.preventDefault();
                        Navigation.setActivePage('calendar');
                        break;
                    case '5':
                        e.preventDefault();
                        Navigation.setActivePage('team');
                        break;
                    case 'k':
                        e.preventDefault();
                        document.querySelector('.search-input')?.focus();
                        break;
                    case '/':
                        e.preventDefault();
                        document.querySelector('.search-input')?.focus();
                        break;
                }
            }
            
            // Escape key to close modals
            if (e.key === 'Escape') {
                TaskManager.closeTaskModal();
            }
        });
    }
};

// Error Handling
const ErrorHandler = {
    init() {
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
            utils.showToast('An error occurred. Please try again.', 'error');
        });
        
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            utils.showToast('An error occurred. Please try again.', 'error');
        });
    }
};

// Application Main Class
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Initialize loading screen
        LoadingScreen.init();
        
        // Initialize authentication
        Auth.init();
        
        // Initialize error handling
        ErrorHandler.init();
        
        console.log('TeamSync application initialized!');
    }
    
    static initializeApp() {
        // Initialize all systems after authentication
        Navigation.init();
        TaskManager.init();
        Calendar.init();
        Settings.init();
        Search.init();
        Dashboard.init();
        KeyboardShortcuts.init();
        
        // Add demo interactions
        App.addDemoInteractions();
        
        console.log('TeamSync main application loaded successfully!');
    }
    
    static addDemoInteractions() {
        // Add hover effects for interactive elements
        const cards = document.querySelectorAll('.stat-card, .project-card, .team-member-card, .dashboard-card, .document-card, .notification-item');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (!card.style.transform.includes('translateY')) {
                    card.style.transform = 'translateY(-2px)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
        
        // Add click handlers for various interactive elements
        document.addEventListener('click', (e) => {
            // Document actions
            if (e.target.closest('.document-actions .action-btn')) {
                const icon = e.target.querySelector('i') || e.target;
                if (icon.classList.contains('fa-download')) {
                    utils.showToast('Downloading document...', 'info');
                } else if (icon.classList.contains('fa-share')) {
                    utils.showToast('Sharing document...', 'info');
                }
                e.stopPropagation();
            }
            
            // Timeline milestones
            if (e.target.closest('.milestone')) {
                const milestone = e.target.closest('.milestone');
                const title = milestone.getAttribute('title');
                utils.showToast(`Milestone: ${title}`, 'info');
            }
            
            // Filter selects
            if (e.target.classList.contains('filter-select')) {
                utils.showToast('Filter applied', 'success');
            }
            
            // View toggle buttons
            if (e.target.closest('.view-btn')) {
                const btn = e.target.closest('.view-btn');
                const parent = btn.parentElement;
                parent.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const viewType = btn.textContent.trim();
                utils.showToast(`Switched to ${viewType} view`, 'info');
            }
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, AppState, utils };
}