document.addEventListener('DOMContentLoaded', function () {
    const genderFieldset = document.getElementById("gender-fieldset");
    const avatar = document.getElementById("avatar");
    const genderInputs = genderFieldset.querySelectorAll("input[name='gender']");

    if (genderFieldset && avatar) {
        genderInputs.forEach(genderInput => {
            genderInput.addEventListener('change', function () {
                const selectedGender = this.value;
                console.log('selected value', selectedGender);
                if (selectedGender === 'Male') {
                    avatar.src = '/Users/mac/Desktop/student/image/male-.svg';
                } else {
                    avatar.src = '/Users/mac/Desktop/student/image/female.png';
                }
            });
        });
    }

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const website = document.getElementById("website");
    const domain = document.getElementById("domain");
    const button = document.getElementById("button");
    const containerDetails = document.getElementById("containerdetails");

    button.addEventListener('click', function () {
        const content = `Username: ${username.value}, Email: ${email.value}, Website: ${website.value}, Domain: ${domain.value}`;
        const newContent = document.createElement('div');
        newContent.classList.add('newcontainer');
        const details = document.createElement("h3");
        details.textContent = 'Enroll ' + content;
        newContent.appendChild(details);
        containerDetails.appendChild(newContent);

        //input refresh
        username.value='';
        email.value='';
        website.value='';
        domain.value='';

        //avatar refresh
        avatar.src = '/Users/mac/Desktop/student/image/empty.jpeg';
        genderInputs.forEach(function(radio) {
            radio.checked = false;})

    });
});
