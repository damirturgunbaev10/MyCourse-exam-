const ElFirstName = document.querySelector('.profile__section__input__first__name');
const profileLastName = document.querySelector('.profile__section__input__last__name');
const profileSaveBtn = document.querySelector('.profile__section__btn');
const elProfileDetailName = document.querySelector('.profile__details__name');

profileSaveBtn.addEventListener('click', () => {
    const firstName = ElFirstName.value.trim();
    const lastName = profileLastName.value.trim();
    if (firstName === '' || lastName === '') {
        alert('Please enter both first name and last name.');
        return;
    }

    const fullName = `${firstName} ${lastName}`;
    elProfileDetailName.textContent = fullName;
    alert('Profile updated successfully!');
});