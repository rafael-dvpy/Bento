//  ┌┬┐┬ ┬┌─┐┌┬┐┌─┐
//  │ ├─┤├┤ │││├┤
//  ┴ ┴ ┴└─┘┴ ┴└─┘
// Set theme based on Configurations and Preferences

let darkTheme = localStorage.getItem('darkTheme');
const themeToggle = document.querySelector('#themeButton');
const bodyBackground = document.getElementById('#body');

setTheme();

function setTheme() { 
	const theme = CONFIG.theme;
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = `./assets/themes/${theme}.css`
	document.head.appendChild(link);
}

const enableDark = () => {
	document.body.classList.add('darktheme');
	localStorage.setItem('darkTheme', 'enabled');
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="sun"></i>`;
	lucide.createIcons();
};

const disableDark = () => {
	document.body.classList.remove('darktheme');
	localStorage.setItem('darkTheme', null);
	themeToggle.innerHTML = `<i id="themeButton__icon" icon-name="moon"></i>`;
	lucide.createIcons();
};

if (darkTheme === 'enabled') {
	document.body.classList.add('notransition');
	enableDark();
	document.body.classList.remove('notransition');
} else {
	disableDark();
}

themeToggle.addEventListener('click', () => {
	darkTheme = localStorage.getItem('darkTheme');
	if (darkTheme !== 'enabled') {
		enableDark();
	} else {
		disableDark();
	}
});

if (CONFIG.imageBackground) {
	const root = document.querySelector(':root');
	root.style.setProperty('--imgbg', `url(${CONFIG.imageUrl})`);
	document.body.classList.add('withImageBackground');
}

if (CONFIG.changeThemeByOS && CONFIG.autoChangeTheme) {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		enableDark();
	} else {
		disableDark();
	}
}

if (CONFIG.changeThemeByHour && CONFIG.autoChangeTheme && !CONFIG.changeThemeByOS) {
	const date = new Date();
	const hours = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString();
	const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
	const currentTime = hours + ':' + minutes;
	if (currentTime >= CONFIG.hourDarkThemeActive) {
		enableDark();
	} else if (currentTime >= CONFIG.hourDarkThemeInactive) {
		disableDark();
	}
}

// there may be a better way to do this &&
if (CONFIG.changeThemeByLocation && CONFIG.autoChangeTheme && !CONFIG.changeThemeByOS && !CONFIG.changeThemeByHour) {
  Promise.resolve(weatherPromise).then(weather => {
    const unix = Date.now() / 1000;
    if (
      unix >= weather.sunrise &&
      unix < weather.sunset
    ) {
      disableDark();
    } else {
      enableDark();
    }
  });
}