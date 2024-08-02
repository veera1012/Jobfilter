
document.addEventListener('DOMContentLoaded', () => {
    const jobListings = [
        { title: 'Software Engineer', location: 'Bangalore', type: 'Full-time' },
        { title: 'Software Testing', location: 'Bangalore', type: 'Part-Time' },
        { title: 'Software Testing', location: 'Trivandram', type: 'Part-Time' },
        { title: 'Front end Developer', location: 'Chennai', type: 'Full-time' },
        { title: 'Back end Developer', location: 'Kochi', type: 'Part-Time' },
        { title: 'UX Designer', location: 'Madurai', type: 'Part-Time' },
        { title: 'Data Analyst', location: 'Pondicherry', type: 'Contract' },
        { title: 'Web Developer', location: 'coimbatore', type: 'Full-time' }
    ];
    const jobListingsContainer = document.getElementById('jobListings');
    const locationFilter = document.getElementById('locationFilter');
    const typeFilter = document.getElementById('typeFilter');
    const addJobForm = document.getElementById('addJobForm');
    const jobTitleInput = document.getElementById('jobTitle');
    const jobLocationInput = document.getElementById('jobLocation');
    const jobTypeInput = document.getElementById('jobType');

    function displayJobs(jobs) {
        jobListingsContainer.innerHTML = '';
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');
            jobCard.innerHTML = `
                <h2>${job.title}</h2>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Type:</strong> ${job.type}</p>
            `;
            jobListingsContainer.appendChild(jobCard);
        });
    }

    function filterJobs() {
        const location = locationFilter.value;
        const type = typeFilter.value.toLowerCase();

        const filteredJobs = jobListings.filter(job => {
            const matchesLocation = location === '' || job.location === location;
            const matchesType = type === '' || job.type.toLowerCase() === type;

            return matchesLocation && matchesType;
        });

        displayJobs(filteredJobs);
    }

    function addJob(event) {
        event.preventDefault();
        const newJob = {
            title: jobTitleInput.value,
            location: jobLocationInput.value,
            type: jobTypeInput.value
        };
        jobListings.push(newJob);
        filterJobs();
        addJobForm.reset();
    }

    locationFilter.addEventListener('change', filterJobs);
    typeFilter.addEventListener('change', filterJobs);
    addJobForm.addEventListener('submit', addJob);

    displayJobs(jobListings);
});