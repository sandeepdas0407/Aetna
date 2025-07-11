// Script for Aetna Medicare Enrollment Page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    initializePage();
    
    // Add event listeners
    addEventListeners();
});

function initializePage() {
    // Set the current navigation tab as active
    const helpTab = document.querySelector('.nav-tab');
    if (helpTab) {
        helpTab.classList.add('active');
    }
    
    // Check for saved progress
    loadSavedProgress();
}

function addEventListeners() {
    // Navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this);
        });
    });
    
    // Save progress button
    const saveButton = document.querySelector('.save-progress');
    if (saveButton) {
        saveButton.addEventListener('click', saveProgress);
    }
    
    // Location edit button
    const editLocationBtn = document.querySelector('.edit-location');
    if (editLocationBtn) {
        editLocationBtn.addEventListener('click', editLocation);
    }
    
    // Option buttons
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const option = this.classList.contains('yes-button') ? 'yes' : 'no';
            selectOption(option);
        });
    });
}

function switchTab(selectedTab) {
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.nav-tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to selected tab
    selectedTab.classList.add('active');
    
    // Here you would typically load different content based on the tab
    console.log('Switched to tab:', selectedTab.textContent);
}

function selectOption(option) {
    console.log('Selected option:', option);
    
    // Remove selected class from all buttons
    const allButtons = document.querySelectorAll('.option-button');
    allButtons.forEach(button => button.classList.remove('selected'));
    
    // Add selected class to the clicked button
    const selectedButton = option === 'yes' ? 
        document.querySelector('.yes-button') : 
        document.querySelector('.no-button');
    
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
    
    // Save the selection
    localStorage.setItem('medicalCoverageChoice', option);
    
    // Add a small delay before proceeding to next step
    setTimeout(() => {
        proceedToNextStep(option);
    }, 500);
}

function proceedToNextStep(choice) {
    // Simulate proceeding to the next step
    console.log('Proceeding with choice:', choice);
    
    // Update progress bar
    updateProgress();
    
    // You would typically redirect to the next page or update content here
    // For demo purposes, we'll just show an alert
    const message = choice === 'yes' ? 
        'Great! We\'ll show you medical coverage plans.' : 
        'We\'ll focus on other coverage options for you.';
    
    // Show a subtle notification instead of alert
    showNotification(message);
}

function updateProgress() {
    // Move to next progress step
    const currentStep = document.querySelector('.progress-step.current');
    const completedStep = document.querySelector('.progress-step.completed');
    
    if (currentStep) {
        currentStep.classList.remove('current');
        currentStep.classList.add('completed');
        
        // Update the circle indicator
        const circle = currentStep.querySelector('.step-circle');
        if (circle) {
            circle.textContent = '●';
        }
    }
    
    // Update progress line color
    const progressLine = document.querySelector('.progress-line');
    if (progressLine) {
        progressLine.style.background = '#7b2cbf';
    }
}

function saveProgress() {
    // Save current progress to localStorage
    const progressData = {
        step: 'MedicalCoverage',
        zipCode: '08840',
        county: '34023',
        planYear: '2025',
        timestamp: new Date().toISOString(),
        medicalCoverageChoice: localStorage.getItem('medicalCoverageChoice')
    };
    
    localStorage.setItem('aetnaEnrollmentProgress', JSON.stringify(progressData));
    
    // Show confirmation
    showNotification('Your progress has been saved!');
}

function loadSavedProgress() {
    // Load saved progress from localStorage
    const saved = localStorage.getItem('aetnaEnrollmentProgress');
    if (saved) {
        try {
            const progressData = JSON.parse(saved);
            
            // Restore medical coverage choice if available
            if (progressData.medicalCoverageChoice) {
                const option = progressData.medicalCoverageChoice;
                const button = option === 'yes' ? 
                    document.querySelector('.yes-button') : 
                    document.querySelector('.no-button');
                
                if (button) {
                    button.classList.add('selected');
                }
            }
            
            console.log('Loaded saved progress:', progressData);
        } catch (error) {
            console.error('Error loading saved progress:', error);
        }
    }
}

function editLocation() {
    // Simulate location editing
    const newLocation = prompt('Enter your ZIP code:', '08840');
    
    if (newLocation && newLocation.match(/^\d{5}$/)) {
        const locationText = document.querySelector('.location-text');
        if (locationText) {
            // Update location display (you would typically do a lookup here)
            locationText.textContent = `ZIP Code: ${newLocation}`;
        }
        
        showNotification('Location updated successfully!');
    } else if (newLocation !== null) {
        showNotification('Please enter a valid 5-digit ZIP code.', 'error');
    }
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#4CAF50' : '#f44336',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '5px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        fontSize: '14px',
        maxWidth: '300px',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility function to format phone numbers
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    
    return phone;
}

// Handle page visibility change to save progress
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Save progress when user switches tabs or minimizes window
        const currentChoice = localStorage.getItem('medicalCoverageChoice');
        if (currentChoice) {
            saveProgress();
        }
    }
});

// Handle before unload to remind about saving
window.addEventListener('beforeunload', function(event) {
    const hasUnsavedChanges = document.querySelector('.option-button.selected') && 
                             !localStorage.getItem('aetnaEnrollmentProgress');
    
    if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = 'You have unsaved progress. Are you sure you want to leave?';
        return event.returnValue;
    }
});

// Expose selectOption function globally for HTML onclick
window.selectOption = selectOption;
