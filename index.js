async function searchHospitals() {
            const location = document.getElementById('search').value;
            const response = await fetch(`/api/hospitals?location=${location}`);
            const hospitals = await response.json();
            const hospitalList = document.getElementById('hospital-list');
            hospitalList.innerHTML = '';
            hospitals.forEach(hospital => {
                const hospitalElement = document.createElement('div');
                hospitalElement.className = 'hospital';
                hospitalElement.innerHTML = `
                    <h2>${hospital.name}</h2>
                    <p>Location: ${hospital.location}</p>
                    <p>Beds Available: ${hospital.bedsAvailable}</p>
                `;
                hospitalList.appendChild(hospitalElement);
            });
        }